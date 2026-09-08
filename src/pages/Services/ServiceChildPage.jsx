/**
 * ServiceChildPage.jsx — WellMind Data Solutions
 * Generic child service page — reads :childId from URL params,
 * fetches data from aiMlChildData.js, renders full page.
 *
 * Route example:  /services-ai-ml/predictive-modeling
 *                 /services-ai-ml/nlp
 *                 /services-ai-ml/rag
 *
 * Design mirrors ServicesAiMl.jsx exactly.
 * Drop this into your router:
 *   <Route path="/services-ai-ml/:childId" element={<ServiceChildPage />} />
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cpu, Brain, Zap, Code, Server, Database, Shield, Globe,
  CheckCircle, ArrowRight, Terminal, Layers, GitBranch,
  BarChart3, Settings2, Activity, TrendingUp, RefreshCw,
  Eye, Sparkles, MessageSquare, FileText, Search, Users,
} from 'lucide-react';

import { HeroGridBg, SectionGridBg } from '../../components/BgGrid';
import AiMl from '../../assets/ai-ml-service.webp';

import {
  B, SECTION_PAD, PX, fadeUp, useCounter,
  DataParticles, SectionBadge, SectionDivider, CircuitBg,
} from '../../theme';

import { AI_ML_CHILDREN } from './aiMlChildData';

// ─── Icon resolver (maps iconName string → Lucide component) ─────────────────
const ICON_MAP = {
  Cpu, Brain, Zap, Code, Server, Database, Shield, Globe,
  BarChart3, Settings2, Activity, TrendingUp, RefreshCw,
  Eye, Sparkles, MessageSquare, FileText, Search, Users,
  Layers, GitBranch, Terminal,
};
function Icon({ name, size = 22 }) {
  const C = ICON_MAP[name] || Cpu;
  return <C size={size} />;
}

// ─── Feature Card (identical to ServicesAiMl.jsx) ─────────────────────────────
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
        width: 'clamp(44px, 6vw, 54px)', height: 'clamp(44px, 6vw, 54px)', borderRadius: '50%',
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
        boxShadow: hovered ? `0 0 25px ${color}40` : 'none',
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
      }}>
        <Icon name={iconName} size={22} />
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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ServiceChildPage() {
  const { childId } = useParams();
  const navigate    = useNavigate();
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  // Fetch data
  const data = AI_ML_CHILDREN[childId];

  // Redirect if not found
  useEffect(() => {
    if (!data) navigate('/services-ai-ml', { replace: true });
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

  const processColors = [data.accentColor, B.primary, B.accent, B.secondary];

  return (
    <div style={{
      background: B.bgLight, minHeight: '100vh',
      overflowX: 'clip', position: 'relative',
      fontFamily: 'var(--font-body, sans-serif)',
    }}>

      {/* ══════════ 1. HERO ══════════ */}
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
          background: 'linear-gradient(90deg, rgba(127,32,55,0.06) 0%, transparent 80%)',
          pointerEvents: 'none', zIndex: 1,
        }} />
        <DataParticles count={18} />

        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
          position: 'relative', zIndex: 10,
        }}>
          <div style={{ maxWidth: 1200, width: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 5vw, 60px)' }}>

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
                style={{ flex: '1 1 clamp(280px, 45%, 600px)', display: 'flex', flexDirection: 'column' }}
              >
                {/* Breadcrumb */}
                <motion.div variants={fadeUp} custom={0} style={{ marginBottom: 12 }}>
                  <Link to="/services-ai-ml" style={{
                    fontSize: 'clamp(11px, 1.2vw, 13px)', fontWeight: 600,
                    color: data.accentColor, textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    opacity: 0.8,
                  }}>
                    ← AI & Machine Learning
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} custom={0}>
                  <SectionBadge>{data.badge}</SectionBadge>
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
                  color: data.accentColor, marginBottom: 'clamp(12px, 1.5vw, 18px)',
                  lineHeight: 1.4,
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
                  gap: 'clamp(14px, 1.5vw, 18px)',
                }}>
                  <Link to="/contact" className="btn-primary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                    <Zap size={16} /> Start Your Project
                  </Link>
                  <Link to="/case-studies" className="btn-secondary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                    View Case Studies <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — Static Image (same as parent page) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  flex: '1 1 clamp(260px, 40%, 600px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  minHeight: 'clamp(300px, 42vw, 560px)', alignSelf: 'stretch',
                }}
              >
                <img
                  src={AiMl}
                  alt={`${data.title} Visual`}
                  style={{
                    objectFit: 'contain',
                    boxShadow: B.cardShadow,
                    background: 'transparent',
                    borderRadius: 14,
                  }}
                />
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
                  <CheckCircle size={14} color={data.accentColor} /> {t}
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
            <SectionBadge dark style={{ color: B.textDarkMuted, marginBottom: 20 }}>Proven Excellence</SectionBadge>
            <h2 className="section-h2 dark" style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3.5vw, 40px)' }}>
              Measurable Impact
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
              Technologies We Use
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
            <SectionBadge>What We Build</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>
              {data.title} Capabilities
            </h2>
            <p className="section-lead" style={{ maxWidth: 1200 }}>
              From raw data to intelligent decisions — every capability purpose-built for your business outcomes.
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
              <SectionBadge>How It Works</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>
                Our Build Process
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
              <SectionBadge>What You Get</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 12 }}>
                Full Ownership. Zero Black Boxes.
              </h2>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)',
                color: B.textMid, lineHeight: 1.7,
                marginBottom: 'clamp(24px, 3.5vw, 36px)',
              }}>
                Every engagement delivers production-ready code, models, and documentation that your team can maintain and extend independently.
              </p>
              {data.deliverables.map((d, i) => (
                <DeliverableItem key={i} text={d} color={processColors[i % processColors.length]} />
              ))}
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
              Fixed-fee engagements. Scope agreed in writing before we start. No surprise invoices — ever.
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
                    ? `linear-gradient(145deg, ${data.accentColor}18, ${data.accentColor}08)`
                    : B.bgDarkCard,
                  backdropFilter: 'blur(12px)',
                  borderRadius: 'var(--radius-xl)',
                  border: `2px solid ${tier.featured ? data.accentColor : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: tier.featured ? `0 20px 56px -14px ${data.accentColor}30` : 'none',
                  padding: 'clamp(22px, 3vw, 32px) clamp(18px, 2.5vw, 28px)',
                  position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                {tier.featured && (
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    padding: '4px 12px', borderRadius: 99,
                    background: data.accentColor, color: B.white,
                    fontSize: 10, fontWeight: 800,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{
                  fontWeight: 700, fontSize: 'clamp(11px, 1.3vw, 13px)',
                  color: data.accentColor, letterSpacing: '0.10em',
                  textTransform: 'uppercase', marginBottom: 10,
                }}>
                  {tier.name}
                </div>
                <div style={{
                  fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  color: B.textDark, marginBottom: 6,
                }}>
                  {tier.price}
                </div>
                <p style={{
                  fontSize: 'clamp(12px, 1.4vw, 13.5px)',
                  color: B.textDarkMid, lineHeight: 1.6,
                  marginBottom: 'clamp(16px, 2.5vw, 24px)',
                }}>
                  {tier.desc}
                </p>
                <div style={{ flex: 1, marginBottom: 'clamp(18px, 2.5vw, 28px)' }}>
                  {tier.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                      <CheckCircle size={15} color={data.accentColor} style={{ flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontSize: 'clamp(12px, 1.4vw, 13.5px)', color: B.textDarkMid }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: 'clamp(10px, 1.5vw, 13px) 20px', borderRadius: 10,
                  background: tier.featured ? data.accentColor : 'transparent',
                  color: tier.featured ? B.white : data.accentColor,
                  border: `1.5px solid ${data.accentColor}`,
                  fontWeight: 700, fontSize: 'clamp(11px, 1.4vw, 13px)',
                  textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { if (!tier.featured) e.currentTarget.style.background = `${data.accentColor}20`; }}
                  onMouseLeave={e => { if (!tier.featured) e.currentTarget.style.background = 'transparent'; }}>
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
          background: `radial-gradient(circle, ${data.accentColor}12 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '8%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(11, 124, 147,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Let's Build Something<br />
              <span style={{
                background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Genuinely Intelligent.
              </span>
            </h2>
            <p className="section-lead" style={{
              color: B.textMid, maxWidth: 1200,
              margin: '0 auto clamp(24px, 3.5vw, 48px)', lineHeight: 1.75,
            }}>
              Book a free 30-minute call. Tell us your {data.title.toLowerCase()} challenge. We'll give you honest feedback on what's achievable, what it costs, and whether this is even the right tool — no sales pitch.
            </p>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 56px)',
                borderRadius: 'var(--radius-md)',
                background: `linear-gradient(135deg, ${data.accentColor}, #0A5F75)`,
                color: B.white, fontWeight: 700,
                fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
                letterSpacing: '0.10em', textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: `0 8px 40px ${data.accentColor}60, 0 0 80px rgba(11, 124, 147,0.15)`,
                border: '1px solid rgba(11, 124, 147,0.40)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                <Zap size={18} /> Book Your Free Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}