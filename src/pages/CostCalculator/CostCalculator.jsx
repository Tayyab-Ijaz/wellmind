/**
 * CostCalculator.jsx — AI Cost Optimization Calculator
 * A WellMind-themed page wrapping the standalone "ai-cost-calculator" tool.
 * Runs fully client-side (see calculatorEngine.js) — same math as the
 * original FastAPI backend, no server required.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator, Users, Cpu, DollarSign, TrendingDown, ArrowRight,
  Zap, Info, CheckCircle2, AlertCircle, Sparkles, Clock, ChevronDown,
} from 'lucide-react';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge } from '../../theme';
import { HeroGridBg } from '../../components/BgGrid';
import { AI_PROVIDERS, USAGE_RATES } from './calculatorData';
import { calculate } from './calculatorEngine';
import aiRoiHero from '../../assets/ai-roi-calculator.webp';

const inputStyle = {
  width: '100%',
  padding: 'clamp(11px,1.6vw,14px) clamp(14px,1.8vw,16px)',
  borderRadius: 12,
  border: `1.5px solid ${B.primaryBorder}`,
  background: 'rgba(255,255,255,0.75)',
  color: B.textMain,
  fontFamily: 'var(--font-main)',
  fontSize: 'clamp(0.85rem,1.3vw,0.95rem)',
  fontWeight: 600,
  outline: 'none',
  transition: 'border-color .25s ease, box-shadow .25s ease',
  appearance: 'none',
};

function Field({ label, children, hint }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: 'block', fontWeight: 700, fontSize: 'clamp(0.78rem,1.1vw,0.86rem)', color: B.primaryDark, marginBottom: 8, letterSpacing: '0.01em' }}>
        {label}
      </label>
      {children}
      {hint && <p style={{ fontSize: 12, color: B.textMuted, marginTop: 6, lineHeight: 1.5 }}>{hint}</p>}
    </div>
  );
}

function FocusInput(props) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
      onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
      style={{ ...inputStyle, borderColor: focused ? B.action : B.primaryBorder, boxShadow: focused ? `0 0 0 4px ${B.actionLight}` : 'none' }}
    />
  );
}

function FocusSelect(props) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <select
        {...props}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        style={{ ...inputStyle, borderColor: focused ? B.action : B.primaryBorder, boxShadow: focused ? `0 0 0 4px ${B.actionLight}` : 'none', cursor: 'pointer', paddingRight: 36 }}
      >
        {props.children}
      </select>
      <ChevronDown size={16} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: B.primaryMid, pointerEvents: 'none' }} />
    </div>
  );
}

function ResultCard({ label, value, icon, color }) {
  return (
    <motion.div whileHover={{ y: -3, boxShadow: '0 12px 26px -12px rgba(43,22,54,0.28)' }} transition={{ duration: 0.2 }}
      style={{ background: '#fff', borderRadius: 16, padding: 'clamp(16px,2vw,20px)', border: `1px solid ${B.primaryBorder}`, boxShadow: '0 6px 18px -10px rgba(43,22,54,0.16)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div style={{ width: 26, height: 26, borderRadius: 8, background: `${color}18`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {icon}
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: B.textMuted }}>{label}</span>
      </div>
      <div style={{ fontSize: 'clamp(1.5rem,2.8vw,1.95rem)', fontWeight: 800, color: B.textMain, letterSpacing: '-0.02em' }}>{value}</div>
    </motion.div>
  );
}

export default function CostCalculator() {
  const [teamSize, setTeamSize] = useState('');
  const [category, setCategory] = useState('');
  const [provider, setProvider] = useState('');
  const [useFallback, setUseFallback] = useState(false);
  const [plan, setPlan] = useState('');
  const [bills, setBills] = useState({ m1: '', m2: '', m3: '' });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const providersInCategory = AI_PROVIDERS.categories.find((c) => c.category === category)?.providers || [];
  const selectedProvider = providersInCategory.find((p) => p.provider === provider);
  const isUsageBased = !!USAGE_RATES[provider];
  const availablePlans = selectedProvider?.plans?.filter((p) => !/free|included/i.test(p)) || [];

  const canCalculate = teamSize && provider && (!useFallback || isUsageBased || plan);

  function handleCalculate() {
    setError('');
    setResult(null);
    try {
      const r = calculate({ teamSize: Number(teamSize), provider, plan, bills, useFallback });
      setResult(r);
    } catch (e) {
      setError(e.message);
    }
  }

  const fmt = (n) => `$${Number(n).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  const cloudAnnual = result?.comparison?.cloud_year2_onwards_annual ?? 0;
  const selfHostedAnnual = result?.comparison?.self_hosted_year2_onwards_annual ?? 0;
  const savingsPct = result && cloudAnnual > 0 ? Math.round(((cloudAnnual - selfHostedAnnual) / cloudAnnual) * 100) : null;

  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', position: 'relative' }}>

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 1, paddingTop: 'clamp(60px,8vw,100px)', background: B.heroBg }}>
        <HeroGridBg uid="CalcHero" opacity={0.30} />
        <DataParticles count={16} />
        <div style={{ flex: 1, position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', padding: 'clamp(34px,5vw,64px) clamp(16px,4vw,24px) clamp(70px,8vw,100px)' }}>
          <div className="grid-2col calc-hero-grid" style={{ width: '100%', maxWidth: 1380, margin: '0 auto', gap: 'clamp(24px,4vw,72px)', alignItems: 'center' }}>
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }} style={{ width: '100%', textAlign: 'left' }}>
              <motion.div variants={fadeUp} custom={0}>
                <SectionBadge><Calculator size={12} style={{ marginRight: 2 }} />Free Interactive Tool</SectionBadge>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={0.05} className="hero-h1" style={{ marginBottom: 'clamp(16px,2.5vw,24px)' }}>
                <span style={{ color: B.primaryDark }}>What Is Your AI Stack </span>
                <span style={{ background: B.gradientGold, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Really Costing You?</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={0.2} className="hero-sub" style={{ color: B.textMid, maxWidth: 650, margin: 0, letterSpacing: '0.01em' }}>
                Enter your team size and current AI provider — we'll estimate your real monthly spend, size the self-hosted hardware you'd need, and show your break-even point.
              </motion.p>
            </motion.div>

            <motion.div className="calc-hero-visual" initial={{ opacity: 0, x: 35, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 'clamp(20px,5vw,64px)' }}>
              <img src={aiRoiHero} alt="AI ROI cost comparison illustration" className="calc-hero-img" style={{ width: 'min(112%, 860px)', maxHeight: 640, objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 24px 45px rgba(83,42,140,0.18))' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CALCULATOR ══ */}
      <section style={{ position: 'relative', zIndex: 1, padding: `0 0 var(--sp-section)` }}>
        <div style={{ ...PX }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginTop: 'clamp(-44px,-3.4vw,-28px)', position: 'relative', zIndex: 5, background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(250,247,251,0.96) 100%)', backdropFilter: 'blur(20px)', borderRadius: 'var(--radius-xl)', border: `1.5px solid rgba(107,46,116,0.35)`, boxShadow: '0 36px 90px -28px rgba(43,22,54,0.30), 0 1px 0 rgba(255,255,255,0.8) inset', overflow: 'hidden' }}>

            <div style={{ height: 5, background: B.gradientGold }} />

            <div style={{ padding: 'clamp(26px,4vw,52px)' }}>
            <div className="grid-2col" style={{ gap: 'clamp(28px,3.4vw,48px)', alignItems: 'start' }}>

              {/* ── Left: Form ── */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: B.gradientPrimary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0, boxShadow: `0 8px 20px -6px ${B.primaryGlow}` }}>
                    <Users size={19} />
                  </div>
                  <h3 className="card-title" style={{ margin: 0 }}>Tell Us About Your Setup</h3>
                </div>

                <Field label="How many people use AI tools?">
                  <FocusInput type="number" min="1" placeholder="e.g. 10" value={teamSize} onChange={(e) => setTeamSize(e.target.value)} />
                </Field>

                <Field label="AI Category">
                  <FocusSelect value={category} onChange={(e) => { setCategory(e.target.value); setProvider(''); }}>
                    <option value="">Select a category...</option>
                    {AI_PROVIDERS.categories.map((c) => <option key={c.category} value={c.category}>{c.category}</option>)}
                  </FocusSelect>
                </Field>

                <Field label="Provider">
                  <FocusSelect value={provider} disabled={!category} onChange={(e) => setProvider(e.target.value)}>
                    <option value="">Select a provider...</option>
                    {providersInCategory.map((p) => <option key={p.provider} value={p.provider}>{p.provider}</option>)}
                  </FocusSelect>
                </Field>

                <AnimatePresence mode="wait">
                  {!useFallback ? (
                    <motion.div key="bills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Field label="Last 3 months' bill (per person, USD)">
                        <div style={{ display: 'flex', gap: 8 }}>
                          <FocusInput type="number" placeholder="Month 1" value={bills.m1} onChange={(e) => setBills({ ...bills, m1: e.target.value })} />
                          <FocusInput type="number" placeholder="Month 2" value={bills.m2} onChange={(e) => setBills({ ...bills, m2: e.target.value })} />
                          <FocusInput type="number" placeholder="Month 3" value={bills.m3} onChange={(e) => setBills({ ...bills, m3: e.target.value })} />
                        </div>
                      </Field>
                      <button onClick={() => setUseFallback(true)} style={{ background: B.actionLight, border: `1px solid ${B.actionBorder}`, color: B.action, fontWeight: 700, fontSize: 12.5, cursor: 'pointer', padding: '8px 14px', borderRadius: 10 }}>
                        New company / not sure — pick a plan instead →
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="plan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {isUsageBased ? (
                        <div style={{ fontSize: 13, color: B.textMid, marginBottom: 12, padding: 12, background: B.actionLight, borderRadius: 10, lineHeight: 1.6 }}>
                          <Info size={14} style={{ verticalAlign: -2, marginRight: 4, color: B.action }} />
                          {provider} is pay-as-you-go — no plan to pick. Team size alone is enough; usage is estimated from an industry benchmark, priced at {provider}'s real per-usage rate.
                        </div>
                      ) : (
                        <Field label="Which plan are you on?">
                          <FocusSelect value={plan} onChange={(e) => setPlan(e.target.value)} disabled={!provider}>
                            <option value="">Select a plan...</option>
                            {availablePlans.map((p) => <option key={p} value={p}>{p}</option>)}
                          </FocusSelect>
                        </Field>
                      )}
                      <button onClick={() => setUseFallback(false)} style={{ background: B.actionLight, border: `1px solid ${B.actionBorder}`, color: B.action, fontWeight: 700, fontSize: 12.5, cursor: 'pointer', padding: '8px 14px', borderRadius: 10 }}>
                        ← I have my last 3 months' bills instead
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={canCalculate ? { scale: 1.015, y: -2 } : {}}
                  whileTap={canCalculate ? { scale: 0.98 } : {}}
                  onClick={handleCalculate}
                  disabled={!canCalculate}
                  className="btn-primary"
                  style={{
                    width: '100%', marginTop: 26, fontSize: 'clamp(0.86rem,1.4vw,0.98rem)', padding: 'clamp(14px,2vw,17px) 20px',
                    background: canCalculate ? `linear-gradient(120deg, ${B.action} 0%, ${B.primaryMid} 100%)` : 'linear-gradient(120deg, #DCD6E4 0%, #CFC7DA 100%)',
                    color: canCalculate ? '#fff' : B.textMuted,
                    boxShadow: canCalculate ? `0 16px 34px -12px ${B.actionGlow}` : 'none',
                    cursor: canCalculate ? 'pointer' : 'not-allowed',
                  }}
                >
                  <Zap size={17} /> Calculate My Savings
                </motion.button>

                {error && (
                  <div style={{ display: 'flex', gap: 8, marginTop: 14, padding: 12, background: 'rgba(200,50,50,0.08)', borderRadius: 10, color: '#A82D2D', fontSize: 13 }}>
                    <AlertCircle size={16} style={{ flexShrink: 0, marginTop: 1 }} /> {error}
                  </div>
                )}
              </div>

              {/* ── Right: Results ── */}
              <div style={{ background: 'linear-gradient(160deg, rgba(11,124,147,0.05) 0%, rgba(107,46,116,0.05) 100%)', border: `1px solid ${B.primaryBorder}`, borderRadius: 20, padding: 'clamp(20px,2.6vw,28px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: B.gradientAction, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0, boxShadow: `0 8px 20px -6px ${B.actionGlow}` }}>
                    <TrendingDown size={19} />
                  </div>
                  <h3 className="card-title" style={{ margin: 0 }}>Your Savings Breakdown</h3>
                </div>

                {!result ? (
                  <div style={{ minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px 12px' }}>
                    <div style={{ width: 60, height: 60, borderRadius: '50%', background: B.gradientAction, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, boxShadow: `0 14px 30px -10px ${B.actionGlow}` }}>
                      <Sparkles size={24} color="#fff" />
                    </div>
                    <p style={{ fontSize: 14, color: B.textMid, lineHeight: 1.65, maxWidth: 260, fontWeight: 500 }}>Fill in your team size and provider, then hit calculate — your cost comparison will appear here.</p>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>

                    {savingsPct !== null && (
                      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{ background: B.gradientAction, borderRadius: 16, padding: 'clamp(16px,2.2vw,22px)', marginBottom: 16, textAlign: 'center', boxShadow: `0 16px 34px -12px ${B.actionGlow}` }}>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.80)', marginBottom: 4 }}>
                          {savingsPct > 0 ? 'You could save' : 'Projected change'}
                        </div>
                        <div style={{ fontSize: 'clamp(2.2rem,4.2vw,2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                          {savingsPct > 0 ? `${savingsPct}%` : `${Math.abs(savingsPct)}% more`}
                        </div>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 6, fontWeight: 500 }}>
                          on your AI spend, once self-hosted{result.payback_period_months ? ` — pays for itself in ${result.payback_period_months} mo` : ''}
                        </div>
                      </motion.div>
                    )}

                    {result.usage_confidence && (
                      <div style={{ fontSize: 12, marginBottom: 14, padding: '7px 11px', borderRadius: 8, background: result.usage_confidence === 'actual_from_billing' ? 'rgba(20,140,80,0.10)' : 'rgba(200,138,70,0.12)', color: result.usage_confidence === 'actual_from_billing' ? '#147C50' : '#8A5A00', display: 'flex', gap: 6, alignItems: 'center', lineHeight: 1.4 }}>
                        <CheckCircle2 size={13} style={{ flexShrink: 0 }} />
                        <span>{result.usage_source_note}</span>
                      </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                      {[
                        { label: 'Cloud / Month', value: fmt(result.current_monthly_cost), icon: <DollarSign size={14} />, color: B.secondary },
                        { label: 'Self-Hosted / Month', value: fmt(result.self_hosted_monthly_recurring), icon: <Cpu size={14} />, color: B.action },
                        { label: 'One-Time Investment', value: fmt(result.one_time_investment), icon: <DollarSign size={14} />, color: B.accent },
                        { label: 'Payback Period', value: result.payback_period_months ? `${result.payback_period_months} mo` : 'N/A', icon: <Clock size={14} />, color: B.primary },
                      ].map((c, i) => (
                        <motion.div key={c.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.08 * i }}>
                          <ResultCard {...c} />
                        </motion.div>
                      ))}
                    </div>

                    <div style={{ background: '#fff', borderRadius: 16, padding: 'clamp(16px,2vw,20px)', marginBottom: 16, border: `1px solid ${B.primaryBorder}` }}>
                      <table style={{ width: '100%', fontSize: 14, borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ textAlign: 'left', color: B.textMuted }}>
                            <th style={{ paddingBottom: 10, fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase' }}></th>
                            <th style={{ paddingBottom: 10, fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Cloud API</th>
                            <th style={{ paddingBottom: 10, fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: B.action }}>Self-Hosted</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderTop: `1px solid ${B.primaryBorder}` }}>
                            <td style={{ padding: '10px 0', color: B.textMuted, fontWeight: 600 }}>Year 1 total</td>
                            <td style={{ padding: '10px 0', fontWeight: 800 }}>{fmt(result.comparison.cloud_year1_total)}</td>
                            <td style={{ padding: '10px 0', fontWeight: 800, color: B.action }}>{fmt(result.comparison.self_hosted_year1_total)}</td>
                          </tr>
                          <tr style={{ borderTop: `1px solid ${B.primaryBorder}` }}>
                            <td style={{ padding: '10px 0', color: B.textMuted, fontWeight: 600 }}>Year 2+ (annual)</td>
                            <td style={{ padding: '10px 0', fontWeight: 800 }}>{fmt(result.comparison.cloud_year2_onwards_annual)}</td>
                            <td style={{ padding: '10px 0', fontWeight: 800, color: B.action }}>{fmt(result.comparison.self_hosted_year2_onwards_annual)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p style={{ fontSize: 14, color: B.textMid, lineHeight: 1.65, marginBottom: 10, fontWeight: 500 }}>
                      Recommended hardware: <b style={{ color: B.primaryDark }}>{result.recommended_gpu_tier} × {result.recommended_gpu_count}</b> — sized for ~{result.estimated_monthly_requests.toLocaleString()} requests/month.
                    </p>

                    <Link to="/book-discovery" className="btn-outline-action" style={{ width: '100%', marginTop: 8 }}>
                      Discuss This With Our Team <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
            </div>
          </motion.div>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 7, marginTop: 22, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
            <Info size={13} style={{ color: B.textMuted, flexShrink: 0, marginTop: 2 }} />
            <p style={{ textAlign: 'left', fontSize: 12, color: B.textMuted, lineHeight: 1.6 }}>
              Figures are illustrative estimates based on published pricing and manufacturer specs — verify against current rates before making a purchasing decision. This tool does not store or transmit your inputs anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: 'var(--sp-section) 0', paddingTop: 'clamp(48px,8vw,90px)', paddingBottom: 'clamp(48px,8vw,90px)', position: 'relative', overflow: 'clip', zIndex: 1, background: `linear-gradient(180deg, ${B.bgLight} 0%, #E8E1F0 100%)` }}>
        <DataParticles count={14} />
        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge>Not Sure Where To Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 16 }}>
              We'll Help You Read The Numbers.
            </h2>
            <p className="section-lead" style={{ maxWidth: 700, margin: '0 auto clamp(24px,3vw,40px)' }}>
              Book a free 30-minute call and we'll walk through your specific stack, team size, and growth plans — no pitch, just an honest read on whether self-hosting makes sense for you yet.
            </p>
            <Link to="/book-discovery" className="btn-primary">
              <Zap size={16} /> Book Your Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}