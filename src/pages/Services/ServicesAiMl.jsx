/**
 * ServicesAiMl.jsx — WellMind Data Solutions
 * /services/ai-ml
 * Fully responsive: 1440 | 1024 | 768 | 425 | 320 px
 * 
 * CHANGES:
 * 1. Hero: Replaced Animation with Image from assets/ai-ml-service.webp. Height matches left section.
 * 2. Process/Deliverables Section: MaxWidth set to 1250px. Darker BG. Larger Text. Fixed Icon Alignment.
 * 3. Hero Layout Updates: Buttons full width. Tags centered & animated. Image full height.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu, Brain, Zap, Code, Server, Database, Shield, Globe,
  CheckCircle, ArrowRight, Terminal, Layers, GitBranch,
  Rocket, BarChart3, Wrench, Settings2, Activity,
  TrendingUp, RefreshCw, Eye, Sparkles, FlaskConical,
} from 'lucide-react';

import { HeroGridBg, SectionGridBg } from '../../components/BgGrid';

import AiMl from '../../assets/ai-ml-service.webp';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge, SectionDivider, CircuitBg } from '../../theme';

// ─── Brand Tokens (Synced with Home.jsx) ─────────────────────────────────────
// ─── Layout Constants (Synced with Home.jsx) ────────────────────────────────────
// ─── Counter Hook ─────────────────────────────────────────────────────────────
// ─── Background Helpers ───────────────────────────────────────────────────────
// ─── Section Badge ────────────────────────────────────────────────────────────
// ─── Feature Card ─────────────────────────────────────────────────────────────
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
        // CHANGE: BG becomes Dark (color) on hover
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
        // CHANGE: Icon BG becomes White on hover
        background: hovered ? B.white : `${color}15`,
        color: hovered ? color : color, // Icon color remains the theme color
        transition: 'all 0.3s ease',
      }}>
        {React.cloneElement(icon, { size: 22 })}
      </div>
      
      <h4 style={{ 
        fontWeight: 700, fontSize: 'var(--fs-card-title)', 
        // CHANGE: Title becomes White on hover
        color: hovered ? B.textDark : B.textMain, 
        marginBottom: 10, 
        lineHeight: 1.3,
        transition: 'color 0.3s ease'
      }}>{title}</h4>
      
      <p style={{ 
         fontSize: 'var(--fs-card-body)', 
        // CHANGE: Desc becomes Light White on hover
        color: hovered ? B.textDarkMid : B.textMid, 
        lineHeight: 1.7,
        transition: 'color 0.3s ease'
      }}>{desc}</p>
    </motion.div>
  );
}

// ─── Deliverable Item (Hover: Dark BG, Light Text) ───────────────────────
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
        
        // ── FIX: Background ab hover pe change hoga ──
        background: hovered ? color : 'rgba(255,255,255,0.5)', 
        
        border: `1px solid ${color}25`, 
        backdropFilter: 'blur(5px)',
        color: B.textMain,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Icon Logic: Hover par Light (B.textDark), Base par Color */}
      <CheckCircle size={18} color={hovered ? B.textDark : color} style={{ flexShrink: 0, transition: 'color 0.3s' }}/>
      <span style={{ 
        fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)', 
        fontWeight: 500, 
        lineHeight: 1.5,
        // Text Logic: Hover par Light (B.textDark)
        color: hovered ? B.textDark : B.textMain,
        transition: 'color 0.3s ease'
      }}>{text}</span>
    </motion.div>
  );
}
// ─── Stat Card (dark section) ─────────────────────────────────────────────────


// ─── Tech Badge ───────────────────────────────────────────────────────────────
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
// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ServiceAiMl() {


  const features = [
    { icon: <Cpu/>, title: 'Predictive Analytics', desc: 'Turn historical data into precise forecasts. Demand planning, churn prediction, and risk scoring models built on your real data — not generic templates.', color: B.action },
    { icon: <Brain/>, title: 'NLP & Text Intelligence', desc: 'Sentiment analysis, document classification, entity extraction, and conversational AI. Unstructured text transformed into structured business intelligence.', color: B.primary },
    { icon: <Eye/>, title: 'Computer Vision', desc: 'Object detection, image segmentation, and video analytics for healthcare diagnostics, quality control, and real-time surveillance applications.', color: B.accent },
    { icon: <GitBranch/>, title: 'Recommendation Systems', desc: 'Collaborative filtering and deep-learning recommendation engines that personalise user experience at scale across content, products, and services.', color: B.secondary },
    { icon: <Zap/>, title: 'Process Automation + AI', desc: 'Intelligent RPA that goes beyond rule-based scripting — AI decision-making layered on automation for complex, dynamic workflows.', color: '#828282' },
    { icon: <Database/>, title: 'Data Engineering & MLOps', desc: 'Feature stores, ETL pipelines, model registries, and retraining pipelines. The infrastructure that keeps your models production-healthy.', color: '#adadad' },
  ];

  const processes = [
    { step: '01', title: 'Discovery & Data Audit', desc: 'We audit data quality, assess model feasibility, define success metrics, and deliver an ML architecture blueprint before any model training begins.' },
    { step: '02', title: 'Exploratory Data Analysis', desc: 'Cleaning, feature engineering, and deep EDA to identify signals, handle class imbalance, and ensure your data will support the chosen model approach.' },
    { step: '03', title: 'Model Development & Evaluation', desc: 'Training multiple architectures (PyTorch, TensorFlow, Scikit-Learn) with rigorous cross-validation, hyperparameter tuning, and explainability reporting.' },
    { step: '04', title: 'MLOps Deployment & Monitoring', desc: 'Containerised API serving, automated retraining pipelines, performance drift alerts, and A/B testing infrastructure for continuous model improvement.' },
  ];

  const deliverables = [
    'Trained model weights + full architecture documentation',
    'Production-ready REST API endpoints (FastAPI/Docker)',
    'Annotated Jupyter Notebooks with methodology walkthrough',
    'Performance evaluation report (accuracy, precision, AUC)',
    'Data pipeline scripts with full test coverage',
    'MLOps retraining pipeline + monitoring dashboard',
    'Post-deployment support window',
  ];

  const techStack = [
    { label: 'Python',          color: B.action   },
    { label: 'TensorFlow',      color: B.action   },
    { label: 'PyTorch',         color: B.primary  },
    { label: 'Scikit-Learn',    color: B.secondary},
    { label: 'OpenCV',          color: B.accent   },
    { label: 'Hugging Face',    color: B.action   },
    { label: 'AWS SageMaker',   color: B.primary  },
    { label: 'Apache Airflow',  color: B.secondary},
    { label: 'MLflow',          color: B.accent   },
    { label: 'FastAPI',         color: B.action   },
  ];



  const processColors = [B.action, B.primary, B.accent, B.secondary];

  return (
    <div style={{ background: B.bgLight, minHeight: '100svh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-body, sans-serif)' }}>

      {/* ══════════ 1. HERO ══════════ */}
      <section style={{
        position: 'relative', minHeight: '100svh',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', zIndex: 1,
        background: B.heroBg,
        paddingTop: 'clamp(40px, 5vw, 50px)',
      }}>
        <HeroGridBg opacity={0.35}/>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(90deg, rgba(47,47,47,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }}/>
        <DataParticles count={18}/>

        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
          position: 'relative', zIndex: 10,
        }}>
          
          {/* HERO CONTENT CONTAINER */}
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
                  <SectionBadge>AI & Machine Learning Services</SectionBadge>
                </motion.div>

                <motion.h1 variants={fadeUp} custom={0.05}
                  style={{
                    fontWeight: 700,
                    fontSize: 'var(--fs-hero)',
                    lineHeight: 1.1, letterSpacing: '-0.02em',
                    marginBottom: 'clamp(14px, 2vw, 24px)', color: B.primaryDark,
                  }}>
                  Intelligence Embedded<br/>
                  <span style={{ background: 'linear-gradient(90deg, #4a4a4a 25%, #373737 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Into Your DNA
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={0.15}
                  style={{ fontSize: 'clamp(0.88rem, 1.8vw, 1.15rem)', fontWeight: 500, color: B.textMid, marginBottom: 'clamp(20px, 3vw, 36px)', lineHeight: 1.75 }}>
                  WellMind Data Solutions designs and deploys Machine Learning systems that act as a cognitive extension of your business — from exploratory proof-of-concept to production-grade, monitored deployments.
                </motion.p>

                <motion.div variants={fadeUp} custom={0.25} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 1.5vw, 20px)' }}>
                  <Link to="/book-discovery" className="btn-primary" style={{ width: '100%' }} // WIDTH 100%
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                    <Zap size={16}/> Start Your AI Project
                  </Link>
                  <Link to="/case-studies" className="btn-secondary" style={{ width: '100%' }} // WIDTH 100%
                    onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                    View Case Studies <ArrowRight size={16}/>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — Static Image (Full Height) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  flex: '1 1 clamp(260px, 40%, 600px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 'clamp(300px, 42vw, 560px)', alignSelf: 'stretch',
                }}
              >
                <img 
                  src={AiMl}
                  alt="AI ML Services Visual" 
                  style={{
                    objectFit: 'contain',
                    boxShadow: B.cardShadow,
                    background: 'transparent',
                    borderRadius: 14,
                    
                  }}
                />
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
              {['Full Code Ownership'].map((t, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: 'clamp(8px, 1vw, 12px) clamp(14px, 2vw, 20px)', borderRadius: 50,
                  background: 'rgba(255,255,255,0.6)', border: `1px solid ${B.primaryBorder}`,
                  fontSize: 'clamp(12px, 1.5vw, 15px)', fontWeight: 600, color: B.textMain,
                  boxShadow: '0 4px 12px rgba(57,57,57,0.05)',
                  // Continuous floating animation
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
      <section style={{
        padding: 'var(--sp-section) 0',
        position: 'relative', zIndex: 1,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #080808 100%)',
        display: 'flex', alignItems: 'center',
      }}>
        <CircuitBg opacity={0.09}/>
        <DataParticles count={12} dark/>
        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>

          {/* Tech Stack */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(10px, 1.2vw, 11px)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: B.textDarkMuted, marginBottom: 16 }}>Our ML Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 1.2vw, 12px)', justifyContent: 'center' }}>
              {techStack.map((t, i) => <TechBadge key={i} {...t}/>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 3. LIGHT: CAPABILITIES + PROCESS ══════════ */}
      <section style={{
        position: 'relative', zIndex: 1,
        // DARKER BG as requested
        background: 'linear-gradient(180deg, #e8e8e8 0%, #e1e1e1 50%, #d7d7d7 100%)',
        overflow: 'hidden', padding: 0,
      }}>
        <SectionGridBg opacity={0.25}/>
        <DataParticles count={10}/>

        {/* Capabilities */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
            <SectionBadge>What We Build</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>
              End-to-End AI Capabilities
            </h2>
            <p className="section-lead" style={{ maxWidth: 1200 }}>
              From raw data to intelligent decisions — we cover the full ML spectrum so your team stays focused on outcomes, not infrastructure.
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
          {/* CUSTOM MAX WIDTH 1250px FOR THIS SECTION */}
          <div style={{ ...PX, maxWidth: 1250, display: 'flex', gap: 'clamp(28px, 5vw, 80px)', flexWrap: 'wrap' }}>

            {/* Process */}
            <div style={{ flex: '1 1 min(100%, 400px)' }}>
              <SectionBadge>How It Works</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>Our ML Build Process</h2>
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
              <h2 className="section-h2" style={{ marginBottom: 12 }}>Documented Handover.</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)', color: B.textMid, lineHeight: 1.7, marginBottom: 'clamp(24px, 3.5vw, 36px)' }}>
                Every engagement delivers production-ready code, models, and documentation that your team can maintain and extend independently.
              </p>
              
              {deliverables.map((d, i) => {
                const color = processColors[i % processColors.length];
                // USING NEW COMPONENT HERE
                return <DeliverableItem key={i} text={d} color={color} />;
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════ 5. FINAL CTA (LIGHT — not dark) ══════════ */}
      <section style={{
        padding: `clamp(60px, 10vw, 120px) 0`,
        position: 'relative', overflow: 'hidden', zIndex: 1,
        background: 'linear-gradient(180deg, #f3f3f3 0%, #e5e5e5 100%)',
      }}>
        <SectionGridBg opacity={0.2}/>
        <DataParticles count={14}/>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(57,57,57,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(84,84,84,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }}/>

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Let's Build Something<br/>
              <span style={{ background: 'linear-gradient(90deg, #4a4a4a 25%, #373737 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Genuinely Intelligent.
              </span>
            </h2>
            <p className="section-lead" style={{ color: B.textMid, maxWidth: 1200, margin: '0 auto clamp(24px, 3.5vw, 48px)', lineHeight: 1.75 }}>
              Book a free call. Tell us your data challenge. We'll give you honest feedback on what's achievable, what it would take, and whether ML is even the right tool — no sales pitch.
            </p>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link to="/book-discovery" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 56px)',
                borderRadius: 'var(--radius-md)', background: `linear-gradient(135deg, ${B.action}, #393939)`,
                color: B.white, fontWeight: 700, fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
                letterSpacing: '0.10em', textTransform: 'uppercase', textDecoration: 'none',
                boxShadow: `0 8px 40px ${B.actionGlow}, 0 0 80px rgba(84,84,84,0.15)`,
                border: '1px solid rgba(84,84,84,0.40)', transition: 'all 0.2s',
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