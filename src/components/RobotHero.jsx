/**
 * RobotHero.jsx — WellMind Data Solutions
 * ─────────────────────────────────────────────────────────────────────────────
 * A fully procedural (no external model / no external assets) humanoid robot
 * built from primitive three.js geometry and rendered through
 * @react-three/fiber. Lives in the homepage hero, replacing the old static
 * illustration.
 *
 * Interaction:
 *   • Hover a HAND  → that arm lifts up.
 *   • Hover a FOOT  → that leg lifts up.
 *   • Keep hovering the robot (anywhere) for ~900ms → it breaks into a
 *     looping dance until the pointer leaves.
 *   • Otherwise it idles: gentle float + head/torso parallax that follows
 *     the pointer.
 *
 * Dependencies: three, @react-three/fiber
 *   npm install three @react-three/fiber
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { Suspense, useState, lazy } from 'react';

// three / fiber are loaded lazily so the rest of the site never pays for
// the WebGL bundle unless the homepage hero actually mounts.
const RobotCanvas = lazy(() => import('./RobotCanvasInner'));

export default function RobotHero({ height = 'clamp(420px, 38vw, 560px)' }) {
  const [ready, setReady] = useState(false);

  return (
    <div
      className="wm-robot-hero"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 760,
        height,
        margin: '0 auto',
        touchAction: 'pan-y',
      }}
    >
      <Suspense fallback={<RobotFallback height={height} />}>
        <RobotCanvas onReady={() => setReady(true)} />
      </Suspense>

      <div
        aria-hidden
        style={{
          position: 'absolute', left: '50%', bottom: 'clamp(-4px, 1vw, 10px)',
          transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '7px 14px', borderRadius: 99,
          background: 'rgba(15,15,15,0.55)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.14)',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: '#f0f0f0',
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.6s ease 0.3s',
          pointerEvents: 'none', whiteSpace: 'nowrap',
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#b6b6b6', boxShadow: '0 0 8px #b6b6b6' }} />
        Hover the hands or feet — keep hovering to see it dance
      </div>
    </div>
  );
}

function RobotFallback({ height }) {
  return (
    <div style={{ width: '100%', height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 120, height: 120, borderRadius: '50%',
        border: '3px solid rgba(92,92,92,0.25)', borderTopColor: '#5c5c5c',
        animation: 'wmRobotSpin 0.9s linear infinite',
      }} />
      <style>{`@keyframes wmRobotSpin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
