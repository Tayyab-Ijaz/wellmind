/**
 * Home.jsx — WellMind Data Solutions — Fully Responsive
 * Breakpoints: 1440 | 1024 | 768 | 425 | 320
 */

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Cpu, TrendingUp, Code, Settings2, Palette, Dna,
  ArrowRight, CheckCircle, Wrench, Rocket, Activity,
  Shield, Globe, Zap, BarChart3, Brain, Star, Sparkles,
  ChevronRight, CircuitBoard, Database, LineChart, BookOpen,
  Users, Award, FlaskConical, ChevronDown, Image as ImageIcon,
  Mail, MessageCircle, Share2, Phone, DollarSign, Clock,
  Lock, Repeat,
} from 'lucide-react';
import { B, SECTION_PAD, PX, fadeUp, useCounter, DataParticles, SectionBadge, SectionDivider, CircuitBg, FAQItem, InViewSection } from '../../theme';
import { FaLinkedin } from 'react-icons/fa';

import SystemDrivenDelivery from '../../assets/System-Driven Delivery.webp';
import EnterpriseSecurity   from '../../assets/Enterprise-Security.webp';
import ScalableArchitecture from '../../assets/Scalable-Architecture.webp';
import RapidDeployment      from '../../assets/Rapid-Deployment.webp';

import ScrollTest           from './serviceshome';

import SolarSystem from './SolarSystem';
import imgArPrioritization from '../../assets/case-studies/ar-prioritization.png';
import imgTelecomChurn from '../../assets/case-studies/telecom-churn.png';
import imgHealthcareFraudBilling from '../../assets/case-studies/healthcare-fraud-billing.png';

import ScrollFrameIntro from '../../components/ScrollFrameIntro';

// ─── Home-page-only display fonts (does not touch global site typography) ──
const FONT_DISPLAY = "'Unbounded', var(--font-display)";
const FONT_ACCENT   = "'Space Grotesk', var(--font-main)";



function StatCard({ target, suffix, label, index, start, delay = 0 }) {
  const val = useCounter(target, 2000, start);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  // cursor-following light (pure CSS variables, no re-render)
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}
      whileHover={{ y: -5 }}
      style={{
        '--mx': '50%', '--my': '0%',
        position: 'relative', borderRadius: 22, padding: 1, cursor: 'default',
        // hairline bevel: bright top-left edge, faint everywhere else
        background: 'linear-gradient(155deg, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.07) 32%, rgba(255,255,255,0.03) 62%, rgba(255,255,255,0.13) 100%)',
        boxShadow: hovered
          ? '0 30px 60px -20px rgba(0,0,0,0.9), 0 12px 24px -12px rgba(0,0,0,0.8)'
          : '0 22px 44px -22px rgba(0,0,0,0.9), 0 8px 16px -10px rgba(0,0,0,0.7)',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      {/* edge light that follows the cursor */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, borderRadius: 22, pointerEvents: 'none',
        background: 'radial-gradient(220px circle at var(--mx) var(--my), rgba(255,255,255,0.55), transparent 65%)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease',
        WebkitMask: 'linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)',
        mask: 'linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)',
        padding: 1,
      }} />

      {/* the card surface */}
      <div style={{
        position: 'relative', overflow: 'hidden', borderRadius: 21,
        padding: 'clamp(20px, 2.6vw, 34px) clamp(18px, 2.2vw, 30px) clamp(18px, 2.2vw, 28px)',
        minHeight: 'clamp(190px, 17vw, 250px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        background: 'linear-gradient(180deg, #17171a 0%, #0e0e10 45%, #08080a 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.09), inset 0 -18px 30px -18px rgba(0,0,0,0.9)',
      }}>
        {/* soft top sheen, like light falling on a machined surface */}
        <div aria-hidden="true" style={{
          position: 'absolute', left: 0, right: 0, top: 0, height: '55%', pointerEvents: 'none',
          background: 'radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0.07), transparent 70%)',
        }} />
        {/* cursor spotlight */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(320px circle at var(--mx) var(--my), rgba(255,255,255,0.075), transparent 65%)',
          opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease',
        }} />
        {/* fine grain so the surface doesn't look like a flat CSS gradient */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5, mixBlendMode: 'overlay',
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }} />

        <div style={{
          position: 'relative', zIndex: 1, fontFamily: FONT_ACCENT, fontSize: 12, fontWeight: 500,
          letterSpacing: '0.18em', color: 'rgba(255,255,255,0.34)',
        }}>
          {index}
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: "'Manrope', var(--font-main)", fontWeight: 600, fontVariantNumeric: 'tabular-nums',
            fontSize: 'clamp(2.6rem, 5.2vw, 4.6rem)', lineHeight: 1, letterSpacing: '-0.045em',
            color: '#F4F4F5',
            textShadow: '0 1px 0 rgba(255,255,255,0.12), 0 12px 30px rgba(0,0,0,0.6)',
          }}>
            {val}<span style={{ fontSize: '0.52em', marginLeft: 2, fontWeight: 500, color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.02em' }}>{suffix}</span>
          </div>
          <div style={{
            height: 1, margin: 'clamp(14px, 1.6vw, 20px) 0 clamp(10px, 1.2vw, 14px)',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04))',
          }} />
          <div style={{
            fontFamily: FONT_ACCENT, fontSize: 'clamp(11px, 1.05vw, 13px)', fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.62)',
          }}>
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Feature Block ─────────────────────────────────────────────────────────────
function FeatureBlock({ title, desc, imgUrl, isActive }) {
  const [hovered, setHovered] = useState(false);
  const lit = isActive || hovered;   // hover lights the card exactly like reaching its position
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ opacity: lit ? 1 : 0.35, y: lit ? 0 : 16, scale: lit ? 1 : 0.97 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: B.cardBg, backdropFilter: 'blur(8px)',
        borderRadius: 'var(--radius-xl)',
        border: `3px solid ${lit ? '#FFFFFF' : 'rgba(255,255,255,0.16)'}`,
        boxShadow: lit ? '0 16px 44px -10px rgba(255,255,255,0.28)' : 'none',
        padding: 'clamp(16px, 2.5vw, 24px)',
        marginBottom: 'clamp(16px, 2.5vw, 24px)',
        marginLeft: 'clamp(0px, 2vw, 30px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        width: '100%', cursor: 'default', overflow: 'hidden',
      }}
    >
      <div style={{
        width: '100%',
        height: 'clamp(180px, 22vw, 350px)',
        borderRadius: 18, overflow: 'hidden', background: '#f0f0f0',
        marginBottom: 16, position: 'relative',
      }}>
        <img src={imgUrl} alt={title} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.6s ease',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }} />
      </div>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h3 className="feature-title" style={{ marginBottom: 8 }}>{title}</h3>
        <p className="feature-body" style={{
          maxHeight: hovered ? '150px' : '0',
          opacity: hovered ? 1 : 0,
          overflow: 'hidden',
          marginTop: hovered ? '12px' : '0',
          transition: 'max-height 0.5s ease, opacity 0.4s ease, margin-top 0.4s ease',
        }}>{desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────────
// Light "travel-app" style card: rounded image with a favorite pill floating on
// top, then a white body with title, subtitle, two icon+label stats, and a
// full-width dark action pill + a separate round icon button.
function ProjectCard({ proj, i }) {
  const [hovered, setHovered] = useState(false);
  const [saved, setSaved] = useState(false);

  const industry = proj.tags && proj.tags[0];
  const primaryTool = proj.tools && proj.tools[0];
  const secondaryTool = proj.tools && proj.tools[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        borderRadius: 'var(--radius-xl)', overflow: 'hidden',
        background: '#FFFFFF',
        border: '1px solid rgba(15,15,15,0.08)',
        boxShadow: hovered ? '0 24px 48px -16px rgba(15,15,15,0.22)' : '0 10px 30px -14px rgba(15,15,15,0.14)',
        transition: 'box-shadow 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', padding: 10, paddingBottom: 0 }}>
        <div style={{ position: 'relative', height: 'clamp(160px, 20vw, 220px)', borderRadius: 18, overflow: 'hidden' }}>
          <img src={proj.imgUrl} alt={proj.title} style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }} />
          <button
            type="button"
            aria-label={saved ? 'Remove from saved case studies' : 'Save case study'}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSaved(s => !s); }}
            style={{
              position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer',
              background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            }}
          >
            <Star size={16} strokeWidth={2} color={saved ? '#6c6c6c' : '#2b2b2b'} fill={saved ? '#6c6c6c' : 'none'} />
          </button>
        </div>
      </div>

      {/* Body */}
      <Link to={`/case-studies/${proj.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ padding: 'clamp(18px, 2.2vw, 24px)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 'clamp(1.05rem, 1.9vw, 1.4rem)', color: '#0f0f0f', lineHeight: 1.3, margin: 0 }}>
            {proj.title}
          </h3>
          {industry && (
            <p style={{ margin: '4px 0 16px', fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: B.textMid, fontWeight: 500 }}>{industry}</p>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2vw, 22px)', marginBottom: 20 }}>
            {primaryTool && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 'clamp(0.82rem, 1.1vw, 0.95rem)', fontWeight: 700, color: '#0f0f0f' }}>
                <Wrench size={15} color={B.action} /> {primaryTool}
              </span>
            )}
            {secondaryTool && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 'clamp(0.82rem, 1.1vw, 0.95rem)', fontWeight: 700, color: '#0f0f0f' }}>
                {React.cloneElement(proj.icon, { size: 15, color: B.action })} {secondaryTool}
              </span>
            )}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                flexGrow: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '13px 18px', borderRadius: 99, fontWeight: 700, fontSize: 'clamp(0.82rem, 1.1vw, 0.95rem)',
                color: '#fff', background: hovered ? `linear-gradient(135deg, ${B.action}, #343434)` : '#0c0c0c',
                transition: 'background 0.3s ease',
              }}
            >
              View Case Study <ArrowRight size={15} style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s ease' }} />
            </span>
            <span style={{
              width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1.5px solid rgba(15,15,15,0.14)', color: '#0f0f0f',
            }}>
              {React.cloneElement(proj.icon, { size: 18 })}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection({ testimonials }) {
  const dupTestimonials = [...testimonials, ...testimonials];
  return (
    <div style={{ position: 'relative', padding: 'var(--sp-section) 0', zIndex: 2 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ ...PX, marginBottom: 48, textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <SectionBadge dark>Client Stories</SectionBadge>
        <h2 className="section-h2 dark">What Our Clients Say</h2>
        <p className="section-lead dark" style={{ marginTop: 12, maxWidth: 1200 }}>Trusted by innovative teams worldwide.</p>
      </motion.div>
      <div style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', position: 'relative', zIndex: 2 }}>
        <div className="testimonial-scroll-track" style={{ display: 'flex', gap: 24, animation: 'wmScrollLeft 36s linear infinite', width: 'max-content' }}>
          {dupTestimonials.map((t, i) => (
            <div key={i}
              style={{
                width: 'clamp(260px, 75vw, 460px)', flexShrink: 0,
                background: B.white, borderRadius: 'var(--radius-xl)', border: `2px solid ${B.primaryBorder}`,
                display: 'flex', flexDirection: 'column',
                padding: 'clamp(20px, 3.5vw, 40px)',
                boxShadow: `0 4px 30px rgba(57,57,57,0.08)`, transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = B.primary}
              onMouseLeave={e => e.currentTarget.style.borderColor = B.primaryBorder}
            >
              <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, si) => <Star key={si} size={16} fill={B.accent} color={B.accent} />)}
              </div>
              <p className="testimonial-text" style={{ flexGrow: 1, marginBottom: 24 }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ borderTop: `1px solid ${B.primaryBorder}`, paddingTop: 20, display: 'flex', alignItems: 'center', gap: 18, marginTop: 'auto' }}>
                <div style={{ width: 'clamp(44px, 5vw, 56px)', height: 'clamp(44px, 5vw, 56px)', borderRadius: '50%', flexShrink: 0, background: t.avatarBg, border: `2px solid ${t.avatarColor}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 16px ${t.avatarColor}25` }}>
                  <span style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 800, color: t.avatarColor }}>{t.initials}</span>
                </div>
                <div>
                  <div className="testimonial-name" style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 800 }}>{t.name}</div>
                  <div style={{ fontSize: 'clamp(12px, 1.5vw, 15px)', color: t.avatarColor, marginTop: 4, fontWeight: 600, letterSpacing: '0.06em' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



// ─── Why WellMind — Responsive Scroll / Stack ──────────────────────────────────
function WhyWellmindScroll() {
  const features = [
    { title: 'System-Driven Delivery', desc: 'Consistent outcomes via battle-tested SOPs and proven delivery frameworks that eliminate guesswork.', imgUrl: SystemDrivenDelivery, color: B.action },
    { title: 'Enterprise Security',    desc: 'ISO 27001 & 42001 compliant end-to-end encryption keeping your data protected at every layer.',     imgUrl: EnterpriseSecurity,    color: B.primary },
    { title: 'Scalable Architecture',  desc: 'Systems engineered to handle millions of requests without performance degradation or downtime.',       imgUrl: ScalableArchitecture,  color: B.accent },
    { title: 'Rapid Deployment',       desc: 'From validated concept to production-ready system in weeks, not months — with zero compromise.',       imgUrl: RapidDeployment,       color: B.secondary },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() => (typeof window === 'undefined' ? true : window.innerWidth > 900));
  const cardRefs = useRef([]);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Highlight the card nearest the middle of the screen. IntersectionObserver is used
  // instead of getBoundingClientRect maths so it stays correct under the desktop
  // `zoom` on <html>. The diagram itself is positioned with CSS `position: sticky`
  // (below) — no scroll listeners, no fixed-position arithmetic, no drift.
  useEffect(() => {
    if (!isDesktop) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveIdx(Number(e.target.dataset.idx));
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [isDesktop]);

  // Mobile: simple stacked cards
  if (!isDesktop) {
    return (
      <div style={{ ...PX, display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 24px)' }}>
        {/* Diagram on mobile — compact framed panel */}
        <div style={{
          width: '100%', maxWidth: 560, margin: '0 auto 4px',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.06), rgba(0,0,0,0) 70%), #050505',
        }}>
          <SolarSystem />
        </div>
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            style={{
              background: B.cardBg, backdropFilter: 'blur(8px)',
              borderRadius: 'var(--radius-lg)', border: `2px solid ${B.primaryBorder}`,
              padding: 'clamp(16px, 3vw, 24px)',
              boxShadow: B.cardShadow,
            }}
          >
            <div style={{ width: '100%', height: 'clamp(140px, 35vw, 220px)', borderRadius: 14, overflow: 'hidden', marginBottom: 14 }}>
              <img src={f.imgUrl} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', fontWeight: 700, color: B.textMain, marginBottom: 8, fontFamily: 'var(--font-main)' }}>{f.title}</h3>
            <p style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', color: B.textMid, lineHeight: 1.6 }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  // Desktop: cards scroll on the left (aligned to the normal 1440px content column);
  // the solar system lives in a column that runs all the way to the RIGHT EDGE of the page.
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, min(640px, 50%)) minmax(0, 1fr)',
      columnGap: 'clamp(16px, 2vw, 32px)',
      alignItems: 'stretch',
      paddingLeft: 'max(24px, calc((100% - 1440px) / 2 + 24px))',
      paddingRight: 0,
    }}>
      <div>
        {features.map((f, i) => (
          <div key={i} data-idx={i} ref={el => cardRefs.current[i] = el} style={{ marginBottom: 'clamp(16px, 3vw, 32px)' }}>
            <FeatureBlock title={f.title} desc={f.desc} imgUrl={f.imgUrl} color={f.color} isActive={activeIdx === i} />
          </div>
        ))}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          position: 'sticky',
          top: 'clamp(72px, 9vh, 96px)',
          height: 'calc(100vh - clamp(72px, 9vh, 96px) - 24px)',
          maxHeight: 700, minHeight: 420,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: '100%' }}>
            <SolarSystem bleed />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.20 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const projects = [
    { title: 'AR Prioritization & Underpayment Recovery Engine', desc: 'LightGBM classifier + live dashboard flagging underpaid Medicare claims across 6.1M rows from public CMS data.', tags: ['Data Analytics'], tools: ['Python', 'LightGBM', 'FastAPI', 'React', 'Isolation Forest'], imgUrl: imgArPrioritization, icon: <TrendingUp />, slug: 'ar-prioritization-underpayment-recovery', link: '/case-studies/ar-prioritization-underpayment-recovery' },
    { title: 'Telecom Customer Churn Prediction', desc: 'Random Forest churn model with SHAP explainability, reaching 86.4% accuracy and capturing 65%+ of churners in the top-risk band.', tags: ['AI & Machine Learning'], tools: ['Random Forest', 'XGBoost', 'SHAP', 'SMOTE'], imgUrl: imgTelecomChurn, icon: <BarChart3 />, slug: 'telecom-churn-prediction', link: '/case-studies/telecom-churn-prediction' },
    { title: 'Healthcare Fraud Detection System', desc: 'Peer-benchmarking, anomaly detection, and OIG exclusion-list matching flagged 3,842 high-risk providers from 44,528 analyzed.', tags: ['AI & Machine Learning'], tools: ['Isolation Forest', 'Random Forest', 'Z-score Analysis'], imgUrl: imgHealthcareFraudBilling, icon: <Shield />, slug: 'healthcare-fraud-detection-billing', link: '/case-studies/healthcare-fraud-detection-billing' },
  ];

  const faqs = [
    { q: 'How much does a typical project cost?',        a: 'Projects start at $1,000 for focused data science work and scale to $15,000+ for multi-omics integration or full ML deployments. Starting prices are published on every service page, and we scope fixed-fee proposals after a free discovery call.' },
    { q: 'How long does a project take?',                a: 'Most projects take 2–6 weeks end-to-end. Small focused analyses can deliver in under 10 days. Multi-omics or custom pipeline work typically takes 6–8 weeks. We give you a firm timeline in proposal.' },
    { q: 'Do you work with academic labs?',              a: "Yes, frequently. We can invoice through university procurement systems, support grant-funded projects, and deliver publication-ready outputs. We're comfortable with authorship arrangements when scope warrants it." },
    { q: 'Is my data confidential?',                     a: "Always. We sign NDAs before any data is shared and use secure transfer protocols. For clinical or health data, we follow HIPAA and GDPR requirements. We never use client data in our own research or training without explicit permission." },
    { q: 'Can you join our team part-time or on retainer?', a: "Yes. Beyond fixed-fee projects, we offer monthly retainers for ongoing analysis support — ideal for research labs or startups that need flexible expert access without hiring full-time." },
    { q: 'Where are you based and which time zones do you cover?', a: "Our team is based in Pakistan (PKT, UTC+5) with clients across US, UK, Europe, MENA, and Asia. We work fully remote and overlap working hours to fit your time zone — usually 3–5 hours of live overlap every day." },
  ];

  const heroTrustItems = [
    { icon: <BarChart3 size={16} />,    label: '50+ Projects Delivered', accent: '#9e9e9e' },
    { icon: <Globe size={16} />,        label: 'Clients in 5+ Countries', accent: '#aeaeae' },
    { icon: <FlaskConical size={16} />, label: '6 Industries Served',     accent: '#aaaaaa' },
  ];

  const testimonials = [
    { text: "WellMind's bioinformatics team delivered what two previous consultants couldn't — a clean pipeline, a real answer, and code I could actually hand off to my grad students.", name: 'Principal Investigator', role: 'Research University',    initials: 'PI', avatarBg: B.primaryLight,   avatarColor: B.primary   },
    { text: "They flagged a data quality issue we'd missed for months. That one catch saved our model — and probably our product launch.",                                              name: 'CTO',                    role: 'Healthcare AI Startup', initials: 'CT', avatarBg: B.actionLight,    avatarColor: B.action    },
    { text: "Clear communication, honest timelines, and kind of technical depth you rarely find in consulting. We've already booked our next project.",                                name: 'Head of Research',       role: 'Biotech SME',           initials: 'HR', avatarBg: B.accentLight,    avatarColor: B.accent    },
    { text: "WellMind Data Solutions cut our model deployment time by 70%. Their system-driven approach is unlike anything we've seen before.",                                        name: 'Sarah Chen',             role: 'CTO, NexaFinance',      initials: 'SC', avatarBg: B.secondaryLight, avatarColor: B.secondary },
  ];

  return (
    <div style={{ background: '#010101', color: '#fff', minHeight: '100svh', overflowX: 'clip', position: 'relative' }}>

      {/* ══ 0. INTRO VIDEO → FRAMED TUNNEL + HERO TEXT (scroll-driven) ══ */}
      <ScrollFrameIntro>
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10 } } }} style={{ minWidth: 0, maxWidth: 760, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div variants={fadeUp} custom={0.02} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 99, background: 'rgba(255,255,255,0.06)', color: '#cfcfcf', fontFamily: FONT_ACCENT, fontSize: 'clamp(10px, 1vw, 13px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', border: '1px solid rgba(255,255,255,0.16)', marginBottom: 'clamp(12px, 1.6vw, 22px)' }}>
            <Sparkles size={14} /> AI + DATA + IMPACT
          </motion.div>

          <motion.h1 variants={fadeUp} custom={0.05} style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 'clamp(1.5rem, 3.3vw, 3.4rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
            <span style={{ color: '#FFFFFF' }}>We Turn Complex Data </span><br />
            <span style={{ background: 'linear-gradient(90deg, #ababab 0%, #a7a7a7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Into Intelligent Decisions</span>
          </motion.h1>

          <motion.div variants={fadeUp} custom={0.12} className="wm-hero-divider" style={{ width: 72, height: 4, borderRadius: 99, background: 'linear-gradient(90deg, #ababab, #a7a7a7)', margin: 'clamp(12px, 1.6vw, 22px) auto' }} />

          <motion.p variants={fadeUp} custom={0.18} style={{ fontFamily: 'var(--font-main)', fontSize: 'clamp(0.85rem, 1.25vw, 1.15rem)', color: 'rgba(255,255,255,0.68)', maxWidth: 620, margin: '0 0 clamp(16px, 2vw, 28px)', letterSpacing: '0.005em', lineHeight: 1.65 }}>
            WellMind Data Solutions delivers specialist bioinformatics, healthcare AI, & data science consulting. Trusted by researchers, startups, and enterprises across five countries.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.22} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 'clamp(16px, 2.2vw, 30px)', justifyContent: 'center' }}>
            <Link to="/book-discovery" className="wm-cta-solid">
              <Zap size={19} /> Book a Discovery Call
            </Link>
            <Link to="/case-studies" className="wm-cta-ghost">
              View Case Studies <ArrowRight size={19} />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.28} className="wm-hero-trust">
            <div className="wm-hero-trust-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
              <span style={{ height: 1, width: 42, background: 'rgba(255,255,255,0.28)' }} />
              <span style={{ color: '#a7a7a7', fontSize: 12, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Recognized For</span>
              <span style={{ height: 1, width: 42, background: 'rgba(255,255,255,0.28)' }} />
            </div>
            <div className="wm-hero-trust-items" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {heroTrustItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', fontSize: 'clamp(11px, 1.05vw, 14px)', fontWeight: 700, color: 'rgba(255,255,255,0.88)', background: 'rgba(255,255,255,0.05)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.14)' }}>
                  <span style={{ width: 24, height: 24, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${item.accent}18` }}>
                    {React.cloneElement(item.icon, { size: 14, color: item.accent, strokeWidth: 2.5 })}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </ScrollFrameIntro>

      {/* ══ 2. STATS ══ */}
      <section ref={statsRef} style={{ padding: 'var(--sp-section) 0', position: 'relative', zIndex: 1, background: '#010101', display: 'flex', alignItems: 'center' }}>
        <CircuitBg opacity={0.1} />
        <DataParticles count={6} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionBadge dark>Our Impact</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 'clamp(20px, 3.5vw, 40px)', textAlign: 'center' }}>Results that Speak</h2>
            <div className="grid-stats" style={{ width: '100%' }}>
              <StatCard index="01" target={40} suffix="%" label="Cost Reduction"     start={statsVisible} delay={0}   />
              <StatCard index="02" target={3}  suffix="x" label="Faster Delivery"    start={statsVisible} delay={0.1} />
              <StatCard index="03" target={50} suffix="+" label="Enterprise Models"  start={statsVisible} delay={0.2} />
              <StatCard index="04" target={99} suffix="%" label="Uptime SLA"         start={statsVisible} delay={0.3} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. MAIN LIGHT SECTION ══ */}
      <section style={{ position: 'relative', zIndex: 1, background: '#010101', overflow: 'clip', padding: 0 }}>
        <DataParticles count={6} dark />

        {/* Why WellMind */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 60px)' }}>
            <SectionBadge dark>Why WellMind Data Solutions</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 12 }}>
              Built for enterprise.<br />
              <span style={{ background: 'linear-gradient(90deg, #ababab 25%, #a7a7a7 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Proven at scale.</span>
            </h2>
            <p className="section-lead dark" style={{ maxWidth: 1200 }}>We don't just build algorithms, we build business value. Every solution is architected for reliability, security, and measurable ROI.</p>
          </div>
          <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <WhyWellmindScroll />
          </div>
        </div>

        <SectionDivider />

        {/* Core Capabilities */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center'}}>
              <SectionBadge dark>Core Capabilities</SectionBadge>
              <h2 className="section-h2 dark">Our AI Services</h2>
              <p className="section-lead dark" style={{ marginTop: 12, maxWidth: 1200, marginBottom: 0 }}>Comprehensive solutions across entire AI spectrum.</p>
            </motion.div>
          </div>
          <div style={{ overflow: 'visible' }}>
            <ScrollTest />
          </div>
        </div>

        <SectionDivider />

        {/* Portfolio */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 48 }}>
              <SectionBadge dark>Portfolio</SectionBadge>
              <h2 className="section-h2 dark">Real Projects. Real Results.</h2>
              <p className="section-lead dark" style={{ marginTop: 12, maxWidth: 1200 }}>Explore how we've helped industries transform data into decisions.</p>
            </motion.div>

            <div className="grid-projects" style={{ width: '100%' }}>
              {projects.map((proj, i) => <ProjectCard key={i} proj={proj} i={i} />)}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: 'clamp(12px, 2vw, 18px) clamp(24px, 4vw, 48px)', borderRadius: 'var(--radius-md)', background: 'transparent', color: '#FFFFFF', fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', border: '2px solid #FFFFFF', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#000'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,255,255,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none'; }}>
                View All Case Studies <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>

        <SectionDivider />

        {/* Testimonials */}
        <TestimonialsSection testimonials={testimonials} />
      </section>

      {/* ══ 4. FAQ ══ */}
      <InViewSection style={{ padding: 'var(--sp-section) 0', position: 'relative', zIndex: 1, background: '#010101' }}>
        <CircuitBg opacity={0.06} />
        <DataParticles count={5} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionBadge dark>Common Questions</SectionBadge>
            <h2 className="section-h2 dark">Frequently Asked Questions</h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: B.textDarkMid, maxWidth: 1200, margin: '12px auto 0', lineHeight: 1.6 }}>
              Honest answers to questions clients ask before hiring us.
            </p>
          </motion.div>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} index={i} />
            ))}
          </div>
        </div>
      </InViewSection>

      {/* ══ 5. FOOTER CTA ══ */}
      <InViewSection style={{ padding: 'clamp(56px, 8vw, 100px) 0', position: 'relative', overflow: 'hidden', zIndex: 1, background: '#010101' }}>
        <DataParticles count={8} dark />
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(68,68,68,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '6%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(92,92,92,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge dark>Ready to Start?</SectionBadge>

            <h2 className="section-h2 dark" style={{ marginBottom: 20 }}>
              Ready to Turn Your Data<br />
              <span style={{ background: 'linear-gradient(90deg, #ababab 25%, #a7a7a7 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Into Impact?</span>
            </h2>

            <p className="section-lead dark" style={{ maxWidth: 900, margin: '0 auto clamp(28px, 3.5vw, 48px)', lineHeight: 1.75 }}>
              Book a free 30-minute call. Tell us your challenge. We'll give you honest feedback on what's possible, what it would cost, and whether we're the right fit. No pitch. No pressure.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(32px, 5vw, 52px)' }}>
              <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link to="/book-discovery" aria-label="Book a Discovery Call" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: 'clamp(14px, 2.5vw, 20px) clamp(22px, 5vw, 56px)', borderRadius: 'var(--radius-md)', background: '#FFFFFF', color: '#000000', fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 8px 40px rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>
                  <Zap size={18} />
                  <span>Book a Discovery Call</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 28px', justifyContent: 'center', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
              {[
                { icon: <Mail size={16} />, label: 'wellminddatasolutions@gmail.com', href: 'mailto:wellminddatasolutions@gmail.com' },
                { icon: <MessageCircle size={16} />, label: 'WhatsApp: +92 323 6787087', href: 'https://wa.me/923236787087' },
                { icon: <Phone size={16} />, label: 'Call: +92 323 6787087', href: 'tel:+923236787087' },
                { icon: <FaLinkedin size={16} />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/wellmind-data-solutions' },
              ].map((c, i) => (
                <a key={i} href={c.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, minWidth: 0, fontSize: 'clamp(12px, 1.6vw, 16px)', color: 'rgba(255,255,255,0.72)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}>
                  <span style={{ color: '#FFFFFF', flexShrink: 0 }}>{c.icon}</span>
                  <span>{c.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </InViewSection>

    </div>
  );
}