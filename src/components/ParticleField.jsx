/**
 * ParticleField — WellMind hero background
 *
 * A live WebGL cloud of fine dust (tiny grains with depth-of-field, slow swirl and
 * cursor repulsion) that plays behind the giant hero title, like the reference.
 *
 * Want to use a real pre-rendered video instead? Put it in /public (e.g.
 * /public/hero-particles.mp4) and pass src="/hero-particles.mp4" — the video
 * then replaces the live particles with the same layout/position.
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BG = 0x010101;
const FOV = 40;
const CAM_Z = 14;

const VERT = /* glsl */ `
  attribute vec4 aSeed;
  uniform float uTime;
  uniform float uScale;      // px per world unit at distance 1
  uniform float uFocus;
  uniform float uRadius;
  uniform vec3  uCenter;
  uniform vec2  uMouse;
  uniform float uMouseStr;
  varying float vLight;
  varying float vBlur;
  varying float vBig;

  void main() {
    vec3 p = position;
    float t = uTime * 0.12;

    // slow differential swirl (inner particles turn faster)
    float r = length(p.xy);
    float ang = t * (1.4 / (0.8 + r * 0.35));
    float c = cos(ang), s = sin(ang);
    p.xy = mat2(c, -s, s, c) * p.xy;

    // turbulence
    p += vec3(
      sin(p.y * 1.3 + t * 3.0 + aSeed.x * 6.283),
      sin(p.z * 1.1 + t * 2.7 + aSeed.y * 6.283),
      sin(p.x * 1.2 + t * 3.3 + aSeed.z * 6.283)
    ) * 0.24;

    // breathing
    p *= 1.0 + 0.035 * sin(t * 2.2);

    float core = exp(-dot(p, p) / (uRadius * uRadius * 0.55));
    p += uCenter;

    // cursor repulsion
    vec2 d = p.xy - uMouse;
    float dist = length(d);
    float f = exp(-dist * dist / (uRadius * uRadius * 0.10)) * uMouseStr;
    p.xy += normalize(d + 1e-4) * f * 1.7;
    p.z  += f * 1.4;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float depth = -mv.z;
    float big = step(0.9975, aSeed.w);                      // a handful of out-of-focus flecks for depth
    vBig = big;
    float size = 0.013 + aSeed.x * 0.012 + big * (0.03 + aSeed.y * 0.05);         // fine dust: almost all specks, very few soft big ones
    vBlur = clamp(abs(depth - uFocus) / 9.0, 0.0, 1.0);
    float glint = step(0.988, aSeed.z);                      // rare bright ones
    vLight = 0.40 + 1.35 * pow(core, 1.2) + glint * 1.0;    // dense, bright core fading to sparse dust
    gl_PointSize = max(3.0, size * uScale / depth * (1.0 + vBlur * 1.1));
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;
  varying float vLight;
  varying float vBlur;
  varying float vBig;
  void main() {
    vec2 uv = gl_PointCoord * 2.0 - 1.0;
    float r2 = dot(uv, uv);
    if (r2 > 1.0) discard;

    // in focus: small crisp grain · out of focus: faint soft glow (never a hard disc)
    float grain = pow(1.0 - sqrt(r2), 1.15);
    float glow  = exp(-r2 * 3.2);
    float a = mix(grain, glow * 0.22, max(vBig, vBlur * 0.5));

    float lum = vLight * mix(1.0, 0.5, vBlur);
    vec3 col = vec3(lum) * vec3(0.86, 0.92, 0.96);
    gl_FragColor = vec4(col, a);
  }
`;

function gauss() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function buildGeometry(count) {
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count * 4);
  const tilt = -0.55;
  const ct = Math.cos(tilt), st = Math.sin(tilt);
  for (let i = 0; i < count; i++) {
    const wide = Math.random() < 0.3;
    let x = gauss() * (wide ? 3.8 : 2.2);
    let y = gauss() * (wide ? 1.5 : 0.95);
    const z = gauss() * (wide ? 2.4 : 1.5);
    // domain warp → clumps and filaments instead of a smooth ball
    x += 0.55 * Math.sin(y * 2.1 + z * 1.3) + 0.35 * Math.sin(y * 4.7 - x * 1.9);
    y += 0.45 * Math.sin(x * 1.7 - z * 1.1) + 0.30 * Math.cos(x * 4.1 + y * 2.3);
    const rx = x * ct - y * st;
    const ry = x * st + y * ct;
    pos[i * 3] = rx; pos[i * 3 + 1] = ry; pos[i * 3 + 2] = z;
    seed[i * 4] = Math.random(); seed[i * 4 + 1] = Math.random();
    seed[i * 4 + 2] = Math.random(); seed[i * 4 + 3] = Math.random();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  return g;
}

export default function ParticleField({ src }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (src) return undefined;
    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 720;
    const count = small ? 14000 : 42000;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance' });
    } catch { return undefined; }
    renderer.setClearColor(BG, 1);
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
    camera.position.z = CAM_Z;

    const uniforms = {
      uTime: { value: 0 }, uScale: { value: 800 }, uFocus: { value: CAM_Z },
      uRadius: { value: 3.5 }, uCenter: { value: new THREE.Vector3() },
      uMouse: { value: new THREE.Vector2(99, 99) }, uMouseStr: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, uniforms,
      transparent: true, depthWrite: false, depthTest: false,
      blending: THREE.AdditiveBlending,      // overlapping dust builds up the bright core
    });
    const geo = buildGeometry(count);
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    scene.add(points);

    let visH = 1, visW = 1;
    const resize = () => {
      const w = wrap.clientWidth || 1, h = wrap.clientHeight || 1;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      visH = 2 * Math.tan((FOV * Math.PI) / 360) * CAM_Z;
      visW = visH * camera.aspect;
      uniforms.uScale.value = (h * dpr) / (2 * Math.tan((FOV * Math.PI) / 360));
      // cloud sits upper-right of centre, above the title (as in the reference)
      const k = Math.min(1, visW / visH / 1.9);
      uniforms.uCenter.value.set(visW * 0.06, visH * 0.13, 0);
      points.scale.setScalar(Math.max(0.55, Math.min(1.25, visH / 11.5 * (0.7 + 0.3 * k))));
      uniforms.uRadius.value = 3.5 * points.scale.x;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();

    // pointer → world space (z = 0), smoothed
    const target = new THREE.Vector2(99, 99);
    let strTarget = 0, lastX = 0, lastY = 0;
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width, ny = (e.clientY - r.top) / r.height;
      if (nx < -0.05 || nx > 1.05 || ny < -0.05 || ny > 1.05) { strTarget = 0; return; }
      target.set((nx - 0.5) * visW, -(ny - 0.5) * visH);
      const sp = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      lastX = e.clientX; lastY = e.clientY;
      strTarget = Math.min(1, 0.35 + sp / 40);
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let raf = 0, visible = true, last = performance.now();
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(wrap);

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) { last = now; return; }
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      uniforms.uTime.value += dt;
      const m = uniforms.uMouse.value;
      if (m.x > 90) m.copy(target); else m.lerp(target, 1 - Math.exp(-dt * 8));
      uniforms.uMouseStr.value += (strTarget - uniforms.uMouseStr.value) * (1 - Math.exp(-dt * 5));
      strTarget *= Math.exp(-dt * 1.6);      // fade out when the cursor rests
      renderer.render(scene, camera);
    };
    if (reduced) { uniforms.uTime.value = 6; renderer.render(scene, camera); }
    else raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      ro.disconnect(); io.disconnect();
      geo.dispose(); mat.dispose(); renderer.dispose();
      renderer.domElement.remove();
    };
  }, [src]);

  if (src) {
    return (
      <video
        src={src} autoPlay muted loop playsInline preload="auto" aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }
  return <div ref={wrapRef} aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />;
}