/**
 * Footer.jsx — WellMind Data Solutions — Fully Responsive
 */

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import LogoImg from '../assets/WellMindDataSolutions-white-logo.png';
import { B } from '../theme';

function FooterColumn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function BookDiscoveryBtn({ style = {} }) {
  const btnRef  = useRef(null);
  const fillRef = useRef(null);
  const isIn    = useRef(false);
  const rafId   = useRef(null);

  const getOrigin = (e, snap = false) => {
    const btn = btnRef.current; if (!btn) return { x: 50, y: 50 };
    const rect = btn.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width)  * 100;
    let y = ((e.clientY - rect.top)  / rect.height) * 100;
    if (snap) { x = x < 33 ? 0 : x > 67 ? 100 : 50; y = y < 33 ? 0 : y > 67 ? 100 : 50; }
    return { x, y };
  };

  const handleMouseEnter = (e) => {
    isIn.current = true;
    const fill = fillRef.current; if (!fill) return;
    const { x, y } = getOrigin(e, true);
    fill.style.transition = 'none'; fill.style.opacity = '1';
    fill.style.clipPath = `circle(0% at ${x}% ${y}%)`; fill.style.background = B.action;
    void fill.offsetWidth;
    fill.style.transition = 'clip-path 0.72s cubic-bezier(0.16, 1, 0.3, 1)';
    fill.style.clipPath = `circle(150% at ${x}% ${y}%)`;
  };

  const handleMouseMove = (e) => {
    if (!isIn.current) return;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const fill = fillRef.current; if (!fill) return;
      const { x, y } = getOrigin(e, false);
      fill.style.transition = 'clip-path 0.85s cubic-bezier(0.16, 1, 0.3, 1)';
      fill.style.clipPath = `circle(150% at ${x}% ${y}%)`;
    });
  };

  const handleMouseLeave = (e) => {
    isIn.current = false;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const fill = fillRef.current; if (!fill) return;
    const { x, y } = getOrigin(e, true);
    fill.style.transition = 'clip-path 0.55s cubic-bezier(0.4, 0, 1, 1), opacity 0.18s ease 0.38s';
    fill.style.clipPath = `circle(0% at ${x}% ${y}%)`; fill.style.opacity = '0';
  };

  return (
    <Link
      to="/book-discovery"
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'transparent', color: B.secondaryMuted,
        border: `1px solid ${B.actionSoft}`, borderRadius: 'var(--radius-sm)',
        padding: 'clamp(9px, 1.5vw, 11px) clamp(14px, 2vw, 20px)',
        fontSize: 'clamp(13px, 1.5vw, 20px)', fontWeight: 700,
        fontFamily: 'var(--font-main)',
        textDecoration: 'none', overflow: 'hidden', transition: 'border-color 0.25s ease',
        ...style,
      }}
    >
      <span ref={fillRef} aria-hidden="true" style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        background: B.action, opacity: 0, clipPath: 'circle(0% at 50% 50%)', pointerEvents: 'none',
      }}/>
      <span className="wm-disc-btn-content" style={{
        position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 6,
        color: B.actionSoft, transition: 'color 0.20s ease 0.15s',
      }}>
        Book Discovery Call
      </span>
    </Link>
  );
}

export default function Footer() {
  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: true });

  return (
    <footer style={{
      background: `linear-gradient(180deg, ${B.darkBg} 0%, ${B.voidBg} 100%)`,
      borderTop: `2px solid ${B.actionMid}`,
      position: 'relative', overflow: 'hidden',
      paddingTop: 'clamp(32px, 4vw, 48px)',
      paddingBottom: 32,
    }}>
      {/* Background geometry */}
      <div style={{ position: 'absolute', top: -120, right: -100, width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, rgba(147, 33, 63,0.06), transparent 65%)`, pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(71,35,79,0.30), transparent 65%)`, pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(71,35,79,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(71,35,79,0.06) 1px, transparent 1px)`, backgroundSize: '48px 48px' }}/>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)', position: 'relative' }}>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
          gap: 'clamp(28px, 4vw, 48px)',
          marginBottom: 'clamp(32px, 5vw, 56px)',
        }}>

          {/* Brand Column */}
          <FooterColumn delay={0}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 18 }}>
              {/* Logo Image - Background Removed */}
              <img
                src={LogoImg}
                alt="WellMind Logo"
                style={{
                  width: 'clamp(50px, 5vw, 70px)',
                  height: 'auto',
                  flexShrink: 0,
                  objectFit: 'contain'
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', color: B.actionSoft }}>WellMind</span>
                <span style={{ fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 'clamp(0.6rem, 1vw, 1rem)', color: B.textDarkMid, letterSpacing: '0.09em', alignSelf: 'end' }}>Data Solutions</span>
              </div>
            </Link>

            <p style={{ color: B.textDarkMid, fontSize: 'clamp(13px, 1.5vw, 20px)', lineHeight: 1.8, marginBottom: 22, maxWidth: 260 }}>
              We build intelligent AI systems that transform how industries operate, compete, and grow.
            </p>

            {/* Newsletter */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <input type="email" placeholder="your@email.com" style={{
                flex: 1, padding: 'clamp(8px, 1.2vw, 10px) clamp(10px, 1.5vw, 14px)',
                fontSize: 'clamp(12px, 1.4vw, 18px)', minWidth: 0,
                background: 'rgba(255,255,255,0.05)', border: `1px solid ${B.glassBorder}`,
                borderRadius: 'var(--radius-sm)', color: B.white, outline: 'none',
                fontFamily: 'var(--font-main)', transition: 'border-color 0.2s',
              }}
                onFocus={e => e.target.style.borderColor = B.action}
                onBlur={e  => e.target.style.borderColor = B.glassBorder}
              />
              <button aria-label="Subscribe to newsletter" style={{
                padding: 'clamp(8px, 1.2vw, 10px) clamp(10px, 1.5vw, 14px)', flexShrink: 0,
                borderRadius: 'var(--radius-sm)', background: B.action, color: B.white, border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'background 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = B.actionMid; }}
                onMouseLeave={e => { e.currentTarget.style.background = B.action; }}
              >
                <ArrowRight size={16}/>
              </button>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', monospace", fontSize: 'clamp(10px, 1.2vw, 15px)', letterSpacing: '0.12em', textTransform: 'uppercase', color: B.textDarkMid, marginBottom: 18 }}>
              AI insights newsletter
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { icon: <FaLinkedin size={18}/>, href: 'https://www.linkedin.com/company/wellmind-data-solutions/', label: 'WellMind on LinkedIn' },
                { icon: <FaGithub   size={18}/>, href: 'https://github.com/WELLMIND-DataSolutions', label: 'WellMind on GitHub' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
                  width: 'clamp(36px, 4vw, 44px)', height: 'clamp(36px, 4vw, 44px)', borderRadius: 'var(--radius-sm)',
                  background: B.actionLight, border: `1px solid ${B.actionBorder}`, color: '#C4B5FD',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none', transition: 'background 0.25s, color 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = B.actionMid; e.currentTarget.style.color = B.white; e.currentTarget.style.borderColor = B.actionMid; }}
                  onMouseLeave={e => { e.currentTarget.style.background = B.actionLight; e.currentTarget.style.color = '#C4B5FD'; e.currentTarget.style.borderColor = B.actionBorder; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </FooterColumn>

          {/* Services Column */}
          <FooterColumn delay={0.10}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', monospace", fontSize: 'clamp(11px, 1.5vw, 20px)', letterSpacing: '0.14em', textTransform: 'uppercase', color: B.actionSoft, marginBottom: 18, fontWeight: 700, opacity: 0.9 }}>Services</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.5vw, 14px)' }}>
              {[
                { label: 'AI & Machine Learning',  to: '/services-ai-ml'          },
                { label: 'Data Analytics',          to: '/services-data-analytics' },
                { label: 'AI-Powered Software',     to: '/services-ai-software'    },
                { label: 'Automation',              to: '/services-automation'     },
                { label: 'UI/UX Design',            to: '/services-ui-ux'          },
                { label: 'Bioinformatics',          to: '/services-bioinformatics' },
              ].map(l => (
                <li key={l.to}><Link to={l.to} className="wm-footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </FooterColumn>

          {/* Company Column */}
          <FooterColumn delay={0.18}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', monospace", fontSize: 'clamp(11px, 1.5vw, 20px)', letterSpacing: '0.14em', textTransform: 'uppercase', color: B.actionSoft, marginBottom: 18, fontWeight: 700, opacity: 0.9 }}>Company</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.5vw, 14px)' }}>
              {[
                { label: 'About Us',     to: '/about'        },
                { label: 'AI ROI Calculator', to: '/ai-cost-calculator' },
                { label: 'Careers',      to: '/careers'      },
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'Resources',    to: '/resources'    },
                { label: 'Industries',   to: '/industries'   },
              ].map(l => (
                <li key={l.to}><Link to={l.to} className="wm-footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact Column */}
          <FooterColumn delay={0.26}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', monospace", fontSize: 'clamp(11px, 1.5vw, 20px)', letterSpacing: '0.14em', textTransform: 'uppercase', color: B.actionSoft, marginBottom: 18, fontWeight: 700, opacity: 0.9 }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.8vw, 16px)', marginBottom: 22 }}>
              {[
                { icon: <Phone size={18}/>,  val: '+92 323 6787087' },
                { icon: <MapPin size={18}/>, val: 'Faisalabad, Pakistan' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 'clamp(13px, 1.5vw, 22px)', color: B.textDarkMid, lineHeight: 1.5 }}>
                  <span style={{ color: '#C4B5FD', flexShrink: 0, width: 'clamp(28px, 3vw, 32px)', height: 'clamp(28px, 3vw, 32px)', borderRadius: 'var(--radius-sm)', background: B.actionLight, border: `1px solid ${B.actionBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {c.icon}
                  </span>
                  {c.val}
                </div>
              ))}
            </div>
            <BookDiscoveryBtn />
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <motion.div
          ref={bottomRef}
          initial={{ opacity: 0 }} animate={bottomInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            borderTop: `1px solid ${B.glassBorder}`, paddingTop: 20,
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12,
          }}
        >
          <p style={{ fontFamily: "'Plus Jakarta Sans', monospace", fontSize: 'clamp(11px, 1.3vw, 18px)', color: B.textDarkMuted, margin: 0 }}>
            © {new Date().getFullYear()} WellMind Data Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2vw, 20px)' }}>
            {[
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Terms of Service', to: '/terms-of-service' },
              { label: 'Cookie Policy', to: '/cookie-policy' },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{ fontFamily: "'Plus Jakarta Sans', monospace", fontSize: 'clamp(11px, 1.3vw, 18px)', color: B.textDarkMuted, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C4B5FD'}
                onMouseLeave={e => e.currentTarget.style.color = B.textDarkMuted}
              >{l.label}</Link>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .wm-footer-link {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(13px, 1.5vw, 20px);
          font-weight: 500; color: rgba(255,255,255,0.55);
          text-decoration: none; display: inline-block;
          position: relative; transition: color 0.2s;
        }
        .wm-footer-link::after {
          content: ''; position: absolute; left: 0; bottom: -2px;
          width: 0; height: 1px; background: #6D28D9;
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wm-footer-link:hover { color: #C4B5FD; }
        .wm-footer-link:hover::after { width: 100%; }

        a:hover .wm-disc-btn-content { color: #ffffff !important; }

        /* Responsive: stack contact column on mobile */
        @media (max-width: 480px) {
          .wm-footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 360px) {
          .wm-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}