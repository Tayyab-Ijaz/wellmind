/**
 * Headernew.jsx — WellMind Data Solutions
 * Main header shell — updated smart sticky behavior & slide-down animation.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

// ── Theme & animation variants ────────────────────────────────────────────────
import { B, DT, dropdownVariants, drawerVariants } from './theme_dropdown';

// ── Mega-menu panels ──────────────────────────────────────────────────────────
import ServicesMegaMenu    from './sub_services';
import IndustriesMegaMenu  from './sub_industries';
import CaseStudiesMegaMenu from './sub_casestudies';
import ResourcesMegaMenu   from './sub_resources';

// ── Assets ────────────────────────────────────────────────────────────────────
import LogoImg from '../assets/wellmind-data-solutions-logo.png';

// ─── MOBILE NAV ITEMS (mirror of desktop labels) ──────────────────────────────
const MOBILE_SECTIONS = [
  {
    key:   'svc',
    label: 'Services',
    items: [
      { to: '/services-ai-ml',          label: 'AI & Machine Learning' },
      { to: '/services-data-analytics', label: 'Data Science & Analytics' },
      { to: '/services-ai-software',    label: 'AI-Powered Software' },
      { to: '/services-automation',     label: 'Automation & Workflows' },
      { to: '/services-ui-ux',          label: 'UI/UX & Digital Design' },
      { to: '/services-bioinformatics', label: 'Bioinformatics & Health AI' },
    ],
  },
  {
    key:   'ind',
    label: 'Industries',
    items: [
      { to: '/industry-financial-service', label: 'Financial Services' },
      { to: '/industry-healthcare',        label: 'Healthcare & Biotech' },
      { to: '/industry-retail-ecommerce',  label: 'Retail & E-Commerce' },
      { to: '/industry-manufacturing',     label: 'Manufacturing' },
      { to: '/industry-agriculture',       label: 'Agriculture & AgriTech' },
      { to: '/industry-education',         label: 'Education & EdTech' },
    ],
  },
  {
    key:   'cs',
    label: 'Case Studies',
    items: [
      { to: '/case-studies?service=ai-ml',         label: 'AI & Machine Learning' },
      { to: '/case-studies?service=data-analytics', label: 'Data Analytics' },
      { to: '/case-studies?service=ai-software',    label: 'AI Software' },
      { to: '/case-studies?service=automation',     label: 'Automation' },
    ],
  },
  {
    key:   'res',
    label: 'Resources',
    items: [
      { to: '/resources#bioinformatics', label: 'Bioinformatics' },
      { to: '/resources#healthcare-ai',  label: 'Healthcare AI' },
      { to: '/resources#fintech-ai',     label: 'Fintech AI' },
      { to: '/resources#mlops',          label: 'MLOps' },
      { to: '/resources#data-science',   label: 'Data Science' },
    ],
  },
];

// ─── DESKTOP NAV ITEMS ────────────────────────────────────────────────────────
const DESKTOP_MENU_ITEMS = [
  { key: 'services',    label: 'Services' },
  { key: 'industries',  label: 'Industries' },
  { key: 'caseStudies', label: 'Case Studies' },
  { key: 'resources',   label: 'Resources' },
];

// ─── DROPDOWN VARIANTS (Slide Down Animation) ───────────────────────────────
const slideDownVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    transition: { duration: 0.25, ease: "easeIn" }
  },
  visible: {
    opacity: 1,
    height: 'auto',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    height: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

// ─── BOOK CALL BUTTON ─────────────────────────────────────────────────────────
function BookCallBtn({ onClick }) {
  const btnRef  = useRef(null);
  const fillRef = useRef(null);
  const isIn    = useRef(false);
  const rafId   = useRef(null);

  const getOrigin = (e, snap = false) => {
    const btn = btnRef.current;
    if (!btn) return { x: 50, y: 50 };
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    if (snap) return { x: x < 33 ? 0 : x > 67 ? 100 : 50, y: y < 33 ? 0 : y > 67 ? 100 : 50 };
    return { x, y };
  };

  const handleMouseEnter = (e) => {
    isIn.current = true;
    const fill = fillRef.current; if (!fill) return;
    const { x, y } = getOrigin(e, true);
    fill.style.transition = 'none';
    fill.style.opacity    = '1';
    fill.style.clipPath   = `circle(0% at ${x}% ${y}%)`;
    void fill.offsetWidth;
    fill.style.transition = 'clip-path 0.72s cubic-bezier(0.16, 1, 0.3, 1)';
    fill.style.clipPath   = `circle(150% at ${x}% ${y}%)`;
  };

  const handleMouseMove = (e) => {
    if (!isIn.current) return;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const fill = fillRef.current; if (!fill) return;
      fill.style.transition = 'clip-path 0.85s cubic-bezier(0.16, 1, 0.3, 1)';
      fill.style.clipPath   = `circle(150% at ${getOrigin(e).x}% ${getOrigin(e).y}%)`;
    });
  };

  const handleMouseLeave = (e) => {
    isIn.current = false;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const fill = fillRef.current; if (!fill) return;
    const { x, y } = getOrigin(e, true);
    fill.style.transition = 'clip-path 0.55s cubic-bezier(0.4, 0, 1, 1), opacity 0.18s ease 0.38s';
    fill.style.clipPath   = `circle(0% at ${x}% ${y}%)`;
    fill.style.opacity    = '0';
  };

  return (
    <Link
      to="/book-discovery"
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="wm-book-btn wm-desktop-only"
    >
      <span ref={fillRef} aria-hidden="true" style={{
        position:     'absolute',
        inset:        '-1px',
        borderRadius: 'inherit',
        background:   B.primary,
        opacity:       0,
        clipPath:     'circle(0% at 50% 50%)',
        pointerEvents: 'none',
      }} />
      <span className="wm-book-btn-content" style={{
        position:   'relative',
        zIndex:      1,
        display:    'flex',
        alignItems: 'center',
        gap:         6,
      }}>
        Book a Call
      </span>
    </Link>
  );
}

// ─── MAIN HEADER ──────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeMenu,    setActiveMenu]    = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState('');

  const location      = useLocation();
  const navRef        = useRef(null);
  const hoverTimerRef = useRef(null);

  // NOTE: the old hide-on-scroll logic was removed. It re-rendered the whole header on
  // every scroll event, and its computed `top` was never applied to the <nav>.

  // ── Hover timing ───────────────────────────────────────────────────────────
  const handleNavMouseEnter    = (menu) => { clearTimeout(hoverTimerRef.current); setActiveMenu(menu); };
  const handleNavMouseLeave    = ()     => { hoverTimerRef.current = setTimeout(() => setActiveMenu(null), 100); };
  const handleDropdownMouseEnter = ()   => clearTimeout(hoverTimerRef.current);
  const handleDropdownMouseLeave = ()   => { hoverTimerRef.current = setTimeout(() => setActiveMenu(null), 80); };

  // ── Route change reset ─────────────────────────────────────────────────────
  useEffect(() => {
    setMobileOpen(false); setActiveMenu(null); setMobileExpanded('');
    clearTimeout(hoverTimerRef.current);
  }, [location.pathname]);

  // ── Body scroll lock while drawer is open ─────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // ── Dropdown renderer ─────────────────────────────────────────────────────
  const renderDropdown = (key) => {
    const close = () => setActiveMenu(null);
    switch (key) {
      case 'services':    return <ServicesMegaMenu    onClose={close} />;
      case 'industries':  return <IndustriesMegaMenu  onClose={close} />;
      case 'caseStudies': return <CaseStudiesMegaMenu onClose={close} />;
      case 'resources':   return <ResourcesMegaMenu   onClose={close} />;
      default:            return null;
    }
  };

  return (
    <>
      {/* ═══════════════════════ NAV BAR ═══════════════════════════════════ */}
      <motion.nav
        ref={navRef}
        style={{
          position:             'fixed',
          top:                  0,        // explicit offsets — without them a fixed element falls back to its
          left:                 0,        // "static position" and drifts across the page during route changes
          right:                0,
          width:                '100%',
          zIndex:                50,
          overflow:             'visible',
          background:           '#010101',
          backdropFilter:       'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom:         `1px solid ${activeMenu ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.10)'}`,
          boxShadow:            activeMenu
            ? '0 10px 40px rgba(0,0,0,0.45)'
            : '0 4px 20px rgba(0,0,0,0.30)',
          transition: 'box-shadow 0.3s, border-color 0.3s',
        }}
      >
        {/* ── Main bar ──────────────────────────────────────────────────── */}
        <div className="wm-header-inner" style={{
          width:           '100%',
          boxSizing:       'border-box',
          padding:         '0 5%',
          height:          'clamp(60px, 5.2vw, 66px)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          minWidth:         0,
        }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none', flexShrink: 0 }}>
            <div className="wm-logo-mark" style={{
              width:   'clamp(42px, 5vw, 60px)',
              height:  'clamp(42px, 5vw, 60px)',
              flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img src={LogoImg} alt="WellMind Logo" className="wm-logo-img" width="60" height="60" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className="wm-brand-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.95 }}>
              <span style={{
                fontFamily:    "'Space Grotesk', 'Montserrat', sans-serif",
                fontWeight:     800,
                fontSize:      'clamp(18px, 2.4vw, 30px)',
                letterSpacing: '-0.02em',
                color:         '#FFFFFF',
              }}>WellMind</span>
              <span style={{
                fontFamily:    'sans-serif',
                fontWeight:     600,
                fontSize:      'clamp(9px, 1vw, 13px)',
                color:          '#FFFFFF',
                letterSpacing: '0.05em',
                alignSelf:     'end',
              }}>Data Solutions</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="wm-desktop-nav" style={{
            flex:           1,
            minWidth:       0,
            overflow:       'visible',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            gap:            'clamp(14px, 1.5vw, 24px)',
            listStyle:      'none',
            margin:         '0 16px',
            padding:         0,
            height:         '100%',
          }}>
            {DESKTOP_MENU_ITEMS.map(item => (
              <li
                key={item.key}
                style={{ position: 'static', height: '100%', display: 'flex', alignItems: 'center', flexShrink: 0 }}
                onMouseEnter={() => handleNavMouseEnter(item.key)}
                onMouseLeave={handleNavMouseLeave}
              >
                <button
                  className="wm-nav-link"
                  style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:         4,
                    background: 'transparent',
                    border:     'none',
                    cursor:     'pointer',
                    padding:     0,
                    color:      activeMenu === item.key ? '#FFFFFF' : 'rgba(255,255,255,0.90)',
                  }}
                >
                  {item.label}
                  <ChevronDown size={16} style={{
                    transition: 'transform 0.28s cubic-bezier(0.16,1,0.3,1)',
                    transform:  activeMenu === item.key ? 'rotate(180deg)' : 'none',
                    color:      '#FFFFFF',
                  }} />
                  <span className="wm-underline" style={{ width: activeMenu === item.key ? '100%' : undefined }} />
                </button>
              </li>
            ))}

            <li style={{ flexShrink: 0 }}>
              <Link to="/ai-cost-calculator" className="wm-nav-link">
                AI ROI Calculator<span className="wm-underline" />
              </Link>
            </li>

            <li style={{ flexShrink: 0 }}>
              <Link to="/about" className="wm-nav-link">
                About<span className="wm-underline" />
              </Link>
            </li>
          </ul>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <BookCallBtn onClick={undefined} />
            <button
              className="wm-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                padding:         8,
                borderRadius:    8,
                background:     'rgba(42,42,42,0.08)',
                border:         `1px solid rgba(42,42,42,0.25)`,
                color:           B.primaryMid,
                cursor:         'pointer',
                transition:     'all 0.2s',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mega dropdown panel (Updated Variants) ──────────────────────── */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              key={activeMenu}
              variants={slideDownVariants} // Use new slide-down variants
              initial="hidden" animate="visible" exit="exit"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              style={{
                position:             'absolute',
                top:                  '100%',
                left:                  0,
                width:                '100%',
                background:           '#FFFFFF',
                backdropFilter:       'blur(48px)',
                WebkitBackdropFilter: 'blur(48px)',
                border:         '1px solid rgba(0,0,0,0.18)',
                borderTop: '2px solid #000000',
                borderEndStartRadius:  '20px',
                borderBottomRightRadius: '20px',
                zIndex:                100,
                overflow:             'hidden',
              }}
            >
              {renderDropdown(activeMenu)}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ═══════════════════════ MOBILE OVERLAY ═════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position:      'fixed',
              inset:          0,
              zIndex:         55,
              background:    'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(6px)',
            }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ═══════════════════════ MOBILE DRAWER ══════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="wm-mobile-drawer"
            variants={drawerVariants} initial="hidden" animate="visible" exit="exit"
            style={{
              position:      'fixed',
              right:          0,
              top:            0,
              bottom:         0,
              zIndex:         70,
              width:         'min(88vw, 340px)',
              background:    '#000000',
              backdropFilter: 'blur(24px)',
              borderLeft:    `1px solid ${B.glassBorder}`,
              boxShadow:     `-12px 0 60px rgba(42,42,42,0.15)`,
              overflow:      'hidden',
              display:       'flex',
              flexDirection: 'column',
            }}
          >
            {/* Drawer header */}
            <div className="wm-mobile-drawer-header" style={{
              height:         70,
              flexShrink:     0,
              borderBottom:   `1px solid ${B.primaryBorder}`,
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'space-between',
              padding:        '0 20px',
              background:     'rgba(42,42,42,0.04)',
            }}>
              <Link to="/" onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none' }}>
                <div className="wm-mobile-logo-mark" style={{ width: 46, height: 46, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={LogoImg} alt="WellMind Logo" className="wm-logo-img" width="60" height="60" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="wm-mobile-brand-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.95 }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em', color: '#FFFFFF' }}>WellMind</span>
                  <span style={{ fontFamily: 'sans-serif', fontWeight: 600, fontSize: '0.6rem', color: '#FFFFFF', letterSpacing: '0.05em', alignSelf: 'end' }}>Data Solutions</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{
                  background: 'transparent',
                  border:     `1px solid rgba(42,42,42,0.20)`,
                  color:       B.primaryMid,
                  cursor:     'pointer',
                  padding:     6,
                  display:    'flex',
                  alignItems: 'center',
                  borderRadius: 6,
                }}
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Drawer body — accordion sections */}
            <div className="wm-mobile-drawer-body" style={{ flex: 1, overflowY: 'auto', padding: '0 20px 40px' }}>
              {MOBILE_SECTIONS.map(section => (
                <div key={section.key}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === section.key ? '' : section.key)}
                    style={{
                      width:           '100%',
                      display:         'flex',
                      justifyContent:  'space-between',
                      alignItems:      'center',
                      padding:         '14px 0',
                      background:      'transparent',
                      border:          'none',
                      cursor:          'pointer',
                      color:           '#0c0c0c',
                      fontFamily:      "'Space Grotesk', sans-serif",
                      fontSize:         15,
                      fontWeight:       600,
                      borderBottom:    `1px solid ${B.primaryBorder}`,
                    }}
                  >
                    {section.label}
                    <ChevronDown size={15} style={{
                      transition: 'transform 0.3s',
                      transform:  mobileExpanded === section.key ? 'rotate(180deg)' : 'none',
                      color:       B.primaryMid,
                    }} />
                  </button>

                  <AnimatePresence>
                    {mobileExpanded === section.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>
                          {section.items.map(item => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => setMobileOpen(false)}
                              style={{
                                display:     'flex',
                                alignItems:  'center',
                                gap:          10,
                                padding:     '10px 0',
                                textDecoration: 'none',
                                borderBottom: `1px solid ${B.primaryBorder}`,
                              }}
                            >
                              <span style={{ width: 5, height: 5, borderRadius: '50%', background: B.primaryMid, flexShrink: 0 }} />
                              <span style={{ color: B.textMid, fontFamily: "'Space Grotesk', sans-serif", fontSize: 14 }}>
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/ai-cost-calculator"
                onClick={() => setMobileOpen(false)}
                style={{
                  display:        'block',
                  padding:        '14px 0',
                  color:          '#0c0c0c',
                  textDecoration: 'none',
                  fontFamily:     "'Space Grotesk', sans-serif",
                  fontSize:        15,
                  fontWeight:      600,
                  borderBottom:   `1px solid ${B.primaryBorder}`,
                }}
              >
                AI ROI Calculator
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                style={{
                  display:        'block',
                  padding:        '14px 0',
                  color:          '#0c0c0c',
                  textDecoration: 'none',
                  fontFamily:     "'Space Grotesk', sans-serif",
                  fontSize:        15,
                  fontWeight:      600,
                  borderBottom:   `1px solid ${B.primaryBorder}`,
                }}
              >
                About
              </Link>

              <div style={{ paddingTop: 24 }}>
                <Link
                  to="/book-discovery"
                  className="wm-cyan-btn"
                  onClick={() => setMobileOpen(false)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Zap size={15} /> Book a Discovery Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════ GLOBAL STYLES ══════════════════════════════ */}
      <style>{`


        .wm-logo-img { transition: filter 0.25s ease, opacity 0.25s ease; }
        .wm-logo-img { filter: brightness(0) invert(1); }

        .wm-desktop-nav  { display: none !important; }
        .wm-desktop-only { display: none !important; }
        .wm-hamburger    { display: flex !important; }

        @media (min-width: 1150px) {
          .wm-desktop-nav  { display: flex !important; }
          .wm-desktop-only { display: inline-flex !important; }
          .wm-hamburger    { display: none !important; }
        }

        .wm-nav-link {
          color: rgba(255,255,255,0.88);
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(13px, 1.4vw, 18px);
          font-weight: 600; text-decoration: none;
          position: relative; transition: color 0.2s;
          padding-bottom: 2px; white-space: nowrap;
        }
        .wm-nav-link:hover { color: #FFFFFF; }
        .wm-nav-link .wm-underline {
          position: absolute; left: 0; bottom: -3px;
          width: 0; height: 2px; background: #FFFFFF;
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1); display: block;
        }
        .wm-nav-link:hover .wm-underline { width: 100%; }

        /* Sub-service links — black text on white, invert on hover */
        .wm-sub-link:hover {
          background: #000000 !important;
          color: #FFFFFF !important;
          transform: translateX(2px);
        }
        .wm-sub-link:hover * { color: #FFFFFF !important; }

        /* Industry capability links */
        .wm-cap-link:hover {
          background: #000000 !important;
          border-color: #000000 !important;
          color: #FFFFFF !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }
        .wm-cap-link:hover * { color: #FFFFFF !important; }

        /* Filter rows */
        .wm-filter-row:hover {
          background: #000000 !important;
          color: #FFFFFF !important;
        }
        .wm-filter-row:hover * { color: #FFFFFF !important; }

        /* Case study cards */
        .wm-cs-card:hover {
          border-color: #000000 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25) !important;
        }

        /* Resource article cards */
        .wm-res-card:hover {
          border-color: #000000 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25) !important;
        }

        /* Topic chips */
        .wm-topic-chip:hover {
          background: #000000 !important;
          border-color: #000000 !important;
          color: #FFFFFF !important;
        }

        /* Quick guide links */
        .wm-guide-link:hover { color: #000000 !important; text-decoration: underline; }

        /* Book a Call button */
        .wm-book-btn {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.98); color: #000000;
          border: 1.5px solid rgba(255,255,255,0.75); border-radius: 9px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; font-size: clamp(13px, 1.4vw, 18px);
          padding: clamp(7px, 1vw, 9px) clamp(12px, 1.5vw, 18px);
          text-decoration: none; cursor: pointer; white-space: nowrap;
          transition: border-color 0.25s ease; flex-shrink: 0;
        }
        .wm-book-btn:hover { border-color: #FFFFFF; box-shadow: 0 8px 24px rgba(0,0,0,0.20); }
        .wm-book-btn .wm-book-btn-content { color: #000000; transition: color 0.20s ease 0.15s; }
        .wm-book-btn:hover .wm-book-btn-content { color: #ffffff; }

        /* Primary CTA button — black, inverts to white on hover */
        .wm-cyan-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: #000000; color: #ffffff;
          border: 1px solid #000000; border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; font-size: 13px; padding: 9px 18px;
          text-decoration: none; transition: all 0.25s ease;
          cursor: pointer; white-space: nowrap;
          box-shadow: none;
        }
        .wm-cyan-btn:hover {
          background: #ffffff; border-color: #000000; color: #000000;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}