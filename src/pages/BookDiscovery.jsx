/**
 * BookDiscovery.jsx — WellMind Data Solutions
 * Minimal contact page: WhatsApp + LinkedIn only.
 * TODO: swap the contact-channels section for a Calendly embed once ready.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import { HeroGridBg, SectionGridBg } from '../components/BgGrid';
import { B, PX, fadeUp, DataParticles, SectionBadge } from '../theme';

// ─── Contact Channel Card ───────────────────────────────────────────────────
function ContactChannel({ icon, iconBg, glow, title, desc, href, buttonLabel }) {
  return (
    <div style={{
      height: '100%', boxSizing: 'border-box',
      padding: 'clamp(28px, 4vw, 44px) clamp(24px, 3.5vw, 36px)', borderRadius: 'var(--radius-xl)',
      background: B.cardBg, backdropFilter: 'blur(12px)',
      border: `2px solid ${B.primaryBorder}`,
      boxShadow: B.cardShadow,
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: '50%', flexShrink: 0,
        background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 8px 24px ${glow}`, marginBottom: 22,
      }}>
        {icon}
      </div>
      <h3 style={{ fontWeight: 700, fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: B.textMain, marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: B.textMid, lineHeight: 1.7, marginBottom: 26, maxWidth: 340 }}>{desc}</p>
      <a href={href} target="_blank" rel="noopener noreferrer" style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
        width: '100%', padding: 'clamp(12px, 1.6vw, 15px)', borderRadius: 11,
        background: iconBg, color: '#fff',
        fontWeight: 700, fontSize: 'clamp(12.5px, 1.5vw, 14px)', letterSpacing: '0.06em',
        textTransform: 'uppercase', textDecoration: 'none',
        boxShadow: `0 6px 20px ${glow}`, transition: 'opacity 0.2s, transform 0.2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
      >
        {buttonLabel} <ArrowRight size={15}/>
      </a>
    </div>
  );
}

const CONTACT_CHANNELS = [
  {
    icon: <FaWhatsapp size={30} color="#fff"/>, iconBg: '#25D366', glow: 'rgba(37,211,102,0.35)',
    title: 'WhatsApp',
    desc: "Send your name and what you'd like to discuss. We'll reply with time slots the same day.",
    href: 'https://wa.me/923236787087?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%2030-minute%20discovery%20call.',
    buttonLabel: 'Message Us on WhatsApp',
  },
  {
    icon: <FaLinkedin size={30} color="#fff"/>, iconBg: '#0A66C2', glow: 'rgba(10,102,194,0.35)',
    title: 'LinkedIn',
    desc: "Prefer LinkedIn? Send us a message there and we'll get back to you within a business day.",
    href: 'https://www.linkedin.com/company/wellmind-data-solutions',
    buttonLabel: 'Message Us on LinkedIn',
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function BookDiscovery() {
  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-main)' }}>

      {/* ═══ 1. HERO ═══ */}
      <section style={{
        position: 'relative', minHeight: '75vh',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', zIndex: 1,
        paddingTop: 'clamp(40px, 5vw, 50px)',
        background: B.heroBg,
      }}>
        <HeroGridBg opacity={0.3} />
        <div style={{ position: 'absolute', left: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(90deg, rgba(127,32,55,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(270deg, rgba(127,32,55,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }} />
        <DataParticles count={18} />

        <div style={{
          flex: 1, position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
          textAlign: 'center',
        }}>
          <motion.div
            initial="hidden" animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
            style={{ maxWidth: 1200, width: '100%', margin: '0 auto' }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge>Free Discovery Call</SectionBadge>
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
              <span style={{ color: B.primaryDark }}>Let's Talk About </span>
              <br className="hero-br" />
              <span style={{ background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Your Data Challenge.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={0.2}
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: 'clamp(0.9rem, 2.2vw, 1.5rem)',
                color: B.textMid,
                maxWidth: 1200, margin: '0 auto clamp(16px, 2.5vw, 36px)',
                letterSpacing: '0.02em', lineHeight: 1.6,
              }}
            >
              30 minutes. No pressure. No obligations.<br className="hero-br" />
              We'll assess your challenge, share honest feedback, and outline a clear path forward, for free.
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
              <a href="#contact-channels" className="btn-primary"
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                <Calendar size={20} /> Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 2. CONTACT CHANNELS — WhatsApp + LinkedIn ═══ */}
      <section id="contact-channels" style={{ padding: 'var(--sp-section) 0', position: 'relative', background: B.bgLight, zIndex: 1, overflow: 'hidden' }}>
        <SectionGridBg opacity={0.15} />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
            <SectionBadge>Get In Touch</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark }}>Book Your Free Call</h2>
            <p className="section-lead">Reach out on WhatsApp or LinkedIn, whichever works best for you.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(24px, 3vw, 40px)', maxWidth: 760, margin: '0 auto' }}>
            {CONTACT_CHANNELS.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <ContactChannel {...c} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
