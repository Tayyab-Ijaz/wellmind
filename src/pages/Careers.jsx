import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Zap, ArrowRight, Search, Globe, BookOpen, HeartPulse, Home, Code2, Palette, Users2 } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const jobs = [
  { id:1, title:'Senior Data Scientist',  cat:'Engineering', type:'Full-time', loc:'Remote',         tags:['Python','TensorFlow','SQL'],  desc:'Lead predictive modeling initiatives. Work closely with CTO to define data strategies.' },
  { id:2, title:'ML Engineer (Python)',    cat:'Engineering', type:'Full-time', loc:'NY (Hybrid)',    tags:['Python','Docker','AWS'],       desc:'Deploy robust ML pipelines. Focus on MLOps, model deployment, and infrastructure optimization.' },
  { id:3, title:'Product Designer',       cat:'Design',      type:'Contract',  loc:'Remote',         tags:['Figma','UX','Design Systems'], desc:'Design intuitive interfaces for complex AI tools. Must be comfortable with design systems.' },
  { id:4, title:'Project Manager',        cat:'Management',  type:'Full-time', loc:'Remote',         tags:['Scrum','Jira','Agile'],        desc:'Manage agile sprints and client communications for our AI delivery team.' },
  { id:5, title:'AI Research Scientist',  cat:'Engineering', type:'Full-time', loc:'Remote',         tags:['PyTorch','LLMs','Research'],   desc:'Advance our core AI research agenda — publish, patent, and innovate.' },
  { id:6, title:'Enterprise Sales Engr.', cat:'Management',  type:'Full-time', loc:'London (Hybrid)',tags:['B2B','AI','SaaS'],             desc:'Drive revenue by positioning WellMind AI solutions to enterprise clients.' },
];

const perks = [
  { icon:<Globe size={22}/>,     label:'Remote First',         desc:'Work from anywhere in the world.', color:'#22d3ee' },
  { icon:<BookOpen size={22}/>,  label:'Learning Budget',      desc:'$5K annual for courses & conferences.', color:'#60a5fa' },
  { icon:<HeartPulse size={22}/>,label:'Top-Tier Health',      desc:'Full coverage insurance for you & family.', color:'#f472b6' },
  { icon:<Zap size={22}/>,       label:'SOP-Driven Culture',   desc:'No chaos. Just clarity and systems.', color:'#34d399' },
];

const cats = ['All',...new Set(jobs.map(j=>j.cat))];

export default function Careers() {
  useReveal();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = jobs.filter(j =>
    (filter==='All'||j.cat===filter) &&
    (j.title.toLowerCase().includes(search.toLowerCase())||j.tags.some(t=>t.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div style={{background:'var(--clr-bg)',minHeight:'100vh'}}>
      <section className="page-hero grid-dots">
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 70%,rgba(34,211,238,0.07),transparent 65%)',pointerEvents:'none'}}/>
        <div style={{maxWidth:860,margin:'0 auto',padding:'0 20px',position:'relative',zIndex:2}}>
          <div className="section-label">We Are Hiring</div>
          <h1 className="hero-title" style={{color:'#fff',marginBottom:20}}>Build the Future of <span className="gradient-text">AI</span></h1>
          <p style={{color:'var(--clr-muted)',fontSize:'clamp(1rem,2.5vw,1.15rem)',lineHeight:1.75,maxWidth:540,margin:'0 auto'}}>
            Join a team of system-thinkers. We don't just write code; we build ecosystems that last.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section style={{background:'rgba(6,15,30,0.6)',borderBottom:'1px solid rgba(34,211,238,0.08)',padding:'clamp(36px,6vw,64px) 0'}}>
        <div style={{maxWidth:1240,margin:'0 auto',padding:'0 20px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,200px),1fr))',gap:18}}>
            {perks.map((p,i)=>(
              <div key={i} className="glass-card reveal-scale" style={{padding:'clamp(20px,3vw,28px)',textAlign:'center',animationDelay:`${i*0.1}s`}}>
                <div style={{width:48,height:48,borderRadius:12,margin:'0 auto 12px',background:`${p.color}18`,color:p.color,display:'flex',alignItems:'center',justifyContent:'center',border:`1px solid ${p.color}28`}}>
                  {p.icon}
                </div>
                <div style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#fff',marginBottom:6,fontSize:'0.95rem'}}>{p.label}</div>
                <div style={{color:'var(--clr-muted)',fontSize:13,lineHeight:1.55}}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section style={{padding:'clamp(48px,8vw,96px) 0'}}>
        <div style={{maxWidth:1240,margin:'0 auto',padding:'0 20px'}}>
          <div className="reveal" style={{textAlign:'center',marginBottom:40}}>
            <div className="section-label">Current Openings</div>
            <h2 className="section-title" style={{color:'#fff',marginTop:4}}>{filtered.length} Positions Available</h2>
          </div>

          {/* Filters */}
          <div style={{display:'flex',flexWrap:'wrap',gap:12,marginBottom:28,alignItems:'center'}}>
            <div style={{position:'relative',flex:1,minWidth:200}}>
              <Search size={15} style={{position:'absolute',left:14,top:'50%',transform:'translateY(-50%)',color:'var(--clr-muted)'}}/>
              <input className="dark-input" type="text" placeholder="Search roles or skills..." value={search} onChange={e=>setSearch(e.target.value)} style={{paddingLeft:40}}/>
            </div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {cats.map(c=>(
                <button key={c} onClick={()=>setFilter(c)} className={`tab-btn ${filter===c?'active':''}`}>{c}</button>
              ))}
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:14}}>
            {filtered.map((job,i)=>(
              <div key={job.id} className="glass-card reveal" style={{padding:'clamp(18px,3vw,28px)',animationDelay:`${i*0.05}s`}}>
                <div style={{display:'flex',flexWrap:'wrap',gap:16,alignItems:'flex-start',justifyContent:'space-between'}}>
                  <div style={{flex:1,minWidth:200}}>
                    <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:8}}>
                      <span className="badge" style={{background:'rgba(34,211,238,0.1)',color:'var(--clr-cyan)',border:'1px solid rgba(34,211,238,0.2)'}}>{job.cat}</span>
                      <span style={{display:'flex',alignItems:'center',gap:4,fontSize:12,color:'var(--clr-muted)'}}><MapPin size={12}/>{job.loc}</span>
                      <span style={{display:'flex',alignItems:'center',gap:4,fontSize:12,color:'var(--clr-muted)'}}><Briefcase size={12}/>{job.type}</span>
                    </div>
                    <h3 style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#fff',fontSize:'clamp(1rem,2vw,1.15rem)',marginBottom:8}}>{job.title}</h3>
                    <p style={{color:'var(--clr-muted)',fontSize:14,marginBottom:12,lineHeight:1.6}}>{job.desc}</p>
                    <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                      {job.tags.map(t=>(
                        <span key={t} style={{padding:'3px 10px',borderRadius:6,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(34,211,238,0.1)',color:'var(--clr-muted)',fontFamily:'var(--font-mono)',fontSize:11}}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link to="/book-discovery" className="glow-btn" style={{padding:'10px 22px',fontSize:13,flexShrink:0}}>
                    Apply Now <ArrowRight size={13}/>
                  </Link>
                </div>
              </div>
            ))}
            {filtered.length===0 && (
              <div style={{textAlign:'center',padding:'60px 20px',color:'var(--clr-muted)'}}>
                No roles match your search. <Link to="/book-discovery" style={{color:'var(--clr-cyan)'}}>Send us your CV anyway →</Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
