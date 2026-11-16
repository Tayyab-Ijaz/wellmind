/**
 * CaseStudies.jsx — WellMind Data Solutions — Fully Responsive
 * Synced 1:1 with Home.jsx design system
 * Breakpoints: 1440 | 1024 | 768 | 425 | 320
 *
 * Changes from previous version:
 * - Section 3 (Featured) + Section 5 (CTA) merged into ONE unified light section
 * - Agriculture & Education industries added to INDUSTRIES array + caseStudies data
 */

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowDown, Dna, TrendingUp, Brain, Zap,
  FlaskConical, BarChart3, CheckCircle, BookOpen, Settings2,
  Cpu, Code, Palette, Clock, X, Building2, Globe,
  ChevronDown, ChevronRight, DollarSign, Layers, Filter, Star,
  SlidersHorizontal, Search, Leaf, GraduationCap, CloudRain, Users,
  Shield, GitBranch, SquareCode, Mail,
} from 'lucide-react';

import { HeroGridBg, SectionGridBg } from '../components/BgGrid';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge, SectionDivider } from '../theme';
import { caseStudies } from '../data/caseStudies';

// ─── Card accent palette (cycles across cards) ────────────────────────────────
const CARD_ACCENTS = [
  { border: '#8a8a8a',     glow: 'rgba(84,84,84,0.35)',    tag: '#d4d4d4',   tagBg: 'rgba(212,212,212,0.10)',  tagBorder: 'rgba(212,212,212,0.25)'  },
  { border: '#7a7a7a',  glow: 'rgba(55,55,55,0.35)',     tag: '#939393',   tagBg: 'rgba(55,55,55,0.12)',   tagBorder: 'rgba(55,55,55,0.25)'   },
  { border: '#9a9a9a',    glow: 'rgba(57,57,57,0.35)',     tag: '#adadad',   tagBg: 'rgba(57,57,57,0.12)',   tagBorder: 'rgba(57,57,57,0.25)'   },
  { border: '#b0b0b0',     glow: 'rgba(149,149,149,0.35)',    tag: '#c4c4c4',    tagBg: 'rgba(149,149,149,0.12)',  tagBorder: 'rgba(149,149,149,0.25)'  },
  { border: '#616161',    glow: 'rgba(97,97,97,0.35)',    tag: '#8e8e8e',   tagBg: 'rgba(97,97,97,0.12)',  tagBorder: 'rgba(97,97,97,0.25)'  },
  { border: '#676767',    glow: 'rgba(103,103,103,0.35)',    tag: '#939393',   tagBg: 'rgba(103,103,103,0.12)',  tagBorder: 'rgba(103,103,103,0.25)'  },
  { border: '#767676',    glow: 'rgba(118,118,118,0.35)',     tag: '#9b9b9b',   tagBg: 'rgba(118,118,118,0.12)',   tagBorder: 'rgba(118,118,118,0.25)'   },
  { border: '#666666',    glow: 'rgba(102,102,102,0.35)',    tag: '#959595',   tagBg: 'rgba(102,102,102,0.12)',  tagBorder: 'rgba(102,102,102,0.25)'  },
];

// ─── Services & Industries taxonomy ──────────────────────────────────────────
const SERVICES = [
  { id: 'ai-ml',          label: 'AI & ML',       icon: <Brain size={15}/>,     color: B.primary,   bg: 'rgba(57,57,57,0.10)', border: 'rgba(57,57,57,0.30)',  route: '/services-ai-ml' },
  { id: 'data-analytics', label: 'Data Science',  icon: <BarChart3 size={15}/>, color: B.action,    bg: 'rgba(84,84,84,0.10)', border: 'rgba(84,84,84,0.30)', route: '/services-data-analytics' },
  { id: 'ai-software',    label: 'AI Software',   icon: <Code size={15}/>,      color: B.secondary, bg: 'rgba(55,55,55,0.10)',  border: 'rgba(55,55,55,0.30)',  route: '/services-ai-software' },
  { id: 'automation',     label: 'Automation',    icon: <Settings2 size={15}/>, color: B.accent,    bg: 'rgba(149,149,149,0.12)', border: 'rgba(149,149,149,0.35)', route: '/services-automation' },
  { id: 'ui-ux',          label: 'UI/UX',         icon: <Palette size={15}/>,   color: '#676767',   bg: 'rgba(103,103,103,0.10)', border: 'rgba(103,103,103,0.30)', route: '/services-ui-ux' },
  { id: 'health-ai', label: 'Biomedical Data Science',icon: <Dna size={15}/>,       color: '#616161',   bg: 'rgba(97,97,97,0.10)', border: 'rgba(97,97,97,0.30)', route: '/services-health-ai' },
];


// ─── Dark Stats Card ───────────────────────────────────────────────────────────


// ─── Professional Unified Filter Bar ─────────────────────────────────────────
function UnifiedFilterBar({ activeService, onFilterClick }) {
  const isAllActive = !activeService;

  return (
    <div style={{ width: '100%', marginBottom: 48 }}>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        marginBottom: 20, flexWrap: 'wrap', position: 'relative',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          fontSize: 'var(--fs-label)', fontWeight: 800,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: B.textMuted, padding: '5px 10px',
          background: 'rgba(57,57,57,0.06)', borderRadius: 6,
          border: `1px solid ${B.primaryBorder}`,
        }}>
          <SlidersHorizontal size={12} color={B.primary} strokeWidth={2.5} />
          Filter Projects
        </div>

        <button
          onClick={() => onFilterClick('all')}
          className={`filter-chip chip-reset ${isAllActive ? 'active' : ''}`}
        >
          All Projects
        </button>

        {activeService && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            onClick={() => onFilterClick('all')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 12px', borderRadius: 'var(--radius-sm)',
              background: 'rgba(149,149,149,0.12)', border: `1px solid ${B.accent}50`,
              color: B.accent, fontWeight: 700, fontSize: 'var(--fs-label)',
              cursor: 'pointer', letterSpacing: '0.04em',
            }}
          >
            <X size={12} /> Clear Filters
          </motion.button>
        )}
      </div>

      {/* Services row */}
      <div style={{ marginBottom: 10 }}>
        <div style={{
          fontSize: 'var(--fs-label)', fontWeight: 800, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: B.textMuted, marginBottom: 8,
          textAlign: 'center',
        }}>
          Services
        </div>
        <div className="filter-row-services">
          {SERVICES.map((item) => {
            const isActive = activeService === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onFilterClick('service', item.id)}
                className={`filter-chip chip-service ${isActive ? 'active' : ''}`}
                style={isActive ? {
                  background: item.color, borderColor: item.color, color: '#fff',
                  boxShadow: `0 4px 16px ${item.border || item.color}55`,
                } : {
                  borderColor: item.border || 'rgba(57,57,57,0.25)',
                  color: item.color, background: item.bg,
                }}
              >
                <span className="chip-icon" style={{ color: isActive ? '#fff' : item.color }}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}

// ─── Case Study Card ──────────────────────────────────────────────────────────
function CaseStudyCard({ cs, i, isFeatured = false }) {
  const [hovered, setHovered] = useState(false);
  const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%' }}
    >
      <Link to={`/case-studies/${cs.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            height: '100%', minHeight: 'clamp(300px, 32vw, 400px)',
            background: '#060606',
            border: `1.5px solid ${hovered ? accent.border : 'rgba(57,57,57,0.20)'}`,
            boxShadow: hovered
              ? `0 24px 60px -12px ${accent.glow}, 0 0 0 1px ${accent.border}40`
              : '0 8px 32px -8px rgba(0,0,0,0.25)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex', flexDirection: 'column',
          }}
        >
          {/* IMAGE HEADER */}
          <div style={{ position: 'relative', height: 'clamp(140px, 16vw, 200px)', flexShrink: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${cs.image})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: hovered ? 'brightness(0.75)' : 'brightness(0.68)',
            }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,6,0) 45%, rgba(6,6,6,0.88) 100%)' }} />
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${accent.border}, ${accent.border}60, transparent)`,
              zIndex: 5,
            }} />
            {isFeatured && (
              <div style={{
                position: 'absolute', top: 16, left: 16,
                background: B.accent, color: '#fff',
                padding: '4px 10px', borderRadius: 6,
                fontSize: 'var(--fs-label)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
                zIndex: 10, display: 'flex', alignItems: 'center', gap: 5,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <Star size={12} fill="white" /> Featured
              </div>
            )}
            <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end', maxWidth: '80%', zIndex: 5 }}>
              {cs.tags.map((tag, tIdx) => (
                <span key={tIdx} style={{
                  fontSize: 'var(--fs-label)', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: B.textDark, background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(8px)', padding: '4px 10px', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div style={{
            padding: 'clamp(18px, 2.5vw, 28px)',
            display: 'flex', flexDirection: 'column', flexGrow: 1,
            background: 'linear-gradient(to bottom, rgba(6,6,6,1) 0%, rgba(8,8,8,1) 100%)',
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
              <span style={{
                fontSize: 'var(--fs-label)', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.06em', color: accent.tag,
                background: accent.tagBg, border: `1px solid ${accent.tagBorder}`,
                padding: '3px 9px', borderRadius: 5,
              }}>{cs.serviceLabel}</span>
              <span style={{
                fontSize: 'var(--fs-label)', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.06em', color: B.textDarkMuted,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)',
                padding: '3px 9px', borderRadius: 5,
              }}>{cs.industryLabel}</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-main)', fontWeight: 700,
              fontSize: 'var(--fs-h3)',
              color: B.textDark, lineHeight: 1.3, marginBottom: 14,
            }}>{cs.title}</h3>

            <p style={{
              fontSize: 'var(--fs-card-title)', lineHeight: 1.7,
              color: B.textDarkMid, marginBottom: 20, flexGrow: 1,
            }}>{cs.summary}</p>

            <div style={{
              display: 'flex', gap: 8, marginBottom: 20,
              padding: 'clamp(10px, 1.5vw, 14px)',
              background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)',
              border: `1px solid rgba(255,255,255,0.06)`,
            }}>
              {cs.metrics.map((m, mIdx) => (
                <div key={mIdx} style={{
                  flex: 1, textAlign: 'center',
                  borderRight: mIdx < cs.metrics.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  paddingRight: mIdx < cs.metrics.length - 1 ? 8 : 0,
                }}>
                  <div style={{ fontWeight: 800, fontSize: 'var(--fs-card-title)', color: accent.tag, lineHeight: 1.1 }}>{m.value}</div>
                  <div style={{ fontSize: 'var(--fs-label)', fontWeight: 600, color: B.textDarkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 3 }}>{m.label}</div>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingTop: 20, borderTop: `1px solid rgba(255,255,255,0.07)`,
            }}>
              <span style={{
                display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700,
                fontSize: 'var(--fs-card-body)', letterSpacing: '0.06em',
                color: hovered ? accent.border : B.textDarkMuted,
                textTransform: 'uppercase', transition: 'color 0.3s ease',
              }}>
                View Case Study
                <ArrowRight size={14} style={{
                  transform: hovered ? 'translateX(5px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease',
                }} />
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {cs.githubUrl && (
                  <a
                    href={cs.githubUrl} target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    title="View repository on GitHub"
                    style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease', textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = accent.border; e.currentTarget.style.borderColor = 'transparent'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <SquareCode size={14} color={B.textDarkMuted} />
                  </a>
                )}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: hovered ? accent.border : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${hovered ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}>
                  <ArrowRight size={14} color={hovered ? '#fff' : B.textDarkMuted} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function CaseStudies() {
  const location  = useLocation();
  const navigate  = useNavigate();

  const params = new URLSearchParams(location.search);
  const activeService  = params.get('service')  || null;

  const featuredStudies = caseStudies.filter(cs => cs.featured).slice(0, 3);



  const handleFilterClick = (type, id = null) => {
    const p = new URLSearchParams(location.search);
    let newService  = activeService;
    if (type === 'all')           { newService = null; }
    else if (type === 'service')  { newService  = (activeService  === id) ? null : id; }
    if (newService)  p.set('service',  newService);  else p.delete('service');
    p.delete('industry');
    navigate({ search: p.toString() }, { replace: true });
  };

  const filtered = caseStudies.filter(cs => {
    return activeService ? cs.service === activeService : true;
  });

  return (
    <div style={{ background: B.bgLight, minHeight: '100svh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-main)' }}>

      {/* ═══ 1. HERO ═══ */}
      <section style={{
        position: 'relative', minHeight: '100svh',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', zIndex: 1,
        paddingTop: 'clamp(40px, 5vw, 50px)',
        background: B.heroBg,
      }}>
        <HeroGridBg opacity={0.3} />
        <div style={{ position: 'absolute', left: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(90deg, rgba(47,47,47,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(270deg, rgba(47,47,47,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }} />
        <DataParticles count={18} />

        <div style={{
          flex: 1, position: 'relative', zIndex: 10,
          display: 'flex', alignItems: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
        }}>
          <div style={{ maxWidth: 1400, width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', alignItems: 'center', justifyItems: 'center' }} className="cs-hero-grid">
          <motion.div
            initial="hidden" animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
            style={{ width: '100%', textAlign: 'center' }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge>Our Projects</SectionBadge>
            </motion.div>

            <motion.h1
              variants={fadeUp} custom={0.05}
              style={{
                fontFamily: 'var(--font-main)', fontWeight: 700,
                fontSize: 'var(--fs-hero)',
                lineHeight: 1.1, letterSpacing: '-0.02em',
                marginBottom: 'clamp(16px, 2.5vw, 28px)',
              }}
            >
              <span style={{ color: B.primaryDark }}>Our Work in Action. </span>
              <br className="hero-br" />
              <span style={{ background: 'linear-gradient(90deg, #4a4a4a 25%, #373737 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Portfolio Projects.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={0.2}
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: 'var(--fs-h3)',
                color: B.textMid,
                maxWidth: 1200, margin: '0 auto clamp(16px, 2.5vw, 36px)',
                letterSpacing: '0.02em', lineHeight: 1.6,
              }}
            >
              From genomics research to fintech fraud detection, these are portfolio projects we built and published on our public GitHub, each showing how we approach a real data problem.
            </motion.p>

            <motion.div
              variants={fadeUp} custom={0.15}
              style={{
                display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2.5vw, 30px)',
                justifyContent: 'center',
                marginBottom: 'clamp(28px, 4vw, 60px)',
                marginTop: 'clamp(20px, 3vw, 60px)',
              }}
            >
              <Link to="/book-discovery" className="btn-primary"
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                <Zap size={20} /> Book a Free Consultation
              </Link>
              <a href="#all-projects" className="btn-secondary"
                onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                Explore Projects <ArrowDown size={20} />
              </a>
              <a href="https://github.com/WELLMIND-DataSolutions" target="_blank" rel="noopener noreferrer" className="btn-secondary"
                onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                <SquareCode size={20} /> View on GitHub
              </a>
            </motion.div>

          </motion.div>

          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .cs-hero-grid{text-align:center}
        }
      `}</style>


      {/* ═══ 3. MAIN LIGHT SECTION ═══ */}
      <section style={{
        position: 'relative', zIndex: 2,
        background: `linear-gradient(180deg, ${B.bgLight} 0%, #efefef 50%, #e5e5e5 100%)`,
        overflow: 'clip', padding: 0,
      }}>
        <SectionGridBg opacity={0.2} />
        <DataParticles count={12} />

        {/* ── 3a. FEATURED ── */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}
            >
              <SectionBadge>Top Selected</SectionBadge>
              <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>Featured Success Stories</h2>
              <p className="section-lead" style={{ maxWidth: 1200 }}>Hand-picked projects showcasing our highest impact across industries.</p>
            </motion.div>

            <div className="grid-projects">
              <AnimatePresence>
                {featuredStudies.map((cs, i) => (
                  <CaseStudyCard key={cs.slug} cs={cs} i={i} isFeatured={true} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* ── 3b. ALL PROJECTS ── */}
        <div id="all-projects" style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}
            >
              <SectionBadge>Portfolio</SectionBadge>
              <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>All Projects</h2>
              <p className="section-lead" style={{ maxWidth: 1200 }}>Filter by service to find the work most relevant to your challenge.</p>
            </motion.div>

            <UnifiedFilterBar
              activeService={activeService}
              onFilterClick={handleFilterClick}
            />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', marginBottom: 40 }}>
              {activeService ? (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 3vw, 28px)', borderRadius: 16, background: B.primaryDark, boxShadow: '0 8px 30px rgba(19,19,19,0.25)', border: `1px solid rgba(255,255,255,0.1)` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Filter size={18} color={B.accent} />
                    <span style={{ fontSize: 'var(--fs-card-body)', fontWeight: 700, color: B.white }}>Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
                  </div>
                  <button onClick={() => handleFilterClick('all')} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', color: B.white, fontWeight: 700, fontSize: 'var(--fs-small)', display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 'var(--radius-sm)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}>
                    <X size={14}/> Clear
                  </button>
                </div>
              ) : (
                <span style={{ fontSize: 'var(--fs-small)', fontWeight: 600, color: B.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Showing all projects</span>
              )}
            </motion.div>

            <motion.div layout className="grid-projects">
              <AnimatePresence mode="popLayout">
                {filtered.length > 0 ? filtered.map((cs, i) => (
                  <CaseStudyCard key={cs.slug} cs={cs} i={i} isFeatured={false} />
                )) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'clamp(60px, 8vw, 100px) 24px', background: 'rgba(255,255,255,0.50)', borderRadius: 'var(--radius-lg)', border: `1.5px dashed ${B.primaryBorder}` }}
                  >
                    <div style={{ fontSize: 48, marginBottom: 20 }}>🔍</div>
                    <h3 style={{ fontWeight: 700, fontSize: 'var(--fs-h3)', color: B.textMain, marginBottom: 12 }}>No results found</h3>
                    <p style={{ fontSize: 'var(--fs-card-body)', color: B.textMuted, marginBottom: 24 }}>No case studies match your current filter combination.</p>
                    <button onClick={() => handleFilterClick('all')} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 24px', borderRadius: 10, background: B.primary, color: B.white, border: 'none', fontWeight: 700, fontSize: 'var(--fs-small)', cursor: 'pointer', letterSpacing: '0.06em' }}>
                      <X size={16}/> Clear Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <SectionDivider />

        {/* ── 3c. CTA ── */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0', paddingTop: 'clamp(48px, 8vw, 100px)', paddingBottom: 'clamp(48px, 8vw, 100px)' }}>
          <div style={{ position: 'absolute', top: '15%', left: '8%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(57,57,57,0.10) 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(84,84,84,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />

          <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionBadge style={{ color: B.primary }}>Have a similar challenge?</SectionBadge>
              <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
                Let's Build Your{' '}<br className="hero-br" />
                <span style={{ background: 'linear-gradient(90deg, #4a4a4a 25%, #373737 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Success Story Next
                </span>
              </h2>
              <p className="section-lead" style={{ maxWidth: 1200, margin: '0 auto clamp(24px, 3.5vw, 48px)' }}>
                Book a free discovery call. We'll assess your challenge, give you honest feedback, and outline a clear path forward.
              </p>
              <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', marginBottom: 48 }}>
                <Link to="/book-discovery" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 56px)',
                  borderRadius: 'var(--radius-md)', background: `linear-gradient(135deg, ${B.action}, #393939)`,
                  color: B.white, fontFamily: 'var(--font-main)', fontWeight: 700,
                  fontSize: 'var(--fs-card-title)', letterSpacing: '0.10em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  boxShadow: `0 8px 40px ${B.actionGlow}, 0 0 80px rgba(84,84,84,0.15)`,
                  border: `1px solid rgba(84,84,84,0.40)`,
                }}>
                  <Zap size={18} /> Book a Free Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </section>
    </div>
  );
}