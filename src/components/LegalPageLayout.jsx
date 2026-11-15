import React from 'react';
import { motion } from 'framer-motion';
import { HeroGridBg } from './BgGrid';
import { B, PX, fadeUp, SectionBadge } from '../theme';

export default function LegalPageLayout({ badge, title, updated, intro, sections }) {
  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-main)' }}>

      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', overflow: 'hidden', zIndex: 1, paddingTop: 'clamp(40px, 5vw, 50px)', background: B.heroBg }}>
        <HeroGridBg opacity={0.25} />
        <div style={{
          position: 'relative', zIndex: 10,
          padding: 'clamp(48px, 8vw, 88px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 56px)',
          textAlign: 'center',
        }}>
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} style={{ maxWidth: 820, margin: '0 auto' }}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge>{badge}</SectionBadge>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.05} style={{
              fontFamily: 'var(--font-main)', fontWeight: 700, color: B.primaryDark,
              fontSize: 'var(--fs-section-h2)', lineHeight: 1.15, letterSpacing: '-0.02em',
              marginTop: 12, marginBottom: 12,
            }}>
              {title}
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.1} style={{ fontSize: 'var(--fs-small)', color: B.textMuted, fontWeight: 600 }}>
              Last updated: {updated}
            </motion.p>
            {intro && (
              <motion.p variants={fadeUp} custom={0.15} style={{ fontSize: 'var(--fs-card-body)', color: B.textMid, lineHeight: 1.75, marginTop: 20 }}>
                {intro}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section style={{ padding: 'var(--sp-section) 0', position: 'relative', zIndex: 1 }}>
        <div style={{ ...PX, maxWidth: 820 }}>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: i < sections.length - 1 ? 'clamp(28px, 4vw, 40px)' : 0 }}>
              <h2 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 'var(--fs-card-title)', color: B.textMain, marginBottom: 12 }}>
                {s.heading}
              </h2>
              {s.body.map((p, pi) => (
                <p key={pi} style={{ fontSize: 'var(--fs-card-body)', color: B.textMid, lineHeight: 1.8, marginBottom: pi < s.body.length - 1 ? 14 : 0 }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
