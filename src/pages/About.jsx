/**
 * About.jsx — WellMind Data Solutions
 * Updated to match Resources.jsx visual language.
 * Structure: Hero (Light) -> Dark Strip (Stats) -> Light Section (Values) -> Light Section (Team) -> Light CTA.
 */

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, Zap, Target, FlaskConical, Package, Globe,
  BookOpen, BarChart3, Users, Award, CheckCircle, Star,
  Brain, TrendingUp, Shield, Mail, ExternalLink, Dna,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge } from '../theme';
import { HeroGridBg } from '../components/BgGrid';
import HeroIllustration from '../assets/illustrations/ai-data-hero.png';
import TayyabPhoto from '../assets/team/tayyab-ijaz.png';
import SalmanPhoto from '../assets/team/salman-raza.png';

/* ─── Brand Tokens — IDENTICAL to Resources.jsx ─────────────────────────────── */
/* ─── Background helpers ─────────────────────────────────────────────────────────── */
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
        background: hov ? 'linear-gradient(135deg,rgba(255,255,255,0.95) 0%,rgba(245, 241, 246,0.85) 100%)' : B.cardBg,
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
      <div style={{ marginTop:16, display:'flex', alignItems:'center', gap:6, color:color, fontWeight:700, fontSize:'clamp(12px,1.3vw,14px)', letterSpacing:'0.05em' }}>
        <CheckCircle size={16} strokeWidth={2.5}/> Our Core Standard
      </div>
    </motion.div>
  );
}

/* ─── Team Member Component (Attractive "Meat" Section) ─────────────────────────── */
function TeamMember({ member, i }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div 
      initial={{ opacity:0, y:35 }} 
      whileInView={{ opacity:1, y:0 }} 
      viewport={{ once:true }} 
      transition={{ duration:0.6, delay:i*0.12, ease:[0.16,1,0.3,1] }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position:'relative', background:B.cardBg, backdropFilter:'blur(12px)',
        borderRadius:28, overflow:'hidden',
        border:`2px solid ${hov ? B.action : B.glassBorder}`,
        boxShadow: hov ? `0 24px 60px -15px rgba(11, 124, 147,0.25),0 0 0 1px rgba(11, 124, 147,0.1)` : B.cardShadow,
        height:'100%',
        transition:'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        display:'flex', flexDirection:'column',
      }}
    >
      {/* Image Area — white background behind headshot */}
      <div style={{ position:'relative', height:'clamp(240px,26vw,320px)', overflow:'hidden', background:'#FFFFFF' }}>
        {member.image ? (
          <img src={member.image} alt={member.name} style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', transform:hov?'scale(1.03)':'scale(1)', transition:'transform 0.6s ease' }} />
        ) : (
          <div style={{ width:'100%', height:'100%', background:`linear-gradient(135deg,${member.bg1||B.primary},${member.bg2||B.action})`, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ fontSize:'clamp(3rem,5vw,4.5rem)', fontWeight:800, color:'rgba(255,255,255,0.9)' }}>
              {member.name.split(' ').map(n=>n[0]).join('')}
            </span>
          </div>
        )}

        {/* Role Badge — two-line pill, top-left */}
        <div style={{ position:'absolute', top:16, left:16, maxWidth:'calc(100% - 32px)' }}>
          <span style={{
            display:'inline-block', fontSize:'clamp(10px,1.1vw,12px)', fontWeight:700,
            textTransform:'uppercase', letterSpacing:'0.06em', lineHeight:1.4, color:'#FFFFFF',
            background:`linear-gradient(135deg,${B.primary},${B.primaryMid})`,
            padding:'8px 14px', borderRadius:12,
            boxShadow:'0 6px 20px rgba(74,43,95,0.35)',
          }}>
            {member.role}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding:'clamp(20px,2.5vw,30px)', display:'flex', flexDirection:'column', flexGrow:1 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
          <h3 className="card-project-title" style={{ color:B.textMain }}>{member.name}</h3>
          {member.featured && <Star size={16} fill={B.accent} color={B.accent} />}
        </div>
        <div style={{ width:36, height:3, borderRadius:2, background:`linear-gradient(90deg,${B.action},${B.primary})`, marginBottom:16 }} />

        <p className="card-project-body" style={{ color:B.textMid, marginBottom:20, lineHeight:1.6 }}>
          {member.bio}
        </p>

        {/* Skills Tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:20 }}>
          {member.skills.slice(0,6).map((s,si) => (
            <span key={si} style={{ fontSize:'clamp(10px,1.1vw,11px)', fontWeight:600, padding:'5px 11px', borderRadius:6, background:B.primaryLight, border:`1px solid ${B.primaryBorder}`, color:B.primary }}>
              {s}
            </span>
          ))}
        </div>

        {/* Stats Row (icon + value + label) */}
        {member.stats && (
          <div style={{ display:'flex', gap:'clamp(20px,3vw,32px)', marginBottom:24, flexWrap:'wrap', paddingTop:16, borderTop:`1px solid ${B.primaryBorder}` }}>
            {member.stats.map((st, si) => (
              <div key={si} style={{ display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ color:B.action, flexShrink:0 }}>{st.icon}</span>
                <div>
                  <div style={{ fontWeight:800, fontSize:'clamp(1rem,1.6vw,1.25rem)', color:B.textMain, lineHeight:1.1 }}>{st.value}</div>
                  <div style={{ fontSize:'clamp(9px,1vw,10.5px)', color:B.textMid, fontWeight:600, letterSpacing:'0.02em' }}>{st.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Socials / Actions */}
        <div style={{ marginTop:'auto', paddingTop:member.stats?0:20, borderTop:member.stats?'none':`1px solid ${B.primaryBorder}` }}>
          <a href={member.linkedin || '#'} target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:8, color:B.action, fontWeight:700, fontSize:'clamp(11px,1.2vw,13px)', letterSpacing:'0.06em', textDecoration:'none', textTransform:'uppercase' }}>
            <FaLinkedin size={15}/> Let's Connect on LinkedIn <ArrowRight size={14} style={{ transform:hov?'translateX(4px)':'translateX(0)', transition:'transform 0.3s' }}/>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN ──────────────────────────────────────────────────────────────── */
export default function About() {
  
  const values = [
    { title: 'Domain Rigor First', desc: 'Our DNA is technical rigor. We don\'t just clean data; we understand the domain: the business, the science, and the real-world implications behind every dataset.', icon:<Dna size={24}/>, color:B.action },
    { title: 'Global Standards', desc: 'Our workflows are modeled after top-tier research institutions. We bring publication-quality reproducibility to enterprise problems.', icon:<Globe size={24}/>, color:B.primary },
    { title: 'Full-Stack Ownership', desc: 'From wet-lab strategy to production-grade MLOps deployment. We don\'t hand off a CSV and walk away; we see it through to value.', icon:<Package size={24}/>, color:B.secondary },
    { title: 'Transparent Pricing', desc: 'No hidden billable hours. We scope projects with fixed fees and clear deliverables. You know exactly what you are paying for.', icon:<Target size={24}/>, color:B.accent },
  ];

  const team = [
    {
      name: 'Tayyab Ijaz',
      role: 'Founder & AI Head',
      featured: true,
      image: TayyabPhoto,
      linkedin: 'https://www.linkedin.com/in/tayyab-ijaz/',
      bio: "Tayyab Ijaz is the Founder and AI Head at WellMind Data Solutions, where he leads the design and deployment of production-ready AI systems, data-driven pipelines, and scalable intelligent solutions for clients across industries. His expertise sits at the intersection of Healthcare AI and business systems. He turns complex research and business challenges into practical, real-world outcomes for WellMind's clients.",
      skills: ['Artificial Intelligence', 'Machine Learning', 'Data Science & Analytics', 'Healthcare AI', 'Biometrics & Voice AI', 'AI Team Leadership'],
    },
    {
      name: 'Salman Raza',
      role: 'Co-Founder',
      image: SalmanPhoto,
      linkedin: 'https://www.linkedin.com/in/salmanrazaaso/',
      bio: "Salman Raza is the Co-Founder of WellMind Data Solutions, where he drives the company's strategy, brand direction, and growth roadmap. Alongside building WellMind, he serves as Marketing & Managing Director at WAPEXP and Co-Founder of ATS Digital Agency, bringing hands-on experience in marketing, business development, and client-facing operations. He's especially passionate about career guidance: connecting students, universities, and the tech industry through mentorship, seminars, and hands-on roadmaps for breaking into IT.",
      skills: ['Business Strategy', 'Marketing & Branding', 'Business Development', 'Career Guidance & Mentorship', 'Digital Solutions', 'Client Relations'],
    },
  ];

  return (
    <div style={{ background:B.bgLight, minHeight:'100vh', overflowX:'clip', position:'relative' }}>

      {/* ══ 1. HERO ══ */}
      <section style={{ position:'relative', minHeight:'70vh', display:'flex', flexDirection:'column', overflow:'hidden', zIndex:1, paddingTop:'clamp(60px,8vw,100px)', background:B.heroBg }}>
        <HeroGridBg uid="AboutHero" opacity={0.30}/>
        <div style={{ position:'absolute', left:0, top:0, width:'45%', height:'100%', background:'linear-gradient(90deg,rgba(127,32,55,0.06) 0%,transparent 80%)', pointerEvents:'none', zIndex:1 }}/>
        <div style={{ position:'absolute', right:0, top:0, width:'45%', height:'100%', background:'linear-gradient(270deg,rgba(127,32,55,0.06) 0%,transparent 80%)', pointerEvents:'none', zIndex:1 }}/>
        <DataParticles count={18}/>

        <div style={{ flex:1, position:'relative', zIndex:10, display:'flex', alignItems:'center', padding:'clamp(48px,8vw,96px) clamp(16px,4vw,24px) clamp(32px,5vw,72px)' }}>
          <div style={{ maxWidth:1320, width:'100%', margin:'0 auto', display:'grid', gridTemplateColumns:'minmax(0,1.05fr) minmax(320px,0.95fr)', alignItems:'center', gap:'clamp(32px,5vw,60px)' }} className="about-hero-grid">

            <motion.div initial="hidden" animate="visible" variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.11 } } }} style={{ textAlign:'left' }}>

              <motion.div variants={fadeUp} custom={0}>
                <SectionBadge>Global Expertise</SectionBadge>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={0.05} className="hero-h1" style={{ marginBottom:'clamp(16px,2.5vw,28px)' }}>
                <span style={{ color:B.primaryDark }}>Turning Complex Data </span><br className="hero-br"/>
                <span style={{ background:'linear-gradient(90deg,#B02A48 25%,#93213F 75%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  Into Intelligence.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={0.2} className="hero-sub" style={{ color:B.textMid, maxWidth:600, margin:'0 0 clamp(24px,3vw,40px)', letterSpacing:'0.02em' }}>
                We are WellMind Data Solutions. A team of data scientists, ML engineers, and analytics strategists dedicated to turning complex data into intelligent decisions for startups, enterprises, and research teams worldwide.
              </motion.p>

              <motion.div variants={fadeUp} custom={0.3}>
                <Link to="/book-discovery" className="btn-primary" style={{ display:'inline-flex', alignItems:'center', gap:10 }}>
                  <Zap size={18}/> Book Your Free Consultation <ArrowRight size={18}/>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7, ease:[0.16,1,0.3,1], delay:0.15 }} style={{ position:'relative', transform:'scale(1.18)', transformOrigin:'center' }} className="about-hero-visual">
              <img src={HeroIllustration} alt="AI-powered data intelligence platform" style={{ width:'100%', height:'auto', display:'block', filter:'drop-shadow(0 30px 60px rgba(74,43,95,0.25))' }} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ 3. MAIN LIGHT — Our Story & Values ══ */}
      <section style={{ position:'relative', zIndex:1, background:`linear-gradient(180deg,${B.bgLight} 0%,#F2EBF9 50%,#E8E1F0 100%)`, overflow:'clip', padding:0 }}>
        <HeroGridBg uid="AboutLight" opacity={0.15}/>
        <DataParticles count={12}/>

        <div style={{ position:'relative', zIndex:2, padding:`${SECTION_PAD} 0` }}>
          <div style={{ ...PX }}>
            
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:60 }}>
              <SectionBadge>Our DNA</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom:12 }}>More Than Just Consultants</h2>
              <p className="section-lead" style={{ maxWidth:1200, margin:'0 auto' }}>
                We don't just write code; we integrate into your process. We bring the rigor of academic publication to the speed of modern tech startups.
              </p>
            </motion.div>

            <div className="grid-values">
              {values.map((v, i) => <ValueCard key={i} {...v} i={i}/>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. THE TEAM ("Meat" Section) ══ */}
      <section style={{ position:'relative', zIndex:1, background:`linear-gradient(180deg,#E8E1F0 0%,#F5F1F6 100%)`, padding:`${SECTION_PAD} 0` }}>
        <HeroGridBg uid="TeamGrid" opacity={0.15}/>
        <DataParticles count={12}/>
        
        <div style={{ ...PX, position:'relative', zIndex:2 }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:60 }}>
            <SectionBadge>Meet The Minds</SectionBadge>
            <h2 className="section-h2">Meet the Founders</h2>
          </motion.div>

          <div className="grid-team-two">
            {team.map((m, i) => <TeamMember key={i} member={m} i={i}/>)}
          </div>
        </div>
      </section>

      {/* ══ 5. LIGHT CTA (Not Dark as requested) ══ */}
      <section style={{ padding:`${SECTION_PAD} 0`, paddingTop:'clamp(48px,8vw,100px)', paddingBottom:'clamp(48px,8vw,100px)', position:'relative', overflow:'clip', zIndex:1, background:`linear-gradient(180deg,${B.bgLight} 0%,#E8E1F0 100%)` }}>
        <HeroGridBg uid="AboutFooter" opacity={0.15}/>
        <DataParticles count={16}/>
        <div style={{ position:'absolute', top:'20%', left:'10%', width:400, height:400, borderRadius:'50%', background:`radial-gradient(circle,rgba(107, 46, 116,0.10) 0%,transparent 70%)`, pointerEvents:'none' }}/>
        <div style={{ position:'absolute', bottom:'10%', right:'8%', width:300, height:300, borderRadius:'50%', background:`radial-gradient(circle,rgba(11, 124, 147,0.08) 0%,transparent 70%)`, pointerEvents:'none' }}/>
        <div style={{ ...PX, position:'relative', zIndex:2, textAlign:'center' }}>
          <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}>
            <SectionBadge>Join Us</SectionBadge>
            <h2 className="section-h2" style={{ color:B.primaryDark, marginBottom:20 }}>
              Ready to Scale Your Vision?<br/>
              <span style={{ background:'linear-gradient(90deg,#B02A48 25%,#93213F 75%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Let's Build Together.</span>
            </h2>
            <p className="section-lead" style={{ color:B.textMid, maxWidth:1200, margin:'0 auto clamp(24px,3.5vw,48px)', lineHeight:1.75 }}>
              Whether you need a full-scale bioinformatics pipeline, a custom AI model, or just a strategic consultation on how to handle your data. We are ready to listen.
            </p>
            <motion.div whileHover={{ scale:1.04, y:-3 }} whileTap={{ scale:0.97 }} style={{ display:'inline-block' }}>
              <Link to="/book-discovery" className="btn-primary" style={{ background:`linear-gradient(135deg,${B.action},#0A5F75)`, boxShadow:`0 8px 40px ${B.actionGlow},0 0 80px rgba(11, 124, 147,0.15)`, border:`1px solid rgba(11, 124, 147,0.40)`, padding:'clamp(14px,2.5vw,20px) clamp(24px,5vw,56px)' }}>
                <Zap size={18}/>Book Your Free Consultation <ArrowRight size={18}/>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ SHARED CSS ══ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'Plus Jakarta Sans',sans-serif;-webkit-font-smoothing:antialiased}
        a{text-decoration:none}
        .section-badge{display:inline-flex;align-items:center;gap:8px;padding:6px clamp(14px,2vw,20px);border-radius:99px;font-size:var(--fs-badge);font-weight:700;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:20px}
        .badge-dot{width:7px;height:7px;border-radius:50%;background:var(--c-action);flex-shrink:0}
        .section-h2{font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:var(--fs-section-h2);color:var(--c-text-main);line-height:1.15;margin-bottom:14px}
        .section-h2.dark{color:var(--c-text-dark)}
        .section-lead{font-size:var(--fs-section-lead);color:var(--c-text-mid);max-width:720px;font-weight:500;margin:0 auto;line-height:1.6}
        .card-title{font-weight:700;font-size:var(--fs-card-title);color:var(--c-text-main);margin-bottom:14px;line-height:1.3}
        .card-body{font-size:var(--fs-card-body);line-height:1.7;color:var(--c-text-mid)}
        .hero-h1{font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:clamp(1.75rem,5.5vw,5rem);line-height:1.1;letter-spacing:-0.02em}
        .hero-sub{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(0.9rem,2.2vw,1.5rem);line-height:1.6;letter-spacing:0.02em}
        .card-project-title{font-weight:700;font-size:clamp(1rem,2vw,1.6rem);line-height:1.3;font-family:'Plus Jakarta Sans',sans-serif}
        .card-project-body{font-size:clamp(0.85rem,1.5vw,1.1rem);line-height:1.7;font-family:'Plus Jakarta Sans',sans-serif}
        .tool-tag{font-size:clamp(10px,1.2vw,13px);font-weight:700;letter-spacing:0.04em}
        .cta-link-text{font-weight:700;font-size:clamp(12px,1.4vw,15px);letter-spacing:0.06em;text-transform:uppercase}
        .label-text{font-size:clamp(10px,1.2vw,13px);font-weight:700;letter-spacing:0.12em;text-transform:uppercase}
        .btn-primary{display:inline-flex;align-items:center;gap:10px;padding:clamp(12px,2vw,18px) clamp(20px,4vw,40px);border-radius:12px;background:linear-gradient(135deg,#7C3AED 0%,#0B7C93 100%);color:#ffffff;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:clamp(0.85rem,1.8vw,1.2rem);letter-spacing:0.10em;text-transform:uppercase;text-decoration:none;border:none;cursor:pointer;transition:opacity 0.2s,transform 0.2s,box-shadow 0.2s}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(124,58,237,0.35)}
        .btn-secondary{display:inline-flex;align-items:center;gap:10px;padding:clamp(10px,1.8vw,16px) clamp(20px,4vw,40px);border-radius:12px;background:transparent;color:#93213F;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:clamp(0.85rem,1.8vw,1.2rem);letter-spacing:0.10em;text-transform:uppercase;text-decoration:none;border:2px solid #93213F;cursor:pointer;transition:background 0.2s,transform 0.2s}
        
        /* Grid Layouts */
        .grid-stats-compact{display:grid;grid-template-columns:repeat(5,1fr);gap:clamp(10px,1.5vw,20px)}
        .grid-projects{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(16px,2.5vw,28px)}
        .grid-3col{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(14px,2.2vw,24px)}
        .grid-2col{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(16px,2.5vw,28px)}
        .grid-values{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(16px,2vw,24px)}
        .grid-team-two{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(20px,2.5vw,32px);max-width:1100px;margin:0 auto}

        @media(max-width:1024px){
          .grid-3col{grid-template-columns:repeat(2,1fr)}
          .grid-projects{grid-template-columns:repeat(2,1fr)}
          .grid-values{grid-template-columns:repeat(2,1fr)}
          .grid-stats-compact{grid-template-columns:repeat(3,1fr)} 
        }
        @media(max-width:768px){
          .grid-stats-compact{grid-template-columns:repeat(2,1fr);gap:14px}
          .grid-projects{grid-template-columns:repeat(2,1fr);gap:16px}
          .grid-values{grid-template-columns:repeat(2,1fr);gap:16px}
          .grid-team-two{grid-template-columns:1fr}
          .grid-2col{grid-template-columns:1fr}
          .hero-br{display:none}
        }
        @media(max-width:900px){
          .about-hero-grid{grid-template-columns:1fr !important;text-align:center}
          .about-hero-grid > div:first-child{text-align:center}
          .about-hero-visual{max-width:420px;margin:0 auto;order:-1}
        }
        @media(max-width:425px){
          .grid-stats-compact{grid-template-columns:1fr} 
          .grid-projects{grid-template-columns:1fr}
          .grid-values{grid-template-columns:repeat(2,1fr)}
          .grid-3col{grid-template-columns:1fr}
          .btn-primary,.btn-secondary{width:100%;justify-content:center}
        }
        @keyframes wmDrift{0%,100%{transform:translate(0,0)}33%{transform:translate(14px,-18px)}66%{transform:translate(-10px,12px)}}
      `}</style>
    </div>
  );
}