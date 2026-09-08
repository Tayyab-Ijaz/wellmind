/**
 * theme.js — WellMind Data Solutions
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for:
 *   • Brand colors (B)
 *   • Layout constants (SECTION_PAD, PX, NARROW)
 *   • Animation variants (fadeUp, fadeIn)
 *   • Shared hooks (useCounter)
 *   • Shared UI components (DataParticles, SectionBadge, SectionDivider, CircuitBg)
 *
 * To change any color / font / size across the ENTIRE site, edit ONLY this file.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// ─── Brand Colors ─────────────────────────────────────────────────────────────
export const B = {
  // Primary purple — deepened for richer, more premium contrast
  primary:        '#6D28D9',
  primaryDark:    '#24113D',
  primaryMid:     '#4C1D95',
  primaryLight:   'rgba(109, 40, 217, 0.08)',
  primaryBorder:  'rgba(109, 40, 217, 0.22)',
  primaryGlow:    'rgba(109, 40, 217, 0.22)',

  // Secondary burgundy
  secondary:      '#D93668',
  secondaryLight: 'rgba(217,54,104,0.10)',
  secondaryMuted: '#D93668cc',

  // Action purple
  action:       '#7C3AED',
  actionLight:  'rgba(124,58,237,0.10)',
  actionBorder: 'rgba(124,58,237,0.30)',
  actionGlow:   'rgba(124,58,237,0.28)',
  // Lighter lavender — use instead of `action` for text/headings on dark
  // backgrounds (footer etc.), since #7C3AED reads muddy/low-contrast there.
  actionSoft:   '#C4B5FD',

  // Accent gold
  accent:       '#F59E0B',
  accentLight:  'rgba(245,158,11,0.10)',
  accentBorder: 'rgba(245,158,11,0.25)',

  // Gradients — for headline accents, CTAs, dividers
  gradientPrimary: 'linear-gradient(135deg, #6D28D9 0%, #D93668 100%)',
  gradientAction:  'linear-gradient(135deg, #6D28D9 0%, #D93668 100%)',
  gradientGold:    'linear-gradient(90deg, #D93668 20%, #F59E0B 80%)',

  // Backgrounds
  bgMain:  '#FFFFFF',
  bgLight: '#FAF7FF',
  bgDark:  '#1B1033',
  heroBg:  'linear-gradient(135deg, #FFFFFF 0%, #FBF7FF 55%, #F2E8FF 100%)',

  // Cards / Glass
  cardBg:     'linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(245,241,246,0.52) 100%)',
  cardShadow: '0 14px 36px -12px rgba(91,33,182,0.14)',
  glassBg:     'rgba(255,255,255,0.65)',
  glassBorder: 'rgba(109,40,217,0.14)',
  bgDarkCard:  'rgba(255,255,255,0.03)',

  // Text — light backgrounds
  textMain:  '#24113D',
  textMid:   'rgba(36,17,61,0.72)',
  textMuted: 'rgba(36,17,61,0.65)',

  // Text — dark backgrounds
  textDark:      '#F3ECFA',
  textDarkMid:   'rgba(243,236,250,0.75)',
  textDarkMuted: 'rgba(243,236,250,0.62)',

  // Footer-specific dark backgrounds — same purple family as the navbar
  // gradient (#321447 / #2C123F) for a cohesive brand color across the site.
  darkBg:   '#2C123F',
  voidBg:   '#1A0A28',
  actionMid: '#5B21B6',

  // Misc
  white:    '#ffffff',
  shadowMd: 'rgba(109,40,217,0.15)',
  shadowLg: 'rgba(109,40,217,0.25)',
  pillRadius: 28,
  fontDisplay: "'Fraunces', 'Plus Jakarta Sans', serif",
};

// ─── Layout Constants ─────────────────────────────────────────────────────────
/** Vertical section padding — scales from 40px (mobile) to 80px (desktop) */
export const SECTION_PAD = 'clamp(40px, 6vw, 80px)';

/** Full-width container: max 1440px, centered, with responsive horizontal padding */
export const PX = {
  maxWidth: 1440,
  margin: '0 auto',
  padding: '0 clamp(16px, 4vw, 24px)',
};

/** Narrower container (max 1250px) for process/content sections */
export const NARROW = {
  maxWidth: 1250,
  margin: '0 auto',
  padding: '0 clamp(16px, 4vw, 24px)',
};

// ─── Animation Variants ───────────────────────────────────────────────────────
/** Fade-up entrance — pass `custom={delaySeconds}` to motion element */
export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

/** Simple fade-in */
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

// ─── Shared Hooks ─────────────────────────────────────────────────────────────
/** Animates a number from 0 → target once `start` becomes true */
export function useCounter(target, duration = 2000, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const t = setInterval(() => {
      current = Math.min(current + step, target);
      setVal(Math.floor(current));
      if (current >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [target, duration, start]);
  return val;
}

// ─── Shared Components ────────────────────────────────────────────────────────

/**
 * DataParticles — ambient floating dots
 * @param {number} count   number of particles (default 24)
 * @param {boolean} dark   use dark-background palette
 */
export function DataParticles({ count = 24, dark = false }) {
  const LIGHT_COLORS = [
    'rgba(11, 124, 147,0.50)',
    'rgba(127,32,55,0.40)',
    'rgba(197,174,210,0.60)',
    'rgba(147, 33, 63,0.35)',
  ];
  const DARK_COLORS = [
    'rgba(123,82,181,0.55)',
    'rgba(11, 124, 147,0.45)',
    'rgba(200, 138, 70,0.40)',
    'rgba(255,255,255,0.20)',
  ];

  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.8,
      dur: Math.random() * 7 + 5, delay: Math.random() * 4,
      color: (dark ? DARK_COLORS : LIGHT_COLORS)[Math.floor(Math.random() * 4)],
    }))
  ).current;

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
          width: p.size * 2, height: p.size * 2, borderRadius: '50%',
          background: p.color, opacity: 0.7,
          animation: `wmDrift ${p.dur}s ease-in-out infinite ${p.delay}s`,
          boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
        }} />
      ))}
    </div>
  );
}

/**
 * SectionBadge — pill label above section headings
 * @param {boolean} dark   dark-background variant
 * @param {object} style   additional inline style overrides
 */
export function SectionBadge({ children, dark = false, style = {} }) {
  const defaultColor = dark ? B.primaryMid : B.primary;
  return (
    <div className="section-badge" style={{
      background: dark ? 'rgba(91,58,142,0.15)' : B.primaryLight,
      border: `1px solid ${dark ? 'rgba(91,58,142,0.30)' : B.primaryBorder}`,
      color: style.color || defaultColor,
      ...style,
    }}>
      <span className="badge-dot" />
      {children}
    </div>
  );
}

/**
 * SectionDivider — decorative diamond/line separator
 */
export function SectionDivider() {
  return (
    <div style={{
      position: 'relative', zIndex: 5,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 'clamp(16px, 2.5vw, 32px) 0',
    }}>
      <div style={{ flex: 1, maxWidth: 320, height: 1, background: 'linear-gradient(to right, transparent, rgba(147, 33, 63,0.35))' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 24px' }}>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(147, 33, 63,0.40)' }} />
        <div style={{ width: 10, height: 10, background: B.secondary, transform: 'rotate(45deg)', boxShadow: '0 0 12px rgba(147, 33, 63,0.50)' }} />
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(147, 33, 63,0.40)' }} />
      </div>
      <div style={{ flex: 1, maxWidth: 320, height: 1, background: 'linear-gradient(to left, transparent, rgba(147, 33, 63,0.35))' }} />
    </div>
  );
}

/**
 * CircuitBg — SVG circuit-trace background pattern
 * @param {number} opacity  (default 0.06)
 */
export function CircuitBg({ opacity = 0.06 }) {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="wm-circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40 L20 40 L20 20 L40 20 L40 40 L60 40 L60 60 L80 60" fill="none" stroke={B.primaryMid} strokeWidth="0.8" />
          <path d="M40 0 L40 20" fill="none" stroke={B.action} strokeWidth="0.8" />
          <circle cx="20" cy="40" r="2" fill={B.primaryMid} />
          <circle cx="40" cy="20" r="2" fill={B.action} />
          <circle cx="60" cy="40" r="2" fill={B.primaryMid} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wm-circuit)" />
    </svg>
  );
}

/**
 * FAQItem — accordion item for FAQ sections
 */
export function FAQItem({ q, a, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={false}
      onClick={onClick}
      whileHover={!isOpen ? { x: 4 } : {}}
      transition={{ duration: 0.2 }}
      style={{
        borderRadius: 16, overflow: 'hidden', marginBottom: 12, cursor: 'pointer',
        border: `1.5px solid ${isOpen ? 'rgba(11, 124, 147,0.50)' : 'rgba(255,255,255,0.10)'}`,
        background: isOpen ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.04)',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        boxShadow: isOpen ? '0 8px 32px rgba(11, 124, 147,0.15)' : 'none',
      }}
    >
      <div style={{
        padding: 'clamp(14px, 2vw, 24px) clamp(16px, 2.5vw, 28px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 1.5vw, 16px)', flex: 1 }}>
          <span style={{
            fontSize: 12, fontWeight: 800, letterSpacing: '0.10em',
            color: isOpen ? B.action : 'rgba(240,234,248,0.60)',
            minWidth: 28, fontFamily: 'sans-serif', transition: 'color 0.3s ease',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 style={{
            fontFamily: 'sans-serif', fontWeight: 600,
            fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)',
            color: isOpen ? B.textDark : 'rgba(240,234,248,0.85)',
            margin: 0, lineHeight: 1.4, transition: 'color 0.3s ease',
          }}>{q}</h3>
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
          background: isOpen ? B.action : 'rgba(255,255,255,0.08)',
          border: `1px solid ${isOpen ? 'transparent' : 'rgba(255,255,255,0.12)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}>
          {isOpen
            ? <Minus size={14} color="#fff" strokeWidth={2.5} />
            : <Plus size={14} color="rgba(240,234,248,0.60)" strokeWidth={2.5} />
          }
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 clamp(16px, 2.5vw, 28px) clamp(16px, 2vw, 24px)',
              paddingLeft: 'calc(clamp(16px, 2.5vw, 28px) + 16px + 28px)',
            }}>
              <div style={{
                fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', lineHeight: 1.8,
                color: 'rgba(240,234,248,0.72)',
                borderLeft: `2px solid rgba(124,58,237,0.40)`, paddingLeft: 20,
              }}>{a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * InViewSection — wraps a <section> with a fade-in once it enters the viewport
 */
export function InViewSection({ children, style }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={style}
    >
      {children}
    </motion.section>
  );
}

// ─── S — Style Presets ────────────────────────────────────────────────────────
/**
 * S = pre-built inline style objects.
 * Usage:  style={S.h2}
 *         style={{ ...S.cardBase, marginTop: 24 }}
 *         style={{ ...S.h2, color: B.primaryDark }}
 *
 * To change a font, size, or color site-wide → edit this object ONLY.
 */

// ─── S — Complete Style Presets ──────────────────────────────────────────────
/**
 * S = pre-built inline style objects.
 *   style={S.h2}
 *   style={{ ...S.cardBase, marginTop: 24 }}
 *   style={{ ...S.h2, color: B.primaryDark }}
 * Change ONE variable → entire site updates.
 */
export const S = {

  // Headings
  h1:       { fontFamily:'var(--font-main)', fontWeight:700, fontSize:'var(--fs-hero)',         lineHeight:1.1,  letterSpacing:'-0.02em', color:B.textMain  },
  h1Dark:   { fontFamily:'var(--font-main)', fontWeight:700, fontSize:'var(--fs-hero)',         lineHeight:1.1,  letterSpacing:'-0.02em', color:B.textDark  },
  h2:       { fontFamily:'var(--font-main)', fontWeight:700, fontSize:'var(--fs-section-h2)',   lineHeight:1.15, color:B.textMain,  marginBottom:14 },
  h2Dark:   { fontFamily:'var(--font-main)', fontWeight:700, fontSize:'var(--fs-section-h2)',   lineHeight:1.15, color:B.textDark,  marginBottom:14 },
  h3:       { fontFamily:'var(--font-main)', fontWeight:700, fontSize:'var(--fs-card-title)',   lineHeight:1.25, color:B.textMain,  marginBottom:10 },
  h3Dark:   { fontFamily:'var(--font-main)', fontWeight:700, fontSize:'var(--fs-card-title)',   lineHeight:1.25, color:B.textDark,  marginBottom:10 },

  // Body text
  lead:         { fontFamily:'var(--font-main)', fontSize:'var(--fs-section-lead)', fontWeight:500, lineHeight:1.65, color:B.textMid     },
  leadDark:     { fontFamily:'var(--font-main)', fontSize:'var(--fs-section-lead)', fontWeight:500, lineHeight:1.65, color:B.textDarkMid },
  body:         { fontFamily:'var(--font-main)', fontSize:'var(--fs-card-body)',    lineHeight:1.7, color:B.textMid     },
  bodyDark:     { fontFamily:'var(--font-main)', fontSize:'var(--fs-card-body)',    lineHeight:1.7, color:B.textDarkMid },
  small:        { fontFamily:'var(--font-main)', fontSize:'var(--fs-small)',        fontWeight:500, color:B.textMuted     },
  smallDark:    { fontFamily:'var(--font-main)', fontSize:'var(--fs-small)',        fontWeight:500, color:B.textDarkMuted },
  cardTitle:    { fontFamily:'var(--font-main)', fontWeight:700, fontSize:'var(--fs-card-title)',   lineHeight:1.3, color:B.textMain, marginBottom:10 },
  cardBody:     { fontFamily:'var(--font-main)', fontSize:'var(--fs-card-body)',    lineHeight:1.7, color:B.textMid },
  featureTitle: { fontFamily:'var(--font-main)', fontWeight:700, fontSize:'var(--fs-feature-title)',lineHeight:1.3, color:B.textMain, marginBottom:8  },
  featureBody:  { fontFamily:'var(--font-main)', fontSize:'var(--fs-feature-body)', color:B.textMid, lineHeight:1.6 },

  // Labels
  label:       { fontFamily:'var(--font-main)', fontSize:'var(--fs-label)', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:B.textMuted     },
  labelDark:   { fontFamily:'var(--font-main)', fontSize:'var(--fs-label)', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:B.textDarkMuted },
  labelAccent: { fontFamily:'var(--font-main)', fontSize:'var(--fs-label)', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:B.action        },

  // Cards
  cardBase: {
    background:'linear-gradient(135deg,rgba(255,255,255,0.70) 0%,rgba(245, 241, 246,0.50) 100%)',
    backdropFilter:'blur(8px)', borderRadius:'var(--radius-xl)',
    border:`1px solid ${B.primaryBorder}`, boxShadow:B.cardShadow, padding:'var(--sp-card)',
  },
  cardBaseHover: {
    background:'linear-gradient(135deg,rgba(255,255,255,0.70) 0%,rgba(245, 241, 246,0.50) 100%)',
    backdropFilter:'blur(8px)', borderRadius:'var(--radius-xl)',
    border:`3px solid ${B.primaryBorder}`, boxShadow:B.cardShadow, padding:'var(--sp-card)',
    transition:'border-color 0.3s ease,box-shadow 0.3s ease,transform 0.3s ease',
  },
  cardDark: {
    background:'rgba(255,255,255,0.03)', backdropFilter:'blur(12px)',
    borderRadius:'var(--radius-xl)', border:'1px solid rgba(255,255,255,0.08)', padding:'var(--sp-card)',
  },
  cardDarkHover: {
    background:'rgba(255,255,255,0.03)', backdropFilter:'blur(12px)',
    borderRadius:'var(--radius-xl)', border:'3px solid rgba(255,255,255,0.08)', padding:'var(--sp-card)',
    transition:'border-color 0.3s ease,box-shadow 0.3s ease,transform 0.3s ease',
  },
  cardGlass: {
    background:B.glassBg, backdropFilter:'blur(16px)',
    borderRadius:'var(--radius-xl)', border:`1px solid ${B.glassBorder}`,
    boxShadow:B.cardShadow, padding:'var(--sp-card)',
  },

  // Sections
  sectionLight: {
    position:'relative', zIndex:1, overflow:'clip', padding:'var(--sp-section) 0',
    background:'linear-gradient(180deg,#FAF7FF 0%,#F6EFFF 50%,#EEE4FA 100%)',
  },
  sectionDark: {
    position:'relative', zIndex:1, padding:'var(--sp-section) 0',
    background:'linear-gradient(135deg,#1B1033 0%,#120A26 100%)',
  },
  sectionHero: {
    position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column',
    overflow:'hidden', zIndex:1, paddingTop:'clamp(40px,5vw,50px)',
    background:'linear-gradient(to right,#FFFFFF 0%,#FFFFFF 60%,#F3EAFF 85%,#EDE4FA 100%)',
  },

  // Layout
  container:       { maxWidth:1440, margin:'0 auto', padding:'0 var(--sp-gutter)' },
  containerNarrow: { maxWidth:1250, margin:'0 auto', padding:'0 var(--sp-gutter)' },
  flexCenter:    { display:'flex', alignItems:'center', justifyContent:'center'     },
  flexBetween:   { display:'flex', alignItems:'center', justifyContent:'space-between' },
  flexCol:       { display:'flex', flexDirection:'column'                            },
  flexColCenter: { display:'flex', flexDirection:'column', alignItems:'center'       },

  // Icon Boxes
  iconBox:       { width:'clamp(40px,5vw,52px)', height:'clamp(40px,5vw,52px)', borderRadius:'var(--radius-md)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background:B.primaryLight, color:B.primary,  border:`1px solid ${B.primaryBorder}` },
  iconBoxSm:     { width:36, height:36,           borderRadius:'var(--radius-sm)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background:B.primaryLight, color:B.primary,  border:`1px solid ${B.primaryBorder}` },
  iconBoxAction: { width:'clamp(40px,5vw,52px)', height:'clamp(40px,5vw,52px)', borderRadius:'var(--radius-md)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background:B.actionLight,  color:B.action,  border:`1px solid ${B.actionBorder}`  },
  iconBoxDark:   { width:'clamp(40px,5vw,52px)', height:'clamp(40px,5vw,52px)', borderRadius:'var(--radius-md)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background:'rgba(255,255,255,0.06)', color:B.textDark, border:'1px solid rgba(255,255,255,0.10)' },

  // Pills / Tags
  pill:          { fontFamily:'var(--font-main)', fontSize:'var(--fs-badge)', fontWeight:700, letterSpacing:'0.04em', padding:'4px 10px', borderRadius:99, background:B.primaryLight,  color:B.primary,   border:`1px solid ${B.primaryBorder}`,          display:'inline-flex', alignItems:'center' },
  pillAction:    { fontFamily:'var(--font-main)', fontSize:'var(--fs-badge)', fontWeight:700, letterSpacing:'0.04em', padding:'4px 10px', borderRadius:99, background:B.actionLight,   color:B.action,    border:`1px solid ${B.actionBorder}`,           display:'inline-flex', alignItems:'center' },
  pillSecondary: { fontFamily:'var(--font-main)', fontSize:'var(--fs-badge)', fontWeight:700, letterSpacing:'0.04em', padding:'4px 10px', borderRadius:99, background:B.secondaryLight,color:B.secondary, border:'1px solid rgba(217,54,104,0.25)',         display:'inline-flex', alignItems:'center' },
  pillAccent:    { fontFamily:'var(--font-main)', fontSize:'var(--fs-badge)', fontWeight:700, letterSpacing:'0.04em', padding:'4px 10px', borderRadius:99, background:B.accentLight,   color:B.accent,    border:`1px solid ${B.accentBorder}`,           display:'inline-flex', alignItems:'center' },
  pillDark:      { fontFamily:'var(--font-main)', fontSize:'var(--fs-badge)', fontWeight:700, letterSpacing:'0.04em', padding:'4px 10px', borderRadius:99, background:'rgba(255,255,255,0.12)', color:B.textDark, border:'1px solid rgba(255,255,255,0.15)', display:'inline-flex', alignItems:'center' },
  toolTag:       { fontSize:'clamp(9px,1.1vw,12px)', fontWeight:700, letterSpacing:'0.04em', padding:'3px 9px', borderRadius:6, background:B.actionLight,   color:B.action },
  toolTagDark:   { fontSize:'clamp(9px,1.1vw,12px)', fontWeight:700, letterSpacing:'0.04em', padding:'3px 9px', borderRadius:6, background:'rgba(124,58,237,0.12)', color:B.action, border:'1px solid rgba(124,58,237,0.25)' },

  // Dividers
  divider:     { borderTop:`1px solid ${B.primaryBorder}`,       margin:'clamp(20px,2.5vw,36px) 0' },
  dividerDark: { borderTop:'1px solid rgba(255,255,255,0.07)',    margin:'clamp(20px,2.5vw,36px) 0' },

  // Gradient text helpers
  gradientRed:    { background:'linear-gradient(90deg,#6D28D9 25%,#D93668 75%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' },
  gradientPurple: { background:`linear-gradient(135deg,#6D28D9 0%,#D93668 100%)`,WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' },
  gradientAction: { background:`linear-gradient(135deg,#7C3AED 0%,#6D28D9 100%)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' },

  // Page padding
  pagePad:     { padding:'var(--sp-section) 0' },
  pagePadHero: { padding:'clamp(80px,12vw,140px) 0 clamp(40px,6vw,80px)' },

  // Stats
  statNum:   { fontFamily:'var(--font-main)', fontWeight:800, fontSize:'clamp(1.5rem,3.5vw,2.8rem)', letterSpacing:'-0.02em', lineHeight:1 },
  statLabel: { fontFamily:'var(--font-main)', fontSize:'clamp(11px,1.2vw,13px)', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase' },
};
