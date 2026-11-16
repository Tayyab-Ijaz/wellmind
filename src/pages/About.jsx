/**
 * About.jsx — WellMind Data Solutions
 * Structure: Hero -> Mission & Vision -> Values -> Founders -> CTA (light, matches Resources.jsx visual language).
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Package, CheckCircle, Code2, HeartPulse } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge } from '../theme';
import { HeroGridBg } from '../components/BgGrid';
import HeroImage from '../assets/illustrations/about-hero.webp';
import TayyabPhoto from '../assets/team/tayyab-ijaz.webp';
import SalmanPhoto from '../assets/team/salman-raza.webp';

/* ─── Value Card Component ───────────────────────────────────────────────────── */
function ValueCard({ title, desc, icon, color, i }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div 
      initial={{ opacity:0, y:30 }} 
      whileInView={{ opacity:1, y:0 }} 
      viewport={{ once:true }} 
      transition={{ duration:0.5, delay:i*0.1, ease:[0.16,1,0.3,1] }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'linear-gradient(135deg,rgba(255,255,255,0.95) 0%,rgba(243,243,243,0.85) 100%)' : B.cardBg,
        backdropFilter:'blur(12px)', borderRadius:24,
        border:`2px solid ${hov ? color : B.glassBorder}`,
        boxShadow: hov ? `0 20px 50px -15px ${color}35` : B.cardShadow,
        padding:'clamp(28px,3vw,36px)', height:'100%',
        display:'flex', flexDirection:'column', alignItems:'flex-start',
        transition:'all 0.38s cubic-bezier(0.16,1,0.3,1)',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
      }}
    >
      <div style={{ marginBottom:20, width:64, height:64, borderRadius:16, background:`${color}15`, display:'flex', alignItems:'center', justifyContent:'center', color:color, border:`1px solid ${color}30` }}>
        {React.cloneElement(icon, { size:32 })}
      </div>
      <h3 className="card-title" style={{ marginBottom:12 }}>{title}</h3>
      <p className="card-body" style={{ flex:1 }}>{desc}</p>
      <div style={{ marginTop:16, display:'flex', alignItems:'center', gap:6, color:color, fontWeight:700, fontSize:'var(--fs-small)', letterSpacing:'0.05em' }}>
        <CheckCircle size={16} strokeWidth={2.5}/> Our Core Standard
      </div>
    </motion.div>
  );
}

/* ─── Founder card: portrait, role, short bio, focus areas ───────────────────── */
function FounderCard({ member, i }) {
  return (
    <motion.article
      className="ab-founder"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <img className="ab-founder-photo" src={member.image} alt={member.name} width="120" height="120" loading="lazy" decoding="async" />
      <div className="ab-founder-body">
        <div className="ab-founder-head">
          <div>
            <h3>{member.name}</h3>
            <span>{member.role}</span>
          </div>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}>
            <FaLinkedin size={18} />
          </a>
        </div>
        <p>{member.bio}</p>
        <ul>{member.skills.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
    </motion.article>
  );
}

/* ─── MAIN ──────────────────────────────────────────────────────────────── */
export default function About() {
  
  const values = [
    { title: 'Engineering First', desc: 'We build for production from day one: clean code, documentation and systems your own team can run, test and extend.', icon:<Code2 size={24}/>, color:B.action },
    { title: 'Healthcare AI Depth', desc: 'Our deepest experience is in healthcare and biomedical data. We understand the clinical, claims and research context behind every dataset.', icon:<HeartPulse size={24}/>, color:B.primary },
    { title: 'Full-Stack Ownership', desc: 'From strategy to production deployment. We don\'t hand off a notebook and walk away; we see the work through to value.', icon:<Package size={24}/>, color:B.secondary },
    { title: 'Clear Scoping', desc: 'We agree scope and deliverables in writing before work begins, so you always know exactly what you are getting.', icon:<Target size={24}/>, color:B.accent },
  ];

  const team = [
    {
      name: 'Tayyab Ijaz',
      role: 'Founder & AI Head',
      image: TayyabPhoto,
      linkedin: 'https://www.linkedin.com/in/tayyab-ijaz/',
      bio: "Leads WellMind's AI engineering and delivery. Designs and ships production-ready AI systems and data pipelines, with a focus on healthcare AI and the business systems around it.",
      skills: ['Machine Learning', 'Healthcare AI', 'Data Science', 'AI Team Leadership'],
    },
    {
      name: 'Salman Raza',
      role: 'Co-Founder',
      image: SalmanPhoto,
      linkedin: 'https://www.linkedin.com/in/salmanrazaaso/',
      bio: "Drives WellMind's strategy, brand and growth. Brings hands-on experience in marketing, business development and client-facing operations, and mentors students entering the tech industry.",
      skills: ['Business Strategy', 'Marketing & Branding', 'Business Development', 'Client Relations'],
    },
  ];

  return (
    <div style={{ background:B.bgLight, minHeight: '100svh', overflowX:'clip', position:'relative' }}>

      {/* ══ 1. HERO ══ */}
      <section style={{ position:'relative', minHeight:'70vh', display:'flex', flexDirection:'column', overflow:'hidden', zIndex:1, paddingTop:'clamp(60px,8vw,100px)', background:B.heroBg }}>
        <HeroGridBg uid="AboutHero" opacity={0.30}/>
        <div style={{ position:'absolute', left:0, top:0, width:'45%', height:'100%', background:'linear-gradient(90deg,rgba(47,47,47,0.06) 0%,transparent 80%)', pointerEvents:'none', zIndex:1 }}/>
        <div style={{ position:'absolute', right:0, top:0, width:'45%', height:'100%', background:'linear-gradient(270deg,rgba(47,47,47,0.06) 0%,transparent 80%)', pointerEvents:'none', zIndex:1 }}/>
        <DataParticles count={18}/>

        <div style={{ flex:1, position:'relative', zIndex:10, display:'flex', alignItems:'center', padding:'clamp(32px,6vw,72px) clamp(16px,4vw,24px) clamp(40px,6vw,80px)' }}>
          <div style={{ maxWidth:1320, width:'100%', margin:'0 auto', display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)', alignItems:'center', gap:'clamp(32px,5vw,60px)' }} className="about-hero-grid">

            <motion.div initial="hidden" animate="visible" variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.11 } } }} style={{ textAlign:'left' }}>

              <motion.div variants={fadeUp} custom={0}>
                <SectionBadge>Global Expertise</SectionBadge>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={0.05} className="hero-h1" style={{ marginBottom:'clamp(16px,2.5vw,28px)' }}>
                <span style={{ color:B.primaryDark }}>Turning Complex Data </span><br className="hero-br"/>
                <span style={{ background:'linear-gradient(90deg,#4a4a4a 25%,#373737 75%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  Into Intelligence.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={0.2} className="hero-sub" style={{ color:B.textMid, maxWidth:600, margin:'0 0 clamp(24px,3vw,40px)', letterSpacing:'0.02em' }}>
                We are WellMind Data Solutions, a software, AI and data engineering company. Our engineers and data scientists build custom software, AI systems and data platforms, with a particular edge in healthcare AI and biomedical data science.
              </motion.p>

              <motion.div variants={fadeUp} custom={0.3}>
                <Link to="/book-discovery" className="btn-primary" style={{ display:'inline-flex', alignItems:'center', gap:10 }}>
                  <Zap size={18}/> Book Your Free Consultation <ArrowRight size={18}/>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7, ease:[0.16,1,0.3,1], delay:0.15 }} className="about-hero-visual">
              <img src={HeroImage} alt="Brain hologram surrounded by data analytics, AI insights and biomedical data screens in a research lab" width="1200" height="1200" loading="eager" decoding="async" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ 1b. MISSION & VISION ══ */}
      <section style={{ position:'relative', zIndex:1, background:'#f6f6f6', padding:`${SECTION_PAD} 0`, overflow:'clip' }}>
        <div style={{ ...PX, position:'relative', zIndex:2 }}>
          <div className="ab-mv">
            {[
              { label: 'Our Mission', head: 'Build systems people can trust.', text: 'To design, build and run software, AI and data systems that organisations can rely on, taking every project from first idea to a working, maintained product, with honest scoping and clear communication along the way.' },
              { label: 'Our Vision', head: 'The team you call when data has to work for real.', text: 'To be the engineering partner teams reach for when AI and data must work outside the lab: known for depth in healthcare AI, work you can inspect, and systems that keep running long after launch.' },
            ].map((c, i) => (
              <motion.div key={c.label} className="ab-mv-card" initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55, delay:i*0.1, ease:[0.16,1,0.3,1] }}>
                <span className="ab-mv-label">{c.label}</span>
                <h2>{c.head}</h2>
                <p>{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 2. MAIN LIGHT — Our Story & Values ══ */}
      <section style={{ position:'relative', zIndex:1, background:`linear-gradient(180deg,${B.bgLight} 0%,#efefef 50%,#e5e5e5 100%)`, overflow:'clip', padding:0 }}>
        <HeroGridBg uid="AboutLight" opacity={0.15}/>
        <DataParticles count={12}/>

        <div style={{ position:'relative', zIndex:2, padding:`${SECTION_PAD} 0` }}>
          <div style={{ ...PX }}>
            
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:'clamp(32px,5vw,60px)' }}>
              <SectionBadge>Our DNA</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom:12 }}>Engineers Who Work Like Partners</h2>
              <p className="section-lead" style={{ maxWidth:760, margin:'0 auto' }}>
                We don't just write code; we fit into your process. We bring research-grade rigour to the pace of a modern product team.
              </p>
            </motion.div>

            <div className="grid-values">
              {values.map((v, i) => <ValueCard key={i} {...v} i={i}/>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. THE TEAM ══ */}
      <section style={{ position:'relative', zIndex:1, background:`linear-gradient(180deg,#e5e5e5 0%,#f3f3f3 100%)`, padding:`${SECTION_PAD} 0`, overflow:'clip' }}>
        <HeroGridBg uid="TeamGrid" opacity={0.15}/>
        <DataParticles count={12}/>
        
        <div style={{ ...PX, position:'relative', zIndex:2 }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:'clamp(32px,5vw,60px)' }}>
            <SectionBadge>Meet The Minds</SectionBadge>
            <h2 className="section-h2">Meet the Founders</h2>
            <p className="section-lead" style={{ marginTop:12, maxWidth:760, margin:'12px auto 0' }}>
              The people leading WellMind's engineering, strategy and client delivery.
            </p>
          </motion.div>

          <div className="ab-founders">
            {team.map((m, i) => <FounderCard key={m.name} member={m} i={i}/>)}
          </div>
        </div>
      </section>

      {/* ══ 4. CTA ══ */}
      <section style={{ padding:`${SECTION_PAD} 0`, paddingTop:'clamp(48px,8vw,100px)', paddingBottom:'clamp(48px,8vw,100px)', position:'relative', overflow:'clip', zIndex:1, background:`linear-gradient(180deg,${B.bgLight} 0%,#e5e5e5 100%)` }}>
        <HeroGridBg uid="AboutFooter" opacity={0.15}/>
        <DataParticles count={16}/>
        <div style={{ position:'absolute', top:'20%', left:'10%', width:400, height:400, borderRadius:'50%', background:`radial-gradient(circle,rgba(57,57,57,0.10) 0%,transparent 70%)`, pointerEvents:'none' }}/>
        <div style={{ position:'absolute', bottom:'10%', right:'8%', width:300, height:300, borderRadius:'50%', background:`radial-gradient(circle,rgba(84,84,84,0.08) 0%,transparent 70%)`, pointerEvents:'none' }}/>
        <div style={{ ...PX, position:'relative', zIndex:2, textAlign:'center' }}>
          <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}>
            <SectionBadge>Join Us</SectionBadge>
            <h2 className="section-h2" style={{ color:B.primaryDark, marginBottom:20 }}>
              Ready to Scale Your Vision?{' '}<br className="hero-br" />
              <span style={{ background:'linear-gradient(90deg,#4a4a4a 25%,#373737 75%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Let's Build Together.</span>
            </h2>
            <p className="section-lead" style={{ color:B.textMid, maxWidth:760, margin:'0 auto clamp(24px,3.5vw,48px)', lineHeight:1.75 }}>
              Whether you need a custom application, an AI system, a data platform or engineers to join your team, we are ready to listen.
            </p>
            <motion.div whileHover={{ scale:1.04, y:-3 }} whileTap={{ scale:0.97 }} style={{ display:'inline-block' }}>
              <Link to="/book-discovery" className="btn-primary" style={{ background:`linear-gradient(135deg,${B.action},#393939)`, boxShadow:`0 8px 40px ${B.actionGlow},0 0 80px rgba(84,84,84,0.15)`, border:`1px solid rgba(84,84,84,0.40)`, padding:'clamp(14px,2.5vw,20px) clamp(24px,5vw,56px)' }}>
                <Zap size={18}/>Book Your Free Consultation <ArrowRight size={18}/>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ SHARED CSS ══ */}
      <style>{`
        .ab-mv{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(16px,2.4vw,28px)}
        .ab-mv-card{padding:clamp(28px,4vw,52px);border-radius:26px;background:#0b0b0b;color:#fff;border:1px solid rgba(255,255,255,.08)}
        .ab-mv-label{display:inline-block;margin-bottom:20px;font-size:var(--fs-label);font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.55)}
        .ab-mv-card h2{margin:0 0 16px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:var(--fs-section-h2);line-height:1.15;letter-spacing:-.02em;color:#fff;text-align:left}
        .ab-mv-card p{margin:0;font-size:var(--fs-card-title);line-height:1.75;color:rgba(255,255,255,.72);text-align:left}
        .ab-founders{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr));gap:clamp(16px,2.4vw,28px);max-width:1100px;margin:0 auto}
        .ab-founder{display:flex;gap:clamp(18px,2.4vw,28px);align-items:flex-start;padding:clamp(22px,2.8vw,32px);border-radius:22px;background:#fff;border:1px solid rgba(0,0,0,.1)}
        .ab-founder-photo{flex:none;width:112px;height:112px;border-radius:50%;object-fit:cover;background:#f0f0f0;border:1px solid rgba(0,0,0,.1)}
        .ab-founder-body{min-width:0;flex:1}
        .ab-founder-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:10px}
        .ab-founder-head h3{margin:0;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:var(--fs-card-title);color:#0b0b0b;line-height:1.2;text-align:left}
        .ab-founder-head span{display:block;margin-top:4px;font-size:var(--fs-label);font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#6b6b6b}
        .ab-founder-head a{flex:none;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;border:1px solid rgba(0,0,0,.18);color:#0b0b0b;transition:background .2s,color .2s}
        .ab-founder-head a:hover{background:#0b0b0b;color:#fff}
        .ab-founder-body p{margin:0 0 14px;font-size:var(--fs-card-body);line-height:1.65;color:#444;text-align:left}
        .ab-founder-body ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px}
        .ab-founder-body li{padding:5px 11px;border-radius:999px;border:1px solid rgba(0,0,0,.14);font-size:var(--fs-label);font-weight:600;color:#333}
        @media (max-width:560px){.ab-founder{flex-direction:column}.ab-founder-photo{width:96px;height:96px}}
        .section-badge{display:inline-flex;align-items:center;gap:8px;padding:6px clamp(14px,2vw,20px);border-radius:99px;font-size:var(--fs-badge);font-weight:700;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:20px}
        .badge-dot{width:7px;height:7px;border-radius:50%;background:var(--c-action);flex-shrink:0}
        .section-h2{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:var(--fs-section-h2);color:var(--c-text-main);line-height:1.15;margin-bottom:14px}
        .section-h2.dark{color:var(--c-text-dark)}
        .section-lead{font-size:var(--fs-section-lead);color:var(--c-text-mid);max-width:720px;font-weight:500;margin:0 auto;line-height:1.6}
        .card-title{font-weight:700;font-size:var(--fs-card-title);color:var(--c-text-main);margin-bottom:14px;line-height:1.3}
        .card-body{font-size:var(--fs-card-body);line-height:1.7;color:var(--c-text-mid)}
        .hero-h1{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:var(--fs-hero);line-height:1.1;letter-spacing:-0.02em}
        .hero-sub{font-family:'Space Grotesk',sans-serif;font-size:var(--fs-card-title);line-height:1.6;letter-spacing:0.02em}
        .card-project-title{font-weight:700;font-size:var(--fs-card-title);line-height:1.3;font-family:'Space Grotesk',sans-serif}
        .card-project-body{font-size:var(--fs-card-body);line-height:1.7;font-family:'Space Grotesk',sans-serif}
        .tool-tag{font-size:var(--fs-small);font-weight:700;letter-spacing:0.04em}
        .cta-link-text{font-weight:700;font-size:var(--fs-card-body);letter-spacing:0.06em;text-transform:uppercase}
        .label-text{font-size:var(--fs-small);font-weight:700;letter-spacing:0.12em;text-transform:uppercase}
        .btn-primary{display:inline-flex;align-items:center;gap:10px;padding:clamp(12px,2vw,18px) clamp(20px,4vw,40px);border-radius:12px;background:linear-gradient(135deg,#5c5c5c 0%,#545454 100%);color:#ffffff;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:var(--fs-btn);letter-spacing:0.10em;text-transform:uppercase;text-decoration:none;border:none;cursor:pointer;transition:opacity 0.2s,transform 0.2s,box-shadow 0.2s}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(92,92,92,0.35)}
        .btn-secondary{display:inline-flex;align-items:center;gap:10px;padding:clamp(10px,1.8vw,16px) clamp(20px,4vw,40px);border-radius:12px;background:transparent;color:#373737;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:var(--fs-btn);letter-spacing:0.10em;text-transform:uppercase;text-decoration:none;border:2px solid #373737;cursor:pointer;transition:background 0.2s,transform 0.2s}
        
        /* Grid Layouts */
        .grid-projects{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(16px,2.5vw,28px)}
        .grid-3col{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(14px,2.2vw,24px)}
        .grid-2col{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(16px,2.5vw,28px)}
        .grid-values{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(16px,2vw,24px)}
        .grid-team-two{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(20px,2.5vw,32px);max-width:1100px;margin:0 auto;align-items:stretch}
        .about-hero-visual{width:100%;max-width:560px;justify-self:center;aspect-ratio:1/1;border-radius:clamp(18px,2.4vw,28px);overflow:hidden;border:1px solid rgba(0,0,0,0.10);box-shadow:0 30px 60px -20px rgba(42,42,42,0.35)}
        .about-hero-visual img{width:100%;height:100%;object-fit:cover;display:block}

        @media(max-width:1024px){
          .grid-3col{grid-template-columns:repeat(2,1fr)}
          .grid-projects{grid-template-columns:repeat(2,1fr)}
          .grid-values{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:768px){
          .grid-projects{grid-template-columns:repeat(2,1fr);gap:16px}
          .grid-values{grid-template-columns:repeat(2,1fr);gap:16px}
          .grid-team-two{grid-template-columns:1fr}
          .grid-2col{grid-template-columns:1fr}
          .hero-br{display:none}
        }
        @media(max-width:900px){
          .about-hero-grid{grid-template-columns:1fr !important}
          .about-hero-grid > div:first-child{text-align:center}
          .about-hero-grid .hero-sub{margin-left:auto !important;margin-right:auto !important}
          .about-hero-visual{max-width:440px;justify-self:center;order:-1}
        }
        @media(max-width:560px){
          .grid-values{grid-template-columns:1fr}
        }
        @media(max-width:425px){
          .grid-projects{grid-template-columns:1fr}
          .grid-3col{grid-template-columns:1fr}
          .btn-primary,.btn-secondary{width:100%;justify-content:center}
        }
        @keyframes wmDrift{0%,100%{transform:translate(0,0)}33%{transform:translate(14px,-18px)}66%{transform:translate(-10px,12px)}}
      `}</style>
    </div>
  );
}