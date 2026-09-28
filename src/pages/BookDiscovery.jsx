/**
 * BookDiscovery.jsx — WellMind Data Solutions
 * Minimal contact page: a "Send us a message" form (mailto-based, no backend)
 * plus small WhatsApp / LinkedIn icon links for people who'd rather message directly.
 * TODO: swap the contact-channels section for a Calendly embed once ready.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import { HeroGridBg, SectionGridBg } from '../components/BgGrid';
import { B, PX, fadeUp, DataParticles, SectionBadge } from '../theme';

const CONTACT_EMAIL = 'contact@wellminddatasolutions.com';

const SOCIAL_LINKS = [
  {
    icon: <FaWhatsapp size={19} />, bg: '#25D366', label: 'WhatsApp',
    href: 'https://wa.me/923236787087?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%2030-minute%20discovery%20call.',
  },
  {
    icon: <FaLinkedin size={19} />, bg: '#0A66C2', label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/wellmind-data-solutions',
  },
];

// ─── Form field styling (matches CostCalculator's input language) ─────────────
const inputStyle = {
  width: '100%',
  padding: 'clamp(11px,1.6vw,14px) clamp(14px,1.8vw,16px) clamp(11px,1.6vw,14px) 44px',
  borderRadius: 12,
  border: `1.5px solid ${B.primaryBorder}`,
  background: 'rgba(255,255,255,0.75)',
  color: B.textMain,
  fontFamily: 'var(--font-main)',
  fontSize: 'clamp(0.85rem,1.3vw,0.95rem)',
  fontWeight: 600,
  outline: 'none',
  transition: 'border-color .25s ease, box-shadow .25s ease',
};

function Field({ label, icon, children }) {
  return (
    <div style={{ marginBottom: 20, position: 'relative' }}>
      <label style={{ display: 'block', fontWeight: 700, fontSize: 'clamp(0.78rem,1.1vw,0.86rem)', color: B.primaryDark, marginBottom: 8, letterSpacing: '0.01em' }}>
        {label}
      </label>
      <span style={{ position: 'absolute', left: 14, top: 42, color: B.primaryMid, pointerEvents: 'none' }}>
        {icon}
      </span>
      {children}
    </div>
  );
}

// ─── Send Us a Message form (mailto-based, no backend required) ───────────────
function MessageForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const focusStyle = key => ({
    ...inputStyle,
    borderColor: focused === key ? B.action : B.primaryBorder,
    boxShadow: focused === key ? `0 0 0 4px ${B.actionLight}` : 'none',
  });

  return (
    <form onSubmit={handleSubmit} style={{
      padding: 'clamp(28px, 4vw, 44px) clamp(24px, 3.5vw, 40px)', borderRadius: 'var(--radius-xl)',
      background: B.cardBg, backdropFilter: 'blur(12px)',
      border: `2px solid ${B.primaryBorder}`, boxShadow: B.cardShadow,
    }}>
      <Field label="Your Name" icon={<User size={17} />}>
        <input
          name="name" value={form.name} onChange={handleChange} required
          placeholder="Jane Doe"
          onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
          style={focusStyle('name')}
        />
      </Field>

      <Field label="Your Email" icon={<Mail size={17} />}>
        <input
          type="email" name="email" value={form.email} onChange={handleChange} required
          placeholder="jane@company.com"
          onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
          style={focusStyle('email')}
        />
      </Field>

      <Field label="Your Message" icon={<MessageSquare size={17} />}>
        <textarea
          name="message" value={form.message} onChange={handleChange} required
          placeholder="Tell us a bit about your project or challenge…"
          rows={5}
          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
          style={{ ...focusStyle('message'), resize: 'vertical', minHeight: 120, fontWeight: 500, lineHeight: 1.6 }}
        />
      </Field>

      <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', border: 'none' }}>
        {sent ? <>Opening Your Email App <CheckCircle2 size={18} /></> : <>Send Message <Send size={17} /></>}
      </button>

      <p style={{ fontSize: 12.5, color: B.textMid, textAlign: 'center', marginTop: 14, lineHeight: 1.6 }}>
        This opens your email app with the message pre-filled, addressed to {CONTACT_EMAIL}.
      </p>
    </form>
  );
}

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

      {/* ═══ 2. SEND US A MESSAGE — form + small WhatsApp/LinkedIn icons ═══ */}
      <section id="contact-channels" style={{ padding: 'var(--sp-section) 0', position: 'relative', background: B.bgLight, zIndex: 1, overflow: 'hidden' }}>
        <SectionGridBg opacity={0.15} />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
            <SectionBadge>Get In Touch</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark }}>Send Us a Message</h2>
            <p className="section-lead">Fill out the form and we'll get back to you within a business day.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ maxWidth: 560, margin: '0 auto' }}>
            <MessageForm />

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '28px 0 20px' }}>
              <div style={{ flex: 1, height: 1, background: B.primaryBorder }} />
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: B.textMid, whiteSpace: 'nowrap' }}>
                Or reach us directly
              </span>
              <div style={{ flex: 1, height: 1, background: B.primaryBorder }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  title={s.label}
                  style={{
                    width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                    background: s.bg, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 4px 14px ${s.bg}55`, transition: 'transform 0.2s, opacity 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.opacity = '0.88'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.opacity = '1'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
