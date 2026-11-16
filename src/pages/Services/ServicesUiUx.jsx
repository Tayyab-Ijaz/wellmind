/**
 * ServicesUiUx.jsx — WellMind Data Solutions
 * /services-ui-ux
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import { B, PX, fadeUp, SectionBadge, DataParticles } from '../../theme';
import { HeroGridBg } from '../../components/BgGrid';
import uiUxImage from '../../assets/ui-ux-coming-soon.webp';

export default function ServicesUiUx() {
  return (
    <div className="uiux-coming-page" style={{ background: B.bgLight, minHeight: '100svh' }}>
      <style>{`
        .uiux-coming-hero {
          position: relative;
          min-height: calc(100vh - 84px);
          display: flex;
          align-items: center;
          overflow: hidden;
          background: ${B.heroBg};
          padding: clamp(52px, 7vw, 86px) 0 clamp(64px, 8vw, 96px);
          box-sizing: border-box;
        }

        .uiux-coming-inner {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(22px, 5vw, 72px);
          box-sizing: border-box;
          position: relative;
          z-index: 2;
        }

        .uiux-coming-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          align-items: center;
          gap: clamp(24px, 3vw, 52px);
        }

        .uiux-coming-copy {
          text-align: left;
          max-width: 690px;
        }

        .uiux-coming-title {
          font-family: var(--font-main);
          font-weight: 750;
          font-size: var(--fs-hero);
          color: ${B.primaryDark};
          line-height: 1.02;
          letter-spacing: -0.035em;
          margin: 20px 0 24px;
        }

        .uiux-coming-title span {
          display: inline-block;
          background: linear-gradient(90deg, #5c5c5c 0%, #555555 48%, #727272 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .uiux-coming-description {
          font-size: var(--fs-card-title);
          color: ${B.textMid};
          max-width: 650px;
          margin: 0 0 34px;
          line-height: 1.75;
        }

        .uiux-coming-actions {
          display: flex;
          gap: 14px;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .uiux-coming-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 560px;
        }

        .uiux-coming-glow {
          position: absolute;
          width: min(560px, 90vw);
          height: min(560px, 90vw);
          border-radius: 50%;
          background:
            radial-gradient(circle at 55% 45%, rgba(128,128,128,0.19), transparent 48%),
            radial-gradient(circle at 70% 70%, rgba(130,130,130,0.12), transparent 42%);
          pointer-events: none;
        }

        .uiux-coming-image {
          position: relative;
          width: 100%;
          max-width: 640px;
          max-height: 680px;
          margin: 0 auto;
          object-fit: contain;
          display: block;
          animation: uiuxFloat 5.5s ease-in-out infinite;
        }

        .uiux-coming-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 25px;
          padding: 9px 14px;
          border: 1px solid rgba(92,92,92,0.16);
          border-radius: 999px;
          background: rgba(255,255,255,0.58);
          color: ${B.textMid};
          font-size: var(--fs-small);
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(23,23,23,0.06);
        }

        @keyframes uiuxFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.35deg); }
        }

        @media (max-width: 900px) {
          .uiux-coming-hero {
            min-height: auto;
            padding: 78px 0 70px;
          }

          .uiux-coming-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .uiux-coming-copy {
            max-width: 760px;
            margin: 0 auto;
            text-align: center;
          }

          .uiux-coming-title {
            font-size: var(--fs-hero);
            margin-top: 18px;
          }

          .uiux-coming-description {
            margin-left: auto;
            margin-right: auto;
          }

          .uiux-coming-actions {
            justify-content: center;
          }

          .uiux-coming-visual {
            display: none;
          }

          .uiux-coming-note {
            margin-top: 18px;
          }
        }

        @media (max-width: 520px) {
          .uiux-coming-hero {
            padding-top: 72px;
          }

          .uiux-coming-title {
            font-size: var(--fs-hero);
          }

          .uiux-coming-description {
            font-size: var(--fs-card-body);
            line-height: 1.65;
          }

          .uiux-coming-actions a {
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
          }

        }
      `}</style>

      <section className="uiux-coming-hero">
        <HeroGridBg opacity={0.24} uid="UiUxHero" />
        <DataParticles count={12} />

        <div
          style={{
            position: 'absolute',
            top: '16%',
            right: '8%',
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(92,92,92,0.09), transparent 68%)',
            pointerEvents: 'none',
          }}
        />

        <div className="uiux-coming-inner">
          <div className="uiux-coming-grid">
            <div className="uiux-coming-copy">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                <motion.div variants={fadeUp}>
                  <SectionBadge>
                    <Sparkles size={13} /> UI / UX Design
                  </SectionBadge>
                </motion.div>

                <motion.h1 variants={fadeUp} className="uiux-coming-title">
                  UI / UX Design Services
                  <br />
                  <span>Coming Soon</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="uiux-coming-description">
                  We're building out our full UI/UX Design service page. In the meantime,
                  book a discovery call to discuss your design needs.
                </motion.p>

                <motion.div variants={fadeUp} className="uiux-coming-actions">
                  <Link to="/book-discovery" className="btn-primary">
                    <Zap size={18} /> Book a Call
                  </Link>
                  <Link to="/" className="btn-secondary">
                    Back to Home <ArrowRight size={18} />
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="uiux-coming-note">
                  <Sparkles size={14} /> Thoughtful interfaces. Clear experiences. Better products.
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="uiux-coming-visual"
              initial={{ opacity: 0, x: 35, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="uiux-coming-glow" />
              <img
                src={uiUxImage}
                alt="UI/UX design illustration"
                className="uiux-coming-image"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}