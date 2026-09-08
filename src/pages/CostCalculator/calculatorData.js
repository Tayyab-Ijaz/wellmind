/**
 * calculatorData.js — AI Cost Optimization Calculator
 * Reference data ported 1:1 from the standalone tool's backend JSON files
 * (ai_providers.json, assumptions.json, gpu_benchmarks.json, plan_prices.json,
 * usage_rates.json) so the calculator runs fully client-side — no backend needed.
 */

export const AI_PROVIDERS = {
  categories: [
    {
      category: 'Text / Chat AI',
      providers: [
        { provider: 'ChatGPT (OpenAI)', plans: ['Free', 'Plus', 'Team', 'Enterprise'] },
        { provider: 'Claude (Anthropic)', plans: ['Free', 'Pro', 'Team', 'Enterprise'] },
        { provider: 'Gemini (Google)', plans: ['Free', 'Google AI Pro', 'Google AI Ultra', 'Enterprise'] },
        { provider: 'Copilot (Microsoft)', plans: ['Free', 'Copilot Pro', 'Microsoft 365 Copilot'] },
        { provider: 'Perplexity', plans: ['Free', 'Pro', 'Enterprise'] },
        { provider: 'Grok (xAI)', plans: ['Free', 'Premium+', 'SuperGrok'] },
        { provider: 'Mistral Le Chat', plans: ['Free', 'Pro', 'Team', 'Enterprise'] },
        { provider: 'Meta AI', plans: ['Free'] },
        { provider: 'DeepSeek', plans: ['Free', 'API Pay-as-you-go'] },
        { provider: 'Poe', plans: ['Free', 'Pro'] },
      ],
    },
    {
      category: 'Image AI',
      providers: [
        { provider: 'Midjourney', plans: ['Basic', 'Standard', 'Pro', 'Mega'] },
        { provider: 'DALL-E (OpenAI)', plans: ['Included with ChatGPT Plus', 'API Pay-as-you-go'] },
        { provider: 'Stable Diffusion (Stability AI)', plans: ['Free (self-hosted)', 'API Pay-as-you-go', 'Enterprise'] },
        { provider: 'Adobe Firefly', plans: ['Free', 'Premium', 'Enterprise'] },
        { provider: 'Leonardo AI', plans: ['Free', 'Apprentice', 'Artisan', 'Maestro'] },
        { provider: 'Ideogram', plans: ['Free', 'Plus', 'Pro'] },
        { provider: 'Canva AI (Magic Studio)', plans: ['Free', 'Pro', 'Teams'] },
        { provider: 'Playground AI', plans: ['Free', 'Pro'] },
      ],
    },
    {
      category: 'Video AI',
      providers: [
        { provider: 'Runway', plans: ['Free', 'Standard', 'Pro', 'Enterprise'] },
        { provider: 'Sora (OpenAI)', plans: ['Included with ChatGPT Plus/Pro'] },
        { provider: 'Pika', plans: ['Free', 'Standard', 'Pro'] },
        { provider: 'Luma Dream Machine', plans: ['Free', 'Standard', 'Pro', 'Enterprise'] },
        { provider: 'Synthesia', plans: ['Free', 'Starter', 'Creator', 'Enterprise'] },
        { provider: 'HeyGen', plans: ['Free', 'Creator', 'Team', 'Enterprise'] },
        { provider: 'Kling AI', plans: ['Free', 'Standard', 'Pro', 'Premier'] },
        { provider: 'Google Veo', plans: ['Google AI Pro', 'Google AI Ultra'] },
      ],
    },
    {
      category: 'Code AI',
      providers: [
        { provider: 'GitHub Copilot', plans: ['Free', 'Pro', 'Pro+', 'Business', 'Enterprise'] },
        { provider: 'Cursor', plans: ['Hobby', 'Pro', 'Business'] },
        { provider: 'Amazon Q Developer', plans: ['Free', 'Pro'] },
        { provider: 'Tabnine', plans: ['Free', 'Pro', 'Enterprise'] },
        { provider: 'Replit AI', plans: ['Free', 'Core', 'Teams'] },
        { provider: 'Codeium / Windsurf', plans: ['Free', 'Pro', 'Teams', 'Enterprise'] },
        { provider: 'Sourcegraph Cody', plans: ['Free', 'Pro', 'Enterprise'] },
      ],
    },
    {
      category: 'Voice / Audio AI',
      providers: [
        { provider: 'ElevenLabs', plans: ['Free', 'Starter', 'Creator', 'Pro', 'Enterprise'] },
        { provider: 'Murf AI', plans: ['Free', 'Creator', 'Business', 'Enterprise'] },
        { provider: 'Descript', plans: ['Free', 'Creator', 'Pro', 'Enterprise'] },
        { provider: 'Resemble AI', plans: ['Free', 'Pro', 'Business'] },
        { provider: 'Play.ht', plans: ['Free', 'Creator', 'Pro', 'Enterprise'] },
      ],
    },
    {
      category: 'Enterprise AI Platforms',
      providers: [
        { provider: 'Azure OpenAI Service', plans: ['Pay-as-you-go', 'Provisioned Throughput'] },
        { provider: 'AWS Bedrock', plans: ['On-Demand', 'Provisioned Throughput'] },
        { provider: 'Google Vertex AI', plans: ['Pay-as-you-go', 'Enterprise'] },
        { provider: 'IBM watsonx', plans: ['Lite', 'Standard', 'Enterprise'] },
        { provider: 'Cohere', plans: ['Trial', 'Production', 'Enterprise'] },
        { provider: 'Hugging Face', plans: ['Free', 'Pro', 'Enterprise'] },
        { provider: 'Together AI', plans: ['Pay-as-you-go', 'Enterprise'] },
        { provider: 'Fireworks AI', plans: ['Pay-as-you-go', 'Enterprise'] },
        { provider: 'Groq', plans: ['Pay-as-you-go', 'Enterprise'] },
        { provider: 'NVIDIA NIM', plans: ['Free (dev)', 'Enterprise'] },
        { provider: 'Oracle OCI AI', plans: ['Pay-as-you-go', 'Enterprise'] },
      ],
    },
  ],
};

// Providers with a metered pay-as-you-go tier — bills can be reverse-calculated
// into real usage volume. Anything not here is flat-subscription.
export const USAGE_RATES = {
  'Azure OpenAI Service': { unit: 'tokens', price_per_1k_input_tokens: 0.005, price_per_1k_output_tokens: 0.015, input_ratio: 0.6 },
  'AWS Bedrock': { unit: 'tokens', price_per_1k_input_tokens: 0.003, price_per_1k_output_tokens: 0.015, input_ratio: 0.6 },
  'Google Vertex AI': { unit: 'tokens', price_per_1k_input_tokens: 0.00125, price_per_1k_output_tokens: 0.005, input_ratio: 0.6 },
  'Cohere': { unit: 'tokens', price_per_1k_input_tokens: 0.0015, price_per_1k_output_tokens: 0.002, input_ratio: 0.6 },
  'Together AI': { unit: 'tokens', price_per_1k_input_tokens: 0.0009, price_per_1k_output_tokens: 0.0009, input_ratio: 0.6 },
  'Fireworks AI': { unit: 'tokens', price_per_1k_input_tokens: 0.0009, price_per_1k_output_tokens: 0.0009, input_ratio: 0.6 },
  'Groq': { unit: 'tokens', price_per_1k_input_tokens: 0.0005, price_per_1k_output_tokens: 0.0008, input_ratio: 0.6 },
  'Oracle OCI AI': { unit: 'tokens', price_per_1k_input_tokens: 0.003, price_per_1k_output_tokens: 0.012, input_ratio: 0.6 },
  'DeepSeek': { unit: 'tokens', price_per_1k_input_tokens: 0.00014, price_per_1k_output_tokens: 0.00028, input_ratio: 0.6 },
  'DALL-E (OpenAI)': { unit: 'images', price_per_image: 0.04 },
  'Stable Diffusion (Stability AI)': { unit: 'images', price_per_image: 0.02 },
};

// Fallback per-seat/month prices — used only when there's no 3-month billing history.
export const PLAN_PRICES = {
  'ChatGPT (OpenAI)': { Free: 0, Plus: 20, Team: 30, Enterprise: 60 },
  'Claude (Anthropic)': { Free: 0, Pro: 20, Team: 30, Enterprise: 60 },
  'Gemini (Google)': { Free: 0, 'Google AI Pro': 20, 'Google AI Ultra': 250 },
  'Copilot (Microsoft)': { Free: 0, 'Copilot Pro': 20, 'Microsoft 365 Copilot': 30 },
  'GitHub Copilot': { Free: 0, Pro: 10, 'Pro+': 39, Business: 19, Enterprise: 39 },
  'Cursor': { Hobby: 0, Pro: 20, Business: 40 },
  'Perplexity': { Free: 0, Pro: 20, Enterprise: 40 },
  'Midjourney': { Basic: 10, Standard: 30, Pro: 60, Mega: 120 },
};

// max_concurrent_users — how many people can realistically be served at once
// (memory/context-window bound) before requests start queuing, independent of
// raw monthly volume. Without this, a single RTX 4090 mathematically "covers"
// almost any team's monthly request total, so it kept winning on price alone
// regardless of team size. This keeps the recommendation responsive to team
// size, not just aggregate volume.
//
// max_practical_units — a hard ceiling on how many cards of this tier it's
// realistic to recommend in one deployment. RTX 4090 is a consumer desktop
// card: no ECC memory, no NVLink, poor rack density/cooling — nobody racks up
// thousands of them. Without this cap, RTX 4090 is cheaper per unit of BOTH
// volume and concurrency than every data-center tier, so the "minimize total
// hardware cost" search kept recommending it (just buy more!) at every scale,
// which is why the same GPU showed up even at 100,000 users. Capping units
// per tier forces the engine to escalate to A100 / H100 as team size grows,
// matching how real deployments are actually built. `null` = no practical
// ceiling (top tier is designed to scale out via NVLink/InfiniBand).
export const GPU_TIERS = [
  { tier: 'RTX 4090', capacity_per_gpu_monthly_requests: 50000, max_concurrent_users: 12, max_practical_units: 16, purchase_price_usd: 1800, power_draw_watts: 450, source: 'manufacturer MSRP / retail — illustrative, verify before production use', last_verified: '2026-08-13' },
  { tier: 'A100 PCIe (80GB)', capacity_per_gpu_monthly_requests: 250000, max_concurrent_users: 50, max_practical_units: 64, purchase_price_usd: 10500, power_draw_watts: 400, source: 'manufacturer MSRP / retail — illustrative, verify before production use', last_verified: '2026-08-13' },
  { tier: 'H100 PCIe', capacity_per_gpu_monthly_requests: 600000, max_concurrent_users: 120, max_practical_units: null, purchase_price_usd: 28000, power_draw_watts: 700, source: 'manufacturer MSRP / retail — illustrative, verify before production use', last_verified: '2026-08-13' },
];

export const ASSUMPTIONS = {
  avg_queries_per_user_per_day: 15,
  avg_tokens_per_query: 1500,
  working_days_per_month: 22,
  electricity_rate_usd_per_kwh: 0.1351,
  maintenance_percent_annual: 10,
  hours_running_per_month: 720,
};
