/**
 * serviceshome.jsx — WellMind Data Solutions
 * ─────────────────────────────────────────────────────────────────────────────
 * "Our AI Services" as a scroll-driven card sequence, modelled on the Lusion
 * About page. The section is pinned and the scrollbar plays the animation:
 *
 *   1. A deck of face-down cards rises from the bottom of the screen
 *   2. The deck fans out, cards tilting left → right
 *   3. The fan spreads into one wide row while a white strap sweeps behind it
 *   4. The cards flip over one after another (left → right), each one passing
 *      edge-on, to reveal the service name and what's included
 *   5. The row settles with a slight 3D angle; hover lifts a card, click opens it
 *
 * Positions are computed by pure functions (cardPose / strapPose) and written
 * straight to the DOM every frame — no React re-renders while scrolling.
 * Mobile / reduced-motion gets a 2-column grid of the same cards.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  motion, useInView, useReducedMotion,
} from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const STAGE  = '#010101';   // page black (was brand violet)
const INK    = '#0f0f0f';   // brand dark text
const PAPER  = '#FFFFFF';

const services = [
  { title: 'AI & ML',         path: '/services-ai-ml',          items: ['Predictive Analytics', 'NLP & LLM Solutions', 'Computer Vision', 'Model Deployment', 'MLOps'] },
  { title: 'Data Science',    path: '/services-data-analytics', items: ['KPI Dashboards', 'Data Pipelines', 'Statistical Modelling', 'Business Intelligence', 'Forecasting'] },
  { title: 'AI Software',     path: '/services-ai-software',    items: ['Custom AI Applications', 'API Integration', 'Scalable Architecture', 'AI Copilots', 'Cloud Delivery'] },
  { title: 'Automation',      path: '/services-automation',     items: ['Intelligent RPA', 'Workflow Automation', 'Document Processing', 'System Integration', 'ROI Tracking'] },
  { title: 'UI/UX Design',    path: '/services-ui-ux',          items: ['Design Systems', 'Product Prototyping', 'User Research', 'AI Product UX', 'Usability Testing'] },
  { title: 'Bio informatics', path: '/services-bioinformatics', items: ['Genomics Pipelines', 'Clinical Diagnostic Models', 'Health AI', 'Data Validation', 'Compliance'] },
];

/* ─── Card back: white line-art on black ───────────────────────────── */
function CardBack() {
  const stroke = 'rgba(255,255,255,0.92)';
  return (
    <svg viewBox="0 0 200 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden
         style={{ display: 'block' }}>
      <rect x="0" y="0" width="200" height="280" fill={STAGE} />
      <rect x="9" y="9" width="182" height="262" rx="9" fill="none" stroke={stroke} strokeWidth="1.6" />
      <rect x="17" y="17" width="166" height="246" rx="5" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.6" />
      {/* radiating lines */}
      <g stroke={stroke} strokeWidth="0.9" fill="none" opacity="0.85">
        {[...Array(12)].map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return <line key={i} x1={100 + Math.cos(a) * 34} y1={140 + Math.sin(a) * 34} x2={100 + Math.cos(a) * 92} y2={140 + Math.sin(a) * 92 * 1.35} />;
        })}
        <path d="M17 60 L100 30 L183 60" />
        <path d="M17 220 L100 250 L183 220" />
        <path d="M30 80 L100 52 L170 80" opacity="0.6" />
        <path d="M30 200 L100 228 L170 200" opacity="0.6" />
        <circle cx="100" cy="140" r="58" />
        <circle cx="100" cy="140" r="46" opacity="0.6" />
      </g>
      {/* corner ticks */}
      <g stroke={stroke} strokeWidth="1.2">
        <path d="M17 36 L36 17" /><path d="M183 36 L164 17" />
        <path d="M17 244 L36 263" /><path d="M183 244 L164 263" />
      </g>
      {/* WellMind hexagon mark */}
      <polygon points="100,116 121,128 121,152 100,164 79,152 79,128" fill={PAPER} />
      <polygon points="100,124 114,132 114,148 100,156 86,148 86,132" fill={STAGE} />
      <polygon points="100,131 108,135.5 108,144.5 100,149 92,144.5 92,135.5" fill={PAPER} />
    </svg>
  );
}

/* ─── Card front: title + what's included, mirrored title at the foot ─────── */
function CardFront({ svc }) {
  const letter = svc.title.trim()[0].toUpperCase();
  const glyph = (
    <span style={{
      display: 'grid', placeItems: 'center', width: '14cqw', height: '14cqw', minWidth: 22, minHeight: 22,
      background: INK, color: PAPER, borderRadius: '2.2cqw',
      fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: '7.6cqw', lineHeight: 1,
    }}>{letter}</span>
  );
  const title = (
    <span style={{
      fontFamily: "'Unbounded', sans-serif", fontWeight: 700, textTransform: 'uppercase',
      fontSize: '8.4cqw', letterSpacing: '0.01em', lineHeight: 1.1, color: INK,
    }}>{svc.title}</span>
  );
  return (
    <div style={{
      position: 'absolute', inset: 0, background: PAPER, color: INK,
      padding: '8cqw 8cqw 7cqw', display: 'flex', flexDirection: 'column',
      fontFamily: "'Space Grotesk', sans-serif",
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '3cqw' }}>
        {title}{glyph}
      </div>

      <ul style={{ listStyle: 'none', margin: '9cqw 0 0', padding: 0, flex: 1 }}>
        {svc.items.map((it) => (
          <li key={it} style={{
            fontSize: '6.6cqw', fontWeight: 500, padding: '3.1cqw 0',
            borderBottom: '1px solid rgba(15,15,15,0.12)', letterSpacing: '0.005em',
          }}>{it}</li>
        ))}
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '3cqw', transform: 'rotate(180deg)' }}>
        {title}{glyph}
      </div>
    </div>
  );
}

/* ─── One hanging card ────────────────────────────────────────────────────── */
function PlayingCard({ svc, index, flipped, hanging, reduce }) {
  const navigate = useNavigate();
  const pose = { rot: 0, y: 0 };
  const flipDelay = reduce ? 0 : index * 0.13;

  return (
    <motion.div
      // idle sway (outer layer keeps it independent of hover)
      animate={reduce || !hanging ? { rotate: pose.rot, y: pose.y } : {
        rotate: [pose.rot - 1.1, pose.rot + 1.1, pose.rot - 1.1],
        y: [pose.y, pose.y - 7, pose.y],
      }}
      transition={reduce || !hanging ? { duration: 0 } : {
        duration: 5.2 + index * 0.55, repeat: Infinity, ease: 'easeInOut',
      }}
      style={{ transformOrigin: '50% -8%', flex: hanging ? '1 1 0' : undefined, maxWidth: 250, minWidth: 0, width: hanging ? undefined : '100%' }}
    >
      <motion.button
        type="button"
        onClick={() => navigate(svc.path)}
        aria-label={`${svc.title} — view service`}
        whileHover={reduce ? undefined : { y: -12, scale: 1.045 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        style={{
          display: 'block', width: '100%', padding: 0, border: 0, background: 'none',
          cursor: 'pointer', perspective: 1400, WebkitTapHighlightColor: 'transparent',
        }}
      >
        <motion.div
          initial={false}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 70, damping: 15, mass: 1, delay: flipDelay }}
          style={{
            position: 'relative', width: '100%', aspectRatio: '5 / 7.2', transformStyle: 'preserve-3d',
            containerType: 'inline-size', borderRadius: 14,
          }}
        >
          {/* back (visible first) */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 14, overflow: 'hidden',
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            border: '3px solid #FFFFFF', boxSizing: 'border-box',
          }}>
            <CardBack />
          </div>
          {/* front (revealed after flip) */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 14, overflow: 'hidden',
            transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            textAlign: 'left',
          }}>
            <CardFront svc={svc} />
          </div>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

/* ═══════════════════════ SCROLL CHOREOGRAPHY (pure maths) ═══════════════════════ */
// <poses>
const N_CARDS = 6;
const CARD_AR = 7.2 / 5;                       // height / width
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
const ease = (p, a, b) => smooth(clamp((p - a) / (b - a)));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
function keyframes(p, kf) {
  if (p <= kf[0][0]) return kf[0][1];
  for (let i = 1; i < kf.length; i++) {
    if (p <= kf[i][0]) {
      const [p0, v0] = kf[i - 1], [p1, v1] = kf[i];
      return lerp(v0, v1, smooth((p - p0) / (p1 - p0)));
    }
  }
  return kf[kf.length - 1][1];
}

// scroll timeline (0 → 1)
const T_RISE = [0.00, 0.14];      // deck rises from the bottom
const T_FAN = [0.14, 0.34];      // deck fans out
const T_SPREAD = [0.34, 0.56];      // fan spreads into a full-width row, back-faces still showing
const FLIP_START = 0.56, FLIP_STAGGER = 0.04, FLIP_LEN = 0.13;   // cards flip one after another

// per-card looks
const REST_Y = [0.10, 0.05, 0.00, -0.03, -0.07, -0.12];  // × card width — row climbs with the strap
const REST_ROT = [-3, 0.8, -1.5, 1.8, -1.2, 2.8];            // deg, final tilt
const REST_YAW = [-12, -7, -2.5, 2.5, 7, 12];                // deg, final 3D turn toward the centre
const SPREAD_ROT = [-8, -3, -3.5, 1, 2.5, 8];                 // deg, while face-down in the row

function cardSize(W, H) {
  const cw = Math.min(0.15 * W, 0.34 * H);
  return { cw, ch: cw * CARD_AR };
}

/** Where card i is at scroll progress p. W/H = size of the stage in px. */
function cardPose(p, i, W, H) {
  const { cw } = cardSize(W, H);
  const mid = i - (N_CARDS - 1) / 2;
  const rise = ease(p, T_RISE[0], T_RISE[1]);
  const fan = ease(p, T_FAN[0], T_FAN[1]);
  const spread = ease(p, T_SPREAD[0], T_SPREAD[1]);

  // 1 · stacked deck
  const stack = { x: mid * 3.2, y: lerp(0.45 * H, 0.25 * H, rise) - i * 1.6, rot: lerp(-5, 2, rise) + (i % 2 ? 0.9 : -0.9) };
  // 2 · fan (bottom of the cards runs off-screen, like the reference)
  const fanned = { x: mid * 0.52 * cw, y: 0.25 * H + i * 0.012 * H, rot: lerp(-9, 12, i / (N_CARDS - 1)) };
  // 3 · wide row, still face-down
  const row = { x: mid * 1.05 * cw, y: REST_Y[i] * cw * 0.5, rot: SPREAD_ROT[i] };

  let x = lerp(lerp(stack.x, fanned.x, fan), row.x, spread);
  let y = lerp(lerp(stack.y, fanned.y, fan), row.y, spread);
  let rot = lerp(lerp(stack.rot, fanned.rot, fan), row.rot, spread);

  // 4 · flip (left → right)
  const f0 = FLIP_START + i * FLIP_STAGGER;
  const t = clamp((p - f0) / FLIP_LEN);
  const te = easeInOut(t);
  const arc = Math.sin(Math.PI * te);
  y = lerp(y, REST_Y[i] * cw, te) - arc * 0.05 * H;
  rot = lerp(rot, REST_ROT[i], te);
  return {
    x, y, rot,
    scale: 1 + 0.06 * arc,
    flip: 180 * te,
    yaw: REST_YAW[i] * te,
    z: i + (t > 0 && t < 1 ? 20 : 0),
    done: t >= 1,
  };
}

/** White strap: an arch that is drawn in from the right, then swings up to the right. */
const STRAP = { cx: 960, cy: 1250, R: 1100, from: -15, to: 195 };   // viewBox 1920 × 1000
function strapPath() {
  const pt = (deg) => {
    const a = (deg * Math.PI) / 180;
    return [STRAP.cx + STRAP.R * Math.cos(a), STRAP.cy - STRAP.R * Math.sin(a)];
  };
  const [x0, y0] = pt(STRAP.from), [x1, y1] = pt(STRAP.to);
  return `M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${STRAP.R} ${STRAP.R} 0 1 0 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
}
function strapPose(p) {
  return {
    draw: keyframes(p, [[0, 0.09], [0.14, 0.13], [0.34, 0.30], [0.56, 0.50], [0.89, 0.74], [1, 0.76]]),
    rot: keyframes(p, [[0, 0], [0.34, 0], [0.56, -6], [0.89, -25], [1, -26]]),
    ty: keyframes(p, [[0, 60], [0.34, 40], [0.56, 90], [0.89, 330], [1, 340]]),
  };
}
// </poses>

/* ═══════════════════════════ PINNED STAGE (desktop) ═══════════════════════════ */
const HEADER_GAP = 'clamp(56px, 5.6vw, 78px)';   // fixed site header
const SCRUB_SCREENS = 4.6;                        // extra screens of scrolling that play the sequence

/* index.css puts `zoom: 0.9` on <html>: one screen = innerHeight / zoom CSS px */
function useScreenHeight() {
  const read = () => {
    const z = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
    return Math.round(window.innerHeight / z);
  };
  const [h, setH] = useState(() => (typeof window === 'undefined' ? 900 : read()));
  useEffect(() => {
    const on = () => setH(read());
    on();
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return h;
}

const CARD_CSS = `
.wm-fan-card{position:absolute;left:50%;top:50%;will-change:transform;pointer-events:none}
.wm-fan-stage[data-ready="1"] .wm-fan-card{pointer-events:auto}
.wm-fan-btn{display:block;width:100%;padding:0;border:0;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent;
  transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.wm-fan-stage[data-ready="1"] .wm-fan-btn:hover,.wm-fan-stage[data-ready="1"] .wm-fan-btn:focus-visible{transform:translateY(-14px) scale(1.035)}
`;

function PinnedCards() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const layerRef = useRef(null);
  const strapGroupRef = useRef(null);
  const strapPathRef = useRef(null);
  const cardRefs = useRef([]);
  const flipRefs = useRef([]);
  const stageH = useScreenHeight();
  const [box, setBox] = useState({ W: 1600, H: 800 });

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => setBox({ W: el.clientWidth, H: el.clientHeight }));
    ro.observe(el);
    setBox({ W: el.clientWidth, H: el.clientHeight });
    return () => ro.disconnect();
  }, [stageH]);

  const { cw, ch } = cardSize(box.W, box.H);

  useEffect(() => {
    const section = sectionRef.current, sticky = stickyRef.current;
    if (!section || !sticky) return undefined;
    const { W, H } = box;
    let raf = 0, cur = -1, target = 0, last = performance.now(), ready = '';

    const progress = () => {
      const r = section.getBoundingClientRect();
      const st = sticky.getBoundingClientRect();
      const span = Math.max(1, r.height - st.height);
      return clamp(-r.top / span);
    };

    const apply = (p) => {
      for (let i = 0; i < N_CARDS; i++) {
        const c = cardPose(p, i, W, H);
        const el = cardRefs.current[i], fl = flipRefs.current[i];
        if (!el || !fl) continue;
        el.style.transform = `translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0) rotate(${c.rot.toFixed(3)}deg) scale(${c.scale.toFixed(4)})`;
        el.style.zIndex = String(c.z);
        fl.style.transform = `rotateY(${(c.flip + c.yaw).toFixed(3)}deg)`;
      }
      const sp = strapPose(p);
      if (strapPathRef.current) strapPathRef.current.setAttribute('stroke-dasharray', `${sp.draw.toFixed(4)} 2`);
      if (strapGroupRef.current) strapGroupRef.current.setAttribute('transform', `translate(0 ${sp.ty.toFixed(1)}) rotate(${sp.rot.toFixed(2)} 960 700)`);
      const rd = p > 0.9 ? '1' : '0';
      if (rd !== ready) { ready = rd; sticky.setAttribute('data-ready', rd); }
    };

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.08, (now - last) / 1000); last = now;
      target = progress();
      if (cur < 0) cur = target;
      if (Math.abs(target - cur) > 0.0002) cur += (target - cur) * (1 - Math.exp(-dt * 8));   // silky follow
      else cur = target;
      apply(cur);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [box]);

  return (
    <section
      ref={sectionRef}
      aria-label="Our AI services"
      style={{ position: 'relative', width: '100%', height: Math.round(stageH * (1 + SCRUB_SCREENS)), background: STAGE }}
    >
      <style>{CARD_CSS}</style>
      <div
        ref={stickyRef}
        className="wm-fan-stage"
        data-ready="0"
        style={{ position: 'sticky', top: 0, height: stageH, overflow: 'hidden', background: STAGE }}
      >
        {/* white strap */}
        <svg viewBox="0 0 1920 1000" preserveAspectRatio="xMidYMid slice" aria-hidden
             style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="wmStrapGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1000">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#dddddd" />
            </linearGradient>
          </defs>
          <g ref={strapGroupRef}>
            <path ref={strapPathRef} d={strapPath()} pathLength="1" fill="none" stroke="url(#wmStrapGrad)"
                  strokeWidth="78" strokeLinecap="round" strokeDasharray="0.09 2" />
          </g>
        </svg>

        {/* cards */}
        <div ref={layerRef} style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: HEADER_GAP }}>
          {services.map((svc, i) => (
            <div
              key={svc.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="wm-fan-card"
              style={{ width: cw, height: ch, marginLeft: -cw / 2, marginTop: -ch / 2 }}
            >
              <button
                type="button"
                className="wm-fan-btn"
                onClick={() => navigate(svc.path)}
                aria-label={`${svc.title} — view service`}
                style={{ height: '100%', perspective: 1600 }}
              >
                <div
                  ref={(el) => { flipRefs.current[i] = el; }}
                  style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', containerType: 'inline-size', borderRadius: 14 }}
                >
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: 14, overflow: 'hidden', boxSizing: 'border-box',
                    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', border: '3px solid #FFFFFF',
                  }}>
                    <CardBack />
                  </div>
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: 14, overflow: 'hidden', textAlign: 'left',
                    transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                  }}>
                    <CardFront svc={svc} />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Mobile / tablet: 2-col grid, each card flips as it enters ───────────── */
function MobileSlot({ svc, index, reduce }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  return (
    <div ref={ref}>
      <PlayingCard svc={svc} index={index % 2} flipped={inView} hanging={false} reduce={reduce} />
    </div>
  );
}

function MobileGrid({ reduce }) {
  return (
    <div style={{ background: STAGE, padding: 'clamp(28px, 6vw, 48px) clamp(16px, 4vw, 28px)' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: 'clamp(14px, 4vw, 24px)', maxWidth: 560, margin: '0 auto',
      }}>
        {services.map((svc, i) => <MobileSlot key={svc.title} svc={svc} index={i} reduce={reduce} />)}
      </div>
    </div>
  );
}

const ScrollTest = () => {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ marginTop: 'clamp(8px, 2vw, 24px)' }}>
      {isMobile || reduce ? <MobileGrid reduce={reduce} /> : <PinnedCards />}
    </div>
  );
};

export default ScrollTest;
