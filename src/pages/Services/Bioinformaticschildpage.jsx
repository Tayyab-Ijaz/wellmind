/**
 * BioinformaticsChildPage.jsx — WellMind Data Solutions
 * Generic child service page for Bioinformatics & Health AI sub-services.
 * Reads :childId from URL params, fetches data from bioinformaticsChildData.js.
 *
 * Route example:  /services-bioinformatics/rna-seq
 *                 /services-bioinformatics/clinical-ai
 *                 /services-bioinformatics/drug-discovery
 *
 * Hero right section: per-service GenomicsPipeline (mirrors ServicesBioinformatics.jsx exactly).
 * Drop into your router:
 *   <Route path="/services-bioinformatics/:childId" element={<BioinformaticsChildPage />} />
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Dna, FlaskConical, GitBranch, BarChart3, Shield, Activity,
  Microscope, Brain, Database, Layers, Globe, BookOpen,
  Zap, ArrowRight, CheckCircle, Terminal,
  Eye, RefreshCw, Webhook, TrendingDown,
} from 'lucide-react';

import { HeroGridBg, SectionGridBg } from '../../components/BgGrid';

import {
  B, PX, fadeUp, useCounter,
  DataParticles, SectionBadge, SectionDivider, CircuitBg,
} from '../../theme';

import { BIOINFORMATICS_CHILDREN } from './Bioinformaticschilddata';

// ─── Brand color ──────────────────────────────────────────────────────────────
const AC = '#1A8A72'; // bioinformatics teal/green — parent page AC

// ─── Icon resolver ─────────────────────────────────────────────────────────────
const ICON_MAP = {
  Dna, FlaskConical, GitBranch, BarChart3, Shield, Activity,
  Microscope, Brain, Database, Layers, Globe, BookOpen,
  Zap, Eye, RefreshCw, Webhook, TrendingDown, Terminal,
};
function Icon({ name, size = 16 }) {
  const C = ICON_MAP[name] || Dna;
  return <C size={size} />;
}

// ─── Per-Service Genomics Pipeline (mirrors ServicesBioinformatics.jsx exactly) ──
function GenomicsPipeline({ steps, accentColor }) {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const color = accentColor || AC;

  useEffect(() => {
    const t = setInterval(() => setActiveStep(p => (p + 1) % steps.length), 1400);
    return () => clearInterval(t);
  }, [steps.length]);

  const miniStats = [
    { l: '60%',  s: 'Faster Analysis', c: color      },
    { l: '99.9%',s: 'Reproducible',    c: B.action   },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{
        padding: 'clamp(20px, 3vw, 32px)',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(240,248,245,0.88) 100%)',
        border: `2px solid ${color}30`,
        boxShadow: `0 20px 60px -10px ${color}25, 0 4px 20px rgba(0,0,0,0.08)`,
        backdropFilter: 'blur(12px)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Decorative glow orbs */}
      <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: `radial-gradient(circle, ${B.action}12 0%, transparent 70%)`, pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 'clamp(11px, 1.4vw, 13px)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color, marginBottom: 2 }}>
            Analysis Pipeline
          </div>
          <div style={{ fontSize: 'clamp(9px, 1.1vw, 11px)', color: B.textMuted, fontWeight: 500 }}>
            Live Processing Simulation
          </div>
        </div>
        {/* Spinning loader */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ width: 32, height: 32, borderRadius: '50%', border: `2px solid ${color}40`, borderTopColor: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
        </motion.div>
      </div>

      {/* Pipeline Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18, flex: 1 }}>
        {steps.map((step, i) => {
          const isActive  = activeStep === i;
          const isPast    = i < activeStep;
          const isHovered = hoveredStep === i;
          return (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
              animate={{ x: isActive ? 4 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 1.5vw, 14px)', cursor: 'default' }}
            >
              {/* Node circle */}
              <motion.div
                animate={{
                  background: isActive ? step.color : isPast ? `${AC}30` : 'rgba(255,255,255,0.8)',
                  borderColor: isActive ? step.color : isPast ? AC : B.primaryBorder,
                  boxShadow: isActive ? `0 0 18px ${step.color}70` : 'none',
                }}
                transition={{ duration: 0.4 }}
                style={{
                  width: 'clamp(32px, 4.5vw, 40px)',
                  height: 'clamp(32px, 4.5vw, 40px)',
                  borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid',
                  color: isActive ? '#fff' : isPast ? AC : B.textMuted,
                  transition: 'color 0.3s',
                }}
              >
                {isPast
                  ? <CheckCircle size={15} color={AC} />
                  : (
                    <motion.div animate={{ scale: isActive ? [1, 1.2, 1] : 1 }} transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}>
                      <Icon name={step.iconName} size={14} />
                    </motion.div>
                  )
                }
              </motion.div>

              {/* Label row */}
              <motion.div
                animate={{
                  background: isActive
                    ? `linear-gradient(135deg, ${step.color}18, ${step.color}08)`
                    : isHovered ? `${step.color}10` : 'rgba(255,255,255,0.6)',
                  borderColor: isActive ? `${step.color}60` : isHovered ? `${step.color}40` : B.primaryBorder,
                }}
                transition={{ duration: 0.35 }}
                style={{
                  flex: 1,
                  padding: 'clamp(8px, 1.2vw, 11px) clamp(12px, 1.8vw, 16px)',
                  borderRadius: 11, border: '1.5px solid',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
                }}
              >
                <div>
                  <div style={{
                    fontWeight: 700, fontSize: 'clamp(12px, 1.6vw, 15px)',
                    color: isActive ? step.color : isHovered ? step.color : B.textMain,
                    transition: 'color 0.3s', marginBottom: 2, lineHeight: 1.2,
                  }}>{step.label}</div>
                  <div style={{
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    color: isActive ? `${step.color}90` : B.textMuted,
                    fontWeight: 600, fontFamily: 'monospace', transition: 'color 0.3s',
                  }}>{step.sub}</div>
                </div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      padding: '3px 10px', borderRadius: 99,
                      background: step.color, color: '#fff',
                      fontSize: 10, fontWeight: 800,
                      letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                    }}
                  >
                    Running
                  </motion.div>
                )}
                {isPast && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      padding: '3px 10px', borderRadius: 99,
                      background: `${AC}20`, border: `1px solid ${AC}40`,
                      color: AC, fontSize: 10, fontWeight: 800,
                      letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                    }}
                  >
                    Done
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 'clamp(10px, 1.2vw, 12px)', fontWeight: 700, color: B.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pipeline Progress</span>
          <span style={{ fontSize: 'clamp(10px, 1.2vw, 12px)', fontWeight: 800, color }}>{Math.round((activeStep / (steps.length - 1)) * 100)}%</span>
        </div>
        <div style={{ height: 6, borderRadius: 99, background: `${color}18`, overflow: 'hidden' }}>
          <motion.div
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ height: '100%', borderRadius: 99, background: `linear-gradient(90deg, ${color}, ${B.action})`, boxShadow: `0 0 10px ${color}60` }}
          />
        </div>
      </div>

      {/* Mini Stats */}
      <div style={{ display: 'flex', gap: 'clamp(6px, 1.2vw, 10px)' }}>
        {miniStats.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -3, boxShadow: `0 8px 20px ${m.c}30` }}
            style={{
              flex: 1, textAlign: 'center',
              padding: 'clamp(10px, 1.5vw, 14px) 6px',
              borderRadius: 'var(--radius-md)',
              background: `linear-gradient(135deg, ${m.c}12, ${m.c}06)`,
              border: `1.5px solid ${m.c}30`,
              cursor: 'default', transition: 'all 0.25s ease',
            }}
          >
            <div style={{ fontWeight: 800, fontSize: 'clamp(15px, 2.2vw, 20px)', color: m.c, marginBottom: 3, lineHeight: 1 }}>{m.l}</div>
            <div style={{ fontSize: 'clamp(9px, 1.1vw, 11px)', color: B.textMuted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.2 }}>{m.s}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ iconName, title, desc, i, color }) {
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
        width: 'clamp(44px, 6vw, 54px)', height: 'clamp(44px, 6vw, 54px)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto clamp(14px, 2vw, 20px)',
        background: hovered ? B.white : `${color}15`,
        color, transition: 'all 0.3s ease',
      }}>
        <Icon name={iconName} size={22} />
      </div>
      <h4 style={{
        fontWeight: 700, fontSize: 'var(--fs-card-title)',
        color: hovered ? B.textDark : B.textMain,
        marginBottom: 10, lineHeight: 1.3, transition: 'color 0.3s ease',
      }}>{title}</h4>
      <p style={{
        fontSize: 'var(--fs-card-body)',
        color: hovered ? B.textDarkMid : B.textMid,
        lineHeight: 1.7, transition: 'color 0.3s ease',
      }}>{desc}</p>
    </motion.div>
  );
}

// ─── Deliverable Item ─────────────────────────────────────────────────────────
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
        borderRadius: 'var(--radius-md)',
        marginBottom: 10,
        background: hovered ? color : 'rgba(255,255,255,0.5)',
        border: `1px solid ${color}25`,
        backdropFilter: 'blur(5px)',
        transition: 'all 0.3s ease',
      }}
    >
      <CheckCircle size={18} color={hovered ? B.textDark : color} style={{ flexShrink: 0, transition: 'color 0.3s' }} />
      <span style={{
        fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)',
        fontWeight: 500, lineHeight: 1.5,
        color: hovered ? B.textDark : B.textMain,
        transition: 'color 0.3s ease',
      }}>{text}</span>
    </motion.div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ target, suffix, label, iconName, start, delay = 0, color }) {
  const val = useCounter(target, 2000, start);
  const [hovered, setHovered] = useState(false);
  const bg = `${color}15`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
      style={{
        background: hovered ? `linear-gradient(145deg, ${bg}, rgba(255,255,255,0.02))` : 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(12px)',
        border: `1.5px solid ${hovered ? color : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered ? `0 0 25px ${color}40, inset 0 0 10px ${color}10` : 'none',
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(16px, 2.5vw, 28px) clamp(10px, 2vw, 20px)',
        textAlign: 'center', cursor: 'default',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
    >
      <div style={{
        width: 'clamp(40px, 5vw, 54px)', height: 'clamp(40px, 5vw, 54px)',
        borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto clamp(12px, 2vw, 20px)',
        background: hovered ? `linear-gradient(135deg, ${color}, ${color})` : 'rgba(255,255,255,0.05)',
        color: hovered ? '#fff' : color,
        border: `1px solid ${hovered ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
        transition: 'all 0.4s ease',
        boxShadow: hovered ? `0 10px 20px ${color}40` : 'none',
      }}>
        <motion.div animate={{ rotate: hovered ? 360 : 0 }} transition={{ duration: 0.6 }}>
          <Icon name={iconName} size={22} />
        </motion.div>
      </div>
      <div style={{
        fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
        color: hovered ? 'transparent' : B.textDark,
        background: hovered ? `linear-gradient(180deg, #fff 30%, ${color} 100%)` : 'none',
        WebkitBackgroundClip: hovered ? 'text' : 'none',
        backgroundClip: hovered ? 'text' : 'none',
        marginBottom: 8, letterSpacing: '-0.03em', transition: 'all 0.3s ease',
      }}>
        {val}<span style={{ fontSize: '0.5em' }}>{suffix}</span>
      </div>
      <div style={{
        fontSize: 'clamp(11px, 1.2vw, 13px)', letterSpacing: '0.12em',
        textTransform: 'uppercase', color: B.textDarkMuted, fontWeight: 700,
      }}>
        {label}
      </div>
    </motion.div>
  );
}

// ─── Tech Badge ───────────────────────────────────────────────────────────────
function TechBadge({ label, color }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        padding: 'clamp(5px, 1vw, 7px) clamp(10px, 1.5vw, 14px)',
        borderRadius: 'var(--radius-sm)',
        background: h ? color : 'rgba(255,255,255,0.05)',
        border: `1.5px solid ${h ? color : 'rgba(255,255,255,0.15)'}`,
        color: h ? B.bgDark : color,
        fontSize: 'clamp(11px, 1.3vw, 13px)', fontWeight: 700, letterSpacing: '0.04em',
        transition: 'all 0.22s ease', cursor: 'default',
      }}
    >
      <Terminal size={11} /> {label}
    </span>
  );
}

// ─── Shared Styles ────────────────────────────────────────────────────────────
const SharedStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
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
      display: inline-flex; align-items: center; justify-content: center; gap: 10px;
      padding: clamp(12px, 2vw, 18px) clamp(20px, 4vw, 40px);
      border-radius: 12px; background: #1A8A72; color: #ffffff;
      font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;
      font-size: clamp(0.85rem, 1.8vw, 1.2rem);
      letter-spacing: 0.10em; text-transform: uppercase; text-decoration: none;
      transition: opacity 0.2s, transform 0.2s;
    }
    .btn-secondary {
      display: inline-flex; align-items: center; justify-content: center; gap: 10px;
      padding: clamp(10px, 1.8vw, 16px) clamp(20px, 4vw, 40px);
      border-radius: 12px; background: transparent; color: #93213F;
      font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;
      font-size: clamp(0.85rem, 1.8vw, 1.2rem);
      letter-spacing: 0.10em; text-decoration: none;
      border: 2px solid #93213F; transition: background 0.2s, transform 0.2s;
    }
    .grid-stats    { display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(14px, 2vw, 24px); }
    .grid-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(14px, 2vw, 24px); }
    .grid-pricing  { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(14px, 2.5vw, 24px); }
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
      .btn-primary, .btn-secondary { width: 100%; font-size: 0.8rem; }
    }
    @keyframes wmFloat {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-8px); }
    }
  `}</style>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function BioinformaticsChildPage() {
  const { childId } = useParams();
  const navigate    = useNavigate();
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  const data = BIOINFORMATICS_CHILDREN[childId];

  useEffect(() => {
    if (!data) navigate('/services-bioinformatics', { replace: true });
  }, [data, navigate]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  if (!data) return null;

  const pageAC = data.accentColor || AC;
  const processColors = [pageAC, B.action, B.primary, B.secondary];

  return (
    <div style={{
      background: B.bgLight, minHeight: '100vh',
      overflowX: 'clip', position: 'relative',
      fontFamily: 'var(--font-body, sans-serif)',
    }}>

      {/* ══════════ 1. HERO (LIGHT) ══════════ */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', zIndex: 1,
        background: B.heroBg,
        paddingTop: 'clamp(40px, 5vw, 50px)',
      }}>
        <HeroGridBg opacity={0.35} />
        <div style={{
          position: 'absolute', left: 0, top: 0, width: '45%', height: '100%',
          background: `linear-gradient(90deg, ${pageAC}06 0%, transparent 80%)`,
          pointerEvents: 'none', zIndex: 1,
        }} />
        {/* Extra glow orb matching parent page */}
        <div style={{
          position: 'absolute', right: '-4%', top: '15%',
          width: 360, height: 360, borderRadius: '50%',
          background: `radial-gradient(circle, ${pageAC}10 0%, transparent 70%)`,
          pointerEvents: 'none', zIndex: 1,
        }} />
        <DataParticles count={18} />

        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
          position: 'relative', zIndex: 10,
        }}>
          <div style={{
            maxWidth: 1200, width: '100%',
            display: 'flex', flexDirection: 'column',
            gap: 'clamp(40px, 5vw, 60px)',
          }}>

            {/* TOP ROW */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              justifyContent: 'space-between', alignItems: 'stretch',
              gap: 'clamp(18px, 5vw, 44px)',
            }}>

              {/* Left — Text */}
              <motion.div
                initial="hidden" animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                style={{ flex: '1 1 clamp(280px, 45%, 600px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                {/* Breadcrumb */}
                <motion.div variants={fadeUp} custom={0} style={{ marginBottom: 12 }}>
                  <Link to="/services-bioinformatics" style={{
                    fontSize: 'clamp(11px, 1.2vw, 13px)', fontWeight: 600,
                    color: pageAC, textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    opacity: 0.8,
                  }}>
                    ← Bioinformatics &amp; Health AI
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} custom={0}>
                  <SectionBadge color={pageAC}>{data.badge}</SectionBadge>
                </motion.div>

                <motion.h1 variants={fadeUp} custom={0.05} style={{
                  fontWeight: 700, fontSize: 'var(--fs-hero)',
                  lineHeight: 1.1, letterSpacing: '-0.02em',
                  marginBottom: 'clamp(10px, 1.5vw, 16px)', color: B.primaryDark,
                }}>
                  {data.title}
                </motion.h1>

                <motion.p variants={fadeUp} custom={0.1} style={{
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)', fontWeight: 600,
                  color: pageAC, marginBottom: 'clamp(12px, 1.5vw, 18px)', lineHeight: 1.4,
                }}>
                  {data.tagline}
                </motion.p>

                <motion.p variants={fadeUp} custom={0.15} style={{
                  fontSize: 'clamp(0.88rem, 1.8vw, 1.15rem)', fontWeight: 400,
                  color: B.textMid, marginBottom: 'clamp(20px, 3vw, 36px)', lineHeight: 1.75,
                }}>
                  {data.heroDesc}
                </motion.p>

                <motion.div variants={fadeUp} custom={0.25} style={{
                  display: 'flex', flexDirection: 'column',
                  gap: 'clamp(12px, 1.5vw, 16px)',
                }}>
                  <Link to="/contact" className="btn-primary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                    <Zap size={16} /> Start Your Analysis
                  </Link>
                  <Link to="/case-studies" className="btn-secondary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                    View Case Studies <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — Animated Genomics Pipeline */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  flex: '1 1 clamp(280px, 42%, 520px)',
                  display: 'flex', alignItems: 'stretch',
                }}
              >
                <div style={{ width: '100%', height: '100%' }}>
                  <GenomicsPipeline steps={data.pipelineSteps} accentColor={pageAC} />
                </div>
              </motion.div>
            </div>

            {/* BOTTOM ROW — Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                display: 'flex', flexWrap: 'wrap',
                gap: 'clamp(12px, 2vw, 20px)', justifyContent: 'center',
                width: '100%', paddingTop: 'clamp(10px, 2vw, 20px)',
                borderTop: `1px solid ${B.primaryBorder}40`,
              }}
            >
              {data.tags.map((t, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: 'clamp(8px, 1vw, 12px) clamp(14px, 2vw, 20px)',
                  borderRadius: 50,
                  background: 'rgba(255,255,255,0.6)',
                  border: `1px solid ${B.primaryBorder}`,
                  fontSize: 'clamp(12px, 1.5vw, 15px)', fontWeight: 600, color: B.textMain,
                  boxShadow: '0 4px 12px rgba(107, 46, 116, 0.05)',
                  animation: `wmFloat ${3 + i * 0.5}s ease-in-out infinite`,
                }}>
                  <CheckCircle size={14} color={B.action} /> {t}
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
        <CircuitBg opacity={0.09} />
        <DataParticles count={12} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <SectionBadge dark style={{ color: B.textDarkMuted, marginBottom: 20 }}>Track Record</SectionBadge>
            <h2 className="section-h2 dark" style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3.5vw, 40px)' }}>
              Trusted by Researchers Worldwide
            </h2>
            <div className="grid-stats" style={{ width: '100%' }}>
              {data.stats.map((s, i) => (
                <StatCard
                  key={i} target={s.target} suffix={s.suffix}
                  label={s.label} iconName={s.iconName}
                  start={statsVisible} delay={i * 0.1} color={s.color}
                />
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: 'clamp(10px, 1.2vw, 11px)', fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: B.textDarkMuted, marginBottom: 16,
            }}>
              Our Bio Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 1.2vw, 12px)', justifyContent: 'center' }}>
              {data.techStack.map((t, i) => <TechBadge key={i} {...t} />)}
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
        <SectionGridBg opacity={0.25} />
        <DataParticles count={10} />

        {/* Capabilities */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
            <SectionBadge color={pageAC}>Analysis Services</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>
              {data.title} Capabilities
            </h2>
            <p className="section-lead" style={{ maxWidth: 1200 }}>
              From raw data to publication-ready insights — every analysis pipeline we build is reproducible, documented, and production-grade.
            </p>
          </div>
          <div style={{ ...PX }}>
            <div className="grid-features">
              {data.features.map((f, i) => (
                <FeatureCard key={i} {...f} i={i} />
              ))}
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Process + Deliverables */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, maxWidth: 1250, display: 'flex', gap: 'clamp(28px, 5vw, 80px)', flexWrap: 'wrap' }}>

            {/* Process */}
            <div style={{ flex: '1 1 min(100%, 400px)' }}>
              <SectionBadge color={pageAC}>How We Work</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>
                Our Analysis Process
              </h2>
              {data.process.map((p, i) => {
                const color = processColors[i % processColors.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.09 }}
                    style={{
                      display: 'flex', gap: 'clamp(14px, 2vw, 24px)',
                      position: 'relative', marginBottom: 'clamp(24px, 3.5vw, 40px)',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: 'clamp(40px, 5.5vw, 52px)', height: 'clamp(40px, 5.5vw, 52px)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: color, color: B.white,
                        fontWeight: 800, fontSize: 'clamp(13px, 1.6vw, 17px)',
                        boxShadow: `0 6px 20px ${color}40`, flexShrink: 0,
                      }}>
                        {p.step}
                      </div>
                      {i < data.process.length - 1 && (
                        <div style={{
                          width: 2, flex: 1, minHeight: 28,
                          background: `linear-gradient(to bottom, ${color}60, transparent)`,
                          marginTop: 6,
                        }} />
                      )}
                    </div>
                    <div style={{ paddingTop: 8 }}>
                      <h4 style={{
                        fontWeight: 700, fontSize: 'clamp(1.15rem, 2vw, 1.8rem)',
                        color: B.textMain, marginBottom: 8, lineHeight: 1.3,
                      }}>{p.title}</h4>
                      <p style={{
                        fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)',
                        lineHeight: 1.7, color: B.textMid,
                      }}>{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Deliverables */}
            <div style={{ flex: '1 1 min(100%, 380px)' }}>
              <SectionBadge color={pageAC}>Deliverables</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 12 }}>
                What You Receive
              </h2>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)',
                color: B.textMid, lineHeight: 1.7,
                marginBottom: 'clamp(24px, 3.5vw, 36px)',
              }}>
                Every project is delivered with reproducible code, clean documentation, and outputs written for your intended audience — from lab journals to regulatory submissions.
              </p>
              {data.deliverables.map((d, i) => {
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
        <CircuitBg opacity={0.07} />
        <DataParticles count={8} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4.5vw, 56px)' }}>
            <SectionBadge dark style={{ color: B.textDarkMuted }}>Transparent Pricing</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 14 }}>Investment</h2>
            <p className="section-lead dark" style={{ maxWidth: 1200 }}>
              Fixed-fee pricing. We can invoice through university procurement systems and support grant-funded projects.
            </p>
          </div>
          <div className="grid-pricing">
            {data.tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                style={{
                  background: tier.featured
                    ? `linear-gradient(145deg, ${pageAC}18, ${pageAC}08)`
                    : 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 'var(--radius-xl)',
                  border: `2px solid ${tier.featured ? pageAC : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: tier.featured ? `0 20px 56px -14px ${pageAC}30` : 'none',
                  padding: 'clamp(22px, 3vw, 32px) clamp(18px, 2.5vw, 28px)',
                  position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                {tier.featured && (
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    padding: '4px 12px', borderRadius: 99,
                    background: pageAC, color: B.white,
                    fontSize: 10, fontWeight: 800,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{
                  fontWeight: 700, fontSize: 'clamp(11px, 1.3vw, 13px)',
                  color: pageAC, letterSpacing: '0.10em',
                  textTransform: 'uppercase', marginBottom: 10,
                }}>
                  {tier.name}
                </div>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)',
                  color: B.textDarkMid, lineHeight: 1.6,
                  marginBottom: 'clamp(16px, 2.5vw, 24px)',
                }}>
                  {tier.desc}
                </p>
                <div style={{ flex: 1, marginBottom: 'clamp(18px, 2.5vw, 28px)' }}>
                  {tier.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                      <CheckCircle size={15} color={pageAC} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)', color: B.textDarkMid }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: 'clamp(10px, 1.5vw, 14px) 20px', borderRadius: 10,
                  background: tier.featured ? pageAC : 'transparent',
                  color: tier.featured ? B.white : pageAC,
                  border: `1.5px solid ${pageAC}`,
                  fontWeight: 700, fontSize: 'clamp(0.8rem, 1.4vw, 0.95rem)',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => {
                    if (!tier.featured) e.currentTarget.style.background = `${pageAC}20`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    if (!tier.featured) e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = '';
                  }}>
                  Get Started <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════ 5. FINAL CTA (LIGHT) ══════════ */}
      <section style={{
        padding: 'clamp(60px, 10vw, 120px) 0',
        position: 'relative', overflow: 'hidden', zIndex: 1,
        background: 'linear-gradient(180deg, #F5F1F6 0%, #E8E1F0 100%)',
      }}>
        <SectionGridBg opacity={0.2} />
        <DataParticles count={14} />
        <div style={{
          position: 'absolute', top: '20%', left: '10%',
          width: 400, height: 400, borderRadius: '50%',
          background: `radial-gradient(circle, ${pageAC}08 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '8%',
          width: 300, height: 300, borderRadius: '50%',
          background: `radial-gradient(circle, rgba(11, 124, 147,0.06) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge color={pageAC}>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Turn Your Data Into<br />
              <span style={{
                background: `linear-gradient(90deg, ${pageAC} 25%, ${B.action} 75%)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Discovery.
              </span>
            </h2>
            <p className="section-lead" style={{
              color: B.textMid, maxWidth: 1200,
              margin: '0 auto clamp(24px, 3.5vw, 48px)', lineHeight: 1.75,
            }}>
              Share your data challenge with us. We'll tell you what analysis is feasible, what it costs, and whether we're the right team — before you commit to anything.
            </p>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 56px)',
                borderRadius: 'var(--radius-md)',
                background: `linear-gradient(135deg, ${pageAC}, #14705C)`,
                color: B.white, fontWeight: 700,
                fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
                letterSpacing: '0.10em', textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: `0 8px 40px ${pageAC}40, 0 0 80px ${pageAC}15`,
                border: `1px solid ${pageAC}40`, transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                <Dna size={18} /> Book Your Free Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SharedStyles />
    </div>
  );
}