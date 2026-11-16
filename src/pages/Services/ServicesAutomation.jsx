/**
 * ServicesAutomation.jsx — WellMind Data Solutions
 * /services/automation
 * Intelligent RPA, workflow automation, pipeline orchestration.
 *
 * CHANGES:
 * 1. Removed all ./serviceShared dependencies — self-contained component.
 * 2. Section dark/light pattern synced with ServicesAiMl.jsx:
 *    Hero (light) → Stats (DARK) → Capabilities + Process/Deliverables (light-mid) → Pricing (DARK) → CTA (light)
 * 3. Text sizes, margins, colours, BG styling fully synced with ServicesAiMl.jsx.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Settings2, Repeat, GitMerge, ClipboardList, Timer,
  Zap, ArrowRight, CheckCircle, TrendingDown, BarChart3,
  Webhook, Database, Play, PauseCircle, AlertTriangle, Shield,
  Activity, TrendingUp,
} from 'lucide-react';

import { HeroGridBg, SectionGridBg } from '../../components/BgGrid';
import PipelineFlow from '../../components/PipelineFlow';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge, SectionDivider } from '../../theme';

// ─── Brand Tokens (Synced with ServicesAiMl.jsx) ─────────────────────────────
// Page-specific accent — warm amber/gold, operations / efficiency vibe
const AC = B.accent;

// ─── Layout Constants ─────────────────────────────────────────────────────────
// ─── Counter Hook ─────────────────────────────────────────────────────────────
// ─── Background Helpers ───────────────────────────────────────────────────────
// ─── Section Badge ────────────────────────────────────────────────────────────
// ─── Feature Card (Synced with AiMl) ─────────────────────────────────────────
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
        color: color, transition: 'all 0.3s ease',
      }}>
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <h4 style={{ fontWeight: 700, fontSize: 'var(--fs-card-title)', color: hovered ? B.textDark : B.textMain, marginBottom: 10, lineHeight: 1.3, transition: 'color 0.3s ease' }}>{title}</h4>
      <p style={{  fontSize: 'var(--fs-card-body)', color: hovered ? B.textDarkMid : B.textMid, lineHeight: 1.7, transition: 'color 0.3s ease' }}>{desc}</p>
    </motion.div>
  );
}

// ─── Deliverable Item (Synced with AiMl) ─────────────────────────────────────
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
        borderRadius: 'var(--radius-md)', marginBottom: 10,
        background: hovered ? color : 'rgba(255,255,255,0.5)',
        border: `1px solid ${color}25`,
        backdropFilter: 'blur(5px)',
        transition: 'all 0.3s ease',
      }}
    >
      <CheckCircle size={18} color={hovered ? B.textDark : color} style={{ flexShrink: 0, transition: 'color 0.3s' }}/>
      <span style={{ fontSize: 'var(--fs-card-title)', fontWeight: 500, lineHeight: 1.5, color: hovered ? B.textDark : B.textMain, transition: 'color 0.3s ease' }}>{text}</span>
    </motion.div>
  );
}

// ─── Stat Card (dark section — Synced with AiMl) ─────────────────────────────


// ─── Section Divider ──────────────────────────────────────────────────────────
// ─── Animated Pipeline Flow Visual ───────────────────────────────────────────
const PIPELINE_NODES = [
  { label: 'Trigger',   sub: 'Schedule / Webhook / Event', color: B.action },
  { label: 'Extract',   sub: 'Data from any source',       color: AC },
  { label: 'Transform', sub: 'AI enrichment & clean',      color: B.primary },
  { label: 'Route',     sub: 'Conditions & branching',     color: B.secondary },
  { label: 'Deliver',   sub: 'Output to any system',       color: B.action },
];

// ─── DATA ─────────────────────────────────────────────────────────────────────
const features = [
  { icon: <Repeat/>, title: 'End-to-End Workflow Automation', desc: 'Map, digitise, and automate entire business workflows — from data ingestion to reporting. We identify the manual steps causing most of the delays.', color: AC },
  { icon: <Webhook/>, title: 'API & System Integration', desc: 'Connect your CRM, ERP, data warehouse, and many other tools into a single automated data flow. Webhooks, polling, and event-driven triggers all covered.', color: B.action },
  { icon: <GitMerge/>, title: 'Pipeline Orchestration', desc: 'Airflow, Prefect, and Nextflow-based pipelines for data engineering and research workloads. Dependency management, retries, and alerting built-in.', color: B.primary },
  { icon: <AlertTriangle/>, title: 'Monitoring & Error Handling', desc: 'Every automation we build includes alerting for failures, structured logging, and auto-retry logic. You get notified before your users notice anything.', color: B.secondary },
  { icon: <Database/>, title: 'Data Pipeline Engineering', desc: 'ETL/ELT pipelines from messy source data to clean, queryable warehouses. Incremental loading, deduplication, schema validation included.', color: AC },
  { icon: <Settings2/>, title: 'Intelligent RPA', desc: 'Rule-based automation upgraded with AI — document extraction, form classification, decision routing. RPA that adapts to changing inputs.', color: B.action },
];

const processes = [
  { step: '01', title: 'Workflow Audit', desc: 'We map your existing manual processes end-to-end, identify automation candidates, and rank them by ROI potential before touching any code.' },
  { step: '02', title: 'Architecture Design', desc: 'Choose the right tool for each workflow — Airflow, Prefect, Python scripts, or API integrations. Over-engineering wastes money; we scope precisely.' },
  { step: '03', title: 'Build & Test with Real Data', desc: 'Automation is only as reliable as its testing. We build with your actual data and edge cases, not synthetic test fixtures.' },
  { step: '04', title: 'Monitor & Iterate', desc: 'Post-launch we review alerting thresholds, tune retry logic, and optimise for the failure modes that only appear in production.' },
];

const deliverables = [
  'Workflow map + automation opportunity scorecard',
  'Fully tested pipeline / automation scripts (your repo)',
  'Monitoring dashboard with alerting rules',
  'Runbook for failure scenarios and manual overrides',
  'Integration credentials documented in secure vault',
  'Training session for internal team',
  'Post-launch support',
];





const processColors = [AC, B.action, B.primary, B.secondary];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ServicesAutomation() {


  return (
    <div style={{ background: B.bgLight, minHeight: '100svh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-body, sans-serif)' }}>

      {/* ══════════ 1. HERO (LIGHT) ══════════ */}
      <section style={{
        position: 'relative', minHeight: '100svh',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', zIndex: 1,
        background: B.heroBg,
        paddingTop: 'clamp(40px, 5vw, 50px)',
      }}>
        <HeroGridBg opacity={0.35}/>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '45%', height: '100%', background: `linear-gradient(90deg, ${AC}06 0%, transparent 80%)`, pointerEvents: 'none', zIndex: 1 }}/>
        <DataParticles count={18}/>

        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
          position: 'relative', zIndex: 10,
        }}>
          <div style={{ maxWidth: 1200, width: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 5vw, 60px)' }}>

            {/* TOP ROW: Text + Pipeline Visual */}
            <div className="hero-split-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch', gap: 'clamp(18px, 5vw, 44px)' }}>

              {/* Left — Text */}
              <motion.div
                initial="hidden" animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                style={{ flex: '1 1 clamp(280px, 45%, 600px)', display: 'flex', flexDirection: 'column' }}
              >
                <motion.div variants={fadeUp} custom={0}>
                  <SectionBadge>Automation & Workflows</SectionBadge>
                </motion.div>

                <motion.h1 variants={fadeUp} custom={0.05}
                  style={{ fontWeight: 700, fontSize: 'var(--fs-hero)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 'clamp(14px, 2vw, 24px)', color: B.primaryDark }}>
                  Stop Doing Manually{' '}<br className="hero-br" />
                  <span style={{ background: `linear-gradient(90deg, ${AC}, ${B.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    What Code Can Own.
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={0.15}
                  style={{ fontSize: 'var(--fs-h3)', fontWeight: 500, color: B.textMid, marginBottom: 'clamp(20px, 3vw, 36px)', lineHeight: 1.75 }}>
                  Intelligent RPA and end-to-end workflow automation that replaces repetitive manual tasks with reliable, monitored pipelines — built to run reliably without constant supervision.
                </motion.p>

                <motion.div variants={fadeUp} custom={0.25} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                  <Link to="/book-discovery" className="btn-primary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                    <Zap size={16}/> Automate My Workflows
                  </Link>
                  <Link to="/case-studies?service=automation" className="btn-secondary" style={{ width: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                    See Automation Case Studies <ArrowRight size={16}/>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — Pipeline Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ flex: '1 1 clamp(260px, 40%, 500px)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}
              >
                <div style={{
                  padding: 'clamp(24px, 3vw, 36px) clamp(18px, 2.5vw, 24px)',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(14px)',
                  border: `2px solid ${AC}30`,
                  boxShadow: `0 20px 60px ${AC}15`,
                  width: '100%', maxWidth: 440,
                }}>
                  <div style={{ fontSize: 'var(--fs-label)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: AC, textAlign: 'center', marginBottom: 24 }}>
                    Automation Pipeline
                  </div>
                  <PipelineFlow nodes={PIPELINE_NODES}/>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM ROW: Trust Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2vw, 20px)', justifyContent: 'center', width: '100%', paddingTop: 'clamp(10px, 2vw, 20px)', borderTop: `1px solid ${B.primaryBorder}40` }}
            >
              {['Intelligent RPA', 'Monitored Pipelines'].map((t, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: 'clamp(8px, 1vw, 12px) clamp(14px, 2vw, 20px)', borderRadius: 50,
                  background: 'rgba(255,255,255,0.6)', border: `1px solid ${B.primaryBorder}`,
                  fontSize: 'var(--fs-card-body)', fontWeight: 600, color: B.textMain,
                  boxShadow: '0 4px 12px rgba(57,57,57,0.05)',
                  animation: `wmFloat ${3 + i * 0.5}s ease-in-out infinite`,
                }}>
                  <CheckCircle size={14} color={AC}/> {t}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ 3. LIGHT: CAPABILITIES + PROCESS ══════════ */}
      <section style={{
        position: 'relative', zIndex: 1,
        background: 'linear-gradient(180deg, #e8e8e8 0%, #e1e1e1 50%, #d7d7d7 100%)',
        overflow: 'hidden', padding: 0,
      }}>
        <SectionGridBg opacity={0.25}/>
        <DataParticles count={10}/>

        {/* Capabilities */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
            <SectionBadge>Services</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>What We Automate</h2>
            <p className="section-lead" style={{ maxWidth: 1200 }}>
              From a single bottleneck to an entire operations stack — we scope to where it matters most and build pipelines that run without babysitting.
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
          <div style={{ ...PX, maxWidth: 1250, display: 'flex', gap: 'clamp(28px, 5vw, 80px)', flexWrap: 'wrap' }}>

            {/* Process */}
            <div style={{ flex: '1 1 min(100%, 400px)' }}>
              <SectionBadge>How We Work</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>Our Automation Process</h2>
              {processes.map((p, i) => {
                const color = processColors[i % processColors.length];
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                    style={{ display: 'flex', gap: 'clamp(14px, 2vw, 24px)', position: 'relative', marginBottom: 'clamp(24px, 3.5vw, 40px)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 'clamp(40px, 5.5vw, 52px)', height: 'clamp(40px, 5.5vw, 52px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: color, color: B.white, fontWeight: 800, fontSize: 'var(--fs-card-body)', boxShadow: `0 6px 20px ${color}40`, flexShrink: 0 }}>{p.step}</div>
                      {i < processes.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 28, background: `linear-gradient(to bottom, ${color}60, transparent)`, marginTop: 6 }}/>}
                    </div>
                    <div style={{ paddingTop: 8 }}>
                      <h4 style={{ fontWeight: 700, fontSize: 'var(--fs-h3)', color: B.textMain, marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h4>
                      <p style={{ fontSize: 'var(--fs-card-title)', lineHeight: 1.7, color: B.textMid }}>{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Deliverables */}
            <div style={{ flex: '1 1 min(100%, 380px)' }}>
              <SectionBadge>What You Get</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom: 12 }}>Documented, Monitored, Yours.</h2>
              <p style={{ fontSize: 'var(--fs-card-title)', color: B.textMid, lineHeight: 1.7, marginBottom: 'clamp(24px, 3.5vw, 36px)' }}>
                Every automation is documented, monitored, and fully owned by you on handoff — no dependency on us to keep it running.
              </p>
              {deliverables.map((d, i) => {
                const color = processColors[i % processColors.length];
                return <DeliverableItem key={i} text={d} color={color}/>;
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════ 5. FINAL CTA (LIGHT) ══════════ */}
      <section style={{
        padding: `clamp(60px, 10vw, 120px) 0`,
        position: 'relative', overflow: 'hidden', zIndex: 1,
        background: 'linear-gradient(180deg, #f3f3f3 0%, #e5e5e5 100%)',
      }}>
        <SectionGridBg opacity={0.2}/>
        <DataParticles count={14}/>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${AC}08 0%, transparent 70%)`, pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(84,84,84,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }}/>

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
              Stop the Manual Work.{' '}<br className="hero-br" />
              <span style={{ background: `linear-gradient(90deg, #a0a0a0 25%, #959595 75%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Start Automating Today.
              </span>
            </h2>
            <p className="section-lead" style={{ color: B.textMid, maxWidth: 1200, margin: '0 auto clamp(24px, 3.5vw, 48px)', lineHeight: 1.75 }}>
              Book a free call. We'll audit your biggest manual bottleneck and tell you what it would take to automate it — no sales pitch.
            </p>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link to="/book-discovery" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 56px)',
                borderRadius: 'var(--radius-md)', background: `linear-gradient(135deg, ${B.action}, #393939)`,
                color: B.white, fontWeight: 700, fontSize: 'var(--fs-card-title)',
                letterSpacing: '0.10em', textTransform: 'uppercase', textDecoration: 'none',
                boxShadow: `0 8px 40px ${B.actionGlow}, 0 0 80px rgba(84,84,84,0.15)`,
                border: '1px solid rgba(84,84,84,0.40)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                <Zap size={18}/> Book Your Free Automation Audit <ArrowRight size={18}/>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
</div>
  );
}