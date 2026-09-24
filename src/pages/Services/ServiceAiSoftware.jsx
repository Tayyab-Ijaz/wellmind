/**
 * ServiceAiSoftware.jsx — WellMind Data Solutions
 * /services/ai-software
 * Custom AI-powered software development: APIs, pipelines, full-stack intelligent systems.
 *
 * CHANGES:
 * 1. Removed all ./serviceShared dependencies — self-contained component.
 * 2. Section order & dark/light pattern matched to ServicesAiMl.jsx:
 *    Hero (light) → Stats (DARK) → Capabilities + Process/Deliverables (light-mid) → Pricing (DARK) → CTA (light)
 * 3. Text sizes, margins, colours, BG styling fully synced with ServicesAiMl.jsx.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2, Cpu, GitBranch, Server, Layers, ShieldCheck,
  Zap, ArrowRight, Database, Globe, BarChart3, Lock,
  Rocket, CheckCircle, Terminal, Boxes, Brain, Activity,
} from 'lucide-react';

import { HeroGridBg, SectionGridBg } from '../../components/BgGrid';
import { B, SECTION_PAD, PX, fadeUp, useCounter, DataParticles, SectionBadge, SectionDivider, CircuitBg } from '../../theme';

// ─── Brand Tokens (Synced with ServicesAiMl.jsx) ─────────────────────────────
// Page-specific accent — deep purple / software vibe
const AC = B.primaryMid;

// ─── Layout Constants (Synced with ServicesAiMl.jsx) ─────────────────────────
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
        color: color,
        transition: 'all 0.3s ease',
      }}>
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <h4 style={{
        fontWeight: 700, fontSize: 'var(--fs-card-title)',
        color: hovered ? B.textDark : B.textMain,
        marginBottom: 10, lineHeight: 1.3,
        transition: 'color 0.3s ease',
      }}>{title}</h4>
      <p style={{
         fontSize: 'var(--fs-card-body)',
        color: hovered ? B.textDarkMid : B.textMid,
        lineHeight: 1.7,
        transition: 'color 0.3s ease',
      }}>{desc}</p>
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
        transition: 'color 0.3s ease',
      }}>{text}</span>
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

// ─── Tech Badge (dark section) ────────────────────────────────────────────────
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

// ─── Section Divider ──────────────────────────────────────────────────────────
// ─── Hero Architecture Diagram ────────────────────────────────────────────────
function ArchDiagram() {
  const [hovered, setHovered] = useState(null);
  const layers = [
    { label: 'User Interface', color: B.accent, top: '8%',  icons: ['React', 'Next.js', 'Vite'] },
    { label: 'AI/ML Layer',    color: B.action,  top: '34%', icons: ['PyTorch', 'HuggingFace'] },
    { label: 'API Gateway',    color: AC,         top: '60%', icons: ['FastAPI', 'REST', 'Django'] },
    { label: 'Data Store',     color: B.secondary,top: '84%', icons: ['PostgreSQL', 'Firebase'] },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 340, height: 380, margin: '0 auto' }}>
      <div style={{ position: 'absolute', left: '50%', top: '10%', bottom: '10%', width: 2, background: `linear-gradient(to bottom, ${B.accent}60, ${B.action}60, ${AC}60, ${B.secondary}60)`, transform: 'translateX(-50%)' }}/>
      {layers.map((layer, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            position: 'absolute', top: layer.top,
            left: i % 2 === 0 ? '0%' : '28%',
            width: '70%',
            padding: '12px 16px', borderRadius: 'var(--radius-md)',
            background: hovered === i ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.70)',
            backdropFilter: 'blur(8px)',
            border: `1.5px solid ${hovered === i ? layer.color : layer.color + '50'}`,
            boxShadow: hovered === i ? `0 8px 28px ${layer.color}30` : '0 2px 12px rgba(0,0,0,0.06)',
            transition: 'all 0.28s ease', cursor: 'default',
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 12.5, color: layer.color, marginBottom: 6 }}>{layer.label}</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {layer.icons.map((ic, ii) => (
              <span key={ii} style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 99, background: `${layer.color}12`, border: `1px solid ${layer.color}30`, color: layer.color }}>
                {ic}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
      {[0, 1, 2].map(i => (
        <motion.div key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.1 }}
          style={{
            position: 'absolute', left: '50%',
            top: `${22 + i * 26}%`,
            width: 16, height: 16,
            borderRight: `2px solid ${B.action}70`,
            borderBottom: `2px solid ${B.action}70`,
            transform: 'translateX(-50%) rotate(45deg)',
          }}
        />
      ))}
    </div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const features = [
  { icon: <Cpu/>, title: 'AI-Native Architecture', desc: 'Systems designed from the ground up with intelligence baked in, not bolted on afterward. Every component knows how to serve the model layer.', color: AC },
  { icon: <Server/>, title: 'Production-Grade APIs', desc: 'FastAPI, REST, and GraphQL endpoints built for real traffic, with auth, rate-limiting, versioning, and monitoring included by default.', color: B.action },
  { icon: <GitBranch/>, title: 'ML Pipeline Integration', desc: 'Training, evaluation, and inference pipelines wired into your application. Model versioning, A/B testing, and automated retraining loops.', color: B.accent },
  { icon: <Layers/>, title: 'Full-Stack Capability', desc: 'We can own the entire stack (from React frontend to Python backend to cloud infrastructure) or slot into your existing architecture.', color: B.secondary },
  { icon: <ShieldCheck/>, title: 'Security & Compliance', desc: 'HIPAA, GDPR, and SOC 2 readiness built into the design. Encryption at rest and in transit, role-based access, full audit trails.', color: AC },
  { icon: <Rocket/>, title: 'Deployed & Monitored', desc: 'Docker, Kubernetes, AWS/GCP. Not just "it works locally": delivered with CI/CD, alerting, and a monitoring dashboard from day one.', color: B.action },
];

const processes = [
  { step: '01', title: 'Discovery & Architecture', desc: 'We audit your existing stack, define the AI integration points, and produce a system architecture doc before a single line of code is written.' },
  { step: '02', title: 'Prototype & Validate', desc: 'A working prototype with your real data in hand, usually within two weeks. Validation before full build prevents expensive pivots later.' },
  { step: '03', title: 'Build & Integrate', desc: 'Sprint-based development with weekly demos. Your team reviews real working software, no PowerPoints, no vague promises.' },
  { step: '04', title: 'Deploy & Handoff', desc: 'Production deployment with CI/CD, monitoring, and a documented handoff. We stay available for 30 days post-launch for any issues.' },
];

const deliverables = [
  'Documented system architecture with API specs',
  'Source code with test coverage (your repo)',
  'Dockerised deployable with environment configs',
  'CI/CD pipeline (GitHub Actions or equivalent)',
  'Monitoring dashboard + alerting setup',
  'Runbook and internal documentation',
  '30-day post-launch support window',
];

const techStack = [
  { label: 'Python',       color: B.action   },
  { label: 'FastAPI',      color: B.primary  },
  { label: 'React',        color: B.accent   },
  { label: 'Docker',       color: B.action   },
  { label: 'PostgreSQL',   color: B.secondary},
  { label: 'AWS / GCP',    color: AC         },
  { label: 'PyTorch',      color: B.action   },
  { label: 'Kubernetes',   color: B.primary  },
  { label: 'Firebase',     color: B.secondary},
  { label: 'GitHub CI/CD', color: AC         },
];

const tiers = [
  {
    name: 'Prototype',
    price: 'From $3,500',
    desc: 'A working proof-of-concept: AI feature integrated, deployed, demo-ready.',
    features: ['Single AI feature integration', 'REST API endpoint', 'Basic auth + deployment', 'Docker setup', '2–3 week delivery'],
    featured: false,
  },
  {
    name: 'Production App',
    price: 'From $9,000',
    desc: 'Full-stack AI-powered application built for real users and real traffic.',
    features: ['Multi-feature AI integration', 'Frontend + backend', 'Auth, monitoring, CI/CD', 'Cloud deployment (AWS/GCP)', '6–10 week delivery', '30-day post-launch support'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Complex systems, legacy integration, regulatory compliance, and ongoing support.',
    features: ['Full architecture ownership', 'Legacy system integration', 'HIPAA / GDPR compliance', 'Dedicated senior engineer', 'Ongoing maintenance option'],
    featured: false,
  },
];

const stats = [
  { target: 50,  suffix: '+', label: 'Systems Shipped',    icon: <Rocket size={20}/>,   theme: { color: '#00BBF9', bg: 'rgba(0,187,249,0.1)'   } },
  { target: 99,  suffix: '%', label: 'Uptime Guarantee',   icon: <Activity size={20}/>, theme: { color: '#9D4EDD', bg: 'rgba(157,78,221,0.1)'  } },
  { target: 10,  suffix: 'x', label: 'Faster to Market',   icon: <Zap size={20}/>,      theme: { color: '#FF9F1C', bg: 'rgba(255,159,28,0.1)'  } },
  { target: 100, suffix: '%', label: 'Code Ownership',     icon: <ShieldCheck size={20}/>, theme: { color: '#00F5D4', bg: 'rgba(0,245,212,0.1)' } },
];

const processColors = [B.action, B.primary, B.accent, B.secondary];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ServiceAiSoftware() {
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
        <div style={{ position: 'absolute', left: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(90deg, rgba(71,35,79,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }}/>
        <DataParticles count={18}/>

        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
          position: 'relative', zIndex: 10,
        }}>
          <div style={{ maxWidth: 1200, width: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 5vw, 60px)' }}>

            {/* TOP ROW: Text + Arch Diagram */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch', gap: 'clamp(18px, 5vw, 44px)' }}>

              {/* Left — Text */}
              <motion.div
                initial="hidden" animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                style={{ flex: '1 1 clamp(280px, 45%, 600px)', display: 'flex', flexDirection: 'column' }}
              >
                <motion.div variants={fadeUp} custom={0}>
                  <SectionBadge>AI-Powered Software Development</SectionBadge>
                </motion.div>

                <motion.h1 variants={fadeUp} custom={0.05}
                  style={{
                    fontWeight: 700,
                    fontSize: 'var(--fs-hero)',
                    lineHeight: 1.1, letterSpacing: '-0.02em',
                    marginBottom: 'clamp(14px, 2vw, 24px)', color: B.primaryDark,
                  }}>
                  Software That Thinks,<br/>
                  <span style={{ background: `linear-gradient(90deg, ${AC}, ${B.action})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Not Just Executes.
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={0.15}
                  style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.5rem)', fontWeight: 500, color: B.textMid, marginBottom: 'clamp(20px, 3vw, 36px)', lineHeight: 1.75 }}>
                  We build custom software architectures deeply integrated with AI capabilities, from intelligent APIs and ML pipelines to full-stack applications that learn from your data and scale with your business.
                </motion.p>

                <motion.div variants={fadeUp} custom={0.25} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                  <Link to="/contact" className="btn-primary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                    <Zap size={16}/> Start a Project
                  </Link>
                  <Link to="/case-studies" className="btn-secondary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                    View Case Studies <ArrowRight size={16}/>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — Architecture Diagram */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  flex: '1 1 clamp(260px, 40%, 520px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  minHeight: '300px',
                }}
              >
                <div style={{
                  padding: 'clamp(24px, 3vw, 36px) clamp(18px, 2.5vw, 28px)',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(14px)',
                  border: `2px solid ${AC}30`,
                  boxShadow: `0 20px 60px ${AC}15`,
                  width: '100%',
                  maxWidth: 400,
                }}>
                  <div style={{ fontSize: 'clamp(10px, 1.2vw, 12px)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: AC, textAlign: 'center', marginBottom: 24 }}>
                    System Architecture
                  </div>
                  <ArchDiagram/>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM ROW: Trust Tags (Centered) */}
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
                borderTop: `1px solid ${B.primaryBorder}40`,
              }}
            >
              {['From Prototype to Production', 'Full-Stack Ownership'].map((t, i) => (
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
            <SectionBadge dark style={{ color: B.textDarkMuted, marginBottom: 20 }}>Proven Track Record</SectionBadge>
            <h2 className="section-h2 dark" style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3.5vw, 40px)' }}>Software Delivered at Scale</h2>
            <div className="grid-stats" style={{ width: '100%' }}>
              {stats.map((s, i) => (
                <StatCard key={i} target={s.target} suffix={s.suffix} label={s.label} icon={s.icon} start={statsVisible} delay={i * 0.1} theme={s.theme}/>
              ))}
            </div>
          </div>

          {/* Tech Stack (dark bg) */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(10px, 1.2vw, 11px)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: B.textDarkMuted, marginBottom: 16 }}>Our Software Stack</p>
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
        <SectionGridBg opacity={0.25}/>
        <DataParticles count={10}/>

        {/* Capabilities */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
            <SectionBadge>What We Build</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>
              End-to-End AI Software Capabilities
            </h2>
            <p className="section-lead" style={{ maxWidth: 1200 }}>
              Production-ready AI software engineered for scale, security, and real business impact, from intelligent APIs to full-stack systems.
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
              <SectionBadge>How It Works</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>Our Build Process</h2>
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
              <h2 className="section-h2" style={{ marginBottom: 12 }}>Full Ownership. Zero Black Boxes.</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)', color: B.textMid, lineHeight: 1.7, marginBottom: 'clamp(24px, 3.5vw, 36px)' }}>
                Everything you need to own and operate your system independently, no black boxes, no dependency on us.
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
              Fixed-fee engagements. No hourly billing surprises. Scope is agreed in writing before we ever start.
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
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(71,35,79,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(11, 124, 147,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }}/>

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Let's Build Something<br/>
              <span style={{ background: 'linear-gradient(90deg, #C47B8A 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Genuinely Intelligent.
              </span>
            </h2>
            <p className="section-lead" style={{ color: B.textMid, maxWidth: 1200, margin: '0 auto clamp(24px, 3.5vw, 48px)', lineHeight: 1.75 }}>
              Tell us what you're building. We'll scope it, price it honestly, and start within a week of agreement. No sales pitch.
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
</div>
  );
}