/**
 * dataAnalyticsChildData.js — WellMind Data Solutions
 * Central data store for all Data Science & Analytics child service pages.
 * Consumed by DataAnalyticsChildPage.jsx via URL params.
 *
 * Routes (from sub_services.jsx):
 *   Business Intelligence:  bi-strategy | dashboards | kpi | self-serve
 *   Statistical Methods:    statistical | causal | experimentation | survey-cohort
 *   Data Engineering:       data-engineering | etl | data-lakes | streaming
 *   Data Quality & Ops:     quality | metadata | observability | governance
 */

// ─── Brand color shortcuts ────────────────────────────────────────────────────
const COLORS = {
  action:    '#0B7C93',   // teal  (primary accent for Data Analytics)
  primary:   '#633068',   // purple
  accent:    '#B02A48',   // crimson
  secondary: '#1B6B3A',   // green
  gold:      '#FF9F1C',
  cyan:      '#00BBF9',
};

// ─── CHILD SERVICES DATA ──────────────────────────────────────────────────────
export const DATA_ANALYTICS_CHILDREN = {

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 1 — BUSINESS INTELLIGENCE
  // ══════════════════════════════════════════════════════════════════════════

  // ── 1. BI Strategy & Consulting ──────────────────────────────────────────
  'bi-strategy': {
    id:          'bi-strategy',
    title:       'BI Strategy & Consulting',
    tagline:     'A data strategy that actually connects to business outcomes.',
    badge:       'Business Intelligence',
    accentColor: COLORS.action,
    heroDesc:    'Most BI failures are strategy failures. We audit your data landscape, align stakeholders on metrics that matter, and design a BI roadmap that delivers measurable decisions — not just prettier charts. From tool selection to governance policies, we define the foundation before a single dashboard is built.',
    tags:        ['Fixed-Fee Projects', 'Full Documentation'],

    stats: [
      { target: 80,  suffix: '+', label: 'BI Audits Completed',  iconName: 'BarChart3',  color: COLORS.action   },
      { target: 4,   suffix: 'x', label: 'Faster Time-to-Insight', iconName: 'Zap',      color: COLORS.gold     },
      { target: 60,  suffix: '%', label: 'Avg Tool Cost Reduction', iconName: 'TrendingUp', color: COLORS.secondary },
      { target: 100, suffix: '%', label: 'Roadmap Ownership',     iconName: 'Shield',    color: COLORS.primary  },
    ],

    features: [
      { iconName: 'Search',     title: 'Data Landscape Audit',      color: COLORS.action,    desc: 'We map every data source, identify gaps and duplication, and assess quality before any BI investment is made.' },
      { iconName: 'Layers',     title: 'Metrics Framework Design',  color: COLORS.primary,   desc: 'Defining the right KPIs is half the work. We facilitate workshops to align leadership on the 10–20 metrics that drive real decisions.' },
      { iconName: 'Settings2',  title: 'Tool Selection & POC',      color: COLORS.accent,    desc: 'Power BI vs Tableau vs Looker vs custom — we run objective proofs-of-concept against your real data and use-cases before you commit.' },
      { iconName: 'GitBranch',  title: 'BI Architecture Design',    color: COLORS.secondary, desc: 'Semantic layer, data model, and report taxonomy design. Architecture that scales to 100 dashboards without becoming unmaintainable.' },
      { iconName: 'Users',      title: 'Stakeholder Alignment',     color: COLORS.gold,      desc: 'Executive interviews, analyst workshops, and a structured requirements process that surfaces real needs — not wish lists.' },
      { iconName: 'FileText',   title: 'BI Governance Policy',      color: COLORS.cyan,      desc: 'Access controls, certified dataset policies, and dashboard ownership frameworks that prevent BI sprawl.' },
    ],

    process: [
      { step: '01', title: 'Discovery & Interviews',    desc: 'Stakeholder interviews across leadership, analysts, and operations to capture decision needs and current pain points.' },
      { step: '02', title: 'Data & Tool Audit',         desc: 'Inventory of all data sources, existing reports, and tool licences. We surface quick wins alongside strategic gaps.' },
      { step: '03', title: 'Strategy Document',         desc: 'Metrics framework, tool recommendation, architecture blueprint, and a phased roadmap with effort/impact scoring.' },
      { step: '04', title: 'Handoff & Prioritisation',  desc: 'Workshop to walk through the strategy, answer questions, and align the team on the first quarter of execution.' },
    ],

    deliverables: [
      'BI strategy document (metrics, tools, architecture)',
      'Data landscape audit report',
      'KPI framework with definitions and owners',
      'Tool evaluation scorecard',
      'Phased BI roadmap (6–18 months)',
      'Governance policy template',
      'Presentation deck for executive sign-off',
    ],

    techStack: [
      { label: 'Power BI',   color: COLORS.action   },
      { label: 'Tableau',    color: COLORS.primary  },
      { label: 'Looker',     color: COLORS.accent   },
      { label: 'dbt',        color: COLORS.secondary },
      { label: 'Snowflake',  color: COLORS.gold     },
      { label: 'BigQuery',   color: COLORS.cyan     },
      { label: 'Miro',       color: COLORS.action   },
      { label: 'Confluence', color: COLORS.primary  },
    ],

    tiers: [
      { name: 'BI Audit',        price: 'From $3,000', featured: false,
        desc:     'A focused assessment of your current BI state with a prioritised action plan.',
        features: ['Data & tool audit', 'Quick-win identification', 'Written report', '1–2 week turnaround'] },
      { name: 'Full BI Strategy', price: 'From $6,500', featured: true,
        desc:     'Complete strategy with metrics framework, architecture, and roadmap.',
        features: ['Stakeholder interviews', 'Metrics framework', 'Architecture blueprint', 'Phased roadmap', 'Executive presentation'] },
      { name: 'Ongoing Advisory', price: 'Custom',      featured: false,
        desc:     'Monthly retainer to guide BI execution, govern quality, and evolve the strategy.',
        features: ['Monthly strategy sessions', 'Dashboard QA reviews', 'Governance oversight', 'On-demand consulting'] },
    ],
  },

  // ── 2. Dashboard Design ───────────────────────────────────────────────────
  'dashboards': {
    id:          'dashboards',
    title:       'Dashboard Design',
    tagline:     'Dashboards that answer questions, not just display data.',
    badge:       'Business Intelligence',
    accentColor: COLORS.primary,
    heroDesc:    'Most dashboards fail because they\'re designed by engineers, not decision-makers. We design and build production-grade dashboards in Power BI, Tableau, or custom React — with real data connections, interactive filters, and a layout reviewed against actual user workflows before delivery.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 50,  suffix: '+', label: 'Dashboards Delivered', iconName: 'BarChart3', color: COLORS.primary  },
      { target: 3,   suffix: 'x', label: 'Faster Decisions',     iconName: 'Zap',       color: COLORS.gold     },
      { target: 99,  suffix: '%', label: 'Data Accuracy',        iconName: 'Activity',  color: COLORS.action   },
      { target: 100, suffix: '%', label: 'Code Ownership',       iconName: 'Shield',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Layout',     title: 'Executive Dashboards',       color: COLORS.primary,   desc: 'Board-level views with traffic-light KPIs, trend lines, and variance explanations. Designed for a 30-second scan.' },
      { iconName: 'Activity',   title: 'Operational Dashboards',     color: COLORS.action,    desc: 'Real-time or near-real-time ops views: queue depth, SLA tracking, incident status, and drill-through to root cause.' },
      { iconName: 'TrendingUp', title: 'Sales & Revenue Analytics',  color: COLORS.accent,    desc: 'Pipeline health, quota attainment, cohort revenue, and product-mix views connected live to your CRM and ERP.' },
      { iconName: 'Users',      title: 'Customer & Product Metrics', color: COLORS.secondary, desc: 'Retention curves, NPS trends, feature adoption funnels, and customer lifetime value broken down by segment.' },
      { iconName: 'Globe',      title: 'Marketing Attribution',      color: COLORS.gold,      desc: 'Cross-channel spend, CAC by source, campaign ROI, and last-touch vs multi-touch attribution comparisons.' },
      { iconName: 'Database',   title: 'Custom React Dashboards',    color: COLORS.cyan,      desc: 'When BI tools hit their limits, we build fully custom React dashboards with D3, Recharts, or ECharts — no vendor lock-in.' },
    ],

    process: [
      { step: '01', title: 'Requirements & Wireframing',  desc: 'User interviews and a wireframe review before any live data is connected. Changes are cheap at this stage.' },
      { step: '02', title: 'Data Modelling',              desc: 'Semantic layer, calculated measures, and optimised queries that ensure every chart loads in under 3 seconds.' },
      { step: '03', title: 'Build & Review Cycle',        desc: 'Interactive prototype delivered, feedback gathered, and a final round of refinements before handoff.' },
      { step: '04', title: 'Deployment & Training',       desc: 'Published to your workspace with access controls configured, documentation written, and a walkthrough session.' },
    ],

    deliverables: [
      'Production dashboard (Power BI / Tableau / React)',
      'Data model documentation',
      'Calculated measures + column definitions',
      'Row-level security configuration',
      'User guide and training recording',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Power BI',   color: COLORS.primary  },
      { label: 'Tableau',    color: COLORS.action   },
      { label: 'Looker',     color: COLORS.accent   },
      { label: 'React',      color: COLORS.secondary },
      { label: 'D3.js',      color: COLORS.gold     },
      { label: 'Recharts',   color: COLORS.cyan     },
      { label: 'SQL',        color: COLORS.primary  },
      { label: 'dbt',        color: COLORS.action   },
    ],

    tiers: [
      { name: 'Single Dashboard',  price: 'From $2,500', featured: false,
        desc:     'One focused dashboard with up to 3 live data connections.',
        features: ['Wireframe + build', 'Up to 3 data sources', 'Interactive filters', '2–3 week delivery'] },
      { name: 'Dashboard Suite',   price: 'From $6,000', featured: true,
        desc:     'Full suite (3–6 dashboards) covering exec, ops, and analyst views.',
        features: ['Up to 6 dashboards', 'Shared data model', 'RLS security setup', 'Training session', '30-day support'] },
      { name: 'Custom React App',  price: 'Custom',      featured: false,
        desc:     'Fully bespoke analytics application with no BI tool constraints.',
        features: ['Custom UI components', 'API-driven data layer', 'White-label ready', 'Full source code', 'SLA available'] },
    ],
  },

  // ── 3. KPI Frameworks ─────────────────────────────────────────────────────
  'kpi': {
    id:          'kpi',
    title:       'KPI Frameworks',
    tagline:     'The right metrics, agreed, documented, and owned.',
    badge:       'Business Intelligence',
    accentColor: COLORS.accent,
    heroDesc:    'Disagreements about metrics waste more analyst time than bad data. We run a structured KPI design process — from business objective mapping to definition sign-off — and deliver a living KPI framework document that becomes the single source of truth for every dashboard and report your team builds.',
    tags:        ['Fixed-Fee Projects', 'Full Documentation'],

    stats: [
      { target: 70,  suffix: '%', label: 'Reduction in Metric Disputes', iconName: 'Activity',  color: COLORS.accent   },
      { target: 40,  suffix: '+', label: 'KPI Frameworks Delivered',     iconName: 'FileText',  color: COLORS.action   },
      { target: 2,   suffix: 'x', label: 'Faster Report Build',          iconName: 'Zap',       color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Stakeholder Alignment',        iconName: 'Users',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'GitBranch',  title: 'Objective → Metric Mapping',  color: COLORS.accent,    desc: 'We trace every metric back to a board-level objective so the team always knows why a number exists.' },
      { iconName: 'FileText',   title: 'Metric Definition Templates',  color: COLORS.action,    desc: 'Name, formula, data source, owner, refresh cadence, and target — standardised for every KPI.' },
      { iconName: 'Layers',     title: 'North Star Framework',         color: COLORS.primary,   desc: 'One primary metric that unifies the company, with a structured input-metric tree below it.' },
      { iconName: 'Users',      title: 'Stakeholder Workshops',        color: COLORS.secondary, desc: 'Facilitated sessions that surface disagreements on definitions early — before they invalidate a dashboard.' },
      { iconName: 'Shield',     title: 'Metric Governance Policy',     color: COLORS.gold,      desc: 'Approval process for adding or changing metrics, version history, and deprecation policy.' },
      { iconName: 'Activity',   title: 'Target-Setting Templates',     color: COLORS.cyan,      desc: 'Statistical baselines, seasonality adjustments, and board-aligned target bands for each KPI.' },
    ],

    process: [
      { step: '01', title: 'Business Objective Mapping', desc: 'Interview executives to document strategic objectives, then map the decisions each team needs to make.' },
      { step: '02', title: 'KPI Discovery Workshops',    desc: 'Cross-functional sessions to surface candidate metrics, resolve conflicts, and agree on definitions.' },
      { step: '03', title: 'Framework Documentation',    desc: 'Complete metric dictionary with formulas, owners, sources, and target logic in a shareable format.' },
      { step: '04', title: 'Validation & Sign-off',      desc: 'Walkthrough with all stakeholders, final amendments, and a governance process for future changes.' },
    ],

    deliverables: [
      'KPI framework document (Notion / Confluence / PDF)',
      'Metric definition templates for each KPI',
      'North Star metric + input-tree diagram',
      'Stakeholder alignment workshop outputs',
      'Target-setting methodology guide',
      'Governance policy for metric changes',
    ],

    techStack: [
      { label: 'Notion',      color: COLORS.accent   },
      { label: 'Confluence',  color: COLORS.action   },
      { label: 'Miro',        color: COLORS.primary  },
      { label: 'Google Sheets', color: COLORS.secondary },
      { label: 'dbt Metrics', color: COLORS.gold     },
      { label: 'LookML',      color: COLORS.cyan     },
      { label: 'Power BI',    color: COLORS.accent   },
      { label: 'Tableau',     color: COLORS.action   },
    ],

    tiers: [
      { name: 'Metric Audit',     price: 'From $2,000', featured: false,
        desc:     'Review of existing metrics: gaps, conflicts, and a clean-up plan.',
        features: ['Metric inventory', 'Conflict identification', 'Recommendations report', '1 week turnaround'] },
      { name: 'KPI Framework',    price: 'From $4,500', featured: true,
        desc:     'Full framework design with workshops, definitions, and governance.',
        features: ['Stakeholder workshops', 'Complete metric dictionary', 'North Star framework', 'Target-setting guide', 'Governance policy'] },
      { name: 'Embedded Metrics', price: 'Custom',      featured: false,
        desc:     'KPI framework embedded directly into your BI tool as certified datasets.',
        features: ['dbt / LookML implementation', 'Certified metrics layer', 'Dashboard integration', 'Ongoing governance support'] },
    ],
  },

  // ── 4. Self-Serve Analytics ───────────────────────────────────────────────
  'self-serve': {
    id:          'self-serve',
    title:       'Self-Serve Analytics',
    tagline:     'Empower every analyst to answer their own questions.',
    badge:       'Business Intelligence',
    accentColor: COLORS.secondary,
    heroDesc:    'Self-serve fails when the data model is wrong, the tool is over-complicated, or the training was a single Zoom call. We design self-serve analytics environments that analysts actually use — with clean semantic layers, governed datasets, embedded documentation, and training programmes that build lasting capability.',
    tags:        ['Fixed-Fee Projects', 'Team Training Included'],

    stats: [
      { target: 80,  suffix: '%', label: 'Reduction in Ad-hoc Requests', iconName: 'Activity',  color: COLORS.secondary },
      { target: 30,  suffix: '+', label: 'Teams Enabled',                iconName: 'Users',     color: COLORS.action   },
      { target: 5,   suffix: 'x', label: 'Analyst Throughput',           iconName: 'Zap',       color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Training Included',            iconName: 'Shield',    color: COLORS.primary  },
    ],

    features: [
      { iconName: 'Layers',     title: 'Semantic Layer Design',       color: COLORS.secondary, desc: 'A single, governed translation layer between raw database tables and business-friendly metric names every analyst can query.' },
      { iconName: 'Database',   title: 'Certified Dataset Library',   color: COLORS.action,    desc: 'Pre-built datasets with business definitions embedded — analysts start from trusted data, not raw tables.' },
      { iconName: 'Search',     title: 'Data Discovery Catalogue',    color: COLORS.accent,    desc: 'Searchable catalogue of available datasets, field definitions, and example queries so analysts know what exists.' },
      { iconName: 'Users',      title: 'Analyst Training Programme',  color: COLORS.primary,   desc: 'Role-based training: from basic exploration to advanced calculated fields — built around your actual data and tools.' },
      { iconName: 'Shield',     title: 'Row-Level Security',          color: COLORS.gold,      desc: 'Data access policies that let the right people see the right data without requiring analyst-specific report builds.' },
      { iconName: 'Activity',   title: 'Usage Analytics',             color: COLORS.cyan,      desc: 'Dashboards that track what data is being used, by whom, and which certified datasets need refreshing or deprecation.' },
    ],

    process: [
      { step: '01', title: 'Analyst Needs Assessment',   desc: 'Interviews with power users and data consumers to understand the questions they need to answer independently.' },
      { step: '02', title: 'Semantic Layer Build',        desc: 'Data model, certified datasets, and metric definitions built and validated against real analyst queries.' },
      { step: '03', title: 'Tool Configuration',          desc: 'Self-serve environment configured in your BI tool with access controls, templates, and discovery catalogue.' },
      { step: '04', title: 'Training & Enablement',       desc: 'Structured training sessions, quick-reference documentation, and a 30-day office-hours support period.' },
    ],

    deliverables: [
      'Semantic layer / certified dataset library',
      'Data discovery catalogue',
      'Row-level security configuration',
      'Analyst training materials (slides + recordings)',
      'Quick-reference cheat sheet',
      'Usage analytics dashboard',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Power BI',   color: COLORS.secondary },
      { label: 'Tableau',    color: COLORS.action   },
      { label: 'Looker',     color: COLORS.accent   },
      { label: 'dbt',        color: COLORS.primary  },
      { label: 'Atlan',      color: COLORS.gold     },
      { label: 'Collibra',   color: COLORS.cyan     },
      { label: 'Notion',     color: COLORS.secondary },
      { label: 'SQL',        color: COLORS.action   },
    ],

    tiers: [
      { name: 'Semantic Layer',     price: 'From $4,000', featured: false,
        desc:     'Certified dataset library and semantic layer for your existing BI tool.',
        features: ['Semantic layer build', 'Dataset documentation', 'Access controls', '3–4 week delivery'] },
      { name: 'Self-Serve Platform', price: 'From $8,000', featured: true,
        desc:     'Full self-serve environment with training and discovery catalogue.',
        features: ['Semantic layer', 'Discovery catalogue', 'Analyst training programme', 'Usage analytics', '30-day support'] },
      { name: 'Enterprise Enablement', price: 'Custom',   featured: false,
        desc:     'Organisation-wide self-serve rollout with governance and adoption management.',
        features: ['Multi-department rollout', 'Governance framework', 'Change management support', 'Ongoing training retainer'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 2 — STATISTICAL METHODS
  // ══════════════════════════════════════════════════════════════════════════

  // ── 5. Statistical Analysis ───────────────────────────────────────────────
  'statistical': {
    id:          'statistical',
    title:       'Statistical Analysis',
    tagline:     'Rigorous methodology. Plain-language conclusions.',
    badge:       'Statistical Methods',
    accentColor: COLORS.action,
    heroDesc:    'Business decisions made on bad statistics are often worse than decisions made on instinct. We run rigorous statistical analyses — hypothesis tests, regression, survival analysis, segmentation — with proper methodology documentation and results written for non-statisticians who still need to act on the findings.',
    tags:        ['Fixed-Fee Projects', 'Methodology Documented'],

    stats: [
      { target: 100, suffix: '+', label: 'Analyses Completed',   iconName: 'BarChart3',  color: COLORS.action   },
      { target: 95,  suffix: '%', label: 'Confidence Intervals', iconName: 'Activity',   color: COLORS.primary  },
      { target: 2,   suffix: 'x', label: 'Faster Insights',      iconName: 'Zap',        color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Reproducible',         iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'BarChart3',  title: 'Hypothesis Testing',       color: COLORS.action,    desc: 'T-tests, chi-square, ANOVA, Mann-Whitney — correctly selected for data type and sample characteristics, with power analysis before you run.' },
      { iconName: 'TrendingUp', title: 'Regression Analysis',      color: COLORS.primary,   desc: 'Linear, logistic, Poisson, and mixed-effects models. Interpretable coefficients with confidence intervals and assumption checks documented.' },
      { iconName: 'Layers',     title: 'Customer Segmentation',    color: COLORS.accent,    desc: 'K-means, hierarchical clustering, and LCA — with actionable segment descriptions, not just cluster labels.' },
      { iconName: 'Activity',   title: 'Survival & Cohort Analysis',color: COLORS.secondary, desc: 'Kaplan-Meier curves, Cox proportional hazards, and cohort retention tables. Standard in SaaS and healthcare analytics.' },
      { iconName: 'Search',     title: 'Correlation & Attribution', color: COLORS.gold,      desc: 'Understanding what drives outcomes — with appropriate caveats about causation and control for confounders.' },
      { iconName: 'FileText',   title: 'Reporting & Interpretation',color: COLORS.cyan,      desc: 'Every analysis delivered with a plain-language summary, visualisations, and recommendations — not just p-values.' },
    ],

    process: [
      { step: '01', title: 'Question Framing',       desc: 'We translate the business question into a precise statistical hypothesis before any data is touched.' },
      { step: '02', title: 'Data Preparation',        desc: 'Exploratory analysis, outlier review, missing data assessment, and the specific cleaning steps for the analysis type.' },
      { step: '03', title: 'Analysis & Validation',   desc: 'Method applied with assumption checks documented. Sensitivity analyses run to validate robustness of conclusions.' },
      { step: '04', title: 'Results & Recommendations', desc: 'Findings report with plain-language summary, key charts, confidence intervals, and a clear "what to do next" section.' },
    ],

    deliverables: [
      'Statistical analysis report with methodology notes',
      'R or Python analysis scripts (fully reproducible)',
      'Key visualisations (publication-quality)',
      'Assumption checks and sensitivity analysis',
      'Plain-language executive summary',
      '30-day support for follow-up questions',
    ],

    techStack: [
      { label: 'Python',      color: COLORS.action   },
      { label: 'R',           color: COLORS.primary  },
      { label: 'Statsmodels', color: COLORS.accent   },
      { label: 'SciPy',       color: COLORS.secondary },
      { label: 'Pandas',      color: COLORS.gold     },
      { label: 'ggplot2',     color: COLORS.cyan     },
      { label: 'Matplotlib',  color: COLORS.action   },
      { label: 'Jupyter',     color: COLORS.primary  },
    ],

    tiers: [
      { name: 'Focused Analysis',  price: 'From $2,500', featured: false,
        desc:     'One analytical question answered rigorously with full documentation.',
        features: ['Single analysis', 'Assumption checks', 'Results report', '1–2 week turnaround'] },
      { name: 'Research Package',  price: 'From $5,500', featured: true,
        desc:     'Multi-method study with segmentation, regression, and executive reporting.',
        features: ['Multiple analysis types', 'Segmentation + regression', 'Executive summary', 'Visualisations', '30-day support'] },
      { name: 'Ongoing Analytics', price: 'Custom',      featured: false,
        desc:     'Embedded statistical analyst on retainer for monthly analysis needs.',
        features: ['Monthly analysis quota', 'Prioritised turnaround', 'Direct analyst access', 'Cumulative methodology docs'] },
    ],
  },

  // ── 6. Causal Inference ───────────────────────────────────────────────────
  'causal': {
    id:          'causal',
    title:       'Causal Inference',
    tagline:     "Prove what's actually driving outcomes — not just correlation.",
    badge:       'Statistical Methods',
    accentColor: COLORS.primary,
    heroDesc:    'Correlation tells you what moves together. Causal inference tells you what to change. We apply difference-in-differences, instrumental variables, regression discontinuity, and synthetic control methods to observational data — producing causal estimates that justify investment decisions without requiring a randomised experiment.',
    tags:        ['Fixed-Fee Projects', 'Methodology Documented'],

    stats: [
      { target: 30,  suffix: '+', label: 'Causal Studies Delivered', iconName: 'Activity',  color: COLORS.primary  },
      { target: 3,   suffix: 'x', label: 'Better Investment Decisions', iconName: 'TrendingUp', color: COLORS.gold },
      { target: 95,  suffix: '%', label: 'Confidence on Estimates',   iconName: 'BarChart3', color: COLORS.action   },
      { target: 100, suffix: '%', label: 'Reproducible Methods',      iconName: 'Shield',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'GitBranch',  title: 'Difference-in-Differences',    color: COLORS.primary,   desc: 'Before/after comparisons with control groups. The workhorse of causal policy evaluation — applied correctly with parallel trend validation.' },
      { iconName: 'Activity',   title: 'Regression Discontinuity',     color: COLORS.action,    desc: 'Exploit thresholds (eligibility cutoffs, score bands) to estimate causal effects where randomisation was impossible.' },
      { iconName: 'Layers',     title: 'Synthetic Control',            color: COLORS.accent,    desc: 'Build a data-driven counterfactual for treated units using a weighted combination of control units. Powerful for single-unit interventions.' },
      { iconName: 'Search',     title: 'Instrumental Variables',       color: COLORS.secondary, desc: 'Address unobserved confounding using valid instruments — applied where DiD and RD designs are not available.' },
      { iconName: 'TrendingUp', title: 'Propensity Score Methods',     color: COLORS.gold,      desc: 'Matching and inverse probability weighting to construct comparable treatment and control groups from observational data.' },
      { iconName: 'FileText',   title: 'Causal Impact Reporting',      color: COLORS.cyan,      desc: 'Every causal study delivered with assumption documentation, robustness checks, and business-language interpretation of effect sizes.' },
    ],

    process: [
      { step: '01', title: 'Study Design',              desc: 'Define the causal question, identify the intervention, select the method, and assess data requirements before any analysis.' },
      { step: '02', title: 'Data Preparation & Checks', desc: 'Parallel trends testing, balance checks, placebo tests, and data quality validation specific to the chosen design.' },
      { step: '03', title: 'Estimation & Robustness',   desc: 'Primary causal estimate produced alongside robustness checks, sensitivity analyses, and placebo regressions.' },
      { step: '04', title: 'Interpretation & Reporting', desc: 'Effect size, uncertainty, and business implications translated into a decision-ready report with visualisations.' },
    ],

    deliverables: [
      'Causal study report with methodology documentation',
      'Primary causal estimate with confidence intervals',
      'Robustness and placebo test results',
      'Reproducible R / Python codebase',
      'Plain-language business interpretation',
      '30-day support for stakeholder questions',
    ],

    techStack: [
      { label: 'R',           color: COLORS.primary  },
      { label: 'Python',      color: COLORS.action   },
      { label: 'CausalImpact',color: COLORS.accent   },
      { label: 'DoubleML',    color: COLORS.secondary },
      { label: 'Statsmodels', color: COLORS.gold     },
      { label: 'EconML',      color: COLORS.cyan     },
      { label: 'pandas',      color: COLORS.primary  },
      { label: 'Jupyter',     color: COLORS.action   },
    ],

    tiers: [
      { name: 'Causal Study',       price: 'From $4,000', featured: false,
        desc:     'One causal question answered using the most appropriate quasi-experimental design.',
        features: ['Method selection', 'Assumption checks', 'Effect estimate', 'Results report', '2–3 week turnaround'] },
      { name: 'Policy Evaluation',  price: 'From $8,000', featured: true,
        desc:     'Full causal evaluation with multiple methods, robustness checks, and stakeholder reporting.',
        features: ['Primary + robustness methods', 'Placebo tests', 'Sensitivity analysis', 'Executive presentation', '30-day support'] },
      { name: 'Research Programme', price: 'Custom',      featured: false,
        desc:     'Multi-study causal research programme with ongoing measurement.',
        features: ['Multiple intervention evaluations', 'Consistent methodology', 'Knowledge base build', 'Retainer pricing'] },
    ],
  },

  // ── 7. Experimentation Design ─────────────────────────────────────────────
  'experimentation': {
    id:          'experimentation',
    title:       'Experimentation Design',
    tagline:     'Experiments that actually answer the question you asked.',
    badge:       'Statistical Methods',
    accentColor: COLORS.accent,
    heroDesc:    'Poorly designed experiments waste months of engineering effort. We design statistically sound experiments — from power calculations to assignment strategy to guardrail metrics — and build the analysis infrastructure so results are trustworthy and decisions follow automatically from evidence.',
    tags:        ['Fixed-Fee Projects', 'Infrastructure Included'],

    stats: [
      { target: 60,  suffix: '+', label: 'Experiments Designed',    iconName: 'Activity',  color: COLORS.accent   },
      { target: 40,  suffix: '%', label: 'Avg Lift Discovered',     iconName: 'TrendingUp',color: COLORS.gold     },
      { target: 99,  suffix: '%', label: 'Statistical Validity',    iconName: 'Shield',    color: COLORS.action   },
      { target: 100, suffix: '%', label: 'Documented Methodology',  iconName: 'FileText',  color: COLORS.secondary },
    ],

    features: [
      { iconName: 'BarChart3',  title: 'Power & Sample Size Analysis', color: COLORS.accent,   desc: 'Pre-experiment power calculations that prevent underpowered tests — the single biggest source of false negatives in business experimentation.' },
      { iconName: 'GitBranch',  title: 'Assignment & Randomisation',   color: COLORS.action,   desc: 'Hash-based bucketing, stratified randomisation, cluster assignment, and holdout group design for unbiased treatment allocation.' },
      { iconName: 'Layers',     title: 'Multi-Variant (MVT) Design',   color: COLORS.primary,  desc: 'Full-factorial and fractional factorial designs that test multiple hypotheses simultaneously without sacrificing statistical validity.' },
      { iconName: 'Activity',   title: 'Guardrail Metric System',      color: COLORS.secondary,desc: 'Automated guardrails that stop experiments causing regression on key business metrics before they reach significance on the primary metric.' },
      { iconName: 'Database',   title: 'Analysis Pipeline',            color: COLORS.gold,     desc: 'Sequential analysis, Bayesian updating, and CUPED variance reduction methods that shorten experiments without inflating error rates.' },
      { iconName: 'FileText',   title: 'Experiment Registry',          color: COLORS.cyan,     desc: 'Centralised experiment tracking so learnings accumulate — and teams don\'t accidentally run conflicting tests on the same population.' },
    ],

    process: [
      { step: '01', title: 'Hypothesis & Metric Design', desc: 'Define the causal hypothesis, primary metric, guardrails, and minimum detectable effect before any code is written.' },
      { step: '02', title: 'Power Analysis',              desc: 'Sample size calculation, expected run duration, and decision on frequentist vs Bayesian analysis approach.' },
      { step: '03', title: 'Infrastructure & Launch',     desc: 'Assignment logic, logging, and analysis pipeline built and tested in staging before the experiment goes live.' },
      { step: '04', title: 'Analysis & Decision',         desc: 'Results analysis with confidence intervals, CUPED adjustment, and a clear recommend/reject/iterate decision.' },
    ],

    deliverables: [
      'Experiment design document',
      'Power analysis with sample size calculator',
      'Assignment infrastructure code',
      'Analysis pipeline (Python / R)',
      'Results dashboard',
      'Results report with decision recommendation',
      '30-day post-experiment support',
    ],

    techStack: [
      { label: 'Python',      color: COLORS.accent   },
      { label: 'R',           color: COLORS.action   },
      { label: 'Statsmodels', color: COLORS.primary  },
      { label: 'PostgreSQL',  color: COLORS.secondary },
      { label: 'Redis',       color: COLORS.gold     },
      { label: 'Grafana',     color: COLORS.cyan     },
      { label: 'FastAPI',     color: COLORS.accent   },
      { label: 'Airflow',     color: COLORS.action   },
    ],

    tiers: [
      { name: 'Experiment Design',    price: 'From $5,000', featured: false,
        desc:     'Full experiment design document + power analysis for one experiment.',
        features: ['Hypothesis framing', 'Power analysis', 'Design document', '1–2 week turnaround'] },
      { name: 'Experiment Platform',  price: 'From $10,000', featured: true,
        desc:     'Infrastructure, analysis pipeline, and registry for ongoing experimentation.',
        features: ['Assignment infrastructure', 'Analysis pipeline', 'Guardrail system', 'Experiment registry', '30-day support'] },
      { name: 'Embedded Experimentation', price: 'Custom', featured: false,
        desc:     'Organisation-wide experimentation culture with coaching and tooling.',
        features: ['Platform + training', 'Experiment review process', 'Statistical governance', 'Retainer coaching'] },
    ],
  },

  // ── 8. Survey & Cohort Analysis ───────────────────────────────────────────
  'survey-cohort': {
    id:          'survey-cohort',
    title:       'Survey & Cohort Analysis',
    tagline:     'Understand your customers across time, not just a snapshot.',
    badge:       'Statistical Methods',
    accentColor: COLORS.secondary,
    heroDesc:    'Snapshot metrics lie. We design and analyse surveys with proper sampling and weighting, and build cohort analyses that reveal how retention, revenue, and engagement evolve across acquisition vintages — giving you the time-dimension insight that average metrics hide.',
    tags:        ['Fixed-Fee Projects', 'Full Methodology'],

    stats: [
      { target: 50,  suffix: '+', label: 'Cohort Studies Delivered', iconName: 'Users',     color: COLORS.secondary },
      { target: 30,  suffix: '+', label: 'Surveys Designed',         iconName: 'FileText',  color: COLORS.action   },
      { target: 90,  suffix: '%', label: 'Avg Response Accuracy',    iconName: 'Activity',  color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Documented Methodology',   iconName: 'Shield',    color: COLORS.primary  },
    ],

    features: [
      { iconName: 'FileText',  title: 'Survey Design & Sampling',    color: COLORS.secondary, desc: 'Questionnaire design with cognitive bias controls, sampling strategy, and weighting methodology for representative results.' },
      { iconName: 'Users',     title: 'Retention Cohort Analysis',   color: COLORS.action,    desc: 'Weekly, monthly, and annual retention curves by acquisition cohort — the essential diagnostic for any subscription or repeat-purchase business.' },
      { iconName: 'TrendingUp',title: 'Revenue Cohort Analysis',     color: COLORS.accent,    desc: 'LTV curves, payback period by cohort, and expansion revenue patterns that reveal whether unit economics are improving or deteriorating.' },
      { iconName: 'Activity',  title: 'NPS & Satisfaction Tracking', color: COLORS.primary,   desc: 'Longitudinal NPS and CSAT analysis with driver identification and segment comparison across product, channel, and region.' },
      { iconName: 'Search',    title: 'Feature Adoption Funnels',    color: COLORS.gold,      desc: 'Cohort-level feature adoption curves showing how quickly different user segments discover and retain new capabilities.' },
      { iconName: 'BarChart3', title: 'Longitudinal Reporting',      color: COLORS.cyan,      desc: 'Automated cohort dashboards that update with each new acquisition wave — no manual rebuilding of the same analysis monthly.' },
    ],

    process: [
      { step: '01', title: 'Study Design',            desc: 'Define the cohort definition, time window, metrics, and (for surveys) the population and sampling approach.' },
      { step: '02', title: 'Data Preparation',        desc: 'Event data cleaned, cohorts constructed, and edge cases (trial conversions, plan changes) handled explicitly.' },
      { step: '03', title: 'Analysis & Visualisation',desc: 'Cohort tables, retention curves, and revenue LTV charts built with consistent formatting for longitudinal reading.' },
      { step: '04', title: 'Insights & Automation',   desc: 'Key findings written up and cohort dashboard automated to refresh with each new acquisition period.' },
    ],

    deliverables: [
      'Cohort analysis report with annotated charts',
      'Retention and revenue cohort tables',
      'Survey instrument (if applicable)',
      'Automated cohort dashboard',
      'Plain-language insights summary',
      '30-day post-delivery support',
    ],

    techStack: [
      { label: 'Python',      color: COLORS.secondary },
      { label: 'R',           color: COLORS.action   },
      { label: 'SQL',         color: COLORS.accent   },
      { label: 'Tableau',     color: COLORS.primary  },
      { label: 'Power BI',    color: COLORS.gold     },
      { label: 'Qualtrics',   color: COLORS.cyan     },
      { label: 'Typeform',    color: COLORS.secondary },
      { label: 'dbt',         color: COLORS.action   },
    ],

    tiers: [
      { name: 'Cohort Report',      price: 'From $2,500', featured: false,
        desc:     'Cohort retention and revenue analysis for one product or segment.',
        features: ['Cohort table + curves', 'Written insights', 'Key visualisations', '1–2 week turnaround'] },
      { name: 'Full Study',         price: 'From $5,500', featured: true,
        desc:     'Cohort + survey study with automated dashboard and longitudinal tracking.',
        features: ['Cohort + survey design', 'Automated dashboard', 'Longitudinal reporting', 'Driver analysis', '30-day support'] },
      { name: 'Ongoing Measurement',price: 'Custom',      featured: false,
        desc:     'Monthly cohort reporting with quarterly deep-dive studies.',
        features: ['Monthly cohort refresh', 'Quarterly deep-dive', 'Benchmark tracking', 'Retainer pricing'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 3 — DATA ENGINEERING
  // ══════════════════════════════════════════════════════════════════════════

  // ── 9. Data Engineering ───────────────────────────────────────────────────
  'data-engineering': {
    id:          'data-engineering',
    title:       'Data Engineering',
    tagline:     'Reliable data infrastructure that analysts actually trust.',
    badge:       'Data Engineering',
    accentColor: COLORS.action,
    heroDesc:    'Analytics is only as good as the data beneath it. We design and build production-grade data infrastructure — ingestion pipelines, transformation layers, warehouse architecture, and orchestration — so your analysts spend time on insights, not debugging broken pipelines.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 60,  suffix: '+', label: 'Pipelines Delivered',   iconName: 'Database',  color: COLORS.action   },
      { target: 99,  suffix: '.9%', label: 'Pipeline Uptime',     iconName: 'Activity',  color: COLORS.primary  },
      { target: 5,   suffix: 'x', label: 'Faster Data Freshness', iconName: 'Zap',       color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',        iconName: 'Shield',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Database',   title: 'Data Warehouse Design',     color: COLORS.action,    desc: 'Dimensional modelling, schema design, and warehouse setup on Snowflake, BigQuery, or Redshift — optimised for analyst query patterns.' },
      { iconName: 'GitBranch',  title: 'Ingestion Pipeline Build',  color: COLORS.primary,   desc: 'Source-to-warehouse connectors for APIs, SaaS tools, databases, and files — with retries, error alerting, and full observability.' },
      { iconName: 'Layers',     title: 'dbt Transformation Layer',  color: COLORS.accent,    desc: 'SQL-based transformations in dbt with tests, documentation, and a DAG that non-engineers can understand and contribute to.' },
      { iconName: 'RefreshCw',  title: 'Orchestration & Scheduling',color: COLORS.secondary, desc: 'Airflow, Dagster, or Prefect DAGs that coordinate pipeline dependencies, retry logic, and SLA alerting.' },
      { iconName: 'Activity',   title: 'Pipeline Monitoring',       color: COLORS.gold,      desc: 'Freshness checks, row count anomaly detection, and schema change alerts so broken pipelines are caught before analysts notice.' },
      { iconName: 'Zap',        title: 'Performance Optimisation',  color: COLORS.cyan,      desc: 'Query cost analysis, partitioning strategy, and incremental model design that reduce warehouse costs by 40–60%.' },
    ],

    process: [
      { step: '01', title: 'Architecture Design',    desc: 'Source system mapping, warehouse selection, schema design, and a reference architecture document agreed before build starts.' },
      { step: '02', title: 'Ingestion & Staging',    desc: 'Source connectors built, raw data landed, and data quality checks applied at the ingestion layer.' },
      { step: '03', title: 'Transformation & Tests', desc: 'dbt models built from staging to mart layer, with >80% test coverage and documentation for every model.' },
      { step: '04', title: 'Handoff & Monitoring',   desc: 'Orchestration deployed, monitoring configured, runbooks written, and a knowledge-transfer session with your team.' },
    ],

    deliverables: [
      'Data warehouse schema + ERD documentation',
      'Ingestion pipeline codebase',
      'dbt project with tests and documentation',
      'Orchestration DAGs (Airflow / Dagster / Prefect)',
      'Pipeline monitoring configuration',
      'Runbook and on-call guide',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',     color: COLORS.action   },
      { label: 'dbt',        color: COLORS.primary  },
      { label: 'Snowflake',  color: COLORS.accent   },
      { label: 'BigQuery',   color: COLORS.secondary },
      { label: 'Airflow',    color: COLORS.gold     },
      { label: 'Fivetran',   color: COLORS.cyan     },
      { label: 'Dagster',    color: COLORS.action   },
      { label: 'Redshift',   color: COLORS.primary  },
    ],

    tiers: [
      { name: 'Pipeline Build',       price: 'From $5,000', featured: false,
        desc:     'One or two source pipelines landed into your warehouse with dbt transforms.',
        features: ['2 source pipelines', 'dbt staging + mart models', 'Basic monitoring', '3–4 week delivery'] },
      { name: 'Data Platform',        price: 'From $12,000', featured: true,
        desc:     'Full data warehouse with all core sources, orchestration, and monitoring.',
        features: ['Unlimited sources', 'Full dbt project', 'Orchestration + monitoring', 'Runbook + training', '30-day support'] },
      { name: 'Enterprise Foundation',price: 'Custom',       featured: false,
        desc:     'Enterprise-grade platform with multi-region, SLA, and governance.',
        features: ['Multi-cloud/region setup', 'Cost optimisation', 'HIPAA / GDPR readiness', 'SLA agreement', 'Dedicated engineer'] },
    ],
  },

  // ── 10. ETL / ELT Pipelines ───────────────────────────────────────────────
  'etl': {
    id:          'etl',
    title:       'ETL / ELT Pipelines',
    tagline:     'Data that arrives on time, in shape, and ready to use.',
    badge:       'Data Engineering',
    accentColor: COLORS.primary,
    heroDesc:    'ETL failures are silent — analysts just work with stale or wrong data without knowing it. We build reliable ETL/ELT pipelines with comprehensive testing, alerting, and observability so data quality issues are caught and resolved before they reach a dashboard.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 100, suffix: '+', label: 'Pipelines Built',       iconName: 'Database', color: COLORS.primary  },
      { target: 99,  suffix: '%', label: 'Pipeline Reliability',  iconName: 'Shield',   color: COLORS.action   },
      { target: 70,  suffix: '%', label: 'Avg Cost Reduction',    iconName: 'TrendingUp',color: COLORS.gold    },
      { target: 100, suffix: '%', label: 'Test Coverage',         iconName: 'Activity', color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Database',  title: 'API & SaaS Ingestion',       color: COLORS.primary,   desc: 'REST and GraphQL connectors for Salesforce, HubSpot, Stripe, Google Analytics, and 50+ other SaaS tools — built or managed.' },
      { iconName: 'Layers',    title: 'Database Replication (CDC)', color: COLORS.action,    desc: 'Change data capture from Postgres, MySQL, and SQL Server — incremental, low-latency, and without locking production tables.' },
      { iconName: 'Zap',       title: 'Incremental Load Patterns',  color: COLORS.accent,    desc: 'Watermark-based, CDC, and partition-based incremental strategies that minimise compute cost and data latency.' },
      { iconName: 'Shield',    title: 'Schema Evolution Handling',  color: COLORS.secondary, desc: 'Automatic schema detection, backward-compatible migrations, and breaking-change alerts before they cause downstream failures.' },
      { iconName: 'Activity',  title: 'Pipeline Observability',     color: COLORS.gold,      desc: 'Row count checks, freshness SLA alerts, null rate monitoring, and a dashboard showing every pipeline\'s health at a glance.' },
      { iconName: 'RefreshCw', title: 'Managed Connector Audit',    color: COLORS.cyan,      desc: 'Review and optimise existing Fivetran, Airbyte, or Stitch connectors — reducing cost and improving reliability without a rebuild.' },
    ],

    process: [
      { step: '01', title: 'Source Inventory',      desc: 'Catalogue all source systems, assess API limits, latency requirements, and volumes before choosing ingestion patterns.' },
      { step: '02', title: 'Pipeline Architecture', desc: 'Ingestion pattern selection, schema design, error-handling strategy, and monitoring spec agreed in writing.' },
      { step: '03', title: 'Build & Test',           desc: 'Pipeline built with unit tests, integration tests, and a full DR runbook. Deployed in staging and validated before production.' },
      { step: '04', title: 'Monitoring & Handoff',   desc: 'Observability configured, alerting routed to your on-call system, and a handoff session with your data team.' },
    ],

    deliverables: [
      'ETL/ELT pipeline codebase',
      'Schema documentation and ERD',
      'Test suite (unit + integration)',
      'Observability dashboard',
      'Alerting configuration',
      'Runbook and incident playbook',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',    color: COLORS.primary  },
      { label: 'Airbyte',   color: COLORS.action   },
      { label: 'Fivetran',  color: COLORS.accent   },
      { label: 'dbt',       color: COLORS.secondary },
      { label: 'Debezium',  color: COLORS.gold     },
      { label: 'Kafka',     color: COLORS.cyan     },
      { label: 'Airflow',   color: COLORS.primary  },
      { label: 'Great Expectations', color: COLORS.action },
    ],

    tiers: [
      { name: 'Pipeline Starter', price: 'From $3,500', featured: false,
        desc:     '2–3 source pipelines with basic testing and monitoring.',
        features: ['3 source connectors', 'Schema documentation', 'Basic monitoring', '2–3 week turnaround'] },
      { name: 'Full Pipeline Suite', price: 'From $8,000', featured: true,
        desc:     'All core source pipelines with comprehensive testing and observability.',
        features: ['Unlimited sources', 'Full test suite', 'Observability dashboard', 'Incident playbook', '30-day support'] },
      { name: 'Enterprise Ingestion', price: 'Custom',     featured: false,
        desc:     'High-volume, low-latency ingestion with SLA-backed reliability.',
        features: ['CDC + streaming', 'Sub-minute latency', 'HIPAA / GDPR readiness', 'SLA agreement', 'Dedicated engineer'] },
    ],
  },

  // ── 11. Data Lakes & Warehouses ───────────────────────────────────────────
  'data-lakes': {
    id:          'data-lakes',
    title:       'Data Lakes & Warehouses',
    tagline:     'The right storage architecture for your data volume and use-case.',
    badge:       'Data Engineering',
    accentColor: COLORS.accent,
    heroDesc:    'The choice between a data lake, warehouse, or lakehouse is not one-size-fits-all. We design and implement the right architecture for your scale, query patterns, and budget — whether that\'s a lean Snowflake warehouse or a Databricks lakehouse processing petabytes of semi-structured data.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 40,  suffix: '+', label: 'Warehouses Built',      iconName: 'Database',  color: COLORS.accent   },
      { target: 60,  suffix: '%', label: 'Avg Cost Reduction',    iconName: 'TrendingUp',color: COLORS.gold     },
      { target: 10,  suffix: 'x', label: 'Faster Query Performance', iconName: 'Zap',    color: COLORS.action   },
      { target: 100, suffix: '%', label: 'Architecture Ownership', iconName: 'Shield',   color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Database',   title: 'Cloud Data Warehouse',      color: COLORS.accent,    desc: 'Snowflake, BigQuery, or Redshift — provisioned, optimised, and with cost controls in place from day one.' },
      { iconName: 'Layers',     title: 'Data Lake Architecture',    color: COLORS.action,    desc: 'S3 / GCS / ADLS-based lakes with Delta Lake or Apache Iceberg table format for reliable ACID transactions on object storage.' },
      { iconName: 'Zap',        title: 'Lakehouse Design',          color: COLORS.primary,   desc: 'Databricks or Apache Spark-based lakehouses that unify batch and streaming on a single platform with warehouse-quality query performance.' },
      { iconName: 'Activity',   title: 'Performance Optimisation',  color: COLORS.secondary, desc: 'Partitioning, clustering, materialised views, and query profiling that reduce costs and accelerate analyst query times.' },
      { iconName: 'Shield',     title: 'Cost Management',           color: COLORS.gold,      desc: 'Warehouse credit alerts, idle compute shutdown, and a cost attribution framework that identifies which teams and workloads are expensive.' },
      { iconName: 'GitBranch',  title: 'Migration Services',        color: COLORS.cyan,      desc: 'Lift-and-shift or re-architect migrations from on-prem SQL Server/Oracle to cloud warehouses — with zero downtime cutover planning.' },
    ],

    process: [
      { step: '01', title: 'Architecture Assessment',  desc: 'Volume, velocity, variety, and query-pattern analysis to select the right storage technology and cost model.' },
      { step: '02', title: 'Design & Sizing',           desc: 'Schema design, cluster sizing, partition strategy, and cost forecast agreed before any infrastructure is provisioned.' },
      { step: '03', title: 'Build & Migrate',           desc: 'Infrastructure provisioned, data migrated with validation checks, and performance benchmarked against agreed SLAs.' },
      { step: '04', title: 'Optimise & Handoff',        desc: 'Cost controls configured, monitoring deployed, and a full architecture runbook handed to your team.' },
    ],

    deliverables: [
      'Architecture design document',
      'Provisioned and configured warehouse / lake',
      'Schema documentation and ERD',
      'Cost management configuration',
      'Performance optimisation report',
      'Architecture runbook',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Snowflake',   color: COLORS.accent   },
      { label: 'BigQuery',    color: COLORS.action   },
      { label: 'Databricks',  color: COLORS.primary  },
      { label: 'Delta Lake',  color: COLORS.secondary },
      { label: 'Apache Iceberg', color: COLORS.gold  },
      { label: 'dbt',         color: COLORS.cyan     },
      { label: 'Terraform',   color: COLORS.accent   },
      { label: 'AWS / GCP',   color: COLORS.action   },
    ],

    tiers: [
      { name: 'Warehouse Setup',    price: 'From $6,000', featured: false,
        desc:     'Cloud data warehouse provisioned, configured, and documented.',
        features: ['Warehouse provisioning', 'Schema design', 'Cost controls', '3–4 week delivery'] },
      { name: 'Data Platform Build', price: 'From $14,000', featured: true,
        desc:     'Full data platform with ingestion, transformation, and optimisation.',
        features: ['Warehouse + ingestion', 'dbt transformation', 'Performance optimisation', 'Cost management', '30-day support'] },
      { name: 'Lakehouse Architecture', price: 'Custom',  featured: false,
        desc:     'Enterprise lakehouse for large-scale, multi-workload data needs.',
        features: ['Lakehouse design', 'Petabyte-scale support', 'ML + analytics workloads', 'SLA agreement'] },
    ],
  },

  // ── 12. Real-time Streaming ───────────────────────────────────────────────
  'streaming': {
    id:          'streaming',
    title:       'Real-time Streaming',
    tagline:     'Sub-minute data freshness without the operational complexity.',
    badge:       'Data Engineering',
    accentColor: COLORS.secondary,
    heroDesc:    'Real-time analytics is often overkill — and often critical. We assess whether streaming is the right solution for your use-case, then design and build Kafka or Kinesis-based pipelines that deliver sub-minute data freshness with the operational maturity to survive production.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 20,  suffix: '+', label: 'Streaming Systems Built', iconName: 'Zap',       color: COLORS.secondary },
      { target: 99,  suffix: '%', label: 'Pipeline Uptime',         iconName: 'Activity',  color: COLORS.action   },
      { target: 30,  suffix: 's', label: 'Avg Latency Achieved',    iconName: 'RefreshCw', color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',          iconName: 'Shield',    color: COLORS.primary  },
    ],

    features: [
      { iconName: 'Zap',       title: 'Kafka Streaming Pipelines',  color: COLORS.secondary, desc: 'Event-driven data pipelines on Apache Kafka — with schema registry, consumer group management, and exactly-once semantics.' },
      { iconName: 'Activity',  title: 'Stream Processing (Flink)',  color: COLORS.action,    desc: 'Stateful stream processing with Apache Flink for aggregations, sessionisation, and complex event pattern matching.' },
      { iconName: 'Database',  title: 'Real-time Analytics Store',  color: COLORS.accent,    desc: 'Apache Druid, ClickHouse, or Pinot for sub-second query performance on streaming event data at scale.' },
      { iconName: 'Layers',    title: 'Lambda Architecture',        color: COLORS.primary,   desc: 'Hybrid batch + streaming architectures that serve both real-time dashboards and historical analysis from a unified data model.' },
      { iconName: 'RefreshCw', title: 'Change Data Capture (CDC)',  color: COLORS.gold,      desc: 'Debezium-based CDC that streams database changes to downstream consumers without impacting production database performance.' },
      { iconName: 'Shield',    title: 'Streaming Observability',    color: COLORS.cyan,      desc: 'Consumer lag monitoring, throughput dashboards, and automated backpressure alerts so streaming issues are caught in seconds.' },
    ],

    process: [
      { step: '01', title: 'Use-Case Assessment',     desc: 'Honest evaluation of whether real-time is necessary — latency requirements, volume, and cost analysis before architecture design.' },
      { step: '02', title: 'Streaming Architecture',  desc: 'Topic design, consumer group strategy, state management, and fault-tolerance approach documented before build.' },
      { step: '03', title: 'Build & Load Test',       desc: 'Pipeline built, integration tested, and load-tested at 2x expected peak throughput before production deployment.' },
      { step: '04', title: 'Monitoring & Handoff',    desc: 'Consumer lag dashboards, alerting, runbooks, and a knowledge-transfer session with your engineering team.' },
    ],

    deliverables: [
      'Streaming pipeline codebase',
      'Architecture and topology documentation',
      'Schema registry configuration',
      'Consumer lag monitoring dashboard',
      'Load test results report',
      'Runbook and incident playbook',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Apache Kafka',   color: COLORS.secondary },
      { label: 'Apache Flink',   color: COLORS.action   },
      { label: 'Debezium',       color: COLORS.accent   },
      { label: 'ClickHouse',     color: COLORS.primary  },
      { label: 'AWS Kinesis',    color: COLORS.gold     },
      { label: 'Kafka Streams',  color: COLORS.cyan     },
      { label: 'Grafana',        color: COLORS.secondary },
      { label: 'Kubernetes',     color: COLORS.action   },
    ],

    tiers: [
      { name: 'Streaming Starter',   price: 'From $8,000', featured: false,
        desc:     'One Kafka pipeline with basic stream processing and monitoring.',
        features: ['Kafka setup', 'Single pipeline', 'Basic monitoring', '4–5 week delivery'] },
      { name: 'Streaming Platform',  price: 'From $18,000', featured: true,
        desc:     'Full streaming platform with real-time analytics store and observability.',
        features: ['Multi-topic architecture', 'Stream processing', 'Real-time analytics store', 'Observability suite', '30-day support'] },
      { name: 'Enterprise Streaming',price: 'Custom',       featured: false,
        desc:     'High-throughput streaming at petabyte scale with SLA support.',
        features: ['Petabyte-scale design', 'Exactly-once semantics', 'Multi-region replication', 'SLA agreement'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 4 — DATA QUALITY & OPS
  // ══════════════════════════════════════════════════════════════════════════

  // ── 13. Data Quality Auditing ─────────────────────────────────────────────
  'quality': {
    id:          'quality',
    title:       'Data Quality Auditing',
    tagline:     'Fix the data before it breaks the dashboard — or the decision.',
    badge:       'Data Quality & Ops',
    accentColor: COLORS.action,
    heroDesc:    'Bad data costs more than no data. We conduct systematic data quality audits — completeness, accuracy, consistency, timeliness, and uniqueness — and deliver a prioritised remediation plan with automated quality checks that prevent regressions. Your dashboards become trustworthy again.',
    tags:        ['Fixed-Fee Projects', 'Automated Checks Included'],

    stats: [
      { target: 90,  suffix: '%', label: 'Avg Data Issues Resolved',  iconName: 'Activity', color: COLORS.action   },
      { target: 50,  suffix: '+', label: 'Audits Completed',          iconName: 'Search',   color: COLORS.primary  },
      { target: 3,   suffix: 'x', label: 'Faster Report Trust',       iconName: 'Zap',      color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Automated Checks Delivered', iconName: 'Shield',  color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Search',    title: 'Completeness Assessment',      color: COLORS.action,    desc: 'Null rate profiling across all tables and columns, with thresholds defined by business impact, not arbitrary percentages.' },
      { iconName: 'Activity',  title: 'Accuracy & Consistency Checks',color: COLORS.primary,   desc: 'Cross-system reconciliation, referential integrity checks, and format validation to surface data that silently diverges between sources.' },
      { iconName: 'RefreshCw', title: 'Timeliness & Freshness Audit', color: COLORS.accent,    desc: 'SLA-based freshness monitoring: every table tracked against its expected update window, with automated alerts on breach.' },
      { iconName: 'Database',  title: 'Uniqueness & Deduplication',   color: COLORS.secondary, desc: 'Duplicate detection at record and entity level, with a deduplication strategy suited to your data model.' },
      { iconName: 'Layers',    title: 'Automated Quality Tests',      color: COLORS.gold,      desc: 'dbt tests, Great Expectations suites, or custom SQL checks — written, reviewed, and deployed to run on every pipeline execution.' },
      { iconName: 'FileText',  title: 'Remediation Roadmap',          color: COLORS.cyan,      desc: 'Every issue scored by business impact and fix effort, giving the team a prioritised backlog of data quality work.' },
    ],

    process: [
      { step: '01', title: 'Data Profiling',         desc: 'Automated profiling of all tables: null rates, cardinality, distribution, format anomalies, and cross-table relationship checks.' },
      { step: '02', title: 'Business Impact Scoring', desc: 'Each issue scored against the dashboards and decisions it affects — so the team fixes the right things first.' },
      { step: '03', title: 'Automated Check Deployment', desc: 'Quality checks implemented in dbt or Great Expectations, reviewed with the team, and deployed to the production pipeline.' },
      { step: '04', title: 'Remediation Handoff',    desc: 'Audit report, prioritised backlog, and a runbook for ongoing quality management handed to the data team.' },
    ],

    deliverables: [
      'Data quality audit report',
      'Issue registry with business impact scores',
      'Automated quality test suite (dbt / GE)',
      'Freshness monitoring configuration',
      'Prioritised remediation backlog',
      'Quality management runbook',
      '30-day post-audit support',
    ],

    techStack: [
      { label: 'dbt',                  color: COLORS.action   },
      { label: 'Great Expectations',   color: COLORS.primary  },
      { label: 'Python',               color: COLORS.accent   },
      { label: 'SQL',                  color: COLORS.secondary },
      { label: 'Monte Carlo',          color: COLORS.gold     },
      { label: 'Soda',                 color: COLORS.cyan     },
      { label: 'Snowflake',            color: COLORS.action   },
      { label: 'BigQuery',             color: COLORS.primary  },
    ],

    tiers: [
      { name: 'Quality Audit',      price: 'From $3,000', featured: false,
        desc:     'Full audit report with issue registry and prioritised remediation plan.',
        features: ['Data profiling', 'Issue scoring', 'Audit report', '1–2 week turnaround'] },
      { name: 'Audit + Automation', price: 'From $7,000', featured: true,
        desc:     'Audit with automated quality checks deployed to your production pipelines.',
        features: ['Full audit', 'dbt / GE test suite', 'Monitoring config', 'Remediation backlog', '30-day support'] },
      { name: 'Ongoing Quality',    price: 'Custom',      featured: false,
        desc:     'Monthly quality monitoring with quarterly deep-dive audits.',
        features: ['Continuous monitoring', 'Monthly reports', 'Quarterly deep-dive', 'Retainer pricing'] },
    ],
  },

  // ── 14. Metadata Management ───────────────────────────────────────────────
  'metadata': {
    id:          'metadata',
    title:       'Metadata Management',
    tagline:     'Make your data discoverable, understandable, and trusted.',
    badge:       'Data Quality & Ops',
    accentColor: COLORS.primary,
    heroDesc:    'Analysts waste 30% of their time finding and understanding data. We implement metadata management systems — data catalogues, lineage tracking, business glossaries, and ownership frameworks — that make every dataset discoverable and every metric definition unambiguous.',
    tags:        ['Fixed-Fee Projects', 'Full Documentation'],

    stats: [
      { target: 30,  suffix: '%', label: 'Analyst Time Saved',       iconName: 'Zap',      color: COLORS.primary  },
      { target: 100, suffix: '%', label: 'Dataset Discoverability',  iconName: 'Search',   color: COLORS.action   },
      { target: 20,  suffix: '+', label: 'Catalogues Implemented',   iconName: 'Database', color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Lineage Documented',       iconName: 'GitBranch',color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Search',    title: 'Data Catalogue Implementation', color: COLORS.primary,  desc: 'Atlan, DataHub, or Collibra deployed and populated — with automated metadata ingestion from your warehouse and BI tools.' },
      { iconName: 'GitBranch', title: 'Data Lineage Tracking',         color: COLORS.action,   desc: 'End-to-end lineage from source system to dashboard field — so analysts know exactly where a number comes from and what could affect it.' },
      { iconName: 'FileText',  title: 'Business Glossary',             color: COLORS.accent,   desc: 'Agreed business term definitions linked to the physical dataset fields that implement them — resolving the "what does revenue mean?" problem.' },
      { iconName: 'Users',     title: 'Data Ownership Framework',      color: COLORS.secondary,desc: 'Clear ownership assignment for every dataset, with escalation paths, review cadences, and deprecation processes.' },
      { iconName: 'Shield',    title: 'Sensitive Data Classification', color: COLORS.gold,     desc: 'PII, confidential, and restricted field tagging that powers access control policies and GDPR compliance workflows.' },
      { iconName: 'Activity',  title: 'Catalogue Adoption Programme',  color: COLORS.cyan,     desc: 'Onboarding training, search tips, and a contribution process that keeps metadata current after handoff.' },
    ],

    process: [
      { step: '01', title: 'Metadata Audit',         desc: 'Inventory of all datasets, existing documentation, ownership gaps, and business glossary conflicts.' },
      { step: '02', title: 'Catalogue Setup',         desc: 'Tool selected and deployed, automated ingestion configured, and initial dataset population completed.' },
      { step: '03', title: 'Glossary & Lineage',      desc: 'Business glossary built, lineage graphs validated, and ownership assignments confirmed with stakeholders.' },
      { step: '04', title: 'Adoption & Handoff',      desc: 'Training sessions, contribution guide, and a governance process for keeping metadata current.' },
    ],

    deliverables: [
      'Data catalogue (deployed and populated)',
      'Business glossary',
      'End-to-end data lineage graphs',
      'Data ownership register',
      'Sensitive data classification tags',
      'Adoption training materials',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Atlan',       color: COLORS.primary  },
      { label: 'DataHub',     color: COLORS.action   },
      { label: 'Collibra',    color: COLORS.accent   },
      { label: 'OpenMetadata',color: COLORS.secondary },
      { label: 'dbt docs',    color: COLORS.gold     },
      { label: 'Apache Atlas',color: COLORS.cyan     },
      { label: 'Python',      color: COLORS.primary  },
      { label: 'SQL',         color: COLORS.action   },
    ],

    tiers: [
      { name: 'Catalogue Setup',     price: 'From $4,000', featured: false,
        desc:     'Data catalogue deployed with automated ingestion and initial documentation.',
        features: ['Tool deployment', 'Automated ingestion', 'Initial dataset docs', '2–3 week delivery'] },
      { name: 'Full Metadata Platform', price: 'From $9,000', featured: true,
        desc:     'Catalogue, lineage, glossary, and ownership framework with adoption training.',
        features: ['Catalogue + lineage', 'Business glossary', 'Ownership framework', 'Adoption training', '30-day support'] },
      { name: 'Enterprise Governance', price: 'Custom',     featured: false,
        desc:     'Organisation-wide metadata management with compliance integration.',
        features: ['Multi-system integration', 'GDPR / HIPAA workflows', 'Governance committee support', 'Ongoing advisory'] },
    ],
  },

  // ── 15. Observability & Alerting ──────────────────────────────────────────
  'observability': {
    id:          'observability',
    title:       'Observability & Alerting',
    tagline:     'Know when your data breaks before your analysts do.',
    badge:       'Data Quality & Ops',
    accentColor: COLORS.accent,
    heroDesc:    'Data issues are usually discovered by an analyst, not a monitoring system. We build data observability stacks — freshness monitors, volume anomaly detectors, schema change alerts, and distribution drift checks — that catch problems in minutes, not days.',
    tags:        ['Fixed-Fee Projects', 'Automated Monitoring'],

    stats: [
      { target: 90,  suffix: '%', label: 'Faster Issue Detection',    iconName: 'Activity', color: COLORS.accent   },
      { target: 30,  suffix: '+', label: 'Observability Stacks Built', iconName: 'Layers',  color: COLORS.action   },
      { target: 99,  suffix: '%', label: 'Alert Accuracy',            iconName: 'Shield',   color: COLORS.primary  },
      { target: 100, suffix: '%', label: 'Custom Thresholds',         iconName: 'Settings2',color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Activity',  title: 'Freshness Monitoring',          color: COLORS.accent,    desc: 'SLA-based freshness checks for every table — alerting before analysts see stale data on their dashboards.' },
      { iconName: 'BarChart3', title: 'Volume Anomaly Detection',      color: COLORS.action,    desc: 'Statistical baselines for row counts and event volumes — detecting drops, spikes, and gradual drift automatically.' },
      { iconName: 'Database',  title: 'Schema Change Alerts',          color: COLORS.primary,   desc: 'Automated detection of new, removed, or changed columns — with downstream impact assessment before the team is notified.' },
      { iconName: 'TrendingUp',title: 'Distribution Drift Monitoring', color: COLORS.secondary, desc: 'Statistical distribution tracking for key metrics — catching when data starts behaving differently before it affects decisions.' },
      { iconName: 'Shield',    title: 'End-to-end Pipeline Health',    color: COLORS.gold,      desc: 'Unified observability dashboard showing the status of every pipeline, table, and metric in one view.' },
      { iconName: 'Zap',       title: 'Alert Routing & Escalation',    color: COLORS.cyan,      desc: 'PagerDuty, Slack, and email routing with severity tiering and escalation paths so the right person is notified at the right time.' },
    ],

    process: [
      { step: '01', title: 'Coverage Assessment',    desc: 'Map all critical datasets and pipelines, classify by business impact, and define monitoring SLAs for each tier.' },
      { step: '02', title: 'Monitor Implementation', desc: 'Freshness, volume, schema, and distribution monitors implemented using your existing stack or a dedicated observability tool.' },
      { step: '03', title: 'Alert Calibration',      desc: 'Thresholds tuned against 90 days of historical data to minimise false positives without missing genuine issues.' },
      { step: '04', title: 'Routing & Runbooks',     desc: 'Alert routing configured, on-call schedule integrated, and per-monitor runbooks written for fast incident resolution.' },
    ],

    deliverables: [
      'Observability coverage plan',
      'Monitor configuration (freshness + volume + schema + distribution)',
      'Unified observability dashboard',
      'Alert routing configuration',
      'Per-monitor incident runbooks',
      'Threshold calibration report',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Monte Carlo',        color: COLORS.accent   },
      { label: 'Soda',               color: COLORS.action   },
      { label: 'dbt',                color: COLORS.primary  },
      { label: 'Great Expectations', color: COLORS.secondary },
      { label: 'Grafana',            color: COLORS.gold     },
      { label: 'PagerDuty',          color: COLORS.cyan     },
      { label: 'Slack',              color: COLORS.accent   },
      { label: 'Python',             color: COLORS.action   },
    ],

    tiers: [
      { name: 'Monitoring Starter',   price: 'From $4,000', featured: false,
        desc:     'Freshness and volume monitoring for critical datasets.',
        features: ['Freshness monitors', 'Volume anomaly detection', 'Slack alerting', '2–3 week delivery'] },
      { name: 'Full Observability',   price: 'From $9,000', featured: true,
        desc:     'Complete observability stack with schema, distribution, and drift monitoring.',
        features: ['Full monitor suite', 'Unified dashboard', 'Alert routing', 'Incident runbooks', '30-day support'] },
      { name: 'Enterprise Observability', price: 'Custom', featured: false,
        desc:     'Organisation-wide data health with SLA management and executive reporting.',
        features: ['Multi-warehouse coverage', 'SLA reporting', 'Custom dashboards', 'Ongoing support retainer'] },
    ],
  },

  // ── 16. Governance Frameworks ─────────────────────────────────────────────
  'governance': {
    id:          'governance',
    title:       'Governance Frameworks',
    tagline:     'The policies and processes that make data trustworthy at scale.',
    badge:       'Data Quality & Ops',
    accentColor: COLORS.secondary,
    heroDesc:    'Data governance fails when it\'s treated as a compliance exercise rather than a business enabler. We design governance frameworks that are proportionate to your scale, practical enough for adoption, and effective enough to satisfy GDPR, HIPAA, or SOC 2 requirements — without slowing down the teams who depend on data.',
    tags:        ['Fixed-Fee Projects', 'Policy Documentation Included'],

    stats: [
      { target: 30,  suffix: '+', label: 'Governance Frameworks Built', iconName: 'Shield',  color: COLORS.secondary },
      { target: 100, suffix: '%', label: 'Compliance Readiness',        iconName: 'Activity',color: COLORS.action   },
      { target: 60,  suffix: '%', label: 'Reduction in Data Incidents', iconName: 'TrendingUp',color: COLORS.gold  },
      { target: 100, suffix: '%', label: 'Policy Documentation',        iconName: 'FileText',color: COLORS.primary  },
    ],

    features: [
      { iconName: 'Shield',    title: 'Data Governance Policy Suite',  color: COLORS.secondary, desc: 'Access control, retention, classification, and acceptable use policies — written for your organisation, not copied from a template.' },
      { iconName: 'Users',     title: 'Data Stewardship Model',        color: COLORS.action,    desc: 'Roles, responsibilities, and accountability structures for data ownership — from domain stewards to the data governance council.' },
      { iconName: 'FileText',  title: 'GDPR & HIPAA Readiness',        color: COLORS.accent,    desc: 'Data mapping, DPIA templates, retention schedules, and breach response procedures aligned to regulatory requirements.' },
      { iconName: 'Database',  title: 'Access Control Framework',      color: COLORS.primary,   desc: 'Role-based and attribute-based access control design — integrated with your warehouse, BI tool, and identity provider.' },
      { iconName: 'GitBranch', title: 'Data Lineage for Compliance',   color: COLORS.gold,      desc: 'Lineage documentation that satisfies auditor requests and enables impact assessment for any proposed data change.' },
      { iconName: 'Activity',  title: 'Governance Adoption Programme', color: COLORS.cyan,      desc: 'Training, change management, and a governance committee setup process that turns a document into a living practice.' },
    ],

    process: [
      { step: '01', title: 'Governance Assessment',   desc: 'Current-state review of policies, access controls, compliance gaps, and data incident history.' },
      { step: '02', title: 'Framework Design',         desc: 'Governance model, policy suite, and stewardship structure designed proportionate to your size and regulatory exposure.' },
      { step: '03', title: 'Policy & Control Rollout', desc: 'Policies documented, access controls implemented, lineage and classification completed, and training delivered.' },
      { step: '04', title: 'Committee & Cadence',      desc: 'Governance committee launched, review cadence established, and a quarterly health-check process handed over.' },
    ],

    deliverables: [
      'Data governance policy suite',
      'Data stewardship model + RACI',
      'GDPR / HIPAA gap analysis and remediation plan',
      'Access control implementation',
      'Data classification register',
      'Governance committee charter and cadence',
      'Training materials and onboarding guide',
    ],

    techStack: [
      { label: 'Collibra',    color: COLORS.secondary },
      { label: 'Atlan',       color: COLORS.action   },
      { label: 'OneTrust',    color: COLORS.accent   },
      { label: 'Okta',        color: COLORS.primary  },
      { label: 'Azure AD',    color: COLORS.gold     },
      { label: 'dbt',         color: COLORS.cyan     },
      { label: 'Confluence',  color: COLORS.secondary },
      { label: 'Notion',      color: COLORS.action   },
    ],

    tiers: [
      { name: 'Governance Audit',     price: 'From $5,000', featured: false,
        desc:     'Assessment of current governance maturity with a prioritised improvement plan.',
        features: ['Maturity assessment', 'Gap analysis', 'Roadmap', '2–3 week turnaround'] },
      { name: 'Full Framework',       price: 'From $12,000', featured: true,
        desc:     'Complete governance framework with policies, controls, and training.',
        features: ['Policy suite', 'Stewardship model', 'Access controls', 'Training', 'Committee setup', '30-day support'] },
      { name: 'Ongoing Governance',   price: 'Custom',       featured: false,
        desc:     'Embedded governance support with quarterly reviews and policy maintenance.',
        features: ['Quarterly reviews', 'Policy updates', 'Incident support', 'Regulatory change tracking', 'Retainer pricing'] },
    ],
  },
};