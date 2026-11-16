/**
 * Home.jsx — WellMind Data Solutions — Fully Responsive
 * Breakpoints: 1440 | 1024 | 768 | 425 | 320
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu, TrendingUp, Code, Settings2, Palette, Dna,
  ArrowRight, CheckCircle, Wrench, Rocket, Activity,
  Shield, Globe, Zap, BarChart3, Brain, Star, Sparkles,
  ChevronRight, CircuitBoard, Database, LineChart, BookOpen,
  Users, Award, FlaskConical, ChevronDown, Image as ImageIcon,
  Share2, DollarSign, Clock,
  Lock, Repeat,
} from 'lucide-react';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge, SectionDivider, CircuitBg, FAQItem, InViewSection } from '../../theme';

import ScrollTest           from './serviceshome';

import SolarSystem from './SolarSystem';
import imgArPrioritization from '../../assets/case-studies/ar-prioritization.webp';
import imgTelecomChurn from '../../assets/case-studies/telecom-churn.webp';
import imgHealthcareFraudBilling from '../../assets/case-studies/healthcare-fraud-billing.webp';

import ScrollFrameIntro from '../../components/ScrollFrameIntro';

// ─── Home-page-only display fonts (does not touch global site typography) ──
const FONT_DISPLAY = "'Space Grotesk', sans-serif";
const FONT_ACCENT   = "'Space Grotesk', var(--font-main)";





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
          <img src={proj.imgUrl} alt={proj.title} loading="lazy" decoding="async" style={{
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
          <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 'var(--fs-h3)', color: '#0f0f0f', lineHeight: 1.3, margin: 0 }}>
            {proj.title}
          </h3>
          {industry && (
            <p style={{ margin: '4px 0 16px', fontSize: 'var(--fs-card-body)', color: B.textMid, fontWeight: 500 }}>{industry}</p>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2vw, 22px)', marginBottom: 20 }}>
            {primaryTool && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 'var(--fs-card-body)', fontWeight: 700, color: '#0f0f0f' }}>
                <Wrench size={15} color={B.action} /> {primaryTool}
              </span>
            )}
            {secondaryTool && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 'var(--fs-card-body)', fontWeight: 700, color: '#0f0f0f' }}>
                {React.cloneElement(proj.icon, { size: 15, color: B.action })} {secondaryTool}
              </span>
            )}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                flexGrow: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '13px 18px', borderRadius: 99, fontWeight: 700, fontSize: 'var(--fs-card-body)',
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





// ─── Why WellMind Data Solutions — differentiators (no figures, only things we can stand behind) ───
const WHY_POINTS = [
  { title: 'Idea to production, one team', desc: 'We scope, design, build, deploy and support software, AI and data systems ourselves, so nothing is lost between a plan and a working product.' },
  { title: 'Healthcare AI depth', desc: 'Claims, clinical records, survival analysis and readmission risk: we have built on real healthcare data, including revenue-cycle (RCM) analytics.' },
  { title: 'Work you can inspect', desc: 'Our portfolio projects are public, with readable code, documented methods and live demos you can open before you ever talk to us.' },
  { title: 'Engage the way that suits you', desc: 'Fixed-scope projects, ongoing retainers, or engineers embedded in your own team. We adapt to your process and tools.' },
  { title: 'Honest scoping, confidential by default', desc: 'Scope and deliverables are agreed in writing, NDAs come before any data is shared, and you get a plain answer if we are not the right fit.' },
  { title: 'Built to be maintained', desc: 'Documented, reproducible and handed over cleanly, so your team can run and extend what we build long after the engagement ends.' },
];

const WHY_CSS = `
.wm-why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(14px,2vw,22px)}
.wm-why-card{position:relative;padding:clamp(22px,2.6vw,32px);border-radius:20px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.12);transition:border-color .3s ease,background .3s ease,transform .3s ease}
.wm-why-card:hover{border-color:rgba(255,255,255,.34);background:rgba(255,255,255,.06);transform:translateY(-4px)}
.wm-why-num{display:block;margin-bottom:18px;font:600 13px/1 'Space Grotesk',system-ui,sans-serif;letter-spacing:.14em;color:rgba(255,255,255,.45)}
.wm-why-card h3{margin:0 0 10px;font-family:var(--font-main);font-weight:700;font-size:var(--fs-card-title);line-height:1.25;color:#fff;letter-spacing:-.01em}
.wm-why-card p{margin:0;font-size:var(--fs-card-body);line-height:1.65;color:rgba(255,255,255,.66)}
`;

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
    { q: 'Can you join our team or work on retainer?', a: "Yes. Besides fixed-scope projects, we offer ongoing retainers and can embed our engineers and data scientists in your team (staff augmentation), working in your tools and process. It suits teams that need flexible expert capacity without hiring full-time." },
    { q: 'Where are you based and which time zones do you cover?', a: "Our team is based in Pakistan and works fully remote with clients internationally. We overlap working hours to fit your time zone." },
  ];



  return (
    <div style={{ background: '#010101', color: '#fff', minHeight: '100svh', overflowX: 'clip', position: 'relative' }}>

      {/* ══ 0. INTRO VIDEO → FRAMED TUNNEL + HERO TEXT (scroll-driven) ══ */}
      <ScrollFrameIntro>
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10 } } }} style={{ minWidth: 0, maxWidth: 760, margin: '0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.h1 variants={fadeUp} custom={0.05} style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 'var(--fs-hero)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
            <span style={{ color: '#FFFFFF' }}>We Turn Complex Data </span><br className="hero-br" />
            <span style={{ background: 'linear-gradient(90deg, #ababab 0%, #a7a7a7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Into Intelligent Decisions</span>
          </motion.h1>

          <motion.div variants={fadeUp} custom={0.12} className="wm-hero-divider" style={{ width: 72, height: 4, borderRadius: 99, background: 'linear-gradient(90deg, #ababab, #a7a7a7)', margin: 'clamp(12px, 1.6vw, 22px) auto' }} />

          <motion.p variants={fadeUp} custom={0.18} style={{ fontFamily: 'var(--font-main)', fontSize: 'var(--fs-card-title)', color: 'rgba(255,255,255,0.68)', maxWidth: 620, margin: '0 0 clamp(16px, 2vw, 28px)', letterSpacing: '0.005em', lineHeight: 1.65 }}>
            WellMind Data Solutions is a software, AI and data engineering company, with a particular edge in healthcare AI and biomedical data science.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.22} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 'clamp(16px, 2.2vw, 30px)', justifyContent: 'center' }}>
            <Link to="/book-discovery" className="wm-cta-solid">
              <Zap size={19} /> Book a Discovery Call
            </Link>
            <Link to="/case-studies" className="wm-cta-ghost">
              View Case Studies <ArrowRight size={19} />
            </Link>
          </motion.div>

        </motion.div>
      </ScrollFrameIntro>


      {/* ══ 3. MAIN LIGHT SECTION ══ */}
      <section style={{ position: 'relative', zIndex: 1, background: '#010101', overflow: 'clip', padding: 0 }}>
        <DataParticles count={6} dark />

        {/* Why WellMind */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 60px)' }}>
            <SectionBadge dark>Our Expertise</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 12 }}>
              Built for enterprise.{' '}<br className="hero-br" />
              <span style={{ background: 'linear-gradient(90deg, #ababab 25%, #a7a7a7 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Clear and reliable.</span>
            </h2>
            <p className="section-lead dark" style={{ maxWidth: 1200 }}>From data pipelines to applications, every system we build is engineered for reliability and security.</p>
          </div>
          <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <SolarSystem />
          </div>
        </div>

        <SectionDivider />

        {/* Core Capabilities */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center'}}>
              <SectionBadge dark>Core Capabilities</SectionBadge>
              <h2 className="section-h2 dark">Our Services</h2>
              <p className="section-lead dark" style={{ marginTop: 12, maxWidth: 1200, marginBottom: 0 }}>Software, AI and data services, from strategy to delivery.</p>
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
              <h2 className="section-h2 dark">Featured Case Studies.</h2>
              <p className="section-lead dark" style={{ marginTop: 12, maxWidth: 1200 }}>Explore portfolio projects that turn data into decisions across industries.</p>
            </motion.div>

            <div className="grid-projects" style={{ width: '100%' }}>
              {projects.map((proj, i) => <ProjectCard key={i} proj={proj} i={i} />)}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: 'clamp(12px, 2vw, 18px) clamp(24px, 4vw, 48px)', borderRadius: 'var(--radius-md)', background: 'transparent', color: '#FFFFFF', fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 'var(--fs-card-title)', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', border: '2px solid #FFFFFF', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#000'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,255,255,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none'; }}>
                View All Case Studies <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>

        <SectionDivider />

        {/* Why WellMind Data Solutions */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
              <h2 className="section-h2 dark">Why WellMind Data Solutions</h2>
              <p className="section-lead dark" style={{ marginTop: 12, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
                A software and AI engineering team that takes work from first idea to a running system, with a particular strength in healthcare AI.
              </p>
            </motion.div>
            <div className="wm-why-grid">
              {WHY_POINTS.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="wm-why-card"
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <span className="wm-why-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ══ 4. FAQ ══ */}
      <style>{WHY_CSS}</style>
      <InViewSection style={{ padding: 'var(--sp-section) 0', position: 'relative', zIndex: 1, background: '#010101' }}>
        <CircuitBg opacity={0.06} />
        <DataParticles count={5} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionBadge dark>Common Questions</SectionBadge>
            <h2 className="section-h2 dark">Frequently Asked Questions</h2>
            <p style={{ fontSize: 'var(--fs-h3)', color: B.textDarkMid, maxWidth: 1200, margin: '12px auto 0', lineHeight: 1.6 }}>
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
              Ready to Turn Your Data{' '}<br className="hero-br" />
              <span style={{ background: 'linear-gradient(90deg, #ababab 25%, #a7a7a7 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Into Impact?</span>
            </h2>

            <p className="section-lead dark" style={{ maxWidth: 900, margin: '0 auto clamp(28px, 3.5vw, 48px)', lineHeight: 1.75 }}>
              Book a free call. Tell us your challenge. We'll give you honest feedback on what's possible, what it would take, and whether we're the right fit. No pitch. No pressure.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(32px, 5vw, 52px)' }}>
              <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link to="/book-discovery" aria-label="Book a Discovery Call" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: 'clamp(14px, 2.5vw, 20px) clamp(22px, 5vw, 56px)', borderRadius: 'var(--radius-md)', background: '#FFFFFF', color: '#000000', fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 'var(--fs-card-title)', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 8px 40px rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>
                  <Zap size={18} />
                  <span>Book a Discovery Call</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </InViewSection>

    </div>
  );
}