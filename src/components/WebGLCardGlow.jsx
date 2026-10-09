/**
 * WebGLCardGlow.jsx — WellMind Data Solutions
 * A tiny, self-contained three.js/WebGL shader canvas used to give cards a
 * "dynamic" animated gradient-glow background that intensifies on hover.
 * Pure GLSL — no external assets/textures, safe to mount many at once.
 *
 * Usage:  <WebGLCardGlow hovered={hovered} colorA="#5c5c5c" colorB="#6c6c6c" />
 * Dependencies: three, @react-three/fiber
 */

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAG = `
  uniform float uTime;
  uniform float uHover;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.22;

    vec2 p1 = vec2(0.5 + 0.30 * sin(t * 1.30), 0.46 + 0.26 * cos(t * 1.70));
    vec2 p2 = vec2(0.5 + 0.34 * cos(t * 0.90 + 2.0), 0.54 + 0.30 * sin(t * 1.05 + 1.2));

    float blob1 = smoothstep(0.85, 0.0, distance(uv, p1));
    float blob2 = smoothstep(0.80, 0.0, distance(uv, p2));
    float glow = clamp(blob1 + blob2 * 0.85, 0.0, 1.0);

    vec3 col = mix(uColorA, uColorB, uv.y);
    float alpha = glow * (0.10 + 0.30 * uHover);

    gl_FragColor = vec4(col, alpha);
  }
`;

function GlowPlane({ hoverRef, colorA, colorB }) {
  const matRef = useRef();
  const { viewport } = useThree();

  const uniforms = useMemo(() => ({
    uTime:   { value: 0 },
    uHover:  { value: 0 },
    uColorA: { value: new THREE.Color(colorA) },
    uColorB: { value: new THREE.Color(colorB) },
  }), [colorA, colorB]);

  useFrame((state, dt) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    const target = hoverRef.current ? 1 : 0;
    matRef.current.uniforms.uHover.value = THREE.MathUtils.damp(
      matRef.current.uniforms.uHover.value, target, 5, dt
    );
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={VERT}
        fragmentShader={FRAG}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function WebGLCardGlow({ hovered, colorA = '#5c5c5c', colorB = '#6c6c6c', style }) {
  const hoverRef = useRef(hovered);
  hoverRef.current = hovered;

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        pointerEvents: 'none', borderRadius: 'inherit', zIndex: 0,
        ...style,
      }}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1, near: 0.01, far: 10 }}
        dpr={1}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        style={{ width: '100%', height: '100%' }}
      >
        <GlowPlane hoverRef={hoverRef} colorA={colorA} colorB={colorB} />
      </Canvas>
    </div>
  );
}
