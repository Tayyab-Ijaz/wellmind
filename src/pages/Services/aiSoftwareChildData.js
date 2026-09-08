/**
 * aiSoftwareChildData.js — WellMind Data Solutions
 * Central data store for all AI-Powered Software child service pages.
 * Consumed by AiSoftwareChildPage.jsx via URL params.
 *
 * Routes (from sub_services.jsx):
 *   Product Development:   saas | prototyping | mvp | scaling
 *   Integration & APIs:    api | integrations | microservices | event-driven
 *   AI Feature Engineering:ai-features | recommendations | search | personalisation
 *   Infrastructure:        architecture | cloud | devops | security
 */

// ─── Brand color shortcuts ────────────────────────────────────────────────────
const COLORS = {
  action:    '#0B7C93',   // teal
  primary:   '#633068',   // purple
  accent:    '#B02A48',   // crimson
  secondary: '#1B6B3A',   // green (AI Software page accent)
  gold:      '#FF9F1C',
  cyan:      '#00BBF9',
  purple:    '#4A2B5F',   // primaryMid / AC from parent page
};

// ─── CHILD SERVICES DATA ──────────────────────────────────────────────────────
export const AI_SOFTWARE_CHILDREN = {

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 1 — PRODUCT DEVELOPMENT
  // ══════════════════════════════════════════════════════════════════════════

  // ── 1. SaaS Product Dev ───────────────────────────────────────────────────
  'saas': {
    id:          'saas',
    title:       'SaaS Product Development',
    tagline:     'From idea to paying customers — AI built into the core.',
    badge:       'Product Development',
    accentColor: COLORS.secondary,
    heroDesc:    'We build SaaS products that ship fast and scale reliably. Multi-tenancy, subscription billing, role-based access, and AI capabilities designed as product features — not afterthoughts. From database schema to deployment pipeline, we own the full build so you can focus on selling.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $9,000'],

    archLayers: [
      { label: 'React Frontend',    color: COLORS.accent,    icons: ['React', 'Next.js', 'Tailwind'] },
      { label: 'AI Feature Layer',  color: COLORS.action,    icons: ['OpenAI', 'HuggingFace'] },
      { label: 'SaaS API Backend',  color: COLORS.secondary, icons: ['FastAPI', 'Stripe', 'Auth'] },
      { label: 'Multi-tenant DB',   color: COLORS.purple,    icons: ['PostgreSQL', 'Redis'] },
    ],

    stats: [
      { target: 30,  suffix: '+', label: 'SaaS Products Shipped',  iconName: 'Rocket',     color: COLORS.secondary },
      { target: 10,  suffix: 'x', label: 'Faster to Market',       iconName: 'Zap',        color: COLORS.gold      },
      { target: 99,  suffix: '%', label: 'Uptime Delivered',       iconName: 'Activity',   color: COLORS.cyan      },
      { target: 100, suffix: '%', label: 'Code Ownership',         iconName: 'ShieldCheck', color: COLORS.action   },
    ],

    features: [
      { iconName: 'Boxes',      title: 'Multi-tenant Architecture',  color: COLORS.secondary, desc: 'Isolated tenant data, configurable feature flags, and billing plans — designed correctly from day one so you never have to re-platform.' },
      { iconName: 'Brain',      title: 'AI Feature Integration',     color: COLORS.action,    desc: 'LLM-powered features, recommendation engines, and predictive capabilities embedded as first-class product features, not bolt-ons.' },
      { iconName: 'Code2',      title: 'Full-Stack Build',           color: COLORS.accent,    desc: 'React frontend, Python or Node backend, PostgreSQL database — or we integrate into your existing stack at any layer.' },
      { iconName: 'Lock',       title: 'Auth & Subscription Billing',color: COLORS.purple,    desc: 'OAuth, SSO, RBAC, and Stripe subscription flows built to production standard — including usage-based billing and upgrade/downgrade logic.' },
      { iconName: 'Rocket',     title: 'CI/CD & Deployment',        color: COLORS.gold,      desc: 'GitHub Actions pipelines, environment configs, and a deployed staging environment before production — so you can test before you ship.' },
      { iconName: 'Activity',   title: 'Product Analytics',         color: COLORS.cyan,      desc: 'Event tracking, funnel analysis, and a feature-adoption dashboard built in from the start — not added later when you need the data.' },
    ],

    process: [
      { step: '01', title: 'Product Scoping',       desc: 'User stories, data model, API spec, and architecture doc agreed before build starts. We define what\'s in scope — and what isn\'t.' },
      { step: '02', title: 'Sprint Build',           desc: 'Two-week sprint cycles with working software demos. You review real features, not slide decks.' },
      { step: '03', title: 'AI Integration',         desc: 'AI features built and validated against real product data — with fallback logic for when models degrade or APIs are unavailable.' },
      { step: '04', title: 'Launch & Handoff',       desc: 'Production deployment, CI/CD live, monitoring configured, and full codebase handed to your repo with 30 days of post-launch support.' },
    ],

    deliverables: [
      'Full codebase in your repository',
      'System architecture and ERD documentation',
      'Dockerised deployment with environment configs',
      'CI/CD pipeline (GitHub Actions or equivalent)',
      'Auth + billing integration',
      'Monitoring dashboard + alerting',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'React',       color: COLORS.secondary },
      { label: 'Next.js',     color: COLORS.action    },
      { label: 'FastAPI',     color: COLORS.accent    },
      { label: 'PostgreSQL',  color: COLORS.purple    },
      { label: 'Stripe',      color: COLORS.gold      },
      { label: 'Docker',      color: COLORS.cyan      },
      { label: 'AWS / GCP',   color: COLORS.secondary },
      { label: 'GitHub CI',   color: COLORS.action    },
    ],

    tiers: [
      { name: 'MVP',            price: 'From $9,000',  featured: false,
        desc:     'Core product with one AI feature, auth, and deployment.',
        features: ['Core product build', 'One AI integration', 'Auth + deployment', '6–8 week delivery'] },
      { name: 'Full SaaS',      price: 'From $18,000', featured: true,
        desc:     'Full SaaS with billing, multi-tenancy, AI features, and analytics.',
        features: ['Multi-tenant architecture', 'Stripe billing', 'Multiple AI features', 'Product analytics', '30-day support'] },
      { name: 'Enterprise SaaS',price: 'Custom',       featured: false,
        desc:     'Complex SaaS with SSO, compliance, and ongoing engineering support.',
        features: ['SSO / SAML', 'HIPAA / SOC 2 readiness', 'Custom integrations', 'Ongoing retainer option'] },
    ],
  },

  // ── 2. Rapid Prototyping ──────────────────────────────────────────────────
  'prototyping': {
    id:          'prototyping',
    title:       'Rapid Prototyping',
    tagline:     'A working demo in weeks — not months.',
    badge:       'Product Development',
    accentColor: COLORS.action,
    heroDesc:    'The fastest way to validate an AI product idea is to build a real one and put it in front of users. We design and build functional prototypes — connected to real APIs, running real models — in 2–3 weeks. You get something to demo to investors, test with customers, and use to raise funding or internal approval.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $3,500'],

    archLayers: [
      { label: 'UI / Demo Layer',   color: COLORS.accent,    icons: ['React', 'Vite', 'Tailwind'] },
      { label: 'AI / LLM Layer',    color: COLORS.action,    icons: ['OpenAI', 'Anthropic'] },
      { label: 'Prototype API',     color: COLORS.secondary, icons: ['FastAPI', 'Python'] },
      { label: 'Storage',           color: COLORS.purple,    icons: ['SQLite', 'Supabase'] },
    ],

    stats: [
      { target: 2,   suffix: 'wk', label: 'Avg Delivery Time',     iconName: 'Zap',        color: COLORS.action   },
      { target: 50,  suffix: '+',  label: 'Prototypes Shipped',    iconName: 'Rocket',     color: COLORS.secondary },
      { target: 3,   suffix: 'x',  label: 'Faster to Demo-Ready', iconName: 'Activity',   color: COLORS.gold     },
      { target: 100, suffix: '%',  label: 'Code Ownership',        iconName: 'ShieldCheck',color: COLORS.cyan     },
    ],

    features: [
      { iconName: 'Zap',       title: 'Two-Week Build Cycle',       color: COLORS.action,    desc: 'Scope defined on day one, prototype demo-ready by end of week two. No scope creep — what\'s agreed is what gets built.' },
      { iconName: 'Brain',     title: 'Real AI Integration',        color: COLORS.secondary, desc: 'Not mocked — connected to real LLMs, real APIs, real data. Investors and customers see actual intelligence, not a slide deck.' },
      { iconName: 'Code2',     title: 'Production-Path Codebase',   color: COLORS.accent,    desc: 'Prototype code written to be extended into production — not thrown away. Clean architecture that scales when you\'re ready to build properly.' },
      { iconName: 'Globe',     title: 'Deployed & Shareable',       color: COLORS.purple,    desc: 'Hosted and accessible via URL. No "works on my machine" — your prototype is live and shareable with anyone you choose.' },
      { iconName: 'Layers',    title: 'Interactive UI',             color: COLORS.gold,      desc: 'A real interface, not a wireframe. Clickable, responsive, and usable enough to put in front of real users for feedback.' },
      { iconName: 'GitBranch', title: 'Iteration Support',          color: COLORS.cyan,      desc: 'One round of feedback-driven revisions included. We incorporate user or investor feedback and re-deploy within days.' },
    ],

    process: [
      { step: '01', title: 'Scope & Design',      desc: 'One-day scoping session. We define the three core AI interactions, UI flows, and tech stack. Written brief confirmed before build starts.' },
      { step: '02', title: 'Build (Week 1)',       desc: 'Backend, AI integrations, and data layer complete. Internal review on day five.' },
      { step: '03', title: 'UI & Polish (Week 2)', desc: 'Frontend built, integrated, and deployed. User-facing flows tested end-to-end.' },
      { step: '04', title: 'Demo & Handoff',       desc: 'Walkthrough session, codebase in your repo, and a deployment guide. Revision round included.' },
    ],

    deliverables: [
      'Working prototype (live URL)',
      'Full codebase in your repository',
      'Deployment guide',
      'One feedback-driven revision round',
      'Architecture notes for production path',
      'Two-week delivery guarantee',
    ],

    techStack: [
      { label: 'React',       color: COLORS.action   },
      { label: 'Vite',        color: COLORS.secondary },
      { label: 'FastAPI',     color: COLORS.accent   },
      { label: 'OpenAI API',  color: COLORS.purple   },
      { label: 'Supabase',    color: COLORS.gold     },
      { label: 'Vercel',      color: COLORS.cyan     },
      { label: 'Python',      color: COLORS.action   },
      { label: 'Tailwind',    color: COLORS.secondary },
    ],

    tiers: [
      { name: 'Demo Prototype',   price: 'From $3,500', featured: false,
        desc:     'Core AI interaction, deployed, demo-ready in two weeks.',
        features: ['Single AI feature', 'Basic UI', 'Deployed URL', '2 week delivery'] },
      { name: 'Investor Prototype',price: 'From $6,500', featured: true,
        desc:     'Polished multi-feature prototype with real AI and user flows.',
        features: ['Multiple AI features', 'Polished UI', 'Auth + data persistence', 'Revision round', '30-day access'] },
      { name: 'Production Handoff',price: 'Custom',      featured: false,
        desc:     'Prototype built to production standards — ready to scale immediately.',
        features: ['Production architecture', 'Test coverage', 'CI/CD setup', 'Full handoff package'] },
    ],
  },

  // ── 3. MVP Engineering ────────────────────────────────────────────────────
  'mvp': {
    id:          'mvp',
    title:       'MVP Engineering',
    tagline:     'Ship to real users. Learn fast. Build the right thing.',
    badge:       'Product Development',
    accentColor: COLORS.accent,
    heroDesc:    'An MVP is not a prototype and not a full product — it\'s the minimum set of features that lets real users tell you what to build next. We design MVPs with discipline: no scope creep, no gold-plating, no features that can\'t be validated. You get something real in the market within 6–8 weeks.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $6,000'],

    archLayers: [
      { label: 'User Interface',    color: COLORS.accent,    icons: ['React', 'Next.js'] },
      { label: 'AI / ML Layer',     color: COLORS.action,    icons: ['OpenAI', 'PyTorch'] },
      { label: 'MVP API',           color: COLORS.secondary, icons: ['FastAPI', 'Django'] },
      { label: 'Database',          color: COLORS.purple,    icons: ['PostgreSQL', 'Supabase'] },
    ],

    stats: [
      { target: 6,   suffix: 'wk', label: 'Avg MVP Delivery',    iconName: 'Zap',         color: COLORS.accent   },
      { target: 40,  suffix: '+',  label: 'MVPs Launched',       iconName: 'Rocket',      color: COLORS.secondary },
      { target: 80,  suffix: '%',  label: 'Reach Validation',    iconName: 'Activity',    color: COLORS.gold     },
      { target: 100, suffix: '%',  label: 'Code Ownership',      iconName: 'ShieldCheck', color: COLORS.action   },
    ],

    features: [
      { iconName: 'Brain',      title: 'AI-First Feature Design',   color: COLORS.accent,    desc: 'AI capabilities defined as product bets — each with a validation hypothesis so you know what success looks like before you build.' },
      { iconName: 'Code2',      title: 'Disciplined Scope',         color: COLORS.action,    desc: 'We push back on features that can\'t be validated in the MVP window. What makes it in is what matters for learning.' },
      { iconName: 'Rocket',     title: 'Production-Ready Launch',   color: COLORS.secondary, desc: 'Auth, error handling, basic monitoring — the MVP is built to run in production, not just demo mode.' },
      { iconName: 'Users',      title: 'User Feedback Hooks',       color: COLORS.purple,    desc: 'In-product feedback widgets, event tracking, and session data collection built in from day one for fast iteration.' },
      { iconName: 'GitBranch',  title: 'Extensible Architecture',   color: COLORS.gold,      desc: 'Code structure designed for the features you\'ll add in the next quarter — not re-architected every sprint.' },
      { iconName: 'Server',     title: 'Deployment + Monitoring',   color: COLORS.cyan,      desc: 'Deployed to your cloud with CI/CD, uptime monitoring, and error alerting. You know when something breaks before users do.' },
    ],

    process: [
      { step: '01', title: 'MVP Definition Workshop', desc: 'One session to define the core user journey, the AI bets, and the three metrics that tell us if the MVP works.' },
      { step: '02', title: 'Sprint 1–2: Foundation',  desc: 'Backend, database, auth, and AI integrations built and internally tested.' },
      { step: '03', title: 'Sprint 3–4: UI & Polish', desc: 'Frontend built, user flows tested end-to-end, and deployed to staging for your review.' },
      { step: '04', title: 'Launch & Measure',        desc: 'Production deployment, analytics live, and a 30-day check-in to review early user data with you.' },
    ],

    deliverables: [
      'Full MVP codebase in your repository',
      'System architecture documentation',
      'CI/CD pipeline + staging environment',
      'In-product analytics + feedback hooks',
      'User documentation',
      'Monitoring + alerting configuration',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'React',       color: COLORS.accent   },
      { label: 'FastAPI',     color: COLORS.action   },
      { label: 'PostgreSQL',  color: COLORS.secondary },
      { label: 'OpenAI',      color: COLORS.purple   },
      { label: 'Docker',      color: COLORS.gold     },
      { label: 'Vercel',      color: COLORS.cyan     },
      { label: 'PostHog',     color: COLORS.accent   },
      { label: 'GitHub CI',   color: COLORS.action   },
    ],

    tiers: [
      { name: 'Lean MVP',      price: 'From $6,000',  featured: false,
        desc:     'Core user journey with one AI feature, auth, and deployment.',
        features: ['Core user journey', 'One AI feature', 'Auth + deployment', '6 week delivery'] },
      { name: 'Full MVP',      price: 'From $12,000', featured: true,
        desc:     'Complete MVP with AI features, analytics, and feedback loops.',
        features: ['Multiple AI features', 'Analytics + feedback hooks', 'CI/CD + monitoring', 'Staging environment', '30-day support'] },
      { name: 'MVP + Scale',   price: 'Custom',       featured: false,
        desc:     'MVP built to scale — production-grade architecture from day one.',
        features: ['Enterprise architecture', 'Multi-region deploy', 'Load testing', 'Ongoing retainer option'] },
    ],
  },

  // ── 4. Product Scaling ────────────────────────────────────────────────────
  'scaling': {
    id:          'scaling',
    title:       'Product Scaling',
    tagline:     'Your product works. Now make it work for 100x more users.',
    badge:       'Product Development',
    accentColor: COLORS.purple,
    heroDesc:    'Scaling is an engineering discipline, not just throwing more servers at the problem. We audit your current architecture, identify the constraints, and redesign the bottlenecks — database queries, caching strategy, API throughput, AI inference costs — so your product can grow without re-platforming.',
    tags:        ['Fixed-Fee Audits', 'Performance Guaranteed', 'From $5,000'],

    archLayers: [
      { label: 'Load Balancer',     color: COLORS.accent,    icons: ['AWS ALB', 'Nginx', 'Cloudflare'] },
      { label: 'App Cluster',       color: COLORS.action,    icons: ['Kubernetes', 'Docker'] },
      { label: 'Cache Layer',       color: COLORS.secondary, icons: ['Redis', 'CDN'] },
      { label: 'Scalable DB',       color: COLORS.purple,    icons: ['Postgres', 'Read Replicas'] },
    ],

    stats: [
      { target: 10,  suffix: 'x',  label: 'Avg Throughput Gain',  iconName: 'Zap',         color: COLORS.purple   },
      { target: 60,  suffix: '%',  label: 'Avg Cost Reduction',   iconName: 'Activity',    color: COLORS.gold     },
      { target: 99,  suffix: '.9%',label: 'Uptime Post-Scale',    iconName: 'ShieldCheck', color: COLORS.action   },
      { target: 100, suffix: '%',  label: 'Code Ownership',       iconName: 'Rocket',      color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Activity',  title: 'Performance Audit',          color: COLORS.purple,    desc: 'Profiling of database queries, API response times, and memory usage — with a ranked list of what to fix first for the highest impact.' },
      { iconName: 'Database',  title: 'Database Optimisation',      color: COLORS.action,    desc: 'Query rewriting, index strategy, connection pooling, and read replica design for databases at their limits.' },
      { iconName: 'Server',    title: 'Horizontal Scaling',         color: COLORS.secondary, desc: 'Stateless API design, Kubernetes autoscaling, and load balancer configuration for traffic that spikes unpredictably.' },
      { iconName: 'Zap',       title: 'Caching Architecture',       color: COLORS.accent,    desc: 'Redis caching for expensive computations, CDN configuration for static assets, and response caching at the API layer.' },
      { iconName: 'Brain',     title: 'AI Inference Optimisation',  color: COLORS.gold,      desc: 'Model quantisation, batching strategy, async inference queuing, and GPU cost management for AI features under load.' },
      { iconName: 'GitBranch', title: 'Load Testing & Validation',  color: COLORS.cyan,      desc: 'Locust or k6 load tests run at 2–5x your current peak — changes validated before they reach production.' },
    ],

    process: [
      { step: '01', title: 'Architecture Audit',    desc: 'Profiling of current stack: database, API, cache, and AI layer. We find the real bottlenecks, not the assumed ones.' },
      { step: '02', title: 'Fix Plan & Prioritise', desc: 'Ranked list of changes by impact and effort. You decide what to fix in this engagement vs defer.' },
      { step: '03', title: 'Implement & Test',      desc: 'Changes implemented and load-tested at target scale before any production deployment.' },
      { step: '04', title: 'Deploy & Monitor',      desc: 'Staged rollout, performance dashboards live, and a 30-day monitoring window to confirm gains hold under real traffic.' },
    ],

    deliverables: [
      'Performance audit report with benchmark data',
      'Prioritised fix backlog',
      'Refactored codebase (your repository)',
      'Kubernetes / Docker configuration',
      'Load test results (before and after)',
      'Performance monitoring dashboard',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Kubernetes',  color: COLORS.purple   },
      { label: 'Redis',       color: COLORS.action   },
      { label: 'PostgreSQL',  color: COLORS.secondary },
      { label: 'Nginx',       color: COLORS.accent   },
      { label: 'Locust',      color: COLORS.gold     },
      { label: 'Prometheus',  color: COLORS.cyan     },
      { label: 'Grafana',     color: COLORS.purple   },
      { label: 'AWS / GCP',   color: COLORS.action   },
    ],

    tiers: [
      { name: 'Scaling Audit',   price: 'From $5,000',  featured: false,
        desc:     'Full performance audit with a prioritised fix roadmap.',
        features: ['Architecture audit', 'Benchmark report', 'Fix roadmap', '1–2 week turnaround'] },
      { name: 'Scaling Sprint',  price: 'From $12,000', featured: true,
        desc:     'Audit + implementation of the top performance improvements.',
        features: ['Audit + implementation', 'Load testing', 'Kubernetes config', 'Monitoring setup', '30-day support'] },
      { name: 'Scale Partnership',price: 'Custom',      featured: false,
        desc:     'Embedded engineering for complex re-architecture and migration.',
        features: ['Full re-architecture', 'Zero-downtime migration', 'Multi-region setup', 'SLA agreement'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 2 — INTEGRATION & APIs
  // ══════════════════════════════════════════════════════════════════════════

  // ── 5. API Design & Development ───────────────────────────────────────────
  'api': {
    id:          'api',
    title:       'API Design & Development',
    tagline:     'APIs that are fast, documented, and a pleasure to integrate with.',
    badge:       'Integration & APIs',
    accentColor: COLORS.action,
    heroDesc:    'A poorly designed API becomes a permanent liability — hard to maintain, painful to integrate, and expensive to version. We design and build production-grade REST and GraphQL APIs with OpenAPI documentation, auth, rate-limiting, versioning, and monitoring included by default.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $4,000'],

    archLayers: [
      { label: 'API Gateway',       color: COLORS.accent,    icons: ['Auth', 'Rate Limit', 'CORS'] },
      { label: 'FastAPI Service',   color: COLORS.action,    icons: ['FastAPI', 'Pydantic'] },
      { label: 'Business Logic',    color: COLORS.secondary, icons: ['Python', 'Domain Logic'] },
      { label: 'Data Layer',        color: COLORS.purple,    icons: ['PostgreSQL', 'SQLAlchemy'] },
    ],

    stats: [
      { target: 80,  suffix: '+', label: 'APIs Delivered',        iconName: 'Server',      color: COLORS.action   },
      { target: 99,  suffix: '%', label: 'Uptime SLA',            iconName: 'Activity',    color: COLORS.secondary },
      { target: 100, suffix: 'ms',label: 'P99 Latency Target',   iconName: 'Zap',         color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'OpenAPI Documented',   iconName: 'ShieldCheck', color: COLORS.cyan     },
    ],

    features: [
      { iconName: 'Server',    title: 'REST & GraphQL APIs',       color: COLORS.action,    desc: 'Endpoint design, schema definition, and query optimisation. REST for simplicity, GraphQL where flexible querying matters.' },
      { iconName: 'Lock',      title: 'Auth & Security',           color: COLORS.secondary, desc: 'JWT, OAuth 2.0, API key management, and rate-limiting built in. Not an afterthought — part of the initial design.' },
      { iconName: 'Code2',     title: 'OpenAPI Documentation',     color: COLORS.accent,    desc: 'Auto-generated Swagger docs, versioned API contracts, and a developer portal so integration partners can self-serve.' },
      { iconName: 'Database',  title: 'Async & Streaming Endpoints',color: COLORS.purple,  desc: 'WebSocket, Server-Sent Events, and async task endpoints for AI features that take longer than a single HTTP request.' },
      { iconName: 'Activity',  title: 'Monitoring & Alerting',     color: COLORS.gold,      desc: 'Latency percentiles, error rate dashboards, and PagerDuty-compatible alerting for every endpoint in production.' },
      { iconName: 'GitBranch', title: 'Versioning Strategy',       color: COLORS.cyan,      desc: 'URL or header-based versioning with a deprecation policy that lets you evolve the API without breaking existing integrations.' },
    ],

    process: [
      { step: '01', title: 'API Design Review',   desc: 'Resource modelling, endpoint inventory, and contract-first design reviewed with your team before a line of code is written.' },
      { step: '02', title: 'Stub & Validate',     desc: 'OpenAPI spec generated and validated against consumer requirements. Integration partners can begin building against the stub.' },
      { step: '03', title: 'Build & Test',         desc: 'Implementation with unit, integration, and contract tests. Performance baseline established against agreed latency targets.' },
      { step: '04', title: 'Deploy & Document',    desc: 'Production deployment with monitoring, developer documentation, and a 30-day support window for integration partners.' },
    ],

    deliverables: [
      'Production API codebase (your repository)',
      'OpenAPI 3.x specification',
      'Auth + rate-limiting implementation',
      'Unit + integration test suite',
      'Developer documentation portal',
      'Monitoring + alerting configuration',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'FastAPI',      color: COLORS.action   },
      { label: 'Python',       color: COLORS.secondary },
      { label: 'PostgreSQL',   color: COLORS.accent   },
      { label: 'Redis',        color: COLORS.purple   },
      { label: 'JWT / OAuth',  color: COLORS.gold     },
      { label: 'Swagger UI',   color: COLORS.cyan     },
      { label: 'Pytest',       color: COLORS.action   },
      { label: 'Docker',       color: COLORS.secondary },
    ],

    tiers: [
      { name: 'API Build',         price: 'From $4,000',  featured: false,
        desc:     'Single-service REST API with auth, docs, and deployment.',
        features: ['REST API build', 'Auth + rate-limiting', 'OpenAPI docs', '3–4 week delivery'] },
      { name: 'API Platform',      price: 'From $9,000',  featured: true,
        desc:     'Multi-service API with GraphQL, async endpoints, and full monitoring.',
        features: ['REST + GraphQL', 'Async endpoints', 'Full monitoring', 'Versioning strategy', '30-day support'] },
      { name: 'Enterprise API',    price: 'Custom',       featured: false,
        desc:     'High-traffic API with SLA, multi-region, and developer portal.',
        features: ['Multi-region deploy', 'Developer portal', 'SLA agreement', 'Dedicated engineer'] },
    ],
  },

  // ── 6. Third-party Integrations ───────────────────────────────────────────
  'integrations': {
    id:          'integrations',
    title:       'Third-party Integrations',
    tagline:     'Connect your product to the tools your customers already use.',
    badge:       'Integration & APIs',
    accentColor: COLORS.secondary,
    heroDesc:    'Third-party integrations are where AI products live or die — connecting to CRMs, ERPs, data warehouses, and external AI APIs without creating a maintenance nightmare. We build clean, monitored, and documented integrations that handle rate limits, auth flows, schema changes, and error states gracefully.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $3,000'],

    archLayers: [
      { label: 'Integration Hub',   color: COLORS.accent,    icons: ['Webhooks', 'OAuth', 'API Keys'] },
      { label: 'Adapter Layer',     color: COLORS.action,    icons: ['Python', 'Normalisation'] },
      { label: 'Queue / Retry',     color: COLORS.secondary, icons: ['Celery', 'Redis', 'SQS'] },
      { label: 'Core Application',  color: COLORS.purple,    icons: ['Your App', 'Database'] },
    ],

    stats: [
      { target: 120, suffix: '+', label: 'Integrations Built',     iconName: 'Boxes',       color: COLORS.secondary },
      { target: 99,  suffix: '%', label: 'Integration Uptime',    iconName: 'Activity',    color: COLORS.action   },
      { target: 50,  suffix: '+', label: 'SaaS Tools Supported',  iconName: 'Globe',       color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',        iconName: 'ShieldCheck', color: COLORS.cyan     },
    ],

    features: [
      { iconName: 'Globe',     title: 'SaaS Connector Library',    color: COLORS.secondary, desc: 'Salesforce, HubSpot, Slack, Stripe, Google Workspace, Jira, and 50+ SaaS tools — built with proper OAuth flows and schema mapping.' },
      { iconName: 'Brain',     title: 'AI API Integrations',       color: COLORS.action,    desc: 'OpenAI, Anthropic, Google Gemini, and open-source model APIs — with fallback logic, cost tracking, and rate-limit handling.' },
      { iconName: 'Database',  title: 'Data System Integrations',  color: COLORS.accent,    desc: 'Snowflake, BigQuery, Redshift, and Postgres connections with credential management, query optimisation, and CDC support.' },
      { iconName: 'RefreshCw', title: 'Webhook Architecture',      color: COLORS.purple,    desc: 'Inbound and outbound webhooks with signature verification, retry logic, idempotency keys, and dead-letter queue handling.' },
      { iconName: 'Activity',  title: 'Integration Monitoring',    color: COLORS.gold,      desc: 'Per-integration health dashboards, latency tracking, and alerting when a third-party service degrades or changes schema.' },
      { iconName: 'Lock',      title: 'Credential Management',     color: COLORS.cyan,      desc: 'Secrets manager integration, OAuth token refresh, and per-tenant credential isolation for multi-tenant SaaS products.' },
    ],

    process: [
      { step: '01', title: 'Integration Inventory',  desc: 'We map all required integrations, assess API quality, rate limits, and authentication patterns before scoping.' },
      { step: '02', title: 'Adapter Design',          desc: 'A standardised adapter interface that normalises third-party data into your internal model — reducing integration-specific code.' },
      { step: '03', title: 'Build & Test',            desc: 'Each integration built with unit tests, retry logic, and a staging sandbox environment to validate against real API responses.' },
      { step: '04', title: 'Monitor & Document',      desc: 'Integration monitoring deployed, runbooks written for each connector, and a 30-day support window for post-launch issues.' },
    ],

    deliverables: [
      'Integration codebase (your repository)',
      'OAuth flow implementation',
      'Webhook handler with retry + idempotency',
      'Per-integration monitoring configuration',
      'Runbook for each integration',
      'Credential management setup',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',      color: COLORS.secondary },
      { label: 'Celery',      color: COLORS.action   },
      { label: 'Redis',       color: COLORS.accent   },
      { label: 'OAuth 2.0',   color: COLORS.purple   },
      { label: 'AWS SQS',     color: COLORS.gold     },
      { label: 'Zapier SDK',  color: COLORS.cyan     },
      { label: 'Pytest',      color: COLORS.secondary },
      { label: 'Docker',      color: COLORS.action   },
    ],

    tiers: [
      { name: 'Single Integration', price: 'From $3,000', featured: false,
        desc:     'One third-party integration with monitoring and documentation.',
        features: ['One integration', 'OAuth / auth flow', 'Monitoring', '1–2 week delivery'] },
      { name: 'Integration Suite',  price: 'From $7,500', featured: true,
        desc:     'Three to six integrations with webhook architecture and monitoring.',
        features: ['3–6 integrations', 'Webhook architecture', 'Retry + idempotency', 'Per-integration monitoring', '30-day support'] },
      { name: 'Integration Platform',price: 'Custom',     featured: false,
        desc:     'Full integration hub for multi-tenant SaaS with per-customer auth.',
        features: ['Unlimited integrations', 'Per-tenant credentials', 'Integration marketplace', 'SLA agreement'] },
    ],
  },

  // ── 7. Microservices Architecture ─────────────────────────────────────────
  'microservices': {
    id:          'microservices',
    title:       'Microservices Architecture',
    tagline:     'Decompose the monolith. Scale services independently.',
    badge:       'Integration & APIs',
    accentColor: COLORS.accent,
    heroDesc:    'Microservices are a solution to a specific problem — not a default architecture choice. We assess whether decomposition is right for your stage, design service boundaries that reflect actual business domains, and build or migrate to a microservices architecture that can be owned by small teams and deployed independently.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $8,000'],

    archLayers: [
      { label: 'API Gateway',       color: COLORS.accent,    icons: ['Auth', 'Routing', 'Rate Limit'] },
      { label: 'Service Mesh',      color: COLORS.action,    icons: ['gRPC', 'REST', 'Events'] },
      { label: 'Domain Services',   color: COLORS.secondary, icons: ['Users', 'Orders', 'AI', 'Billing'] },
      { label: 'Data Stores',       color: COLORS.purple,    icons: ['Per-service DBs', 'Event Bus'] },
    ],

    stats: [
      { target: 20,  suffix: '+', label: 'Microservice Migrations', iconName: 'Boxes',       color: COLORS.accent   },
      { target: 5,   suffix: 'x', label: 'Independent Deploys',    iconName: 'Rocket',      color: COLORS.gold     },
      { target: 99,  suffix: '%', label: 'Service Uptime',         iconName: 'Activity',    color: COLORS.action   },
      { target: 100, suffix: '%', label: 'Code Ownership',         iconName: 'ShieldCheck', color: COLORS.secondary },
    ],

    features: [
      { iconName: 'GitBranch',  title: 'Domain-Driven Design',        color: COLORS.accent,    desc: 'Service boundaries defined by business domains — not technical layers. Each service owns its data and can be deployed independently.' },
      { iconName: 'Server',     title: 'API Gateway Pattern',          color: COLORS.action,    desc: 'Single entry point with routing, auth, rate-limiting, and request aggregation. Clients talk to one surface, services stay isolated.' },
      { iconName: 'Layers',     title: 'Event-Driven Communication',   color: COLORS.secondary, desc: 'Kafka or RabbitMQ-based async messaging between services — loose coupling, resilience to partial failures, and audit trails.' },
      { iconName: 'Database',   title: 'Database-per-Service',         color: COLORS.purple,    desc: 'Each service owns its data store — PostgreSQL, Redis, or MongoDB as appropriate — with no cross-service database queries.' },
      { iconName: 'Activity',   title: 'Distributed Tracing',          color: COLORS.gold,      desc: 'OpenTelemetry instrumentation across all services so a single request can be traced end-to-end through the system.' },
      { iconName: 'GitBranch',  title: 'Strangler Fig Migration',      color: COLORS.cyan,      desc: 'Incremental decomposition of existing monoliths — new services carved out alongside the monolith without big-bang rewrites.' },
    ],

    process: [
      { step: '01', title: 'Feasibility & Design',  desc: 'Honest assessment of whether microservices are right for your team size and stage. Domain mapping and service boundary definition.' },
      { step: '02', title: 'Architecture Blueprint', desc: 'Service catalogue, communication patterns, data ownership, and deployment topology documented before build.' },
      { step: '03', title: 'Build & Migrate',        desc: 'Services built or extracted one at a time — each validated in staging before production. No big-bang cutovers.' },
      { step: '04', title: 'Observability & Handoff',desc: 'Distributed tracing, service dashboards, and runbooks for every service. Knowledge transfer to your engineering team.' },
    ],

    deliverables: [
      'Service architecture documentation',
      'Service codebases (your repositories)',
      'API gateway configuration',
      'Event bus setup',
      'Distributed tracing (OpenTelemetry)',
      'Per-service monitoring dashboards',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.accent   },
      { label: 'gRPC',         color: COLORS.action   },
      { label: 'Kafka',        color: COLORS.secondary },
      { label: 'Kubernetes',   color: COLORS.purple   },
      { label: 'OpenTelemetry',color: COLORS.gold     },
      { label: 'Istio',        color: COLORS.cyan     },
      { label: 'Terraform',    color: COLORS.accent   },
      { label: 'AWS / GCP',    color: COLORS.action   },
    ],

    tiers: [
      { name: 'Service Extraction', price: 'From $8,000',  featured: false,
        desc:     'One service extracted from monolith with API gateway and monitoring.',
        features: ['Single service', 'API gateway', 'Distributed tracing', '4–5 week delivery'] },
      { name: 'Full Decomposition', price: 'From $18,000', featured: true,
        desc:     'Full microservices migration with event bus and observability.',
        features: ['Multiple services', 'Event bus', 'Database-per-service', 'Full observability', '30-day support'] },
      { name: 'Enterprise Platform', price: 'Custom',      featured: false,
        desc:     'Large-scale decomposition with service mesh and SLA support.',
        features: ['Service mesh (Istio)', 'Multi-region', 'HIPAA / SOC 2 ready', 'SLA agreement'] },
    ],
  },

  // ── 8. Event-driven Systems ───────────────────────────────────────────────
  'event-driven': {
    id:          'event-driven',
    title:       'Event-driven Systems',
    tagline:     'Systems that react in real time — without polling or tight coupling.',
    badge:       'Integration & APIs',
    accentColor: COLORS.purple,
    heroDesc:    'Event-driven architecture makes systems resilient, scalable, and decoupled. We design and build event-driven systems using Kafka, RabbitMQ, or AWS SNS/SQS — with event schemas, consumer groups, dead-letter queues, and the observability to understand what\'s happening across the entire event graph.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $7,000'],

    archLayers: [
      { label: 'Event Producers',   color: COLORS.accent,    icons: ['APIs', 'Webhooks', 'CDC'] },
      { label: 'Event Bus',         color: COLORS.action,    icons: ['Kafka', 'RabbitMQ', 'SNS'] },
      { label: 'Consumers',         color: COLORS.secondary, icons: ['Workers', 'AI Pipeline'] },
      { label: 'Dead Letter Queue', color: COLORS.purple,    icons: ['DLQ', 'Replay', 'Alerts'] },
    ],

    stats: [
      { target: 25,  suffix: '+', label: 'Event Systems Built',   iconName: 'Boxes',       color: COLORS.purple   },
      { target: 99,  suffix: '%', label: 'Message Delivery Rate', iconName: 'Activity',    color: COLORS.action   },
      { target: 10,  suffix: 'ms',label: 'P99 Processing Time', iconName: 'Zap',         color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',        iconName: 'ShieldCheck', color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Server',    title: 'Event Schema Registry',      color: COLORS.purple,    desc: 'Avro or JSON Schema registry ensuring producers and consumers evolve safely — no silent breaking changes in event contracts.' },
      { iconName: 'Layers',    title: 'Consumer Group Design',      color: COLORS.action,    desc: 'Partition assignment, consumer lag monitoring, and rebalancing strategy for high-throughput event processing.' },
      { iconName: 'RefreshCw', title: 'Dead Letter Queue Handling', color: COLORS.secondary, desc: 'Poison message isolation, manual replay tooling, and automatic alerting when DLQ depth exceeds threshold.' },
      { iconName: 'Database',  title: 'Event Sourcing Patterns',    color: COLORS.accent,    desc: 'Event store design, aggregate reconstruction, and CQRS patterns where the full event history is valuable for audit or replay.' },
      { iconName: 'Brain',     title: 'AI Pipeline Triggering',     color: COLORS.gold,      desc: 'Event-driven AI inference — models triggered asynchronously by business events rather than synchronous API calls.' },
      { iconName: 'Activity',  title: 'Event Observability',        color: COLORS.cyan,      desc: 'Consumer lag dashboards, message throughput tracking, and distributed tracing across producer-to-consumer paths.' },
    ],

    process: [
      { step: '01', title: 'Event Modelling',         desc: 'Event storming session to map business events, commands, and aggregates. Schema design agreed before infrastructure is provisioned.' },
      { step: '02', title: 'Infrastructure Setup',    desc: 'Kafka / RabbitMQ / SNS provisioned, topic/queue design validated, and schema registry configured.' },
      { step: '03', title: 'Producer & Consumer Build',desc: 'Producers, consumers, and error handling built with integration tests running against a local broker environment.' },
      { step: '04', title: 'Observability & Handoff', desc: 'Consumer lag dashboards, DLQ alerting, replay tooling, and full runbook delivered with knowledge-transfer session.' },
    ],

    deliverables: [
      'Event-driven system codebase',
      'Event schema registry + documentation',
      'Producer + consumer implementations',
      'DLQ handling + replay tooling',
      'Consumer lag monitoring dashboard',
      'Event system runbook',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Apache Kafka', color: COLORS.purple   },
      { label: 'RabbitMQ',    color: COLORS.action   },
      { label: 'AWS SNS/SQS', color: COLORS.secondary },
      { label: 'Avro',        color: COLORS.accent   },
      { label: 'Python',      color: COLORS.gold     },
      { label: 'Celery',      color: COLORS.cyan     },
      { label: 'Grafana',     color: COLORS.purple   },
      { label: 'Kubernetes',  color: COLORS.action   },
    ],

    tiers: [
      { name: 'Event Bus Setup',     price: 'From $7,000',  featured: false,
        desc:     'Kafka/RabbitMQ provisioned with one producer-consumer pair.',
        features: ['Broker setup', 'Schema registry', 'One producer + consumer', 'DLQ handling', '4 week delivery'] },
      { name: 'Event Platform',      price: 'From $15,000', featured: true,
        desc:     'Full event-driven platform with multiple consumers and observability.',
        features: ['Multiple consumers', 'Event sourcing', 'Consumer lag monitoring', 'Replay tooling', '30-day support'] },
      { name: 'Enterprise Events',   price: 'Custom',       featured: false,
        desc:     'High-throughput event platform with multi-region and compliance.',
        features: ['Multi-region replication', 'HIPAA / GDPR readiness', 'Exactly-once semantics', 'SLA agreement'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 3 — AI FEATURE ENGINEERING
  // ══════════════════════════════════════════════════════════════════════════

  // ── 9. AI Feature Embedding ───────────────────────────────────────────────
  'ai-features': {
    id:          'ai-features',
    title:       'AI Feature Embedding',
    tagline:     'Add intelligence to your existing product — without a rebuild.',
    badge:       'AI Feature Engineering',
    accentColor: COLORS.action,
    heroDesc:    'Most products don\'t need a new AI product — they need AI features added to what already works. We embed LLM-powered capabilities, computer vision, or ML predictions directly into your existing application — with clean API boundaries, fallback logic, and cost controls from day one.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $5,000'],

    archLayers: [
      { label: 'Your Existing App',  color: COLORS.accent,    icons: ['React', 'Django', 'Rails'] },
      { label: 'AI Feature Layer',   color: COLORS.action,    icons: ['LLM', 'ML Model', 'Vision'] },
      { label: 'AI Orchestration',   color: COLORS.secondary, icons: ['LangChain', 'FastAPI'] },
      { label: 'Model Providers',    color: COLORS.purple,    icons: ['OpenAI', 'Anthropic', 'GCP'] },
    ],

    stats: [
      { target: 60,  suffix: '+', label: 'AI Features Shipped',    iconName: 'Brain',       color: COLORS.action   },
      { target: 3,   suffix: 'x', label: 'Engagement Lift',        iconName: 'Activity',    color: COLORS.gold     },
      { target: 40,  suffix: '%', label: 'Avg Cost Reduction',     iconName: 'Zap',         color: COLORS.secondary },
      { target: 100, suffix: '%', label: 'Code Ownership',         iconName: 'ShieldCheck', color: COLORS.cyan     },
    ],

    features: [
      { iconName: 'Brain',     title: 'LLM Integration',             color: COLORS.action,    desc: 'GPT-4, Claude, Gemini, or open-source models integrated into your product with prompt versioning, output validation, and fallback logic.' },
      { iconName: 'Cpu',       title: 'ML Model Embedding',          color: COLORS.secondary, desc: 'Custom scikit-learn or PyTorch models served via FastAPI — integrated into your app as async feature calls with latency budgets.' },
      { iconName: 'Eye',       title: 'Computer Vision Features',    color: COLORS.accent,    desc: 'Object detection, OCR, image classification, and visual search features — embedded into your upload or media flows.' },
      { iconName: 'Database',  title: 'Vector Search Integration',   color: COLORS.purple,    desc: 'Pinecone, Weaviate, or pgvector for semantic search, similar-item retrieval, and RAG document search inside your product.' },
      { iconName: 'Zap',       title: 'Cost & Latency Controls',     color: COLORS.gold,      desc: 'Token budgets, caching of repeated prompts, async inference queuing, and fallback to smaller models when cost exceeds threshold.' },
      { iconName: 'Activity',  title: 'AI Feature Monitoring',       color: COLORS.cyan,      desc: 'Quality metrics, latency tracking, and cost-per-request dashboards so you know exactly what each AI feature is costing.' },
    ],

    process: [
      { step: '01', title: 'Feature Design',       desc: 'Define the AI capability, integration point in your existing app, quality metrics, and latency/cost targets.' },
      { step: '02', title: 'Prototype & Validate', desc: 'AI feature built against your real data in isolation — quality validated before integration into the production app.' },
      { step: '03', title: 'Integrate & Test',     desc: 'Feature integrated into your existing codebase with unit tests, fallback logic, and staging environment validation.' },
      { step: '04', title: 'Deploy & Monitor',     desc: 'Production deployment with cost dashboards, quality monitoring, and a 30-day window to tune and optimise.' },
    ],

    deliverables: [
      'AI feature integration codebase',
      'Prompt library + versioning system',
      'Fallback logic documentation',
      'Cost + quality monitoring dashboard',
      'Unit + integration test suite',
      'AI feature runbook',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'OpenAI',      color: COLORS.action   },
      { label: 'Anthropic',   color: COLORS.secondary },
      { label: 'LangChain',   color: COLORS.accent   },
      { label: 'FastAPI',     color: COLORS.purple   },
      { label: 'Pinecone',    color: COLORS.gold     },
      { label: 'pgvector',    color: COLORS.cyan     },
      { label: 'Python',      color: COLORS.action   },
      { label: 'Pytest',      color: COLORS.secondary },
    ],

    tiers: [
      { name: 'Single AI Feature', price: 'From $5,000', featured: false,
        desc:     'One AI capability embedded into your existing product.',
        features: ['One AI feature', 'Fallback logic', 'Cost monitoring', '2–3 week delivery'] },
      { name: 'AI Feature Suite',  price: 'From $11,000',featured: true,
        desc:     'Three to five AI features with monitoring and cost controls.',
        features: ['3–5 AI features', 'Prompt library', 'Quality monitoring', 'Cost dashboard', '30-day support'] },
      { name: 'AI Product Layer',  price: 'Custom',      featured: false,
        desc:     'Full AI capability layer across your entire product surface.',
        features: ['Full product integration', 'Model A/B testing', 'Custom fine-tuning', 'Ongoing optimisation'] },
    ],
  },

  // ── 10. Recommendation Engines ────────────────────────────────────────────
  'recommendations': {
    id:          'recommendations',
    title:       'Recommendation Engines',
    tagline:     'Show the right thing to the right person at the right time.',
    badge:       'AI Feature Engineering',
    accentColor: COLORS.secondary,
    heroDesc:    'Recommendation systems are one of the highest-ROI AI investments a product can make — but they fail when built on the wrong algorithm for the data density and business context. We design, train, and deploy recommendation engines matched to your product: collaborative filtering, content-based, or hybrid approaches depending on what your data supports.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $6,000'],

    archLayers: [
      { label: 'Product UI',        color: COLORS.accent,    icons: ['React', 'Mobile', 'Email'] },
      { label: 'Rec API',           color: COLORS.action,    icons: ['FastAPI', 'Caching'] },
      { label: 'Rec Engine',        color: COLORS.secondary, icons: ['Collaborative', 'Content'] },
      { label: 'Interaction Store', color: COLORS.purple,    icons: ['Events', 'User Profiles'] },
    ],

    stats: [
      { target: 25,  suffix: '+', label: 'Rec Engines Shipped',   iconName: 'Brain',       color: COLORS.secondary },
      { target: 35,  suffix: '%', label: 'Avg CTR Improvement',   iconName: 'TrendingUp',  color: COLORS.gold     },
      { target: 20,  suffix: '%', label: 'Avg Revenue Lift',      iconName: 'Activity',    color: COLORS.action   },
      { target: 100, suffix: '%', label: 'Code Ownership',        iconName: 'ShieldCheck', color: COLORS.cyan     },
    ],

    features: [
      { iconName: 'Users',     title: 'Collaborative Filtering',     color: COLORS.secondary, desc: 'User-based and item-based collaborative filtering for products with rich interaction history. Matrix factorisation via ALS or SVD.' },
      { iconName: 'Database',  title: 'Content-Based Filtering',     color: COLORS.action,    desc: 'Item attribute-based recommendations for cold-start situations — no interaction history required to serve useful recommendations.' },
      { iconName: 'Brain',     title: 'Neural Collaborative Filtering',color: COLORS.accent,  desc: 'Deep learning approaches (NCF, two-tower models) for high-dimensional interaction data at scale.' },
      { iconName: 'Layers',    title: 'Hybrid Approach',             color: COLORS.purple,    desc: 'Blended models that use collaborative signals where available and content-based fallback where interactions are sparse.' },
      { iconName: 'Activity',  title: 'Real-time Serving',           color: COLORS.gold,      desc: 'Pre-computed candidate retrieval + online scoring pipeline for sub-100ms recommendation latency in production.' },
      { iconName: 'GitBranch', title: 'A/B Testing Framework',       color: COLORS.cyan,      desc: 'Built-in experiment infrastructure to measure the actual business impact of recommendation improvements.' },
    ],

    process: [
      { step: '01', title: 'Data Audit & Method Selection', desc: 'Interaction data assessed for density, recency, and quality. Recommendation approach selected based on what the data actually supports.' },
      { step: '02', title: 'Offline Evaluation',            desc: 'Models trained and evaluated offline using held-out test sets, with precision@k, recall@k, and NDCG metrics.' },
      { step: '03', title: 'Production Pipeline',           desc: 'Training pipeline, candidate retrieval, and online scoring API built and deployed with caching and latency controls.' },
      { step: '04', title: 'A/B Test & Optimise',          desc: 'Live A/B test launched, business metrics tracked (CTR, conversions, revenue), and model iterated based on results.' },
    ],

    deliverables: [
      'Recommendation engine codebase',
      'Model training pipeline',
      'Candidate retrieval + scoring API',
      'Offline evaluation report',
      'A/B test setup',
      'Performance monitoring dashboard',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',      color: COLORS.secondary },
      { label: 'PyTorch',     color: COLORS.action   },
      { label: 'Implicit',    color: COLORS.accent   },
      { label: 'FastAPI',     color: COLORS.purple   },
      { label: 'Redis',       color: COLORS.gold     },
      { label: 'PostgreSQL',  color: COLORS.cyan     },
      { label: 'MLflow',      color: COLORS.secondary },
      { label: 'AWS',         color: COLORS.action   },
    ],

    tiers: [
      { name: 'Rec Engine PoC',    price: 'From $6,000',  featured: false,
        desc:     'One recommendation approach, offline-evaluated, with a scoring API.',
        features: ['Single algorithm', 'Offline evaluation', 'Scoring API', '3–4 week delivery'] },
      { name: 'Production Rec Engine', price: 'From $12,000', featured: true,
        desc:     'Full recommendation system with real-time serving and A/B testing.',
        features: ['Hybrid approach', 'Real-time serving', 'A/B test setup', 'Monitoring', '30-day support'] },
      { name: 'Enterprise Rec Platform', price: 'Custom',  featured: false,
        desc:     'Large-scale recommendation with multi-context personalisation.',
        features: ['Multi-context recs', 'Deep learning models', 'Real-time features', 'Ongoing optimisation'] },
    ],
  },

  // ── 11. Intelligent Search ────────────────────────────────────────────────
  'search': {
    id:          'search',
    title:       'Intelligent Search',
    tagline:     'Search that understands meaning, not just keywords.',
    badge:       'AI Feature Engineering',
    accentColor: COLORS.accent,
    heroDesc:    'Keyword search fails when users don\'t know the exact terms to use. We build semantic and hybrid search systems — embedding-based retrieval, re-ranking, and query understanding — that surface the right results even when the query is vague, misspelled, or in natural language.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $5,000'],

    archLayers: [
      { label: 'Search UI',         color: COLORS.accent,    icons: ['React', 'Autocomplete'] },
      { label: 'Query Understanding',color: COLORS.action,   icons: ['LLM', 'NER', 'Rewrite'] },
      { label: 'Retrieval Layer',   color: COLORS.secondary, icons: ['Vector DB', 'BM25'] },
      { label: 'Index + Re-rank',   color: COLORS.purple,    icons: ['Embeddings', 'Cross-Enc'] },
    ],

    stats: [
      { target: 40,  suffix: '+', label: 'Search Systems Built',   iconName: 'Search',      color: COLORS.accent   },
      { target: 60,  suffix: '%', label: 'Better Relevance',       iconName: 'Activity',    color: COLORS.gold     },
      { target: 50,  suffix: 'ms',label: 'P99 Query Latency',     iconName: 'Zap',         color: COLORS.action   },
      { target: 100, suffix: '%', label: 'Code Ownership',         iconName: 'ShieldCheck', color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Search',    title: 'Semantic Search',            color: COLORS.accent,    desc: 'Embedding-based retrieval using Sentence Transformers or OpenAI embeddings — finds conceptually relevant results even with zero keyword overlap.' },
      { iconName: 'Layers',    title: 'Hybrid Search (BM25 + Vector)',color: COLORS.action,  desc: 'RRF fusion of sparse and dense retrieval — the best of keyword precision and semantic recall for real-world query distributions.' },
      { iconName: 'Brain',     title: 'Query Understanding & Rewriting',color: COLORS.secondary,desc: 'LLM-based query rewriting, NER extraction, and intent classification to improve recall before retrieval.' },
      { iconName: 'Database',  title: 'Vector Index Management',    color: COLORS.purple,    desc: 'Pinecone, Weaviate, or pgvector — provisioned, optimised, and with incremental indexing so new content is searchable within seconds.' },
      { iconName: 'Activity',  title: 'Re-ranking',                 color: COLORS.gold,      desc: 'Cross-encoder re-ranking of retrieved candidates for precision improvement — especially powerful for long-tail query types.' },
      { iconName: 'Eye',       title: 'Search Analytics',           color: COLORS.cyan,      desc: 'Query logs, zero-result rates, click-through rates, and relevance feedback loops that drive continuous improvement.' },
    ],

    process: [
      { step: '01', title: 'Query Analysis',         desc: 'Real query log analysis to understand query types, failure modes, and the vocabulary gap between users and content.' },
      { step: '02', title: 'Architecture Design',    desc: 'Retrieval strategy, embedding model selection, index design, and re-ranking approach agreed before build.' },
      { step: '03', title: 'Build & Evaluate',       desc: 'Search system built and evaluated against held-out query-relevance pairs. NDCG and MRR benchmarks established.' },
      { step: '04', title: 'Deploy & Analyse',       desc: 'Production deployment with search analytics dashboard and a 30-day period to monitor and tune based on real query traffic.' },
    ],

    deliverables: [
      'Search system codebase',
      'Embedding pipeline + vector index',
      'Query understanding logic',
      'Re-ranking implementation',
      'Offline relevance evaluation report',
      'Search analytics dashboard',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',            color: COLORS.accent   },
      { label: 'Sentence Transformers', color: COLORS.action },
      { label: 'Pinecone',          color: COLORS.secondary },
      { label: 'pgvector',          color: COLORS.purple   },
      { label: 'Elasticsearch',     color: COLORS.gold     },
      { label: 'OpenAI Embeddings', color: COLORS.cyan     },
      { label: 'FastAPI',           color: COLORS.accent   },
      { label: 'React',             color: COLORS.action   },
    ],

    tiers: [
      { name: 'Semantic Search',     price: 'From $5,000',  featured: false,
        desc:     'Vector search over your content with a clean search API.',
        features: ['Embedding pipeline', 'Vector index', 'Search API', '2–3 week delivery'] },
      { name: 'Hybrid Search System',price: 'From $10,000', featured: true,
        desc:     'Full hybrid search with query understanding and re-ranking.',
        features: ['Hybrid retrieval', 'Query rewriting', 'Re-ranking', 'Search analytics', '30-day support'] },
      { name: 'Enterprise Search',   price: 'Custom',       featured: false,
        desc:     'Large-scale search with personalisation and continuous learning.',
        features: ['Personalised ranking', 'Feedback loops', 'Multi-lingual support', 'SLA agreement'] },
    ],
  },

  // ── 12. Personalisation Layers ────────────────────────────────────────────
  'personalisation': {
    id:          'personalisation',
    title:       'Personalisation Layers',
    tagline:     'Every user gets a product that feels built just for them.',
    badge:       'AI Feature Engineering',
    accentColor: COLORS.purple,
    heroDesc:    'Personalisation goes beyond recommendations — it\'s about adapting the entire product experience: content ordering, feature prominence, messaging tone, and journey sequencing based on real signals about each user. We design and build personalisation systems that improve over time and respect privacy from day one.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $7,000'],

    archLayers: [
      { label: 'Personalised UI',    color: COLORS.accent,    icons: ['React', 'Dynamic Content'] },
      { label: 'Personalisation API',color: COLORS.action,    icons: ['FastAPI', 'Feature Flags'] },
      { label: 'User Model',         color: COLORS.secondary, icons: ['Embeddings', 'ML Model'] },
      { label: 'User Profile Store', color: COLORS.purple,    icons: ['Redis', 'Event Stream'] },
    ],

    stats: [
      { target: 20,  suffix: '+', label: 'Personalisation Systems', iconName: 'Users',       color: COLORS.purple   },
      { target: 25,  suffix: '%', label: 'Avg Engagement Lift',    iconName: 'Activity',    color: COLORS.gold     },
      { target: 15,  suffix: '%', label: 'Avg Conversion Lift',    iconName: 'TrendingUp',  color: COLORS.action   },
      { target: 100, suffix: '%', label: 'Code Ownership',         iconName: 'ShieldCheck', color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Users',     title: 'User Profile Architecture',   color: COLORS.purple,    desc: 'Real-time user preference model built from behavioural signals, explicit preferences, and contextual data — updated with each interaction.' },
      { iconName: 'Layers',    title: 'Content Personalisation',     color: COLORS.action,    desc: 'Dynamic content ordering, item surfacing, and layout adaptation based on user interest signals and predicted intent.' },
      { iconName: 'Brain',     title: 'LLM-based Personalised Copy', color: COLORS.secondary, desc: 'Dynamically generated email subject lines, push notification text, and UI messaging tailored to each user\'s language and context.' },
      { iconName: 'Activity',  title: 'Contextual Bandits',          color: COLORS.accent,    desc: 'Online learning approaches that continuously adapt personalisation decisions based on observed outcomes — no offline retraining cycle.' },
      { iconName: 'Shield',    title: 'Privacy-First Design',        color: COLORS.gold,      desc: 'Differential privacy, on-device personalisation options, and GDPR-compliant consent flows built into the architecture from day one.' },
      { iconName: 'GitBranch', title: 'Experimentation Framework',   color: COLORS.cyan,      desc: 'A/B and multi-armed bandit experiments to measure the actual business impact of each personalisation decision.' },
    ],

    process: [
      { step: '01', title: 'Signal Mapping',           desc: 'Identify the user signals available, the personalisation surfaces to target, and the business metric to optimise.' },
      { step: '02', title: 'User Model Design',         desc: 'User profile schema, feature engineering pipeline, and real-time update architecture designed and documented.' },
      { step: '03', title: 'Build & Integrate',         desc: 'Personalisation API built and integrated into your product surfaces with a feature flag layer for safe rollout.' },
      { step: '04', title: 'Launch & Experiment',       desc: 'Production deployment, A/B experiment live, and business metrics tracked. 30-day optimisation window included.' },
    ],

    deliverables: [
      'Personalisation system codebase',
      'User profile architecture',
      'Personalisation API',
      'Feature flag integration',
      'A/B experiment setup',
      'Impact measurement dashboard',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',      color: COLORS.purple   },
      { label: 'FastAPI',     color: COLORS.action   },
      { label: 'Redis',       color: COLORS.secondary },
      { label: 'PostgreSQL',  color: COLORS.accent   },
      { label: 'Vowpal Wabbit',color: COLORS.gold    },
      { label: 'LaunchDarkly',color: COLORS.cyan     },
      { label: 'Kafka',       color: COLORS.purple   },
      { label: 'React',       color: COLORS.action   },
    ],

    tiers: [
      { name: 'Content Personalisation', price: 'From $7,000',  featured: false,
        desc:     'Content ordering and surfacing personalised by user behaviour.',
        features: ['User profile model', 'Content personalisation API', 'A/B test', '4–5 week delivery'] },
      { name: 'Full Personalisation Layer',price: 'From $14,000',featured: true,
        desc:     'End-to-end personalisation across content, copy, and journeys.',
        features: ['Multi-surface personalisation', 'LLM copy adaptation', 'Contextual bandits', 'Privacy-first design', '30-day support'] },
      { name: 'Enterprise Personalisation',price: 'Custom',     featured: false,
        desc:     'Organisation-wide personalisation with advanced ML and compliance.',
        features: ['Differential privacy', 'On-device ML', 'Multi-market support', 'SLA agreement'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 4 — INFRASTRUCTURE
  // ══════════════════════════════════════════════════════════════════════════

  // ── 13. System Architecture ───────────────────────────────────────────────
  'architecture': {
    id:          'architecture',
    title:       'System Architecture',
    tagline:     'Design the right system before you build the wrong one.',
    badge:       'Infrastructure',
    accentColor: COLORS.action,
    heroDesc:    'Architecture decisions made early are the ones you live with longest. We design systems that fit your current stage and scale with your growth — not over-engineered for problems you don\'t have yet. From data flow diagrams to ADRs to hands-on prototyping, we make the architecture concrete before a line of production code is written.',
    tags:        ['Fixed-Fee Engagements', 'Full Documentation', 'From $4,000'],

    archLayers: [
      { label: 'Frontend / Clients', color: COLORS.accent,    icons: ['Web', 'Mobile', 'API Clients'] },
      { label: 'Application Layer',  color: COLORS.action,    icons: ['Services', 'AI Layer'] },
      { label: 'Data & Cache',       color: COLORS.secondary, icons: ['PostgreSQL', 'Redis', 'S3'] },
      { label: 'Infrastructure',     color: COLORS.purple,    icons: ['AWS', 'GCP', 'K8s', 'CI/CD'] },
    ],

    stats: [
      { target: 60,  suffix: '+', label: 'Systems Architected',    iconName: 'Server',      color: COLORS.action   },
      { target: 3,   suffix: 'x', label: 'Fewer Re-platforms',    iconName: 'Activity',    color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Written & Documented',  iconName: 'ShieldCheck', color: COLORS.secondary },
      { target: 10,  suffix: 'x', label: 'Cheaper than Rebuilds', iconName: 'Zap',         color: COLORS.cyan     },
    ],

    features: [
      { iconName: 'Layers',    title: 'Architecture Design Sessions', color: COLORS.action,   desc: 'Structured workshops with your engineering team to surface requirements, constraints, and trade-offs before committing to a design.' },
      { iconName: 'GitBranch', title: 'Architecture Decision Records',color: COLORS.secondary,desc: 'Every significant decision documented with context, options considered, and rationale — so the next engineer understands why, not just what.' },
      { iconName: 'Database',  title: 'Data Architecture',            color: COLORS.accent,   desc: 'Data model, storage selection, access patterns, and migration strategy for systems that will outlive their original engineers.' },
      { iconName: 'Brain',     title: 'AI System Design',             color: COLORS.purple,   desc: 'Model serving patterns, inference latency design, training pipeline architecture, and MLOps tooling selection.' },
      { iconName: 'Shield',    title: 'Security Architecture',        color: COLORS.gold,     desc: 'Threat model, auth architecture, network segmentation, and data classification framework aligned to your compliance requirements.' },
      { iconName: 'Code2',     title: 'Proof-of-Concept Prototyping', color: COLORS.cyan,     desc: 'Working code that tests architectural assumptions before committing the full engineering team — cheap to pivot, expensive to skip.' },
    ],

    process: [
      { step: '01', title: 'Discovery & Requirements', desc: 'Technical requirements, non-functional requirements, constraints, and scale targets documented before any design work.' },
      { step: '02', title: 'Architecture Design',      desc: 'Multiple options designed, evaluated, and a recommended approach presented with trade-offs documented.' },
      { step: '03', title: 'ADRs & PoC',               desc: 'Architecture Decision Records written for key decisions. Proof-of-concept code built to validate the riskiest assumptions.' },
      { step: '04', title: 'Handoff & Review',          desc: 'Architecture package handed off with a review session for the engineering team and a 30-day Q&A window.' },
    ],

    deliverables: [
      'Architecture design document',
      'System and data flow diagrams',
      'Architecture Decision Records (ADRs)',
      'Technology selection rationale',
      'Proof-of-concept codebase',
      'Security threat model',
      '30-day Q&A and review support',
    ],

    techStack: [
      { label: 'AWS / GCP',    color: COLORS.action   },
      { label: 'Kubernetes',   color: COLORS.secondary },
      { label: 'Terraform',    color: COLORS.accent   },
      { label: 'PostgreSQL',   color: COLORS.purple   },
      { label: 'Mermaid',      color: COLORS.gold     },
      { label: 'Confluence',   color: COLORS.cyan     },
      { label: 'Python',       color: COLORS.action   },
      { label: 'Docker',       color: COLORS.secondary },
    ],

    tiers: [
      { name: 'Architecture Review',  price: 'From $4,000', featured: false,
        desc:     'Review of existing architecture with risk assessment and improvement roadmap.',
        features: ['Architecture audit', 'Risk register', 'Improvement roadmap', '1–2 week turnaround'] },
      { name: 'Full Architecture',    price: 'From $9,000', featured: true,
        desc:     'End-to-end architecture design with ADRs, PoC, and documentation.',
        features: ['Full system design', 'ADRs', 'PoC codebase', 'Security model', '30-day support'] },
      { name: 'Embedded Architect',   price: 'Custom',      featured: false,
        desc:     'Senior architect embedded in your team for a quarter.',
        features: ['Sprint-by-sprint guidance', 'Real-time ADRs', 'Engineering mentorship', 'Retainer pricing'] },
    ],
  },

  // ── 14. Cloud Deployment ──────────────────────────────────────────────────
  'cloud': {
    id:          'cloud',
    title:       'Cloud Deployment',
    tagline:     'Get your application to the cloud — properly.',
    badge:       'Infrastructure',
    accentColor: COLORS.secondary,
    heroDesc:    '"Works locally" is not a product. We design and execute cloud deployments on AWS or GCP — Kubernetes clusters, managed databases, CDN configuration, auto-scaling, and cost controls — so your application is production-grade from the first deployment, not retrofitted after the first outage.',
    tags:        ['Fixed-Fee Projects', 'Full IaC Ownership', 'From $4,500'],

    archLayers: [
      { label: 'CDN / Edge',         color: COLORS.accent,    icons: ['CloudFront', 'Cloudflare'] },
      { label: 'App Cluster (K8s)',  color: COLORS.action,    icons: ['Pods', 'HPA', 'Ingress'] },
      { label: 'Managed Services',   color: COLORS.secondary, icons: ['RDS', 'ElastiCache', 'S3'] },
      { label: 'IaC (Terraform)',    color: COLORS.purple,    icons: ['Modules', 'State', 'CI'] },
    ],

    stats: [
      { target: 70,  suffix: '+', label: 'Cloud Deployments',     iconName: 'Rocket',      color: COLORS.secondary },
      { target: 99,  suffix: '.9%',label: 'Uptime Achieved',      iconName: 'Activity',    color: COLORS.action   },
      { target: 40,  suffix: '%', label: 'Avg Cost Reduction',    iconName: 'Zap',         color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'IaC Ownership',         iconName: 'ShieldCheck', color: COLORS.cyan     },
    ],

    features: [
      { iconName: 'Server',    title: 'Kubernetes Cluster Setup',   color: COLORS.secondary, desc: 'EKS, GKE, or self-managed Kubernetes — provisioned, configured, and with node groups, HPA, and network policies set up correctly.' },
      { iconName: 'Database',  title: 'Managed Database Setup',     color: COLORS.action,    desc: 'RDS PostgreSQL, Cloud SQL, or equivalent — with automated backups, read replicas, connection pooling, and monitoring from day one.' },
      { iconName: 'Layers',    title: 'Infrastructure as Code',     color: COLORS.accent,    desc: 'Terraform modules for every resource — reproducible, version-controlled, and handed over to your team with full documentation.' },
      { iconName: 'Zap',       title: 'Auto-scaling Configuration', color: COLORS.purple,    desc: 'HPA for application pods and cluster autoscaler for nodes — with load tests to validate scaling behaviour before production.' },
      { iconName: 'Activity',  title: 'Cost Management',            color: COLORS.gold,      desc: 'Budget alerts, reserved instance analysis, right-sizing recommendations, and a cost attribution dashboard by service and team.' },
      { iconName: 'Globe',     title: 'CDN & Edge Configuration',   color: COLORS.cyan,      desc: 'CloudFront or Cloudflare setup for static assets and API caching — with cache invalidation, CORS, and security headers configured.' },
    ],

    process: [
      { step: '01', title: 'Cloud Architecture Design', desc: 'Resource sizing, networking design, managed service selection, and a cost estimate before any infrastructure is provisioned.' },
      { step: '02', title: 'IaC Build',                 desc: 'Terraform modules written for every resource — reviewed and approved before apply.' },
      { step: '03', title: 'Deploy & Validate',          desc: 'Infrastructure provisioned to staging, application deployed and load-tested, then promoted to production.' },
      { step: '04', title: 'Monitor & Handoff',          desc: 'Monitoring configured, cost dashboards live, runbooks written, and a handoff session with your team.' },
    ],

    deliverables: [
      'Terraform codebase (your repository)',
      'Kubernetes manifests or Helm charts',
      'Monitoring + alerting configuration',
      'Cost management dashboard',
      'Cloud architecture documentation',
      'Deployment runbook',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'AWS / GCP',    color: COLORS.secondary },
      { label: 'Kubernetes',   color: COLORS.action   },
      { label: 'Terraform',    color: COLORS.accent   },
      { label: 'Helm',         color: COLORS.purple   },
      { label: 'Prometheus',   color: COLORS.gold     },
      { label: 'Grafana',      color: COLORS.cyan     },
      { label: 'CloudFront',   color: COLORS.secondary },
      { label: 'GitHub CI',    color: COLORS.action   },
    ],

    tiers: [
      { name: 'Cloud Setup',        price: 'From $4,500',  featured: false,
        desc:     'Core cloud infrastructure provisioned with IaC and monitoring.',
        features: ['K8s cluster', 'Managed DB', 'Terraform IaC', 'Basic monitoring', '3–4 week delivery'] },
      { name: 'Production Platform', price: 'From $10,000', featured: true,
        desc:     'Full production platform with auto-scaling, CDN, and cost controls.',
        features: ['Auto-scaling', 'CDN setup', 'Cost management', 'Full monitoring', '30-day support'] },
      { name: 'Multi-Region Platform',price: 'Custom',     featured: false,
        desc:     'Multi-region, high-availability infrastructure with SLA support.',
        features: ['Multi-region failover', 'Global load balancing', 'HIPAA / SOC 2 ready', 'SLA agreement'] },
    ],
  },

  // ── 15. DevOps & CI/CD ────────────────────────────────────────────────────
  'devops': {
    id:          'devops',
    title:       'DevOps & CI/CD',
    tagline:     'Ship faster. Break less. Recover in minutes.',
    badge:       'Infrastructure',
    accentColor: COLORS.accent,
    heroDesc:    'A missing CI/CD pipeline is a hidden tax on every engineer on your team. We design and implement deployment pipelines, environment management, and observability stacks that let engineers ship confidently multiple times per day — with automated tests, zero-downtime deployments, and rollback in under two minutes.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Ownership', 'From $4,000'],

    archLayers: [
      { label: 'Code + PR',          color: COLORS.accent,    icons: ['GitHub', 'PR Checks'] },
      { label: 'CI Pipeline',        color: COLORS.action,    icons: ['Build', 'Test', 'Lint'] },
      { label: 'CD Pipeline',        color: COLORS.secondary, icons: ['Staging', 'Prod Deploy'] },
      { label: 'Observability',      color: COLORS.purple,    icons: ['Metrics', 'Logs', 'Traces'] },
    ],

    stats: [
      { target: 80,  suffix: '+', label: 'Pipelines Built',         iconName: 'GitBranch',   color: COLORS.accent   },
      { target: 10,  suffix: 'x', label: 'Faster Deploy Cycle',    iconName: 'Zap',         color: COLORS.gold     },
      { target: 99,  suffix: '%', label: 'Zero-downtime Deploys',  iconName: 'Activity',    color: COLORS.action   },
      { target: 2,   suffix: 'min',label: 'Avg Rollback Time',     iconName: 'RefreshCw',   color: COLORS.secondary },
    ],

    features: [
      { iconName: 'GitBranch',  title: 'CI Pipeline Design',         color: COLORS.accent,    desc: 'GitHub Actions or GitLab CI pipelines with linting, unit tests, integration tests, security scans, and container builds on every PR.' },
      { iconName: 'Rocket',     title: 'Zero-downtime Deployments',  color: COLORS.action,    desc: 'Blue/green or rolling deployments with automatic rollback on error-rate spike — configurable confidence windows before promotion.' },
      { iconName: 'Server',     title: 'Environment Management',     color: COLORS.secondary, desc: 'Dev, staging, and production environments with infrastructure parity, feature flags, and environment-specific secrets management.' },
      { iconName: 'Activity',   title: 'Observability Stack',        color: COLORS.purple,    desc: 'Prometheus + Grafana for metrics, Loki for logs, Tempo for traces — or managed equivalents on AWS/GCP. Dashboards for every service.' },
      { iconName: 'Shield',     title: 'Security Scanning',          color: COLORS.gold,      desc: 'SAST, dependency vulnerability scanning, container image scanning, and secret detection built into the CI pipeline.' },
      { iconName: 'Database',   title: 'Database Migration Safety',  color: COLORS.cyan,      desc: 'Migration review gates, backward-compatible migration enforcement, and automated rollback procedures for failed database changes.' },
    ],

    process: [
      { step: '01', title: 'Pipeline Audit',       desc: 'Assessment of existing CI/CD, test coverage, deployment process, and observability gaps with a prioritised improvement plan.' },
      { step: '02', title: 'Pipeline Design',       desc: 'Stage design, environment strategy, secret management, and rollback procedure designed before implementation.' },
      { step: '03', title: 'Build & Validate',      desc: 'Pipelines built, deployment process tested end-to-end, and rollback validated in staging before production cutover.' },
      { step: '04', title: 'Docs & Handoff',        desc: 'Pipeline documentation, runbook, on-call playbook, and a knowledge-transfer session with your engineering team.' },
    ],

    deliverables: [
      'CI/CD pipeline configuration (your repository)',
      'Environment management setup',
      'Observability stack (metrics + logs + traces)',
      'Security scanning integration',
      'Database migration safety gates',
      'Pipeline runbook and on-call playbook',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'GitHub Actions', color: COLORS.accent   },
      { label: 'Docker',         color: COLORS.action   },
      { label: 'Kubernetes',     color: COLORS.secondary },
      { label: 'Prometheus',     color: COLORS.purple   },
      { label: 'Grafana',        color: COLORS.gold     },
      { label: 'Loki',           color: COLORS.cyan     },
      { label: 'Trivy',          color: COLORS.accent   },
      { label: 'ArgoCD',         color: COLORS.action   },
    ],

    tiers: [
      { name: 'CI/CD Setup',        price: 'From $4,000',  featured: false,
        desc:     'CI pipeline + basic CD with staging and production environments.',
        features: ['CI pipeline', 'Staging + prod environments', 'Basic monitoring', '2–3 week delivery'] },
      { name: 'Full DevOps Platform',price: 'From $9,000', featured: true,
        desc:     'Full DevOps stack with observability, security scanning, and zero-downtime deploys.',
        features: ['Zero-downtime deploys', 'Observability stack', 'Security scanning', 'DB migration safety', '30-day support'] },
      { name: 'DevOps Transformation',price: 'Custom',    featured: false,
        desc:     'Embedded DevOps engineering to transform a team\'s delivery capability.',
        features: ['Pipeline + culture', 'Team coaching', 'SRE practices', 'Retainer pricing'] },
    ],
  },

  // ── 16. Security & Compliance ─────────────────────────────────────────────
  'security': {
    id:          'security',
    title:       'Security & Compliance',
    tagline:     'Build secure by design — before the breach, not after.',
    badge:       'Infrastructure',
    accentColor: COLORS.purple,
    heroDesc:    'Security built in late costs ten times more than security built in early. We design and implement security architectures for AI software products — threat modelling, auth systems, network security, secrets management, and compliance frameworks for HIPAA, GDPR, or SOC 2 — so you\'re secure from the first deployment.',
    tags:        ['Fixed-Fee Projects', 'Compliance Documentation', 'From $5,000'],

    archLayers: [
      { label: 'Auth & Identity',   color: COLORS.accent,    icons: ['OAuth', 'MFA', 'RBAC'] },
      { label: 'Network Security',  color: COLORS.action,    icons: ['WAF', 'VPC', 'Zero Trust'] },
      { label: 'Data Security',     color: COLORS.secondary, icons: ['Encryption', 'Masking'] },
      { label: 'Compliance',        color: COLORS.purple,    icons: ['HIPAA', 'GDPR', 'SOC 2'] },
    ],

    stats: [
      { target: 40,  suffix: '+', label: 'Security Audits Completed', iconName: 'ShieldCheck',  color: COLORS.purple   },
      { target: 100, suffix: '%', label: 'Zero Breaches Post-Audit',  iconName: 'Activity',     color: COLORS.action   },
      { target: 30,  suffix: '+', label: 'Compliance Frameworks',     iconName: 'FileText',     color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Documentation Included',    iconName: 'Shield',       color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Lock',      title: 'Auth Architecture',            color: COLORS.purple,    desc: 'OAuth 2.0, OIDC, SAML, MFA, and RBAC designed to your compliance requirements — with session management and token refresh handled correctly.' },
      { iconName: 'Shield',    title: 'Threat Modelling',             color: COLORS.action,    desc: 'STRIDE threat model for your application — identifying attack vectors, trust boundaries, and mitigations before they become incidents.' },
      { iconName: 'Server',    title: 'Network Security',             color: COLORS.secondary, desc: 'VPC design, security group rules, WAF configuration, and zero-trust network access for services that should never be public.' },
      { iconName: 'Database',  title: 'Data Encryption & Masking',   color: COLORS.accent,    desc: 'Encryption at rest and in transit, field-level encryption for PII, and data masking for non-production environments.' },
      { iconName: 'FileText',  title: 'HIPAA / GDPR / SOC 2',        color: COLORS.gold,      desc: 'Gap analysis, technical control implementation, policy documentation, and audit trail configuration for your target compliance framework.' },
      { iconName: 'Eye',       title: 'Security Monitoring',          color: COLORS.cyan,      desc: 'SIEM integration, anomaly detection, failed auth alerting, and a security dashboard that surfaces incidents before they escalate.' },
    ],

    process: [
      { step: '01', title: 'Security Assessment',    desc: 'Current-state review: auth flows, data handling, network exposure, secrets management, and dependency vulnerabilities.' },
      { step: '02', title: 'Threat Model & Design',  desc: 'STRIDE threat model, attack surface reduction plan, and security architecture designed against your compliance target.' },
      { step: '03', title: 'Implementation',          desc: 'Security controls implemented: auth, network, encryption, secrets, and monitoring — tested against the threat model.' },
      { step: '04', title: 'Documentation & Handoff', desc: 'Security runbook, compliance evidence pack, incident response playbook, and a team knowledge-transfer session.' },
    ],

    deliverables: [
      'Security assessment report',
      'Threat model (STRIDE)',
      'Auth implementation (OAuth + RBAC)',
      'Network security configuration',
      'Compliance gap analysis + remediation',
      'Security monitoring configuration',
      'Incident response playbook',
    ],

    techStack: [
      { label: 'OAuth 2.0 / OIDC', color: COLORS.purple   },
      { label: 'AWS WAF',           color: COLORS.action   },
      { label: 'HashiCorp Vault',   color: COLORS.secondary },
      { label: 'Snyk',              color: COLORS.accent   },
      { label: 'Trivy',             color: COLORS.gold     },
      { label: 'Falco',             color: COLORS.cyan     },
      { label: 'Terraform',         color: COLORS.purple   },
      { label: 'AWS / GCP',         color: COLORS.action   },
    ],

    tiers: [
      { name: 'Security Audit',      price: 'From $5,000',  featured: false,
        desc:     'Full security assessment with threat model and prioritised fix plan.',
        features: ['Security assessment', 'Threat model', 'Fix roadmap', '1–2 week turnaround'] },
      { name: 'Security Implementation',price: 'From $11,000',featured: true,
        desc:     'Audit + implementation of security controls and compliance framework.',
        features: ['Auth + network security', 'Encryption', 'Compliance framework', 'Security monitoring', '30-day support'] },
      { name: 'Compliance Programme', price: 'Custom',      featured: false,
        desc:     'Full HIPAA / GDPR / SOC 2 compliance programme with ongoing support.',
        features: ['Evidence collection', 'Audit preparation', 'Ongoing monitoring', 'Compliance retainer'] },
    ],
  },

};