/**
 * Resources.jsx — WellMind Data Solutions  /resources (Blog Hub)
 * ✅ EXACT same CSS classes & tokens as Home.jsx
 *    section-h2, section-lead, section-badge (.badge-dot), btn-primary,
 *    hero-h1, hero-sub, card-title, card-body, card-project-title,
 *    card-project-body, tool-tag, cta-link-text, label-text
 * ✅ BG flow: hero gradient (HeroGrid) → dark strip → light section (HeroGrid) → light footer CTA (HeroGrid)
 * ✅ Responsive 320px → 1440px via same clamp() values
 */

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge } from '../theme';
import { HeroGridBg } from '../components/BgGrid';
import {
  BookOpen, Clock, ArrowRight, Search, Zap, Dna, Brain,
  TrendingUp, Leaf, BarChart3, Code2, FlaskConical,
  Mail, CheckCircle, Globe, Users, Star,
} from 'lucide-react';

/* ─── Brand Tokens — IDENTICAL to Home.jsx ─────────────────────────────── */
/* Category config */
const CATS = {
  'Bioinformatics':{ color:B.action,    bg:'rgba(11, 124, 147,0.10)', border:'rgba(11, 124, 147,0.28)', icon:<Dna size={12}/> },
  'Healthcare AI': { color:B.primary,   bg:'rgba(107, 46, 116,0.10)',  border:'rgba(107, 46, 116,0.26)',  icon:<Brain size={12}/> },
  'Fintech AI':    { color:B.secondary, bg:'rgba(147, 33, 63,0.10)',  border:'rgba(147, 33, 63,0.28)',  icon:<TrendingUp size={12}/> },
  'Agriculture AI':{ color:B.accent,    bg:'rgba(200, 138, 70,0.10)', border:'rgba(200, 138, 70,0.28)', icon:<Leaf size={12}/> },
  'MLOps':         { color:B.primaryMid,bg:'rgba(71,35,79,0.10)',   border:'rgba(71,35,79,0.26)',   icon:<Code2 size={12}/> },
  'Data Science':  { color:B.action,    bg:'rgba(11, 124, 147,0.10)', border:'rgba(11, 124, 147,0.28)', icon:<BarChart3 size={12}/> },
  'AI Strategy':   { color:B.secondary, bg:'rgba(147, 33, 63,0.10)',  border:'rgba(147, 33, 63,0.28)',  icon:<FlaskConical size={12}/> },
};
const ALL_FILTERS = ['All',...Object.keys(CATS)];

/* Articles */
const articles = [
  { slug:'rna-seq-analysis-guide',         cat:'Bioinformatics', featured:true,  date:'Apr 2026', rt:'14 min', title:'The Complete RNA-seq Analysis Pipeline (2026 Guide)',                        excerpt:'From raw FASTQ to differentially expressed genes — QC, alignment, quantification, downstream analysis with real code.',         tags:['RNA-seq','DESeq2','Bioinformatics'], img:'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80' },
  { slug:'explainable-ai-healthcare',       cat:'Healthcare AI',  featured:true,  date:'Apr 2026', rt:'9 min',  title:'Why Explainable AI Matters More Than Accuracy in Healthcare',               excerpt:'A 96% accurate model no clinician trusts is worthless. Why interpretability must come first — and how to achieve it.',          tags:['XAI','SHAP','Clinical AI'],          img:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80' },
  { slug:'ai-readiness-sme',                cat:'AI Strategy',    featured:false, date:'Mar 2026', rt:'8 min',  title:'5 Signs Your Business Is Ready for AI (And 3 Signs You\'re Not)',           excerpt:'Most AI projects fail not because of bad models — but because the organisation wasn\'t ready. An honest checklist.',           tags:['Strategy','SMB','Readiness'],        img:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80' },
  { slug:'scrna-seq-tutorial',              cat:'Bioinformatics', featured:false, date:'Mar 2026', rt:'11 min', title:'Single-Cell RNA-seq: Tools, Tutorials, and Common Mistakes',                excerpt:'scRNA-seq unlocks cell-by-cell resolution — but the analysis is notoriously error-prone. Scanpy, Seurat, clustering pitfalls.',  tags:['scRNA-seq','Scanpy','Seurat'],       img:'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80' },
  { slug:'nextflow-pipeline-bioinformatics',cat:'Bioinformatics', featured:false, date:'Feb 2026', rt:'10 min', title:'How We Cut a 3-Week Analysis to 4 Hours with Nextflow',                     excerpt:'Rebuilding a manual notebook workflow into a containerised, parallelised Nextflow pipeline — with code and lessons learned.',    tags:['Nextflow','Docker','Automation'],    img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
  { slug:'multi-omics-integration',         cat:'Bioinformatics', featured:false, date:'Feb 2026', rt:'11 min', title:'Multi-Omics Integration: A Practical Framework for Research Teams',         excerpt:'Combining genomics, transcriptomics, and proteomics — the framework we use without losing biological signal.',                  tags:['Multi-Omics','Integration'],        img:'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=800&q=80' },
  { slug:'fraud-detection-ml-guide',        cat:'Fintech AI',     featured:false, date:'Jan 2026', rt:'12 min', title:'Building Production-Grade Fraud Detection: Data to Deployment',             excerpt:'Feature engineering, model selection, threshold tuning, and monitoring a real-time fraud classifier in production.',            tags:['XGBoost','Feature Engineering'],    img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80' },
  { slug:'mlops-small-teams',               cat:'MLOps',          featured:false, date:'Jan 2026', rt:'9 min',  title:'MLOps for Small Teams: What to Build, Buy, or Skip',                       excerpt:'Enterprise MLOps stacks are overkill for teams under 10. The pragmatic minimum — CI/CD, monitoring, retraining patterns.',     tags:['MLOps','Production','CI/CD'],       img:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
  { slug:'crop-yield-ai',                   cat:'Agriculture AI', featured:false, date:'Dec 2025', rt:'10 min', title:'AI-Driven Crop Yield Prediction: Satellite, Soil & ML',                    excerpt:'How to fuse satellite NDVI, weather data, and IoT soil sensors into a single predictive model. Architecture and deployment.',   tags:['NDVI','LightGBM','AgriTech'],       img:'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80' },
];

/* ─── Background helpers — identical to Home.jsx ─────────────────────────── */
/* Featured card — dark overlay exactly like Home ProjectCard */
function FeaturedCard({ article, i }) {
  const [hov, setHov] = useState(false);
  const cat = CATS[article.cat] || {};
  return (
    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.1, ease:[0.16,1,0.3,1] }}>
      <Link to={`/resources/${article.slug}`} style={{ textDecoration:'none', display:'block', height:'100%' }}>
        <div
          onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
          style={{
            position:'relative', borderRadius:28, overflow:'hidden',
            height:'100%', minHeight:'clamp(360px,40vw,480px)',
            background:'#0D0A15',
            border:`1.5px solid ${hov ? B.action : 'rgba(107, 46, 116,0.20)'}`,
            boxShadow: hov ? `0 24px 60px -12px rgba(11, 124, 147,0.35),0 0 0 1px rgba(11, 124, 147,0.15)` : '0 8px 32px -8px rgba(0,0,0,0.25)',
            transition:'all 0.5s cubic-bezier(0.16,1,0.3,1)',
            display:'flex', flexDirection:'column', transform: hov ? 'translateY(-6px)' : 'translateY(0)',
          }}
        >
          <div style={{ position:'relative', height:'clamp(160px,20vw,240px)', flexShrink:0, overflow:'hidden' }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:`url(${article.img})`, backgroundSize:'cover', backgroundPosition:'center', transform:hov?'scale(1.06)':'scale(1)', transition:'transform 0.7s cubic-bezier(0.16,1,0.3,1)', filter:hov?'brightness(0.55)':'brightness(0.45)' }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(13,10,21,0) 30%,rgba(13,10,21,1) 100%)' }}/>
            <div style={{ position:'absolute', top:16, right:16, display:'flex', flexWrap:'wrap', gap:6, justifyContent:'flex-end', maxWidth:'80%' }}>
              <span style={{ fontSize:'clamp(10px,1.2vw,11px)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', color:B.textDark, background:'rgba(255,255,255,0.12)', backdropFilter:'blur(8px)', padding:'4px 10px', borderRadius:6, border:'1px solid rgba(255,255,255,0.15)' }}>{article.cat}</span>
              {i===0 && <span style={{ fontSize:'clamp(10px,1.2vw,11px)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', color:B.white, background:'rgba(11, 124, 147,0.85)', backdropFilter:'blur(8px)', padding:'4px 10px', borderRadius:6, display:'flex', alignItems:'center', gap:4 }}><Star size={9} fill={B.white}/>Featured</span>}
            </div>
          </div>
          <div style={{ padding:'clamp(18px,2.5vw,28px)', display:'flex', flexDirection:'column', flexGrow:1, background:'linear-gradient(to bottom,rgba(13,10,21,1) 0%,rgba(20,12,32,1) 100%)' }}>
            <h3 className="card-project-title" style={{ color:B.textDark, marginBottom:14 }}>{article.title}</h3>
            <p className="card-project-body" style={{ color:B.textDarkMid, marginBottom:20, flexGrow:1 }}>{article.excerpt}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:24 }}>
              {article.tags.map((tag,ti) => <span key={ti} className="tool-tag" style={{ color:B.action, background:'rgba(11, 124, 147,0.12)', border:'1px solid rgba(11, 124, 147,0.25)', padding:'4px 12px', borderRadius:6 }}>{tag}</span>)}
            </div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:20, borderTop:'1px solid rgba(255,255,255,0.07)' }}>
              <span className="cta-link-text" style={{ display:'flex', alignItems:'center', gap:8, color:hov?B.action:B.textDarkMuted, transition:'color 0.3s ease' }}>
                Read Article <ArrowRight size={14} style={{ transform:hov?'translateX(5px)':'translateX(0)', transition:'transform 0.3s ease' }}/>
              </span>
              <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:'clamp(10px,1.2vw,11px)', color:B.textDarkMuted, fontWeight:600 }}>
                <Clock size={11}/>{article.rt} · {article.date}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* Regular card — light glass exactly like Home's light section cards */
function ArticleCard({ article, i }) {
  const [hov, setHov] = useState(false);
  const cat = CATS[article.cat] || {};
  return (
    <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.07, ease:[0.16,1,0.3,1] }} layout>
      <Link to={`/resources/${article.slug}`} style={{ textDecoration:'none', display:'block', height:'100%' }}>
        <div
          onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
          style={{
            background: hov ? 'linear-gradient(135deg,rgba(255,255,255,0.95) 0%,rgba(245, 241, 246,0.85) 100%)' : B.cardBg,
            backdropFilter:'blur(12px)', borderRadius:24,
            border:`2px solid ${hov ? (cat.color||B.action) : B.glassBorder}`,
            boxShadow: hov ? `0 20px 50px -15px ${(cat.color||B.action)}35,0 0 0 1px ${(cat.color||B.action)}20` : B.cardShadow,
            overflow:'hidden', height:'100%', display:'flex', flexDirection:'column',
            transition:'all 0.38s cubic-bezier(0.16,1,0.3,1)',
            transform: hov ? 'translateY(-5px)' : 'translateY(0)',
          }}
        >
          <div style={{ height:3, background:`linear-gradient(90deg,${cat.color||B.action},${(cat.color||B.action)}60)`, opacity:hov?1:0.5, transition:'opacity 0.3s' }}/>
          <div style={{ padding:'clamp(20px,2.8vw,28px) clamp(20px,2.8vw,30px) clamp(18px,2.5vw,24px)', display:'flex', flexDirection:'column', flexGrow:1 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18, flexWrap:'wrap', gap:8 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'5px 12px', borderRadius:99, background:cat.bg, border:`1px solid ${cat.border}`, fontSize:'clamp(10px,1.1vw,11px)', fontWeight:700, letterSpacing:'0.10em', textTransform:'uppercase', color:cat.color }}>
                {cat.icon} {article.cat}
              </div>
              <span style={{ display:'flex', alignItems:'center', gap:5, fontSize:'clamp(11px,1.2vw,12px)', color:B.textMuted, fontWeight:600 }}>
                <Clock size={11} color={B.textMuted}/>{article.rt}
              </span>
            </div>
            <h3 className="card-title" style={{ transition:'color 0.3s', ...(hov && {color:B.primaryDark}) }}>{article.title}</h3>
            <p className="card-body" style={{ marginBottom:20, flexGrow:1 }}>{article.excerpt}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
              {article.tags.map((tag,ti) => <span key={ti} style={{ fontSize:'clamp(10px,1.1vw,11px)', fontWeight:600, padding:'3px 9px', borderRadius:6, background:B.primaryLight, border:`1px solid ${B.primaryBorder}`, color:B.primary, letterSpacing:'0.04em' }}>{tag}</span>)}
            </div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:16, borderTop:`1px solid ${B.primaryBorder}` }}>
              <span style={{ fontSize:'clamp(11px,1.2vw,12px)', color:B.textMuted, fontWeight:600 }}>{article.date}</span>
              <span className="cta-link-text" style={{ display:'flex', alignItems:'center', gap:6, color:hov?(cat.color||B.action):B.primary, transition:'color 0.3s', fontSize:'clamp(11px,1.2vw,13px)' }}>
                Read more <ArrowRight size={12} style={{ transform:hov?'translateX(4px)':'none', transition:'transform 0.3s' }}/>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function FilterChip({ label, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      display:'inline-flex', alignItems:'center', gap:7,
      padding:'clamp(9px,1.4vw,11px) clamp(16px,2.5vw,22px)',
      borderRadius:99, cursor:'pointer', outline:'none', fontFamily:'inherit',
      border:`1.5px solid ${active ? B.primary : B.primaryBorder}`,
      background: active ? B.primary : 'rgba(255,255,255,0.6)',
      color: active ? B.white : B.textMid,
      backdropFilter:'blur(8px)', fontWeight:700,
      fontSize:'clamp(11px,1.2vw,13px)', letterSpacing:'0.04em',
      boxShadow: active ? `0 4px 20px ${B.primaryGlow}` : 'none',
      transition:'all 0.25s cubic-bezier(0.16,1,0.3,1)',
      whiteSpace:'nowrap',
      flexShrink:0,
    }}>
      {active && <span style={{ width:6, height:6, borderRadius:'50%', background:B.action, flexShrink:0 }}/>}
      {label}
    </button>
  );
}

function NewsletterBlock() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
      style={{ padding:'clamp(32px,4.5vw,56px) clamp(28px,4.5vw,64px)', borderRadius:28, background:`linear-gradient(135deg,${B.primaryLight} 0%,${B.actionLight} 100%)`, border:`2px solid ${B.primaryBorder}`, backdropFilter:'blur(12px)', textAlign:'center', boxShadow:B.cardShadow }}>
      <div style={{ width:54, height:54, borderRadius:16, background:B.action, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow:`0 8px 24px rgba(11, 124, 147,0.35)` }}>
        <Mail size={22} color={B.white}/>
      </div>
      <SectionBadge style={{ marginBottom:16 }}>Newsletter</SectionBadge>
      <h3 className="section-h2" style={{ fontSize:'clamp(1.3rem,3vw,2rem)', marginBottom:14 }}>Data Science Insights, Twice a Month</h3>
      <p className="section-lead" style={{ marginBottom:32, maxWidth:520 }}>No fluff. Practical bioinformatics guides, AI strategy breakdowns, and case studies — delivered to your inbox.</p>
      {done ? (
        <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'clamp(12px,2vw,16px) clamp(20px,3.5vw,32px)', borderRadius:12, background:B.actionLight, border:`1px solid ${B.actionBorder}`, color:B.action, fontWeight:700, fontSize:'clamp(13px,1.6vw,15px)' }}>
          <CheckCircle size={18}/>You're on the list!
        </div>
      ) : (
        <div style={{ display:'flex', gap:10, maxWidth:480, margin:'0 auto', flexWrap:'wrap', justifyContent:'center' }}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
            style={{ flex:1, minWidth:200, padding:'clamp(12px,1.8vw,15px) clamp(14px,2vw,18px)', borderRadius:10, border:`1.5px solid ${B.primaryBorder}`, background:'rgba(255,255,255,0.85)', fontSize:'clamp(13px,1.5vw,15px)', color:B.textMain, outline:'none', fontFamily:'Plus Jakarta Sans,sans-serif' }}/>
          <button onClick={() => { if(email) setDone(true); }} className="btn-primary" style={{ padding:'clamp(12px,1.8vw,15px) clamp(18px,3vw,28px)', flexShrink:0 }}>
            <Mail size={14}/>Subscribe
          </button>
        </div>
      )}
      <p style={{ marginTop:16, fontSize:'clamp(11px,1.2vw,12px)', color:B.textMuted, fontWeight:500 }}>No spam. Unsubscribe anytime. ~500 subscribers.</p>
    </motion.div>
  );
}

/* ─── MAIN ──────────────────────────────────────────────────────────────── */
export default function Resources() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery,  setSearchQuery]  = useState('');

  // Filter Logic: Only applies to non-featured articles
  const regularArticles = articles.filter(a => !a.featured);
  const featured = articles.filter(a=>a.featured);

  const filtered = regularArticles.filter(a => {
    const matchCat    = activeFilter==='All' || a.cat===activeFilter;
    const q           = searchQuery.toLowerCase();
    const matchSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.some(t=>t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  // Hide featured if searching, otherwise show pinned at top
  const showFeatured = !searchQuery;

  return (
    <div style={{ background:B.bgLight, minHeight:'100vh', overflowX:'clip', position:'relative' }}>

      {/* ══ 1. HERO ══ */}
      <section style={{ position:'relative', minHeight:'60vh', display:'flex', flexDirection:'column', overflow:'hidden', zIndex:1, paddingTop:'clamp(40px,5vw,50px)', background:B.heroBg }}>
        <HeroGridBg uid="ResHero" opacity={0.30}/>
        <div style={{ position:'absolute', left:0, top:0, width:'45%', height:'100%', background:'linear-gradient(90deg,rgba(127,32,55,0.06) 0%,transparent 80%)', pointerEvents:'none', zIndex:1 }}/>
        <div style={{ position:'absolute', right:0, top:0, width:'45%', height:'100%', background:'linear-gradient(270deg,rgba(127,32,55,0.06) 0%,transparent 80%)', pointerEvents:'none', zIndex:1 }}/>
        <DataParticles count={18}/>

        <div style={{ flex:1, position:'relative', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'clamp(48px,8vw,96px) clamp(16px,4vw,24px) clamp(32px,5vw,72px)', textAlign:'center' }}>
          <motion.div initial="hidden" animate="visible" variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.11 } } }} style={{ maxWidth:1200, width:'100%', margin:'0 auto' }}>

            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge>Knowledge Hub</SectionBadge>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0.05} className="hero-h1" style={{ marginBottom:'clamp(16px,2.5vw,28px)' }}>
              <span style={{ color:B.primaryDark }}>Practical Guides. </span><br className="hero-br"/>
              <span style={{ background:'linear-gradient(90deg,#B02A48 25%,#93213F 75%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Real-World Insights.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.2} className="hero-sub" style={{ color:B.textMid, maxWidth:1200, margin:'0 auto clamp(16px,2.5vw,36px)', letterSpacing:'0.02em' }}>
              In-depth tutorials, case study breakdowns, and AI strategy articles written by practitioners, not content marketers. Free! No login required.
            </motion.p>

            {/* Trust Pills — Infinite Animation */}
            <motion.div variants={fadeUp} custom={0.20} style={{ marginTop:'clamp(24px,4vw,48px)', width:'100%', position:'relative' }}>
              <div style={{ padding:'4px 16px', borderRadius:99, background:'rgba(147, 33, 63,0.08)', color:B.secondary, fontSize:'clamp(10px,1.8vw,16px)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.15em', border:'1px solid rgba(147, 33, 63,0.2)', display:'inline-block', marginBottom:20 }}>
                Free Resources
              </div>
              
              {/* Marquee Wrapper */}
              <div style={{ overflow:'hidden', position:'relative', width:'100%', maskImage:'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <div className="marquee-content">
                  {[...Array(4)].fill().map((_, setIdx) => (
                    <div key={setIdx} style={{ display:'flex', gap:'clamp(12px,2vw,24px)', paddingRight:'clamp(20px,3vw,40px)' }}>
                      {[
                        { icon:<BookOpen size={16}/>, label:`${articles.length} Free Articles`, accent:'#5BB8CC' },
                        { icon:<Users size={16}/>,      label:'500+ Subscribers', accent:'#8FC48A' },
                        { icon:<Globe size={16}/>,      label:'Read in 40+ Countries', accent:'#C0A87A' },
                      ].map((item,i) => (
                        <div key={i} style={{ display:'flex', alignItems:'center', gap:8, padding:'clamp(8px,1.2vw,10px) clamp(12px,2vw,18px)', fontSize:'clamp(12px,1.8vw,18px)', fontWeight:600, color:'rgba(58,32,59,0.8)', background:'rgba(255,255,255,0.5)', borderRadius:8, border:'1px solid rgba(127,32,55,0.1)', whiteSpace:'nowrap' }}>
                          <div style={{ width:22, height:22, borderRadius:5, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', background:`${item.accent}15` }}>
                            {React.cloneElement(item.icon, { size:14, color:item.accent, strokeWidth:2.5 })}
                          </div>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ 2. DARK STRIP — Topics We Cover (Compact 1 Row) ══ */}
      <section style={{ padding:`clamp(32px,4.5vw,52px) 0`, position:'relative', zIndex:1, background:`linear-gradient(135deg,#170F22 0%,#140B20 100%)` }}>
        <DataParticles count={8} dark/>
        <div style={{ ...PX, position:'relative', zIndex:2 }}>
          <div style={{ textAlign:'center', marginBottom:30 }}>
            <SectionBadge dark style={{ color:B.textDarkMuted, marginBottom:12 }}>Topics We Cover</SectionBadge>
            <h2 className="section-h2 dark" style={{ fontSize:'clamp(1.2rem,2.5vw,2rem)' }}>Expertise Areas</h2>
          </div>
          <div className="grid-stats-compact">
            {[
              { val:'9',    suf:'+', lbl:'Free Articles',        color:'#9D4EDD' },
              { val:'500',  suf:'+', lbl:'Newsletter Subscribers',color:'#00BBF9' },
              { val:'40',   suf:'+', lbl:'Countries Reached',     color:'#00F5D4' },
              { val:'7',    suf:'',  lbl:'Topics Covered',        color:'#FF9F1C' },
              { val:'100',  suf:'%', lbl:'Free, No Login',        color:'#C58FD4' },
              { val:'2026', suf:'',  lbl:'Updated Regularly',     color:'#E87A8A' },
            ].map((s,i) => (
              <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.05, ease:[0.16,1,0.3,1] }}
                style={{ background:'rgba(255,255,255,0.02)', backdropFilter:'blur(12px)', border:'1.5px solid rgba(255,255,255,0.08)', borderRadius:16, padding:'clamp(14px,1.5vw,20px) 10px', textAlign:'center', height:'100%' }}>
                <div style={{ fontWeight:800, fontSize:'clamp(1.4rem,3.5vw,2.2rem)', color:B.textDark, marginBottom:4, letterSpacing:'-0.03em' }}>{s.val}<span style={{ fontSize:'0.5em' }}>{s.suf}</span></div>
                <div style={{ fontSize:'clamp(10px,1.1vw,12px)', letterSpacing:'0.10em', textTransform:'uppercase', color:B.textDarkMuted, fontWeight:700, lineHeight:1.2 }}>{s.lbl}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. MAIN LIGHT — Featured + Controls + All Articles ══ */}
      <section style={{ position:'relative', zIndex:1, background:`linear-gradient(180deg,${B.bgLight} 0%,#F2EBF9 50%,#E8E1F0 100%)`, overflow:'clip', padding:0 }}>
        <HeroGridBg uid="ResLight" opacity={0.15}/>
        <DataParticles count={12}/>

        {/* FEATURED ARTICLES (Shown First) */}
        {showFeatured && featured.length>0 && (
          <div style={{ position:'relative', zIndex:2, paddingTop:SECTION_PAD }}>
            <div style={{ ...PX, marginBottom:'clamp(32px,5vw,52px)' }}>
              <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:36 }}>
                <SectionBadge>Editor's Picks</SectionBadge>
                <h2 className="section-h2">Featured Articles</h2>
                <p className="section-lead" style={{ marginTop:12 }}>Start here, our most thorough, most-read pieces.</p>
              </motion.div>
              <div className="grid-projects">
                {featured.map((a,i) => <FeaturedCard key={a.slug} article={a} i={i}/>)}
              </div>
            </div>
          </div>
        )}

        {/* SEARCH + FILTER + GRID */}
        <div style={{ position:'relative', zIndex:2, padding:`${SECTION_PAD} 0` }}>
          <div style={{ ...PX }}>
            
            {/* Controls Section */}
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:48 }}>
              <SectionBadge>{showFeatured ? 'All Articles' : 'Search Results'}</SectionBadge>
              <h2 className="section-h2" style={{ marginBottom:12 }}>{showFeatured ? 'Browse Our Articles' : 'Search Results'}</h2>
              <p className="section-lead" style={{ maxWidth:600, margin:'0 auto 24px' }}>
                {filtered.length} guides across bioinformatics, AI, MLOps, and data strategy.
              </p>

              {/* Search Bar (Moved Here) */}
              <div style={{ display:'flex', justifyContent:'center', marginBottom:32, maxWidth:600, margin:'0 auto 32px' }}>
                <div style={{ position:'relative', width:'100%' }}>
                  <Search size={16} color={B.textMuted} style={{ position:'absolute', left:16, top:'50%', transform:'translateY(-50%)', pointerEvents:'none' }}/>
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search articles, topics, tags…"
                    style={{ width:'100%', padding:'clamp(12px,1.8vw,16px) 18px clamp(12px,1.8vw,16px) 44px', borderRadius:12, border:`1.5px solid ${B.primaryBorder}`, background:'rgba(255,255,255,0.88)', fontSize:'clamp(13px,1.5vw,15px)', color:B.textMain, outline:'none', fontFamily:'Plus Jakarta Sans,sans-serif', boxShadow:'0 4px 16px rgba(107, 46, 116,0.06)' }}
                    onFocus={e => { e.target.style.borderColor=B.action; e.target.style.boxShadow=`0 0 0 3px ${B.actionLight}`; }}
                    onBlur={e  => { e.target.style.borderColor=B.primaryBorder; e.target.style.boxShadow='0 4px 16px rgba(107, 46, 116,0.06)'; }}
                  />
                </div>
              </div>

              {/* Filter Chips — Scrollable Row */}
              <div style={{
                display:'flex',
                overflowX:'auto',
                gap:'clamp(8px,1.5vw,10px)',
                justifyContent:'center',
                padding:'4px 4px',
                whiteSpace:'nowrap',
                scrollbarWidth:'none', /* Firefox */
                msOverflowStyle:'none', /* IE/Edge */
                /* Fade Mask */
                maskImage:'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
                WebkitMaskImage:'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
              }} className="scroll-container-hide">
                {ALL_FILTERS.map(f => <FilterChip key={f} label={f} active={activeFilter===f} onClick={() => setActiveFilter(f)}/>)}
              </div>
            </motion.div>

            {/* Articles Grid */}
            {filtered.length>0 ? (
              <motion.div layout className="grid-3col">
                <AnimatePresence mode="popLayout">
                  {filtered.map((a,i) => <ArticleCard key={a.slug} article={a} i={i}/>)}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div style={{ textAlign:'center', padding:'clamp(48px,8vw,80px) 24px' }}>
                <div style={{ fontSize:48, marginBottom:18 }}>🔍</div>
                <h3 className="section-h2" style={{ fontSize:'clamp(1.1rem,2.5vw,1.6rem)', marginBottom:10 }}>No articles found</h3>
                <p className="section-lead">Try a different filter or search term.</p>
              </div>
            )}

            {/* Newsletter */}
            <div style={{ marginTop:'clamp(48px,7vw,80px)', maxWidth:720, margin:'clamp(48px,7vw,80px) auto 0' }}>
              <NewsletterBlock/>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. FOOTER CTA ══ */}
      <section style={{ padding:`${SECTION_PAD} 0`, paddingTop:'clamp(48px,8vw,100px)', paddingBottom:'clamp(48px,8vw,100px)', position:'relative', overflow:'clip', zIndex:1, background:`linear-gradient(180deg,${B.bgLight} 0%,#E8E1F0 100%)` }}>
        <HeroGridBg uid="ResFooter" opacity={0.15}/>
        <DataParticles count={16}/>
        <div style={{ position:'absolute', top:'20%', left:'10%', width:400, height:400, borderRadius:'50%', background:`radial-gradient(circle,rgba(107, 46, 116,0.10) 0%,transparent 70%)`, pointerEvents:'none' }}/>
        <div style={{ position:'absolute', bottom:'10%', right:'8%', width:300, height:300, borderRadius:'50%', background:`radial-gradient(circle,rgba(11, 124, 147,0.08) 0%,transparent 70%)`, pointerEvents:'none' }}/>
        <div style={{ ...PX, position:'relative', zIndex:2, textAlign:'center' }}>
          <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}>
            <SectionBadge>Ready to Apply This?</SectionBadge>
            <h2 className="section-h2" style={{ color:B.primaryDark, marginBottom:20 }}>
              Reading is Just the Start.<br/>
              <span style={{ background:'linear-gradient(90deg,#B02A48 25%,#93213F 75%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Let's Build Something Real.</span>
            </h2>
            <p className="section-lead" style={{ color:B.textMid, maxWidth:1200, margin:'0 auto clamp(24px,3.5vw,48px)', lineHeight:1.75 }}>
              Book a free 30-minute call and we'll show you how these techniques apply to your data, your industry, and your goals. No pitch. No pressure.
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
        .btn-primary{display:inline-flex;align-items:center;gap:10px;padding:clamp(12px,2vw,18px) clamp(20px,4vw,40px);border-radius:12px;background:#0B7C93;color:#ffffff;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:clamp(0.85rem,1.8vw,1.2rem);letter-spacing:0.10em;text-transform:uppercase;text-decoration:none;border:none;cursor:pointer;transition:opacity 0.2s,transform 0.2s}
        .btn-secondary{display:inline-flex;align-items:center;gap:10px;padding:clamp(10px,1.8vw,16px) clamp(20px,4vw,40px);border-radius:12px;background:transparent;color:#93213F;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:clamp(0.85rem,1.8vw,1.2rem);letter-spacing:0.10em;text-transform:uppercase;text-decoration:none;border:2px solid #93213F;cursor:pointer;transition:background 0.2s,transform 0.2s}
        
        /* Scrollbar Hiding Class */
        .scroll-container-hide::-webkit-scrollbar { display: none; }
        
        /* Grid Layouts */
        .grid-stats-compact{display:grid;grid-template-columns:repeat(6,1fr);gap:clamp(10px,1.5vw,20px)}
        .grid-projects{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(16px,2.5vw,28px)}
        .grid-3col{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(14px,2.2vw,24px)}
        .grid-2col{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(16px,2.5vw,28px)}

        /* Marquee Animation */
        @keyframes wmScrollLeft{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .marquee-content{display:flex;width:max-content;animation:wmScrollLeft 40s linear infinite}
        .marquee-content:hover{animation-play-state:paused}

        @media(max-width:1024px){
          .grid-3col{grid-template-columns:repeat(2,1fr)}
          .grid-projects{grid-template-columns:repeat(2,1fr)}
          .grid-stats-compact{grid-template-columns:repeat(3,1fr)} /* 2 rows on tablet */
        }
        @media(max-width:768px){
          .grid-stats-compact{grid-template-columns:repeat(2,1fr);gap:14px}
          .grid-projects{grid-template-columns:repeat(2,1fr);gap:16px}
          .grid-2col{grid-template-columns:1fr}
          .hero-br{display:none}
        }
        @media(max-width:425px){
          .grid-stats-compact{grid-template-columns:1fr} /* Stacked on mobile */
          .grid-projects{grid-template-columns:1fr}
          .grid-3col{grid-template-columns:1fr}
          .btn-primary,.btn-secondary{width:100%;justify-content:center}
        }
        @keyframes wmDrift{0%,100%{transform:translate(0,0)}33%{transform:translate(14px,-18px)}66%{transform:translate(-10px,12px)}}
      `}</style>
    </div>
  );
}