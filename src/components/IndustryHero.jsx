/**
 * IndustryHero.jsx — WellMind Data Solutions
 * Shared hero for every industry page (Financial, Healthcare, Retail,
 * Agriculture, Education).
 *
 * Layout: two equal columns that fill the section end to end — copy on the
 * left, illustration on the right bleeding to the viewport edge. Stacks on
 * tablet/phone. Styles live in theme.css under the `.ind-hero*` block.
 *
 * Headline markup: wrap accent words in [[double brackets]] and use "\n"
 * for an optional desktop-only line break, e.g.
 *   "Sell [[Smarter.]]\nStock Leaner. [[Retain Longer.]]"
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { HeroGridBg } from './BgGrid';
import { DataParticles, fadeUp } from '../theme';

function renderTitle(title) {
  return title.split('\n').map((line, li, lines) => (
    <React.Fragment key={li}>
      {line.split(/(\[\[.*?\]\])/g).filter(Boolean).map((part, pi) =>
        part.startsWith('[[')
          ? <span key={pi} className="ind-hero-accent">{part.slice(2, -2)}</span>
          : <React.Fragment key={pi}>{part}</React.Fragment>
      )}
      {li < lines.length - 1 && <br className="ind-br" />}
    </React.Fragment>
  ));
}

export default function IndustryHero({
  title, text, image, imageAlt, primaryLabel, caseStudyHref,
  fit = 'contain', // 'contain' for transparent illustrations, 'cover' for photos
}) {
  return (
    <section className="ind-hero">
      <HeroGridBg opacity={0.35} />
      <DataParticles count={14} />

      <div className="ind-hero-grid">
        <motion.div
          className="ind-hero-copy"
          initial="hidden" animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h1 className="ind-hero-title" variants={fadeUp} custom={0.05}>
            {renderTitle(title)}
          </motion.h1>

          <motion.p className="ind-hero-text" variants={fadeUp} custom={0.15}>
            {text}
          </motion.p>

          <motion.div className="ind-hero-actions" variants={fadeUp} custom={0.25}>
            <Link to="/book-discovery" className="btn-primary">
              <Zap size={16} /> {primaryLabel}
            </Link>
            <Link to={caseStudyHref} className="btn-secondary">
              View Case Studies <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={`ind-hero-media ind-hero-media--${fit}`}
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={image} alt={imageAlt} loading="eager" decoding="async" />
        </motion.div>
      </div>
    </section>
  );
}
