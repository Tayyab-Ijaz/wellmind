/**
 * IndustryHealthcare.jsx — WellMind Data Solutions
 * /industries/healthcare
 * Fully responsive: 1440 | 1024 | 768 | 425 | 320 px
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye, Brain, FileText, FlaskConical, ShieldCheck, Activity,
  Clock, Zap, DollarSign, ArrowRight, CheckCircle, TrendingUp,
  Target, Globe, Layers, ChevronRight, Cpu, Database, Lock,
} from 'lucide-react';

import { SectionGridBg } from '../../components/BgGrid';
import IndustryHero from '../../components/IndustryHero';
import { B, lift, SECTION_PAD, PX, DataParticles, SectionBadge } from '../../theme';
import healthImage from '../../assets/illustrations/health-hero.webp';

// ─── Brand Tokens (Synced with IndustryFinancial.jsx) ─────────────────────
// ─── Counter Hook ─────────────────────────────────────────────────────────────
// ─── Data Particles ───────────────────────────────────────────────────────────
// ─── SectionBadge ────────────────────────────────────────────────────────────
// ─── Stat Card (Dark Section) ─────────────────────────────────────────────────


// ─── Use Case Row ─────────────────────────────────────────────────────────────
function UseCaseRow({ icon, color, title, desc, metrics, index, slug }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;
  const content = (
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
        transition: 'all 0.35s ease', cursor: slug ? 'pointer' : 'default', position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(180deg, ${color}, transparent)`, opacity: hovered ? 1 : 0.3, transition: 'opacity 0.35s' }} />
      <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', background: hovered ? B.white : `${color}12`, color: hovered ? color : color, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${color}30`, flexShrink: 0, transition: 'all 0.3s' }}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div style={{ flex: '1 1 240px' }}>
        <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, color: hovered ? B.textDark : B.primaryDark, marginBottom: 10, fontSize: 'var(--fs-h3)' }}>{title}</h3>
        <p style={{ color: hovered ? B.textDarkMid : B.textMid, fontSize: 'var(--fs-card-title)', lineHeight: 1.75 }}>{desc}</p>
        {slug && (
          <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--fs-small)', fontWeight: 700, color: hovered ? B.white : color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            View Case Study <ArrowRight size={14} />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 32px)', flexWrap: 'wrap' }}>
        {metrics.map((m, i) => (
          <div key={i} style={{ textAlign: 'center', minWidth: 90 }}>
            <div style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 'var(--fs-section-h2)', color: hovered ? B.textDark : color, letterSpacing: '-0.02em' }}>{m.val}</div>
            <div style={{ fontSize: 'var(--fs-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: hovered ? B.textDarkMuted : B.textMuted, fontWeight: 700, marginTop: 4 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
  return slug
    ? <Link to={`/case-studies/${slug}`} style={{ textDecoration: 'none', display: 'block' }}>{content}</Link>
    : content;
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function IndustryHealthcare() {
  const [openFaq, setOpenFaq] = useState(-1);


  const useCases = [
    {
      icon: <DollarSign />, color: B.primary, slug: 'ar-prioritization-underpayment-recovery',
      title: 'AR Prioritization & Underpayment Recovery Engine',
      desc: 'A LightGBM classifier plus an Isolation Forest anomaly layer, built on public CMS Medicare data, that flags underpaid claims and ranks them into a prioritized AR workqueue via a live FastAPI + React dashboard.',
      metrics: [],
    },
    {
      icon: <ShieldCheck />, color: B.secondary, slug: 'healthcare-fraud-detection-billing',
      title: 'Healthcare Fraud Detection System (Medicare Billing)',
      desc: 'Peer-group Z-score benchmarking, Isolation Forest anomaly detection, E&M upcoding rules, and OIG exclusion-list cross-referencing combined into one composite Fraud Risk Score across the 2023 CMS Medicare billing dataset.',
      metrics: [],
    },
    {
      icon: <Activity />, color: B.action,
      title: 'Claim Denial Prediction & Root-Cause Classifier', slug: 'claim-denial-prediction',
      desc: 'A boosted-tree denial-risk model (Optuna-tuned, SHAP-explained) predicts denial probability before submission, while a parallel TF-IDF vs. DistilBERT NLP pipeline classifies the operational root cause behind existing denials.',
      metrics: [{ val: 'SHAP', label: 'Explainability' }, { val: 'FastAPI', label: '+ Streamlit Demo' }],
    },
    {
      icon: <TrendingUp />, color: B.primary, slug: 'rcm-prior-authorization-intelligence',
      title: 'RCM Opportunity Forecasting & Prior Authorization Intelligence',
      desc: 'A Medicare Advantage enrollment forecast built entirely on public CMS data, tracking national enrollment and flagging prior-authorization exposure directly from CMS PBP benefit fields.',
      metrics: [{ val: 'Streamlit', label: 'Executive Dashboard' }],
    },
    {
      icon: <Brain />, color: B.secondary, slug: 'ehr-clinical-nlp-automation',
      title: 'Clinical NLP for Structuring Hospital Records',
      desc: 'A Named Entity Recognition pipeline extracts diagnoses, medications, and procedures from unstructured hospital notes, with de-identification built in before storage and normalization against ICD/SNOMED vocabularies.',
      metrics: [{ val: 'NER', label: 'Entity Extraction' }, { val: 'De-ID', label: 'Built-In' }, { val: 'Concept', label: 'Current Stage' }],
    },
    {
      icon: <FlaskConical />, color: B.action, slug: 'single-cell-rnaseq-automation',
      title: 'Single-Cell RNA-seq Automation',
      desc: 'Parameter-optimized PCA, t-SNE, and UMAP dimensionality reduction combined with BIC-optimized GMM and DBSCAN clustering to automate cell-state discovery from single-cell RNA-seq data.',
      metrics: [{ val: 'PCA/UMAP', label: 'Dim. Reduction' }, { val: 'GMM+DBSCAN', label: 'Clustering' }, { val: 'BIC', label: 'Auto Model Selection' }],
    },
  ];

  const faqs = [
    { q: 'Do you work with real patient data?', a: 'Our delivered healthcare work runs entirely on public CMS and Medicare datasets — no PHI involved. For projects that do touch clinical notes, de-identification is built into the pipeline before any storage or processing.' },
    { q: 'What data sources have you built pipelines for?', a: 'Public CMS Medicare enrollment, billing, and provider data; RVU and Physician Fee Schedule reference tables; unstructured clinical notes; and single-cell RNA-seq genomic datasets. We build custom ingestion for whatever source your project needs.' },
    { q: 'How do you handle model explainability?', a: 'Our denial-prediction and fraud-detection models ship with SHAP-based feature importance and clear risk tiers, so the reasoning behind every score is visible — not a black box.' },
    { q: 'What stage are your healthcare projects at?', a: "It varies by project — some (like our AR Prioritization Engine and Fraud Detection System) are fully built with live dashboards; others are validated concepts at README stage. We're upfront about which is which on every case study." },
    { q: 'What does a typical engagement look like?', a: 'We start with a short discovery and scoping conversation, then move into focused build phases — from a working prototype through to a deployed, documented system, with timelines agreed upfront based on scope.' },
  ];

  return (
    <div style={{ background: B.bgLight, minHeight: '100svh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-main)' }}>

      {/* ══ 1. HERO ══ */}
      <IndustryHero
        title={"AI That Saves Time,\n[[So Clinicians Can Save Lives]]"}
        text="From revenue-cycle recovery to clinical NLP and biomedical data — we build practical AI systems on real CMS and clinical data. Real projects. Real code. Nothing theoretical."
        image={healthImage}
        imageAlt="Healthcare AI illustration with DNA helix, insurance claim and analytics dashboard"
        primaryLabel="Book a Discovery Call"
        caseStudyHref="/case-studies?industry=healthcare"
        fit="contain"
      />


      {/* ══ 3. CASE STUDIES (Light) ══ */}
      <section style={{ 
        padding: 'var(--sp-section) 0', 
        position: 'relative', 
        background: 'linear-gradient(180deg, #e8e8e8 0%, #e1e1e1 100%)', 
        overflow: 'hidden', zIndex: 1 
      }}>
        <SectionGridBg opacity={0.14} />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          {/* Case Studies (Rows) */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 56px)' }}>
             <h3 style={{ color: B.primaryDark, fontSize: 'var(--fs-section-h2)', fontWeight: 700, marginBottom: 24 }}>Real Problems. Deployed Solutions.</h3>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3vw, 32px)', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
            {useCases.map((uc, i) => (
              <UseCaseRow key={i} {...uc} index={i} />
            ))}
          </div>

          {/* Deep-link CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ textAlign: 'center' }}>
            <Link
              to="/case-studies?industry=healthcare"
              className="btn-primary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: 'clamp(14px, 2vw, 18px) clamp(28px, 4vw, 48px)', borderRadius: 'var(--radius-md)', border: 'none', boxShadow: '0 4px 14px rgba(55,55,55,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
            >
              View All Healthcare Case Studies <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ 4. TECH STACK (PrimaryDark BG) ══ */}
      <section style={{ 
        padding: `clamp(40px, 6vw, 80px) 0`, 
        position: 'relative', 
        background: `linear-gradient(135deg, ${B.primaryDark} 0%, #080808 100%)`, 
        zIndex: 1, overflow: 'hidden' 
      }}>
        <DataParticles count={10} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 48px)' }}>
            <SectionBadge dark>Technology Stack</SectionBadge>
            <h2 className="section-h2 dark" style={{ fontSize: 'var(--fs-section-h2)', marginBottom: 12 }}>Built for Clinical Environments</h2>
            <p style={{ color: B.textDarkMid, fontSize: 'var(--fs-card-title)', maxWidth: 1200, margin: '0 auto' }}>The exact tools we've used to design, build, and ship each of the projects above.</p>
          </motion.div>
          <div className="grid-tech">
            {[
              { group: 'ML & Modeling', items: ['LightGBM', 'DistilBERT', 'Isolation Forest', 'Random Forest'], icon: <Brain size={16} />, color: B.action },
              { group: 'NLP & Biomedical', items: ['spaCy / NER', 'PCA / UMAP', 'GMM + DBSCAN', 'ICD/SNOMED Normalization'], icon: <Database size={16} />, color: B.secondary },
              { group: 'Deployment', items: ['FastAPI', 'React', 'Streamlit', 'Python'], icon: <Cpu size={16} />, color: B.primary },
              { group: 'Data Sources', items: ['CMS Public Data', 'De-Identified Clinical Notes', 'Medicare Billing Records', 'OIG LEIE Exclusion Lists'], icon: <Lock size={16} />, color: B.accent },
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                style={{ 
                  background: 'rgba(255,255,255,0.04)', 
                  border: `1.5px solid ${lift(col.color)}40`, 
                  borderRadius: 'var(--radius-lg)', 
                  padding: 'clamp(20px, 3vw, 32px)', 
                  position: 'relative', 
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${lift(col.color)}, transparent)` }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.08)', color: B.textDark, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                    {col.icon}
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 'var(--fs-card-body)', letterSpacing: '0.08em', textTransform: 'uppercase', color: B.textDark }}>{col.group}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map((item, ii) => (
                    <div key={ii} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: lift(col.color), flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--fs-card-body)', color: B.textDarkMid, fontWeight: 500, lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. WHY CHOOSE US (light) ══ */}
      <section style={{ padding: 'var(--sp-section) 0', position: 'relative', background: `linear-gradient(180deg, ${B.bgLight} 0%, #ebebeb 100%)`, zIndex: 1, overflow: 'hidden' }}>
        <SectionGridBg opacity={0.16} />
        <DataParticles count={10} />
        
        <div style={{ maxWidth: 1250, margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)', position: 'relative', zIndex: 2 }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
            {/* Left — text */}
            <div style={{ flex: '1 1 320px' }}>
              <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
                <SectionBadge>Why WellMind</SectionBadge>
                <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>
                  Clinical Fluency Meets{' '}
                  <span style={{ background: 'linear-gradient(90deg, #4a4a4a 25%, #373737 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Engineering Rigor
                  </span>
                </h2>
                <p style={{ color: B.textMid, fontSize: 'var(--fs-card-title)', lineHeight: 1.75, marginBottom: 'clamp(20px, 3vw, 32px)' }}>
                  Most AI vendors understand either algorithms or healthcare data. We aim for both — building models on real CMS and clinical data, and shipping them as working dashboards and APIs, not one-off notebooks.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { title: 'Public-Data-First Where Possible', desc: 'Our RCM and forecasting work runs on public CMS data — no PHI risk, fully auditable methodology' },
                    { title: 'Explainable by Design', desc: 'Denial and fraud models ship with SHAP feature importance and clear risk tiers — not black boxes' },
                    { title: 'Privacy-Built-In for Clinical NLP', desc: 'De-identification is designed into the pipeline before any clinical text is stored or processed' },
                    { title: 'Honest About Maturity', desc: "We're upfront about what's live and deployed versus what's still a validated concept" },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 26, height: 26, borderRadius: 'var(--radius-sm)', background: `${B.action}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <CheckCircle size={16} color={B.action} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 'var(--fs-card-title)', color: B.primaryDark, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ fontSize: 'var(--fs-card-title)', color: B.textMid, lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — metrics panel */}
            <motion.div
              initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
              style={{ flex: '1 1 320px', background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(16px)', border: `3px solid ${B.primaryBorder}`, borderRadius: 'var(--radius-xl)', padding: 'clamp(24px, 3vw, 40px)', boxShadow: `0 24px 64px -12px rgba(57,57,57,0.12)`, position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${B.action}, ${B.primary}, ${B.accent})` }} />
              <div style={{ fontWeight: 700, fontSize: 'var(--fs-small)', letterSpacing: '0.12em', textTransform: 'uppercase', color: B.textMuted, marginBottom: 24 }}>Engagement Overview</div>
              {[
                { label: 'Discovery & Data Audit', color: B.action,  icon: <Eye size={16} /> },
                { label: 'Model Development', color: B.secondary, icon: <Brain size={16} /> },
                { label: 'Clinical Validation', color: B.primary, icon: <Activity size={16} /> },
                { label: 'Production Deployment', color: B.accent, icon: <Zap size={16} /> },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: i < 3 ? `1px solid rgba(57,57,57,0.10)` : 'none' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: `${step.color}12`, color: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${step.color}25`, flexShrink: 0 }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 'var(--fs-card-title)', color: B.primaryDark }}>{step.label}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 24, padding: '16px 20px', background: `linear-gradient(135deg, ${B.action}10, ${B.primary}08)`, borderRadius: 16, border: `1px solid ${B.action}20`, display: 'flex', alignItems: 'center', gap: 12 }}>
                <Activity size={18} color={B.action} />
                <span style={{ fontSize: 'var(--fs-card-body)', color: B.textMain, fontWeight: 600 }}>Clear scoping · clear deliverables upfront</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 6. FAQ (DARK) ══ */}
      <section style={{ padding: 'var(--sp-section) 0', position: 'relative', background: `linear-gradient(135deg, #0a0a0a 0%, #080808 100%)`, zIndex: 1, overflow: 'hidden' }}>
        <DataParticles count={10} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}>
            <SectionBadge dark>Common Questions</SectionBadge>
            <h2 className="section-h2 dark" style={{ color: B.textDark }}>Questions from Clinical Teams</h2>
            <p className="section-lead" style={{ color: B.textDarkMid }}>Honest answers before you engage.</p>
          </motion.div>
          <div style={{ maxWidth: 840, margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} index={i} color={lift(B.action)} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. FINAL CTA (light — not dark) ══ */}
      <section style={{ padding: `clamp(60px, 10vw, 120px) 0`, position: 'relative', overflow: 'hidden', zIndex: 1, background: 'linear-gradient(180deg, #f3f3f3 0%, #e5e5e5 100%)' }}>
        <SectionGridBg opacity={0.18} />
        <DataParticles count={14} />
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(84,84,84,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(55,55,55,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Let's Build AI That{' '}
              <br className="hero-br" />
              <span style={{ background: 'linear-gradient(90deg, #4a4a4a 25%, #373737 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Works at the Bedside
              </span>
            </h2>
            <p className="section-lead" style={{ color: B.textMid, maxWidth: 1200, margin: '0 auto clamp(28px, 4vw, 48px)', lineHeight: 1.75 }}>
              Book a free call. Tell us your clinical challenge — imaging, risk stratification, documentation, or trials. We'll give you an honest feasibility assessment. No pitch, no pressure.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(10px, 2vw, 16px)', justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link to="/book-discovery" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 52px)', borderRadius: 'var(--radius-md)', boxShadow: `0 8px 40px rgba(84,84,84,0.28), 0 0 80px rgba(84,84,84,0.10)`, border: `1px solid rgba(84,84,84,0.40)` }}>
                  <Zap size={18} /> Book a Free Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link to="/case-studies?industry=healthcare" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 44px)', borderRadius: 12 }}>
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

// ─── FAQ Item (Dark Mode) ─────────────────────────────────────────────────────────
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
          <span style={{ fontSize: 'var(--fs-label)', fontWeight: 800, letterSpacing: '0.10em', color: isOpen ? color : B.textDarkMuted, minWidth: 26, fontFamily: 'var(--font-main)', transition: 'color 0.3s' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <h4 style={{ fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 'var(--fs-card-title)', color: isOpen ? B.textDark : B.textDarkMid, margin: 0, lineHeight: 1.4, transition: 'color 0.3s' }}>{q}</h4>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, background: isOpen ? color : 'rgba(255,255,255,0.10)', border: `1px solid ${isOpen ? 'transparent' : 'rgba(255,255,255,0.10)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
          <ChevronRight size={14} color={isOpen ? B.bgDark : B.textDarkMuted} style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '0 clamp(18px, 2.5vw, 28px) clamp(16px, 2vw, 24px)', paddingLeft: `calc(clamp(18px, 2.5vw, 28px) + 14px + 26px)` }}>
              <div style={{ fontSize: 'var(--fs-card-body)', lineHeight: 1.78, color: B.textDarkMid, borderLeft: `2px solid ${color}40`, paddingLeft: 18 }}>{a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}