/**
 * ServicesDataAnalytics.jsx — WellMind Data Solutions
 * Updated to strictly match ServicesAiMl.jsx design system.
 * - Added HeroGridBg & SectionGridBg for consistent backgrounds.
 * - Synced Hero text sizes and layout heights.
 * - Ensured Process section matches MaxWidth 1250px and darker BG logic.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { B, PX, useCounter, DataParticles, SectionBadge, SectionDivider, CircuitBg } from '../../theme';

// ─── IMPORTING BACKGROUNDS (Synced with AiMl) ─────────────────────────────
import { HeroGridBg, SectionGridBg } from '../../components/BgGrid';

import {
  BarChart3, LineChart, PieChart, TrendingUp, Database,
  Zap, ArrowRight, CheckCircle, Filter, Layout,
  Globe, Activity, Eye, Layers, Search, FileText, Terminal,
} from 'lucide-react';


// ─── Feature Card (Synced with AiMl) ───────────────────────────────────────
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
        color: hovered ? color : color,
        transition: 'all 0.3s ease',
      }}>
        {React.cloneElement(icon, { size: 22 })}
      </div>
      
      <h4 style={{ 
        fontWeight: 700, fontSize: 'var(--fs-card-title)', 
        color: hovered ? B.textDark : B.textMain, 
        marginBottom: 10, 
        lineHeight: 1.3,
        transition: 'color 0.3s ease'
      }}>{title}</h4>
      
      <p style={{ 
         fontSize: 'var(--fs-card-body)', 
        color: hovered ? B.textDarkMid : B.textMid, 
        lineHeight: 1.7,
        transition: 'color 0.3s ease'
      }}>{desc}</p>
    </motion.div>
  );
}

// ─── Process Step (Synced with AiMl) ───────────────────────────────────────
function ProcessStep({ step, title, desc, color, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, delay: i * 0.09 }}
      style={{ display: 'flex', gap: 'clamp(14px, 2vw, 24px)', position: 'relative', marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: 'clamp(40px, 5.5vw, 52px)', height: 'clamp(40px, 5.5vw, 52px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: color, color: B.white, fontWeight: 800, fontSize: 'clamp(13px, 1.6vw, 17px)', boxShadow: `0 6px 20px ${color}40`, flexShrink: 0 }}>{step}</div>
        {i < 3 && <div style={{ width: 2, flex: 1, minHeight: 28, background: `linear-gradient(to bottom, ${color}60, transparent)`, marginTop: 6 }}/>}
      </div>
      <div style={{ paddingTop: 8 }}>
        <h4 style={{ fontWeight: 700, fontSize: 'clamp(1.15rem, 2vw, 1.8rem)', color: B.textMain, marginBottom: 8, lineHeight: 1.3 }}>{title}</h4>
        <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)', lineHeight: 1.7, color: B.textMid }}>{desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Pricing Card (Synced with AiMl) ───────────────────────────────────────
function PricingCard({ tier, accentColor, i }) {
  const [hovered, setHovered] = useState(false);
  const color = accentColor || B.action;
  return (
    <motion.div key={i}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: tier.featured ? `linear-gradient(145deg, ${color}18, ${color}08)` : B.bgDarkCard,
        backdropFilter: 'blur(12px)', borderRadius: 'var(--radius-xl)',
        border: `2px solid ${tier.featured ? color : 'rgba(255,255,255,0.08)'}`,
        boxShadow: tier.featured ? `0 20px 56px -14px ${color}30` : 'none',
        padding: 'clamp(22px, 3vw, 32px) clamp(18px, 2.5vw, 28px)',
        position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column',
        transition: 'all 0.3s ease'
      }}
    >
      {tier.featured && <div style={{ position: 'absolute', top: 16, right: 16, padding: '4px 12px', borderRadius: 99, background: color, color: B.white, fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Most Popular</div>}
      <div style={{ fontWeight: 700, fontSize: 'clamp(11px, 1.3vw, 13px)', color: color, letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 10 }}>{tier.name}</div>
      <p style={{ fontSize: 'clamp(12px, 1.4vw, 13.5px)', color: B.textDarkMid, lineHeight: 1.6, marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>{tier.desc}</p>
      <div style={{ flex: 1, marginBottom: 'clamp(18px, 2.5vw, 28px)' }}>
        {tier.features.map((f, fi) => (
          <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
            <CheckCircle size={15} color={color} style={{ flexShrink: 0, marginTop: 1 }}/>
            <span style={{ fontSize: 'clamp(12px, 1.4vw, 13.5px)', color: B.textDarkMid }}>{f}</span>
          </div>
        ))}
      </div>
      <Link to="/contact" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        padding: 'clamp(10px, 1.5vw, 13px) 20px', borderRadius: 10,
        background: tier.featured ? color : 'transparent',
        color: tier.featured ? B.white : color,
        border: `1.5px solid ${color}`,
        fontWeight: 700, fontSize: 'clamp(11px, 1.4vw, 13px)', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s',
      }}
        onMouseEnter={e => { if (!tier.featured) e.currentTarget.style.background = `${color}20`; }}
        onMouseLeave={e => { if (!tier.featured) e.currentTarget.style.background = 'transparent'; }}>
        Get Started <ArrowRight size={13}/>
      </Link>
    </motion.div>
  );
}

// ─── Shared Styles (AiMl Matching) ─────────────────────────────────────────
const SharedStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');    .section-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px clamp(14px, 2vw, 20px); border-radius: 99px;
      font-size: var(--fs-badge); font-weight: 700;
      letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 20px;
    }
    .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--c-action); flexShrink: 0; }

    .section-h2 {
      font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;
      font-size: var(--fs-section-h2);
      color: var(--c-text-main); line-height: 1.15; margin-bottom: 14px;
    }
    .section-h2.dark { color: var(--c-text-dark); }

    .section-lead {
      font-size: var(--fs-section-lead);
      color: var(--c-text-mid); max-width: 720px;
      font-weight: 500; margin: 0 auto; line-height: 1.6;
    }
    .section-lead.dark { color: var(--c-text-dark-mid); }
    
    .btn-primary {
      display: inline-flex; 
      align-items: center; 
      justify-content: center;
      gap: 10px;
      padding: clamp(12px, 2vw, 18px) clamp(20px, 4vw, 40px);
      border-radius: 12px; background: #0B7C93; color: #ffffff;
      font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;
      font-size: clamp(0.85rem, 1.8vw, 1.2rem);
      letter-spacing: 0.10em; text-transform: uppercase; text-decoration: none;
      transition: opacity 0.2s, transform 0.2s;
    }
    
    .btn-secondary {
      display: inline-flex; 
      align-items: center; 
      justify-content: center;
      gap: 10px;
      padding: clamp(10px, 1.8vw, 16px) clamp(20px, 4vw, 40px);
      border-radius: 12px; background: transparent; color: #93213F;
      font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;
      font-size: clamp(0.85rem, 1.8vw, 1.2rem);
      letter-spacing: 0.10em; textTransform: uppercase; text-decoration: none;
      border: 2px solid #93213F; transition: background 0.2s, transform 0.2s;
    }

    /* Grid Layouts */
    .grid-stats    { display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(14px, 2vw, 24px); }
    .grid-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(14px, 2vw, 24px); }
    .grid-pricing  { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(14px, 2.5vw, 24px); }

    /* Responsive Breakpoints */
    @media (max-width: 1024px) {
      .grid-features { grid-template-columns: repeat(2, 1fr); }
      .grid-pricing  { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .grid-stats    { grid-template-columns: repeat(2, 1fr); gap: 14px; }
      .grid-features { grid-template-columns: repeat(2, 1fr); }
      .grid-pricing  { grid-template-columns: 1fr; }
    }
    @media (max-width: 425px) {
      .grid-stats    { grid-template-columns: repeat(2, 1fr); gap: 12px; }
      .grid-features { grid-template-columns: 1fr; }
      .grid-pricing  { grid-template-columns: 1fr; }
      .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
    }
    @media (max-width: 320px) {
      .grid-stats    { grid-template-columns: 1fr; gap: 10px; }
      .btn-primary, .btn-secondary { width: 100%; justify-content: center; font-size: 0.8rem; }
    }

    /* Keyframes */
    @keyframes wmDrift {
      0%,100% { transform: translate(0,0); }
      33%      { transform: translate(14px,-18px); }
      66%      { transform: translate(-10px,12px); }
    }
    @keyframes wmPulse {
      0%,100% { transform: scale(1); }
      50%      { transform: scale(1.06); }
    }
    @keyframes wmFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
  `}</style>
);

// ─── Stat Card (AiMl Style) ─────────────────────────────────────────────────
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
        cursor: 'default', position: 'relative',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', overflow: 'hidden',
      }}
    >
      <div style={{ width: 'clamp(40px, 5vw, 54px)', height: 'clamp(40px, 5vw, 54px)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto clamp(12px, 2vw, 20px)', background: hovered ? `linear-gradient(135deg, ${t.color}, ${t.darkColor || t.color})` : 'rgba(255,255,255,0.05)', color: hovered ? '#fff' : t.color, border: `1px solid ${hovered ? 'transparent' : 'rgba(255,255,255,0.1)'}`, transition: 'all 0.4s ease', boxShadow: hovered ? `0 10px 20px ${t.color}40` : 'none' }}>
        <motion.div animate={{ rotate: hovered ? 360 : 0 }} transition={{ duration: 0.6 }}>
          {React.cloneElement(icon, { size: 22, strokeWidth: 2 })}
        </motion.div>
      </div>
      <div style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)', color: hovered ? 'transparent' : B.textDark, background: hovered ? `linear-gradient(180deg, #fff 30%, ${t.color} 100%)` : 'none', WebkitBackgroundClip: hovered ? 'text' : 'none', backgroundClip: hovered ? 'text' : 'none', marginBottom: 8, letterSpacing: '-0.03em', transition: 'all 0.3s ease' }}>
        {val}<span style={{ fontSize: '0.5em' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 'clamp(11px, 1.2vw, 13px)', letterSpacing: '0.12em', textTransform: 'uppercase', color: B.textDarkMuted, fontWeight: 700 }}>
        {label}
      </div>
    </motion.div>
  );
}

// ─── Deliverable Item (AiMl Style: Dark BG on Hover) ───────────────────────
function DeliverableItem({ text, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.4, delay: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, 
        padding: 'clamp(12px, 1.5vw, 16px)', 
        borderRadius: 'var(--radius-md)', 
        marginBottom: 10, 
        background: hovered ? color : 'rgba(255,255,255,0.5)', 
        border: `1px solid ${color}25`, 
        backdropFilter: 'blur(5px)',
        color: B.textMain,
        transition: 'all 0.3s ease',
      }}
    >
      <CheckCircle size={18} color={hovered ? B.textDark : color} style={{ flexShrink: 0, transition: 'color 0.3s' }}/>
      <span style={{ 
        fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)', 
        fontWeight: 500, 
        lineHeight: 1.5,
        color: hovered ? B.textDark : B.textMain,
        transition: 'color 0.3s ease'
      }}>{text}</span>
    </motion.div>
  );
}

// ─── Tech Badge ─────────────────────────────────────────────────────────────
function TechBadge({ label, color }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        padding: 'clamp(5px, 1vw, 7px) clamp(10px, 1.5vw, 14px)', borderRadius: 'var(--radius-sm)',
        background: h ? color : 'rgba(255,255,255,0.05)',
        border: `1.5px solid ${h ? color : 'rgba(255,255,255,0.15)'}`,
        color: h ? B.bgDark : color,
        fontSize: 'clamp(11px, 1.3vw, 13px)', fontWeight: 700, letterSpacing: '0.04em',
        transition: 'all 0.22s ease', cursor: 'default',
      }}
    >
      <Terminal size={11}/> {label}
    </span>
  );
}

// ─── Hero Visual: Animated Dashboard Preview ─────────────────────────────────
function DashboardPreview() {
  const [activeMetric, setActiveMetric] = useState(0);
  const metrics = [
    { label: 'Revenue',    value: '+24%', color: B.action,          bars: [40, 55, 48, 72, 65, 88, 76] },
    { label: 'Retention',  value: '94.2%', color: B.primary,  bars: [80, 83, 79, 91, 88, 94, 92] },
    { label: 'Conversion', value: '8.7%', color: B.accent,    bars: [5, 7, 6, 9, 8, 10, 9] },
  ];
  useEffect(() => { const t = setInterval(() => setActiveMetric(p => (p + 1) % metrics.length), 2000); return () => clearInterval(t); }, []);
  const m = metrics[activeMetric];

  return (
    <div style={{ 
      padding: 'clamp(18px, 2.5vw, 28px)', 
      borderRadius: 'var(--radius-xl)', 
      background: B.white, 
      border: `1.5px solid ${B.primaryBorder}`, 
      boxShadow: B.cardShadow,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{ fontSize: 'clamp(14px, 1.2vw, 17px)', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: B.textMuted, textAlign: 'center', marginBottom: 16 }}>Analytics Dashboard</div>
      {/* KPI cards */}
      <div style={{ display: 'flex', gap: 'clamp(6px, 1vw, 10px)', marginBottom: 16 }}>
        {metrics.map((met, i) => (
          <div key={i} onClick={() => setActiveMetric(i)}
            style={{ flex: 1, padding: 'clamp(8px, 1.2vw, 12px) clamp(8px, 1.3vw, 12px)', borderRadius: 10, background: activeMetric === i ? `${met.color}12` : 'rgba(255,255,255,0.6)', border: `1.5px solid ${activeMetric === i ? met.color : B.primaryBorder}`, cursor: 'pointer', transition: 'all 0.3s ease' }}>
            <div style={{ fontSize: 'clamp(14px, 1.1vw, 14.5px)', color: B.textMuted, fontWeight: 600, marginBottom: 3 }}>{met.label}</div>
            <div style={{ fontWeight: 800, fontSize: 'clamp(18px, 2vw, 24px)', color: met.color }}>{met.value}</div>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div style={{ height: 'clamp(80px, 12vw, 100px)', display: 'flex', alignItems: 'flex-end', gap: 'clamp(4px, 0.8vw, 6px)', padding: '0 4px', marginBottom: 12 }}>
        {m.bars.map((h, i) => (
          <motion.div key={`${activeMetric}-${i}`} initial={{ height: 0 }} animate={{ height: `${h}%` }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: 1, borderRadius: 4, background: `linear-gradient(to top, ${m.color}, ${m.color}70)` }}/>
        ))}
      </div>
      {/* Stats row */}
      <div style={{ display: 'flex', gap: 'clamp(8px, 1.2vw, 10px)' }}>
        {[{ l: '50+', s: 'Dashboards', c: B.action }, { l: '3x', s: 'Faster', c: B.primary }, { l: '99%', s: 'Accuracy', c: B.accent }].map((stat, i) => (
          <div key={i} style={{ fontSize: 'clamp(14px, 1.1vw, 14.5px)', flex: 1, textAlign: 'center', padding: 'clamp(7px, 1.2vw, 10px) 6px', borderRadius: 9, background: B.bgLight, border: `1px solid ${B.primaryBorder}` }}>
            <div style={{ fontWeight: 800, fontSize: 'clamp(13px, 2vw, 17px)', color: stat.c, marginBottom: 2 }}>{stat.l}</div>
            <div style={{ fontSize: 'clamp(9px, 1.1vw, 10px)', color: B.textMuted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Data & Content ─────────────────────────────────────────────────────────
const features = [
  { icon: <Layout/>, title: 'Business Intelligence', desc: 'Interactive Power BI, Tableau, and custom dashboards that give your team real-time visibility into KPIs.', color: B.action },
  { icon: <TrendingUp/>, title: 'Predictive Analytics', desc: 'Revenue forecasting, demand planning, churn modelling. Statistical models that turn historical data into future insights.', color: B.primary },
  { icon: <Database/>, title: 'Data Warehousing', desc: 'Clean data architecture with automated ETL/ELT pipelines. Snowflake, BigQuery warehouses built for speed.', color: B.accent },
  { icon: <Filter/>, title: 'Data Quality Eng', desc: 'Profiling, deduplication, schema validation. We turn messy, siloed data sources into a single trusted foundation.', color: B.secondary },
  { icon: <Search/>, title: 'Statistical Analysis', desc: 'A/B testing, regression analysis, cohort studies. Rigorous methodology with plain-language reporting.', color: '#00B4D8' },
  { icon: <FileText/>, title: 'Executive Reporting', desc: 'Automated report generation and data narratives that translate complex analysis into board-ready decisions.', color: '#FF9F1C' },
];

const processes = [
  { step: '01', title: 'Data Audit & Strategy', desc: 'We map your data sources, assess quality, identify gaps, and agree on the metrics that will drive real decisions before any building starts.' },
  { step: '02', title: 'Data Architecture', desc: 'Schema design, warehouse selection, and pipeline architecture. We build for scalability and analyst self-service.' },
  { step: '03', title: 'Analysis & Visualisation', desc: 'Statistical analysis, model development, and dashboard build. Every visualisation is reviewed for clarity and actionability.' },
  { step: '04', title: 'Handoff & Enablement', desc: 'Dashboard handoff with documentation, a training session for your team, and 30 days of support for independence.' },
];

const deliverables = [
  'Interactive dashboard (Power BI / Tableau / custom React)',
  'Documented ETL/ELT pipeline with test coverage',
  'Statistical analysis report with methodology notes',
  'Data dictionary and schema documentation',
  'Automated report templates for recurring business reviews',
  'Team training session on using and extending the dashboard',
  '30-day post-launch support',
];

const tiers = [
  { name: 'Data Report', price: 'From $1,200', desc: 'A focused statistical analysis or custom report with key findings and visualisations.', features: ['One analytical question', 'Statistical methodology', 'Charts + written summary', 'Executive slide deck', '5–8 day turnaround'], featured: false },
  { name: 'Analytics Dashboard', price: 'From $4,000', desc: 'Production-ready BI dashboard with live data connections and interactive filters.', features: ['Interactive dashboard build', 'Live data integration (2–4 sources)', 'KPI design + data modelling', 'Training + documentation', '3–5 week delivery'], featured: true },
  { name: 'Data Platform', price: 'Custom', desc: 'Full data warehouse, multiple dashboards, automated reporting, and ongoing analytics support.', features: ['Data warehouse architecture', 'Multiple dashboards + reports', 'Automated scheduled reporting', 'Data governance setup', 'Analytics retainer option'], featured: false },
];

const stats = [
  { target: 50,  suffix: '+', label: 'Dashboards Delivered', theme: { color: B.action,         bg: 'rgba(11, 124, 147,0.1)'  } },
  { target: 3,   suffix: 'x', label: 'Faster Insights',      theme: { color: '#9D4EDD',  bg: 'rgba(157,78,221,0.1)' } },
  { target: 99,  suffix: '%', label: 'Data Accuracy',         theme: { color: '#FF9F1C',  bg: 'rgba(255,159,28,0.1)' } },
  { target: 40,  suffix: '%', label: 'Cost Reduction',        theme: { color: '#00F5D4',  bg: 'rgba(0,245,212,0.1)'  } },
];

const processColors = [B.action, B.primary, B.accent, B.secondary];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ServicesDataAnalytics() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.20 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const techStack = [
    { label: 'Python',          color: B.action },
    { label: 'Power BI',        color: B.action },
    { label: 'Tableau',         color: B.primary },
    { label: 'SQL',             color: B.secondary },
    { label: 'Snowflake',       color: B.accent },
    { label: 'BigQuery',        color: B.action },
    { label: 'Pandas',          color: B.primary },
    { label: 'Looker',          color: B.secondary },
  ];

  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-body, sans-serif)' }}>

      {/* ══════════ 1. HERO ══════════ */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', zIndex: 1,
        background: B.heroBg,
        paddingTop: 'clamp(40px, 5vw, 50px)',
      }}>
        {/* CHANGE: Added HeroGridBg for consistency */}
        <HeroGridBg opacity={0.35}/>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(90deg, rgba(127,32,55,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }}/>
        <DataParticles count={18}/>

        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
          position: 'relative', zIndex: 10,
        }}>
          
          {/* HERO CONTENT CONTAINER */}
          <div style={{ maxWidth: 1200, width: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 5vw, 60px)' }}>

            {/* TOP ROW: Text + Visual */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'clamp(18px, 5vw, 44px)' }}>

              {/* Left — Text */}
              <motion.div
                initial="hidden" animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                style={{ flex: '1 1 clamp(280px, 45%, 600px)', display: 'flex', flexDirection: 'column' }}
              >
                <motion.div custom={0}>
                  <SectionBadge>Data Analytics Services</SectionBadge>
                </motion.div>

                <motion.h1 custom={0.05}
                  style={{
                    fontWeight: 700,
                    fontSize: 'var(--fs-hero)',
                    lineHeight: 1.1, letterSpacing: '-0.02em',
                    marginBottom: 'clamp(14px, 2vw, 24px)', color: B.primaryDark,
                  }}>
                  Data That Answers<br/>
                  <span style={{ background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    The Right Questions.
                  </span>
                </motion.h1>

                {/* CHANGE: Text size synced with AiMl (1.8vw) */}
                <motion.p custom={0.15}
                  style={{ fontSize: 'clamp(0.88rem, 1.8vw, 1.15rem)', fontWeight: 500, color: B.textMid, marginBottom: 'clamp(20px, 3vw, 36px)', lineHeight: 1.75 }}>
                  WellMind Data Solutions designs and deploys Analytics systems that act as a strategic extension of your business. Our work ranges from audits to full production-grade platforms trusted by enterprises globally.
                </motion.p>

                <motion.div custom={0.25} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 1.5vw, 20px)' }}>
                  <Link to="/contact" className="btn-primary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                    <Zap size={16}/> Start Your Project
                  </Link>
                  <Link to="/case-studies" className="btn-secondary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                    View Case Studies <ArrowRight size={16}/>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — Visual (Dashboard Preview - Full Height Logic) */}
              {/* CHANGE: Applied minHeight and alignSelf from AiMl Image container */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  flex: '1 1 clamp(260px, 40%, 600px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 'clamp(300px, 42vw, 560px)', 
                  alignSelf: 'stretch',
                }}
              >
                <DashboardPreview />
              </motion.div>
            </div>

            {/* BOTTOM ROW: Tags (Centered) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 'clamp(12px, 2vw, 20px)', 
                justifyContent: 'center',
                width: '100%',
                paddingTop: 'clamp(10px, 2vw, 20px)',
                borderTop: `1px solid ${B.primaryBorder}40`
              }}
            >
              {['Self-Service Dashboards', 'Fixed-Fee Projects'].map((t, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: 'clamp(8px, 1vw, 12px) clamp(14px, 2vw, 20px)', borderRadius: 50,
                  background: 'rgba(255,255,255,0.6)', border: `1px solid ${B.primaryBorder}`,
                  fontSize: 'clamp(12px, 1.5vw, 15px)', fontWeight: 600, color: B.textMain,
                  boxShadow: '0 4px 12px rgba(107, 46, 116, 0.05)',
                  animation: `wmFloat ${3 + i * 0.5}s ease-in-out infinite`,
                }}>
                  <CheckCircle size={14} color={B.action}/> {t}
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
            <SectionBadge dark style={{ color: B.textDarkMuted, marginBottom: 20 }}>Proven Excellence</SectionBadge>
            <h2 className="section-h2 dark" style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3.5vw, 40px)' }}>Measurable Analytics Impact</h2>
            <div className="grid-stats">
              {stats.map((s, i) => (
                <StatCard key={i} target={s.target} suffix={s.suffix} label={s.label} icon={i === 0 ? <BarChart3 size={20}/> : i === 1 ? <Activity size={20}/> : i === 2 ? <TrendingUp size={20}/> : <Database size={20}/>} start={statsVisible} delay={i * 0.1} theme={s.theme}/>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(10px, 1.2vw, 11px)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: B.textDarkMuted, marginBottom: 16 }}>Our Analytics Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 1.2vw, 12px)', justifyContent: 'center' }}>
              {techStack.map((t, i) => <TechBadge key={i} {...t}/>)}
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
        {/* CHANGE: Added SectionGridBg for consistency */}
        <SectionGridBg opacity={0.25}/>
        <DataParticles count={10}/>

        {/* Capabilities */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
            <SectionBadge>What We Build</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>
              End-to-End Analytics Capabilities
            </h2>
            <p className="section-lead" style={{ maxWidth: 1200 }}>
              From raw data to intelligent decisions, we cover the full analytics spectrum so your team stays focused on outcomes, not infrastructure.
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
          {/* CHANGE: Max Width 1250px set here as per AiMl */}
          <div style={{ ...PX, maxWidth: 1250, display: 'flex', gap: 'clamp(28px, 5vw, 80px)', flexWrap: 'wrap' }}>

            {/* Process */}
            <div style={{ flex: '1 1 min(100%, 400px)' }}>
              <SectionBadge>How It Works</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>Our Analytics Process</h2>
              {processes.map((p, i) => {
                const color = processColors[i % processColors.length];
                return <ProcessStep key={i} {...p} color={color} i={i}/>;
              })}
            </div>

            {/* Deliverables */}
            <div style={{ flex: '1 1 min(100%, 380px)' }}>
              <SectionBadge>What You Get</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 12 }}>Full Ownership. Zero Black Boxes.</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)', color: B.textMid, lineHeight: 1.7, marginBottom: 'clamp(24px, 3.5vw, 36px)' }}>
                Every engagement delivers production-ready dashboards and reports that your team can maintain and extend independently.
              </p>
              
              {deliverables.map((d, i) => {
                const color = processColors[i % processColors.length];
                return <DeliverableItem key={i} text={d} color={color} />;
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
            <p className="section-lead dark" style={{ maxWidth: 480 }}>
              Fixed-fee engagements. Scope agreed in writing before we start. No surprise invoices, ever.
            </p>
          </div>
          <div className="grid-pricing">
            {tiers.map((tier, i) => <PricingCard key={i} tier={tier} accentColor={B.action} i={i}/>)}
          </div>
        </div>
      </section> */}

      {/* ══════════ 5. FINAL CTA (LIGHT) ══════════ */}
      <section style={{
        padding: `clamp(60px, 10vw, 120px) 0`,
        position: 'relative', overflow: 'hidden', zIndex: 1,
        background: 'linear-gradient(180deg, #F5F1F6 0%, #E8E1F0 100%)',
      }}>
        <DataParticles count={14}/>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 46, 116,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(11, 124, 147,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }}/>

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Let's Turn Data Into<br/>
              <span style={{ background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Actionable Intelligence.
              </span>
            </h2>
            <p className="section-lead" style={{ color: B.textMid, maxWidth: 1200, margin: '0 auto clamp(24px, 3.5vw, 48px)', lineHeight: 1.75 }}>
              Book a free 30-minute call. Tell us your data challenge. We'll give you honest feedback on what's achievable, what it costs, and whether Analytics is even the right tool. No sales pitch.
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
                <Zap size={18}/> Book Your Free Consultation <ArrowRight size={18}/>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SharedStyles/>
    </div>
  );
}