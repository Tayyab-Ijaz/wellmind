import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import AiMl          from '../../assets/ai-ml-service.webp';
import DataScience    from '../../assets/data-science-service.webp';
import AiSoftware     from '../../assets/ai-software-service.webp';
import UiUxDesign     from '../../assets/UI-UX-Design-service.webp';
import Bioinformatics from '../../assets/bioinformatics-service.webp';

const services = [
  { title: 'AI & ML',         desc: 'Predictive analytics and NLP solutions engineered for enterprise scale.',  img: AiMl,          path: '/services-ai-ml'          },
  { title: 'Data Science',    desc: 'Transform raw data into strategic KPIs and interactive dashboards.',        img: DataScience,    path: '/services-data-analytics' },
  { title: 'AI Software',     desc: 'Custom software architectures integrated with intelligent AI.',             img: AiSoftware,     path: '/services-ai-software'    },
  { title: 'Automation',      desc: 'Intelligent RPA and end-to-end workflow automation for ROI.',               img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800', path: '/services-automation' },
  { title: 'UI/UX Design',    desc: 'Human-centric design systems for complex AI products.',                     img: UiUxDesign,     path: '/services-ui-ux'          },
  { title: 'Bio informatics', desc: 'Health AI and clinical diagnostic models with compliance.',                 img: Bioinformatics, path: '/services-bioinformatics' },
];

/* ─── Mobile/Tablet Grid (≤ 768px) ─────────────────────────────────────────── */
function MobileServiceGrid() {
  const navigate = useNavigate();
  return (
    <div className="mob-svc-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'clamp(12px, 3vw, 20px)',
      padding: '0 clamp(16px, 4vw, 24px)',
    }}>
      <style>{`
        @media (max-width: 400px) {
          .mob-svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      {services.map((svc, i) => (
        <MobileServiceCard key={i} svc={svc} navigate={navigate} />
      ))}
    </div>
  );
}

function MobileServiceCard({ svc, navigate }) {
  const [pressed, setPressed] = useState(false);
  return (
    <div
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => { setPressed(false); navigate(svc.path); }}
      onClick={() => navigate(svc.path)}
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: '#111',
        position: 'relative',
        cursor: 'pointer',
        height: 'clamp(180px, 45vw, 260px)',
        transform: pressed ? 'scale(0.97)' : 'scale(1)',
        transition: 'transform 0.2s ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      <img src={svc.img} alt={svc.title} style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.52)',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '4px 4px',
      }} />
      <div style={{
        position: 'absolute', inset: 12,
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.08)',
        padding: 'clamp(10px, 3vw, 16px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      }}>
        <h3 style={{
          color: '#fff', margin: '0 0 6px',
          fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)',
          fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.04em', fontFamily: 'var(--font-main)', lineHeight: 1.1,
        }}>{svc.title}</h3>
        <p style={{
          color: 'rgba(255,255,255,0.80)',
          fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
          fontFamily: 'var(--font-main)', fontWeight: 500,
          margin: 0, lineHeight: 1.35,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>{svc.desc}</p>
      </div>
    </div>
  );
}

/* ─── Desktop Horizontal Scroll (> 768px) ───────────────────────────────────── */
function DesktopScrollTest() {
  const containerRef = useRef(null);
  const trackRef     = useRef(null);
  const stickyRef    = useRef(null);
  const [xPx, setXPx]         = useState(0);
  const [containerH, setContainerH] = useState('300vh');

  useLayoutEffect(() => {
    const recalc = () => {
      const track  = trackRef.current;
      const sticky = stickyRef.current;
      if (!track || !sticky) return;

      const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      const vpW  = window.innerWidth * zoom;
      const vpH  = window.innerHeight * zoom;
      const nav  = document.querySelector('header') || document.querySelector('nav');
      const navH = nav ? nav.getBoundingClientRect().height : 72;

      sticky.style.paddingTop = `${navH / zoom}px`;

      // right end padding = same as gap between cards (28px)
      const totalTrackWidth = track.scrollWidth;
      const overflowW = Math.max(0, totalTrackWidth - vpW + (vpW * 0.04));

      // container height: one sticky viewport + exact scroll needed for horizontal travel
      const totalH = vpH + overflowW;
      setContainerH(`${totalH / zoom}px`);
    };

    const handleScroll = () => {
      const container = containerRef.current;
      const track     = trackRef.current;
      if (!container || !track) return;

      const zoom      = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      const vpW       = window.innerWidth * zoom;
      const endPad    = 28;
      const overflowW = Math.max(0, track.scrollWidth - vpW + endPad);

      const rect        = container.getBoundingClientRect();
      const scrolled    = Math.max(0, -rect.top * zoom);
      const totalScroll = container.offsetHeight * zoom - window.innerHeight * zoom;

      if (totalScroll <= 0) { setXPx(0); return; }
      const progress = Math.min(1, scrolled / totalScroll);
      setXPx(-overflowW * progress);
    };

    recalc();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => { recalc(); handleScroll(); }, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', recalc);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', height: containerH, overflowX: 'clip', margin: 0 }}>
      <style>{`
        @media (min-width: 1024px) {
          .desktop-card-wrapper { flex: 0 0 380px !important; }
          .desktop-card-inner { height: 500px !important; border-radius: 40px !important; }
          .desktop-card-content { 
            padding: 28px 28px 32px !important; 
            border-radius: 28px !important; 
            top: 25px !important; left: 25px !important;
            right: 25px !important; bottom: 25px !important; 
          }
          .desktop-card-title { font-size: 2rem !important; }
          .desktop-card-desc  { font-size: 1.3rem !important; }
        }
      `}</style>

      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',   /* centers within remaining height after paddingTop */
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: '28px',
              paddingLeft: '4vw',
              paddingRight: '28px',
              transform: `translateX(${xPx}px)`,
              willChange: 'transform',
              transition: 'transform 0.05s linear',
            }}
          >
            {services.map((svc, i) => (
              <ServiceCard key={i} svc={svc} />
            ))}
          </div>
      </div>
    </div>
  );
}

function ServiceCard({ svc }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="desktop-card-wrapper"
      style={{ flex: '0 0 clamp(280px, 28vw, 380px)', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(svc.path)}
    >
      <div className="desktop-card-inner" style={{
        width: '100%',
        height: 'clamp(380px, 45vh, 500px)',
        background: '#111',
        borderRadius: 'clamp(24px, 3vw, 40px)',
        position: 'relative', overflow: 'hidden',
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
      }}>
        <img src={svc.img} alt={svc.title} style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }} />

        <div className="desktop-card-content" style={{
          position: 'absolute',
          top: 'clamp(16px, 2vw, 25px)',
          left: 'clamp(16px, 2vw, 25px)',
          right: 'clamp(16px, 2vw, 25px)',
          bottom: 'clamp(16px, 2vw, 25px)',
          borderRadius: 'clamp(16px, 2.5vw, 28px)',
          zIndex: 2,
          padding: 'clamp(16px, 2.5vw, 28px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(0,0,0,0.53)',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '5px 5px',
        }}>
          <div style={{ minHeight: 'clamp(50px, 7vw, 75px)', display: 'flex', alignItems: 'flex-end' }}>
            <h3 className="desktop-card-title" style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
              fontWeight: 700, margin: '0 0 12px 0',
              textTransform: 'uppercase', letterSpacing: '0.04em',
              fontFamily: 'var(--font-main)', lineHeight: 1.1,
            }}>{svc.title}</h3>
          </div>

          <div style={{ minHeight: 'clamp(50px, 6vw, 65px)' }}>
            <p className="desktop-card-desc" style={{
              color: '#ffffff',
              fontSize: 'clamp(0.85rem, 1.5vw, 1.3rem)',
              fontFamily: 'var(--font-main)', fontWeight: 500,
              margin: 0, lineHeight: 1.3,
            }}>{svc.desc}</p>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            color: '#7C3AED', fontFamily: 'var(--font-main)', fontWeight: 700,
            fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
            textTransform: 'uppercase',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            marginTop: '10px',
          }}>
            <span>Explore Service</span>
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ScrollTest = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <div style={{ padding: 'clamp(16px, 4vw, 32px) 0' }}>
        <MobileServiceGrid />
      </div>
    );
  }

  return <DesktopScrollTest />;
};

export default ScrollTest;