/**
 * Home.jsx — WellMind Data Solutions — Fully Responsive
 * Breakpoints: 1440 | 1024 | 768 | 425 | 320
 */

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu, TrendingUp, Code, Settings2, Palette, Dna,
  ArrowRight, CheckCircle, Wrench, Rocket, Activity,
  Shield, Globe, Zap, BarChart3, Brain, Star, Sparkles,
  ChevronRight, CircuitBoard, Database, LineChart, BookOpen,
  Users, Award, FlaskConical, ChevronDown, Image as ImageIcon,
  Mail, MessageCircle, Share2, Phone, DollarSign, Clock,
  Lock, Repeat,
} from 'lucide-react';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge, SectionDivider, CircuitBg, FAQItem, InViewSection } from '../../theme';
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





// ─── Why WellMind — Responsive Scroll / Stack ──────────────────────────────────
function WhyWellmindScroll() {
  const features = [
    { title: 'System-Driven Delivery', desc: 'Consistent outcomes via documented SOPs and clear delivery frameworks that reduce guesswork.', imgUrl: SystemDrivenDelivery, color: B.action },
    { title: 'Enterprise Security',    desc: 'Confidentiality agreements and secure data handling, so your data stays protected throughout the engagement.',     imgUrl: EnterpriseSecurity,    color: B.primary },
    { title: 'Scalable Architecture',  desc: 'Systems designed with growth in mind, so they can scale as your usage does.',       imgUrl: ScalableArchitecture,  color: B.accent },
    { title: 'Rapid Deployment',       desc: 'A clear path from validated concept to a production-ready system.',       imgUrl: RapidDeployment,       color: B.secondary },
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
  const [openFaq, setOpenFaq] = useState(-1);


  const projects = [
    { title: 'AR Prioritization & Underpayment Recovery Engine', desc: 'LightGBM classifier + live dashboard flagging underpaid Medicare claims from public CMS data.', tags: ['Data Analytics'], tools: ['Python', 'LightGBM', 'FastAPI', 'React', 'Isolation Forest'], imgUrl: imgArPrioritization, icon: <TrendingUp />, slug: 'ar-prioritization-underpayment-recovery', link: '/case-studies/ar-prioritization-underpayment-recovery' },
    { title: 'Telecom Customer Churn Prediction', desc: 'Random Forest churn model with SHAP explainability that surfaces the customers most at risk of leaving.', tags: ['AI & Machine Learning'], tools: ['Random Forest', 'XGBoost', 'SHAP', 'SMOTE'], imgUrl: imgTelecomChurn, icon: <BarChart3 />, slug: 'telecom-churn-prediction', link: '/case-studies/telecom-churn-prediction' },
    { title: 'Healthcare Fraud Detection System', desc: 'Peer-benchmarking, anomaly detection, and OIG exclusion-list matching to flag high-risk Medicare providers from public data.', tags: ['AI & Machine Learning'], tools: ['Isolation Forest', 'Random Forest', 'Z-score Analysis'], imgUrl: imgHealthcareFraudBilling, icon: <Shield />, slug: 'healthcare-fraud-detection-billing', link: '/case-studies/healthcare-fraud-detection-billing' },
  ];

  const faqs = [
    { q: 'How much does a typical project cost?',        a: "Every project is different, so we don't publish prices. After a free discovery call we scope your project and send a clear written quote." },
    { q: 'How long does a project take?',                a: 'Timelines depend on scope and data. We agree a clear timeline with you in a written proposal after a free discovery call.' },
    { q: 'Do you work with academic labs?',              a: "Yes, frequently. We can invoice through university procurement systems, support grant-funded projects, and deliver publication-ready outputs. We're comfortable with authorship arrangements when scope warrants it." },
    { q: 'Is my data confidential?',                     a: "Always. We sign NDAs before any data is shared and use secure transfer protocols. We never use client data in our own research or training without explicit permission." },
    { q: 'Can you join our team part-time or on retainer?', a: "Yes. Beyond project work, we offer ongoing retainers for ongoing analysis support — ideal for research labs or startups that need flexible expert access without hiring full-time." },
    { q: 'Where are you based and which time zones do you cover?', a: "Our team is based in Pakistan and works fully remote with clients internationally. We overlap working hours to fit your time zone." },
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
            WellMind Data Solutions delivers specialist bioinformatics, healthcare AI, & data science consulting.
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
          </motion.div>
        </motion.div>
      </ScrollFrameIntro>


      {/* ══ 3. MAIN LIGHT SECTION ══ */}
      <section style={{ position: 'relative', zIndex: 1, background: '#010101', overflow: 'clip', padding: 0 }}>
        <DataParticles count={6} dark />

        {/* Why WellMind */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 60px)' }}>
            <SectionBadge dark>Why WellMind Data Solutions</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 12 }}>
              Built for enterprise.<br />
              <span style={{ background: 'linear-gradient(90deg, #ababab 25%, #a7a7a7 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Clear and reliable.</span>
            </h2>
            <p className="section-lead dark" style={{ maxWidth: 1200 }}>We don't just build algorithms, we build business value. Every solution is architected for reliability and security.</p>
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
              <h2 className="section-h2 dark">Selected Projects.</h2>
              <p className="section-lead dark" style={{ marginTop: 12, maxWidth: 1200 }}>Explore portfolio projects that turn data into decisions across industries.</p>
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
              Book a free call. Tell us your challenge. We'll give you honest feedback on what's possible, what it would take, and whether we're the right fit. No pitch. No pressure.
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
                { icon: <Mail size={16} />, label: 'info@wellminddatasolutions.com', href: 'mailto:info@wellminddatasolutions.com' },
                { icon: <Mail size={16} />, label: 'contact@wellminddatasolutions.com', href: 'mailto:contact@wellminddatasolutions.com' },
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