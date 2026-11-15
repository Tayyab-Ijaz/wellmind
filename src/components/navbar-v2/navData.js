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
  { id: 'ai-ml', ai: true, label: 'AI & Machine Learning', href: '/services-ai-ml', desc: 'Machine learning, language, vision, and generative AI.', img: new URL('../../assets/ai-ml-service.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'data-analytics', label: 'Data Science & Analytics', href: '/services-data-analytics', desc: 'Build a trusted data foundation and actionable insights.', img: new URL('../../assets/data-science-service.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'ai-software', ai: true, label: 'AI-Powered Software', href: '/services-ai-software', desc: 'Custom software products with intelligent features.', img: new URL('../../assets/ai-software-square.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'automation', label: 'Automation & Workflows', href: '/services-automation', desc: 'Connect systems and streamline repeatable workflows.', img: new URL('../../assets/workflows-square.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'bioinformatics', label: 'Bioinformatics & Health AI', href: '/services-bioinformatics', desc: 'Data science and AI for biological and clinical research.', img: new URL('../../assets/bioinformatics-square.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
  { id: 'ui-ux', label: 'UI/UX & Digital Design', href: '/services-ui-ux', desc: 'Accessible digital experiences for people and their work.', img: new URL('../../assets/ui-square.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
];

export const INDUSTRIES = [
  { id: 'financial', label: 'Financial Services', href: '/industry-financial-service', desc: 'Risk, fraud, and forecasting.', img: new URL('../../assets/financial-square.webp', import.meta.url).href },
  { id: 'healthcare', label: 'Healthcare & Biotech', href: '/industry-healthcare', desc: 'Claims, clinical, and lab data.', img: new URL('../../assets/healthcare.webp', import.meta.url).href },
  { id: 'retail', label: 'Retail & E-Commerce', href: '/industry-retail-ecommerce', desc: 'Demand, churn, and pricing.', img: new URL('../../assets/retail.webp', import.meta.url).href },
  { id: 'manufacturing', label: 'Manufacturing', href: '/industry-manufacturing', desc: 'Quality and throughput on the line.', img: new URL('../../assets/manufacturing.webp', import.meta.url).href },
  { id: 'agriculture', label: 'Agriculture & AgriTech', href: '/industry-agriculture', desc: 'Yield and field monitoring.', img: new URL('../../assets/agriculture.webp', import.meta.url).href },
  { id: 'education', label: 'Education & EdTech', href: '/industry-education', desc: 'Learner insight at scale.', img: new URL('../../assets/edu.webp', import.meta.url).href },
];

export const RESOURCES = [
  { id: 'all-resources', label: 'All Resources', href: '/resources', desc: 'Explore articles, guides, and resources.', img: new URL('../../assets/resources-hero.webp', import.meta.url).href, imgStyle: { objectFit: 'cover', objectPosition: 'center' } },
];

export const PROJECTS = [
  {
    id: 'ar-recovery',
    title: 'AR Prioritization & Underpayment Recovery Engine',
    summary: 'LightGBM classifier + live dashboard flagging underpaid Medicare claims from public CMS data.',
    services: ['data-analytics'],
    industries: ['healthcare'],
    tags: ['Data Analytics', 'Healthcare'],
    href: '/case-studies/ar-prioritization-underpayment-recovery',
  },
  {
    id: 'telecom-churn',
    title: 'Telecom Customer Churn Prediction',
    summary: 'Random Forest churn model with SHAP explainability that surfaces the customers most at risk of leaving.',
    services: ['ai-ml'],
    industries: ['retail'],
    tags: ['AI & Machine Learning', 'Retail'],
    href: '/case-studies/telecom-churn-prediction',
  },
  {
    id: 'fraud-detection',
    title: 'Healthcare Fraud Detection System',
    summary: 'Peer-benchmarking, anomaly detection, and OIG exclusion-list matching across public Medicare provider data.',
    services: ['ai-ml'],
    industries: ['healthcare'],
    tags: ['AI & Machine Learning', 'Healthcare'],
    href: '/case-studies/healthcare-fraud-detection-billing',
  },
];

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
