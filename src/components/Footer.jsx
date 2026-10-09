/**
 * Footer.jsx — WellMind Data Solutions — Fully Responsive
 */

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
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
  const btnRef = useRef(null);
  const fillRef = useRef(null);
  const isIn = useRef(false);
  const rafId = useRef(null);

  const getOrigin = (e, snap = false) => {
    const btn = btnRef.current;
    if (!btn) return { x: 50, y: 50 };

    const rect = btn.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;

    if (snap) {
      x = x < 33 ? 0 : x > 67 ? 100 : 50;
      y = y < 33 ? 0 : y > 67 ? 100 : 50;
    }

    return { x, y };
  };

  const handleMouseEnter = (e) => {
    isIn.current = true;
    const fill = fillRef.current;
    if (!fill) return;

    const { x, y } = getOrigin(e, true);
    fill.style.transition = 'none';
    fill.style.opacity = '1';
    fill.style.clipPath = `circle(0% at ${x}% ${y}%)`;

    void fill.offsetWidth;

    fill.style.transition = 'clip-path 0.72s cubic-bezier(0.16, 1, 0.3, 1)';
    fill.style.clipPath = `circle(150% at ${x}% ${y}%)`;
  };

  const handleMouseMove = (e) => {
    if (!isIn.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const fill = fillRef.current;
      if (!fill) return;

      const { x, y } = getOrigin(e, false);
      fill.style.transition = 'clip-path 0.85s cubic-bezier(0.16, 1, 0.3, 1)';
      fill.style.clipPath = `circle(150% at ${x}% ${y}%)`;
    });
  };

  const handleMouseLeave = (e) => {
    isIn.current = false;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    const fill = fillRef.current;
    if (!fill) return;

    const { x, y } = getOrigin(e, true);
    fill.style.transition =
      'clip-path 0.55s cubic-bezier(0.4, 0, 1, 1), opacity 0.18s ease 0.38s';
    fill.style.clipPath = `circle(0% at ${x}% ${y}%)`;
    fill.style.opacity = '0';
  };

  return (
    <Link
      to="/book-discovery"
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        background: 'rgba(255,255,255,0.06)',
        color: '#FFFFFF',
        border: '1px solid rgba(255,255,255,0.35)',
        borderRadius: 'var(--radius-sm)',
        padding: 'clamp(10px, 1.5vw, 12px) clamp(16px, 2vw, 22px)',
        minHeight: 42,
        fontSize: 'clamp(13px, 1.05vw, 15px)',
        fontWeight: 700,
        fontFamily: 'var(--font-main)',
        textDecoration: 'none',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease, background 0.25s ease',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      <span
        ref={fillRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: B.action,
          opacity: 0,
          clipPath: 'circle(0% at 50% 50%)',
          pointerEvents: 'none',
        }}
      />

      <span
        className="wm-disc-btn-content"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          color: '#FFFFFF',
          transition: 'color 0.20s ease 0.15s',
        }}
      >
        Book Discovery Call
        <ArrowRight size={15} />
      </span>
    </Link>
  );
}

export default function Footer() {
  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: true });

  return (
    <footer
      className="wm-footer"
      style={{
        background: `linear-gradient(180deg, ${B.darkBg} 0%, ${B.voidBg} 100%)`,
        color: '#FFFFFF',
        borderTop: `2px solid ${B.actionMid}`,
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(32px, 4vw, 48px)',
        paddingBottom: 32,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -120,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(55,55,55,0.06), transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(34,34,34,0.30), transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(34,34,34,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,34,34,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 24px)',
          position: 'relative',
        }}
      >
        <div
          className="wm-footer-grid"
          style={{
            gap: 'clamp(28px, 4vw, 48px)',
            marginBottom: 'clamp(32px, 5vw, 56px)',
          }}
        >
          {/* Brand */}
          <FooterColumn delay={0}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                textDecoration: 'none',
                marginBottom: 18,
              }}
            >
              <img
                src={LogoImg}
                alt="WellMind Data Solutions"
                style={{
                  width: 'clamp(50px, 5vw, 70px)',
                  height: 'auto',
                  flexShrink: 0,
                  objectFit: 'contain',
                  display: 'block',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  lineHeight: 1.1,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-main)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.3rem, 1.8vw, 1.7rem)',
                    color: '#FFFFFF',
                    display: 'block',
                    whiteSpace: 'nowrap',
                  }}
                >
                  WellMind
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-main)',
                    fontWeight: 600,
                    fontSize: 'clamp(0.6rem, 0.8vw, 0.8rem)',
                    color: 'rgba(255,255,255,0.68)',
                    letterSpacing: '0.09em',
                    alignSelf: 'flex-end',
                    display: 'block',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Data Solutions
                </span>
              </div>
            </Link>

            <p
              style={{
                color: 'rgba(255,255,255,0.68)',
                fontSize: 'clamp(13px, 1.05vw, 15px)',
                lineHeight: 1.8,
                marginBottom: 22,
                maxWidth: 260,
              }}
            >
              We build intelligent AI systems that transform how industries
              operate, compete, and grow.
            </p>

            <div className="wm-footer-newsletter" style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding:
                    'clamp(8px, 1.2vw, 10px) clamp(10px, 1.5vw, 14px)',
                  fontSize: 'clamp(13px, 1vw, 15px)',
                  minWidth: 0,
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${B.glassBorder}`,
                  borderRadius: 'var(--radius-sm)',
                  color: '#FFFFFF',
                  outline: 'none',
                  fontFamily: 'var(--font-main)',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = B.action)}
                onBlur={(e) => (e.target.style.borderColor = B.glassBorder)}
              />

              <button
                aria-label="Subscribe to newsletter"
                style={{
                  padding:
                    'clamp(8px, 1.2vw, 10px) clamp(10px, 1.5vw, 14px)',
                  flexShrink: 0,
                  borderRadius: 'var(--radius-sm)',
                  background: B.action,
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = B.actionMid;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = B.action;
                }}
              >
                <ArrowRight size={16} />
              </button>
            </div>

            <p
              className="wm-footer-caption"
              style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: 'clamp(10px, 0.8vw, 12px)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.58)',
                marginBottom: 18,
              }}
            >
              AI insights newsletter
            </p>

            <div className="wm-footer-social" style={{ display: 'flex', gap: 8 }}>
              {[
                {
                  icon: <FaLinkedin size={18} />,
                  href: 'https://www.linkedin.com/company/wellmind-data-solutions/',
                  label: 'WellMind on LinkedIn',
                },
                {
                  icon: <FaGithub size={18} />,
                  href: 'https://github.com/WELLMIND-DataSolutions',
                  label: 'WellMind on GitHub',
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 'clamp(36px, 4vw, 44px)',
                    height: 'clamp(36px, 4vw, 44px)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: '#C2C2C2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'background 0.25s, color 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = B.actionMid;
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = B.actionMid;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#C2C2C2';
                    e.currentTarget.style.borderColor =
                      'rgba(255,255,255,0.16)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </FooterColumn>

          {/* Services */}
          <FooterColumn delay={0.10}>
            <h3 className="wm-footer-heading">Services</h3>
            <ul className="wm-footer-list">
              {[
                { label: 'AI & Machine Learning', to: '/services-ai-ml' },
                { label: 'Data Analytics', to: '/services-data-analytics' },
                { label: 'AI-Powered Software', to: '/services-ai-software' },
                { label: 'Automation', to: '/services-automation' },
                { label: 'UI/UX Design', to: '/services-ui-ux' },
                { label: 'Bioinformatics', to: '/services-bioinformatics' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="wm-footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Company */}
          <FooterColumn delay={0.18}>
            <h3 className="wm-footer-heading">Company</h3>
            <ul className="wm-footer-list">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'AI ROI Calculator', to: '/ai-cost-calculator' },
                { label: 'Careers', to: '/careers' },
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'Resources', to: '/resources' },
                { label: 'Industries', to: '/industries' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="wm-footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn delay={0.26}>
            <h3 className="wm-footer-heading">Contact</h3>

            <div
              className="wm-footer-contact"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(12px, 1.8vw, 16px)',
                marginBottom: 22,
              }}
            >
              {[
                {
                  icon: <Mail size={18} />,
                  val: 'wellminddatasolutions@gmail.com',
                  className: 'wm-footer-email',
                },
                {
                  icon: <Phone size={18} />,
                  val: '+92 323 6787087',
                },
                {
                  icon: <MapPin size={18} />,
                  val: 'Faisalabad, Pakistan',
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className={c.className || ''}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontSize: 'clamp(13px, 1.05vw, 15px)',
                    color: 'rgba(255,255,255,0.72)',
                    lineHeight: 1.5,
                    minWidth: 0,
                  }}
                >
                  <span
                    className="wm-footer-contact-icon"
                    style={{
                      color: '#FFFFFF',
                      flexShrink: 0,
                      width: 'clamp(28px, 3vw, 32px)',
                      height: 'clamp(28px, 3vw, 32px)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.16)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {c.icon}
                  </span>

                  <span
                    style={{
                      minWidth: 0,
                      display: 'block',
                      whiteSpace: c.className
                        ? 'nowrap'
                        : 'normal',
                    }}
                  >
                    {c.val}
                  </span>
                </div>
              ))}
            </div>

            <BookDiscoveryBtn />
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="wm-footer-bottom"
          ref={bottomRef}
          initial={{ opacity: 0 }}
          animate={bottomInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: 20,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <p
            className="wm-footer-copy"
            style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: 'clamp(11px, 0.9vw, 13px)',
              color: 'rgba(255,255,255,0.52)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} WellMind Data Solutions. All rights
            reserved.
          </p>

          <div
            className="wm-footer-legal"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(12px, 2vw, 20px)',
            }}
          >
            {[
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Terms of Service', to: '/terms-of-service' },
              { label: 'Cookie Policy', to: '/cookie-policy' },
            ].map(
              (l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    fontFamily: "'Space Grotesk', monospace",
                    fontSize: 'clamp(11px, 0.9vw, 13px)',
                    color: 'rgba(255,255,255,0.52)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#C2C2C2')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      'rgba(255,255,255,0.52)')
                  }
                >
                  {l.label}
                </Link>
              )
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        /* ═══ base (desktop ≥ 1181px) ═══ */
        .wm-footer-heading {
          font-family: 'Space Grotesk', monospace;
          font-size: clamp(12px, 0.95vw, 14px);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FFFFFF !important;
          margin: 0 0 18px;
          font-weight: 700;
          opacity: 1 !important;
        }

        .wm-footer-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.5vw, 14px);
        }

        .wm-footer-link {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(13px, 1.05vw, 15px);
          font-weight: 500;
          color: rgba(255,255,255,0.62) !important;
          text-decoration: none;
          display: inline-block;
          position: relative;
          transition: color 0.2s;
        }

        .wm-footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: #FFFFFF;
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .wm-footer-link:hover { color: #FFFFFF !important; }
        .wm-footer-link:hover::after { width: 100%; }

        a:hover .wm-disc-btn-content { color: #FFFFFF !important; }

        .wm-footer-grid {
          display: grid;
          /* Contact gets the widest column so the email always has room */
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr) minmax(0, 0.8fr) minmax(0, 1.5fr);
          align-items: start;
        }

        .wm-footer-grid > * { min-width: 0; }

        /* Email: one line, always. Its font size is derived from the row's real width
           (row - icon - gap) / 21em, so it can never wrap or be clipped. */
        .wm-footer-email {
          container-type: inline-size;
          width: 100%;
        }

        .wm-footer-email > span:last-child {
          white-space: nowrap !important;
          font-size: clamp(9px, 3.4vw, 15px) !important;               /* fallback */
          font-size: clamp(9px, calc((100cqw - 44px) / 21), 15px) !important;
        }

        /* ═══ tablet / iPad / small laptop (561 – 1180px) ═══
           Brand on top · Services + Company side by side · Contact full width underneath */
        @media (max-width: 1180px) {
          .wm-footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .wm-footer-grid > *:first-child,
          .wm-footer-grid > *:last-child {
            grid-column: 1 / -1;
          }

          .wm-footer-grid > *:first-child p {
            max-width: 460px !important;
          }

          .wm-footer-newsletter {
            max-width: 420px;
          }

          .wm-footer-contact {
            flex-direction: row !important;
            flex-wrap: wrap;
            gap: 14px 32px !important;
          }

          /* items are content-sized in a row, so no container sizing here */
          .wm-footer-email {
            container-type: normal;
            width: auto;
          }

          .wm-footer-email > span:last-child {
            font-size: 14px !important;
          }
        }

        /* ═══ phone (≤ 560px): compact, app-style footer ═══ */
        @media (max-width: 560px) {
          .wm-footer {
            padding-top: 28px !important;
            padding-bottom: 18px !important;
          }

          .wm-footer-grid {
            gap: 22px 16px !important;
            margin-bottom: 22px !important;
          }

          /* brand block */
          .wm-footer-grid > *:first-child > a {
            margin-bottom: 12px !important;
          }

          .wm-footer-grid > *:first-child p {
            max-width: none !important;
            margin-bottom: 14px !important;
            font-size: 13px !important;
            line-height: 1.6 !important;
          }

          .wm-footer-newsletter {
            max-width: none;
            margin-bottom: 14px !important;
          }

          .wm-footer-caption { display: none; }

          /* link columns */
          .wm-footer-heading {
            margin-bottom: 10px;
            font-size: 11px;
          }

          .wm-footer-list { gap: 8px; }
          .wm-footer-link { font-size: 13px; }

          /* contact: single column again, email row spans the full width */
          .wm-footer-contact {
            flex-direction: column !important;
            flex-wrap: nowrap;
            gap: 10px !important;
            margin-bottom: 14px !important;
          }

          .wm-footer-contact > div {
            font-size: 13px !important;
            gap: 10px !important;
          }

          .wm-footer-contact-icon {
            width: 28px !important;
            height: 28px !important;
          }

          .wm-footer-email {
            container-type: inline-size;
            width: 100%;
            gap: 8px !important;
          }

          .wm-footer-email > span:last-child {
            font-size: clamp(9px, 3.4vw, 13px) !important;
            font-size: clamp(9px, calc((100cqw - 42px) / 21), 13px) !important;
            letter-spacing: -0.01em;
          }

          .wm-footer-email .wm-footer-contact-icon {
            width: 26px !important;
            height: 26px !important;
          }

          .wm-footer-grid > *:last-child > a {
            display: flex !important;
            width: 100%;
          }

          /* bottom bar: centred, legal links first, copyright last */
          .wm-footer-bottom {
            flex-direction: column-reverse;
            justify-content: center !important;
            text-align: center;
            gap: 10px !important;
            padding-top: 16px !important;
          }

          .wm-footer-legal {
            justify-content: center;
            gap: 6px 16px !important;
          }
        }

        /* very small phones (≤ 360px) */
        @media (max-width: 360px) {
          .wm-footer-grid { gap: 20px 12px !important; }
          .wm-footer-link { font-size: 12.5px; }
          .wm-footer-copy, .wm-footer-legal a { font-size: 10.5px !important; }
        }
      `}</style>
    </footer>
  );
}