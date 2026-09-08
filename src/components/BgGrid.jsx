/**
 * BgGrid.jsx — Interactive Background Grid Component — Responsive
 */
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function useCursorOnElement() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -999, y: -999, inside: false, moving: false });
  const idleTimer = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current; if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      setPos({ x, y, inside, moving: true });
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setPos(p => ({ ...p, moving: false })), 320);
    };
    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('mousemove', onMove); clearTimeout(idleTimer.current); };
  }, []);

  return [ref, pos];
}

function CursorGrid({
  uid,
  opacity,
  aspectRatio,
  posStyle,
  baseColor   = 'rgba(127,32,55,0.55)',
  brightColor = 'rgba(147, 33, 63,1.0)',
  lineColor1  = 'rgba(107, 46, 116,0.95)',
  lineColor2  = 'rgba(11, 124, 147,0.85)',
}) {
  const [ref, cur] = useCursorOnElement();
  const targetRadius = cur.moving ? 260 : 80;

  return (
    <div ref={ref} style={{ position: 'absolute', ...posStyle, pointerEvents: 'all', zIndex: 0 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }}
        preserveAspectRatio={aspectRatio}
      >
        <defs>
          <pattern id={`hexBase${uid}`} x="0" y="0" width="132" height="118" patternUnits="userSpaceOnUse">
            <polyline points="66,4 132,37 132,81 66,114 0,81 0,37 66,4" fill="none" stroke={baseColor} strokeWidth="1.4" />
            <line x1="66" y1="4" x2="66" y2="114" stroke="rgba(127,32,55,0.38)" strokeWidth="1.0" />
            <line x1="0" y1="59" x2="132" y2="59" stroke="rgba(127,32,55,0.32)" strokeWidth="0.95" />
          </pattern>

          <pattern id={`hexBright${uid}`} x="0" y="0" width="132" height="118" patternUnits="userSpaceOnUse">
            <polyline points="66,4 132,37 132,81 66,114 0,81 0,37 66,4" fill="none" stroke={brightColor} strokeWidth="1.4" />
            <line x1="66" y1="4" x2="66" y2="114" stroke={lineColor1} strokeWidth="1.0" />
            <line x1="0" y1="59" x2="132" y2="59" stroke={lineColor2} strokeWidth="0.95" />
          </pattern>

          <linearGradient id={`sideFade${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="22%"  stopColor="white" stopOpacity="0.95" />
            <stop offset="38%"  stopColor="white" stopOpacity="0.25" />
            <stop offset="50%"  stopColor="white" stopOpacity="0.18" />
            <stop offset="62%"  stopColor="white" stopOpacity="0.25" />
            <stop offset="78%"  stopColor="white" stopOpacity="0.95" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id={`sideMask${uid}`}>
            <rect width="100%" height="100%" fill={`url(#sideFade${uid})`} />
          </mask>

          <motion.radialGradient
            id={`spot${uid}`}
            cx={cur.x}
            cy={cur.y}
            gradientUnits="userSpaceOnUse"
            animate={{ r: targetRadius }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="85%"  stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </motion.radialGradient>
          <mask id={`spotMask${uid}`}>
            <rect width="100%" height="100%" fill={`url(#spot${uid})`} />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill={`url(#hexBase${uid})`} mask={`url(#sideMask${uid})`} />
        {cur.inside && (
          <rect
            width="100%" height="100%"
            fill={`url(#hexBright${uid})`}
            mask={`url(#spotMask${uid})`}
            style={{ opacity: cur.moving ? 1 : 0.25, transition: 'opacity 800ms ease' }}
          />
        )}
        <rect width="100%" height="100%" fill="rgba(127,32,55,0.04)" mask={`url(#sideMask${uid})`} />
      </svg>
    </div>
  );
}

export function HeroGridBg({ opacity = 0.2, uid = 'Hero' }) {
  return <CursorGrid uid={uid} opacity={opacity} aspectRatio="xMidYMid slice" posStyle={{ inset: 0 }} />;
}

export function SectionGridBg({ opacity = 0.2, uid = 'Section' }) {
  return <CursorGrid uid={uid} opacity={opacity} aspectRatio="none" posStyle={{ top: 0, left: 0, width: '100%', height: '100%' }} />;
}

export function FooterGridBg({ opacity = 0.2, uid = 'Footer' }) {
  return <CursorGrid uid={uid} opacity={opacity} aspectRatio="none" posStyle={{ top: 0, left: 0, width: '100%', height: '100%' }} />;
}