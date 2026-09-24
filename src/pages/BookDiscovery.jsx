/**
 * BookDiscovery.jsx — WellMind Data Solutions — Fully Responsive
 * Updated to mirror ServicesAiMl.jsx design patterns
 * - Dark Section for Trust Pills
 * - Enhanced Typography
 * - Final CTA in Dark Theme
 */

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, MapPin, Clock, Zap, ArrowRight, ArrowDown, CheckCircle,
  Send, ChevronDown, AlertCircle, Calendar,
  Shield, Star, Users, TrendingUp,
} from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import { HeroGridBg, SectionGridBg } from '../components/BgGrid';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge, SectionDivider, CircuitBg } from '../theme';

// ─── Form Field ─────────────────────────────────────────────────────────────────
function Field({ label, required, children, error }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'block', fontWeight: 700,
        fontSize: 'clamp(12px, 1.4vw, 14px)',
        color: B.textMain, marginBottom: 8, letterSpacing: '0.02em',
      }}>
        {label}{required && <span style={{ color: B.secondary, marginLeft: 3 }}>*</span>}
      </label>
      {children}
      {error && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 6, fontSize: 12, color: B.secondary, fontWeight: 600 }}>
          <AlertCircle size={12}/> {error}
        </div>
      )}
    </div>
  );
}

const inputStyle = (focused) => ({
  width: '100%', padding: 'clamp(11px, 1.5vw, 14px) clamp(14px, 2vw, 16px)',
  borderRadius: 10,
  border: `1.5px solid ${focused ? B.action : B.primaryBorder}`,
  background: focused ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.70)',
  backdropFilter: 'blur(6px)',
  fontSize: 'clamp(13px, 1.5vw, 15px)', color: B.textMain,
  outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
  boxShadow: focused ? `0 0 0 3px ${B.actionLight}` : 'none',
  fontFamily: 'var(--font-main)',
});

function FormInput({ value, onChange, placeholder, type = 'text', name }) {
  const [focused, setFocused] = useState(false);
  return (
    <input type={type} name={name} value={value} onChange={onChange}
      placeholder={placeholder}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={inputStyle(focused)}
    />
  );
}

function FormSelect({ value, onChange, options, name }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <select name={name} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ ...inputStyle(focused), appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', paddingRight: 36 }}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <ChevronDown size={16} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: B.textMuted, pointerEvents: 'none' }}/>
    </div>
  );
}

function FormTextarea({ value, onChange, placeholder, name, rows = 5 }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea name={name} value={value} onChange={onChange}
      placeholder={placeholder} rows={rows}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{ ...inputStyle(focused), resize: 'vertical', minHeight: 110 }}
    />
  );
}

// ─── Contact Form ───────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', timeline: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(`Discovery Call Request — ${form.name || 'New Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || '—'}\nService: ${form.service}\nTimeline: ${form.timeline || '—'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:wellminddatasolutions@gmail.com?subject=${subject}&body=${body}`;
    await new Promise(r => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        style={{
          padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 40px)', borderRadius: 'var(--radius-xl)',
          background: B.cardBg, backdropFilter: 'blur(12px)',
          border: `2px solid ${B.action}40`,
          boxShadow: `0 12px 40px ${B.actionGlow}`,
          textAlign: 'center',
        }}
      >
        <div style={{
          width: 72, height: 72, borderRadius: '50%', margin: '0 auto 24px',
          background: B.actionLight, border: `2px solid ${B.actionBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <CheckCircle size={32} color={B.action}/>
        </div>
        <h3 style={{ fontWeight: 700, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: B.textMain, marginBottom: 12 }}>
          Your email app should have opened!
        </h3>
        <p style={{ fontSize: 'clamp(13px, 1.6vw, 16px)', color: B.textMid, lineHeight: 1.7, marginBottom: 28 }}>
          Just hit send from there. If nothing opened, email us directly at <strong>wellminddatasolutions@gmail.com</strong> — we'll get back to you within 24 hours on business days.
        </p>
        <Link to="/book-discovery" style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          padding: 'clamp(10px, 1.5vw, 13px) clamp(20px, 3vw, 28px)', borderRadius: 10,
          background: B.action, color: B.white,
          fontWeight: 700, fontSize: 'clamp(12px, 1.5vw, 14px)', letterSpacing: '0.08em',
          textTransform: 'uppercase', textDecoration: 'none',
          boxShadow: `0 4px 20px ${B.actionGlow}`,
        }}>
          <Zap size={14}/> Book a Call Instead <ArrowRight size={14}/>
        </Link>
      </motion.div>
    );
  }

  return (
    <div style={{
      padding: 'clamp(24px, 4vw, 40px)', borderRadius: 'var(--radius-xl)',
      background: B.cardBg, backdropFilter: 'blur(12px)',
      border: `2px solid ${B.primaryBorder}`,
      boxShadow: '0 8px 32px rgba(107, 46, 116,0.08)',
    }}>
      <h3 style={{ fontWeight: 700, fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', color: B.textMain, marginBottom: 6 }}>
        Send Us a Message
      </h3>
      <p style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', color: B.textMuted, marginBottom: 28 }}>
        We'll respond with a proposal or a call — whichever fits best.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 20px' }}>
          <Field label="Name" required>
            <FormInput name="name" value={form.name} onChange={handleChange} placeholder="Your name"/>
          </Field>
          <Field label="Email" required>
            <FormInput name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com"/>
          </Field>
        </div>

        <Field label="Company / Institution">
          <FormInput name="company" value={form.company} onChange={handleChange} placeholder="Optional"/>
        </Field>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 20px' }}>
          <Field label="Service Interested In" required>
            <FormSelect name="service" value={form.service} onChange={handleChange}
              options={[
                { value: '', label: 'Select a service…' },
                { value: 'bioinformatics', label: 'Bioinformatics & Genomics' },
                { value: 'healthcare-ai', label: 'Healthcare AI' },
                { value: 'ml', label: 'AI & Machine Learning' },
                { value: 'data-science', label: 'Data Science & Analytics' },
                { value: 'automation', label: 'Automation & Workflows' },
                { value: 'ui-ux', label: 'UI/UX Design' },
                { value: 'not-sure', label: 'Not sure yet' },
              ]}
            />
          </Field>
          <Field label="Project Timeline">
            <FormSelect name="timeline" value={form.timeline} onChange={handleChange}
              options={[
                { value: '', label: 'Select a timeline…' },
                { value: 'asap', label: 'ASAP' },
                { value: '1-3-months', label: '1–3 months' },
                { value: '3-6-months', label: '3–6 months' },
                { value: 'just-exploring', label: 'Just exploring' },
              ]}
            />
          </Field>
        </div>

        <Field label="Tell us about your project" required>
          <FormTextarea name="message" value={form.message} onChange={handleChange}
            placeholder="Describe your challenge, data, timeline, and any other relevant details…"
            rows={5}
          />
        </Field>

        <button type="submit" disabled={loading} style={{
          width: '100%', padding: 'clamp(13px, 2vw, 16px)',
          borderRadius: 11, background: loading ? 'rgba(11, 124, 147,0.6)' : `linear-gradient(135deg, ${B.action}, #0A5F75)`,
          color: B.white, border: 'none', cursor: loading ? 'wait' : 'pointer',
          fontWeight: 700, fontSize: 'clamp(13px, 1.5vw, 15px)', letterSpacing: '0.10em',
          textTransform: 'uppercase', fontFamily: 'var(--font-main)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
          boxShadow: loading ? 'none' : `0 6px 28px ${B.actionGlow}`,
          transition: 'opacity 0.2s, transform 0.2s',
        }}
          onMouseEnter={e => { if (!loading) { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
        >
          {loading ? (
            <><div style={{ width: 16, height: 16, border: `2px solid ${B.white}40`, borderTop: `2px solid ${B.white}`, borderRadius: '50%', animation: 'wmSpin 0.8s linear infinite' }}/> Sending…</>
          ) : (
            <><Send size={15}/> Send Message <ArrowRight size={15}/></>
          )}
        </button>
      </form>
    </div>
  );
}

// ─── Instant Booking (WhatsApp) ───────────────────────────────────────────────
function InstantBooking() {
  return (
    <div style={{
      height: '100%', boxSizing: 'border-box',
      padding: 'clamp(22px, 3.5vw, 32px)', borderRadius: 'var(--radius-xl)',
      background: B.cardBg, backdropFilter: 'blur(12px)',
      border: `2px solid ${B.actionBorder}`,
      boxShadow: `0 8px 32px ${B.actionGlow}20`,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <div style={{ width: 'clamp(40px, 4.5vw, 46px)', height: 'clamp(40px, 4.5vw, 46px)', borderRadius: 13, background: B.actionLight, border: `1.5px solid ${B.actionBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Clock size={20} color={B.action}/>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: B.textMain }}>Book a Free 30-Min Call</div>
          <div style={{ fontSize: 'clamp(12px, 1.4vw, 13.5px)', color: B.textMuted, marginTop: 2 }}>We'll lock in a time that works for you.</div>
        </div>
      </div>

      {/* Compact WhatsApp panel — icon + copy side by side, no oversized centered block */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        borderRadius: 14, border: `1.5px solid ${B.actionBorder}`,
        background: `linear-gradient(135deg, ${B.actionLight}, rgba(11, 124, 147,0.04))`,
        padding: 'clamp(16px, 2.5vw, 20px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
          <div style={{
            width: 40, height: 40, flexShrink: 0,
            borderRadius: '50%', background: '#25D366',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
          }}>
            <FaWhatsapp size={19} color="#fff"/>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', color: B.textMain, marginBottom: 5 }}>
              Fastest way to book — WhatsApp
            </div>
            <div style={{ fontSize: 'clamp(12.5px, 1.4vw, 13.5px)', color: B.textMid, lineHeight: 1.6 }}>
              Send your name and what you'd like to discuss — we'll reply with time slots the same day.
            </div>
          </div>
        </div>
        <a href="https://wa.me/923236787087?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%2030-minute%20discovery%20call." target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            width: '100%', padding: 'clamp(11px, 1.5vw, 13px)', borderRadius: 10,
            background: '#25D366', color: '#fff',
            fontWeight: 700, fontSize: 'clamp(12px, 1.5vw, 13.5px)', letterSpacing: '0.06em',
            textTransform: 'uppercase', textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(37,211,102,0.30)', transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
        >
          <FaWhatsapp size={14}/> Message Us on WhatsApp
        </a>
      </div>

      <div style={{ marginTop: 14, flexShrink: 0, padding: 'clamp(11px, 1.8vw, 14px)', borderRadius: 'var(--radius-md)', background: B.primaryLight, border: `1px solid ${B.primaryBorder}`, display: 'flex', gap: 9, alignItems: 'flex-start' }}>
        <CheckCircle size={15} color={B.primary} style={{ flexShrink: 0, marginTop: 1 }}/>
        <div style={{ fontSize: 'clamp(11.5px, 1.3vw, 13px)', color: B.textMid, lineHeight: 1.55 }}>
          <strong style={{ color: B.textMain }}>Free, no-obligation call.</strong> We'll discuss your project and tell you honestly if we're the right fit.
        </div>
      </div>
    </div>
  );
}

// ─── Direct contact items ───────────────────────────────────────────────────────
function DirectItem({ icon, label, value, href, badge }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: 14,
        padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2.5vw, 22px)', borderRadius: 14,
        background: hovered ? 'rgba(255,255,255,0.88)' : B.cardBg,
        backdropFilter: 'blur(8px)',
        border: `1.5px solid ${hovered ? B.action : B.glassBorder}`,
        boxShadow: hovered ? `0 8px 28px ${B.actionGlow}` : B.cardShadow,
        transition: 'all 0.28s ease', marginBottom: 10,
      }}>
        <div style={{
          width: 'clamp(38px, 4vw, 44px)', height: 'clamp(38px, 4vw, 44px)', borderRadius: 11, flexShrink: 0,
          background: hovered ? B.action : B.actionLight,
          border: `1.5px solid ${B.actionBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: hovered ? B.white : B.action, transition: 'all 0.25s ease',
        }}>
          {React.cloneElement(icon, { size: 18 })}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 'clamp(10px, 1.2vw, 12px)', fontWeight: 700, color: B.textMuted, textTransform: 'uppercase', letterSpacing: '0.10em', marginBottom: 4 }}>
            {label}
            {badge && (
              <span style={{ marginLeft: 8, padding: '2px 8px', borderRadius: 99, background: B.accentLight, border: `1px solid ${B.accentBorder}`, color: B.accent, fontSize: 9.5, fontWeight: 700, letterSpacing: '0.08em' }}>
                {badge}
              </span>
            )}
          </div>
          <div style={{ fontSize: 'clamp(13px, 1.6vw, 15px)', fontWeight: 600, color: hovered ? B.action : B.textMain, transition: 'color 0.2s' }}>
            {value}
          </div>
        </div>
        <ArrowRight size={14} color={B.textMuted} style={{ marginTop: 4, transform: hovered ? 'translateX(3px)' : 'none', transition: 'transform 0.25s', flexShrink: 0 }}/>
      </div>
    </a>
  );
}

// ─── Response Promise Strip ───────────────────────────────────────────────────
function ResponsePromise() {
  const items = [
    { icon: <Clock size={16}/>, text: '24-hour response on business days' },
    { icon: <CheckCircle size={16}/>, text: 'Proposal within 48 hours of discovery call' },
    { icon: <Mail size={16}/>, text: 'Check spam if you haven\'t heard from us' },
  ];
  return (
    <div style={{
      padding: 'clamp(20px, 3vw, 28px) clamp(18px, 3vw, 28px)', borderRadius: 18,
      background: B.cardBg, backdropFilter: 'blur(10px)',
      border: `1.5px solid ${B.primaryBorder}`, boxShadow: B.cardShadow,
    }}>
      <div style={{ fontWeight: 800, fontSize: 'clamp(10px, 1.3vw, 13px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: B.action, marginBottom: 18 }}>
        ⏱ Response Time Promise
      </div>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: i < items.length - 1 ? 14 : 0 }}>
          <span style={{ color: B.action, flexShrink: 0 }}>{item.icon}</span>
          <span style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', color: B.textMid, lineHeight: 1.5 }}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Trust Badges ─────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  { icon: <Shield size={15}/>,    label: 'No Hidden Fees',          accent: B.action    },
  { icon: <Users size={15}/>,     label: '20 Real Projects Delivered', accent: '#3AB896'   },
  { icon: <Star size={15}/>,      label: '6 Industries Served',    accent: B.accent    },
  { icon: <TrendingUp size={15}/>,label: 'Fixed-Fee Guarantee',     accent: B.secondary },
];

// ─── Direct contact data ──────────────────────────────────────────────────────
const DIRECT_CONTACTS = [
  { icon: <Mail size={18}/>,      label: 'Email',    value: 'wellminddatasolutions@gmail.com', href: 'mailto:wellminddatasolutions@gmail.com' },
  { icon: <FaWhatsapp size={18}/>,label: 'WhatsApp',  value: '+92 323 6787087', href: 'https://wa.me/923236787087', badge: 'Fastest for PK clients' },
  { icon: <FaLinkedin size={18}/>,label: 'LinkedIn',  value: 'WellMind Data Solutions', href: 'https://www.linkedin.com/company/wellmind-data-solutions' },
  { icon: <MapPin size={18}/>,    label: 'Location',  value: 'Based in Pakistan — Working globally', href: '#' },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function BookDiscovery() {
  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-main)' }}>

      {/* ═══ 1. HERO ═══ */}
      <section style={{
        position: 'relative', minHeight: '85vh',
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
              We'll assess your challenge, share honest feedback, and outline a clear path forward — for free.
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
              <a href="#book-section" className="btn-primary"
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                <Calendar size={20} /> Book a Free Consultation
              </a>
              <a href="#send-message" className="btn-secondary"
                onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                Send a Message <ArrowDown size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 2. TRUST STRIP (dark) ═══ */}
      <section style={{ padding: 'clamp(28px, 4vw, 44px) 0', position: 'relative', zIndex: 1, background: `linear-gradient(135deg, #170F22 0%, #140B20 100%)`, overflow: 'hidden' }}>
        <DataParticles count={10} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(16px, 3vw, 40px)' }}>
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: item.accent }}>{item.icon}</span>
              <span style={{ fontSize: 'clamp(12px, 1.4vw, 14px)', fontWeight: 700, color: B.textDarkMid, letterSpacing: '0.03em' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 3. BOOK SECTION — Instant Booking + Direct Contact ═══ */}
      <section id="book-section" style={{ padding: 'var(--sp-section) 0', position: 'relative', background: B.bgLight, zIndex: 1, overflow: 'hidden' }}>
        <SectionGridBg opacity={0.15} />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
            <SectionBadge>Get In Touch</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark }}>Book Your Free Call</h2>
            <p className="section-lead">Pick whichever way works best for you.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(24px, 3vw, 40px)', maxWidth: 1100, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ height: '100%' }}>
              <InstantBooking />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: B.textMain, marginBottom: 14 }}>Or reach us directly</h3>
                {DIRECT_CONTACTS.map((c, i) => <DirectItem key={i} {...c} />)}
              </div>
              <ResponsePromise />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 4. SEND MESSAGE — Contact Form ═══ */}
      <section id="send-message" style={{ padding: 'var(--sp-section) 0', position: 'relative', background: `linear-gradient(180deg, ${B.bgLight} 0%, #EDE7F6 100%)`, zIndex: 1, overflow: 'hidden' }}>
        <SectionGridBg opacity={0.16} />
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
            <SectionBadge>Prefer to Write?</SectionBadge>
            <h2 className="section-h2" style={{ color: B.primaryDark }}>Send Us a Message</h2>
            <p className="section-lead">Fill this out and it'll open a pre-filled email straight to our inbox.</p>
          </motion.div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}