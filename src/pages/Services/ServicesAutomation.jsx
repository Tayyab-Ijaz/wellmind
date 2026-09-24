/**
 * ServicesAutomation.jsx — WellMind Data Solutions
 * /services/automation
 * Intelligent RPA, workflow automation, pipeline orchestration.
 *
 * CHANGES:
 * 1. Removed all ./serviceShared dependencies — self-contained component.
 * 2. Section dark/light pattern synced with ServicesAiMl.jsx:
 *    Hero (light) → Stats (DARK) → Capabilities + Process/Deliverables (light-mid) → Pricing (DARK) → CTA (light)
 * 3. Text sizes, margins, colours, BG styling fully synced with ServicesAiMl.jsx.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Settings2, Repeat, GitMerge, ClipboardList, Timer,
  Zap, ArrowRight, CheckCircle, TrendingDown, BarChart3,
  Webhook, Database, Play, PauseCircle, AlertTriangle, Shield,
  Activity, TrendingUp,
} from 'lucide-react';

import { HeroGridBg, SectionGridBg } from '../../components/BgGrid';
import { B, SECTION_PAD, PX, fadeUp, useCounter, DataParticles, SectionBadge, SectionDivider, CircuitBg } from '../../theme';

// ─── Brand Tokens (Synced with ServicesAiMl.jsx) ─────────────────────────────
// Page-specific accent — warm amber/gold, operations / efficiency vibe
const AC = B.accent;

// ─── Layout Constants ─────────────────────────────────────────────────────────
// ─── Counter Hook ─────────────────────────────────────────────────────────────
// ─── Background Helpers ───────────────────────────────────────────────────────
// ─── Section Badge ────────────────────────────────────────────────────────────
// ─── Feature Card (Synced with AiMl) ─────────────────────────────────────────
function FeatureCard({ icon, title, desc, i, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      style={{
        background: hovered ? color : B.cardBg,
        backdropFilter: 'blur(8px)',
        borderRadius: 'var(--radius-xl)',
        border: `3px solid ${hovered ? color : B.primaryBorder}`,
        boxShadow: hovered ? `0 12px 24px -8px ${color}40` : B.cardShadow,
        padding: 'clamp(20px, 2.5vw, 30px) clamp(16px, 2vw, 24px)',
        textAlign: 'center',
        transition: 'all 0.3s ease', height: '100%',
      }}
    >
      <div style={{
        width: 'clamp(44px, 6vw, 54px)', height: 'clamp(44px, 6vw, 54px)', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto clamp(14px, 2vw, 20px)',
        background: hovered ? B.white : `${color}15`,
        color: color, transition: 'all 0.3s ease',
      }}>
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <h4 style={{ fontWeight: 700, fontSize: 'var(--fs-card-title)', color: hovered ? B.textDark : B.textMain, marginBottom: 10, lineHeight: 1.3, transition: 'color 0.3s ease' }}>{title}</h4>
      <p style={{  fontSize: 'var(--fs-card-body)', color: hovered ? B.textDarkMid : B.textMid, lineHeight: 1.7, transition: 'color 0.3s ease' }}>{desc}</p>
    </motion.div>
  );
}

// ─── Deliverable Item (Synced with AiMl) ─────────────────────────────────────
function DeliverableItem({ text, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: 'clamp(12px, 1.5vw, 16px)',
        borderRadius: 'var(--radius-md)', marginBottom: 10,
        background: hovered ? color : 'rgba(255,255,255,0.5)',
        border: `1px solid ${color}25`,
        backdropFilter: 'blur(5px)',
        transition: 'all 0.3s ease',
      }}
    >
      <CheckCircle size={18} color={hovered ? B.textDark : color} style={{ flexShrink: 0, transition: 'color 0.3s' }}/>
      <span style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)', fontWeight: 500, lineHeight: 1.5, color: hovered ? B.textDark : B.textMain, transition: 'color 0.3s ease' }}>{text}</span>
    </motion.div>
  );
}

// ─── Stat Card (dark section — Synced with AiMl) ─────────────────────────────
function StatCard({ target, suffix, label, icon, start, delay = 0, theme }) {
  const val = useCounter(target, 2000, start);
  const [hovered, setHovered] = useState(false);
  const t = theme || { color: B.primary, bg: B.primaryLight };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
      style={{
        background: hovered ? `linear-gradient(145deg, ${t.bg}, rgba(255,255,255,0.02))` : 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(12px)',
        border: `1.5px solid ${hovered ? t.color : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered ? `0 0 25px ${t.color}40, inset 0 0 10px ${t.color}10` : 'none',
        borderRadius: 'var(--radius-lg)', padding: 'clamp(16px, 2.5vw, 28px) clamp(10px, 2vw, 20px)', textAlign: 'center',
        cursor: 'default', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', overflow: 'hidden',
      }}
    >
      <div style={{ width: 'clamp(40px, 5vw, 54px)', height: 'clamp(40px, 5vw, 54px)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto clamp(12px, 2vw, 20px)', background: hovered ? `linear-gradient(135deg, ${t.color}, ${t.color})` : 'rgba(255,255,255,0.05)', color: hovered ? '#fff' : t.color, border: `1px solid ${hovered ? 'transparent' : 'rgba(255,255,255,0.1)'}`, transition: 'all 0.4s ease', boxShadow: hovered ? `0 10px 20px ${t.color}40` : 'none' }}>
        <motion.div animate={{ rotate: hovered ? 360 : 0 }} transition={{ duration: 0.6 }}>
          {React.cloneElement(icon, { size: 22, strokeWidth: 2 })}
        </motion.div>
      </div>
      <div style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)', color: hovered ? 'transparent' : B.textDark, background: hovered ? `linear-gradient(180deg, #fff 30%, ${t.color} 100%)` : 'none', WebkitBackgroundClip: hovered ? 'text' : 'none', backgroundClip: hovered ? 'text' : 'none', marginBottom: 8, letterSpacing: '-0.03em', transition: 'all 0.3s ease' }}>
        {val}<span style={{ fontSize: '0.5em' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 'clamp(11px, 1.2vw, 13px)', letterSpacing: '0.12em', textTransform: 'uppercase', color: B.textDarkMuted, fontWeight: 700 }}>{label}</div>
    </motion.div>
  );
}

// ─── Section Divider ──────────────────────────────────────────────────────────
// ─── Animated Pipeline Flow Visual ───────────────────────────────────────────
function PipelineFlow() {
  const [activeNode, setActiveNode] = useState(null);
  const nodes = [
    { id: 0, label: 'Trigger',   sub: 'Schedule / Webhook / Event', color: B.action,    x: '5%',  y: '20%' },
    { id: 1, label: 'Extract',   sub: 'Data from any source',        color: AC,           x: '35%', y: '8%'  },
    { id: 2, label: 'Transform', sub: 'AI enrichment & clean',       color: B.primary,    x: '65%', y: '20%' },
    { id: 3, label: 'Route',     sub: 'Conditions & branching',      color: B.secondary,  x: '35%', y: '64%' },
    { id: 4, label: 'Deliver',   sub: 'Output to any system',        color: B.action,     x: '65%', y: '64%' },
  ];
  const connections = [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 0, to: 3 },
    { from: 3, to: 4 }, { from: 2, to: 4 },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 380, height: 320, margin: '0 auto' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
        {connections.map(({ from, to }, i) => {
          const f = nodes[from], t2 = nodes[to];
          const fx = parseFloat(f.x) + 10, fy = parseFloat(f.y) + 16;
          const tx = parseFloat(t2.x) + 10, ty = parseFloat(t2.y) + 16;
          return <line key={i} x1={`${fx}%`} y1={`${fy}%`} x2={`${tx}%`} y2={`${ty}%`} stroke={`${AC}50`} strokeWidth="1.5" strokeDasharray="4 3"/>;
        })}
      </svg>
      {nodes.map((node, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
          onMouseEnter={() => setActiveNode(i)}
          onMouseLeave={() => setActiveNode(null)}
          style={{
            position: 'absolute', left: node.x, top: node.y,
            padding: '10px 14px', borderRadius: 'var(--radius-md)', minWidth: 120,
            background: activeNode === i ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.76)',
            backdropFilter: 'blur(8px)',
            border: `1.5px solid ${activeNode === i ? node.color : node.color + '50'}`,
            boxShadow: activeNode === i ? `0 8px 28px ${node.color}30` : '0 2px 10px rgba(0,0,0,0.06)',
            transition: 'all 0.26s ease', cursor: 'default', zIndex: 2,
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 12.5, color: node.color, marginBottom: 3 }}>{node.label}</div>
          <div style={{ fontSize: 10.5, color: B.textMuted, fontWeight: 500, lineHeight: 1.4 }}>{node.sub}</div>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: node.color, position: 'absolute', top: -4, right: -4, boxShadow: `0 0 8px ${node.color}80`, animation: 'wmPulse 2s ease-in-out infinite' }}/>
        </motion.div>
      ))}
    </div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const features = [
  { icon: <Repeat/>, title: 'End-to-End Workflow Automation', desc: 'Map, digitise, and automate entire business workflows, from data ingestion to reporting. We identify the 20% of manual steps causing 80% of delays.', color: AC },
  { icon: <Webhook/>, title: 'API & System Integration', desc: 'Connect your CRM, ERP, data warehouse, and 50+ other tools into a single automated data flow. Webhooks, polling, and event-driven triggers all covered.', color: B.action },
  { icon: <GitMerge/>, title: 'Pipeline Orchestration', desc: 'Airflow, Prefect, and Nextflow-based pipelines for data engineering and bioinformatics. Dependency management, retries, and alerting built-in.', color: B.primary },
  { icon: <AlertTriangle/>, title: 'Monitoring & Error Handling', desc: 'Every automation we build includes alerting for failures, structured logging, and auto-retry logic. You get notified before your users notice anything.', color: B.secondary },
  { icon: <Database/>, title: 'Data Pipeline Engineering', desc: 'ETL/ELT pipelines from messy source data to clean, queryable warehouses. Incremental loading, deduplication, schema validation included.', color: AC },
  { icon: <Settings2/>, title: 'Intelligent RPA', desc: 'Rule-based automation upgraded with AI: document extraction, form classification, decision routing. RPA that adapts to changing inputs.', color: B.action },
];

const processes = [
  { step: '01', title: 'Workflow Audit', desc: 'We map your existing manual processes end-to-end, identify automation candidates, and rank them by ROI potential before touching any code.' },
  { step: '02', title: 'Architecture Design', desc: 'Choose the right tool for each workflow: Airflow, Prefect, Python scripts, or API integrations. Over-engineering wastes money; we scope precisely.' },
  { step: '03', title: 'Build & Test with Real Data', desc: 'Automation is only as reliable as its testing. We build with your actual data and edge cases, not synthetic test fixtures.' },
  { step: '04', title: 'Monitor & Iterate', desc: 'Post-launch we review alerting thresholds, tune retry logic, and optimise for the failure modes that only appear in production.' },
];

const deliverables = [
  'Workflow map + automation opportunity scorecard',
  'Fully tested pipeline / automation scripts (your repo)',
  'Monitoring dashboard with alerting rules',
  'Runbook for failure scenarios and manual overrides',
  'Integration credentials documented in secure vault',
  'Training session for internal team (1 hour)',
  '30-day post-launch support',
];

const tiers = [
  {
    name: 'Single Workflow',
    price: 'From $2,500',
    desc: 'Automate one defined, high-value manual process, end to end.',
    features: ['1 workflow automated', 'API or script-based', 'Basic monitoring + alerts', 'Handoff documentation', '2–3 week delivery'],
    featured: false,
  },
  {
    name: 'Full Pipeline Suite',
    price: 'From $6,500',
    desc: 'Multiple workflows integrated into a coherent, monitored automation system.',
    features: ['3–5 workflows automated', 'Orchestration layer (Airflow/Prefect)', 'Dashboard + alerting', 'Error handling + retries', '6–8 week delivery', '30-day support'],
    featured: true,
  },
  {
    name: 'Retainer',
    price: 'From $1,500',
    priceSuffix: '/ month',
    desc: 'Ongoing automation engineering: new workflows, maintenance, optimisation.',
    features: ['Monthly automation budget', 'Priority response SLA', 'Quarterly workflow review', 'On-call troubleshooting', 'Cancel anytime'],
    featured: false,
  },
];

const stats = [
  { target: 70,  suffix: '%', label: 'Time Saved',        icon: <TrendingDown size={20}/>, theme: { color: AC,         bg: `${AC}15`              } },
  { target: 97,  suffix: '%', label: 'Pipeline Uptime',   icon: <Activity size={20}/>,     theme: { color: B.action,   bg: 'rgba(11, 124, 147,0.1)' } },
  { target: 6,   suffix: 'wk', label: 'Avg. Delivery',   icon: <Timer size={20}/>,         theme: { color: '#FF9F1C',  bg: 'rgba(255,159,28,0.1)' } },
  { target: 0,   suffix: '$',  label: 'Surprise Invoices',icon: <Shield size={20}/>,        theme: { color: '#00F5D4',  bg: 'rgba(0,245,212,0.1)'  } },
];

const processColors = [AC, B.action, B.primary, B.secondary];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ServicesAutomation() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.20 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-body, sans-serif)' }}>

      {/* ══════════ 1. HERO (LIGHT) ══════════ */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', zIndex: 1,
        background: B.heroBg,
        paddingTop: 'clamp(40px, 5vw, 50px)',
      }}>
        <HeroGridBg opacity={0.35}/>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '45%', height: '100%', background: `linear-gradient(90deg, ${AC}06 0%, transparent 80%)`, pointerEvents: 'none', zIndex: 1 }}/>
        <DataParticles count={18}/>

        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
          position: 'relative', zIndex: 10,
        }}>
          <div style={{ maxWidth: 1200, width: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 5vw, 60px)' }}>

            {/* TOP ROW: Text + Pipeline Visual */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch', gap: 'clamp(18px, 5vw, 44px)' }}>

              {/* Left — Text */}
              <motion.div
                initial="hidden" animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                style={{ flex: '1 1 clamp(280px, 45%, 600px)', display: 'flex', flexDirection: 'column' }}
              >
                <motion.div variants={fadeUp} custom={0}>
                  <SectionBadge>Automation & Workflows</SectionBadge>
                </motion.div>

                <motion.h1 variants={fadeUp} custom={0.05}
                  style={{ fontWeight: 700, fontSize: 'var(--fs-hero)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 'clamp(14px, 2vw, 24px)', color: B.primaryDark }}>
                  Stop Doing Manually<br/>
                  <span style={{ background: `linear-gradient(90deg, ${AC}, ${B.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    What Code Can Own.
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={0.15}
                  style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.5rem)', fontWeight: 500, color: B.textMid, marginBottom: 'clamp(20px, 3vw, 36px)', lineHeight: 1.75 }}>
                  Intelligent RPA and end-to-end workflow automation that replaces repetitive manual tasks with reliable, monitored pipelines, delivering measurable ROI within weeks, not months.
                </motion.p>

                <motion.div variants={fadeUp} custom={0.25} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                  <Link to="/contact" className="btn-primary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                    <Zap size={16}/> Automate My Workflows
                  </Link>
                  <Link to="/case-studies/nextflow-pipeline" className="btn-secondary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                    See 97% Time Reduction Case <ArrowRight size={16}/>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — Pipeline Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ flex: '1 1 clamp(260px, 40%, 500px)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}
              >
                <div style={{
                  padding: 'clamp(24px, 3vw, 36px) clamp(18px, 2.5vw, 24px)',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(14px)',
                  border: `2px solid ${AC}30`,
                  boxShadow: `0 20px 60px ${AC}15`,
                  width: '100%', maxWidth: 440,
                }}>
                  <div style={{ fontSize: 'clamp(10px, 1.2vw, 12px)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: AC, textAlign: 'center', marginBottom: 24 }}>
                    Automation Pipeline
                  </div>
                  <PipelineFlow/>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM ROW: Trust Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2vw, 20px)', justifyContent: 'center', width: '100%', paddingTop: 'clamp(10px, 2vw, 20px)', borderTop: `1px solid ${B.primaryBorder}40` }}
            >
              {['Fixed-Fee Delivery', 'ROI in Weeks, Not Months'].map((t, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: 'clamp(8px, 1vw, 12px) clamp(14px, 2vw, 20px)', borderRadius: 50,
                  background: 'rgba(255,255,255,0.6)', border: `1px solid ${B.primaryBorder}`,
                  fontSize: 'clamp(12px, 1.5vw, 15px)', fontWeight: 600, color: B.textMain,
                  boxShadow: '0 4px 12px rgba(107, 46, 116, 0.05)',
                  animation: `wmFloat ${3 + i * 0.5}s ease-in-out infinite`,
                }}>
                  <CheckCircle size={14} color={AC}/> {t}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ 2. STATS (DARK) ══════════ */}
      <section ref={statsRef} style={{
        padding: 'var(--sp-section) 0',
        position: 'relative', zIndex: 1,
        background: 'linear-gradient(135deg, #170F22 0%, #140B20 100%)',
        display: 'flex', alignItems: 'center',
      }}>
        <CircuitBg opacity={0.09}/>
        <DataParticles count={12} dark/>
        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <SectionBadge dark style={{ color: B.textDarkMuted, marginBottom: 20 }}>Measured Outcomes</SectionBadge>
            <h2 className="section-h2 dark" style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3.5vw, 40px)' }}>Results From Real Projects</h2>
            <div className="grid-stats" style={{ width: '100%' }}>
              {stats.map((s, i) => (
                <StatCard key={i} target={s.target} suffix={s.suffix} label={s.label} icon={s.icon} start={statsVisible} delay={i * 0.1} theme={s.theme}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 3. LIGHT: CAPABILITIES + PROCESS ══════════ */}
      <section style={{
        position: 'relative', zIndex: 1,
        background: 'linear-gradient(180deg, #EBE6EB 0%, #E5DCF0 50%, #D9D3E8 100%)',
        overflow: 'hidden', padding: 0,
      }}>
        <SectionGridBg opacity={0.25}/>
        <DataParticles count={10}/>

        {/* Capabilities */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
            <SectionBadge>Services</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>What We Automate</h2>
            <p className="section-lead" style={{ maxWidth: 1200 }}>
              From a single bottleneck to an entire operations stack, we scope to where the ROI is and build pipelines that run without babysitting.
            </p>
          </div>
          <div style={{ ...PX }}>
            <div className="grid-features">
              {features.map((f, i) => <FeatureCard key={i} {...f} i={i}/>)}
            </div>
          </div>
        </div>

        <SectionDivider/>

        {/* Process + Deliverables */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, maxWidth: 1250, display: 'flex', gap: 'clamp(28px, 5vw, 80px)', flexWrap: 'wrap' }}>

            {/* Process */}
            <div style={{ flex: '1 1 min(100%, 400px)' }}>
              <SectionBadge>How We Work</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>Our Automation Process</h2>
              {processes.map((p, i) => {
                const color = processColors[i % processColors.length];
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                    style={{ display: 'flex', gap: 'clamp(14px, 2vw, 24px)', position: 'relative', marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 'clamp(40px, 5.5vw, 52px)', height: 'clamp(40px, 5.5vw, 52px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: color, color: B.white, fontWeight: 800, fontSize: 'clamp(13px, 1.6vw, 17px)', boxShadow: `0 6px 20px ${color}40`, flexShrink: 0 }}>{p.step}</div>
                      {i < processes.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 28, background: `linear-gradient(to bottom, ${color}60, transparent)`, marginTop: 6 }}/>}
                    </div>
                    <div style={{ paddingTop: 8 }}>
                      <h4 style={{ fontWeight: 700, fontSize: 'clamp(1.15rem, 2vw, 1.8rem)', color: B.textMain, marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h4>
                      <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)', lineHeight: 1.7, color: B.textMid }}>{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Deliverables */}
            <div style={{ flex: '1 1 min(100%, 380px)' }}>
              <SectionBadge>What You Get</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 12 }}>Documented, Monitored, Yours.</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)', color: B.textMid, lineHeight: 1.7, marginBottom: 'clamp(24px, 3.5vw, 36px)' }}>
                Every automation is documented, monitored, and fully owned by you on handoff. There's no dependency on us to keep it running.
              </p>
              {deliverables.map((d, i) => {
                const color = processColors[i % processColors.length];
                return <DeliverableItem key={i} text={d} color={color}/>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 4. PRICING (DARK) ══════════ */}
      {/* <section style={{
        padding: 'var(--sp-section) 0',
        position: 'relative', zIndex: 1,
        background: 'linear-gradient(135deg, #170F22 0%, #1F1236 100%)',
        display: 'flex', alignItems: 'center',
      }}>
        <CircuitBg opacity={0.07}/>
        <DataParticles count={8} dark/>
        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4.5vw, 56px)' }}>
            <SectionBadge dark style={{ color: B.textDarkMuted }}>Transparent Pricing</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 14 }}>Investment</h2>
            <p className="section-lead dark" style={{ maxWidth: 1200 }}>
              Fixed fees. Scope agreed before we start. No surprise invoices, ever.
            </p>
          </div>
          <div className="grid-pricing">
            {tiers.map((tier, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                style={{
                  background: tier.featured ? `linear-gradient(145deg, ${B.action}18, ${B.action}08)` : 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)', borderRadius: 'var(--radius-xl)',
                  border: `2px solid ${tier.featured ? B.action : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: tier.featured ? `0 20px 56px -14px ${B.action}30` : 'none',
                  padding: 'clamp(22px, 3vw, 32px) clamp(18px, 2.5vw, 28px)',
                  position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column',
                }}
              >
                {tier.featured && <div style={{ position: 'absolute', top: 16, right: 16, padding: '4px 12px', borderRadius: 99, background: B.action, color: B.white, fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Most Popular</div>}
                <div style={{ fontWeight: 700, fontSize: 'clamp(11px, 1.3vw, 13px)', color: B.action, letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 10 }}>{tier.name}</div>
                <p style={{ fontSize: 'clamp(12px, 1.4vw, 13.5px)', color: B.textDarkMid, lineHeight: 1.6, marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>{tier.desc}</p>
                <div style={{ flex: 1, marginBottom: 'clamp(18px, 2.5vw, 28px)' }}>
                  {tier.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                      <CheckCircle size={15} color={B.action} style={{ flexShrink: 0, marginTop: 1 }}/>
                      <span style={{ fontSize: 'clamp(12px, 1.4vw, 13.5px)', color: B.textDarkMid }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: 'clamp(10px, 1.5vw, 13px) 20px', borderRadius: 10,
                  background: tier.featured ? B.action : 'transparent',
                  color: tier.featured ? B.white : B.action,
                  border: `1.5px solid ${B.action}`,
                  fontWeight: 700, fontSize: 'clamp(11px, 1.4vw, 13px)', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { if (!tier.featured) e.currentTarget.style.background = `${B.action}20`; }}
                  onMouseLeave={e => { if (!tier.featured) e.currentTarget.style.background = 'transparent'; }}>
                  Get Started <ArrowRight size={13}/>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════ 5. FINAL CTA (LIGHT) ══════════ */}
      <section style={{
        padding: `clamp(60px, 10vw, 120px) 0`,
        position: 'relative', overflow: 'hidden', zIndex: 1,
        background: 'linear-gradient(180deg, #F5F1F6 0%, #E8E1F0 100%)',
      }}>
        <SectionGridBg opacity={0.2}/>
        <DataParticles count={14}/>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${AC}08 0%, transparent 70%)`, pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(11, 124, 147,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }}/>

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Stop the Manual Work.<br/>
              <span style={{ background: `linear-gradient(90deg, #D4954E 25%, #C88A46 75%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Start Automating Today.
              </span>
            </h2>
            <p className="section-lead" style={{ color: B.textMid, maxWidth: 1200, margin: '0 auto clamp(24px, 3.5vw, 48px)', lineHeight: 1.75 }}>
              Book a free 30-minute call. We'll audit your biggest manual bottleneck and tell you what it would take to automate it. No sales pitch.
            </p>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 56px)',
                borderRadius: 'var(--radius-md)', background: `linear-gradient(135deg, ${B.action}, #0A5F75)`,
                color: B.white, fontWeight: 700, fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
                letterSpacing: '0.10em', textTransform: 'uppercase', textDecoration: 'none',
                boxShadow: `0 8px 40px ${B.actionGlow}, 0 0 80px rgba(11, 124, 147,0.15)`,
                border: '1px solid rgba(11, 124, 147,0.40)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                <Zap size={18}/> Book Your Free Automation Audit <ArrowRight size={18}/>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
</div>
  );
}