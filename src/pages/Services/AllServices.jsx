import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import logoDark from '../../assets/wellmind-data-solutions-logo.png';
import imgAiMl from '../../assets/ai-ml-service.webp';
import imgData from '../../assets/data-science-service.webp';
import imgSoftware from '../../assets/services-page-ai-powered.webp';
import imgDesign from '../../assets/services-page-ui.webp';
import imgAutomation from '../../assets/services-page-automation.webp';
import imgBio from '../../assets/bioinformatics-service.webp';


const SERVICES = [
  {
    to: '/services-ai-ml',
    title: 'AI & Machine Learning',
    tags: ['Machine Learning', 'Generative AI'],
    desc: 'Explore machine learning, language, vision, and generative AI capabilities in one service area.',
    img: imgAiMl,
  },
  {
    to: '/services-data-analytics',
    title: 'Data Science & Analytics',
    tags: ['Analytics', 'Dashboards'],
    desc: 'Build a trusted data foundation and turn analysis into clear, actionable decisions.',
    img: imgData,
  },
  {
    to: '/services-ai-software',
    title: 'AI-Powered Software',
    tags: ['Product', 'Engineering'],
    desc: 'Design, build, and deliver custom software products with intelligent features.',
    img: imgSoftware,
  },
  {
    to: '/services-automation',
    title: 'Automation & Workflows',
    tags: ['Automation', 'Integration'],
    desc: 'Connect systems and streamline repeatable workflows with practical automation.',
    img: imgAutomation,
  },
  {
    to: '/services-ui-ux',
    title: 'UI/UX & Digital Design',
    tags: ['Design', 'Product'],
    desc: 'Create useful, accessible digital experiences for people and the work they do.',
    img: imgDesign,
  },
  {
    to: '/services-bioinformatics',
    title: 'Bioinformatics & Health AI',
    tags: ['Genomics', 'Health AI'],
    desc: 'Apply data science and AI to biological, clinical, and health research challenges.',
    img: imgBio,
  },
];


function SiteEnd() {
  return (
    <>
      <div className="as-end">
        <div className="as-end-row">
          <p>Get more inspiration <a href="https://www.linkedin.com/company/wellmind-data-solutions/" target="_blank" rel="noopener noreferrer">@wellmind</a></p>
          <p>
            <Link to="/industries">Industries</Link> <i>/</i> <Link to="/about">About</Link> <i>/</i> <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div className="as-wordmark" aria-hidden="true">
          <svg viewBox="0 0 1000 205" width="100%" style={{ display: 'block' }}>
            <text
              x="0" y="200" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="#19191b"
              style={{ fontFamily: "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif", fontWeight: 700, fontSize: 270, letterSpacing: '-0.04em' }}
            >
              WellMind
            </text>
          </svg>
        </div>
      </div>

      <nav className="as-pill" aria-label="Quick links">
        <Link to="/" className="as-pill-logo" aria-label="WellMind home"><img src={logoDark} alt="" width="26" height="26" /></Link>
        <Link to="/case-studies">Case studies</Link>
        <Link to="/book-discovery" className="as-pill-cta">Book a call</Link>
      </nav>
    </>
  );
}

export default function AllServices() {
  return (
    <div className="as-page">
      <header className="as-head">
        <h1>All services</h1>
        <p>Six service areas, from machine learning to bioinformatics. Pick one to see how we work.</p>
      </header>

      <div className="as-grid">
        {SERVICES.map((s, i) => (
          <Link key={s.to} to={s.to} className="as-card" style={{ animationDelay: `${i * 70}ms` }}>
            <div className="as-media">
              {s.img
                ? <img src={s.img} alt="" loading="lazy" />
                : <div className="as-icon">{s.icon}</div>}
              <span className="as-arrow"><ArrowUpRight size={18} /></span>
            </div>
            <div className="as-tags">
              {s.tags.map(t => <span key={t}>{t}</span>)}
            </div>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </Link>
        ))}
      </div>

      <div className="as-cta">
        <span>Not sure which fits?</span>
        <Link to="/book-discovery">Book a discovery call</Link>
      </div>

      <SiteEnd />

      <style>{`
        .as-page { background: #09090a; color: #fff; min-height: 100vh; padding: clamp(110px, 14vw, 160px) clamp(16px, 4vw, 56px) 0; }
        .as-head { text-align: left; max-width: 1320px; margin: 0 auto clamp(40px, 6vw, 72px); }
        .as-head h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: var(--fs-hero); letter-spacing: -0.02em; margin: 0 0 14px; color: #fff; }
        .as-head p { margin: 0; max-width: 720px; color: rgba(255,255,255,0.62); font-size: var(--fs-card-body); line-height: 1.6; }

        .as-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(28px, 3.2vw, 44px) clamp(16px, 2.2vw, 28px); max-width: 1320px; margin: 0 auto; }
        .as-card { display: block; text-decoration: none; color: inherit; opacity: 0; transform: translateY(14px); animation: asIn .6s cubic-bezier(.16,1,.3,1) forwards; }
        @keyframes asIn { to { opacity: 1; transform: none; } }

        .as-media { position: relative; aspect-ratio: 4 / 5; border-radius: 10px; overflow: hidden; background: #ececec; display: flex; align-items: center; justify-content: center; }
        .as-media img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .6s cubic-bezier(.16,1,.3,1); }
        .as-icon { width: 100%; height: 100%; }
        .as-arrow { position: absolute; top: 14px; right: 14px; width: 38px; height: 38px; border-radius: 50%; background: #fff; color: #000; display: flex; align-items: center; justify-content: center; opacity: 0; transform: translate(-6px, 6px); transition: all .3s ease; }
        .as-card:hover .as-media img { transform: scale(1.04); }
        .as-card:hover .as-arrow, .as-card:focus-visible .as-arrow { opacity: 1; transform: none; }
        .as-card:focus-visible { outline: 2px solid #fff; outline-offset: 6px; border-radius: 10px; }

        .as-tags { display: flex; flex-wrap: wrap; gap: 14px; margin: 14px 0 6px; }
        .as-tags span { font-size: var(--fs-label); color: rgba(255,255,255,0.45); }
        .as-card h2 { font-family: 'Space Grotesk', sans-serif; font-size: var(--fs-card-title); font-weight: 700; line-height: 1.3; margin: 0 0 6px; color: #fff; }
        .as-card p { margin: 0; font-size: var(--fs-small); line-height: 1.55; color: rgba(255,255,255,0.58); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

        .as-end { margin: clamp(56px, 8vw, 110px) calc(-1 * clamp(16px, 4vw, 56px)) 0; }
        .as-end-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 0 clamp(16px, 2.6vw, 40px); margin-bottom: clamp(18px, 3vw, 36px); font-size: var(--fs-small); color: rgba(255,255,255,0.55); }
        .as-end-row p { margin: 0; }
        .as-end-row a { color: #fff; text-decoration: none; }
        .as-end-row a:hover { text-decoration: underline; text-underline-offset: 3px; }
        .as-end-row i { font-style: normal; margin: 0 2px; color: rgba(255,255,255,0.55); }
        .as-wordmark { padding: 0 clamp(6px, 0.8vw, 12px); overflow: hidden; line-height: 0; }

        .as-pill { position: fixed; left: 50%; bottom: 22px; transform: translateX(-50%); z-index: 40; display: flex; align-items: center; gap: 22px; padding: 8px 24px 8px 12px; border-radius: 999px; background: rgba(110,110,114,0.82); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); white-space: nowrap; }
        .as-pill a { color: #2c2c2e; text-decoration: none; font-size: var(--fs-card-body); font-weight: 500; transition: color .2s ease; }
        .as-pill a:hover { color: #000; }
        .as-pill .as-pill-cta { padding: 10px 16px; border-radius: 999px; background: #fff; color: #09090a; font-size: var(--fs-small); font-weight: 700; transition: background .2s ease; }
        .as-pill .as-pill-cta:hover { background: #e5e5e5; }
        .as-pill .as-pill-cta:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
        .as-pill .as-pill-logo { display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; }
        .as-pill-logo img { width: 26px; height: 26px; object-fit: contain; display: block; filter: brightness(0); }
        .as-cta { display: flex; align-items: center; justify-content: flex-start; max-width: 1320px; margin-left: auto; margin-right: auto; gap: 16px; flex-wrap: wrap; margin-top: clamp(48px, 7vw, 88px); color: rgba(255,255,255,0.62); font-size: var(--fs-card-body); }
        .as-cta a { color: #000; background: #fff; text-decoration: none; font-weight: 700; font-size: var(--fs-small); padding: 12px 22px; border-radius: 999px; transition: background .2s ease; }
        .as-cta a:hover { background: #d9d9d9; }

        @media (max-width: 640px) { .as-end-row { flex-direction: column; gap: 14px; text-align: center; } }
        @media (max-width: 960px) { .as-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 560px) {
          .as-grid { grid-template-columns: 1fr; }
          .as-media { aspect-ratio: 4 / 3.4; }
          .as-arrow { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) { .as-card { animation: none; opacity: 1; transform: none; } .as-media img { transition: none; } }
      `}</style>
    </div>
  );
}