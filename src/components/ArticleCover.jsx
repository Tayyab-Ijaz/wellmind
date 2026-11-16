/**
 * ArticleCover.jsx — generated cover art for resource articles and the Resources menu.
 * Pure SVG (no image files): a dark panel with a topic motif (flow, compare, stairs, layers, grid, bars,
 * funnel, loop, spectrum) in a muted accent colour per category. Fills its parent; the parent sets the size.
 */
import React, { useId } from 'react';

const CAT_ACCENT = {
  'Software Engineering': '#8fb0ff',
  'AI & Machine Learning': '#c0a8ff',
  'Data & Cloud': '#6fdccd',
  'Healthcare AI': '#ff9fb0',
  'Biomedical Data Science': '#f6cb7a',
};
const DEFAULT_ACCENT = '#d9d9d9';
const LINE = 'rgba(255,255,255,0.86)';
const FAINT = 'rgba(255,255,255,0.3)';
const FILL = 'rgba(255,255,255,0.07)';

const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

/* ── motifs: each is drawn inside an 800 x 400 box ─────────────────────────── */
function Flow({ a, j }) {
  const xs = [130, 265, 400, 535, 670];
  const y = (i) => 250 - i * 24 - j[0] * 14;
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {xs.slice(0, -1).map((x, i) => (
        <g key={`l${i}`}>
          <path d={`M${x + 50} ${y(i) + 28}L${xs[i + 1] - 50} ${y(i + 1) + 28}`} stroke={FAINT} strokeWidth="2.5" />
          <path d={`M${xs[i + 1] - 58} ${y(i + 1) + 22}l8 6-8 6`} stroke={LINE} strokeWidth="2.5" fill="none" />
        </g>
      ))}
      {xs.map((x, i) => (
        <g key={i}>
          <rect x={x - 50} y={y(i)} width="100" height="56" rx="14" fill={i === xs.length - 1 ? a : FILL} fillOpacity={i === xs.length - 1 ? 0.9 : 1} stroke={i === xs.length - 1 ? a : LINE} strokeWidth="2" />
          <path d={`M${x - 28} ${y(i) + 22}h56M${x - 28} ${y(i) + 36}h34`} stroke={i === xs.length - 1 ? '#0b0b0b' : FAINT} strokeWidth="3.5" />
        </g>
      ))}
    </g>
  );
}

function Compare({ a, j }) {
  const base = 316;
  const hs = [[120, 190, 90], [210, 130, 170], [90, 230, 150]].map((g) => g.map((v, k) => v + j[k % j.length] * 20));
  return (
    <g>
      <path d={`M120 ${base}H680`} stroke={FAINT} strokeWidth="2" />
      {hs.map((g, gi) => g.map((h, bi) => (
        <rect key={`${gi}${bi}`} x={150 + gi * 200 + bi * 46} y={base - h} width="34" height={h} rx="8"
          fill={gi === 1 && bi === 1 ? a : FILL} fillOpacity={gi === 1 && bi === 1 ? 0.92 : 1} stroke={gi === 1 && bi === 1 ? a : LINE} strokeWidth="2" />
      )))}
    </g>
  );
}

function Stairs({ a }) {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => {
        const h = 54 + i * 36;
        return <rect key={i} x={130 + i * 112} y={330 - h} width="100" height={h} rx="12"
          fill={i === 4 ? a : FILL} fillOpacity={i === 4 ? 0.92 : 1} stroke={i === 4 ? a : LINE} strokeWidth="2" />;
      })}
      <path d="M150 300L300 244 450 188 600 120" stroke={FAINT} strokeWidth="2.5" strokeDasharray="4 8" fill="none" />
    </g>
  );
}

function Layers({ a }) {
  return (
    <g strokeLinejoin="round">
      {[0, 1, 2, 3].map((k) => {
        const i = 3 - k;                        // draw the bottom slab first so upper ones overlap it
        const cy = 118 + i * 58;
        const top = i === 0;
        return (
          <g key={i}>
            <path d={`M210 ${cy}L210 ${cy + 16}L400 ${cy + 76}L590 ${cy + 16}L590 ${cy}Z`} fill="rgba(0,0,0,0.35)" stroke={LINE} strokeWidth="1.8" />
            <path d={`M210 ${cy}L400 ${cy - 60}L590 ${cy}L400 ${cy + 60}Z`} fill={top ? a : FILL} fillOpacity={top ? 0.9 : 1} stroke={top ? a : LINE} strokeWidth="2" />
          </g>
        );
      })}
    </g>
  );
}

function Grid({ a }) {
  const cells = [];
  for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) cells.push([c, r]);
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {cells.map(([c, r], i) => {
        const x = 130 + c * 148, y = 104 + r * 112, last = i === cells.length - 1;
        return (
          <g key={i}>
            <rect x={x} y={y} width="116" height="88" rx="14" fill={last ? a : FILL} fillOpacity={last ? 0.9 : 1} stroke={last ? a : LINE} strokeWidth="2" />
            {i % 3 !== 2 || last
              ? <path d={`M${x + 36} ${y + 44}l14 14 28-30`} stroke={last ? '#0b0b0b' : LINE} strokeWidth="4" fill="none" />
              : <path d={`M${x + 34} ${y + 44}h48`} stroke={FAINT} strokeWidth="4" />}
          </g>
        );
      })}
    </g>
  );
}

function Bars({ a, j }) {
  const v = [220, 150, 90, -70, -170];
  return (
    <g>
      <path d="M400 70V336" stroke={FAINT} strokeWidth="2" strokeDasharray="4 6" />
      {v.map((n, i) => {
        const len = Math.abs(n) + j[i % j.length] * 16;
        const pos = n > 0;
        return <rect key={i} x={pos ? 400 : 400 - len} y={92 + i * 52} width={len} height="30" rx="10"
          fill={pos ? FILL : a} fillOpacity={pos ? 1 : 0.9} stroke={pos ? LINE : a} strokeWidth="2" />;
      })}
    </g>
  );
}

function Funnel({ a }) {
  return (
    <g strokeLinejoin="round">
      {[0, 1, 2, 3, 4].map((i) => {
        const top = 540 - i * 90, bot = top - 70, y = 66 + i * 54, last = i === 4;
        return <path key={i} d={`M${400 - top / 2} ${y}L${400 + top / 2} ${y}L${400 + bot / 2} ${y + 46}L${400 - bot / 2} ${y + 46}Z`}
          fill={last ? a : FILL} fillOpacity={last ? 0.92 : 1} stroke={last ? a : LINE} strokeWidth="2" />;
      })}
    </g>
  );
}

function Loop({ a }) {
  const n = 6, R = 118, cx = 400, cy = 200;
  const pts = Array.from({ length: n }, (_, i) => { const t = (-90 + i * (360 / n)) * (Math.PI / 180); return [cx + Math.cos(t) * R * 1.5, cy + Math.sin(t) * R]; });
  return (
    <g strokeLinecap="round">
      <ellipse cx={cx} cy={cy} rx={R * 1.5} ry={R} fill="none" stroke={FAINT} strokeWidth="2.5" strokeDasharray="3 9" />
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="20" fill={i === 3 ? a : FILL} fillOpacity={i === 3 ? 0.92 : 1} stroke={i === 3 ? a : LINE} strokeWidth="2" />
          <circle cx={x} cy={y} r="5" fill={i === 3 ? '#0b0b0b' : LINE} />
        </g>
      ))}
      <circle cx={cx} cy={cy} r="34" fill="none" stroke={LINE} strokeWidth="2" />
      <path d={`M${cx - 12} ${cy}h24M${cx + 6} ${cy - 8}l8 8-8 8`} stroke={LINE} strokeWidth="3" fill="none" />
    </g>
  );
}

function Spectrum({ a }) {
  const xs = [150, 300, 470, 640], rs = [26, 40, 56, 74];
  return (
    <g>
      <path d="M100 200H720" stroke={FAINT} strokeWidth="2.5" strokeDasharray="4 8" />
      {xs.map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="200" r={rs[i]} fill={i === 3 ? a : FILL} fillOpacity={i === 3 ? 0.92 : 1} stroke={i === 3 ? a : LINE} strokeWidth="2" />
          <circle cx={x} cy="200" r={rs[i] * 0.4} fill={i === 3 ? '#0b0b0b' : FAINT} />
        </g>
      ))}
    </g>
  );
}

const MOTIFS = { flow: Flow, compare: Compare, stairs: Stairs, layers: Layers, grid: Grid, bars: Bars, funnel: Funnel, loop: Loop, spectrum: Spectrum };

// fit='slice' fills the box (cards, article hero); fit='meet' keeps the whole motif visible (square menu thumbnails).
export default function ArticleCover({ cat, kind = 'flow', seed = '', fit = 'slice', className, style }) {
  const uid = useId().replace(/:/g, '');
  const a = CAT_ACCENT[cat] || DEFAULT_ACCENT;
  const h = hash(seed || kind);
  const j = [0, 1, 2, 3, 4].map((i) => ((h >> (i * 3)) & 7) / 7);
  const Motif = MOTIFS[kind] || Flow;
  return (
    <svg className={className} style={{ display: 'block', width: '100%', height: '100%', ...style }} viewBox="0 0 800 400" preserveAspectRatio={`xMidYMid ${fit}`} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`bg${uid}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="800" y2="400"><stop offset="0" stopColor="#1d1d22" /><stop offset="1" stopColor="#060607" /></linearGradient>
        <radialGradient id={`gl${uid}`} gradientUnits="userSpaceOnUse" cx="660" cy="30" r="520"><stop offset="0" stopColor={a} stopOpacity="0.34" /><stop offset="1" stopColor={a} stopOpacity="0" /></radialGradient>
        <pattern id={`dt${uid}`} width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#fff" fillOpacity="0.14" /></pattern>
      </defs>
      <rect x="-800" y="-800" width="2400" height="2000" fill={`url(#bg${uid})`} />
      <rect x="-800" y="-800" width="2400" height="2000" fill={`url(#gl${uid})`} />
      <rect x="-800" y="-800" width="2400" height="2000" fill={`url(#dt${uid})`} />
      <circle cx={620 + j[1] * 60} cy={60 + j[2] * 40} r={190 + j[3] * 40} fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="1.5" />
      <circle cx={620 + j[1] * 60} cy={60 + j[2] * 40} r={120 + j[3] * 30} fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="1.5" />
      <g transform="translate(400 200) scale(0.82) translate(-400 -200)"><Motif a={a} j={j} /></g>
    </svg>
  );
}
