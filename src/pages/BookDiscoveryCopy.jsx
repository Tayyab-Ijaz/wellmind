/**
 * BookDiscovery.jsx — WellMind Data Solutions — Fully Responsive
 * Updated to mirror ServicesAiMl.jsx design patterns
 * - Dark Section for Trust Pills
 * - Dark Hover Effects on Process Cards
 * - Enhanced Typography
 * - Final CTA in Dark Theme
 * ✅ FIX: ProcessTimeline grid — 2 cards per row, proper gaps
 */

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, MapPin, Clock, Zap, ArrowRight, ArrowDown, CheckCircle,
  Send, ChevronDown, AlertCircle, Calendar, MessageSquare,
  Shield, Star, Users, TrendingUp, Lightbulb, Target,
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
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
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
          Message sent!
        </h3>
        <p style={{ fontSize: 'clamp(13px, 1.6vw, 16px)', color: B.textMid, lineHeight: 1.7, marginBottom: 28 }}>
          We'll get back to you within 24 hours on business days. Check your spam folder if you don't hear from us.
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
          <Field label="Project Budget" required>
            <FormSelect name="budget" value={form.budget} onChange={handleChange}
              options={[
                { value: '', label: 'Select a range…' },
                { value: 'under-1k', label: 'Under $1,000' },
                { value: '1k-5k', label: '$1,000 – $5,000' },
                { value: '5k-15k', label: '$5,000 – $15,000' },
                { value: '15k+', label: '$15,000+' },
                { value: 'retainer', label: 'Retainer / Ongoing' },
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

// ─── Calendly embed ─────────────────────────────────────────────────────────────
function CalendlyEmbed() {
  return (
    <div style={{
      padding: 'clamp(24px, 4vw, 40px)', borderRadius: 'var(--radius-xl)',
      background: B.cardBg, backdropFilter: 'blur(12px)',
      border: `2px solid ${B.actionBorder}`,
      boxShadow: `0 8px 32px ${B.actionGlow}20`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
        <div style={{ width: 'clamp(44px, 5vw, 52px)', height: 'clamp(44px, 5vw, 52px)', borderRadius: 14, background: B.actionLight, border: `1.5px solid ${B.actionBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Clock size={22} color={B.action}/>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: B.textMain }}>Book a Free 30-Min Call</div>
          <div style={{ fontSize: 'clamp(12px, 1.4vw, 14px)', color: B.textMuted, marginTop: 3 }}>Pick a time that works for you. No back-and-forth.</div>
        </div>
      </div>

      <div style={{
        borderRadius: 16, border: `1.5px dashed ${B.actionBorder}`,
        background: `linear-gradient(135deg, ${B.actionLight}, rgba(11, 124, 147,0.05))`,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 36px)',
        textAlign: 'center', minHeight: 280,
      }}>
        <div style={{
          width: 'clamp(56px, 6vw, 68px)', height: 'clamp(56px, 6vw, 68px)',
          borderRadius: '50%', background: B.action,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 20, boxShadow: `0 8px 28px ${B.actionGlow}`,
        }}>
          <Calendar size={26} color={B.white}/>
        </div>
        <div style={{ fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: B.textMain, marginBottom: 10 }}>
          Calendly Embed Goes Here
        </div>
        <div style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: B.textMid, lineHeight: 1.7, marginBottom: 28, maxWidth: 340 }}>
          Replace this block with your Calendly or Cal.com inline widget to let clients pick a slot instantly.
        </div>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: 'clamp(11px, 1.5vw, 13px) clamp(20px, 3vw, 28px)', borderRadius: 10,
            background: B.action, color: B.white,
            fontWeight: 700, fontSize: 'clamp(12px, 1.5vw, 14px)', letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
            boxShadow: `0 4px 20px ${B.actionGlow}`, transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <Zap size={14}/> Open Scheduling Link
        </a>
      </div>

      <div style={{ marginTop: 18, padding: 'clamp(12px, 2vw, 16px)', borderRadius: 'var(--radius-md)', background: B.primaryLight, border: `1px solid ${B.primaryBorder}`, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <CheckCircle size={16} color={B.primary} style={{ flexShrink: 0, marginTop: 1 }}/>
        <div style={{ fontSize: 'clamp(12px, 1.4vw, 13.5px)', color: B.textMid, lineHeight: 1.6 }}>
          <strong style={{ color: B.textMain }}>Free, no-obligation call.</strong> We'll discuss your project, share relevant experience, and tell you honestly if we're the right fit.
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

// ─── Process Steps Data ───────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    num: '01', icon: <Calendar size={22}/>, color: B.action, bg: B.actionLight, border: B.actionBorder,
    title: 'Book Your Call',
    desc: 'Pick a free 30-minute slot. No preparation needed — just come as you are.',
  },
  {
    num: '02', icon: <MessageSquare size={22}/>, color: B.primary, bg: B.primaryLight, border: B.primaryBorder,
    title: 'Discovery Session',
    desc: 'We listen, ask the right questions, and map out your challenge with you.',
  },
  {
    num: '03', icon: <Lightbulb size={22}/>, color: B.accent, bg: B.accentLight, border: B.accentBorder,
    title: 'Honest Assessment',
    desc: 'We tell you exactly what\'s feasible, what it costs, and if we\'re the right fit.',
  },
  {
    num: '04', icon: <Target size={22}/>, color: B.secondary, bg: B.secondaryLight, border: 'rgba(147, 33, 63,0.25)',
    title: 'Fixed-Fee Proposal',
    desc: 'A clear scope, timeline and price. No scope creep, no surprises.',
  },
];

// ─── Step Card ────────────────────────────────────────────────────────────────
function StepCard({ step }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: 'clamp(28px, 3.5vw, 44px) clamp(24px, 3vw, 36px)',
        borderRadius: 'var(--radius-xl)',
        textAlign: 'center',
        background: hovered ? step.color : B.cardBg,
        backdropFilter: 'blur(8px)',
        border: `3px solid ${hovered ? step.color : B.primaryBorder}`,
        boxShadow: hovered ? `0 16px 40px -10px ${step.color}50` : B.cardShadow,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: 'default',
      }}
    >
      {/* Step number badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 14px', borderRadius: 99, marginBottom: 20,
        background: hovered ? 'rgba(255,255,255,0.22)' : step.bg,
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.35)' : step.border}`,
        fontSize: 'clamp(10px, 1.2vw, 12px)', fontWeight: 800,
        letterSpacing: '0.12em', color: hovered ? '#fff' : step.color,
        transition: 'all 0.35s ease',
      }}>
        STEP {step.num}
      </div>

      {/* Icon */}
      <div style={{
        width: 'clamp(56px, 6vw, 68px)',
        height: 'clamp(56px, 6vw, 68px)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 22,
        background: hovered ? '#fff' : `${step.color}15`,
        color: step.color,
        transition: 'all 0.35s ease',
        boxShadow: hovered ? `0 10px 28px ${step.color}45` : 'none',
        flexShrink: 0,
      }}>
        {React.cloneElement(step.icon, { size: 26 })}
      </div>

      {/* Title */}
      <h3 style={{
        fontWeight: 700,
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: hovered ? '#fff' : B.textMain,
        marginBottom: 14,
        lineHeight: 1.25,
        transition: 'color 0.35s ease',
      }}>
        {step.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
        color: hovered ? 'rgba(255,255,255,0.85)' : B.textMid,
        lineHeight: 1.75,
        margin: 0,
        transition: 'color 0.35s ease',
      }}>
        {step.desc}
      </p>
    </div>
  );
}

// ─── ✅ FIXED: ProcessTimeline — 2 per row, proper gap ───────────────────────
function ProcessTimeline() {
  return (
    <div style={{
      display: 'grid',
      // 2 columns on desktop, 1 on mobile
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'clamp(20px, 3vw, 32px)',
    }}>
      {PROCESS_STEPS.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: '100%' }}
        >
          <StepCard step={step} />
        </motion.div>
      ))}
    </div>
  );
}

// ─── Trust Badges ─────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  { icon: <Shield size={15}/>,    label: 'No Hidden Fees',          accent: B.action    },
  { icon: <Users size={15}/>,     label: 'Clients in 5+ Countries', accent: '#3AB896'   },
  { icon: <Star size={15}/>,      label: '1 Nature Publication',    accent: B.accent    },
  { icon: <TrendingUp size={15}/>,label: 'Fixed-Fee Guarantee',     accent: B.secondary },
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

      {/* ═══ 2. DARK SECTION: TRUST PILLS ═══ */}
      <section style={{
        padding: 'var(--sp-section) 0',
        position: 'relative', zIndex: 1,
        background: 'linear-gradient(135deg, #170F22 0%, #140B20 100%)',
        display: 'flex', alignItems: 'center',
      }}>
        <CircuitBg opacity={0.08}/>
        <DataParticles count={12} dark/>

        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              padding: '6px 20px', borderRadius: 99,
              background: 'rgba(11, 124, 147,0.15)', color: B.action,
              fontSize: 'clamp(10px, 1.3vw, 13px)', fontWeight: 800,
              textTransform: 'uppercase', letterSpacing: '0.18em',
              border: '1px solid rgba(11, 124, 147,0.30)',
              marginBottom: 'clamp(24px, 4vw, 40px)', display: 'inline-block',
            }}>
              Why Book With Us
            </div>

            <div style={{
              display: 'flex', flexWrap: 'wrap',
              gap: 'clamp(14px, 2vw, 24px)',
              justifyContent: 'center',
            }}>
              {TRUST_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: 'clamp(12px, 1.5vw, 14px) clamp(20px, 2.5vw, 28px)',
                    fontSize: 'clamp(13px, 1.8vw, 16px)', fontWeight: 600,
                    color: B.textDarkMid,
                    background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    animation: `wmFloat ${3 + i * 0.5}s ease-in-out infinite`,
                  }}
                >
                  <div style={{ width: 24, height: 24, borderRadius: 6, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${item.accent}20` }}>
                    {React.cloneElement(item.icon, { size: 14, color: item.accent, strokeWidth: 2.5 })}
                  </div>
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. LIGHT SECTION: PROCESS + BOOKING + CONTACT ═══ */}
      <section style={{
        position: 'relative', zIndex: 2,
        background: `linear-gradient(180deg, ${B.bgLight} 0%, #F2EBF9 50%, #E8E1F0 100%)`,
        overflow: 'clip', padding: 0,
      }}>
        <SectionGridBg opacity={0.2} />
        <DataParticles count={10} />

        {/* ── 3a. PROCESS TIMELINE ── */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 60px)' }}
            >
              <SectionBadge>How It Works</SectionBadge>
              <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>
                From First Contact to Working Solution
              </h2>
              <p className="section-lead" style={{ maxWidth: 1200 }}>
                A simple, transparent process — designed so you always know what's happening and why.
              </p>
            </motion.div>

            {/* ✅ FIXED: 2-column grid with proper gap */}
            <ProcessTimeline />

            {/* Connector hint between rows */}
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              gap: 12, marginTop: 'clamp(28px, 4vw, 40px)',
              color: B.textMuted, fontSize: 'clamp(12px, 1.4vw, 14px)', fontWeight: 600,
            }}>
              <div style={{ height: 1, width: 60, background: `linear-gradient(to right, transparent, ${B.primaryBorder})` }}/>
              <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 11 }}>Then we get to work</span>
              <div style={{ height: 1, width: 60, background: `linear-gradient(to left, transparent, ${B.primaryBorder})` }}/>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* ── 3b. CALENDLY BOOKING ── */}
        <div id="book-section" style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 52px)' }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16,
                padding: '7px 18px', borderRadius: 99,
                background: B.actionLight, border: `1.5px solid ${B.actionBorder}`,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.action, animation: 'wmPulse 2s ease-in-out infinite' }}/>
                <span style={{ fontSize: 'clamp(10px, 1.3vw, 13px)', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: B.action }}>
                  Fastest Option
                </span>
              </div>
              <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>
                Book a Free 30-Min Consultation
              </h2>
              <p className="section-lead" style={{ maxWidth: 1200 }}>
                Pick a time that works. No back-and-forth email. No phone tag.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}
              style={{ maxWidth: 780, margin: '0 auto' }}
            >
              <CalendlyEmbed />
            </motion.div>
          </div>
        </div>

        <SectionDivider />

        {/* ── 3c. FORM + DIRECT CONTACT ── */}
        <div id="send-message" style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 60px)' }}
            >
              <SectionBadge>Other Ways to Reach Us</SectionBadge>
              <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>
                Prefer to Write First?
              </h2>
              <p className="section-lead" style={{ maxWidth: 1200 }}>
                Drop us a message or reach out directly — we respond to every inquiry, no exceptions.
              </p>
            </motion.div>

            {/* ✅ FIXED: inline 2-column grid — no CSS class dependency */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'start',
            }}>
              {/* Left — Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <ContactForm />
              </motion.div>

              {/* Right — Direct Links + Response Promise */}
              <motion.div
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}
                style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
              >
                <DirectItem icon={<Mail/>}       label="Email"     value="wellminddatasolutions@gmail.com"        href="mailto:wellminddatasolutions@gmail.com"/>
                <DirectItem icon={<FaWhatsapp/>} label="WhatsApp"  value="+92 323 6787087"              href="https://wa.me/923236787087" badge="Fastest for PK clients"/>
                <DirectItem icon={<FaLinkedin/>} label="LinkedIn"  value="WellMind Data Solutions"       href="https://www.linkedin.com/company/wellmind-data-solutions"/>
                <DirectItem icon={<MapPin/>}     label="Location"  value="Based in Pakistan — Working globally" href="#"/>
                <div style={{ marginTop: 16 }}>
                  <ResponsePromise />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. FINAL CTA — DARK ═══ */}
      <section style={{
        padding: `clamp(60px, 10vw, 120px) 0`,
        position: 'relative', overflow: 'hidden', zIndex: 1,
        background: 'linear-gradient(135deg, #170F22 0%, #140B20 100%)',
        display: 'flex', alignItems: 'center',
      }}>
        <CircuitBg opacity={0.07}/>
        <DataParticles count={14} dark/>

        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 46, 116,0.15) 0%, transparent 70%)`, pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(11, 124, 147,0.15) 0%, transparent 70%)`, pointerEvents: 'none' }}/>

        <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge dark style={{ color: B.textDarkMuted }}>Not Ready to Book Yet?</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 20 }}>
              Explore Our Work First.<br />
              <span style={{ background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Then Reach Out.
              </span>
            </h2>
            <p className="section-lead dark" style={{ maxWidth: 1200, margin: '0 auto clamp(24px, 3.5vw, 48px)' }}>
              See the real projects we've shipped, the results we've achieved, and the clients we've served.
            </p>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link to="/case-studies" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 56px)',
                borderRadius: 'var(--radius-md)',
                background: `linear-gradient(135deg, ${B.action}, #0A5F75)`,
                color: B.white, fontFamily: 'var(--font-main)', fontWeight: 700,
                fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', letterSpacing: '0.10em',
                textTransform: 'uppercase', textDecoration: 'none',
                boxShadow: `0 8px 40px ${B.actionGlow}, 0 0 80px rgba(11, 124, 147,0.15)`,
                border: `1px solid rgba(11, 124, 147,0.40)`,
              }}>
                <TrendingUp size={18} /> View Case Studies <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}