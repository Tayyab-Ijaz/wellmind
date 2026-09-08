/**
 * IndustryAgriculture.jsx — WellMind Data Solutions
 * /industry-agriculture
 * Fully responsive: 1440 | 1024 | 768 | 425 | 320 px
 *
 * Structure mirrors IndustryFinancial.jsx exactly:
 * 1. Hero (text + image + floating tags)
 * 2. Stats Strip (dark)
 * 3. Merged Capabilities + Case Studies (light)
 * 4. Tech Stack (PrimaryDark bg)
 * 5. Why Choose Us (light)
 * 6. FAQ (dark)
 * 7. Final CTA (light)
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Leaf, TrendingUp, CloudRain, BarChart3, Brain, Zap, ArrowRight,
  CheckCircle, Sprout, Tractor, FlaskConical, Globe, Activity,
  ShieldCheck, Target, RefreshCw, Eye, ChevronRight, Cpu, Database, Lock,
} from 'lucide-react';

import { HeroGridBg, SectionGridBg } from '../../components/BgGrid';
import { B, SECTION_PAD, PX, fadeUp, useCounter, DataParticles, SectionBadge } from '../../theme';

// ─── Stat Card (Dark Section) ─────────────────────────────────────────────────
function StatCard({ prefix = '', target, suffix, label, icon, start, delay = 0, theme }) {
  const val = useCounter(target, 2200, start);
  const [hovered, setHovered] = useState(false);
  const t = theme || { color: B.action, bg: B.actionLight };
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
      <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, background: `radial-gradient(circle, ${t.color} 0%, transparent 70%)`, opacity: hovered ? 0.18 : 0, filter: 'blur(20px)', transition: 'opacity 0.4s ease', pointerEvents: 'none' }} />
      <div style={{ width: 'clamp(40px, 5vw, 52px)', height: 'clamp(40px, 5vw, 52px)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto clamp(10px, 1.5vw, 18px)', background: hovered ? t.color : 'rgba(255,255,255,0.05)', color: hovered ? '#fff' : t.color, border: `1px solid ${hovered ? 'transparent' : 'rgba(255,255,255,0.1)'}`, transition: 'all 0.4s ease', boxShadow: hovered ? `0 10px 20px ${t.color}40` : 'none' }}>
        <motion.div animate={{ rotate: hovered ? 360 : 0 }} transition={{ duration: 0.6 }}>
          {React.cloneElement(icon, { size: 20, strokeWidth: 2 })}
        </motion.div>
      </div>
      <div style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3.2vw, 2.6rem)', color: hovered ? 'transparent' : B.textDark, background: hovered ? `linear-gradient(180deg, #fff 30%, ${t.color} 100%)` : 'none', WebkitBackgroundClip: hovered ? 'text' : 'none', backgroundClip: hovered ? 'text' : 'none', marginBottom: 6, letterSpacing: '-0.03em', transition: 'all 0.3s ease' }}>
        {prefix}{val}<span style={{ fontSize: '0.5em' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.12em', textTransform: 'uppercase', color: B.textDarkMuted, fontWeight: 700 }}>
        {label}
      </div>
    </motion.div>
  );
}

// ─── Capability Card ─────────────────────────────────────────────────────────
function CapabilityCard({ icon, color, title, desc, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      style={{
        background: hovered ? color : B.cardBg,
        backdropFilter: 'blur(10px)',
        border: `3px solid ${hovered ? color : B.primaryBorder}`,
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(24px, 3vw, 36px)',
        boxShadow: hovered ? `0 16px 48px -12px ${color}40` : B.cardShadow,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative', overflow: 'hidden', cursor: 'default', height: '100%',
      }}
    >
      <div style={{ width: 54, height: 54, borderRadius: 16, background: hovered ? B.white : `${color}20`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, border: `1px solid ${color}40`, boxShadow: hovered ? `0 8px 24px ${color}30` : 'none', transition: 'box-shadow 0.35s', flexShrink: 0 }}>
        {React.cloneElement(icon, { size: 26 })}
      </div>
      <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, color: hovered ? B.textDark : B.primaryDark, marginBottom: 12, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.3 }}>{title}</h3>
      <p style={{ color: hovered ? B.textDarkMid : B.textMid, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.7 }}>{desc}</p>
    </motion.div>
  );
}

// ─── Use Case Row ─────────────────────────────────────────────────────────────
function UseCaseRow({ icon, color, title, desc, metrics, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -28 : 28 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(20px, 3vw, 36px)',
        background: hovered ? color : 'rgba(255,255,255,0.55)',
        border: `3px solid ${hovered ? color : B.primaryBorder}`,
        borderRadius: 'var(--radius-xl)', padding: 'clamp(24px, 3vw, 40px)',
        boxShadow: hovered ? `0 20px 48px -12px ${color}40` : B.cardShadow,
        transition: 'all 0.35s ease', cursor: 'default', position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(180deg, ${color}, transparent)`, opacity: hovered ? 1 : 0.3, transition: 'opacity 0.35s' }} />
      <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', background: hovered ? B.white : `${color}12`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${color}30`, flexShrink: 0, transition: 'all 0.3s' }}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div style={{ flex: '1 1 240px' }}>
        <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, color: hovered ? B.textDark : B.primaryDark, marginBottom: 10, fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)' }}>{title}</h3>
        <p style={{ color: hovered ? B.textDarkMid : B.textMid, fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', lineHeight: 1.75 }}>{desc}</p>
      </div>
      <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 32px)', flexWrap: 'wrap' }}>
        {metrics.map((m, i) => (
          <div key={i} style={{ textAlign: 'center', minWidth: 90 }}>
            <div style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', color: hovered ? B.textDark : color, letterSpacing: '-0.02em' }}>{m.val}</div>
            <div style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: hovered ? B.textDarkMuted : B.textMuted, fontWeight: 700, marginTop: 4 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── FAQ Item (Dark Mode) ─────────────────────────────────────────────────────
function FaqItem({ q, a, isOpen, onClick, index, color }) {
  return (
    <motion.div
      initial={false} onClick={onClick}
      whileHover={!isOpen ? { x: 3 } : {}} transition={{ duration: 0.2 }}
      style={{
        borderRadius: 16, overflow: 'hidden', marginBottom: 14, cursor: 'pointer',
        border: `1.5px solid ${isOpen ? color : 'rgba(255,255,255,0.10)'}`,
        background: isOpen ? `${color}20` : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        boxShadow: isOpen ? `0 8px 32px ${color}20` : 'none',
      }}
    >
      <div style={{ padding: 'clamp(16px, 2vw, 24px) clamp(18px, 2.5vw, 28px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 1.5vw, 16px)', flex: 1 }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.10em', color: isOpen ? color : B.textDarkMuted, minWidth: 26, fontFamily: 'var(--font-main)', transition: 'color 0.3s' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <h4 style={{ fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: isOpen ? B.textDark : B.textDarkMid, margin: 0, lineHeight: 1.4, transition: 'color 0.3s' }}>{q}</h4>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, background: isOpen ? color : 'rgba(255,255,255,0.10)', border: `1px solid ${isOpen ? 'transparent' : 'rgba(255,255,255,0.10)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
          <ChevronRight size={14} color={isOpen ? B.bgDark : B.textDarkMuted} style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '0 clamp(18px, 2.5vw, 28px) clamp(16px, 2vw, 24px)', paddingLeft: `calc(clamp(18px, 2.5vw, 28px) + 14px + 26px)` }}>
              <div style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', lineHeight: 1.78, color: B.textDarkMid, borderLeft: `2px solid ${color}40`, paddingLeft: 18 }}>{a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function IndustryAgriculture() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.20 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const capabilities = [
    { icon: <Sprout size={22} />,       color: B.action,    title: 'Crop Yield Prediction',           desc: 'ML models trained on satellite imagery, soil sensors, and weather data to forecast yield per field with up to 92% accuracy — enabling smarter harvest planning and commodity hedging.' },
    { icon: <CloudRain size={22} />,    color: B.primary,   title: 'Precision Irrigation & Weather AI', desc: 'IoT-driven models that correlate microclimate data with crop stress indicators, automating irrigation schedules that cut water usage by 30–40% without yield loss.' },
    { icon: <FlaskConical size={22} />, color: B.accent,    title: 'Soil Health & Nutrient Analytics',  desc: 'Deep-learning pipelines that fuse lab assay data, hyperspectral imagery, and historical yield maps to generate per-zone fertilizer prescriptions, reducing input costs significantly.' },
    { icon: <Tractor size={22} />,      color: B.secondary, title: 'Autonomous Equipment & Fleet AI',   desc: 'Computer vision and path-planning models for variable-rate application, obstacle detection, and fleet routing — integrated with John Deere Operations Center and similar platforms.' },
    { icon: <Brain size={22} />,        color: B.action,    title: 'Pest & Disease Early Detection',    desc: 'Real-time image classification deployed on edge devices (drones, cameras) to flag fungal, bacterial, and pest outbreaks 7–14 days before visual symptoms appear.' },
    { icon: <BarChart3 size={22} />,    color: B.accent,    title: 'Supply Chain & Market Intelligence', desc: 'Demand-sensing and price-forecasting models that help agribusinesses optimize storage, logistics, and forward contracting decisions across volatile commodity markets.' },
  ];

  const useCases = [
    {
      icon: <Sprout />, color: B.action,
      title: 'Yield Prediction for a Large-Scale Grain Producer',
      desc: 'We built a multi-spectral satellite + weather fusion model covering 120,000 acres across three growing regions. The system ingests Sentinel-2 imagery every 5 days alongside hyperlocal weather station feeds and historical yield data, producing per-field yield estimates 10 weeks before harvest.',
      metrics: [{ val: '92%', label: 'Yield Accuracy' }, { val: '10wk', label: 'Early Forecast' }, { val: '18%', label: 'Input Cost Savings' }],
    },
    {
      icon: <CloudRain />, color: B.primary,
      title: 'Smart Irrigation Platform for a Vegetable Farm Network',
      desc: 'Deployed an edge-AI irrigation controller across 48 farms integrating soil moisture sensors, ET forecasting, and crop growth stage models. The system dynamically adjusts irrigation schedules daily, reducing water consumption while maintaining crop quality standards for export markets.',
      metrics: [{ val: '34%', label: 'Water Reduction' }, { val: '48', label: 'Farms Covered' }, { val: '$1.2M', label: 'Annual Savings' }],
    },
    {
      icon: <FlaskConical />, color: B.accent,
      title: 'Nutrient Prescription Engine for an Agri-Input Company',
      desc: 'Built a variable-rate fertilizer recommendation engine combining soil lab results, NDVI maps, and 5-year yield history. The platform generates geo-referenced prescription maps compatible with leading precision applicators, reducing over-application and improving gross margins for farmer clients.',
      metrics: [{ val: '22%', label: 'Fertilizer Reduction' }, { val: '3.4x', label: 'ROI for Farmers' }, { val: '15K+', label: 'Fields Processed' }],
    },
  ];

  const faqs = [
    { q: 'What data sources do you work with in agriculture?', a: 'We integrate Sentinel-2 and Planet Labs satellite imagery, Landsat archives, drone-captured multispectral data, IoT soil and weather sensors (Davis, Campbell Scientific, METER Group), ERP systems like SAP AgriEdge, and yield monitor exports from John Deere, Case IH, and AGCO equipment.' },
    { q: 'Can your models work in low-connectivity farm environments?', a: 'Yes. We design edge-first architectures where models run locally on ruggedized hardware (NVIDIA Jetson, Raspberry Pi with TPU) and sync batch updates when connectivity is available. Critical alerts are transmitted via LoRaWAN or satellite fallback (Iridium, Starlink).' },
    { q: 'How do you handle the variability between growing seasons and geographies?', a: 'We use transfer learning and domain adaptation to bootstrap models in new regions using as little as one season of local data. Models are updated continuously with each new season\'s data via automated retraining pipelines, so accuracy improves over time.' },
    { q: 'Do you integrate with existing farm management software?', a: 'Yes. We build connectors for John Deere Operations Center, Climate FieldView, Trimble Ag, Granular, and custom FMIS platforms via REST and MQTT APIs. Prescription outputs are delivered in ISO-XML, Shapefile, and GeoTIFF formats compatible with major precision applicators.' },
    { q: 'What does a typical agriculture AI engagement look like?', a: 'We start with a 2-week data audit (satellite coverage, sensor infrastructure, historical records), then develop and validate models over 4–8 weeks using the previous season\'s data. Pilot deployment runs for one full growing cycle, followed by a production rollout with continuous monitoring.' },
  ];

  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-main)' }}>

      {/* ══ 1. HERO ══ */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        overflow: 'hidden', zIndex: 1,
        background: B.heroBg,
        paddingTop: 'clamp(40px, 5vw, 50px)',
      }}>
        <HeroGridBg opacity={0.35}/>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(90deg, rgba(34,85,34,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }}/>
        <DataParticles count={18}/>

        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
          position: 'relative', zIndex: 10,
        }}>
          <div style={{ maxWidth: 1200, width: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 5vw, 60px)' }}>

            {/* TOP ROW: Text + Image */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch', gap: 'clamp(18px, 5vw, 44px)' }}>

              {/* Left — Text */}
              <motion.div
                initial="hidden" animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                style={{ flex: '1 1 clamp(280px, 45%, 600px)', display: 'flex', flexDirection: 'column' }}
              >
                <motion.div variants={fadeUp} custom={0}>
                  <SectionBadge>Agriculture & AgriTech AI</SectionBadge>
                </motion.div>

                <motion.h1 variants={fadeUp} custom={0.05}
                  style={{
                    fontWeight: 700,
                    fontSize: 'var(--fs-hero)',
                    lineHeight: 1.1, letterSpacing: '-0.02em',
                    marginBottom: 'clamp(14px, 2vw, 24px)', color: B.primaryDark,
                  }}>
                  AI That Grows With<br/>
                  <span style={{ background: B.secondary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Every Season
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={0.15}
                  style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.5rem)', fontWeight: 500, color: B.textMid, marginBottom: 'clamp(20px, 3vw, 36px)', lineHeight: 1.75 }}>
                  From precision crop intelligence to autonomous equipment — we build production-grade AI systems for agribusinesses, cooperatives, and agri-input companies. Data-driven. Field-tested. Results-measured.
                </motion.p>

                <motion.div variants={fadeUp} custom={0.25} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 1.5vw, 20px)' }}>
                  <Link to="/book-discovery" className="btn-primary" style={{ width: '100%' }}>
                    <Zap size={16}/> Start Your AI Project
                  </Link>
                  <Link to="/case-studies?industry=agriculture" className="btn-secondary" style={{ width: '100%' }}>
                    View Case Studies <ArrowRight size={16}/>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — Static Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  flex: '1 1 clamp(260px, 40%, 600px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '300px',
                }}
              >
                <img
                  src="https://picsum.photos/seed/agricultureai/600/600"
                  alt="Agriculture AI Visual"
                  style={{
                    objectFit: 'contain',
                    boxShadow: B.cardShadow,
                    background: 'transparent',
                    borderRadius: 14,
                  }}
                />
              </motion.div>
            </div>

            {/* BOTTOM ROW: Floating Tags */}
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
              {[
                { val: '92%', label: 'Yield Accuracy' },
                { val: '34%', label: 'Water Saved' },
                { val: '$1.2M', label: 'Annual Savings' },
                { val: '15K+', label: 'Fields Processed' },
              ].map((s, i) => (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10,
                  padding: 'clamp(8px, 1.5vw, 12px) clamp(18px, 2.5vw, 28px)',
                  borderRadius: 50,
                  background: 'rgba(255,255,255,0.7)', border: `2px solid ${B.primaryBorder}`,
                  boxShadow: '0 4px 12px rgba(107, 46, 116, 0.08)',
                  animation: `wmFloat ${3.5 + i * 0.5}s ease-in-out infinite`,
                }}>
                  <span style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', fontWeight: 800, color: B.secondary, lineHeight: 1 }}>{s.val}</span>
                  <span style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: B.textMuted }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 2. STATS STRIP (dark) ══ */}
      <section ref={statsRef} style={{ padding: 'var(--sp-section) 0', position: 'relative', zIndex: 1, background: `linear-gradient(135deg, #170F22 0%, #140B20 100%)`, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <DataParticles count={12} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}>
            <SectionBadge dark>Measurable Agricultural Impact</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 0 }}>Numbers That Matter in Agriculture</h2>
          </div>
          <div className="grid-stats">
            <StatCard target={92}  suffix="%"   label="Yield Forecast Accuracy"   icon={<Target />}     start={statsVisible} delay={0}   theme={{ color: B.action, bg: B.actionLight }} />
            <StatCard target={34}  suffix="%"   label="Water Usage Reduction"     icon={<CloudRain />}  start={statsVisible} delay={0.1} theme={{ color: B.secondary, bg: B.secondaryLight }} />
            <StatCard target={22}  suffix="%"   label="Fertilizer Cost Savings"   icon={<TrendingUp />} start={statsVisible} delay={0.2} theme={{ color: B.primary, bg: B.primaryLight }} />
            <StatCard target={15}  suffix="K+"  label="Fields Processed"          icon={<Globe />}      start={statsVisible} delay={0.3} theme={{ color: B.accent, bg: B.accentLight }} />
          </div>
        </div>
      </section>

      {/* ══ 3. MERGED: CAPABILITIES + CASE STUDIES (Light) ══ */}
      <section style={{
        padding: 'var(--sp-section) 0',
        position: 'relative',
        background: 'linear-gradient(180deg, #EBE6EB 0%, #E5DCF0 100%)',
        overflow: 'hidden', zIndex: 1
      }}>
        <SectionGridBg opacity={0.14} />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 56px)' }}>
            <SectionBadge>Capabilities & Impact</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark }}>
              Built for the Complexity of{' '}
              <span style={{ background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Modern Agriculture</span>
            </h2>
            <p className="section-lead">End-to-end AI solutions across precision farming, supply chain, and agri-input optimization.</p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid-capabilities" style={{ marginBottom: 'clamp(60px, 8vw, 80px)' }}>
            {capabilities.map((cap, i) => (
              <CapabilityCard key={i} {...cap} delay={i * 0.07} />
            ))}
          </div>

          {/* Divider */}
          <div style={{ position: 'relative', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(24px, 4vw, 48px) 0' }}>
            <div style={{ flex: 1, maxWidth: 320, height: 1, background: 'linear-gradient(to right, transparent, rgba(147, 33, 63,0.25))' }}/>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 24px' }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(147, 33, 63,0.40)' }}/>
              <div style={{ width: 10, height: 10, background: B.secondary, transform: 'rotate(45deg)', boxShadow: `0 0 12px rgba(147, 33, 63,0.50)` }}/>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(147, 33, 63,0.40)' }}/>
            </div>
            <div style={{ flex: 1, maxWidth: 320, height: 1, background: 'linear-gradient(to left, transparent, rgba(147, 33, 63,0.25))' }}/>
          </div>

          {/* Case Studies Sub-heading */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 56px)' }}>
            <h3 style={{ color: B.primaryDark, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, marginBottom: 24 }}>Real Problems. Deployed Solutions.</h3>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3vw, 32px)', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
            {useCases.map((uc, i) => (
              <UseCaseRow key={i} {...uc} index={i} />
            ))}
          </div>

          {/* Deep-link CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ textAlign: 'center' }}>
            <Link
              to="/case-studies?industry=agriculture"
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: 'clamp(14px, 2vw, 18px) clamp(28px, 4vw, 48px)', borderRadius: 'var(--radius-md)', border: 'none', boxShadow: '0 4px 14px rgba(147, 33, 63,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
            >
              View All Agriculture Case Studies <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ 4. TECH STACK (PrimaryDark BG) ══ */}
      <section style={{
        padding: `clamp(40px, 6vw, 80px) 0`,
        position: 'relative',
        background: `linear-gradient(135deg, ${B.primaryDark} 0%, #140B20 100%)`,
        zIndex: 1, overflow: 'hidden'
      }}>
        <DataParticles count={10} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 48px)' }}>
            <SectionBadge dark>Technology Stack</SectionBadge>
            <h2 className="section-h2 dark" style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.4rem)', marginBottom: 12 }}>Built on Field-Grade Infrastructure</h2>
            <p style={{ color: B.textDarkMid, fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', maxWidth: 640, margin: '0 auto' }}>Production tools trusted by agribusinesses, cooperatives, and agri-input companies worldwide.</p>
          </motion.div>
          <div className="grid-tech">
            {[
              { group: 'ML & Remote Sensing', items: ['Sentinel-2 / Planet Labs', 'PyTorch (CNN, ViT)', 'NDVI / EVI Processing', 'Scikit-learn', 'Edge Model Quantization'], icon: <Brain size={16} />, color: B.action },
              { group: 'IoT & Data Engineering', items: ['LoRaWAN / MQTT', 'Apache Kafka', 'InfluxDB (Time-Series)', 'dbt + Snowflake', 'Airflow Pipelines'], icon: <Database size={16} />, color: B.secondary },
              { group: 'Edge & Deployment', items: ['NVIDIA Jetson', 'AWS IoT Greengrass', 'Docker / K8s', 'FastAPI', 'Starlink / Iridium Fallback'], icon: <Cpu size={16} />, color: B.primary },
              { group: 'Integration & Standards', items: ['ISO-XML Prescriptions', 'GeoTIFF / Shapefile', 'John Deere Ops Center', 'Climate FieldView API', 'MQTT / REST Connectors'], icon: <Lock size={16} />, color: B.accent },
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1.5px solid ${col.color}40`,
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(20px, 3vw, 32px)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${col.color}, transparent)` }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${col.color}25`, color: col.color, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${col.color}40` }}>
                    {col.icon}
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 'clamp(12px, 1.4vw, 15px)', letterSpacing: '0.08em', textTransform: 'uppercase', color: col.color }}>{col.group}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map((item, ii) => (
                    <div key={ii} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: col.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 'clamp(13px, 1.6vw, 16px)', color: B.textDarkMid, fontWeight: 500, lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. WHY CHOOSE US (light) ══ */}
      <section style={{ padding: 'var(--sp-section) 0', position: 'relative', background: `linear-gradient(180deg, ${B.bgLight} 0%, #EDE7F6 100%)`, zIndex: 1, overflow: 'hidden' }}>
        <SectionGridBg opacity={0.16} />
        <DataParticles count={10} />

        <div style={{ maxWidth: 1250, margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>

            {/* Left — text */}
            <div style={{ flex: '1 1 320px' }}>
              <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
                <SectionBadge>Why WellMind</SectionBadge>
                <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>
                  Agronomy Expertise Meets{' '}
                  <span style={{ background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Engineering Depth
                  </span>
                </h2>
                <p style={{ color: B.textMid, fontSize: 'clamp(1.2rem, 1.6vw, 1.1rem)', lineHeight: 1.75, marginBottom: 'clamp(20px, 3vw, 32px)' }}>
                  Most AI vendors understand either remote sensing or software. We understand both — plus the agronomy, crop science, and commodity economics that make field-level decisions matter.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { title: 'Field-First Design', desc: 'Models built for low-connectivity, high-variability environments — not just clean datacenter workloads' },
                    { title: 'Season-Over-Season Learning', desc: 'Automated retraining pipelines improve accuracy with every harvest cycle, compounding value over time' },
                    { title: 'Agronomic Domain Fluency', desc: 'We speak GDD, ETc, VRA, and soil CEC — not just Python and neural networks' },
                    { title: 'Outcome-Based Pricing', desc: 'Fixed-fee scopes with performance guarantees. No billable-hour bloat.' },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 26, height: 26, borderRadius: 'var(--radius-sm)', background: `${B.action}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <CheckCircle size={16} color={B.action} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', color: B.primaryDark, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ fontSize: 'clamp(1.2rem, 1.6vw, 1.05rem)', color: B.textMid, lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — Engagement Panel */}
            <motion.div
              initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
              style={{ flex: '1 1 320px', background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(16px)', border: `3px solid ${B.primaryBorder}`, borderRadius: 'var(--radius-xl)', padding: 'clamp(24px, 3vw, 40px)', boxShadow: `0 24px 64px -12px rgba(107, 46, 116,0.12)`, position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${B.action}, ${B.primary}, ${B.accent})` }} />
              <div style={{ fontWeight: 700, fontSize: 'clamp(11px, 1.3vw, 13px)', letterSpacing: '0.12em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 24 }}>Engagement Overview</div>
              {[
                { label: 'Data Audit & Feasibility', duration: '2 weeks',   color: B.action,     icon: <Eye size={16} /> },
                { label: 'Model Development',        duration: '4–8 weeks', color: B.secondary,  icon: <Brain size={16} /> },
                { label: 'Pilot Season Deployment',  duration: '1 season',  color: B.primary,    icon: <Leaf size={16} /> },
                { label: 'Production & Monitoring',  duration: 'Ongoing',   color: B.accent,     icon: <Activity size={16} /> },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: i < 3 ? `1px solid rgba(107, 46, 116,0.10)` : 'none' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: `${step.color}12`, color: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${step.color}25`, flexShrink: 0 }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: B.primaryDark }}>{step.label}</div>
                  </div>
                  <div style={{ fontSize: 'clamp(11px, 1.3vw, 13px)', fontWeight: 700, color: step.color, background: `${step.color}10`, padding: '4px 12px', borderRadius: 99, border: `1px solid ${step.color}25`, whiteSpace: 'nowrap' }}>{step.duration}</div>
                </div>
              ))}
              <div style={{ marginTop: 24, padding: '16px 20px', background: `linear-gradient(135deg, ${B.action}10, ${B.primary}08)`, borderRadius: 16, border: `1px solid ${B.action}20`, display: 'flex', alignItems: 'center', gap: 12 }}>
                <RefreshCw size={18} color={B.action} />
                <span style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: B.textMain, fontWeight: 600 }}>Fixed-fee scoping · No surprise invoices</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 6. FAQ (DARK) ══ */}
      <section style={{ padding: 'var(--sp-section) 0', position: 'relative', background: `linear-gradient(135deg, #170F22 0%, #140B20 100%)`, zIndex: 1, overflow: 'hidden' }}>
        <DataParticles count={10} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}>
            <SectionBadge dark>Common Questions</SectionBadge>
            <h2 className="section-h2 dark" style={{ color: B.textDark }}>Questions from Agricultural Teams</h2>
            <p className="section-lead" style={{ color: B.textDarkMid }}>Honest answers before you engage.</p>
          </motion.div>
          <div style={{ maxWidth: 840, margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} index={i} color={B.action} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. FINAL CTA (light) ══ */}
      <section style={{ padding: `clamp(60px, 10vw, 120px) 0`, position: 'relative', overflow: 'hidden', zIndex: 1, background: 'linear-gradient(180deg, #F5F1F6 0%, #E8E1F0 100%)' }}>
        <SectionGridBg opacity={0.18} />
        <DataParticles count={14} />
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(11, 124, 147,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(147, 33, 63,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Let's Build Your{' '}
              <br className="hero-br" />
              <span style={{ background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Agricultural AI Stack
              </span>
            </h2>
            <p className="section-lead" style={{ color: B.textMid, maxWidth: 1200, margin: '0 auto clamp(28px, 4vw, 48px)', lineHeight: 1.75 }}>
              Book a free 30-minute call. Tell us your yield, efficiency, or supply-chain challenge. We'll tell you exactly what's possible — no pitch, no pressure.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(10px, 2vw, 16px)', justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link to="/book-discovery" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 52px)', borderRadius: 'var(--radius-md)', boxShadow: `0 8px 40px rgba(11, 124, 147,0.28), 0 0 80px rgba(11, 124, 147,0.10)`, border: `1px solid rgba(11, 124, 147,0.40)` }}>
                  <Zap size={18} /> Book a Free Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link to="/case-studies?industry=agriculture" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 44px)', borderRadius: 12 }}>
                  View Case Studies <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}