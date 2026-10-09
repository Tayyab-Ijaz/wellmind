/**
 * CostCalculator.jsx — AI ROI / Cost Optimization Calculator
 * ─────────────────────────────────────────────────────────────────────────────
 * Runs fully client-side (see calculatorEngine.js) — nothing is sent anywhere.
 *
 * Layout (all responsive, class-driven — see the CSS string at the bottom):
 *   1. Hero            – value proposition + key trust points
 *   2. How it works    – 3 short steps
 *   3. Calculator      – form (left)  +  live results (right, sticky on desktop)
 *   4. Methodology     – what the numbers are based on
 *   5. FAQ
 *   6. CTA
 */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator, Users, Cpu, DollarSign, TrendingDown, ArrowRight, Zap, Info,
  CheckCircle2, AlertCircle, Sparkles, Clock, ChevronDown, ShieldCheck,
  Server, RotateCcw, Lock,
} from 'lucide-react';
import { fadeUp, SectionBadge } from '../../theme';
import { HeroGridBg } from '../../components/BgGrid';
import { AI_PROVIDERS, USAGE_RATES } from './calculatorData';
import { calculate } from './calculatorEngine';
import aiRoiHero from '../../assets/ai-roi-calculator.webp';

/* ─── helpers ──────────────────────────────────────────────────────────────── */
const fmt = (n) => `$${Number(n).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
const fmtCompact = (n) => {
  const a = Math.abs(n);
  if (a >= 1e6) return `$${(n / 1e6).toFixed(a >= 1e7 ? 0 : 1)}M`;
  if (a >= 1e3) return `$${(n / 1e3).toFixed(a >= 1e4 ? 0 : 1)}k`;
  return `$${Math.round(n)}`;
};

/* ─── form pieces ──────────────────────────────────────────────────────────── */
function Field({ label, hint, children, htmlFor }) {
  return (
    <div className="roi-field">
      <label className="roi-label" htmlFor={htmlFor}>{label}</label>
      {children}
      {hint && <p className="roi-hint">{hint}</p>}
    </div>
  );
}

function Select({ id, children, ...rest }) {
  return (
    <div className="roi-select">
      <select id={id} className="roi-input" {...rest}>{children}</select>
      <ChevronDown size={16} aria-hidden="true" />
    </div>
  );
}

function StepHead({ n, title, sub }) {
  return (
    <div className="roi-step-head">
      <span className="roi-step-num">{n}</span>
      <div>
        <h3>{title}</h3>
        {sub && <p>{sub}</p>}
      </div>
    </div>
  );
}

/* ─── 3-year cumulative cost chart (responsive SVG, no chart library) ───────── */
function useWidth(ref) {
  const [w, setW] = useState(560);
  useEffect(() => {
    if (!ref.current) return undefined;
    const ro = new ResizeObserver(([e]) => setW(Math.max(240, Math.round(e.contentRect.width))));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
  return w;
}

function CostChart({ cloudMonthly, oneTime, recurring, payback }) {
  const box = useRef(null);
  const W = useWidth(box);
  const H = Math.max(200, Math.min(280, Math.round(W * 0.55)));
  const pl = 48, pr = 14, pt = 14, pb = 30, months = 36;

  const cloudEnd = cloudMonthly * months;
  const selfEnd = oneTime + recurring * months;
  const maxV = Math.max(cloudEnd, selfEnd, 1) * 1.08;
  const x = (m) => pl + (m / months) * (W - pl - pr);
  const y = (v) => pt + (1 - v / maxV) * (H - pt - pb);
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => t * maxV);
  const showBE = payback && payback <= months;

  return (
    <div ref={box} className="roi-chart">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} role="img"
        aria-label="Cumulative cost over 36 months: cloud subscription versus self-hosted">
        {yTicks.map((v, i) => (
          <g key={i}>
            <line x1={pl} x2={W - pr} y1={y(v)} y2={y(v)} stroke="rgba(0,0,0,0.08)" />
            <text x={pl - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="rgba(0,0,0,0.55)">{fmtCompact(v)}</text>
          </g>
        ))}
        {[0, 12, 24, 36].map((m) => (
          <text key={m} x={x(m)} y={H - 8} textAnchor={m === 0 ? 'start' : m === 36 ? 'end' : 'middle'} fontSize="11" fill="rgba(0,0,0,0.55)">
            {m === 0 ? 'Now' : `${m} mo`}
          </text>
        ))}
        <polygon fill="rgba(0,0,0,0.05)"
          points={`${x(0)},${y(oneTime)} ${x(months)},${y(selfEnd)} ${x(months)},${y(0)} ${x(0)},${y(0)}`} />
        <line x1={x(0)} y1={y(0)} x2={x(months)} y2={y(cloudEnd)} stroke="#9a9a9a" strokeWidth="2.5" strokeDasharray="6 5" strokeLinecap="round" />
        <line x1={x(0)} y1={y(oneTime)} x2={x(months)} y2={y(selfEnd)} stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        {showBE && (
          <g>
            <line x1={x(payback)} x2={x(payback)} y1={y(cloudMonthly * payback)} y2={H - pb} stroke="rgba(0,0,0,0.35)" strokeDasharray="3 3" />
            <circle cx={x(payback)} cy={y(cloudMonthly * payback)} r="6" fill="#fff" stroke="#000" strokeWidth="2.5" />
          </g>
        )}
      </svg>
      <div className="roi-legend">
        <span><i style={{ background: '#9a9a9a' }} />Cloud subscription</span>
        <span><i style={{ background: '#000' }} />Self-hosted (incl. hardware)</span>
        {showBE && <span><i className="ring" />Break-even · month {Math.ceil(payback)}</span>}
      </div>
    </div>
  );
}

/* ─── results ──────────────────────────────────────────────────────────────── */
function Kpi({ icon, label, value, sub }) {
  return (
    <div className="roi-kpi">
      <div className="roi-kpi-top"><span className="roi-kpi-icon">{icon}</span><span>{label}</span></div>
      <strong>{value}</strong>
      {sub && <em>{sub}</em>}
    </div>
  );
}

function Results({ result }) {
  const c = result.comparison;
  const cloudAnnual = c.cloud_year2_onwards_annual;
  const selfAnnual = c.self_hosted_year2_onwards_annual;
  const pct = cloudAnnual > 0 ? Math.round(((cloudAnnual - selfAnnual) / cloudAnnual) * 100) : null;
  const saves = pct !== null && pct > 0;
  const threeYearDelta = (result.current_monthly_cost * 36) - (result.one_time_investment + result.self_hosted_monthly_recurring * 36);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
      <div className="roi-headline">
        <span className="roi-eyebrow">{pct === null ? 'Result' : saves ? 'Projected annual saving (year 2+)' : 'Projected change (year 2+)'}</span>
        {pct === null ? (
          <div className="roi-big">No cloud spend</div>
        ) : (
          <div className="roi-big">{saves ? `${pct}%` : `${Math.abs(pct)}% more`}</div>
        )}
        <p>
          {pct === null
            ? 'Your current spend is $0, so there is nothing to offset — self-hosting only makes sense for privacy or control.'
            : saves
              ? <>That is <b>{fmt(result.annual_savings_year2_onwards)}</b> a year{result.payback_period_months ? <>, with the hardware paid back in <b>{result.payback_period_months} months</b></> : null}.</>
              : 'At this usage level the cloud subscription is cheaper than running your own hardware.'}
        </p>
      </div>

      {result.usage_source_note && (
        <div className="roi-note">
          <CheckCircle2 size={14} /> <span>{result.usage_source_note}</span>
        </div>
      )}

      <div className="roi-kpis">
        <Kpi icon={<DollarSign size={14} />} label="Cloud / month" value={fmt(result.current_monthly_cost)} />
        <Kpi icon={<Cpu size={14} />} label="Self-hosted / month" value={fmt(result.self_hosted_monthly_recurring)} sub="power + maintenance" />
        <Kpi icon={<Server size={14} />} label="One-time investment" value={fmt(result.one_time_investment)} sub="hardware + setup" />
        <Kpi icon={<Clock size={14} />} label="Payback period" value={result.payback_period_months ? `${result.payback_period_months} mo` : 'N/A'} />
      </div>

      <div className="roi-card-inner">
        <div className="roi-card-title">
          <span>Cumulative cost over 3 years</span>
          <b className={threeYearDelta >= 0 ? 'pos' : 'neg'}>
            {threeYearDelta >= 0 ? 'Saves ' : 'Costs '}{fmtCompact(Math.abs(threeYearDelta))}
          </b>
        </div>
        <CostChart
          cloudMonthly={result.current_monthly_cost}
          oneTime={result.one_time_investment}
          recurring={result.self_hosted_monthly_recurring}
          payback={result.payback_period_months}
        />
      </div>

      <div className="roi-card-inner roi-table-wrap">
        <table>
          <thead>
            <tr><th /><th>Cloud API</th><th>Self-hosted</th></tr>
          </thead>
          <tbody>
            <tr><td>Year 1 total</td><td>{fmt(c.cloud_year1_total)}</td><td className="accent">{fmt(c.self_hosted_year1_total)}</td></tr>
            <tr><td>Year 2+ (per year)</td><td>{fmt(cloudAnnual)}</td><td className="accent">{fmt(selfAnnual)}</td></tr>
          </tbody>
        </table>
      </div>

      <div className="roi-hardware">
        <Server size={18} />
        <p>
          Recommended hardware: <b>{result.recommended_gpu_tier} × {result.recommended_gpu_count}</b>
          <span> — sized for about {result.estimated_monthly_requests.toLocaleString()} requests per month.</span>
        </p>
      </div>

      <Link to="/book-discovery" className="btn-primary roi-full">
        Discuss this with our team <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}

/* ─── static content ───────────────────────────────────────────────────────── */
const STEPS = [
  { icon: <Users size={20} />, title: 'Describe your setup', text: 'Team size, the AI provider you pay for today, and either your last 3 bills or your plan.' },
  { icon: <Cpu size={20} />, title: 'We size the hardware', text: 'Usage is converted to requests per month and matched to the cheapest GPU tier that can carry the load.' },
  { icon: <TrendingDown size={20} />, title: 'See your break-even', text: 'Compare 3 years of cloud spend with self-hosting, including power, maintenance and setup.' },
];

const FAQ = [
  { q: 'How accurate are these numbers?', a: 'They are planning estimates built from published provider pricing, manufacturer GPU specs and typical usage benchmarks. If you enter your last three bills, usage is derived from your real spend; otherwise we use industry benchmarks. Always validate against current vendor quotes before buying hardware.' },
  { q: 'What is included in the self-hosted cost?', a: 'GPU hardware, a one-time setup / model-deployment allowance, electricity for the hardware you need, and an annual maintenance allowance. Staff time for ongoing operations is not included.' },
  { q: 'Is my data stored or sent anywhere?', a: 'No. The calculation runs entirely in your browser. Nothing you type is transmitted or saved.' },
  { q: 'When does self-hosting NOT make sense?', a: 'For very small teams, light usage, or flat-rate plans that are already cheap, the payback period can be long or never arrive. The calculator will tell you when the cloud option is the better deal.' },
];

const METHOD = [
  ['Cloud cost', "Your real average bill × team size — or, for new teams, plan price × users (flat plans) or benchmark usage × the provider's published per-token / per-image rate."],
  ['Hardware sizing', 'We pick the lowest-cost GPU tier that satisfies both your monthly request volume and the number of people who need to be served at the same time.'],
  ['Self-hosted cost', 'One-time: GPUs plus a setup allowance. Recurring: electricity for the hardware you need, plus an annual maintenance allowance.'],
  ['Break-even', 'One-time investment ÷ (cloud monthly cost − self-hosted monthly cost). If self-hosting is not cheaper, no payback is shown.'],
];

/* ═════════════════════════════════ PAGE ═════════════════════════════════════ */
export default function CostCalculator() {
  const [teamSize, setTeamSize] = useState('');
  const [category, setCategory] = useState('');
  const [provider, setProvider] = useState('');
  const [useFallback, setUseFallback] = useState(false);
  const [plan, setPlan] = useState('');
  const [bills, setBills] = useState({ m1: '', m2: '', m3: '' });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const resultsRef = useRef(null);

  const providersInCategory = AI_PROVIDERS.categories.find((c) => c.category === category)?.providers || [];
  const selectedProvider = providersInCategory.find((p) => p.provider === provider);
  const isUsageBased = !!USAGE_RATES[provider];
  const availablePlans = selectedProvider?.plans?.filter((p) => !/free|included/i.test(p)) || [];

  const teamOk = Number(teamSize) >= 1;
  const billsFilled = [bills.m1, bills.m2, bills.m3].filter((v) => v !== '').length;
  const billsOk = billsFilled === 3 || (billsFilled === 0 && isUsageBased);
  const canCalculate = teamOk && !!provider && (useFallback ? (isUsageBased || !!plan) : billsOk);

  function handleCalculate() {
    setError('');
    setResult(null);
    try {
      const r = calculate({ teamSize: Math.floor(Number(teamSize)), provider, plan, bills, useFallback });
      setResult(r);
      // On phones the results sit below the form — bring them into view.
      if (window.matchMedia('(max-width: 960px)').matches) {
        requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
    } catch (e) {
      setError(e.message);
    }
  }

  function handleReset() {
    setTeamSize(''); setCategory(''); setProvider(''); setPlan('');
    setBills({ m1: '', m2: '', m3: '' }); setUseFallback(false);
    setResult(null); setError('');
  }

  const setBill = (k) => (e) => setBills((b) => ({ ...b, [k]: e.target.value }));

  return (
    <div className="roi-page">
      {/* ══ 1. HERO ══ */}
      <section className="roi-hero">
        <HeroGridBg uid="CalcHero" opacity={0.30} />
        <div className="roi-wrap roi-hero-grid">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge><Calculator size={12} /> Free interactive tool</SectionBadge>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.05} className="roi-h1">
              What is your AI stack <span>really costing you?</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.15} className="roi-lead">
              Enter your team size and current AI provider. We estimate your real monthly spend, size the self-hosted hardware you would need, and show your break-even point.
            </motion.p>
            <motion.div variants={fadeUp} custom={0.25} className="roi-hero-cta">
              <a href="#roi-calculator" className="btn-primary">Start calculating <ArrowRight size={16} /></a>
              <Link to="/book-discovery" className="btn-outline-action">Talk to an expert</Link>
            </motion.div>
            <motion.ul variants={fadeUp} custom={0.35} className="roi-trust">
              <li><Lock size={15} /> Runs in your browser</li>
              <li><ShieldCheck size={15} /> No sign-up or email</li>
              <li><Zap size={15} /> Results in seconds</li>
            </motion.ul>
          </motion.div>

          <motion.div className="roi-hero-visual" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <img src={aiRoiHero} alt="AI ROI cost comparison illustration" decoding="async" />
          </motion.div>
        </div>
      </section>

      {/* ══ 2. HOW IT WORKS ══ */}
      <section className="roi-steps-sec">
        <div className="roi-wrap">
          <ol className="roi-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="roi-steps-icon">{s.icon}</span>
                <div>
                  <small>Step {i + 1}</small>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ 3. CALCULATOR ══ */}
      <section className="roi-calc-sec" id="roi-calculator">
        <div className="roi-wrap">
          <div className="roi-section-head">
            <h2>Run your numbers</h2>
            <p>Takes about a minute. Your comparison updates on the right as soon as you calculate.</p>
          </div>

          <div className="roi-calc">
            {/* — form — */}
            <div className="roi-panel">
              <StepHead n="1" title="Your team" sub="How many people use AI tools today?" />
              <Field label="Number of users" htmlFor="roi-team">
                <input id="roi-team" className="roi-input" type="number" inputMode="numeric" min="1" step="1" placeholder="e.g. 10"
                  value={teamSize} onChange={(e) => setTeamSize(e.target.value)} />
              </Field>

              <StepHead n="2" title="Your provider" sub="Which AI service do you pay for?" />
              <Field label="AI category" htmlFor="roi-cat">
                <Select id="roi-cat" value={category} onChange={(e) => { setCategory(e.target.value); setProvider(''); setPlan(''); }}>
                  <option value="">Select a category…</option>
                  {AI_PROVIDERS.categories.map((c) => <option key={c.category} value={c.category}>{c.category}</option>)}
                </Select>
              </Field>
              <Field label="Provider" htmlFor="roi-prov">
                <Select id="roi-prov" value={provider} disabled={!category} onChange={(e) => { setProvider(e.target.value); setPlan(''); }}>
                  <option value="">Select a provider…</option>
                  {providersInCategory.map((p) => <option key={p.provider} value={p.provider}>{p.provider}</option>)}
                </Select>
              </Field>

              <StepHead n="3" title="Your current spend" sub={useFallback ? 'No billing history? Pick your plan instead.' : 'Average monthly bill per person, last 3 months.'} />
              <AnimatePresence mode="wait" initial={false}>
                {!useFallback ? (
                  <motion.div key="bills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Field
                      label="Monthly bill per person (USD)"
                      hint={billsFilled > 0 && billsFilled < 3 ? 'Enter all three months, or clear them to use a plan instead.' : isUsageBased ? 'Optional for pay-as-you-go providers.' : undefined}
                    >
                      <div className="roi-bills">
                        <input className="roi-input" type="number" inputMode="decimal" min="0" placeholder="Month 1" aria-label="Month 1 bill" value={bills.m1} onChange={setBill('m1')} />
                        <input className="roi-input" type="number" inputMode="decimal" min="0" placeholder="Month 2" aria-label="Month 2 bill" value={bills.m2} onChange={setBill('m2')} />
                        <input className="roi-input" type="number" inputMode="decimal" min="0" placeholder="Month 3" aria-label="Month 3 bill" value={bills.m3} onChange={setBill('m3')} />
                      </div>
                    </Field>
                    <button type="button" className="roi-link" onClick={() => setUseFallback(true)}>
                      New company or not sure? Pick a plan instead →
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="plan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                    {isUsageBased ? (
                      <div className="roi-info">
                        <Info size={15} />
                        <span>{provider} is pay-as-you-go, so there is no plan to pick. Team size is enough — usage is estimated from an industry benchmark and priced at {provider}'s real per-use rate.</span>
                      </div>
                    ) : (
                      <Field label="Plan you are on" htmlFor="roi-plan">
                        <Select id="roi-plan" value={plan} disabled={!provider} onChange={(e) => setPlan(e.target.value)}>
                          <option value="">Select a plan…</option>
                          {availablePlans.map((p) => <option key={p} value={p}>{p}</option>)}
                        </Select>
                      </Field>
                    )}
                    <button type="button" className="roi-link" onClick={() => setUseFallback(false)}>
                      ← I have my last 3 months' bills instead
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="roi-actions">
                <button type="button" className="btn-primary roi-calc-btn" onClick={handleCalculate} disabled={!canCalculate}>
                  <Zap size={17} /> Calculate my savings
                </button>
                <button type="button" className="roi-reset" onClick={handleReset} aria-label="Reset form" title="Reset">
                  <RotateCcw size={16} />
                </button>
              </div>

              {error && (
                <div className="roi-error" role="alert"><AlertCircle size={16} /> <span>{error}</span></div>
              )}
            </div>

            {/* — results — */}
            <div className="roi-panel roi-results" ref={resultsRef}>
              <div className="roi-results-head">
                <span className="roi-results-icon"><TrendingDown size={18} /></span>
                <h3>Your savings breakdown</h3>
              </div>
              {!result ? (
                <div className="roi-empty">
                  <span><Sparkles size={22} /></span>
                  <p>Fill in your team size and provider, then press <b>Calculate</b> — your cost comparison will appear here.</p>
                </div>
              ) : (
                <Results result={result} />
              )}
            </div>
          </div>

          <p className="roi-disclaimer">
            <Info size={13} />
            <span>Figures are illustrative estimates based on published pricing and manufacturer specs. Verify current rates before making a purchasing decision. This tool does not store or transmit your inputs.</span>
          </p>
        </div>
      </section>

      {/* ══ 4. METHODOLOGY ══ */}
      <section className="roi-method-sec">
        <div className="roi-wrap">
          <div className="roi-section-head">
            <h2>How we calculate it</h2>
            <p>Transparent assumptions, so you can sanity-check every line.</p>
          </div>
          <div className="roi-method">
            {METHOD.map(([t, d]) => (
              <div key={t} className="roi-method-card"><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. FAQ ══ */}
      <section className="roi-faq-sec">
        <div className="roi-wrap roi-faq-wrap">
          <div className="roi-section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <div className="roi-faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<ChevronDown size={18} aria-hidden="true" /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. CTA ══ */}
      <section className="roi-cta-sec">
        <div className="roi-wrap">
          <div className="roi-cta">
            <h2>We'll help you read the numbers.</h2>
            <p>Book a free 30-minute call. We'll walk through your stack, team size and growth plans — an honest read on whether self-hosting makes sense for you yet, with no sales pitch.</p>
            <Link to="/book-discovery" className="roi-cta-btn">
              <Zap size={16} /> Book your free consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style>{CSS}</style>
    </div>
  );
}

/* ═══════════════════════════════ STYLES ═════════════════════════════════════
   Plain CSS so breakpoints actually work — the previous version used inline
   grid styles that media queries couldn't override.
   Breakpoints: 1100 (method grid), 960 (stack calculator), 900 (stack hero), 640, 420.
   ───────────────────────────────────────────────────────────────────────── */
const CSS = `
.roi-page{background:#fff;color:#000;font-family:var(--font-main);overflow-x:clip;position:relative}
.roi-page *{box-sizing:border-box}
.roi-wrap{width:100%;max-width:1240px;margin:0 auto;padding:0 clamp(16px,4vw,40px)}
.roi-section-head{text-align:center;max-width:680px;margin:0 auto clamp(24px,4vw,44px)}
.roi-section-head h2{font-size:clamp(1.55rem,3.4vw,2.4rem);font-weight:800;letter-spacing:-.02em;line-height:1.15;margin:0 0 10px}
.roi-section-head p{color:rgba(0,0,0,.62);font-size:clamp(.92rem,1.4vw,1.05rem);line-height:1.6;margin:0}

/* hero */
.roi-hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#fff 0%,#fff 55%,#f3f3f3 100%);
  padding:calc(66px + clamp(32px,6vw,84px)) 0 clamp(40px,6vw,84px)}
.roi-hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,1.02fr) minmax(0,.98fr);gap:clamp(24px,4.5vw,72px);align-items:center}
.roi-h1{font-family:var(--font-main);font-weight:800;letter-spacing:-.03em;line-height:1.08;font-size:clamp(2rem,4.6vw,3.7rem);margin:0 0 clamp(14px,2vw,22px)}
.roi-h1 span{background:linear-gradient(90deg,#000 20%,#777 85%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.roi-lead{color:rgba(0,0,0,.7);font-size:clamp(.98rem,1.5vw,1.2rem);line-height:1.65;max-width:560px;margin:0 0 clamp(20px,3vw,30px)}
.roi-hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:clamp(20px,3vw,28px)}
.roi-trust{display:flex;flex-wrap:wrap;gap:10px 22px;list-style:none;margin:0;padding:0;font-size:13.5px;font-weight:600;color:rgba(0,0,0,.7)}
.roi-trust li{display:inline-flex;align-items:center;gap:7px}
.roi-hero-visual{display:flex;justify-content:center;min-width:0}
.roi-hero-visual img{width:100%;max-width:640px;height:auto;max-height:520px;object-fit:contain;display:block;filter:drop-shadow(0 24px 40px rgba(0,0,0,.16))}

/* steps */
.roi-steps-sec{padding:clamp(24px,4vw,44px) 0;background:#fff;border-bottom:1px solid rgba(0,0,0,.07)}
.roi-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2.5vw,32px)}
.roi-steps li{display:flex;gap:14px;align-items:flex-start}
.roi-steps-icon{flex:0 0 auto;width:46px;height:46px;border-radius:14px;background:#000;color:#fff;display:flex;align-items:center;justify-content:center}
.roi-steps small{display:block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(0,0,0,.5);margin-bottom:2px}
.roi-steps h3{margin:0 0 4px;font-size:1.02rem;font-weight:800}
.roi-steps p{margin:0;font-size:.9rem;line-height:1.55;color:rgba(0,0,0,.64)}

/* calculator */
.roi-calc-sec{padding:clamp(40px,6vw,88px) 0 clamp(32px,5vw,64px);background:#fafafa;scroll-margin-top:70px}
.roi-calc{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.08fr);gap:clamp(16px,2.4vw,28px);align-items:start}
.roi-panel{background:#fff;border:1px solid rgba(0,0,0,.12);border-radius:22px;padding:clamp(18px,3vw,34px);box-shadow:0 20px 50px -26px rgba(0,0,0,.22);min-width:0}
.roi-results{position:sticky;top:calc(66px + 20px)}
.roi-step-head{display:flex;gap:12px;align-items:center;margin:0 0 14px}
.roi-step-head:not(:first-child){margin-top:clamp(18px,2.4vw,26px);padding-top:clamp(18px,2.4vw,26px);border-top:1px solid rgba(0,0,0,.08)}
.roi-step-num{flex:0 0 auto;width:30px;height:30px;border-radius:50%;background:#000;color:#fff;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center}
.roi-step-head h3{margin:0;font-size:1.02rem;font-weight:800;line-height:1.2}
.roi-step-head p{margin:2px 0 0;font-size:.82rem;color:rgba(0,0,0,.58)}
.roi-field{margin-bottom:16px}
.roi-label{display:block;font-size:.82rem;font-weight:700;margin-bottom:7px}
.roi-hint{margin:6px 0 0;font-size:12px;line-height:1.45;color:rgba(0,0,0,.58)}
.roi-input{width:100%;min-width:0;height:48px;padding:0 14px;border-radius:12px;border:1.5px solid rgba(0,0,0,.18);background:#fff;color:#000;
  font:600 .95rem var(--font-main);outline:none;appearance:none;-webkit-appearance:none;transition:border-color .2s,box-shadow .2s}
.roi-input:focus{border-color:#000;box-shadow:0 0 0 4px rgba(0,0,0,.08)}
.roi-input:disabled{background:#f3f3f3;color:rgba(0,0,0,.4);cursor:not-allowed}
.roi-input::placeholder{color:rgba(0,0,0,.38);font-weight:500}
.roi-select{position:relative}
.roi-select select{padding-right:40px;cursor:pointer;text-overflow:ellipsis}
.roi-select svg{position:absolute;right:14px;top:50%;transform:translateY(-50%);pointer-events:none;color:rgba(0,0,0,.6)}
.roi-bills{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.roi-bills .roi-input{padding:0 10px}
.roi-link{background:none;border:0;padding:6px 0;font:700 .84rem var(--font-main);color:#000;text-decoration:underline;text-underline-offset:3px;cursor:pointer;text-align:left}
.roi-info{display:flex;gap:10px;padding:12px 14px;border-radius:12px;background:rgba(0,0,0,.05);font-size:.85rem;line-height:1.55;color:rgba(0,0,0,.72);margin-bottom:12px}
.roi-info svg{flex:0 0 auto;margin-top:2px}
.roi-actions{display:flex;gap:10px;margin-top:clamp(20px,3vw,28px)}
.roi-calc-btn{flex:1;min-height:52px}
.roi-calc-btn:disabled{background:#dcdcdc;color:rgba(0,0,0,.45);cursor:not-allowed;box-shadow:none;transform:none}
.roi-reset{flex:0 0 52px;height:52px;border-radius:12px;border:1.5px solid rgba(0,0,0,.18);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s,border-color .2s}
.roi-reset:hover{background:#f3f3f3;border-color:#000}
.roi-error{display:flex;gap:10px;margin-top:14px;padding:12px 14px;border-radius:12px;background:#fdecec;color:#8a1c1c;font-size:.86rem;line-height:1.5}
.roi-error svg{flex:0 0 auto;margin-top:2px}

/* results */
.roi-results-head{display:flex;align-items:center;gap:12px;margin-bottom:20px}
.roi-results-head h3{margin:0;font-size:1.1rem;font-weight:800}
.roi-results-icon{width:40px;height:40px;border-radius:12px;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;flex:0 0 auto}
.roi-empty{min-height:340px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px 8px;border:1.5px dashed rgba(0,0,0,.16);border-radius:16px}
.roi-empty span{width:56px;height:56px;border-radius:50%;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.roi-empty p{max-width:280px;margin:0;font-size:.92rem;line-height:1.6;color:rgba(0,0,0,.66)}
.roi-headline{background:#000;color:#fff;border-radius:18px;padding:clamp(18px,2.6vw,26px);text-align:center;margin-bottom:14px}
.roi-eyebrow{display:block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-bottom:6px}
.roi-big{font-size:clamp(2.3rem,5vw,3.2rem);font-weight:800;letter-spacing:-.03em;line-height:1.05}
.roi-headline p{margin:8px 0 0;font-size:.9rem;line-height:1.55;color:rgba(255,255,255,.82)}
.roi-headline b{color:#fff}
.roi-note{display:flex;gap:8px;align-items:flex-start;font-size:12.5px;line-height:1.45;color:rgba(0,0,0,.66);background:rgba(0,0,0,.05);padding:9px 12px;border-radius:10px;margin-bottom:14px}
.roi-note svg{flex:0 0 auto;margin-top:2px}
.roi-kpis{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.roi-kpi{border:1px solid rgba(0,0,0,.12);border-radius:14px;padding:14px;min-width:0}
.roi-kpi-top{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:rgba(0,0,0,.58);margin-bottom:8px}
.roi-kpi-icon{width:24px;height:24px;border-radius:7px;background:rgba(0,0,0,.07);display:flex;align-items:center;justify-content:center;flex:0 0 auto}
.roi-kpi strong{display:block;font-size:clamp(1.25rem,2.4vw,1.65rem);font-weight:800;letter-spacing:-.02em;overflow-wrap:anywhere}
.roi-kpi em{display:block;font-style:normal;font-size:11.5px;color:rgba(0,0,0,.5);margin-top:2px}
.roi-card-inner{border:1px solid rgba(0,0,0,.12);border-radius:16px;padding:clamp(12px,2vw,18px);margin-bottom:14px;min-width:0}
.roi-card-title{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;font-size:.86rem;font-weight:800;margin-bottom:8px}
.roi-card-title b{font-size:.78rem;padding:4px 10px;border-radius:99px}
.roi-card-title b.pos{background:#000;color:#fff}
.roi-card-title b.neg{background:#eee;color:#444}
.roi-chart{width:100%;min-width:0}
.roi-chart svg{display:block;max-width:100%}
.roi-legend{display:flex;flex-wrap:wrap;gap:6px 16px;margin-top:6px;font-size:12px;color:rgba(0,0,0,.66)}
.roi-legend span{display:inline-flex;align-items:center;gap:7px}
.roi-legend i{width:16px;height:3px;border-radius:2px;display:inline-block}
.roi-legend i.ring{width:10px;height:10px;border-radius:50%;border:2.5px solid #000;background:#fff}
.roi-table-wrap{overflow-x:auto}
.roi-table-wrap table{width:100%;border-collapse:collapse;font-size:.9rem;min-width:300px}
.roi-table-wrap th{text-align:left;font-size:11px;letter-spacing:.07em;text-transform:uppercase;color:rgba(0,0,0,.55);padding:0 8px 10px 0}
.roi-table-wrap td{padding:11px 8px 11px 0;border-top:1px solid rgba(0,0,0,.09);font-weight:800;white-space:nowrap}
.roi-table-wrap td:first-child{font-weight:600;color:rgba(0,0,0,.6);white-space:normal}
.roi-table-wrap td.accent{color:#000}
.roi-hardware{display:flex;gap:12px;align-items:flex-start;padding:14px;border-radius:14px;background:rgba(0,0,0,.05);margin-bottom:16px}
.roi-hardware svg{flex:0 0 auto;margin-top:2px}
.roi-hardware p{margin:0;font-size:.9rem;line-height:1.6}
.roi-hardware span{color:rgba(0,0,0,.66)}
.roi-full{width:100%}
.roi-disclaimer{display:flex;gap:8px;align-items:flex-start;justify-content:center;max-width:720px;margin:22px auto 0;font-size:12px;line-height:1.6;color:rgba(0,0,0,.55);text-align:left}
.roi-disclaimer svg{flex:0 0 auto;margin-top:3px}

/* methodology */
.roi-method-sec{padding:clamp(40px,6vw,80px) 0;background:#fff}
.roi-method{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(12px,2vw,20px)}
.roi-method-card{border:1px solid rgba(0,0,0,.12);border-radius:18px;padding:clamp(16px,2vw,24px);background:#fff}
.roi-method-card h3{margin:0 0 8px;font-size:1rem;font-weight:800}
.roi-method-card p{margin:0;font-size:.88rem;line-height:1.6;color:rgba(0,0,0,.66)}

/* faq */
.roi-faq-sec{padding:clamp(36px,5vw,72px) 0;background:#fafafa}
.roi-faq-wrap{max-width:860px}
.roi-faq details{background:#fff;border:1px solid rgba(0,0,0,.12);border-radius:14px;margin-bottom:10px;overflow:hidden}
.roi-faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:14px;padding:16px 18px;font-weight:700;font-size:.98rem}
.roi-faq summary::-webkit-details-marker{display:none}
.roi-faq summary svg{flex:0 0 auto;transition:transform .25s}
.roi-faq details[open] summary svg{transform:rotate(180deg)}
.roi-faq details p{margin:0;padding:0 18px 18px;font-size:.92rem;line-height:1.7;color:rgba(0,0,0,.68)}

/* cta */
.roi-cta-sec{padding:clamp(36px,6vw,80px) 0 clamp(48px,7vw,96px);background:#fff}
.roi-cta{background:#000;color:#fff;border-radius:clamp(20px,3vw,32px);padding:clamp(28px,5vw,64px) clamp(20px,4vw,56px);text-align:center}
.roi-cta h2{margin:0 0 12px;font-size:clamp(1.5rem,3.6vw,2.6rem);font-weight:800;letter-spacing:-.02em;line-height:1.15}
.roi-cta p{max-width:640px;margin:0 auto clamp(20px,3vw,32px);color:rgba(255,255,255,.78);line-height:1.65;font-size:clamp(.92rem,1.4vw,1.05rem)}
.roi-cta-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:#fff;color:#000;text-decoration:none;font-weight:800;
  font-size:.86rem;letter-spacing:.08em;text-transform:uppercase;padding:15px 28px;border-radius:12px;transition:transform .25s,box-shadow .25s}
.roi-cta-btn:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(255,255,255,.18)}

/* ── breakpoints ── */
@media (max-width:1100px){
  .roi-method{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:960px){
  .roi-calc{grid-template-columns:minmax(0,1fr)}
  .roi-results{position:static;scroll-margin-top:84px}
}
@media (max-width:900px){
  .roi-hero-grid{grid-template-columns:minmax(0,1fr)}
  .roi-hero-visual{order:2}
  .roi-hero-visual img{max-width:520px;max-height:380px}
  .roi-steps{grid-template-columns:minmax(0,1fr)}
}
@media (max-width:640px){
  .roi-hero-cta .btn-primary,.roi-hero-cta .btn-outline-action{width:100%}
  .roi-method{grid-template-columns:minmax(0,1fr)}
  .roi-cta-btn{width:100%;white-space:normal;text-align:center}
}
@media (max-width:420px){
  .roi-bills{grid-template-columns:minmax(0,1fr)}
  .roi-kpis{grid-template-columns:minmax(0,1fr)}
  .roi-panel{border-radius:18px}
}
@media (prefers-reduced-motion:reduce){
  .roi-faq summary svg,.roi-cta-btn{transition:none}
}
`;
