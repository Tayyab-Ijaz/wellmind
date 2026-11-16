/**
 * Article.jsx — WellMind Data Solutions  /resources/:slug
 * One resource article: what it is, why it matters, how it works, common mistakes, where to start.
 * Content lives in src/data/articles/*.js.
 */
import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Zap } from 'lucide-react';
import { PX } from '../theme';
import { useSeo, SITE_NAME } from '../seo';
import { ARTICLES, getArticle } from '../data/articles';
import { caseStudies } from '../data/caseStudies';
import ArticleCover from '../components/ArticleCover';
import ArticleDiagram from '../components/ArticleDiagram';

const CSS = `
.ar-wide{max-width:1120px;margin:0 auto;padding:0 clamp(16px,4vw,24px)}
.ar-hero-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(24px,4vw,56px);align-items:center}
.ar-cover{position:relative;aspect-ratio:8/5;border-radius:24px;overflow:hidden;border:1px solid rgba(0,0,0,.14);box-shadow:0 30px 60px -28px rgba(0,0,0,.45)}
.ar-figwrap{padding-top:clamp(32px,4.5vw,56px)}
.ar-fig{max-width:1040px;margin:0 auto}
@media (max-width:900px){.ar-hero-grid{grid-template-columns:minmax(0,1fr)}.ar-cover{order:-1;aspect-ratio:16/8}}
.ar-page{background:#f4f4f4;color:#111;font-family:var(--font-main);overflow-x:clip}
.ar-hero{padding:clamp(110px,12vw,160px) 0 clamp(32px,4vw,56px);background:linear-gradient(180deg,#ececec 0%,#f4f4f4 100%);border-bottom:1px solid rgba(0,0,0,.08)}
.ar-wrap{max-width:820px;margin:0 auto;padding:0 clamp(16px,4vw,24px)}
.ar-back{display:inline-flex;align-items:center;gap:8px;margin-bottom:clamp(20px,3vw,32px);font-size:var(--fs-small);font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#555;text-decoration:none;transition:color .2s}
.ar-back:hover{color:#000}
.ar-cat{display:inline-block;margin-bottom:14px;padding:5px 12px;border-radius:99px;border:1px solid rgba(0,0,0,.2);font-size:var(--fs-label);font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#333}
.ar-hero h1{margin:0 0 16px;font-size:var(--fs-section-h2);font-weight:800;line-height:1.12;letter-spacing:-.025em;color:#0b0b0b;text-align:left}
.ar-intro{margin:0 0 20px;font-size:var(--fs-card-title);line-height:1.7;color:#444;text-align:left}
.ar-meta{display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;font-size:var(--fs-small);color:#666}
.ar-meta span{display:inline-flex;align-items:center;gap:6px}
.ar-tags{display:flex;flex-wrap:wrap;gap:8px}
.ar-tags i{font-style:normal;padding:3px 10px;border-radius:6px;background:#fff;border:1px solid rgba(0,0,0,.12);font-size:var(--fs-label);font-weight:600;color:#444}
.ar-body{padding:clamp(32px,5vw,64px) 0}
.ar-body h2{margin:clamp(28px,4vw,44px) 0 12px;font-size:var(--fs-h3);font-weight:800;letter-spacing:-.015em;color:#0b0b0b;text-align:left}
.ar-body h2:first-child{margin-top:0}
.ar-body p{margin:0 0 14px;font-size:var(--fs-card-title);line-height:1.8;color:#2f2f2f;text-align:left}
.ar-body ul{margin:0 0 14px;padding-left:1.25em;list-style:disc}
.ar-body li{margin:0 0 8px;font-size:var(--fs-card-title);line-height:1.7;color:#2f2f2f;text-align:left}
.ar-steps{list-style:none;margin:0 0 14px;padding:0;counter-reset:ar}
.ar-steps li{position:relative;margin:0 0 12px;padding:16px 18px 16px 64px;border-radius:16px;background:#fff;border:1px solid rgba(0,0,0,.09);counter-increment:ar}
.ar-steps li::before{content:counter(ar);position:absolute;left:18px;top:16px;width:32px;height:32px;border-radius:50%;background:#0b0b0b;color:#fff;font:700 14px/32px 'Space Grotesk',sans-serif;text-align:center}
.ar-steps b{display:block;margin-bottom:4px;font-size:var(--fs-card-title);color:#0b0b0b}
.ar-steps span{display:block;font-size:var(--fs-card-body);line-height:1.7;color:#444}
.ar-faq{margin:0 0 6px;padding:18px 0;border-top:1px solid rgba(0,0,0,.1)}
.ar-faq h3{margin:0 0 6px;font-size:var(--fs-card-title);font-weight:700;color:#0b0b0b;text-align:left}
.ar-faq p{margin:0 !important;font-size:var(--fs-card-body) !important;line-height:1.75 !important;color:#444 !important}
.ar-cases{margin-top:clamp(28px,4vw,44px);padding:clamp(20px,3vw,28px);border-radius:20px;background:#fff;border:1px solid rgba(0,0,0,.1)}
.ar-cases h2{margin:0 0 12px !important;font-size:var(--fs-card-title) !important}
.ar-cases a{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid rgba(0,0,0,.08);font-size:var(--fs-card-body);font-weight:600;color:#0b0b0b;text-decoration:none}
.ar-cases a:hover{text-decoration:underline;text-underline-offset:3px}
.ar-cta{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px;margin-top:clamp(32px,5vw,56px);padding:clamp(24px,4vw,40px);border-radius:24px;background:#0b0b0b;color:#fff}
.ar-cta h2{margin:0 0 8px !important;font-size:var(--fs-h3) !important;color:#fff !important}
.ar-cta p{margin:0 !important;max-width:520px;font-size:var(--fs-card-body) !important;color:rgba(255,255,255,.72) !important}
.ar-btn{display:inline-flex;align-items:center;gap:9px;padding:14px 24px;border-radius:12px;background:#fff;color:#000;font-size:var(--fs-small);font-weight:700;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:background .2s,transform .2s}
.ar-btn:hover{background:#d9d9d9;transform:translateY(-2px)}
.ar-more{padding:clamp(32px,5vw,64px) 0 clamp(48px,7vw,96px);background:#ececec}
.ar-more-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:14px;max-width:1100px;margin:0 auto}
.ar-more h2{max-width:1100px;margin:0 auto 20px;font-size:var(--fs-h3);font-weight:800;color:#0b0b0b;text-align:left}
.ar-more a{display:block;padding:20px;border-radius:18px;background:#fff;border:1px solid rgba(0,0,0,.1);text-decoration:none;color:#0b0b0b;transition:transform .25s,border-color .25s}
.ar-more a:hover{transform:translateY(-4px);border-color:rgba(0,0,0,.35)}
.ar-more small{display:block;margin-bottom:8px;font-size:var(--fs-label);font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#666}
.ar-more b{display:block;font-size:var(--fs-card-body);line-height:1.4}
@media (max-width:560px){.ar-steps li{padding:14px 14px 14px 56px}.ar-steps li::before{left:14px;top:14px}}
`;

export default function Article() {
  const { slug } = useParams();
  const a = getArticle(slug);

  useSeo(a ? { title: `${a.title} | ${SITE_NAME}`, description: a.excerpt, path: `/resources/${a.slug}` } : null);

  if (!a) return <Navigate to="/resources" replace />;

  const cases = (a.cases || []).map((s) => caseStudies.find((c) => c.slug === s)).filter(Boolean);
  // Same category first, then fill with the rest, never the current article.
  const related = [...ARTICLES.filter((x) => x.slug !== a.slug && x.cat === a.cat), ...ARTICLES.filter((x) => x.slug !== a.slug && x.cat !== a.cat)].slice(0, 3);

  return (
    <div className="ar-page">
      <style>{CSS}</style>

      <header className="ar-hero">
        <div className="ar-wide">
          <Link to="/resources" className="ar-back"><ArrowLeft size={15} /> All resources</Link>
          <div className="ar-hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
              <span className="ar-cat">{a.cat}</span>
              <h1>{a.title}</h1>
              <p className="ar-intro">{a.intro}</p>
              <div className="ar-meta">
                <span><Clock size={14} /> {a.minutes} min read</span>
                <span className="ar-tags">{a.tags.map((t) => <i key={t}>{t}</i>)}</span>
              </div>
            </motion.div>
            <motion.div className="ar-cover" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}>
              <ArticleCover cat={a.cat} kind={a.cover} seed={a.slug} />
            </motion.div>
          </div>
        </div>
      </header>

      {a.diagram && (
        <div className="ar-wide ar-figwrap">
          <div className="ar-fig"><ArticleDiagram diagram={a.diagram} /></div>
        </div>
      )}

      <article className="ar-body">
        <div className="ar-wrap">
          {a.body.map((b) => (
            <section key={b.h}>
              <h2>{b.h}</h2>
              {(b.p || []).map((t, i) => <p key={i}>{t}</p>)}
              {b.list && <ul>{b.list.map((t, i) => <li key={i}>{t}</li>)}</ul>}
              {b.faq && b.faq.map(([q, ans]) => <div className="ar-faq" key={q}><h3>{q}</h3><p>{ans}</p></div>)}
              {b.steps && (
                <ol className="ar-steps">
                  {b.steps.map(([title, text]) => <li key={title}><b>{title}</b><span>{text}</span></li>)}
                </ol>
              )}
            </section>
          ))}

          {cases.length > 0 && (
            <aside className="ar-cases">
              <h2>See it in practice</h2>
              {cases.map((c) => (
                <Link key={c.slug} to={`/case-studies/${c.slug}`}>{c.title} <ArrowRight size={16} /></Link>
              ))}
            </aside>
          )}

          <div className="ar-cta">
            <div>
              <h2>Want to apply this to your own project?</h2>
              <p>Book a free call and tell us what you are working on. We will give you an honest view of what it would take.</p>
            </div>
            <Link to="/book-discovery" className="ar-btn"><Zap size={16} /> Book a discovery call</Link>
          </div>
        </div>
      </article>

      <section className="ar-more">
        <div style={PX}>
          <h2>Keep reading</h2>
          <div className="ar-more-grid">
            {related.map((r) => (
              <Link key={r.slug} to={`/resources/${r.slug}`}><small>{r.cat}</small><b>{r.title}</b></Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
