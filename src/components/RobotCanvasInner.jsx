/**
 * RobotCanvasInner.jsx
 * The actual <Canvas> + procedural robot mesh. Split out from RobotHero.jsx
 * so the ~150kb three.js/@react-three/fiber bundle can be code-split and
 * lazy-loaded (see RobotHero.jsx).
 */

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const C = {
  shell:      '#F3F4F7',
  shellDark:  '#dadada',
  joint:      '#2d2d2d',
  jointLite:  '#4d4d4d',
  metal:      '#bebebe',
  metalDark:  '#909090',
  visorRing:  '#b6b6b6',
  visorCore:  '#050709',
  accentTag:  '#9f9f9f',
};

const DANCE_DELAY = 900; // ms of continuous hover before it starts dancing

function damp(current, target, lambda, dt) {
  return THREE.MathUtils.damp(current, target, lambda, dt);
}

// ─── Reusable bits ──────────────────────────────────────────────────────────
function Joint({ radius = 0.11, color = C.metal, ...props }) {
  return (
    <mesh {...props} castShadow>
      <sphereGeometry args={[radius, 20, 20]} />
      <meshStandardMaterial color={color} roughness={0.35} metalness={0.55} />
    </mesh>
  );
}

function HoverPad({ position, onHover, id, radius = 0.16 }) {
  // Invisible, slightly-larger hit target layered over hands/feet so they're
  // easy to hover on a real cursor without needing pixel precision.
  return (
    <mesh
      position={position}
      onPointerOver={(e) => { e.stopPropagation(); onHover(id); }}
      onPointerOut={(e) => { e.stopPropagation(); onHover(null); }}
    >
      <sphereGeometry args={[radius, 12, 12]} />
      <meshBasicMaterial visible={false} />
    </mesh>
  );
}

// ─── Robot ──────────────────────────────────────────────────────────────────
function Robot({ hoveredPart, setHoveredPart, setIsOverRobot }) {
  const root = useRef();
  const head = useRef();
  const visor = useRef();
  const torso = useRef();

  const lShoulder = useRef();
  const lElbow = useRef();
  const rShoulder = useRef();
  const rElbow = useRef();

  const lHip = useRef();
  const lKnee = useRef();
  const rHip = useRef();
  const rKnee = useRef();

  const hoverStart = useRef(null);
  const danceOffset = useRef(Math.random() * 10);

  const { viewport } = useThree();
  const scale = Math.min(1, Math.max(0.62, viewport.width / 6.2));

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime + danceOffset.current;
    const isOver = hoveredPart.over;
    const part = hoveredPart.part;

    if (isOver && hoverStart.current == null) hoverStart.current = state.clock.elapsedTime * 1000;
    if (!isOver) hoverStart.current = null;

    const dancing = isOver && hoverStart.current != null &&
      (state.clock.elapsedTime * 1000 - hoverStart.current) > DANCE_DELAY;

    // ── pointer parallax (idle) ──────────────────────────────────────────
    const px = state.pointer.x, py = state.pointer.y;

    if (dancing) {
      // ── full dance loop ────────────────────────────────────────────────
      const bpm = 6.2;
      root.current.position.y = Math.abs(Math.sin(t * bpm)) * 0.16 - 0.02;
      root.current.rotation.y = damp(root.current.rotation.y, Math.sin(t * 1.4) * 0.3, 5, dt);
      torso.current.rotation.z = Math.sin(t * bpm * 0.5) * 0.09;
      torso.current.rotation.y = Math.sin(t * bpm * 0.5 + 1) * 0.12;

      lShoulder.current.rotation.x = damp(lShoulder.current.rotation.x, -1.4 + Math.sin(t * bpm) * 1.25, 8, dt);
      rShoulder.current.rotation.x = damp(rShoulder.current.rotation.x, -1.4 + Math.sin(t * bpm + Math.PI) * 1.25, 8, dt);
      lElbow.current.rotation.x = damp(lElbow.current.rotation.x, -0.5 + Math.sin(t * bpm) * 0.4, 8, dt);
      rElbow.current.rotation.x = damp(rElbow.current.rotation.x, -0.5 + Math.sin(t * bpm + Math.PI) * 0.4, 8, dt);

      lHip.current.rotation.x = damp(lHip.current.rotation.x, Math.sin(t * bpm + Math.PI) * 0.55, 8, dt);
      rHip.current.rotation.x = damp(rHip.current.rotation.x, Math.sin(t * bpm) * 0.55, 8, dt);
      lKnee.current.rotation.x = damp(lKnee.current.rotation.x, Math.max(0, -Math.sin(t * bpm + Math.PI)) * 1.1, 8, dt);
      rKnee.current.rotation.x = damp(rKnee.current.rotation.x, Math.max(0, -Math.sin(t * bpm)) * 1.1, 8, dt);

      head.current.rotation.z = Math.sin(t * bpm) * 0.18;
      head.current.rotation.y = Math.sin(t * bpm * 0.5) * 0.3;
    } else {
      // ── idle float + per-limb hover response ──────────────────────────
      root.current.position.y = damp(root.current.position.y, Math.sin(t * 1.15) * 0.05, 4, dt);
      root.current.rotation.y = damp(root.current.rotation.y, px * 0.22, 4, dt);

      torso.current.rotation.y = damp(torso.current.rotation.y, px * 0.08, 4, dt);
      torso.current.rotation.z = damp(torso.current.rotation.z, 0, 4, dt);
      head.current.rotation.y = damp(head.current.rotation.y, px * 0.32, 5, dt);
      head.current.rotation.x = damp(head.current.rotation.x, -py * 0.12, 5, dt);
      head.current.rotation.z = damp(head.current.rotation.z, 0, 5, dt);

      const lArmTarget = part === 'leftArm' ? -2.75 : -0.14;
      const rArmTarget = part === 'rightArm' ? -2.75 : -0.14;
      lShoulder.current.rotation.x = damp(lShoulder.current.rotation.x, lArmTarget, 6.5, dt);
      rShoulder.current.rotation.x = damp(rShoulder.current.rotation.x, rArmTarget, 6.5, dt);
      lElbow.current.rotation.x = damp(lElbow.current.rotation.x, part === 'leftArm' ? -0.35 : 0, 6.5, dt);
      rElbow.current.rotation.x = damp(rElbow.current.rotation.x, part === 'rightArm' ? -0.35 : 0, 6.5, dt);

      const lLegTarget = part === 'leftLeg' ? -1.05 : 0;
      const rLegTarget = part === 'rightLeg' ? -1.05 : 0;
      lHip.current.rotation.x = damp(lHip.current.rotation.x, lLegTarget, 6.5, dt);
      rHip.current.rotation.x = damp(rHip.current.rotation.x, rLegTarget, 6.5, dt);
      lKnee.current.rotation.x = damp(lKnee.current.rotation.x, part === 'leftLeg' ? -1.35 : 0, 6.5, dt);
      rKnee.current.rotation.x = damp(rKnee.current.rotation.x, part === 'rightLeg' ? -1.35 : 0, 6.5, dt);
    }

    // gentle head-ring emissive pulse, always on
    if (visor.current) {
      const pulse = 1.4 + Math.sin(t * 2.2) * 0.5 + (dancing ? 0.8 : 0);
      visor.current.material.emissiveIntensity = pulse;
    }
  });

  const onHover = (part) => {
    setHoveredPart({ over: part != null, part });
  };

  return (
    <group
      ref={root}
      scale={scale}
      onPointerOver={() => setIsOverRobot(true)}
      onPointerOut={() => { setIsOverRobot(false); setHoveredPart({ over: false, part: null }); }}
    >
      {/* HEAD */}
      <group ref={head} position={[0, 1.72, 0]}>
        <mesh position={[0, -0.22, 0]}>
          <cylinderGeometry args={[0.07, 0.09, 0.16, 12]} />
          <meshStandardMaterial color={C.metalDark} roughness={0.4} metalness={0.6} />
        </mesh>
        <mesh ref={visor}>
          <torusGeometry args={[0.24, 0.045, 20, 40]} />
          <meshStandardMaterial
            color={C.visorRing} emissive={C.visorRing} emissiveIntensity={1.6}
            roughness={0.25} metalness={0.1} toneMapped={false}
          />
        </mesh>
        <mesh position={[0, 0, -0.05]}>
          <sphereGeometry args={[0.205, 24, 24]} />
          <meshStandardMaterial color={C.visorCore} roughness={0.2} metalness={0.3} />
        </mesh>
        <pointLight color={C.visorRing} intensity={2.2} distance={2.4} position={[0, 0, 0.3]} />
      </group>

      {/* TORSO */}
      <group ref={torso} position={[0, 1.02, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.66, 0.72, 0.36]} />
          <meshStandardMaterial color={C.shell} roughness={0.55} metalness={0.15} />
        </mesh>
        <mesh position={[0, -0.02, 0.181]}>
          <boxGeometry args={[0.5, 0.5, 0.01]} />
          <meshStandardMaterial color={C.shellDark} roughness={0.6} metalness={0.05} />
        </mesh>
        {/* neck stub */}
        <mesh position={[0, 0.42, 0]}>
          <cylinderGeometry args={[0.06, 0.07, 0.14, 10]} />
          <meshStandardMaterial color={C.metalDark} roughness={0.4} metalness={0.6} />
        </mesh>
        {/* spine / spring to pelvis */}
        <mesh position={[0, -0.46, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.22, 8]} />
          <meshStandardMaterial color={C.metalDark} roughness={0.5} metalness={0.5} />
        </mesh>
        <Joint radius={0.09} color={C.joint} position={[0, -0.58, 0]} />
      </group>

      {/* PELVIS */}
      <group position={[0, 0.68, 0]}>
        <mesh>
          <cylinderGeometry args={[0.16, 0.3, 0.26, 6, 1, false]} />
          <meshStandardMaterial color={C.shellDark} roughness={0.5} metalness={0.2} />
        </mesh>

        {/* ── LEFT LEG ── */}
        <group ref={lHip} position={[-0.19, -0.1, 0]}>
          <Joint position={[0, 0, 0]} color={C.joint} radius={0.1} />
          <mesh position={[0, -0.27, 0]} castShadow>
            <cylinderGeometry args={[0.09, 0.08, 0.42, 12]} />
            <meshStandardMaterial color={C.shell} roughness={0.5} metalness={0.15} />
          </mesh>
          <group ref={lKnee} position={[0, -0.48, 0]}>
            <Joint radius={0.08} color={C.jointLite} />
            <mesh position={[0, -0.24, 0]} castShadow>
              <cylinderGeometry args={[0.07, 0.06, 0.4, 12]} />
              <meshStandardMaterial color={C.metal} roughness={0.35} metalness={0.5} />
            </mesh>
            <Joint radius={0.065} color={C.joint} position={[0, -0.44, 0]} />
            <mesh position={[0, -0.5, 0.08]} rotation={[0.15, 0, 0]} castShadow>
              <boxGeometry args={[0.13, 0.09, 0.28]} />
              <meshStandardMaterial color={C.joint} roughness={0.5} metalness={0.4} />
            </mesh>
            {/* toe glow accent — doubles as a subtle "hover me" affordance */}
            <mesh position={[0, -0.5, 0.21]}>
              <sphereGeometry args={[0.025, 8, 8]} />
              <meshStandardMaterial color={C.visorRing} emissive={C.visorRing} emissiveIntensity={1.2} toneMapped={false} />
            </mesh>
            <HoverPad id="leftLeg" onHover={onHover} position={[0, -0.5, 0.1]} radius={0.22} />
          </group>
        </group>

        {/* ── RIGHT LEG ── */}
        <group ref={rHip} position={[0.19, -0.1, 0]}>
          <Joint position={[0, 0, 0]} color={C.joint} radius={0.1} />
          <mesh position={[0, -0.27, 0]} castShadow>
            <cylinderGeometry args={[0.09, 0.08, 0.42, 12]} />
            <meshStandardMaterial color={C.shell} roughness={0.5} metalness={0.15} />
          </mesh>
          <group ref={rKnee} position={[0, -0.48, 0]}>
            <Joint radius={0.08} color={C.jointLite} />
            <mesh position={[0, -0.24, 0]} castShadow>
              <cylinderGeometry args={[0.07, 0.06, 0.4, 12]} />
              <meshStandardMaterial color={C.metal} roughness={0.35} metalness={0.5} />
            </mesh>
            <Joint radius={0.065} color={C.joint} position={[0, -0.44, 0]} />
            <mesh position={[0, -0.5, 0.08]} rotation={[0.15, 0, 0]} castShadow>
              <boxGeometry args={[0.13, 0.09, 0.28]} />
              <meshStandardMaterial color={C.joint} roughness={0.5} metalness={0.4} />
            </mesh>
            <mesh position={[0, -0.5, 0.21]}>
              <sphereGeometry args={[0.025, 8, 8]} />
              <meshStandardMaterial color={C.visorRing} emissive={C.visorRing} emissiveIntensity={1.2} toneMapped={false} />
            </mesh>
            <HoverPad id="rightLeg" onHover={onHover} position={[0, -0.5, 0.1]} radius={0.22} />
          </group>
        </group>
      </group>

      {/* ── LEFT ARM ── */}
      <group ref={lShoulder} position={[-0.4, 1.32, 0]}>
        <Joint radius={0.1} color={C.joint} />
        <mesh position={[0, -0.22, 0]} castShadow>
          <boxGeometry args={[0.15, 0.36, 0.15]} />
          <meshStandardMaterial color={C.shell} roughness={0.5} metalness={0.15} />
        </mesh>
        <group ref={lElbow} position={[0, -0.4, 0]}>
          <Joint radius={0.075} color={C.jointLite} />
          <mesh position={[0, -0.2, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.05, 0.34, 10]} />
            <meshStandardMaterial color={C.metal} roughness={0.35} metalness={0.5} />
          </mesh>
          <mesh position={[0, -0.4, 0]} castShadow>
            <boxGeometry args={[0.13, 0.12, 0.08]} />
            <meshStandardMaterial color={C.joint} roughness={0.5} metalness={0.4} />
          </mesh>
          <mesh position={[0, -0.47, 0.05]}>
            <sphereGeometry args={[0.022, 8, 8]} />
            <meshStandardMaterial color={C.visorRing} emissive={C.visorRing} emissiveIntensity={1.2} toneMapped={false} />
          </mesh>
          <HoverPad id="leftArm" onHover={onHover} position={[0, -0.4, 0]} radius={0.2} />
        </group>
      </group>

      {/* ── RIGHT ARM ── */}
      <group ref={rShoulder} position={[0.4, 1.32, 0]}>
        <Joint radius={0.1} color={C.joint} />
        <mesh position={[0, -0.22, 0]} castShadow>
          <boxGeometry args={[0.15, 0.36, 0.15]} />
          <meshStandardMaterial color={C.shell} roughness={0.5} metalness={0.15} />
        </mesh>
        <group ref={rElbow} position={[0, -0.4, 0]}>
          <Joint radius={0.075} color={C.jointLite} />
          <mesh position={[0, -0.2, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.05, 0.34, 10]} />
            <meshStandardMaterial color={C.metal} roughness={0.35} metalness={0.5} />
          </mesh>
          <mesh position={[0, -0.4, 0]} castShadow>
            <boxGeometry args={[0.13, 0.12, 0.08]} />
            <meshStandardMaterial color={C.joint} roughness={0.5} metalness={0.4} />
          </mesh>
          <mesh position={[0, -0.47, 0.05]}>
            <sphereGeometry args={[0.022, 8, 8]} />
            <meshStandardMaterial color={C.visorRing} emissive={C.visorRing} emissiveIntensity={1.2} toneMapped={false} />
          </mesh>
          <HoverPad id="rightArm" onHover={onHover} position={[0, -0.4, 0]} radius={0.2} />
        </group>
      </group>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[2.5, 4, 3]} intensity={1.1} color="#FFFFFF" />
      <directionalLight position={[-3, 1.5, -2]} intensity={0.45} color="#919191" />
      <directionalLight position={[3, -1, -3]} intensity={0.35} color="#939393" />
    </>
  );
}

function Ground() {
  // very soft contact shadow blob so the robot doesn't look like it's floating
  return (
    <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.62, 32]} />
      <meshBasicMaterial color="#5c5c5c" transparent opacity={0.1} />
    </mesh>
  );
}

export default function RobotCanvasInner({ onReady }) {
  const [hoveredPart, setHoveredPart] = useState({ over: false, part: null });
  const [, setIsOverRobot] = useState(false);

  useEffect(() => { onReady && onReady(); }, [onReady]);

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 1.05, 4.4], fov: 30 }}
      style={{ width: '100%', height: '100%', cursor: hoveredPart.over ? 'pointer' : 'default' }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <Lights />
      <Ground />
      <Robot hoveredPart={hoveredPart} setHoveredPart={setHoveredPart} setIsOverRobot={setIsOverRobot} />
    </Canvas>
  );
}
