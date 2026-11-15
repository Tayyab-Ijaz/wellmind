import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { B } from '../theme';

/**
 * PipelineFlow — symmetric branch-and-merge diagram used in the Automation hero.
 *
 *            [ Trigger ]
 *             /       \
 *      [ Extract ]  [        ]
 *            |      [ Route  ]
 *      [Transform]  [        ]
 *             \       /
 *            [ Deliver ]
 *
 * nodes: [trigger, extract, transform, route, deliver] -> { label, sub, color }
 * Everything lives on a fixed grid, so nothing can overlap or leave the card.
 */
const H = 78;      // node height
const GAP = 26;    // vertical gap between rows
const COL_GAP = 16;

const ROW = (n) => n * (H + GAP); // top edge of row n (0-based)

export default function PipelineFlow({ nodes }) {
  const [active, setActive] = useState(null);
  const height = ROW(3) + H;

  const place = [
    { gridColumn: '1 / 3', gridRow: 1 },   // Trigger
    { gridColumn: 1,       gridRow: 2 },   // Extract
    { gridColumn: 1,       gridRow: 3 },   // Transform
    { gridColumn: 2,       gridRow: '2 / 4' }, // Route (spans both middle rows)
    { gridColumn: '1 / 3', gridRow: 4 },   // Deliver
  ];

  // connector geometry (x in %, y in px) — mirrored left/right
  const L = '25%', R = '75%', C = '50%';
  const lines = [
    [C, ROW(0) + H, L, ROW(1)],           // Trigger  -> Extract
    [C, ROW(0) + H, R, ROW(1)],           // Trigger  -> Route
    [L, ROW(1) + H, L, ROW(2)],           // Extract  -> Transform
    [L, ROW(2) + H, C, ROW(3)],           // Transform-> Deliver
    [R, ROW(2) + H, C, ROW(3)],           // Route    -> Deliver
  ];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 380, margin: '0 auto', height }}>
      <svg
        width="100%" height={height}
        style={{ position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none' }}
        aria-hidden="true"
      >
        {lines.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(0,0,0,0.28)" strokeWidth="1.5" strokeDasharray="4 4" />
        ))}
      </svg>

      <div style={{
        position: 'relative', height,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: `repeat(4, ${H}px)`,
        columnGap: COL_GAP, rowGap: GAP,
      }}>
        {nodes.slice(0, 5).map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{
              ...place[i],
              position: 'relative', boxSizing: 'border-box', minWidth: 0,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center', padding: '8px 12px', overflow: 'hidden',
              borderRadius: 'var(--radius-md, 12px)',
              background: active === i ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.82)',
              border: `1.5px solid ${active === i ? node.color : node.color + '50'}`,
              boxShadow: active === i ? `0 8px 24px ${node.color}30` : '0 2px 10px rgba(0,0,0,0.06)',
              transition: 'background .25s ease, border-color .25s ease, box-shadow .25s ease',
              cursor: 'default', zIndex: 1,
            }}
          >
            <span style={{
              position: 'absolute', top: 8, left: 10, fontSize: 'var(--fs-label)', fontWeight: 800,
              letterSpacing: '0.08em', color: B.textMuted, opacity: 0.7,
            }}>0{i + 1}</span>
            <div style={{ fontWeight: 800, fontSize: 'var(--fs-small)', color: node.color, marginBottom: 3 }}>{node.label}</div>
            <div style={{ fontSize: 'var(--fs-label)', color: B.textMuted, fontWeight: 500, lineHeight: 1.4 }}>{node.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}