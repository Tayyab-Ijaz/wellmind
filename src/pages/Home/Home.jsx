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
import AICORE               from '../../assets/AI-CORE-icon.webp';
import ScrollTest           from './serviceshome';

import { HeroGridBg, SectionGridBg, FooterGridBg } from '../../components/BgGrid';
import AiCoreDiagram from './AI-core-animation';
import HeroData3D from '../../assets/HeroData3D.webp';






function StatCard({ target, suffix, label, icon, start, delay = 0, dark = true, theme }) {
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
        background: hovered ? `linear-gradient(145deg, ${t.bg} 0%, rgba(255,255,255,0.03) 100%)` : 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(12px)',
        border: `1.5px solid ${hovered ? t.color : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered ? `0 0 25px ${t.color}40, inset 0 0 10px ${t.color}10` : 'none',
        borderRadius: 'var(--radius-lg)', padding: 'clamp(16px, 2.5vw, 28px) clamp(10px, 2vw, 20px)', textAlign: 'center',
        cursor: 'default', position: 'relative',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, background: `radial-gradient(circle, ${t.color} 0%, transparent 70%)`, opacity: hovered ? 0.2 : 0, filter: 'blur(20px)', transition: 'opacity 0.4s ease', pointerEvents: 'none' }} />
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

// ─── Feature Block ─────────────────────────────────────────────────────────────
function FeatureBlock({ title, desc, imgUrl, isActive }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ opacity: isActive ? 1 : 0.35, y: isActive ? 0 : 16, scale: isActive ? 1 : 0.97 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: B.cardBg, backdropFilter: 'blur(8px)',
        borderRadius: 'var(--radius-xl)',
        border: `3px solid ${isActive ? B.action : B.primaryBorder}`,
        boxShadow: isActive ? `0 16px 40px -8px ${B.action}40` : B.cardShadow,
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
function ProjectCard({ proj, i }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/case-studies/${proj.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            height: '100%', minHeight: 'clamp(360px, 40vw, 480px)',
            background: '#0D0A15',
            border: `1.5px solid ${hovered ? B.action : 'rgba(107, 46, 116,0.20)'}`,
            boxShadow: hovered ? `0 24px 60px -12px rgba(11, 124, 147,0.35), 0 0 0 1px rgba(11, 124, 147,0.15)` : '0 8px 32px -8px rgba(0,0,0,0.25)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex', flexDirection: 'column',
          }}
        >
          <div style={{ position: 'relative', height: 'clamp(160px, 20vw, 240px)', flexShrink: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${proj.imgUrl})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: hovered ? 'brightness(0.55)' : 'brightness(0.45)',
            }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,10,21,0) 30%, rgba(13,10,21,1) 100%)' }} />
            <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end', maxWidth: '80%' }}>
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} style={{ fontSize: 'clamp(10px, 1.2vw, 11px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: B.textDark, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', padding: '4px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.15)' }}>{tag}</span>
              ))}
            </div>
          </div>

          <div style={{ padding: 'clamp(18px, 2.5vw, 28px)', display: 'flex', flexDirection: 'column', flexGrow: 1, background: 'linear-gradient(to bottom, rgba(13,10,21,1) 0%, rgba(20,12,32,1) 100%)' }}>
            <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.6rem)', color: B.textDark, lineHeight: 1.3, marginBottom: 14 }}>{proj.title}</h3>
            <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', lineHeight: 1.7, color: B.textDarkMid, marginBottom: 20, flexGrow: 1 }}>{proj.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24, width: '100%' }}>
              {proj.tools && proj.tools.map((tool, tIdx) => (
                <span key={tIdx} style={{ fontSize: 'var(--fs-badge)', fontWeight: 700, color: B.action, background: 'rgba(11, 124, 147,0.12)', border: '1px solid rgba(11, 124, 147,0.25)', padding: '4px 12px', borderRadius: 6, letterSpacing: '0.04em' }}>{tool}</span>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: `1px solid rgba(255,255,255,0.07)` }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 'clamp(12px, 1.4vw, 15px)', letterSpacing: '0.06em', color: hovered ? B.action : B.textDarkMuted, textTransform: 'uppercase', transition: 'color 0.3s ease' }}>
                View Case Study <ArrowRight size={14} style={{ transform: hovered ? 'translateX(5px)' : 'translateX(0)', transition: 'transform 0.3s ease' }} />
              </span>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: hovered ? B.action : 'rgba(255,255,255,0.06)', border: `1px solid ${hovered ? 'transparent' : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
                <ArrowRight size={14} color={hovered ? '#fff' : B.textDarkMuted} />
              </div>
            </div>
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
        <SectionBadge>Client Stories</SectionBadge>
        <h2 className="section-h2">What Our Clients Say</h2>
        <p className="section-lead" style={{ marginTop: 12, maxWidth: 1200 }}>Trusted by innovative teams worldwide.</p>
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
                boxShadow: `0 4px 30px rgba(107, 46, 116,0.08)`, transition: 'border-color 0.3s ease',
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
  const [rightColHeight, setRightColHeight] = useState('auto');
  const [isDesktop, setIsDesktop] = useState(true);
  const cardRefs   = useRef([]);
  const leftColRef = useRef(null);
  const diagramRef = useRef(null);
  const rightColRef= useRef(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const syncHeight = () => {
      if (leftColRef.current) setRightColHeight(leftColRef.current.offsetHeight);
    };
    syncHeight();
    window.addEventListener('resize', syncHeight);
    return () => window.removeEventListener('resize', syncHeight);
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      const zoom    = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;

      // getBoundingClientRect() already returns zoomed-space coords.
      // window.innerHeight is in physical px — convert to zoomed space.
      const vpH  = window.innerHeight * zoom;   // viewport height in zoomed px
      const nav  = document.querySelector('header') || document.querySelector('nav');
      const navH = nav ? nav.getBoundingClientRect().height : 72; // zoomed px

      const usableH = vpH - navH;

      // active card: find card whose centre is closest to centre of usable area
      const usableCentre = navH + usableH / 2;
      let closestIdx = 0, closestDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const dist = Math.abs((rect.top + rect.height / 2) - usableCentre);
        if (dist < closestDist) { closestDist = dist; closestIdx = i; }
      });
      setActiveIdx(closestIdx);

      const left     = leftColRef.current;
      const diagram  = diagramRef.current;
      const rightCol = rightColRef.current;
      if (!left || !diagram || !rightCol) return;

      const leftRect  = left.getBoundingClientRect();
      const rightRect = rightCol.getBoundingClientRect();
      const diagramH  = diagram.getBoundingClientRect().height; // zoomed px

      // where top of diagram should be so it's centred in usable area (zoomed px)
      const stickyTop = navH + (usableH - diagramH) / 2;

      if (leftRect.top <= stickyTop && leftRect.bottom >= stickyTop + diagramH) {
        // STICKY — fixed, centred below nav
        diagram.style.position = 'fixed';
        diagram.style.top      = `${stickyTop / zoom}px`;   // convert back to CSS px
        diagram.style.left     = `${rightRect.left / zoom}px`;
        diagram.style.width    = `${rightCol.offsetWidth}px`;
        diagram.style.height   = 'auto';
        diagram.style.bottom   = 'auto';
      } else if (leftRect.bottom < stickyTop + diagramH) {
        // END — anchor to bottom of container
        diagram.style.position = 'absolute';
        diagram.style.bottom   = '0';
        diagram.style.top      = 'auto';
        diagram.style.left     = '0';
        diagram.style.width    = '100%';
        diagram.style.height   = 'auto';
      } else {
        // START — sit at top of container
        diagram.style.position = 'absolute';
        diagram.style.top      = '0';
        diagram.style.bottom   = 'auto';
        diagram.style.left     = '0';
        diagram.style.width    = '100%';
        diagram.style.height   = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDesktop]);

  // Mobile: simple stacked cards
  if (!isDesktop) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 24px)' }}>
        {/* Diagram on mobile — centered, smaller */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
          <div style={{ width: 'min(100%, 340px)' }}>
            <AiCoreDiagram />
          </div>
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

  // Desktop: sticky scroll
  return (
    <div style={{ display: 'flex', gap: 'clamp(30px, 4vw, 60px)', alignItems: 'flex-start', position: 'relative' }}>
      <div ref={leftColRef} style={{ flex: '0 0 50%', maxWidth: '50%' }}>
        {features.map((f, i) => (
          <div key={i} ref={el => cardRefs.current[i] = el} style={{ marginBottom: 'clamp(16px, 3vw, 32px)' }}>
            <FeatureBlock title={f.title} desc={f.desc} imgUrl={f.imgUrl} color={f.color} isActive={activeIdx === i} />
          </div>
        ))}
      </div>
      <div ref={rightColRef} style={{ flex: '0 0 calc(50% - clamp(30px, 4vw, 60px))', maxWidth: 'calc(50% - clamp(30px, 4vw, 60px))', position: 'relative', height: rightColHeight }}>
        <div ref={diagramRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <AiCoreDiagram />
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const heroRef  = useRef(null);
  const [openFaq, setOpenFaq] = useState(-1);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.20 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const projects = [
    { title: 'AR Prioritization & Underpayment Recovery Engine', desc: 'LightGBM classifier + live dashboard flagging underpaid Medicare claims, surfacing a $15B recovery opportunity from public CMS data.', tags: ['Data Analytics'], tools: ['Python', 'LightGBM', 'FastAPI', 'React', 'Isolation Forest'], imgUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', icon: <TrendingUp />, slug: 'ar-prioritization-underpayment-recovery', link: '/case-studies/ar-prioritization-underpayment-recovery' },
    { title: 'Telecom Customer Churn Prediction', desc: 'Random Forest churn model with SHAP explainability, reaching 86.4% accuracy and capturing 65%+ of churners in the top-risk band.', tags: ['AI & Machine Learning'], tools: ['Random Forest', 'XGBoost', 'SHAP', 'SMOTE'], imgUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', icon: <BarChart3 />, slug: 'telecom-churn-prediction', link: '/case-studies/telecom-churn-prediction' },
    { title: 'Healthcare Fraud Detection System', desc: 'Peer-benchmarking, anomaly detection, and OIG exclusion-list matching flagged 3,842 high-risk providers from 44,528 analyzed.', tags: ['AI & Machine Learning'], tools: ['Isolation Forest', 'Random Forest', 'Z-score Analysis'], imgUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', icon: <Shield />, slug: 'healthcare-fraud-detection-billing', link: '/case-studies/healthcare-fraud-detection-billing' },
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
    { icon: <BarChart3 size={16} />,    label: '50+ Projects Delivered', accent: '#5BB8CC' },
    { icon: <Globe size={16} />,        label: 'Clients in 5+ Countries', accent: '#8FC48A' },
    { icon: <FlaskConical size={16} />, label: '6 Industries Served',     accent: '#C0A87A' },
  ];

  const testimonials = [
    { text: "WellMind's bioinformatics team delivered what two previous consultants couldn't — a clean pipeline, a real answer, and code I could actually hand off to my grad students.", name: 'Principal Investigator', role: 'Research University',    initials: 'PI', avatarBg: B.primaryLight,   avatarColor: B.primary   },
    { text: "They flagged a data quality issue we'd missed for months. That one catch saved our model — and probably our product launch.",                                              name: 'CTO',                    role: 'Healthcare AI Startup', initials: 'CT', avatarBg: B.actionLight,    avatarColor: B.action    },
    { text: "Clear communication, honest timelines, and kind of technical depth you rarely find in consulting. We've already booked our next project.",                                name: 'Head of Research',       role: 'Biotech SME',           initials: 'HR', avatarBg: B.accentLight,    avatarColor: B.accent    },
    { text: "WellMind Data Solutions cut our model deployment time by 70%. Their system-driven approach is unlike anything we've seen before.",                                        name: 'Sarah Chen',             role: 'CTO, NexaFinance',      initials: 'SC', avatarBg: B.secondaryLight, avatarColor: B.secondary },
  ];

  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', position: 'relative' }}>

      {/* ══ 1. HERO ══ */}
      <section ref={heroRef} className="wm-home-hero" style={{ position: 'relative', minHeight: 'calc(100vh - 66px)', display: 'flex', alignItems: 'center', paddingTop: '66px', boxSizing: 'border-box', overflow: 'hidden', zIndex: 1, background: '#FFFFFF', fontFamily: 'var(--font-main)' }}>
        <HeroGridBg opacity={0.16} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 72% 42%, rgba(185,104,255,0.10), transparent 30%), radial-gradient(circle at 8% 85%, rgba(255,91,150,0.08), transparent 25%)', pointerEvents: 'none', zIndex: 1 }} />
        <DataParticles count={6} />

        <div className="wm-home-hero-inner" style={{ ...PX, width: '100%', position: 'relative', zIndex: 10, paddingLeft: 'clamp(28px, 5vw, 76px)', paddingRight: 'clamp(28px, 5vw, 76px)', paddingTop: 'clamp(48px, 6vw, 72px)', paddingBottom: 'clamp(56px, 6vw, 88px)', boxSizing: 'border-box' }}>
          <div className="wm-hero-grid">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10 } } }} style={{ minWidth: 0 }}>
              <motion.div variants={fadeUp} custom={0.02} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 99, background: 'linear-gradient(90deg, rgba(109,40,217,0.10), rgba(217,54,104,0.08))', color: '#7C3AED', fontSize: 'clamp(10px, 1vw, 13px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', border: '1px solid rgba(109,40,217,0.18)', marginBottom: 'clamp(16px, 2vw, 24px)' }}>
                <Sparkles size={14} /> AI + DATA + IMPACT
              </motion.div>

              <motion.h1 variants={fadeUp} custom={0.05} style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 'var(--fs-hero)', lineHeight: 1.06, letterSpacing: '-0.035em', margin: 0, marginTop: 'clamp(6px, 1vw, 12px)', maxWidth: 850 }}>
                <span style={{ color: '#24113D' }}>We Turn Complex Data </span><br />
                <span style={{ background: 'linear-gradient(90deg, #6D28D9 0%, #D93668 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Into Intelligent Decisions</span>
              </motion.h1>

              <motion.div variants={fadeUp} custom={0.12} className="wm-hero-divider" style={{ width: 72, height: 4, borderRadius: 99, background: 'linear-gradient(90deg, #7C3AED, #D93668)', margin: 'clamp(16px, 2vw, 24px) 0' }} />

              <motion.p variants={fadeUp} custom={0.18} style={{ fontFamily: 'var(--font-main)', fontSize: 'clamp(0.9rem, 1.5vw, 1.18rem)', color: '#625B72', maxWidth: 720, margin: '0 0 clamp(20px, 2.5vw, 32px)', letterSpacing: '0.005em', lineHeight: 1.7 }}>
                WellMind Data Solutions delivers specialist bioinformatics, healthcare AI, & data science consulting.<br className="hero-br" />
                Trusted by researchers, startups, and enterprises across five countries.
              </motion.p>

              <motion.div variants={fadeUp} custom={0.22} style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 'clamp(24px, 3vw, 38px)' }}>
                <Link to="/book-discovery" className="btn-primary">
                  <Zap size={19} /> Book a Discovery Call
                </Link>
                <Link to="/case-studies" className="btn-secondary">
                  View Case Studies <ArrowRight size={19} />
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} custom={0.28} className="wm-hero-trust" style={{ marginTop: 'clamp(20px, 2.5vw, 32px)' }}>
                <div className="wm-hero-trust-label" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ height: 1, width: 42, background: 'rgba(217,54,104,0.35)' }} />
                  <span style={{ color: '#D93668', fontSize: 12, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Recognized For</span>
                  <span style={{ height: 1, width: 42, background: 'rgba(217,54,104,0.35)' }} />
                </div>
                <div className="wm-hero-trust-items" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {heroTrustItems.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', fontSize: 'clamp(11px, 1.1vw, 14px)', fontWeight: 700, color: '#3F3650', background: 'rgba(255,255,255,0.82)', borderRadius: 12, border: '1px solid rgba(109,40,217,0.12)', boxShadow: '0 8px 24px rgba(91,33,182,0.06)' }}>
                      <span style={{ width: 24, height: 24, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${item.accent}18` }}>
                        {React.cloneElement(item.icon, { size: 14, color: item.accent, strokeWidth: 2.5 })}
                      </span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="wm-hero-visual" initial={{ opacity: 0, x: 40, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ position: 'absolute', inset: '12% 6% 8%', background: 'radial-gradient(circle, rgba(146,70,255,0.18), transparent 68%)', filter: 'blur(10px)' }} />
              <motion.img src={HeroData3D} alt="3D data analytics illustration" width="620" height="551" fetchPriority="high" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'relative', width: '100%', maxWidth: 620, height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 24px 35px rgba(74,32,110,0.20))' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 2. STATS ══ */}
      <section ref={statsRef} style={{ padding: 'var(--sp-section) 0', position: 'relative', zIndex: 1, background: `linear-gradient(135deg, #1B1033 0%, #120A26 100%)`, display: 'flex', alignItems: 'center' }}>
        <CircuitBg opacity={0.1} />
        <DataParticles count={6} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionBadge dark style={{ color: B.textDarkMuted, marginBottom: 20 }}>Our Impact</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 'clamp(20px, 3.5vw, 40px)', textAlign: 'center' }}>Results that Speak</h2>
            <div className="grid-stats" style={{ width: '100%' }}>
              <StatCard target={40} suffix="%" label={<span style={{ fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: 600 }}>Cost Reduction</span>}    icon={<BarChart3 size={20} />} start={statsVisible} delay={0}   theme={{ color: '#9D4EDD', darkColor: '#7C3AED', bg: 'rgba(157,78,221,0.1)'  }} />
              <StatCard target={3}  suffix="x" label={<span style={{ fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: 600 }}>Faster Delivery</span>}   icon={<Zap size={20} />}      start={statsVisible} delay={0.1} theme={{ color: '#FF9F1C', darkColor: '#E08E00', bg: 'rgba(255,159,28,0.1)'  }} />
              <StatCard target={50} suffix="+" label={<span style={{ fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: 600 }}>Enterprise Models</span>} icon={<Brain size={20} />}    start={statsVisible} delay={0.2} theme={{ color: '#00BBF9', darkColor: '#00A8D6', bg: 'rgba(0,187,249,0.1)'   }} />
              <StatCard target={99} suffix="%" label={<span style={{ fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: 600 }}>Uptime SLA</span>}        icon={<Shield size={20} />}   start={statsVisible} delay={0.3} theme={{ color: '#00F5D4', darkColor: '#00C4A9', bg: 'rgba(0,245,212,0.1)'   }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. MAIN LIGHT SECTION ══ */}
      <section style={{ position: 'relative', zIndex: 1, background: `linear-gradient(180deg, ${B.bgLight} 0%, #F6EFFF 50%, #EEE4FA 100%)`, overflow: 'clip', padding: 0 }}>
        <SectionGridBg opacity={0.2} />
        <DataParticles count={6} />

        {/* Why WellMind */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 60px)' }}>
            <SectionBadge>Why WellMind Data Solutions</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>
              Built for enterprise.<br />
              <span style={{ background: 'linear-gradient(90deg, #6D28D9 25%, #D93668 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Proven at scale.</span>
            </h2>
            <p className="section-lead" style={{ maxWidth: 1200 }}>We don't just build algorithms, we build business value. Every solution is architected for reliability, security, and measurable ROI.</p>
          </div>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <WhyWellmindScroll />
          </div>
        </div>

        <SectionDivider />

        {/* Core Capabilities */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center'}}>
              <SectionBadge>Core Capabilities</SectionBadge>
              <h2 className="section-h2">Our AI Services</h2>
              <p className="section-lead" style={{ marginTop: 12, maxWidth: 1200, marginBottom: 0 }}>Comprehensive solutions across entire AI spectrum.</p>
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
              <SectionBadge>Portfolio</SectionBadge>
              <h2 className="section-h2">Real Projects. Real Results.</h2>
              <p className="section-lead" style={{ marginTop: 12, maxWidth: 1200 }}>Explore how we've helped industries transform data into decisions.</p>
            </motion.div>

            <div className="grid-projects" style={{ width: '100%' }}>
              {projects.map((proj, i) => <ProjectCard key={i} proj={proj} i={i} />)}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: 'clamp(12px, 2vw, 18px) clamp(24px, 4vw, 48px)', borderRadius: 'var(--radius-md)', background: 'transparent', color: B.action, fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', border: `2px solid ${B.action}`, transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = B.action; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 28px ${B.actionGlow}`; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = B.action; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none'; }}>
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
      <InViewSection style={{ padding: 'var(--sp-section) 0', position: 'relative', zIndex: 1, background: `linear-gradient(135deg, #120A26 0%, #1B1033 50%, #0F0820 100%)` }}>
        <CircuitBg opacity={0.06} />
        <DataParticles count={5} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionBadge dark style={{ color: B.textDarkMuted }}>Common Questions</SectionBadge>
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
      <InViewSection style={{ padding: 'var(--sp-section) 0', paddingTop: 'clamp(48px, 8vw, 100px)', paddingBottom: 'clamp(48px, 8vw, 100px)', position: 'relative', overflow: 'clip', zIndex: 1, background: `linear-gradient(180deg, ${B.bgLight} 0%, #EEE4FA 100%)` }}>
        <FooterGridBg opacity={0.2} />
        <DataParticles count={8} />
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(109,40,217,0.10) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Ready to Turn Your Data<br />
              <span style={{ background: 'linear-gradient(90deg, #6D28D9 25%, #D93668 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Into Impact?</span>
            </h2>
            <p className="section-lead" style={{ color: B.textMid, maxWidth: 1200, margin: '0 auto clamp(24px, 3.5vw, 48px)', lineHeight: 1.75 }}>
              Book a free 30-minute call. Tell us your challenge. We'll give you honest feedback on what's possible, what it would cost, and whether we're even right fit. No pitch. No pressure.
            </p>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', marginBottom: 48 }}>
              <Link to="/book-discovery" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 56px)', borderRadius: 'var(--radius-md)', background: `linear-gradient(135deg, ${B.action}, #5B21B6)`, color: B.white, fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', letterSpacing: '0.10em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: `0 8px 40px ${B.actionGlow}, 0 0 80px rgba(11, 124, 147,0.15)`, border: `1px solid rgba(11, 124, 147,0.40)` }}>
                <Zap size={18} /> Book Your Free Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2.5vw, 32px)', justifyContent: 'center', alignItems: 'center' }}>
              {[
                { icon: <Mail size={16} />,          label: 'wellminddatasolutions@gmail.com',    href: 'mailto:wellminddatasolutions@gmail.com' },
                { icon: <MessageCircle size={16} />, label: 'WhatsApp: +92 323 6787087', href: 'https://wa.me/923236787087' },
                { icon: <FaLinkedin size={16} />,    label: 'LinkedIn',                   href: 'https://www.linkedin.com/company/wellmind-data-solutions' },
              ].map((c, i) => (
                <a key={i} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'clamp(12px, 1.8vw, 17px)', color: B.textMid, textDecoration: 'none', transition: 'color 0.2s', fontWeight: 600 }}
                  onMouseEnter={e => e.currentTarget.style.color = B.action}
                  onMouseLeave={e => e.currentTarget.style.color = B.textMid}>
                  <span style={{ color: B.action }}>{c.icon}</span>{c.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </InViewSection>

    </div>
  );
}