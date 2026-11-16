/**
 * ScrollFrameIntro — WellMind Data Solutions (home hero)
 *
 *  1. INTRO VIDEO: full-screen, plays once per browser session, nothing else on
 *     screen (header, text and scrolling are hidden/locked until it ends or the
 *     visitor taps / clicks it or presses Esc / Enter), then fades out. It is skipped
 *     automatically for reduced-motion / data-saver / 2G visitors and when the
 *     video can't start within a few seconds.
 *  2. WELLMIND HERO: live particle field behind the giant white "WELLMIND"
 *     title and "+" crop marks.
 *  3. TUNNEL SECTION (with a gap above it, one pinned stage):
 *       rest   → rounded frame with the Three.js tunnel on the left,
 *                hero text (children) on the right
 *       scroll → the frame grows to fill the screen while the text fades,
 *                then the scrollbar flies the camera through the tunnel
 *       end    → the pin releases and the next section of the page scrolls in
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import ParticleField from './ParticleField';

const PAGE_BLACK = '#010101';
// Files live in /public. Cached for a year (immutable) → rename (e.g. -v2) if you ever replace them.
const INTRO_VIDEO_SRC = '/hero-intro-1080.mp4';     // desktop: 1080p, no audio, streaming-ready
const INTRO_VIDEO_SRC_SMALL = '/hero-intro-720.mp4'; // phones / small screens
const INTRO_POSTER_SRC = '/hero-intro-poster.jpg';  // shown instantly while the video loads

const TITLE = 'WELLMIND';
const TITLE_FONT = "'Space Grotesk', sans-serif";
const TITLE_WEIGHT = 600;
const SECTION_GAP = 'clamp(56px, 9vw, 140px)';      // space between the WELLMIND hero and the tunnel section

const HEADER_GAP = 'clamp(56px, 5.6vw, 78px)';      // keeps the hero clear of the fixed header
const SCRUB_SCREENS = 4.2;                          // extra screens of scrolling for expand + fly-through
const EXPAND_END = 0.22;                            // share of the scroll used to grow the card to full screen
const CARD_SCALE = 0.68;                            // resting card size (1 = fills its column)
const CARD_TILT = 5;                                // degrees the card tilts while it grows (0 = none)
const CARD_COLOR = '#1f1f23';                       // solid card border (no gradient)
const STACK_BELOW = 860;                            // stage width (px) under which text goes below the frame

// Captions shown one after another while the camera flies through the tunnel (equal share of the fly-through each)
const CHAPTERS = [
  { n: '01', label: 'Discover', title: 'Start with the problem.', text: 'We map your workflow, your data and what a good outcome looks like, before anything is built.' },
  { n: '02', label: 'Prepare', title: 'Make the data trustworthy.', text: 'Pipelines, quality checks and clear definitions turn scattered data into a solid foundation.' },
  { n: '03', label: 'Build', title: 'Software and models that work.', text: 'Applications, analytics and AI systems, built in short cycles you can see and test.' },
  { n: '04', label: 'Deploy', title: 'Ship it properly.', text: 'Cloud setup, automated releases and monitoring, so it keeps working after launch.' },
  { n: '05', label: 'Support', title: 'Stay with it.', text: 'Documentation, clean handover, and engineers who can join your team when you need more hands.' },
];

let introPlayed = false;                            // once per page load (not again when re-visiting Home)

/* Intro helpers ----------------------------------------------------------- */
const SEEN_KEY = 'wm-intro-seen';                   // sessionStorage: intro plays once per browser session
const START_TIMEOUT_MS = 3500;                      // video must be playing by now, else skip the intro
const STALL_MS = 3000;                              // …or skip if playback freezes (buffering) this long
const SAFETY_MS = 15000;                            // hard stop (the clip is ~10 s)

function introShouldSkip() {
  if (introPlayed) return true;
  try { if (sessionStorage.getItem(SEEN_KEY)) return true; } catch { /* storage blocked: just play it */ }
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    const c = navigator.connection;                 // data-saver or 2G → don't force a video on them
    if (c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || ''))) return true;
  } catch { /* unsupported: just play it */ }
  return false;
}
function markIntroSeen() {
  try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* storage blocked */ }
}
function pickIntroSrc() {
  const small = typeof window !== 'undefined' && window.matchMedia('(max-width: 820px), (max-height: 500px)').matches;
  return small ? INTRO_VIDEO_SRC_SMALL : INTRO_VIDEO_SRC;
}

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/* index.css puts `zoom: 0.9` on <html>; one screen = innerHeight / zoom CSS px */
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

/* ─── Title that always spans the full width, whatever the screen size ───── */
function useTitleMetrics() {
  const [m, setM] = useState({ w: 640, cap: 73, x: 4 });
  useEffect(() => {
    let dead = false;
    const measure = () => {
      const ctx = document.createElement('canvas').getContext('2d');
      ctx.font = `${TITLE_WEIGHT} 100px ${TITLE_FONT}`;
      const t = ctx.measureText(TITLE);
      const w = t.actualBoundingBoxLeft + t.actualBoundingBoxRight;
      const cap = t.actualBoundingBoxAscent;
      if (!dead && w > 0 && cap > 0) setM({ w, cap, x: t.actualBoundingBoxLeft });
    };
    const load = document.fonts?.load
      ? document.fonts.load(`${TITLE_WEIGHT} 100px Space Grotesk`).catch(() => {})
      : Promise.resolve();
    load.then(() => document.fonts?.ready).then(measure).catch(measure);
    return () => { dead = true; };
  }, []);
  return m;
}

function HeroTitle() {
  const { w, cap, x } = useTitleMetrics();
  const marks = [0, 25, 50, 75, 100];
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* "+" crop marks */}
      <div aria-hidden="true" style={{ position: 'relative', height: 'clamp(18px, 2vw, 30px)' }}>
        {marks.map((p) => (
          <span key={p} style={{
            position: 'absolute', left: `${p}%`, top: 0, transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.78)', fontFamily: 'Arial, sans-serif', fontWeight: 200,
            fontSize: 'var(--fs-section-h2)', lineHeight: 1,
          }}>+</span>
        ))}
      </div>
      <div role="heading" aria-level={2} style={{ margin: 0, lineHeight: 0 }}>
        <svg
          viewBox={`0 0 ${w} ${cap}`}
          role="img" aria-label="WellMind"
          style={{ display: 'block', width: '100%', height: 'auto', overflow: 'visible' }}
        >
          <text
            x={x} y={cap} fill="#FFFFFF"
            fontFamily={TITLE_FONT} fontWeight={TITLE_WEIGHT} fontSize="100"
          >{TITLE}</text>
        </svg>
      </div>
    </div>
  );
}

/* ─── 1. Intro video: plays once per session, alone ─────────────────────── */
function IntroVideo({ onDone }) {
  const vRef = useRef(null);
  const finishRef = useRef(null);
  const [fading, setFading] = useState(false);
  const [src] = useState(pickIntroSrc);                    // phones get the lighter 720p file

  useEffect(() => {
    const v = vRef.current;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';                       // no scrolling while it plays
    window.scrollTo({ top: 0, behavior: 'instant' });

    let finished = false, t1 = 0, startTimer = 0, stallTimer = 0;
    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(startTimer); clearTimeout(stallTimer);
      root.style.overflow = prevOverflow;
      markIntroSeen();
      setFading(true);
      t1 = setTimeout(() => { introPlayed = true; onDone(); }, 700);
    };
    finishRef.current = finish;

    const safety = setTimeout(finish, SAFETY_MS);         // never trap the visitor
    startTimer = setTimeout(finish, START_TIMEOUT_MS);    // video never started (slow network) → skip
    const onPlaying = () => { clearTimeout(startTimer); clearTimeout(stallTimer); };
    const onWaiting = () => { clearTimeout(stallTimer); stallTimer = setTimeout(finish, STALL_MS); };
    const onKey = (e) => { if (e.key === 'Escape') finish(); };

    v?.addEventListener('playing', onPlaying);
    v?.addEventListener('waiting', onWaiting);
    v?.addEventListener('ended', finish);
    v?.addEventListener('error', finish);
    window.addEventListener('keydown', onKey);
    const p = v?.play?.();
    if (p && p.catch) p.catch(finish);                    // autoplay blocked → skip straight to the site

    return () => {
      clearTimeout(safety); clearTimeout(startTimer); clearTimeout(stallTimer); clearTimeout(t1);
      v?.removeEventListener('playing', onPlaying);
      v?.removeEventListener('waiting', onWaiting);
      v?.removeEventListener('ended', finish);
      v?.removeEventListener('error', finish);
      window.removeEventListener('keydown', onKey);
      root.style.overflow = prevOverflow;
    };
  }, [onDone]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Intro video. Press Enter or tap to skip."
      className="wm-intro-wrap"
      onClick={() => finishRef.current?.()}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); finishRef.current?.(); } }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100000, background: PAGE_BLACK,
        opacity: fading ? 0 : 1, transition: 'opacity 0.7s ease',
        pointerEvents: fading ? 'none' : 'auto', cursor: 'pointer', outline: 'none',
      }}
    >
      <video
        ref={vRef} className="wm-intro-video" aria-hidden="true"
        src={src} poster={INTRO_POSTER_SRC} muted playsInline preload="auto" autoPlay
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}

/* ─── 2. Pinned stage: framed tunnel + hero text ─────────────────────────── */
function HeroTunnelStage({ sectionRef, stageH, children }) {
  const stickyRef = useRef(null);
  const gridRef = useRef(null);
  const slotRef = useRef(null);
  const textRef = useRef(null);
  const frameRef = useRef(null);
  const innerRef = useRef(null);
  const overlayRef = useRef(null);
  const railFillRef = useRef(null);
  const chapterRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    const sticky = stickyRef.current, grid = gridRef.current, slot = slotRef.current;
    const textEl = textRef.current, frame = frameRef.current, inner = innerRef.current;
    const section = sectionRef.current;
    const overlay = overlayRef.current, railFill = railFillRef.current;
    if (!sticky || !grid || !slot || !textEl || !frame || !inner || !section || !overlay || !railFill) return undefined;

    const BG = 0x010101;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BG);
    scene.fog = new THREE.FogExp2(BG, 0.04);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.setAttribute('aria-hidden', 'true');
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;';
    inner.appendChild(renderer.domElement);

    // curved path + white wireframe tube
    const points = [];
    for (let i = 0; i < 15; i++) {
      points.push(new THREE.Vector3(Math.sin(i * 0.4) * 6, Math.cos(i * 0.4) * 6, i * -15));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeo = new THREE.TubeGeometry(curve, 200, 4, 16, false);
    const tubeMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    scene.add(new THREE.Mesh(tubeGeo, tubeMat));

    // starfield
    const COUNT = 800;
    const pos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 100;
      pos[i + 1] = (Math.random() - 0.5) * 100;
      pos[i + 2] = (Math.random() - 0.5) * 200;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.6 });
    scene.add(new THREE.Points(starGeo, starMat));

    let curP = 0, targetP = 0, last = performance.now(), raf = 0;
    let lastKey = '';
    const ahead = new THREE.Vector3();

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.08, (now - last) / 1000); last = now;

      // scroll progress of the pinned section (0 → 1)
      const r = section.getBoundingClientRect();
      const st = sticky.getBoundingClientRect();
      const span = Math.max(1, r.height - st.height);
      targetP = clamp01(-r.top / span);
      curP += (targetP - curP) * (1 - Math.exp(-dt * 9));
      if (Math.abs(targetP - curP) < 0.00002) curP = targetP;

      if (!(r.bottom > 0 && r.top < window.innerHeight * 1.2)) return;   // off screen → do nothing

      // stage + resting slot, all in local CSS px (zoom-safe)
      const SW = sticky.clientWidth, SH = sticky.clientHeight;
      const colX = slot.offsetLeft, colY = slot.offsetTop, colW = slot.offsetWidth, colH = slot.offsetHeight;
      const ratio = SW <= STACK_BELOW ? 0.8 : 0.94;                  // frame height / width at rest
      const sw = Math.max(1, Math.min(colW, colH / ratio) * CARD_SCALE), sh = sw * ratio;
      const sx = colX + (colW - sw) / 2, sy = colY + (colH - sh) / 2;  // centred in its column

      // 1) the card grows from its resting size to the whole stage (and back when scrolling up)
      const e = ease(clamp01(curP / EXPAND_END));
      const x = lerp(sx, 0, e), y = lerp(sy, 0, e);
      const w = lerp(sw, SW, e), h = lerp(sh, SH, e);
      const pad = lerp(Math.min(10, sw * 0.03), 0, e);
      const rad = lerp(Math.min(30, sw * 0.06), 0, e);
      const tilt = CARD_TILT * Math.sin(Math.PI * e);             // tips over while zooming, flat at both ends
      frame.style.cssText =
        `position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;padding:${pad}px;` +
        `border-radius:${rad}px;box-sizing:border-box;pointer-events:none;z-index:2;` +
        `background:${CARD_COLOR};transform:rotate(${tilt}deg);will-change:transform,width,height;`;
      inner.style.borderRadius = `${Math.max(0, rad - pad)}px`;

      const iw = Math.max(1, Math.round(w - pad * 2)), ih = Math.max(1, Math.round(h - pad * 2));
      const key = `${iw}x${ih}`;
      if (key !== lastKey) {
        lastKey = key;
        renderer.setSize(iw, ih, false);
        camera.aspect = iw / ih;
        // Tall/narrow frames (phones) keep the same horizontal field of view as a landscape one, otherwise
        // the camera only sees a thin strip down the middle of the tunnel and the walls fade into the fog → black.
        const widen = Math.max(1, 1.5 / camera.aspect);
        camera.fov = Math.min(105, (2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(30)) * widen) * 180) / Math.PI);
        scene.fog.density = camera.aspect < 1 ? 0.025 : 0.04;      // thinner fog on portrait so the walls stay visible
        camera.updateProjectionMatrix();
      }

      // 2) hero text is carried along by the zoom: it grows and is pushed off to the right, under the card
      const cover = Math.max(SW / sw, SH / sh);
      const ts = 1 + (Math.min(cover, 2.4) - 1) * e;
      textEl.style.transformOrigin = `${sx + sw / 2 - textEl.offsetLeft}px ${sy + sh / 2 - textEl.offsetTop}px`;
      textEl.style.transform = `scale(${ts})`;
      textEl.style.opacity = String(1 - clamp01((e - 0.55) / 0.35));
      textEl.style.pointerEvents = e > 0.04 ? 'none' : 'auto';
      textEl.style.visibility = e >= 0.999 ? 'hidden' : 'visible';

      // 3) camera flies along the tunnel once the frame is open
      const fly = clamp01((curP - EXPAND_END) / (1 - EXPAND_END));
      const along = fly * 0.94;                                   // stop just short of the tube's open end so the last caption isn't over a black void
      camera.position.copy(curve.getPoint(along));
      ahead.copy(camera.position).add(curve.getTangent(along));
      camera.lookAt(ahead);
      renderer.render(scene, camera);

      // 4) chapter captions: visible only once the frame is open, each fades in and out during its share of the flight
      overlay.style.opacity = String(clamp01((e - 0.92) / 0.08));
      const n = CHAPTERS.length;
      for (let i = 0; i < n; i++) {
        const el = chapterRefs.current[i];
        if (!el) continue;
        const t = clamp01((fly - i / n) * n);                       // 0 → 1 across this chapter's share
        const fadeIn = clamp01(t / 0.2);
        const fadeOut = i === n - 1 ? 1 : clamp01((1 - t) / 0.2);   // the last caption stays until the pin releases
        const o = Math.min(fadeIn, fadeOut);
        el.style.opacity = String(o);
        el.style.transform = `translate3d(0,${(1 - fadeIn) * 26 - (1 - fadeOut) * 26}px,0)`;
        el.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        const dot = dotRefs.current[i];
        if (dot) dot.classList.toggle('on', fly >= i / n - 0.0001);
      }
      railFill.style.transform = `scaleY(${fly})`;
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      tubeGeo.dispose(); tubeMat.dispose(); starGeo.dispose(); starMat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [sectionRef]);

  return (
    <div
      ref={stickyRef}
      style={{ position: 'sticky', top: 0, height: stageH, overflow: 'hidden', background: PAGE_BLACK }}
    >
      {/* layout: [ frame slot | hero text ] — the frame itself is drawn on top and animated */}
      <div ref={gridRef} className="wm-stage-grid" style={{ paddingTop: HEADER_GAP }}>
        <div ref={slotRef} className="wm-stage-slot" />
        <div className="wm-stage-text"><div ref={textRef} className="wm-stage-text-inner">{children}</div></div>
      </div>

      <div ref={frameRef}>
        <div ref={innerRef} style={{ width: '100%', height: '100%', overflow: 'hidden', background: PAGE_BLACK }} />
      </div>

      {/* captions that keep the visitor oriented while the camera flies through the tunnel */}
      <div ref={overlayRef} className="wm-chapters" aria-hidden="true">
        <div className="wm-rail">
          <i ref={railFillRef} className="wm-rail-fill" />
          {CHAPTERS.map((c, i) => (
            <b key={c.n} ref={(el) => { dotRefs.current[i] = el; }} className="wm-rail-dot" style={{ top: `${(i / (CHAPTERS.length - 1)) * 100}%` }}>
              <span>{c.label}</span>
            </b>
          ))}
        </div>
        {CHAPTERS.map((c, i) => (
          <div key={c.n} ref={(el) => { chapterRefs.current[i] = el; }} className="wm-chapter">
            <span className="wm-chapter-n">{c.n} / {c.label}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const CSS = `
.wm-stage-grid{position:absolute;inset:0;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);
  gap:clamp(20px,4vw,72px);align-items:center;box-sizing:border-box;
  padding-left:clamp(16px,4vw,64px);padding-right:clamp(16px,4vw,64px);padding-bottom:clamp(16px,3vw,40px)}
.wm-stage-slot{height:100%;min-height:0;min-width:0}
.wm-stage-text{min-width:0;display:flex;align-items:center;justify-content:center;height:100%}
.wm-stage-text-inner{width:100%;will-change:opacity,transform}
@media (max-width:${STACK_BELOW}px){
  .wm-stage-grid{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,38%) minmax(0,1fr);gap:14px;align-items:stretch}
  .wm-stage-text{align-items:flex-start}
}
.wm-chapters{position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0}
.wm-chapter{position:absolute;left:clamp(16px,4vw,64px);top:50%;margin-top:-110px;width:min(520px,calc(100% - clamp(32px,8vw,128px) - 56px));
  box-sizing:border-box;padding:clamp(18px,2.4vw,30px);border-radius:20px;background:rgba(1,1,1,.66);
  -webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.16);
  opacity:0;visibility:hidden;will-change:opacity,transform}
.wm-chapter-n{display:block;margin-bottom:10px;font:600 var(--fs-label)/1 'Space Grotesk',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.58)}
.wm-chapter h3{margin:0 0 10px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:clamp(24px,3.2vw,44px);line-height:1.08;letter-spacing:-.02em;color:#fff;text-align:left}
.wm-chapter p{margin:0;font-size:var(--fs-card-body);line-height:1.6;color:rgba(255,255,255,.74);text-align:left}
.wm-rail{position:absolute;right:clamp(16px,3.4vw,52px);top:50%;width:2px;height:min(280px,42vh);transform:translateY(-50%);background:rgba(255,255,255,.2);border-radius:2px}
.wm-rail-fill{position:absolute;inset:0;background:#fff;border-radius:2px;transform-origin:top;transform:scaleY(0)}
.wm-rail-dot{position:absolute;left:50%;width:11px;height:11px;margin:-5.5px 0 0 -5.5px;border-radius:50%;background:#010101;border:2px solid rgba(255,255,255,.45);box-sizing:border-box;transition:background .25s,border-color .25s}
.wm-rail-dot.on{background:#fff;border-color:#fff}
.wm-rail-dot span{position:absolute;right:20px;top:50%;transform:translateY(-50%);font:600 var(--fs-label)/1 'Space Grotesk',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.62);white-space:nowrap}
@media (max-width:700px){ .wm-rail-dot span{display:none} .wm-chapter{width:calc(100% - 32px - 40px)} }
@media (max-height:720px){ .wm-stage-text .wm-hero-trust{display:none} }
@media (orientation:portrait), (max-width:900px){ .wm-intro-video{object-fit:contain !important} }
@media (max-width:900px){ .wm-intro-wrap{height:100vh;height:100dvh !important;bottom:auto !important} }
`;

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function ScrollFrameIntro({ children }) {
  const seqRef = useRef(null);
  const [introDone, setIntroDone] = useState(introShouldSkip);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);
  const stageH = useScreenHeight();
  const tall = Math.round(stageH * (1 + SCRUB_SCREENS));

  return (
    <>
      <style>{CSS}</style>
      {!introDone && <IntroVideo onDone={handleIntroDone} />}

      {/* 1 ── WELLMIND HERO: particles behind the title, title low on the screen */}
      <section
        className="wm-video-hero"
        aria-label="WellMind"
        style={{
          position: 'relative', width: '100%', height: stageH, minHeight: 560,
          overflow: 'hidden', background: PAGE_BLACK, isolation: 'isolate',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '0 clamp(20px, 4.8vw, 92px) clamp(52px, 6.4vw, 96px)',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ParticleField src={null} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <HeroTitle />
        </div>

      </section>

      {/* 2 ── TUNNEL SECTION: framed tunnel + hero text, gap above it */}
      <section
        ref={seqRef}
        aria-label="WellMind tunnel"
        style={{ position: 'relative', height: tall, marginTop: SECTION_GAP, background: PAGE_BLACK }}
      >
        <HeroTunnelStage sectionRef={seqRef} stageH={stageH}>
          {introDone ? children : null}
        </HeroTunnelStage>
      </section>
      <div id="wm-hero-end" style={{ height: 0 }} />
    </>
  );
}