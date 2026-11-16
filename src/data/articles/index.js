// Resource articles for /resources and /resources/:slug.
// Each article: { slug, cat, title, excerpt, tags, intro, body: [{ h, p?, list?, steps? }], cases?: [caseStudySlug] }
// `minutes` (reading time) is calculated from the text so it never needs maintaining by hand.
import { SOFTWARE_ARTICLES } from './software';
import { AI_ARTICLES } from './ai';
import { DATA_ARTICLES } from './data';
import { HEALTH_ARTICLES } from './health';
import { SOFTWARE_EXTRAS } from './extras-software';
import { AI_EXTRAS } from './extras-ai';
import { DATA_EXTRAS } from './extras-data';
import { HEALTH_EXTRAS } from './extras-health';
import { TERMS } from './extras-terms';
import { TAKEAWAYS } from './extras-takeaways';

// Worked example / checklist / FAQ sections, slotted in before each article's closing "Where to start" block.
const EXTRAS = { ...SOFTWARE_EXTRAS, ...AI_EXTRAS, ...DATA_EXTRAS, ...HEALTH_EXTRAS };
const withExtras = (a) => {
  const extra = [...(EXTRAS[a.slug] || [])];
  if (TERMS[a.slug]) extra.push({ h: 'Key terms in plain language', list: TERMS[a.slug] });
  if (TAKEAWAYS[a.slug]) extra.push({ h: 'Key takeaways', list: TAKEAWAYS[a.slug] });
  if (!extra.length) return a;
  return { ...a, body: [...a.body.slice(0, -1), ...extra, a.body[a.body.length - 1]] };
};

// Shown first on the hub, in this order.
const FEATURED = ['custom-software-project-lifecycle', 'ml-model-to-production', 'revenue-cycle-analytics-explained'];

const wordCount = (a) => {
  const parts = [a.intro];
  a.body.forEach((b) => {
    (b.p || []).forEach((t) => parts.push(t));
    (b.list || []).forEach((t) => parts.push(t));
    (b.steps || []).forEach(([t, d]) => parts.push(t, d));
    (b.faq || []).forEach(([q, ans]) => parts.push(q, ans));
  });
  return parts.join(' ').split(/\s+/).filter(Boolean).length;
};

export const ARTICLES = [...SOFTWARE_ARTICLES, ...AI_ARTICLES, ...DATA_ARTICLES, ...HEALTH_ARTICLES].map(withExtras).map((a) => ({
  ...a,
  featured: FEATURED.includes(a.slug),
  minutes: Math.max(1, Math.round(wordCount(a) / 200)),
}));

export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug);

export const ARTICLE_CATEGORIES = [...new Set(ARTICLES.map((a) => a.cat))];
