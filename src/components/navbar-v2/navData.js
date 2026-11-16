import { caseStudies } from '../../data/caseStudies';
import { firstSentence } from '../../data/caseStudyText';

export const CONFIG = { closeDelay: 150 };

export const NAV = [
  { id: 'services', label: 'Services', menu: true },
  { id: 'industries', label: 'Industries', menu: true },
  { id: 'case-studies', label: 'Case Studies', menu: true },
  { id: 'resources', label: 'Resources', menu: true },
  { id: 'calculator', label: 'AI Cost Calculator', href: '/ai-cost-calculator', highlight: true },
  { id: 'about', label: 'About', href: '/about' },
];

export const SERVICES = [
  { id: 'ai-ml', ai: true, label: 'AI & Machine Learning', href: '/services-ai-ml', desc: 'Machine learning, language, vision, and generative AI.', img: new URL('../../assets/ai-ml-thumb.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'data-analytics', label: 'Data Science & Analytics', href: '/services-data-analytics', desc: 'Build a trusted data foundation and actionable insights.', img: new URL('../../assets/data-science-service.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'ai-software', ai: true, label: 'AI-Powered Software', href: '/services-ai-software', desc: 'Custom software products with intelligent features.', img: new URL('../../assets/ai-software-square.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'automation', label: 'Automation & Workflows', href: '/services-automation', desc: 'Connect systems and streamline repeatable workflows.', img: new URL('../../assets/workflows-square.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'health-ai', label: 'Health AI & Biomedical Data Science', href: '/services-health-ai', desc: 'Data science and AI for biological and clinical research.', img: new URL('../../assets/health-ai-square.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'ui-ux', label: 'UI/UX & Digital Design', href: '/services-ui-ux', desc: 'Accessible digital experiences for people and their work.', img: new URL('../../assets/ui-square.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
];

export const INDUSTRIES = [
  { id: 'financial', label: 'Financial Services', href: '/industry-financial-service', desc: 'Risk, fraud, and forecasting.', img: new URL('../../assets/financial-square.webp', import.meta.url).href },
  { id: 'healthcare', label: 'Healthcare & Biotech', href: '/industry-healthcare', desc: 'Claims, clinical, and lab data.', img: new URL('../../assets/healthcare.webp', import.meta.url).href },
  { id: 'retail', label: 'Retail & E-Commerce', href: '/industry-retail-ecommerce', desc: 'Demand, churn, and pricing.', img: new URL('../../assets/retail.webp', import.meta.url).href },
  { id: 'education', label: 'Education & EdTech', href: '/industry-education', desc: 'Learner insight at scale.', img: new URL('../../assets/edu-thumb.webp', import.meta.url).href },
];

// Resources menu: one row per topic. `art` drives the generated cover shown in the menu (see ArticleCover.jsx).
export const RESOURCES = [
  { id: 'all', label: 'All resources', href: '/resources', desc: 'Every guide in one place.', art: { kind: 'grid' } },
  { id: 'software', label: 'Software Engineering', href: '/resources?cat=Software%20Engineering', desc: 'How projects run, build or buy, staffing.', art: { cat: 'Software Engineering', kind: 'flow' } },
  { id: 'ai', label: 'AI & Machine Learning', href: '/resources?cat=AI%20%26%20Machine%20Learning', desc: 'Readiness, RAG, agents and MLOps.', art: { cat: 'AI & Machine Learning', kind: 'loop' } },
  { id: 'data', label: 'Data & Cloud', href: '/resources?cat=Data%20%26%20Cloud', desc: 'Pipelines, data quality and cloud setup.', art: { cat: 'Data & Cloud', kind: 'layers' } },
  { id: 'healthcare', label: 'Healthcare AI', href: '/resources?cat=Healthcare%20AI', desc: 'Revenue cycle, fraud, privacy, explainability.', art: { cat: 'Healthcare AI', kind: 'bars' } },
  { id: 'biomedical', label: 'Biomedical Data Science', href: '/resources?cat=Biomedical%20Data%20Science', desc: 'RNA-seq and research pipelines.', art: { cat: 'Biomedical Data Science', kind: 'funnel' } },
];

// Every case study, derived from the single source of truth so the menu counts always match /case-studies.
export const PROJECTS = caseStudies.map((cs) => ({
  id: cs.slug,
  title: cs.title,
  summary: firstSentence(cs.summary, 130),
  services: [cs.service],
  industries: [cs.industry],
  tags: [cs.serviceLabel, cs.industryLabel],
  href: `/case-studies/${cs.slug}`,
  featured: !!cs.featured,
}));
export const CS_MENU_LIMIT = 3;   // cards shown in the menu panel (the filter counts still cover every case study)

export const PAGES = [
  { id: 'calc', label: 'AI Cost Calculator', href: '/ai-cost-calculator' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'book', label: 'Book a Call', href: '/book-discovery' },
  { id: 'all-cs', label: 'All case studies', href: '/case-studies' },
];

export const SEARCH_INDEX = [
  ...SERVICES.map((s) => ({ type: 'Services', label: s.label, href: s.href })),
  ...INDUSTRIES.map((s) => ({ type: 'Industries', label: s.label, href: s.href })),
  ...PROJECTS.map((p) => ({ type: 'Case studies', label: p.title, href: p.href, keywords: p.tags.join(' ') + ' ' + p.summary })),
  ...RESOURCES.map((s) => ({ type: 'Resources', label: s.label, href: s.href })),
  ...PAGES.map((s) => ({ type: 'Pages', label: s.label, href: s.href })),
];

export const EMPTY_FILTER = { service: null, industry: null };
export const matches = (p, f) =>
  (!f.service || p.services.includes(f.service)) && (!f.industry || p.industries.includes(f.industry));
