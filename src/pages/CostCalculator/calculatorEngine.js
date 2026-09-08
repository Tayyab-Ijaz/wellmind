/**
 * calculatorEngine.js — ports the original FastAPI `/calculate` endpoint logic
 * to run entirely client-side. Same math, same cases, same field names as the
 * standalone backend — see backend/main.py in the source tool for the original.
 */
import { USAGE_RATES, PLAN_PRICES, GPU_TIERS, ASSUMPTIONS } from './calculatorData';

export function calculate({ teamSize, provider, plan, bills, useFallback }) {
  const tokensPerQuery = ASSUMPTIONS.avg_tokens_per_query;
  const qPerDay = ASSUMPTIONS.avg_queries_per_user_per_day;
  const workingDays = ASSUMPTIONS.working_days_per_month;
  const benchmarkRequests = teamSize * qPerDay * workingDays;
  const benchmarkTokens = benchmarkRequests * tokensPerQuery;

  const usageRate = USAGE_RATES[provider] || null;
  const hasBills = !useFallback && bills.m1 !== '' && bills.m2 !== '' && bills.m3 !== '';

  let currentMonthlyCost, costSource, estMonthlyRequests, estMonthlyTokens = null;
  let usageConfidence, usageSourceNote;

  if (hasBills) {
    const avgPerPersonBill = (Number(bills.m1) + Number(bills.m2) + Number(bills.m3)) / 3;
    currentMonthlyCost = avgPerPersonBill * teamSize;
    costSource = 'billing_average';

    if (usageRate) {
      if (usageRate.unit === 'tokens') {
        const ratio = usageRate.input_ratio;
        const blended = ratio * usageRate.price_per_1k_input_tokens + (1 - ratio) * usageRate.price_per_1k_output_tokens;
        estMonthlyTokens = (currentMonthlyCost / blended) * 1000;
        estMonthlyRequests = estMonthlyTokens / tokensPerQuery;
      } else {
        estMonthlyRequests = currentMonthlyCost / usageRate.price_per_image;
      }
      usageConfidence = 'actual_from_billing';
      usageSourceNote = `Calculated from your real billing at ${provider}'s published rate.`;
    } else {
      estMonthlyRequests = benchmarkRequests;
      estMonthlyTokens = benchmarkTokens;
      usageConfidence = 'estimated_flat_subscription';
      usageSourceNote = `${provider} bills a flat rate, so usage is projected from typical benchmarks.`;
    }
  } else if (usageRate) {
    estMonthlyRequests = benchmarkRequests;
    if (usageRate.unit === 'tokens') {
      estMonthlyTokens = benchmarkTokens;
      const ratio = usageRate.input_ratio;
      const blended = ratio * usageRate.price_per_1k_input_tokens + (1 - ratio) * usageRate.price_per_1k_output_tokens;
      currentMonthlyCost = (benchmarkTokens / 1000) * blended;
    } else {
      currentMonthlyCost = benchmarkRequests * usageRate.price_per_image;
    }
    costSource = 'benchmark_projection_usage_based';
    usageConfidence = 'projected_benchmark_new_user';
    usageSourceNote = `Projected from typical usage, priced at ${provider}'s real per-use rate.`;
  } else if (plan) {
    const price = PLAN_PRICES[provider]?.[plan];
    if (price === undefined) {
      throw new Error(`No fallback price found for ${provider} / ${plan}`);
    }
    currentMonthlyCost = teamSize * price;
    costSource = 'plan_price_fallback';
    estMonthlyRequests = benchmarkRequests;
    estMonthlyTokens = benchmarkTokens;
    usageConfidence = 'projected_benchmark_new_user';
    usageSourceNote = 'Projected from typical usage benchmarks for this category.';
  } else {
    throw new Error(
      usageRate
        ? `${provider} is pay-as-you-go, so just team size is enough — no plan needed.`
        : 'Provide either 3 months of bills or a fallback plan.'
    );
  }

  // Size hardware to workload — pick whichever tier minimizes total purchase cost,
  // while satisfying BOTH the monthly request volume AND how many people need to
  // be served concurrently (a team of 100 needs more parallel headroom than a
  // team of 4, even if their monthly totals are similar).
  // Among tiers that can PRACTICALLY be deployed at this scale (i.e. the unit
  // count needed doesn't blow past that tier's max_practical_units), pick the
  // cheapest total hardware cost. If a team is so large that even the
  // top (uncapped) tier is the only one left standing, that's expected —
  // it's the tier built to scale out. See the comment above GPU_TIERS.
  let bestTier = null, bestGpuCount = null, bestHardwareCost = null;
  for (const tier of GPU_TIERS) {
    const gpuForVolume = Math.ceil(estMonthlyRequests / tier.capacity_per_gpu_monthly_requests);
    const gpuForConcurrency = Math.ceil(teamSize / tier.max_concurrent_users);
    const gpuCount = Math.max(1, gpuForVolume, gpuForConcurrency);
    if (tier.max_practical_units !== null && gpuCount > tier.max_practical_units) continue;
    const hardwareCost = gpuCount * tier.purchase_price_usd;
    if (bestHardwareCost === null || hardwareCost < bestHardwareCost) {
      bestTier = tier; bestGpuCount = gpuCount; bestHardwareCost = hardwareCost;
    }
  }
  // Fallback (should only trigger if every tier were capped and all exceeded —
  // won't happen today since the top tier has no cap, but kept for safety).
  if (bestTier === null) {
    const tier = GPU_TIERS[GPU_TIERS.length - 1];
    const gpuForVolume = Math.ceil(estMonthlyRequests / tier.capacity_per_gpu_monthly_requests);
    const gpuForConcurrency = Math.ceil(teamSize / tier.max_concurrent_users);
    bestTier = tier; bestGpuCount = Math.max(1, gpuForVolume, gpuForConcurrency); bestHardwareCost = bestGpuCount * tier.purchase_price_usd;
  }
  const chosenTier = bestTier, gpuCount = bestGpuCount, hardwarePurchaseCost = bestHardwareCost;

  const pretrainingCost = 3000; // setup_cost default, matches original backend default
  const hoursPerMonth = ASSUMPTIONS.hours_running_per_month;
  const electricityRate = ASSUMPTIONS.electricity_rate_usd_per_kwh;
  const powerKwTotal = (chosenTier.power_draw_watts * gpuCount) / 1000;
  const electricityCostMonthly = powerKwTotal * hoursPerMonth * electricityRate;
  const maintenancePct = ASSUMPTIONS.maintenance_percent_annual / 100;
  const maintenanceCostMonthly = (hardwarePurchaseCost * maintenancePct) / 12;

  const selfHostedMonthlyRecurring = electricityCostMonthly + maintenanceCostMonthly;
  const oneTimeInvestment = hardwarePurchaseCost + pretrainingCost;

  const year1SelfHostedTotal = oneTimeInvestment + selfHostedMonthlyRecurring * 12;
  const year2OnwardsSelfHostedTotal = selfHostedMonthlyRecurring * 12;
  const year1CloudTotal = currentMonthlyCost * 12;
  const year2OnwardsCloudTotal = currentMonthlyCost * 12;

  const monthlySavingsAfterSwitch = currentMonthlyCost - selfHostedMonthlyRecurring;
  const annualSavingsYear2Onwards = monthlySavingsAfterSwitch * 12;
  const paybackMonths = monthlySavingsAfterSwitch > 0 ? oneTimeInvestment / monthlySavingsAfterSwitch : null;

  const r = (n, d = 2) => Math.round(n * 10 ** d) / 10 ** d;

  return {
    current_monthly_cost: r(currentMonthlyCost),
    cost_source: costSource,
    estimated_monthly_requests: Math.round(estMonthlyRequests),
    estimated_monthly_tokens: estMonthlyTokens !== null ? Math.round(estMonthlyTokens) : null,
    usage_confidence: usageConfidence,
    usage_source_note: usageSourceNote,
    recommended_gpu_tier: chosenTier.tier,
    recommended_gpu_count: gpuCount,
    hardware_purchase_cost: r(hardwarePurchaseCost),
    pretraining_cost: r(pretrainingCost),
    one_time_investment: r(oneTimeInvestment),
    self_hosted_monthly_recurring: r(selfHostedMonthlyRecurring),
    comparison: {
      cloud_year1_total: r(year1CloudTotal),
      cloud_year2_onwards_annual: r(year2OnwardsCloudTotal),
      self_hosted_year1_total: r(year1SelfHostedTotal),
      self_hosted_year2_onwards_annual: r(year2OnwardsSelfHostedTotal),
    },
    monthly_savings_after_switch: r(monthlySavingsAfterSwitch),
    annual_savings_year2_onwards: r(annualSavingsYear2Onwards),
    payback_period_months: paybackMonths ? r(paybackMonths, 1) : null,
    calculation_sources: {
      usage_rate_provider_rate: usageRate,
      tokens_per_query: tokensPerQuery,
      gpu_purchase_price: chosenTier.purchase_price_usd,
      gpu_capacity_per_unit_monthly_requests: chosenTier.capacity_per_gpu_monthly_requests,
      electricity_rate_per_kwh: electricityRate,
      maintenance_percent_annual: ASSUMPTIONS.maintenance_percent_annual,
      gpu_data_source: chosenTier.source,
      gpu_price_last_verified: chosenTier.last_verified,
    },
  };
}
