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
    <div className="uiux-coming-page" style={{ background: B.bgLight, minHeight: '100vh' }}>
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
          grid-template-columns: minmax(0, 0.88fr) minmax(430px, 1.12fr);
          align-items: center;
          gap: clamp(24px, 3vw, 52px);
        }

        .uiux-coming-copy {
          text-align: left;
          max-width: 690px;
        }

        .uiux-coming-title {
          font-family: ${B.fontMain};
          font-weight: 750;
          font-size: clamp(2.55rem, 5.3vw, 5.25rem);
          color: ${B.primaryDark};
          line-height: 1.02;
          letter-spacing: -0.035em;
          margin: 20px 0 24px;
        }

        .uiux-coming-title span {
          display: inline-block;
          background: linear-gradient(90deg, #7C3AED 0%, #B02A8C 48%, #E73578 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .uiux-coming-description {
          font-size: clamp(1rem, 1.7vw, 1.24rem);
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
            radial-gradient(circle at 55% 45%, rgba(168, 85, 247, 0.19), transparent 48%),
            radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.12), transparent 42%);
          filter: blur(8px);
          pointer-events: none;
        }

        .uiux-coming-image {
          position: relative;
          width: min(120%, 780px);
          max-height: 720px;
          transform: translateX(20px);
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 26px 45px rgba(91, 33, 182, 0.18));
          animation: uiuxFloat 5.5s ease-in-out infinite;
        }

        .uiux-coming-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 25px;
          padding: 9px 14px;
          border: 1px solid rgba(124, 58, 237, 0.16);
          border-radius: 999px;
          background: rgba(255,255,255,0.58);
          color: ${B.textMid};
          font-size: 0.84rem;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(54, 22, 79, 0.06);
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
            font-size: clamp(2.45rem, 9vw, 4rem);
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
            min-height: 420px;
            margin-top: -8px;
          }

          .uiux-coming-image {
            width: min(96vw, 680px);
            max-height: 620px;
            transform: translateX(0);
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
            font-size: clamp(2.15rem, 11vw, 3.15rem);
          }

          .uiux-coming-description {
            font-size: 0.98rem;
            line-height: 1.65;
          }

          .uiux-coming-actions a {
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
          }

          .uiux-coming-visual {
            min-height: 275px;
          }

          .uiux-coming-image {
            width: 98vw;
            max-width: 620px;
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
            background: 'radial-gradient(circle, rgba(124,58,237,0.09), transparent 68%)',
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
