/**
 * Careers.jsx — WellMind Data Solutions
 * General "Join our team" page. There are deliberately no job listings: roles are added here
 * (see OPEN_ROLES) once the team has real openings. Applications go to the contact email.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code2, Brain, Database, Palette, HeartPulse, Globe2, Users, FileText } from 'lucide-react';
import { B, PX, SECTION_PAD } from '../theme';

const APPLY_EMAIL = 'contact@wellminddatasolutions.com';
const APPLY_HREF = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent('Application: [your area, e.g. Backend Engineer]')}&body=${encodeURIComponent('Hi WellMind team,\n\nI would like to join WellMind.\n\nArea I work in:\nLink to my work (GitHub / portfolio / LinkedIn):\nWhat I would like to work on:\n\nThanks,\n')}`;

// Add real openings here, e.g. { title: 'Backend Engineer', type: 'Full-time', location: 'Remote (Pakistan)', href: '/careers#apply' }
const OPEN_ROLES = [];

const AREAS = [
  { icon: <Code2 size={22} />, title: 'Software engineering', text: 'Full-stack, backend and cloud engineers who like shipping products that other people depend on.' },
  { icon: <Brain size={22} />, title: 'AI & machine learning', text: 'Applied ML, LLM and agent engineering, and the MLOps work that keeps models useful after launch.' },
  { icon: <Database size={22} />, title: 'Data engineering & analytics', text: 'Pipelines, warehouses, dashboards and the statistics that turn raw data into decisions.' },
  { icon: <Palette size={22} />, title: 'Product & UI/UX design', text: 'Designers who make complex data and AI systems clear and usable.' },
  { icon: <HeartPulse size={22} />, title: 'Healthcare & biomedical data', text: 'People with clinical, claims or research-data experience who want to build with it.' },
];

const WAYS = [
  { icon: <Users size={22} />, title: 'Small team, real ownership', text: 'You work directly on client problems and see your work reach production, not a slide deck.' },
  { icon: <FileText size={22} />, title: 'Work you can show', text: 'We build in the open where we can. Our portfolio projects are public, with readable code and live demos.' },
  { icon: <Globe2 size={22} />, title: 'Remote-first', text: 'Based in Pakistan, working remotely with clients around the world and overlapping hours to suit their time zones.' },
];

const CSS = `
.cr-page{background:#f4f4f4;color:#111;font-family:var(--font-main);overflow-x:clip}
.cr-hero{padding:clamp(110px,12vw,170px) 0 clamp(48px,6vw,88px);background:linear-gradient(180deg,#ececec 0%,#f4f4f4 100%);border-bottom:1px solid rgba(0,0,0,.08)}
.cr-kicker{display:inline-block;margin-bottom:16px;font-size:var(--fs-label);font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#555}
.cr-hero h1{margin:0 0 clamp(16px,2vw,24px);max-width:900px;font-size:var(--fs-hero);font-weight:800;line-height:1.08;letter-spacing:-.025em;color:#0b0b0b;text-align:left}
.cr-hero p{margin:0 0 clamp(24px,3vw,36px);max-width:720px;font-size:var(--fs-card-title);line-height:1.7;color:#444;text-align:left}
.cr-actions{display:flex;flex-wrap:wrap;gap:12px}
.cr-btn{display:inline-flex;align-items:center;gap:9px;padding:14px 24px;border-radius:12px;font-size:var(--fs-small);font-weight:700;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:transform .2s,background .2s,color .2s}
.cr-btn--solid{background:#0b0b0b;color:#fff;border:1px solid #0b0b0b}
.cr-btn--solid:hover{background:#2a2a2a;transform:translateY(-2px)}
.cr-btn--ghost{background:transparent;color:#0b0b0b;border:1px solid rgba(0,0,0,.35)}
.cr-btn--ghost:hover{background:#0b0b0b;color:#fff;transform:translateY(-2px)}
.cr-sec{padding:clamp(48px,6vw,96px) 0}
.cr-sec--alt{background:#ececec}
.cr-head{max-width:760px;margin:0 0 clamp(26px,3.6vw,44px)}
.cr-head h2{margin:0 0 12px;font-size:var(--fs-section-h2);font-weight:800;letter-spacing:-.02em;color:#0b0b0b;text-align:left}
.cr-head p{margin:0;font-size:var(--fs-card-title);line-height:1.7;color:#555;text-align:left}
.cr-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(14px,2vw,22px)}
.cr-card{padding:clamp(22px,2.6vw,32px);border-radius:20px;background:#fff;border:1px solid rgba(0,0,0,.1);transition:transform .3s,border-color .3s}
.cr-card:hover{transform:translateY(-4px);border-color:rgba(0,0,0,.3)}
.cr-card .ic{display:inline-flex;width:46px;height:46px;border-radius:12px;align-items:center;justify-content:center;background:#0b0b0b;color:#fff;margin-bottom:18px}
.cr-card h3{margin:0 0 8px;font-size:var(--fs-card-title);font-weight:700;color:#0b0b0b;text-align:left}
.cr-card p{margin:0;font-size:var(--fs-card-body);line-height:1.65;color:#555;text-align:left}
.cr-open{padding:clamp(24px,3vw,36px);border-radius:20px;background:#fff;border:1px dashed rgba(0,0,0,.28)}
.cr-open h3{margin:0 0 8px;font-size:var(--fs-card-title);font-weight:700;color:#0b0b0b;text-align:left}
.cr-open p{margin:0;max-width:680px;font-size:var(--fs-card-body);line-height:1.7;color:#555;text-align:left}
.cr-role{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;padding:20px 24px;border-radius:16px;background:#fff;border:1px solid rgba(0,0,0,.1);text-decoration:none;color:#111;margin-bottom:12px;transition:border-color .2s}
.cr-role:hover{border-color:#000}
.cr-role b{font-size:var(--fs-card-title)}
.cr-role span{font-size:var(--fs-small);color:#666}
.cr-send{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px;margin:0 0 clamp(24px,3vw,36px);padding:0;list-style:none}
.cr-send li{padding:18px 20px;border-radius:14px;background:#fff;border:1px solid rgba(0,0,0,.1);font-size:var(--fs-card-body);line-height:1.6;color:#2f2f2f;text-align:left}
.cr-send li b{display:block;margin-bottom:4px;color:#0b0b0b}
.cr-cta{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;padding:clamp(28px,4vw,52px);border-radius:24px;background:#0b0b0b;color:#fff}
.cr-cta h2{margin:0 0 10px;font-size:var(--fs-h3);font-weight:800;color:#fff;text-align:left}
.cr-cta p{margin:0;max-width:620px;font-size:var(--fs-card-body);line-height:1.7;color:rgba(255,255,255,.72);text-align:left}
.cr-cta .cr-btn--solid{background:#fff;color:#000;border-color:#fff}
.cr-cta .cr-btn--solid:hover{background:#d9d9d9}
`;

const fade = (i = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] } });

export default function Careers() {
  return (
    <div className="cr-page" style={{ background: B.bgLight }}>
      <style>{CSS}</style>

      <section className="cr-hero">
        <div style={PX}>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <span className="cr-kicker">Careers at WellMind</span>
            <h1>Build software and AI that works in the real world.</h1>
            <p>
              We are a small, hands-on engineering team building software, AI and data systems, with a particular edge in healthcare AI.
              If you like owning problems end to end, we would like to hear from you.
            </p>
            <div className="cr-actions">
              <a className="cr-btn cr-btn--solid" href={APPLY_HREF}><Mail size={16} /> Send your CV</a>
              <Link className="cr-btn cr-btn--ghost" to="/case-studies">See our work <ArrowRight size={16} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cr-sec">
        <div style={PX}>
          <motion.div className="cr-head" {...fade()}>
            <h2>Open positions</h2>
            <p>Roles are posted here as they open.</p>
          </motion.div>
          {OPEN_ROLES.length > 0 ? (
            OPEN_ROLES.map((r) => (
              <a className="cr-role" key={r.title} href={r.href}>
                <b>{r.title}</b><span>{r.type} · {r.location}</span>
              </a>
            ))
          ) : (
            <motion.div className="cr-open" {...fade(1)}>
              <h3>No formal openings right now</h3>
              <p>
                We still read every message. If you are strong in one of the areas below, send us your CV and a link to your work, and we will
                get back to you when a suitable role opens.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="cr-sec cr-sec--alt">
        <div style={PX}>
          <motion.div className="cr-head" {...fade()}>
            <h2>Who we are looking for</h2>
            <p>People who are curious, careful with detail, and happy to talk to clients as well as to code.</p>
          </motion.div>
          <div className="cr-grid">
            {AREAS.map((a, i) => (
              <motion.div className="cr-card" key={a.title} {...fade(i)}>
                <span className="ic">{a.icon}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cr-sec">
        <div style={PX}>
          <motion.div className="cr-head" {...fade()}>
            <h2>How we work</h2>
          </motion.div>
          <div className="cr-grid">
            {WAYS.map((a, i) => (
              <motion.div className="cr-card" key={a.title} {...fade(i)}>
                <span className="ic">{a.icon}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cr-sec cr-sec--alt" id="apply" style={{ paddingBottom: SECTION_PAD }}>
        <div style={PX}>
          <motion.div className="cr-head" {...fade()}>
            <h2>What to send</h2>
            <p>Keep it short. We care more about what you have built than how the message is formatted.</p>
          </motion.div>
          <ul className="cr-send">
            <li><b>Your CV</b>A PDF or a link to your LinkedIn profile.</li>
            <li><b>Your work</b>A GitHub, portfolio or project link we can look at.</li>
            <li><b>A few lines</b>What you do best and what you would like to work on.</li>
          </ul>
          <div className="cr-cta">
            <div>
              <h2>Ready to get in touch?</h2>
              <p>Email {APPLY_EMAIL} and mention the area you work in.</p>
            </div>
            <a className="cr-btn cr-btn--solid" href={APPLY_HREF}><Mail size={16} /> Email us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
