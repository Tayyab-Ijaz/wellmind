/**
 * SolarSystem.jsx — WellMind Data Solutions
 * Three.js "AI solar system" (NLP / Analytics / Automation / Vision orbiting the AI Core).
 * Drop-in replacement for <AiCoreDiagram /> — fills its parent's width, fixed responsive height.
 *
 * The camera distance is solved automatically so the WHOLE outer orbit (plus planet labels)
 * always fits inside the box, on any screen size. Nothing can be cropped or slip behind the cards.
 */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const rnd = (a) => Math.random() * a;

// ── Layout / fit constants ────────────────────────────────────────────────────
const ORBIT_R   = 49;    // outermost point of the system (Vision orbit 42 + moon)
const LABEL_UP  = 7;     // head-room reserved for planet labels
const BODY_DOWN = 3.5;   // room reserved below the orbit plane for planet bodies
const FIT_LIMIT = 0.84;  // 1 = touch the edge of the box; lower = smaller system, more breathing room
const FIT_LIMIT_SMALL = 0.93; // phones: use more of the (narrow) box so the system doesn't look tiny
const MIN_POLAR = 0.95;  // camera tilt limits (radians from the top) — keeps the system flat & fully visible
const MAX_POLAR = 1.25;

// Canvas textures hold sRGB colours. Without tagging them, three.js treats them as
// linear data and the renderer's sRGB output pass washes every colour out.
function srgb(t) {
  if ('colorSpace' in t && THREE.SRGBColorSpace) t.colorSpace = THREE.SRGBColorSpace;
  else if (THREE.sRGBEncoding) t.encoding = THREE.sRGBEncoding;
  t.anisotropy = 4;
  return t;
}

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

// procedural planet texture
function tex(base, bands, spots) {
  const [c, g] = makeCanvas(512, 256);
  g.fillStyle = base; g.fillRect(0, 0, 512, 256);
  bands.forEach((b) => {
    for (let i = 0; i < 14; i++) {
      g.globalAlpha = 0.15 + rnd(0.35); g.fillStyle = b;
      g.fillRect(0, rnd(256), 512, 4 + rnd(22));
    }
  });
  spots.forEach((s) => {
    for (let i = 0; i < s.n; i++) {
      g.globalAlpha = 0.25 + rnd(0.4); g.fillStyle = s.c;
      g.beginPath();
      g.ellipse(rnd(512), rnd(256), s.r * (0.5 + rnd(1)), s.r * (0.4 + rnd(0.8)), rnd(3), 0, 7);
      g.fill();
    }
  });
  g.globalAlpha = 1;
  return srgb(new THREE.CanvasTexture(c));
}

// 1-D horizontal gradient texture (orbit glow / Saturn ring)
function gradientTex(w, stops) {
  const [c, g] = makeCanvas(w, 2);
  const gr = g.createLinearGradient(0, 0, w, 0);
  stops.forEach(([o, col]) => gr.addColorStop(o, col));
  g.fillStyle = gr; g.fillRect(0, 0, w, 2);
  return srgb(new THREE.CanvasTexture(c));
}

// ring geometry whose UVs run 0→1 from the inner to the outer edge
function ringGeometry(inner, outer, segs) {
  const rg = new THREE.RingGeometry(inner, outer, segs);
  const pos = rg.attributes.position, uv = rg.attributes.uv, v = new THREE.Vector3();
  for (let k = 0; k < pos.count; k++) {
    v.fromBufferAttribute(pos, k);
    uv.setXY(k, (v.length() - inner) / (outer - inner), 0.5);
  }
  return rg;
}

export default function SolarSystem() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // everything that needs .dispose() on unmount
    const disposables = [];
    const track = (o) => { disposables.push(o); return o; };
    const T = (...args) => track(tex(...args));

    let W = wrap.clientWidth || 600;
    let H = wrap.clientHeight || 420;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(50, W / H, 0.1, 2000);
    cam.position.set(0, 38, 68);

    const ren = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    ren.setClearColor(0x000000, 0);
    if ('outputColorSpace' in ren && THREE.SRGBColorSpace) ren.outputColorSpace = THREE.SRGBColorSpace;
    ren.toneMapping = THREE.NoToneMapping;
    ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    ren.setSize(W, H);
    ren.domElement.style.display = 'block';
    wrap.appendChild(ren.domElement);

    const ctl = new OrbitControls(cam, ren.domElement);
    ctl.enableDamping = true; ctl.dampingFactor = 0.06;
    ctl.enableZoom = false; ctl.enablePan = false;
    ctl.minPolarAngle = MIN_POLAR; ctl.maxPolarAngle = MAX_POLAR;
    ctl.autoRotate = !reduceMotion; ctl.autoRotateSpeed = 0.35;
    // keep vertical page-scroll working on touch devices
    ren.domElement.style.touchAction = 'pan-y';

    const P = [
      { n: 'NLP',        d: 14, s: 1.6, v: 1.6, c: T('#3a5fcf', ['#4f78e8', '#2c4aa8'], [{ c: '#1e2f78', n: 2, r: 12 }]) },
      { n: 'Analytics',  d: 23, s: 2.6, v: 0.9, c: T('#e0c88f', ['#f0dfb0', '#c4a86a', '#d8bd82'], []), ring: true },
      { n: 'Automation', d: 32, s: 1.9, v: 0.6, c: T('#b5502d', ['#d07a4a'], [{ c: '#6e2f1b', n: 30, r: 14 }, { c: '#e5c9b0', n: 2, r: 12 }]) },
      { n: 'Vision',     d: 42, s: 2.3, v: 0.4, c: T('#2c5fa8', ['#e8f0ff'], [{ c: '#4c8a45', n: 22, r: 26 }, { c: '#8a7a52', n: 8, r: 12 }]), moon: true },
    ];

    // ── sun ──
    const sunTex = T('#f5a623', ['#ffd35c', '#e8731a', '#ffe9a0'], [{ c: '#ff8a1f', n: 60, r: 14 }, { c: '#fff2b0', n: 40, r: 8 }]);
    const sun = new THREE.Mesh(
      track(new THREE.SphereGeometry(6, 48, 48)),
      track(new THREE.MeshBasicMaterial({ map: sunTex }))
    );
    scene.add(sun);

    {
      const [c, g] = makeCanvas(256, 256);
      const gr = g.createRadialGradient(128, 128, 10, 128, 128, 128);
      gr.addColorStop(0, 'rgba(255,200,90,.9)');
      gr.addColorStop(0.3, 'rgba(255,140,40,.35)');
      gr.addColorStop(1, 'rgba(255,100,0,0)');
      g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
      const glowTex = track(srgb(new THREE.CanvasTexture(c)));
      const sp = new THREE.Sprite(track(new THREE.SpriteMaterial({
        map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false,
      })));
      sp.scale.set(30, 30, 1);
      scene.add(sp);
    }

    // Lighting — point light with NO distance falloff so outer planets stay lit on
    // recent three.js versions (physically-based light units).
    const legacyLights = parseInt(THREE.REVISION, 10) < 155;
    scene.add(new THREE.PointLight(0xfff3dc, legacyLights ? 1.4 : 3.2, 0, 0));
    scene.add(new THREE.HemisphereLight(0xcfe0ff, 0x3a3228, legacyLights ? 0.55 : 2.2));
    scene.add(new THREE.AmbientLight(0x8d97b0, legacyLights ? 0.5 : 1.8));

    // ── stars ──
    {
      const a = [];
      for (let i = 0; i < 2500; i++) {
        const r = 600 + rnd(300), t = rnd(6.28), p = Math.acos(2 * Math.random() - 1);
        a.push(r * Math.sin(p) * Math.cos(t), r * Math.cos(p), r * Math.sin(p) * Math.sin(t));
      }
      const g = track(new THREE.BufferGeometry());
      g.setAttribute('position', new THREE.Float32BufferAttribute(a, 3));
      scene.add(new THREE.Points(g, track(new THREE.PointsMaterial({ color: 0xffffff, size: 1.4, sizeAttenuation: false }))));
    }

    // ── orbit rings ──
    const band = (inner, outer, mat) => {
      const m = new THREE.Mesh(track(ringGeometry(inner, outer, 256)), mat);
      m.rotation.x = -Math.PI / 2;
      scene.add(m);
    };
    const orbit = (d, col) => {
      const c = new THREE.Color(col);
      const rgb = `${(c.r * 255) | 0},${(c.g * 255) | 0},${(c.b * 255) | 0}`;
      const glow = track(gradientTex(128, [[0, `rgba(${rgb},0)`], [0.5, `rgba(${rgb},.7)`], [1, `rgba(${rgb},0)`]]));
      const base = { transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending };
      band(d - 0.9, d + 0.9, track(new THREE.MeshBasicMaterial({ ...base, map: glow, opacity: 0.35 })));
      band(d - 0.04, d + 0.04, track(new THREE.MeshBasicMaterial({ ...base, color: col, opacity: 0.6 })));
      const a = [];
      for (let k = 0; k < 500; k++) {
        const t = rnd(6.2832), r = d + (Math.random() + Math.random() - 1) * 1.1;
        a.push(Math.cos(t) * r, (Math.random() - 0.5) * 0.3, Math.sin(t) * r);
      }
      const pg = track(new THREE.BufferGeometry());
      pg.setAttribute('position', new THREE.Float32BufferAttribute(a, 3));
      scene.add(new THREE.Points(pg, track(new THREE.PointsMaterial({
        color: col, size: 1.3, sizeAttenuation: false, transparent: true, opacity: 0.45,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }))));
    };

    // ── DOM labels, positioned over the canvas ──
    const core = document.createElement('div');
    core.className = 'solar-lbl solar-core';
    core.textContent = 'AI CORE';
    wrap.appendChild(core);

    const bodies = P.map((p, i) => {
      const R = p.s * 1.3;
      const pivot = new THREE.Object3D(); scene.add(pivot);
      const m = new THREE.Mesh(
        track(new THREE.SphereGeometry(R, 48, 48)),
        track(new THREE.MeshStandardMaterial({ map: p.c, roughness: 0.85, metalness: 0, emissive: 0xffffff, emissiveMap: p.c, emissiveIntensity: 0.22 }))
      );
      m.position.x = p.d; m.rotation.z = 0.2; pivot.add(m);

      if (p.ring) {
        const ringTex = track(gradientTex(256, ['#b8a070', '#e6d3a0', '#8a7650', '#d9c694', '#a89468'].map((s, k, arr) => [k / (arr.length - 1), s])));
        const r = new THREE.Mesh(
          track(ringGeometry(R * 1.4, R * 2.3, 96)),
          track(new THREE.MeshBasicMaterial({ map: ringTex, side: THREE.DoubleSide, transparent: true, opacity: 0.8 }))
        );
        r.rotation.x = Math.PI / 2.2;
        m.add(r);
      }

      let moonPivot = null;
      if (p.moon) {
        const mo = new THREE.Mesh(
          track(new THREE.SphereGeometry(R * 0.25, 20, 20)),
          track(new THREE.MeshStandardMaterial({ color: 0xcfcfcf, emissive: 0x555555, emissiveIntensity: 0.3 }))
        );
        moonPivot = new THREE.Object3D(); m.add(moonPivot);
        mo.position.x = R * 1.9; moonPivot.add(mo);
      }

      orbit(p.d, i % 2 ? 0xc98a3a : 0x1f8aa0);
      pivot.rotation.y = rnd(6.28);

      const el = document.createElement('div');
      el.className = 'solar-lbl';
      el.textContent = p.n;
      wrap.appendChild(el);
      return { v: p.v, lift: R + 1.2, pivot, m, moonPivot, el };
    });

    // ── fit: pick the camera distance so the whole system sits inside the box ──
    // Projects the outer orbit (plus label head-room) and binary-searches the closest
    // distance at which every point is inside the frame, for the flattest and the most
    // tilted camera angle the user can reach. Works for any box shape.
    const edgePoints = [];
    for (let i = 0; i < 48; i++) {
      const a = (i / 48) * Math.PI * 2, x = Math.cos(a) * ORBIT_R, z = Math.sin(a) * ORBIT_R;
      edgePoints.push(new THREE.Vector3(x, LABEL_UP, z), new THREE.Vector3(x, -BODY_DOWN, z));
    }
    const probe = new THREE.PerspectiveCamera(cam.fov, 1, cam.near, cam.far);
    const probeV = new THREE.Vector3();
    const fitDistance = () => {
      probe.aspect = W / H; probe.updateProjectionMatrix();
      const limit = W < 600 ? FIT_LIMIT_SMALL : FIT_LIMIT;
      let need = 0;
      [MIN_POLAR, MAX_POLAR].forEach((polar) => {
        const dir = new THREE.Vector3().setFromSphericalCoords(1, polar, 0);
        let lo = 20, hi = 700;
        for (let i = 0; i < 24; i++) {
          const mid = (lo + hi) / 2;
          probe.position.copy(dir).multiplyScalar(mid);
          probe.lookAt(0, 0, 0);
          probe.updateMatrixWorld(true);
          const inside = edgePoints.every((p) => {
            probeV.copy(p).project(probe);
            return Math.abs(probeV.x) <= limit && Math.abs(probeV.y) <= limit && probeV.z < 1;
          });
          if (inside) hi = mid; else lo = mid;
        }
        need = Math.max(need, hi);
      });
      return need;
    };

    const fit = () => {
      W = wrap.clientWidth || W; H = wrap.clientHeight || H;
      cam.aspect = W / H;
      cam.updateProjectionMatrix();
      ren.setSize(W, H);
      const dir = cam.position.clone().sub(ctl.target).normalize();
      cam.position.copy(ctl.target).addScaledVector(dir, fitDistance());
      ctl.update();
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);

    // ── render loop ──
    const v3 = new THREE.Vector3();
    let spinX = 0, spinY = 0, lx = null, ly = null, raf = 0, visible = true;
    let last = performance.now();
    const speed = reduceMotion ? 0 : 1;

    const place = (el, x, y, anchor) => {
      el.style.transform = `translate(${(x * 0.5 + 0.5) * W}px,${(-y * 0.5 + 0.5) * H}px) translate(-50%,${anchor})`;
    };

    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!visible) return;

      sun.rotation.y += dt * 0.05 * speed + spinY;
      sun.rotation.x = Math.max(-0.8, Math.min(0.8, sun.rotation.x + spinX));
      spinX *= 0.9; spinY *= 0.9;

      bodies.forEach((b) => {
        b.pivot.rotation.y += dt * 0.25 * b.v * speed;
        b.m.rotation.y += dt * 0.8 * speed;
        if (b.moonPivot) b.moonPivot.rotation.y += dt * 2.5 * speed;
        b.m.getWorldPosition(v3); v3.y += b.lift; v3.project(cam);
        b.el.style.display = v3.z < 1 ? 'block' : 'none';
        place(b.el, v3.x, v3.y, '-100%');
      });
      v3.set(0, -8, 0).project(cam);
      place(core, v3.x, v3.y, '0');

      ctl.update();
      ren.render(scene, cam);
    };
    raf = requestAnimationFrame(loop);

    // ── hover over the sun to spin it ──
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
    const onMove = (e) => {
      const r = ren.domElement.getBoundingClientRect();
      mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(mouse, cam);
      const hit = ray.intersectObject(sun).length > 0;
      if (hit && lx !== null) { spinY += (e.clientX - lx) * 0.006; spinX += (e.clientY - ly) * 0.006; }
      lx = e.clientX; ly = e.clientY;
      ren.domElement.style.cursor = hit ? 'grab' : 'default';
    };
    const onLeave = () => { lx = ly = null; };
    ren.domElement.addEventListener('pointermove', onMove);
    ren.domElement.addEventListener('pointerleave', onLeave);
    const onStart = () => { ctl.autoRotate = false; };
    ctl.addEventListener('start', onStart);

    // don't burn GPU while scrolled out of view
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect();
      ctl.removeEventListener('start', onStart);
      ren.domElement.removeEventListener('pointermove', onMove);
      ren.domElement.removeEventListener('pointerleave', onLeave);
      ctl.dispose();
      disposables.forEach((d) => d.dispose && d.dispose());
      ren.dispose();
      if (ren.domElement.parentNode === wrap) wrap.removeChild(ren.domElement);
      core.remove();
      bodies.forEach((b) => b.el.remove());
    };
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div className="solar-wrapper" ref={wrapRef}>
        <div className="solar-hint">Drag to rotate<span className="solar-hint-hover"> · hover the AI Core to spin it</span></div>
      </div>
    </>
  );
}

const CSS = `
  .solar-wrapper {
    position: relative; width: 100%; max-width: 100%; margin: 0 auto;
    height: clamp(300px, 38vw, 500px); overflow: hidden; isolation: isolate;
  }
  /* tablet / phone: the box follows the system's own proportions instead of a fixed height */
  @media (max-width: 900px) { .solar-wrapper { height: auto; aspect-ratio: 8 / 5; max-height: 380px; } }
  @media (max-width: 480px) { .solar-wrapper { aspect-ratio: 7 / 5; } }
  .solar-lbl {
    position: absolute; left: 0; top: 0; padding: 3px 12px;
    background: #fff; color: #111; border-radius: 999px;
    font: 600 clamp(10px, 1.1vw, 12px) 'Space Grotesk', system-ui, sans-serif;
    pointer-events: none; white-space: nowrap; will-change: transform;
    box-shadow: 0 0 0 3px rgba(255,255,255,.12);
  }
  @media (max-width: 560px) { .solar-lbl { padding: 2px 8px; font-size: 10px; box-shadow: 0 0 0 2px rgba(255,255,255,.12); } }
  .solar-lbl.solar-core {
    background: none; box-shadow: none; color: #1fb5c9;
    letter-spacing: .12em; padding: 0;
  }
  .solar-hint {
    position: absolute; bottom: 8px; left: 0; width: 100%; text-align: center;
    color: rgba(255,255,255,.55); font: 12px 'Space Grotesk', system-ui, sans-serif;
    pointer-events: none;
  }
  @media (hover: none), (max-width: 900px) { .solar-hint-hover { display: none; } }
`;