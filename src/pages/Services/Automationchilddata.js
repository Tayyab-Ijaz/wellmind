/**
 * automationChildData.js — WellMind Data Solutions
 * Central data store for all Automation & Workflows child service pages.
 * Consumed by AutomationChildPage.jsx via URL params.
 *
 * Routes (from sub_services.jsx):
 *   Process Automation:   rpa | orchestration | bpm | e2e
 *   Document & Data:      document | ocr | forms | reporting
 *   Integration & Alerts: integration | alerts | scheduling | monitoring
 *   AI Automation:        ai-rpa | llm-automation | decision-engine | audit-trail
 *
 * Each service has `pipelineNodes` (5 nodes) that drive the PipelineFlow
 * hero visual — matching ServicesAutomation.jsx exactly.
 */

// ─── Brand color shortcuts ────────────────────────────────────────────────────
const AC  = '#B02A48'; // B.accent — parent page AC
const COLORS = {
  amber:     '#B45309', // automation brand accent (parent accentColor)
  action:    '#0B7C93', // teal
  primary:   '#633068', // purple
  accent:    '#B02A48', // crimson
  secondary: '#1B6B3A', // green
  gold:      '#FF9F1C',
  cyan:      '#00BBF9',
};

// ─── CHILD SERVICES DATA ──────────────────────────────────────────────────────
export const AUTOMATION_CHILDREN = {

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 1 — PROCESS AUTOMATION
  // ══════════════════════════════════════════════════════════════════════════

  // ── 1. RPA & Scripting ────────────────────────────────────────────────────
  'rpa': {
    id:          'rpa',
    title:       'RPA & Scripting',
    tagline:     'Turn repetitive manual tasks into reliable, monitored scripts.',
    badge:       'Process Automation',
    accentColor: COLORS.amber,
    heroDesc:    'Robotic Process Automation works best when it replaces highly repetitive, rule-based tasks — login-navigate-extract-submit loops that eat hours of analyst time every week. We build RPA bots and Python scripts that are maintainable, monitored, and documented — not fragile macros that break on the first UI change.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $2,500'],

    pipelineNodes: [
      { id: 0, label: 'Trigger',    sub: 'Schedule / UI event',    color: COLORS.amber,   x: '5%',  y: '20%' },
      { id: 1, label: 'Navigate',   sub: 'Browser / App control',  color: COLORS.action,  x: '35%', y: '8%'  },
      { id: 2, label: 'Extract',    sub: 'Scrape / Parse data',    color: COLORS.primary, x: '65%', y: '20%' },
      { id: 3, label: 'Validate',   sub: 'Rules & error checks',   color: COLORS.secondary,x: '35%',y: '64%' },
      { id: 4, label: 'Deliver',    sub: 'DB / Email / API output',color: COLORS.amber,   x: '65%', y: '64%' },
    ],

    stats: [
      { target: 70,  suffix: '%', label: 'Time Saved Per Task',  iconName: 'TrendingDown', color: COLORS.amber   },
      { target: 100, suffix: '+', label: 'Bots Deployed',        iconName: 'Settings2',    color: COLORS.action  },
      { target: 97,  suffix: '%', label: 'Bot Uptime',           iconName: 'Activity',     color: COLORS.gold    },
      { target: 100, suffix: '%', label: 'Code Ownership',       iconName: 'Shield',       color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Repeat',       title: 'Browser & Desktop RPA',    color: COLORS.amber,    desc: 'Selenium, Playwright, and PyAutoGUI-based bots that replicate human browser and desktop interactions — with headless operation for server deployment.' },
      { iconName: 'Code2',        title: 'Python Scripting',         color: COLORS.action,   desc: 'Maintainable Python scripts that replace ad-hoc macros — with proper error handling, logging, retry logic, and version control.' },
      { iconName: 'AlertTriangle',title: 'Error Handling & Alerts',  color: COLORS.primary,  desc: 'Every bot includes structured exception handling, screenshot capture on failure, and Slack or email alerts so issues surface immediately.' },
      { iconName: 'RefreshCw',    title: 'Scheduled Execution',      color: COLORS.secondary,desc: 'Cron, Windows Task Scheduler, or cloud-based scheduling — bots run when they should, with run history and next-execution dashboards.' },
      { iconName: 'Database',     title: 'Data Output Routing',      color: COLORS.gold,     desc: 'Extracted data routed to databases, spreadsheets, APIs, or email — with validation and deduplication before any write occurs.' },
      { iconName: 'FileText',     title: 'Runbook & Documentation',  color: COLORS.cyan,     desc: 'Every bot delivered with a maintenance runbook: what it does, how to restart it, common failure modes, and how to update selectors.' },
    ],

    process: [
      { step: '01', title: 'Task Audit',            desc: 'We document the exact manual steps, edge cases, and exceptions before writing a single line of automation code.' },
      { step: '02', title: 'Script Build & Testing',desc: 'Bot built against real systems, tested across all known edge cases, and deployed to a staging environment first.' },
      { step: '03', title: 'Monitoring Setup',       desc: 'Scheduler, alerting, and run-history dashboard configured so failures are caught automatically.' },
      { step: '04', title: 'Handoff & Training',     desc: 'Runbook delivered, team trained on restarting and updating the bot, and 30-day support window begins.' },
    ],

    deliverables: [
      'RPA bot / Python script codebase (your repo)',
      'Scheduled execution configuration',
      'Error handling + alert configuration',
      'Run history dashboard',
      'Maintenance runbook',
      'Team training session (1 hour)',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.amber   },
      { label: 'Playwright',   color: COLORS.action  },
      { label: 'Selenium',     color: COLORS.primary },
      { label: 'Pandas',       color: COLORS.secondary },
      { label: 'Celery',       color: COLORS.gold    },
      { label: 'PostgreSQL',   color: COLORS.cyan    },
      { label: 'GitHub CI',    color: COLORS.amber   },
      { label: 'Docker',       color: COLORS.action  },
    ],

    tiers: [
      { name: 'Single Bot',      price: 'From $2,500', featured: false,
        desc:     'One task automated end-to-end with monitoring and documentation.',
        features: ['Single automation', 'Scheduling + alerts', 'Runbook', '2–3 week delivery'] },
      { name: 'Bot Suite',       price: 'From $6,000', featured: true,
        desc:     'Three to five bots with shared scheduling and a monitoring dashboard.',
        features: ['3–5 automations', 'Shared monitoring dashboard', 'Error alerting', 'Training session', '30-day support'] },
      { name: 'Retainer',        price: 'From $1,500 / mo', featured: false,
        desc:     'Ongoing bot maintenance, new automations, and priority support.',
        features: ['Monthly automation budget', 'Priority response SLA', 'Bot maintenance', 'Cancel anytime'] },
    ],
  },

  // ── 2. Workflow Orchestration ─────────────────────────────────────────────
  'orchestration': {
    id:          'orchestration',
    title:       'Workflow Orchestration',
    tagline:     'Complex multi-step pipelines that run reliably without babysitting.',
    badge:       'Process Automation',
    accentColor: COLORS.action,
    heroDesc:    'When a workflow has more than three steps, dependencies, retries, and SLAs, a cron job isn\'t enough. We design and build orchestrated pipelines using Airflow, Prefect, or Dagster — with dependency management, automated retries, backfill capability, and dashboards that show exactly where a failed run went wrong.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $4,000'],

    pipelineNodes: [
      { id: 0, label: 'DAG Trigger', sub: 'Schedule / API / Sensor', color: COLORS.action,   x: '5%',  y: '20%' },
      { id: 1, label: 'Task A',      sub: 'Extract + validate',      color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'Task B',      sub: 'Transform + enrich',      color: COLORS.primary,  x: '65%', y: '20%' },
      { id: 3, label: 'Retry/Alert', sub: 'On failure logic',        color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Load',        sub: 'Warehouse / API sink',    color: COLORS.action,   x: '65%', y: '64%' },
    ],

    stats: [
      { target: 97,  suffix: '%', label: 'Pipeline Uptime',       iconName: 'Activity',     color: COLORS.action  },
      { target: 60,  suffix: '+', label: 'Pipelines Delivered',   iconName: 'GitMerge',     color: COLORS.amber   },
      { target: 80,  suffix: '%', label: 'Faster Failure Recovery',iconName: 'RefreshCw',   color: COLORS.gold    },
      { target: 100, suffix: '%', label: 'Code Ownership',        iconName: 'Shield',       color: COLORS.secondary },
    ],

    features: [
      { iconName: 'GitMerge',     title: 'DAG Design & Build',        color: COLORS.action,   desc: 'Directed Acyclic Graphs that model your business process — with explicit dependency ordering, parallelism where safe, and retry policies per task.' },
      { iconName: 'RefreshCw',    title: 'Retry & Backfill Logic',    color: COLORS.amber,    desc: 'Automatic retries with exponential backoff, configurable retry limits, and full backfill capability for historical pipeline runs.' },
      { iconName: 'AlertTriangle',title: 'Failure Alerting',           color: COLORS.primary,  desc: 'Slack, email, and PagerDuty integration — with per-task SLA monitoring and alerts when a pipeline runs longer than agreed.' },
      { iconName: 'Activity',     title: 'Monitoring Dashboard',      color: COLORS.secondary,desc: 'Airflow/Prefect/Dagster UI configured with run history, task-level logs, and a drill-down view for debugging failures.' },
      { iconName: 'Database',     title: 'Sensor-based Triggering',   color: COLORS.gold,     desc: 'File sensors, database sensors, and API poll sensors — pipelines start when the upstream data actually arrives, not on a fixed schedule.' },
      { iconName: 'Layers',       title: 'Modular Pipeline Design',   color: COLORS.cyan,     desc: 'Reusable task operators and parameterised DAGs that make adding new pipelines a configuration change, not a rebuild.' },
    ],

    process: [
      { step: '01', title: 'Pipeline Design',        desc: 'Map the business process to a DAG — tasks, dependencies, SLAs, retry rules, and alerting policy agreed before build.' },
      { step: '02', title: 'Build & Unit Test',       desc: 'Each task built with unit tests and validated in a local Airflow/Prefect environment before infrastructure provisioning.' },
      { step: '03', title: 'Deploy & Integration Test',desc: 'Pipeline deployed to staging, run end-to-end with real data, and failure scenarios manually triggered to validate retry logic.' },
      { step: '04', title: 'Monitor & Handoff',       desc: 'Monitoring configured, SLA alerts live, runbook written, and a knowledge-transfer session with your data team.' },
    ],

    deliverables: [
      'DAG / pipeline codebase (your repo)',
      'Orchestrator deployment (Airflow / Prefect / Dagster)',
      'Retry + SLA alerting configuration',
      'Monitoring dashboard',
      'Runbook and incident playbook',
      'Team training session',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Apache Airflow', color: COLORS.action  },
      { label: 'Prefect',        color: COLORS.amber   },
      { label: 'Dagster',        color: COLORS.primary },
      { label: 'Python',         color: COLORS.secondary },
      { label: 'Docker',         color: COLORS.gold    },
      { label: 'PostgreSQL',     color: COLORS.cyan    },
      { label: 'AWS / GCP',      color: COLORS.action  },
      { label: 'Kubernetes',     color: COLORS.amber   },
    ],

    tiers: [
      { name: 'Single Pipeline',   price: 'From $4,000', featured: false,
        desc:     'One orchestrated pipeline with retries, alerting, and monitoring.',
        features: ['DAG build', 'Retry + alerting', 'Monitoring dashboard', '3–4 week delivery'] },
      { name: 'Pipeline Suite',    price: 'From $9,000', featured: true,
        desc:     'Multi-pipeline orchestration environment with full monitoring.',
        features: ['3–6 pipelines', 'Shared orchestrator', 'SLA alerting', 'Backfill capability', '30-day support'] },
      { name: 'Orchestration Retainer', price: 'From $2,000 / mo', featured: false,
        desc:     'Ongoing pipeline engineering, maintenance, and new workflow delivery.',
        features: ['Monthly pipeline budget', 'Priority SLA', 'Quarterly review', 'Cancel anytime'] },
    ],
  },

  // ── 3. Business Process Mapping ───────────────────────────────────────────
  'bpm': {
    id:          'bpm',
    title:       'Business Process Mapping',
    tagline:     'Understand your processes before you automate the wrong ones.',
    badge:       'Process Automation',
    accentColor: COLORS.primary,
    heroDesc:    'Automating a broken process makes it break faster. We run structured business process mapping engagements — swimlane diagrams, process mining, bottleneck analysis, and automation opportunity scoring — so you invest automation effort in the 20% of steps causing 80% of delays and errors.',
    tags:        ['Fixed-Fee Projects', 'Full Documentation', 'From $2,000'],

    pipelineNodes: [
      { id: 0, label: 'Capture',   sub: 'Interviews & walkthroughs', color: COLORS.primary,  x: '5%',  y: '20%' },
      { id: 1, label: 'Map',       sub: 'Swimlane + BPMN diagrams',  color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'Analyse',   sub: 'Bottleneck + waste ID',     color: COLORS.action,   x: '65%', y: '20%' },
      { id: 3, label: 'Score',     sub: 'ROI + effort ranking',      color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Roadmap',   sub: 'Automation priority plan',  color: COLORS.primary,  x: '65%', y: '64%' },
    ],

    stats: [
      { target: 80,  suffix: '%', label: 'Time Waste Identified',  iconName: 'TrendingDown', color: COLORS.primary  },
      { target: 50,  suffix: '+', label: 'Processes Mapped',       iconName: 'ClipboardList',color: COLORS.amber    },
      { target: 3,   suffix: 'x', label: 'ROI vs Blind Automation',iconName: 'TrendingUp',  color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Documented Output',      iconName: 'FileText',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'ClipboardList', title: 'Process Discovery',        color: COLORS.primary,  desc: 'Structured interviews and process walkthroughs with stakeholders across all affected teams — capturing the real process, not the assumed one.' },
      { iconName: 'GitMerge',      title: 'Swimlane & BPMN Mapping', color: COLORS.amber,    desc: 'Swimlane diagrams and BPMN notation for every core process — clear enough for a new hire to follow, precise enough for developers to implement.' },
      { iconName: 'Activity',      title: 'Bottleneck Analysis',     color: COLORS.action,   desc: 'Volume, cycle time, error rate, and handoff delay analysis for every step — quantified so automation priorities reflect business reality.' },
      { iconName: 'Search',        title: 'Automation Opportunity Scoring', color: COLORS.secondary, desc: 'Each candidate step scored on ROI potential, automation feasibility, and implementation complexity — giving you a ranked backlog.' },
      { iconName: 'FileText',      title: 'Process Documentation',   color: COLORS.gold,     desc: 'Living process documentation that serves as the handoff between mapping and automation build — or as compliance evidence independently.' },
      { iconName: 'TrendingUp',    title: 'Automation Roadmap',      color: COLORS.cyan,     desc: 'Phased automation roadmap with estimated savings, delivery sequence, and dependency mapping across the full process landscape.' },
    ],

    process: [
      { step: '01', title: 'Stakeholder Interviews',  desc: 'Process walkthroughs with each team role that touches the process — capturing variations, exceptions, and undocumented workarounds.' },
      { step: '02', title: 'Process Mapping',          desc: 'Swimlane and BPMN diagrams built, reviewed with stakeholders, and revised until they accurately reflect reality.' },
      { step: '03', title: 'Bottleneck & ROI Analysis',desc: 'Volume and cycle-time data collected, automation scores calculated, and quick wins separated from longer-term initiatives.' },
      { step: '04', title: 'Roadmap & Handoff',        desc: 'Automation roadmap presented, priorities agreed with leadership, and documentation package handed over.' },
    ],

    deliverables: [
      'Swimlane and BPMN process diagrams',
      'Bottleneck analysis report',
      'Automation opportunity scorecard',
      'Phased automation roadmap',
      'Process documentation package',
      'Stakeholder presentation deck',
      '30-day Q&A support window',
    ],

    techStack: [
      { label: 'Miro',       color: COLORS.primary  },
      { label: 'Lucidchart', color: COLORS.amber    },
      { label: 'BPMN 2.0',   color: COLORS.action   },
      { label: 'Notion',     color: COLORS.secondary },
      { label: 'Confluence', color: COLORS.gold     },
      { label: 'Excel',      color: COLORS.cyan     },
      { label: 'PowerBI',    color: COLORS.primary  },
      { label: 'Process Mining (Celonis)', color: COLORS.amber },
    ],

    tiers: [
      { name: 'Process Audit',   price: 'From $2,000', featured: false,
        desc:     'Single process mapped and scored with automation recommendations.',
        features: ['One process', 'Swimlane diagram', 'Opportunity scorecard', '1 week turnaround'] },
      { name: 'Full BPM Package',price: 'From $5,500', featured: true,
        desc:     'Multiple processes mapped with bottleneck analysis and automation roadmap.',
        features: ['3–6 processes', 'BPMN diagrams', 'Bottleneck analysis', 'Automation roadmap', '30-day support'] },
      { name: 'Process Mining',  price: 'Custom',      featured: false,
        desc:     'Data-driven process mining from event logs with automated bottleneck discovery.',
        features: ['Event log analysis', 'Automated discovery', 'Variant analysis', 'Continuous monitoring'] },
    ],
  },

  // ── 4. End-to-End Automation ──────────────────────────────────────────────
  'e2e': {
    id:          'e2e',
    title:       'End-to-End Automation',
    tagline:     'Automate the entire operation — not just one step.',
    badge:       'Process Automation',
    accentColor: COLORS.secondary,
    heroDesc:    'Single-step automation creates new manual handoffs at the boundaries. End-to-end automation eliminates the entire manual chain — from trigger to outcome — with each step validated, monitored, and connected. We design and build full-operation automation that runs without human intervention from start to finish.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $6,500'],

    pipelineNodes: [
      { id: 0, label: 'Input',      sub: 'Any trigger / source',     color: COLORS.secondary,x: '5%',  y: '20%' },
      { id: 1, label: 'Process',    sub: 'Transform + validate',     color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'AI Layer',   sub: 'Classify / enrich / decide',color: COLORS.action,  x: '65%', y: '20%' },
      { id: 3, label: 'Route',      sub: 'Business rules engine',    color: COLORS.primary,  x: '35%', y: '64%' },
      { id: 4, label: 'Output',     sub: 'All downstream systems',   color: COLORS.secondary,x: '65%', y: '64%' },
    ],

    stats: [
      { target: 95,  suffix: '%', label: 'Manual Steps Eliminated', iconName: 'TrendingDown', color: COLORS.secondary },
      { target: 40,  suffix: '+', label: 'E2E Automations Built',   iconName: 'Repeat',       color: COLORS.amber     },
      { target: 10,  suffix: 'x', label: 'Throughput Increase',     iconName: 'Zap',          color: COLORS.gold      },
      { target: 100, suffix: '%', label: 'Code Ownership',          iconName: 'Shield',       color: COLORS.action    },
    ],

    features: [
      { iconName: 'Repeat',       title: 'Full-chain Automation Design', color: COLORS.secondary, desc: 'Every step from trigger to outcome designed as a connected system — no manual handoffs at integration boundaries.' },
      { iconName: 'Brain',        title: 'AI Decision Points',           color: COLORS.action,    desc: 'Classification, extraction, and routing decisions made by ML models or LLMs — with human-in-the-loop escalation for low-confidence cases.' },
      { iconName: 'Webhook',      title: 'Multi-system Integration',     color: COLORS.amber,     desc: 'CRM, ERP, warehouse, email, and document systems connected in a single orchestrated flow — data written to every relevant system automatically.' },
      { iconName: 'Shield',       title: 'Validation Gates',             color: COLORS.primary,   desc: 'Data validation and business rule checks at every step boundary — nothing progresses downstream with bad data.' },
      { iconName: 'Activity',     title: 'End-to-end Monitoring',        color: COLORS.gold,      desc: 'A single dashboard showing the status of every run across all steps — with drill-down into individual step logs when something fails.' },
      { iconName: 'RefreshCw',    title: 'Exception Handling',           color: COLORS.cyan,      desc: 'Automated retry at the step level, dead-letter queue for unresolvable cases, and Slack/email alerts with context for human review.' },
    ],

    process: [
      { step: '01', title: 'End-to-end Process Map', desc: 'The full operation documented from first input to last output — all systems touched, all decision points, all exception paths.' },
      { step: '02', title: 'Architecture Design',    desc: 'Trigger design, integration architecture, AI decision points, and validation gate strategy agreed before build.' },
      { step: '03', title: 'Sprint Build',           desc: 'Built step-by-step — each integration tested before the next is added. No big-bang delivery that only works in theory.' },
      { step: '04', title: 'Deploy & Monitor',       desc: 'Production deployment with monitoring, alerting, and a 30-day period to tune edge cases that only appear under real volume.' },
    ],

    deliverables: [
      'Full automation codebase (your repo)',
      'End-to-end process documentation',
      'Integration configuration for all systems',
      'AI model / decision logic',
      'Monitoring + alerting dashboard',
      'Exception handling runbook',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',    color: COLORS.secondary },
      { label: 'Airflow',   color: COLORS.amber     },
      { label: 'FastAPI',   color: COLORS.action    },
      { label: 'OpenAI',    color: COLORS.primary   },
      { label: 'Celery',    color: COLORS.gold      },
      { label: 'PostgreSQL',color: COLORS.cyan      },
      { label: 'Kafka',     color: COLORS.secondary },
      { label: 'Docker',    color: COLORS.amber     },
    ],

    tiers: [
      { name: 'E2E Starter',    price: 'From $6,500',  featured: false,
        desc:     'One end-to-end automated process covering 2–4 connected systems.',
        features: ['Full chain automation', '2–4 system integration', 'Monitoring + alerting', '5–6 week delivery'] },
      { name: 'Full Operation', price: 'From $14,000', featured: true,
        desc:     'Complex E2E automation with AI decision points and multi-system integration.',
        features: ['AI decision layer', 'Unlimited systems', 'Exception handling', 'Full monitoring', '30-day support'] },
      { name: 'Operations Retainer', price: 'Custom',  featured: false,
        desc:     'Ongoing automation expansion and operations management.',
        features: ['Monthly expansion budget', 'Performance optimisation', 'New workflow delivery', 'SLA agreement'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 2 — DOCUMENT & DATA
  // ══════════════════════════════════════════════════════════════════════════

  // ── 5. Document Processing ────────────────────────────────────────────────
  'document': {
    id:          'document',
    title:       'Document Processing',
    tagline:     'Extract, validate, and route document data without human review.',
    badge:       'Document & Data',
    accentColor: COLORS.amber,
    heroDesc:    'Document-heavy operations waste analyst time on extraction that AI can handle reliably. We build document processing pipelines — PDF parsing, invoice extraction, contract analysis, and classification — with validation logic and confidence thresholds that decide automatically when a document needs human review and when it can proceed.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $4,000'],

    pipelineNodes: [
      { id: 0, label: 'Ingest',    sub: 'Email / Upload / API',     color: COLORS.amber,    x: '5%',  y: '20%' },
      { id: 1, label: 'Parse',     sub: 'PDF / DOCX / Image',       color: COLORS.action,   x: '35%', y: '8%'  },
      { id: 2, label: 'Extract',   sub: 'AI field extraction',      color: COLORS.primary,  x: '65%', y: '20%' },
      { id: 3, label: 'Validate',  sub: 'Rules + confidence check', color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Route',     sub: 'System / Human review',    color: COLORS.amber,    x: '65%', y: '64%' },
    ],

    stats: [
      { target: 90,  suffix: '%', label: 'Manual Review Eliminated',iconName: 'TrendingDown',color: COLORS.amber    },
      { target: 98,  suffix: '%', label: 'Extraction Accuracy',     iconName: 'Activity',   color: COLORS.action   },
      { target: 50,  suffix: '+', label: 'Doc Types Supported',     iconName: 'FileText',   color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',          iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'FileText',  title: 'Multi-format Parsing',        color: COLORS.amber,    desc: 'PDF, DOCX, XLSX, HTML, and scanned image parsing — with layout-aware extraction that handles tables, headers, and multi-column formats.' },
      { iconName: 'Brain',     title: 'AI Field Extraction',         color: COLORS.action,   desc: 'LLM or NER-based extraction of structured fields — vendor names, amounts, dates, contract terms — from free-text document content.' },
      { iconName: 'Shield',    title: 'Confidence & Validation',     color: COLORS.primary,  desc: 'Confidence scoring for every extracted field — documents below threshold routed for human review rather than silently written with bad data.' },
      { iconName: 'GitMerge',  title: 'Classification & Routing',   color: COLORS.secondary, desc: 'Document type classification (invoice, contract, PO, report) that routes each document to the correct downstream process automatically.' },
      { iconName: 'Database',  title: 'Structured Output',           color: COLORS.gold,     desc: 'Extracted data written to your database, ERP, or spreadsheet — with deduplication, schema validation, and a full audit trail per document.' },
      { iconName: 'Activity',  title: 'Processing Dashboard',        color: COLORS.cyan,     desc: 'Volume metrics, accuracy rates, human-review queue depth, and document-level processing history in a single operations view.' },
    ],

    process: [
      { step: '01', title: 'Document Audit',          desc: 'Sample of 100+ real documents reviewed — format variations, edge cases, and field accuracy requirements documented before build.' },
      { step: '02', title: 'Extraction Model Build',   desc: 'Parsing and extraction pipeline built and evaluated against held-out document samples. Accuracy targets agreed and measured.' },
      { step: '03', title: 'Validation & Routing',     desc: 'Confidence thresholds set, routing rules implemented, and human-review queue configured for low-confidence documents.' },
      { step: '04', title: 'Deploy & Monitor',         desc: 'Production pipeline deployed with processing dashboard, accuracy monitoring, and 30-day support to tune edge cases.' },
    ],

    deliverables: [
      'Document processing pipeline codebase',
      'Extraction model / prompt library',
      'Confidence scoring + validation logic',
      'Human-review queue interface',
      'Structured output to your systems',
      'Processing accuracy dashboard',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',         color: COLORS.amber    },
      { label: 'LangChain',      color: COLORS.action   },
      { label: 'pdfplumber',     color: COLORS.primary  },
      { label: 'OpenAI',         color: COLORS.secondary },
      { label: 'spaCy',          color: COLORS.gold     },
      { label: 'FastAPI',        color: COLORS.cyan     },
      { label: 'PostgreSQL',     color: COLORS.amber    },
      { label: 'Celery',         color: COLORS.action   },
    ],

    tiers: [
      { name: 'Single Doc Type', price: 'From $4,000', featured: false,
        desc:     'One document type extracted and routed with validation.',
        features: ['One doc type', 'AI extraction', 'Validation + routing', '3–4 week delivery'] },
      { name: 'Doc Processing Hub',price: 'From $9,000',featured: true,
        desc:     'Multi-format processing with classification, validation, and dashboard.',
        features: ['Multiple doc types', 'Auto-classification', 'Human-review queue', 'Processing dashboard', '30-day support'] },
      { name: 'Enterprise DocAI', price: 'Custom',      featured: false,
        desc:     'High-volume document intelligence with custom model training.',
        features: ['Custom model training', 'High-volume throughput', 'ERP integration', 'SLA agreement'] },
    ],
  },

  // ── 6. OCR & Extraction ───────────────────────────────────────────────────
  'ocr': {
    id:          'ocr',
    title:       'OCR & Extraction',
    tagline:     'Turn scanned images and PDFs into structured, queryable data.',
    badge:       'Document & Data',
    accentColor: COLORS.action,
    heroDesc:    'Scanned documents, handwritten forms, and image-based PDFs are dead data until an OCR pipeline makes them machine-readable. We build OCR and extraction pipelines that handle real-world scan quality — skew, noise, mixed fonts, handwriting — and output validated, structured data ready for your systems.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $3,500'],

    pipelineNodes: [
      { id: 0, label: 'Upload',    sub: 'Scan / Image / PDF',       color: COLORS.action,   x: '5%',  y: '20%' },
      { id: 1, label: 'Pre-process',sub: 'Deskew / Denoise / Crop', color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'OCR',       sub: 'Text recognition engine',  color: COLORS.primary,  x: '65%', y: '20%' },
      { id: 3, label: 'Extract',   sub: 'Field parsing + NER',      color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Output',    sub: 'DB / JSON / CSV / API',    color: COLORS.action,   x: '65%', y: '64%' },
    ],

    stats: [
      { target: 98,  suffix: '%', label: 'OCR Accuracy',            iconName: 'Eye',        color: COLORS.action   },
      { target: 80,  suffix: '%', label: 'Manual Entry Eliminated', iconName: 'TrendingDown',color: COLORS.amber   },
      { target: 40,  suffix: '+', label: 'Doc Formats Supported',   iconName: 'FileText',   color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',          iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Eye',       title: 'High-accuracy OCR',          color: COLORS.action,   desc: 'Tesseract, AWS Textract, Google Document AI, and Azure Form Recognizer — selected by document type and quality requirements.' },
      { iconName: 'Settings2', title: 'Image Pre-processing',       color: COLORS.amber,    desc: 'Deskewing, denoising, contrast enhancement, and bounding-box crop — improving OCR accuracy on low-quality scans before text recognition.' },
      { iconName: 'Brain',     title: 'Handwriting Recognition',    color: COLORS.primary,  desc: 'Handwritten text recognition for forms, annotations, and mixed print/handwritten documents using specialised HTR models.' },
      { iconName: 'Database',  title: 'Field Extraction & NER',    color: COLORS.secondary, desc: 'Named entity recognition to extract structured fields — names, dates, amounts, reference numbers — from raw OCR text output.' },
      { iconName: 'Shield',    title: 'Quality Scoring',            color: COLORS.gold,     desc: 'Per-document and per-field confidence scores that route low-confidence extractions to a human review queue automatically.' },
      { iconName: 'Activity',  title: 'Processing Pipeline',        color: COLORS.cyan,     desc: 'Async processing pipeline with job queuing, progress tracking, and a dashboard showing throughput and accuracy metrics.' },
    ],

    process: [
      { step: '01', title: 'Sample Analysis',     desc: 'Review of 100+ real document samples — quality distribution, format variations, and target fields documented.' },
      { step: '02', title: 'Pipeline Build',       desc: 'Pre-processing, OCR engine selection, and field extraction built and evaluated against held-out samples.' },
      { step: '03', title: 'Accuracy Validation',  desc: 'Ground-truth comparison on 200+ documents — accuracy targets measured and tuning applied until targets are met.' },
      { step: '04', title: 'Deploy & Monitor',     desc: 'Production pipeline deployed with accuracy monitoring and human-review queue for below-threshold extractions.' },
    ],

    deliverables: [
      'OCR + extraction pipeline codebase',
      'Pre-processing configuration',
      'Field extraction logic + NER models',
      'Accuracy evaluation report',
      'Human-review queue interface',
      'Processing dashboard',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',           color: COLORS.action   },
      { label: 'AWS Textract',     color: COLORS.amber    },
      { label: 'Google DocAI',     color: COLORS.primary  },
      { label: 'Tesseract',        color: COLORS.secondary },
      { label: 'OpenCV',           color: COLORS.gold     },
      { label: 'spaCy',            color: COLORS.cyan     },
      { label: 'FastAPI',          color: COLORS.action   },
      { label: 'Celery',           color: COLORS.amber    },
    ],

    tiers: [
      { name: 'OCR Pipeline',    price: 'From $3,500', featured: false,
        desc:     'OCR extraction pipeline for one document type with structured output.',
        features: ['One doc type', 'OCR + field extraction', 'Structured output', '2–3 week delivery'] },
      { name: 'OCR Hub',         price: 'From $8,000', featured: true,
        desc:     'Multi-format OCR with pre-processing, NER, and review queue.',
        features: ['Multiple doc types', 'Handwriting support', 'Human-review queue', 'Accuracy dashboard', '30-day support'] },
      { name: 'Enterprise OCR',  price: 'Custom',      featured: false,
        desc:     'High-volume OCR with custom model training and ERP integration.',
        features: ['Custom HTR models', 'Batch processing', 'ERP integration', 'SLA agreement'] },
    ],
  },

  // ── 7. Form Intelligence ──────────────────────────────────────────────────
  'forms': {
    id:          'forms',
    title:       'Form Intelligence',
    tagline:     'Automate form capture, validation, and downstream routing.',
    badge:       'Document & Data',
    accentColor: COLORS.primary,
    heroDesc:    'Forms are where data enters your business — and where the most manual work happens. We build intelligent form processing systems: structured web forms with validation and downstream routing, intelligent intake of unstructured submissions, and AI-powered classification that decides where each submission goes without human triage.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $3,000'],

    pipelineNodes: [
      { id: 0, label: 'Submit',    sub: 'Web / Email / PDF form',   color: COLORS.primary,  x: '5%',  y: '20%' },
      { id: 1, label: 'Validate',  sub: 'Field + business rules',   color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'Classify',  sub: 'AI intent / category',     color: COLORS.action,   x: '65%', y: '20%' },
      { id: 3, label: 'Route',     sub: 'Team / System / Queue',    color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Confirm',   sub: 'Notification + audit log', color: COLORS.primary,  x: '65%', y: '64%' },
    ],

    stats: [
      { target: 85,  suffix: '%', label: 'Manual Triage Eliminated',iconName: 'TrendingDown',color: COLORS.primary  },
      { target: 60,  suffix: '+', label: 'Form Systems Built',      iconName: 'ClipboardList',color: COLORS.amber   },
      { target: 3,   suffix: 'min',label: 'Avg Routing Latency',   iconName: 'Timer',       color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',         iconName: 'Shield',      color: COLORS.secondary },
    ],

    features: [
      { iconName: 'ClipboardList',title: 'Dynamic Form Builder',       color: COLORS.primary,  desc: 'Multi-step, conditional web forms with field validation, file upload, and e-signature integration — embedded in your existing site or portal.' },
      { iconName: 'Brain',        title: 'AI Intake Classification',   color: COLORS.action,   desc: 'LLM-powered classification of free-text form submissions — detecting intent, category, urgency, and routing destination without manual triage.' },
      { iconName: 'Shield',       title: 'Validation Rules Engine',    color: COLORS.amber,    desc: 'Business logic validation: required fields, cross-field dependencies, format checks, and database lookups — all before a form submission is accepted.' },
      { iconName: 'GitMerge',     title: 'Intelligent Routing',        color: COLORS.secondary,desc: 'Submissions routed to the right team, system, or workflow based on classification output — with escalation rules for ambiguous cases.' },
      { iconName: 'Activity',     title: 'Submission Tracking',        color: COLORS.gold,     desc: 'Every submission tracked with status, timestamps, routing path, and outcome — queryable by the operations team without touching a database.' },
      { iconName: 'Database',     title: 'CRM / ERP Integration',      color: COLORS.cyan,     desc: 'Form data written directly to Salesforce, HubSpot, your ERP, or any API — with field mapping, deduplication, and error handling.' },
    ],

    process: [
      { step: '01', title: 'Form & Routing Design', desc: 'Current intake process mapped, form fields defined, routing logic specified, and downstream system connections agreed.' },
      { step: '02', title: 'Form & AI Build',       desc: 'Form built, AI classification trained or prompted on real submission samples, and routing logic implemented.' },
      { step: '03', title: 'Integration & Test',     desc: 'CRM/ERP integration tested end-to-end, routing validated against edge cases, and submission tracking live.' },
      { step: '04', title: 'Deploy & Monitor',       desc: 'Production launch with submission dashboard and 30-day support to tune classification and routing rules.' },
    ],

    deliverables: [
      'Intelligent form (embedded or standalone)',
      'AI classification model / prompts',
      'Routing logic implementation',
      'CRM / ERP integration',
      'Submission tracking dashboard',
      'Validation rules documentation',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'React',       color: COLORS.primary  },
      { label: 'FastAPI',     color: COLORS.amber    },
      { label: 'OpenAI',      color: COLORS.action   },
      { label: 'PostgreSQL',  color: COLORS.secondary },
      { label: 'Salesforce',  color: COLORS.gold     },
      { label: 'HubSpot',     color: COLORS.cyan     },
      { label: 'Celery',      color: COLORS.primary  },
      { label: 'Twilio',      color: COLORS.amber    },
    ],

    tiers: [
      { name: 'Smart Form',      price: 'From $3,000', featured: false,
        desc:     'Validated form with CRM integration and basic routing.',
        features: ['Form build', 'Validation rules', 'CRM integration', '2–3 week delivery'] },
      { name: 'Intelligent Intake',price: 'From $7,000',featured: true,
        desc:     'AI-powered intake with classification, routing, and tracking dashboard.',
        features: ['AI classification', 'Intelligent routing', 'Submission tracking', 'Multi-system integration', '30-day support'] },
      { name: 'Enterprise Intake', price: 'Custom',     featured: false,
        desc:     'High-volume intake platform with custom models and compliance.',
        features: ['Custom AI models', 'HIPAA / GDPR ready', 'Multi-portal support', 'SLA agreement'] },
    ],
  },

  // ── 8. Report Generation ──────────────────────────────────────────────────
  'reporting': {
    id:          'reporting',
    title:       'Report Generation',
    tagline:     'Automated reports that go out without anyone building them.',
    badge:       'Document & Data',
    accentColor: COLORS.secondary,
    heroDesc:    'Recurring reports that take an analyst two hours to build every week are a solved problem. We automate report generation end-to-end — data collection, transformation, formatting, and distribution — so Monday morning\'s board report lands in inboxes at 8am without anyone touching a spreadsheet.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $3,000'],

    pipelineNodes: [
      { id: 0, label: 'Schedule',  sub: 'Time / Event trigger',     color: COLORS.secondary,x: '5%',  y: '20%' },
      { id: 1, label: 'Collect',   sub: 'Pull data from all sources',color: COLORS.amber,   x: '35%', y: '8%'  },
      { id: 2, label: 'Transform', sub: 'Calculate + format',       color: COLORS.action,   x: '65%', y: '20%' },
      { id: 3, label: 'Generate',  sub: 'PDF / Excel / Dashboard',  color: COLORS.primary,  x: '35%', y: '64%' },
      { id: 4, label: 'Distribute',sub: 'Email / Slack / Portal',   color: COLORS.secondary,x: '65%', y: '64%' },
    ],

    stats: [
      { target: 100, suffix: '%', label: 'Fully Automated Reports',  iconName: 'FileText',    color: COLORS.secondary },
      { target: 40,  suffix: '+', label: 'Report Systems Delivered', iconName: 'BarChart3',   color: COLORS.amber     },
      { target: 8,   suffix: 'hr',label: 'Weekly Time Saved Avg',   iconName: 'TrendingDown',color: COLORS.gold      },
      { target: 100, suffix: '%', label: 'Code Ownership',           iconName: 'Shield',      color: COLORS.action    },
    ],

    features: [
      { iconName: 'BarChart3',  title: 'Scheduled Data Collection',   color: COLORS.secondary, desc: 'Automated extraction from databases, APIs, spreadsheets, and BI tools — every data source collected and reconciled before formatting.' },
      { iconName: 'FileText',   title: 'PDF & Excel Generation',      color: COLORS.amber,     desc: 'Polished PDF reports and Excel workbooks generated programmatically — with your branding, correct formatting, and dynamic content.' },
      { iconName: 'Brain',      title: 'AI Narrative Generation',     color: COLORS.action,    desc: 'LLM-generated narrative commentary that explains the numbers — trend interpretation, anomaly flagging, and recommendation summaries.' },
      { iconName: 'Activity',   title: 'Dashboard Auto-refresh',      color: COLORS.primary,   desc: 'Power BI, Tableau, or custom React dashboards that update automatically — no manual data refresh, no stale charts.' },
      { iconName: 'Globe',      title: 'Multi-channel Distribution',  color: COLORS.gold,      desc: 'Reports emailed to distribution lists, posted to Slack channels, uploaded to SharePoint, or published to a secure portal.' },
      { iconName: 'Shield',     title: 'Data Validation Gates',       color: COLORS.cyan,      desc: 'Automated checks before distribution — missing data, outlier values, and reconciliation failures halt the report and alert the owner.' },
    ],

    process: [
      { step: '01', title: 'Report Audit',        desc: 'Current manual report documented step-by-step — data sources, formulas, formatting rules, and distribution list captured.' },
      { step: '02', title: 'Pipeline Build',       desc: 'Data collection, transformation, and generation pipeline built and tested against real data.' },
      { step: '03', title: 'Formatting & Branding',desc: 'Output templates built to match your existing report format — stakeholders review before production sign-off.' },
      { step: '04', title: 'Automate & Monitor',   desc: 'Scheduling, distribution, and validation gates configured. Monitoring alerts if a report fails to generate on time.' },
    ],

    deliverables: [
      'Report automation pipeline codebase',
      'Report template (PDF / Excel / Dashboard)',
      'Data validation configuration',
      'Distribution configuration',
      'Monitoring + failure alerting',
      'Runbook for adding new reports',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.secondary },
      { label: 'Jinja2',       color: COLORS.amber     },
      { label: 'ReportLab',    color: COLORS.action    },
      { label: 'OpenPyXL',     color: COLORS.primary   },
      { label: 'OpenAI',       color: COLORS.gold      },
      { label: 'Power BI',     color: COLORS.cyan      },
      { label: 'SendGrid',     color: COLORS.secondary },
      { label: 'Airflow',      color: COLORS.amber     },
    ],

    tiers: [
      { name: 'Single Report',    price: 'From $3,000', featured: false,
        desc:     'One recurring report automated end-to-end with distribution.',
        features: ['One report type', 'Data collection + formatting', 'Scheduled distribution', '2–3 week delivery'] },
      { name: 'Report Suite',     price: 'From $7,500', featured: true,
        desc:     'Multiple reports with AI narrative and multi-channel distribution.',
        features: ['3–6 report types', 'AI commentary', 'Multi-channel distribution', 'Validation gates', '30-day support'] },
      { name: 'Reporting Platform',price: 'Custom',    featured: false,
        desc:     'Organisation-wide automated reporting with self-service templates.',
        features: ['Unlimited reports', 'Self-service templates', 'Executive portal', 'Ongoing retainer option'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 3 — INTEGRATION & ALERTS
  // ══════════════════════════════════════════════════════════════════════════

  // ── 9. Integration APIs ───────────────────────────────────────────────────
  'integration': {
    id:          'integration',
    title:       'Integration APIs',
    tagline:     'Connect your systems so data flows automatically between them.',
    badge:       'Integration & Alerts',
    accentColor: COLORS.amber,
    heroDesc:    'Most automation projects fail at the integration boundary — one system can\'t talk to another, the API rate limits everything, or an auth token expires at 2am. We build robust integration middleware with proper OAuth flows, rate-limit handling, retry logic, and monitoring so your systems stay connected reliably.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $3,000'],

    pipelineNodes: [
      { id: 0, label: 'Source',    sub: 'CRM / ERP / API',          color: COLORS.amber,    x: '5%',  y: '20%' },
      { id: 1, label: 'Auth',      sub: 'OAuth / API key / JWT',    color: COLORS.action,   x: '35%', y: '8%'  },
      { id: 2, label: 'Transform', sub: 'Map + normalise fields',   color: COLORS.primary,  x: '65%', y: '20%' },
      { id: 3, label: 'Retry',     sub: 'Rate limit + error handle',color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Sink',      sub: 'Target system + log',      color: COLORS.amber,    x: '65%', y: '64%' },
    ],

    stats: [
      { target: 120, suffix: '+', label: 'Integrations Built',      iconName: 'Webhook',     color: COLORS.amber    },
      { target: 99,  suffix: '%', label: 'Integration Uptime',      iconName: 'Activity',    color: COLORS.action   },
      { target: 50,  suffix: '+', label: 'SaaS Tools Supported',    iconName: 'Globe',       color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',          iconName: 'Shield',      color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Webhook',   title: 'Webhook Architecture',        color: COLORS.amber,    desc: 'Inbound and outbound webhooks with signature verification, idempotency keys, retry queuing, and dead-letter handling.' },
      { iconName: 'Globe',     title: 'SaaS Connector Library',      color: COLORS.action,   desc: 'Salesforce, HubSpot, Slack, Stripe, Jira, Google Workspace, and 50+ tools — built with proper OAuth and schema normalisation.' },
      { iconName: 'RefreshCw', title: 'Token Refresh & Auth',        color: COLORS.primary,  desc: 'OAuth token refresh, API key rotation, and per-tenant credential isolation — auth failures are caught and resolved automatically.' },
      { iconName: 'Database',  title: 'Field Mapping',               color: COLORS.secondary,desc: 'Source-to-target field mapping with type coercion, default value logic, and transformation rules for schema mismatches.' },
      { iconName: 'Activity',  title: 'Integration Monitoring',      color: COLORS.gold,     desc: 'Per-integration health dashboards, latency tracking, and alerting when a third-party API degrades or returns unexpected schemas.' },
      { iconName: 'Shield',    title: 'Rate Limit Handling',         color: COLORS.cyan,     desc: 'Automatic backoff, request queuing, and priority routing to stay within API rate limits without dropping data or triggering bans.' },
    ],

    process: [
      { step: '01', title: 'Integration Inventory', desc: 'All required connections mapped — API quality, rate limits, auth pattern, and schema documented before build.' },
      { step: '02', title: 'Adapter Design',         desc: 'Standardised adapter interface designed — normalising third-party data into your internal model.' },
      { step: '03', title: 'Build & Test',            desc: 'Each integration built with unit tests and sandbox testing against real API responses before production.' },
      { step: '04', title: 'Monitor & Document',      desc: 'Per-integration monitoring deployed, runbook written, and 30-day support window begins.' },
    ],

    deliverables: [
      'Integration codebase (your repository)',
      'OAuth + auth flow implementation',
      'Webhook handler + retry logic',
      'Field mapping documentation',
      'Per-integration monitoring',
      'Runbook for each connector',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',     color: COLORS.amber    },
      { label: 'FastAPI',    color: COLORS.action   },
      { label: 'Celery',     color: COLORS.primary  },
      { label: 'OAuth 2.0',  color: COLORS.secondary },
      { label: 'Redis',      color: COLORS.gold     },
      { label: 'AWS SQS',    color: COLORS.cyan     },
      { label: 'Docker',     color: COLORS.amber    },
      { label: 'Pytest',     color: COLORS.action   },
    ],

    tiers: [
      { name: 'Single Integration', price: 'From $3,000', featured: false,
        desc:     'One integration with monitoring and documentation.',
        features: ['One integration', 'Auth + retry logic', 'Monitoring', '1–2 week delivery'] },
      { name: 'Integration Suite',  price: 'From $7,500', featured: true,
        desc:     'Three to six integrations with webhook architecture and dashboard.',
        features: ['3–6 integrations', 'Webhook architecture', 'Per-integration monitoring', 'Runbooks', '30-day support'] },
      { name: 'Integration Hub',    price: 'Custom',      featured: false,
        desc:     'Full iPaaS-style hub for unlimited integrations and multi-tenancy.',
        features: ['Unlimited integrations', 'Per-tenant credentials', 'Custom connectors', 'SLA agreement'] },
    ],
  },

  // ── 10. Alert & Notification Systems ──────────────────────────────────────
  'alerts': {
    id:          'alerts',
    title:       'Alert & Notification Systems',
    tagline:     'The right alert, to the right person, at the right time.',
    badge:       'Integration & Alerts',
    accentColor: COLORS.action,
    heroDesc:    'Alert fatigue is as dangerous as no alerts. We design and build notification systems with intelligent severity tiering, suppression rules, and escalation logic — so on-call engineers are woken up for real incidents, not false positives, and stakeholders get the context they need to act, not just a number.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $2,500'],

    pipelineNodes: [
      { id: 0, label: 'Detect',    sub: 'Metric / log / event',     color: COLORS.action,   x: '5%',  y: '20%' },
      { id: 1, label: 'Classify',  sub: 'Severity + suppression',   color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'Enrich',    sub: 'Context + runbook link',   color: COLORS.primary,  x: '65%', y: '20%' },
      { id: 3, label: 'Route',     sub: 'Team / on-call / channel', color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Escalate',  sub: 'If unacknowledged',        color: COLORS.action,   x: '65%', y: '64%' },
    ],

    stats: [
      { target: 90,  suffix: '%', label: 'False Positive Reduction', iconName: 'AlertTriangle',color: COLORS.action  },
      { target: 70,  suffix: '+', label: 'Alert Systems Built',     iconName: 'Activity',     color: COLORS.amber   },
      { target: 5,   suffix: 'min',label: 'Avg Detection-to-Alert', iconName: 'Timer',        color: COLORS.gold    },
      { target: 100, suffix: '%', label: 'Code Ownership',          iconName: 'Shield',       color: COLORS.secondary },
    ],

    features: [
      { iconName: 'AlertTriangle',title: 'Severity Classification',   color: COLORS.action,   desc: 'P1/P2/P3/P4 severity tiers with distinct routing, escalation windows, and suppression rules — calibrated to minimise false positives.' },
      { iconName: 'Activity',     title: 'Multi-channel Routing',     color: COLORS.amber,    desc: 'Slack, PagerDuty, email, SMS, and webhook routing — with per-severity channel assignment and business-hours vs out-of-hours rules.' },
      { iconName: 'Brain',        title: 'Alert Context Enrichment',  color: COLORS.primary,  desc: 'Alerts enriched with runbook links, recent related events, affected services, and suggested first-response actions.' },
      { iconName: 'RefreshCw',    title: 'Escalation Logic',          color: COLORS.secondary,desc: 'Unacknowledged alerts escalated through a defined chain after configurable windows — nobody is left on-call without backup.' },
      { iconName: 'Shield',       title: 'Suppression & Deduplication',color: COLORS.gold,   desc: 'Alert storms suppressed by time window, correlated events grouped into single incidents, and maintenance windows respected.' },
      { iconName: 'BarChart3',    title: 'Alert Analytics',           color: COLORS.cyan,     desc: 'MTTD, MTTA, and alert volume by severity — weekly reports that identify the noisiest alert sources and guide tuning.' },
    ],

    process: [
      { step: '01', title: 'Alert Audit',          desc: 'Current alert landscape reviewed — volume, false positive rate, and gaps in coverage documented.' },
      { step: '02', title: 'Severity & Routing Design',desc: 'Severity framework, routing rules, escalation chains, and suppression logic designed with your on-call team.' },
      { step: '03', title: 'Build & Calibrate',     desc: 'Alert rules implemented and thresholds calibrated against 30 days of historical data to minimise false positives.' },
      { step: '04', title: 'Monitor & Tune',         desc: 'Alert analytics dashboard live, weekly review for the first month, and 30-day support window for tuning.' },
    ],

    deliverables: [
      'Alert rule configuration (your systems)',
      'Severity + routing framework',
      'Escalation chain setup',
      'Suppression + deduplication rules',
      'Alert analytics dashboard',
      'On-call runbook',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'PagerDuty',   color: COLORS.action   },
      { label: 'Slack',       color: COLORS.amber    },
      { label: 'Prometheus',  color: COLORS.primary  },
      { label: 'Grafana',     color: COLORS.secondary },
      { label: 'OpsGenie',    color: COLORS.gold     },
      { label: 'Python',      color: COLORS.cyan     },
      { label: 'Datadog',     color: COLORS.action   },
      { label: 'AWS SNS',     color: COLORS.amber    },
    ],

    tiers: [
      { name: 'Alert Setup',       price: 'From $2,500', featured: false,
        desc:     'Severity framework and routing for one system or service.',
        features: ['Severity framework', 'Routing setup', 'Basic suppression', '1–2 week delivery'] },
      { name: 'Alert Platform',    price: 'From $6,000', featured: true,
        desc:     'Full alert platform with escalation, enrichment, and analytics.',
        features: ['Multi-channel routing', 'Escalation chains', 'Context enrichment', 'Alert analytics', '30-day support'] },
      { name: 'Enterprise Alerts', price: 'Custom',      featured: false,
        desc:     'Organisation-wide alerting with custom ML-based anomaly detection.',
        features: ['ML anomaly detection', 'Multi-system coverage', 'SLA reporting', 'SLA agreement'] },
    ],
  },

  // ── 11. Scheduling Systems ────────────────────────────────────────────────
  'scheduling': {
    id:          'scheduling',
    title:       'Scheduling Systems',
    tagline:     'Jobs that run exactly when they should — and alert when they don\'t.',
    badge:       'Integration & Alerts',
    accentColor: COLORS.primary,
    heroDesc:    'A missed scheduled job is often invisible until someone notices the data is stale. We build scheduling systems with proper job tracking, missed-run alerting, distributed locking for jobs that must not run twice, and dashboards that make the next-scheduled and last-successful run visible to the team.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $2,500'],

    pipelineNodes: [
      { id: 0, label: 'Schedule',  sub: 'Cron / interval / event',  color: COLORS.primary,  x: '5%',  y: '20%' },
      { id: 1, label: 'Lock',      sub: 'Distributed mutex',        color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'Execute',   sub: 'Job runner + timeout',     color: COLORS.action,   x: '65%', y: '20%' },
      { id: 3, label: 'Log',       sub: 'Run history + duration',   color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Alert',     sub: 'On miss / failure / delay',color: COLORS.primary,  x: '65%', y: '64%' },
    ],

    stats: [
      { target: 99,  suffix: '.9%',label: 'Scheduled Job Reliability',iconName: 'Timer',     color: COLORS.primary  },
      { target: 80,  suffix: '+',  label: 'Scheduling Systems Built', iconName: 'Settings2', color: COLORS.amber    },
      { target: 100, suffix: '%',  label: 'Missed-run Alerting',      iconName: 'AlertTriangle',color: COLORS.gold  },
      { target: 100, suffix: '%',  label: 'Code Ownership',           iconName: 'Shield',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Timer',        title: 'Cron & Interval Scheduling', color: COLORS.primary,  desc: 'Cron expressions, interval-based schedules, and event-triggered jobs — with timezone support and daylight-saving-safe execution.' },
      { iconName: 'Shield',       title: 'Distributed Locking',        color: COLORS.amber,    desc: 'Redis-based distributed locks preventing duplicate job execution in multi-instance deployments — with configurable lock TTL and deadlock detection.' },
      { iconName: 'AlertTriangle',title: 'Missed-run Alerting',        color: COLORS.action,   desc: 'SLA-based monitoring that alerts when a job hasn\'t started or completed within its expected window — before downstream systems notice.' },
      { iconName: 'Activity',     title: 'Run History Dashboard',      color: COLORS.secondary,desc: 'Last run status, duration, output summary, and next scheduled execution visible in one dashboard — no log trawling required.' },
      { iconName: 'RefreshCw',    title: 'Retry & Timeout Logic',      color: COLORS.gold,     desc: 'Configurable retry counts, backoff strategy, and timeout enforcement — jobs that hang are terminated and retried, not left running forever.' },
      { iconName: 'Database',     title: 'Job Result Persistence',     color: COLORS.cyan,     desc: 'Run outcomes, duration, and output metadata persisted to a database — queryable for audit, SLA reporting, and performance trending.' },
    ],

    process: [
      { step: '01', title: 'Schedule Audit',       desc: 'Inventory of all existing scheduled jobs — frequency, SLA requirements, failure impact, and current monitoring gaps.' },
      { step: '02', title: 'Architecture Design',  desc: 'Scheduling infrastructure design: tool selection, locking strategy, alerting thresholds, and dashboard spec.' },
      { step: '03', title: 'Build & Test',          desc: 'Scheduler built, distributed locking tested under concurrent load, and alerting validated against simulated missed runs.' },
      { step: '04', title: 'Monitor & Handoff',     desc: 'Dashboard live, alerting configured, runbook written, and 30-day support window begins.' },
    ],

    deliverables: [
      'Scheduling system codebase',
      'Distributed lock configuration',
      'Missed-run alerting setup',
      'Run history dashboard',
      'Job management runbook',
      'SLA monitoring configuration',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',     color: COLORS.primary  },
      { label: 'Celery Beat',color: COLORS.amber    },
      { label: 'Redis',      color: COLORS.action   },
      { label: 'APScheduler',color: COLORS.secondary },
      { label: 'PostgreSQL', color: COLORS.gold     },
      { label: 'Grafana',    color: COLORS.cyan     },
      { label: 'Docker',     color: COLORS.primary  },
      { label: 'GitHub CI',  color: COLORS.amber    },
    ],

    tiers: [
      { name: 'Scheduler Setup',  price: 'From $2,500', featured: false,
        desc:     'Scheduling infrastructure with missed-run alerting and run history.',
        features: ['Scheduling setup', 'Missed-run alerting', 'Run history', '1–2 week delivery'] },
      { name: 'Full Scheduler',   price: 'From $5,500', featured: true,
        desc:     'Distributed scheduler with locking, dashboard, and SLA monitoring.',
        features: ['Distributed locking', 'Run history dashboard', 'SLA monitoring', 'Retry logic', '30-day support'] },
      { name: 'Enterprise Scheduler',price: 'Custom',  featured: false,
        desc:     'High-availability scheduler with multi-region and compliance.',
        features: ['Multi-region setup', 'HA configuration', 'Audit trail', 'SLA agreement'] },
    ],
  },

  // ── 12. Pipeline Monitoring ───────────────────────────────────────────────
  'monitoring': {
    id:          'monitoring',
    title:       'Pipeline Monitoring',
    tagline:     'Know when your automation breaks before anyone else does.',
    badge:       'Integration & Alerts',
    accentColor: COLORS.secondary,
    heroDesc:    'Silent automation failures cost more than visible ones. We build monitoring stacks for automation pipelines — freshness checks, throughput dashboards, error rate tracking, and SLA alerting — so your operations team knows a pipeline failed before the downstream team raises a ticket.',
    tags:        ['Fixed-Fee Projects', 'Full Monitoring Ownership', 'From $3,000'],

    pipelineNodes: [
      { id: 0, label: 'Instrument', sub: 'Logs / metrics / traces',  color: COLORS.secondary,x: '5%',  y: '20%' },
      { id: 1, label: 'Aggregate',  sub: 'Time-series + events',     color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'Threshold',  sub: 'SLA + anomaly rules',      color: COLORS.action,   x: '65%', y: '20%' },
      { id: 3, label: 'Alert',      sub: 'Slack / PD / email',       color: COLORS.primary,  x: '35%', y: '64%' },
      { id: 4, label: 'Dashboard',  sub: 'Ops visibility layer',     color: COLORS.secondary,x: '65%', y: '64%' },
    ],

    stats: [
      { target: 90,  suffix: '%', label: 'Faster Issue Detection',   iconName: 'Activity',   color: COLORS.secondary },
      { target: 50,  suffix: '+', label: 'Monitoring Stacks Built',  iconName: 'BarChart3',  color: COLORS.amber     },
      { target: 99,  suffix: '%', label: 'Alert Accuracy',           iconName: 'Shield',     color: COLORS.gold      },
      { target: 100, suffix: '%', label: 'Monitoring Ownership',     iconName: 'Settings2',  color: COLORS.action    },
    ],

    features: [
      { iconName: 'Activity',     title: 'Pipeline Health Dashboard',  color: COLORS.secondary,desc: 'Unified view of every automation pipeline: last run status, throughput, error rate, and next scheduled execution.' },
      { iconName: 'AlertTriangle',title: 'SLA Alerting',              color: COLORS.amber,    desc: 'Per-pipeline SLA thresholds with alerts when a job exceeds expected duration or hasn\'t started within the expected window.' },
      { iconName: 'BarChart3',    title: 'Throughput & Error Metrics', color: COLORS.action,   desc: 'Records processed per minute, error rate trends, and queue depth metrics that surface degradation before total failure.' },
      { iconName: 'Database',     title: 'Log Aggregation',           color: COLORS.primary,  desc: 'Structured logs from all pipeline steps aggregated and searchable — find the exact record that caused a failure without SSH access.' },
      { iconName: 'Eye',          title: 'Data Freshness Monitoring',  color: COLORS.gold,     desc: 'Table-level freshness SLAs — alerts when source data hasn\'t updated within the expected window, before pipelines run on stale data.' },
      { iconName: 'RefreshCw',    title: 'Incident Playbooks',        color: COLORS.cyan,     desc: 'Per-pipeline incident playbooks linked from alerts — first-response steps, escalation path, and rollback procedure in one place.' },
    ],

    process: [
      { step: '01', title: 'Coverage Assessment', desc: 'All automation pipelines inventoried, classified by business impact, and SLA requirements defined for each tier.' },
      { step: '02', title: 'Monitor Design',      desc: 'Dashboard spec, alert thresholds, and incident playbook structure agreed before implementation.' },
      { step: '03', title: 'Build & Calibrate',   desc: 'Monitoring stack built, thresholds calibrated against 30 days of historical run data, and alerting validated.' },
      { step: '04', title: 'Handoff & Runbooks',  desc: 'Dashboard live, alerting routed to on-call system, runbooks written, and 30-day support window begins.' },
    ],

    deliverables: [
      'Pipeline monitoring configuration',
      'Unified health dashboard',
      'SLA alerting setup',
      'Log aggregation configuration',
      'Data freshness monitors',
      'Per-pipeline incident runbooks',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Prometheus',   color: COLORS.secondary },
      { label: 'Grafana',      color: COLORS.amber     },
      { label: 'Loki',         color: COLORS.action    },
      { label: 'PagerDuty',    color: COLORS.primary   },
      { label: 'Python',       color: COLORS.gold      },
      { label: 'Datadog',      color: COLORS.cyan      },
      { label: 'Airflow',      color: COLORS.secondary },
      { label: 'Soda',         color: COLORS.amber     },
    ],

    tiers: [
      { name: 'Monitoring Starter', price: 'From $3,000', featured: false,
        desc:     'Health dashboard and SLA alerting for up to five pipelines.',
        features: ['Health dashboard', 'SLA alerting', 'Basic runbooks', '2–3 week delivery'] },
      { name: 'Full Monitoring Stack',price: 'From $7,000',featured: true,
        desc:     'Complete monitoring with log aggregation, freshness, and incident playbooks.',
        features: ['Log aggregation', 'Freshness monitoring', 'Incident playbooks', 'Full dashboard', '30-day support'] },
      { name: 'Enterprise Monitoring',price: 'Custom',    featured: false,
        desc:     'Organisation-wide automation observability with SLA reporting.',
        features: ['Multi-system coverage', 'SLA reporting', 'Custom dashboards', 'Ongoing retainer'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 4 — AI AUTOMATION
  // ══════════════════════════════════════════════════════════════════════════

  // ── 13. Intelligent RPA ───────────────────────────────────────────────────
  'ai-rpa': {
    id:          'ai-rpa',
    title:       'Intelligent RPA',
    tagline:     'RPA that adapts to changing inputs instead of breaking.',
    badge:       'AI Automation',
    accentColor: COLORS.amber,
    heroDesc:    'Traditional RPA breaks when a UI changes or an input varies unexpectedly. Intelligent RPA combines rule-based automation with AI perception — computer vision for UI understanding, LLMs for content interpretation, and adaptive decision logic — so bots handle real-world variability instead of requiring constant maintenance.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $5,000'],

    pipelineNodes: [
      { id: 0, label: 'Perceive',  sub: 'Vision + OCR + LLM',       color: COLORS.amber,    x: '5%',  y: '20%' },
      { id: 1, label: 'Understand',sub: 'Intent + context parsing',  color: COLORS.action,   x: '35%', y: '8%'  },
      { id: 2, label: 'Decide',    sub: 'AI routing logic',          color: COLORS.primary,  x: '65%', y: '20%' },
      { id: 3, label: 'Act',       sub: 'Adaptive UI + API action',  color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Learn',     sub: 'Feedback + correction log', color: COLORS.amber,    x: '65%', y: '64%' },
    ],

    stats: [
      { target: 80,  suffix: '%', label: 'Maintenance Reduction',   iconName: 'Settings2',   color: COLORS.amber    },
      { target: 95,  suffix: '%', label: 'Handling Accuracy',       iconName: 'Activity',    color: COLORS.action   },
      { target: 40,  suffix: '+', label: 'Intelligent Bots Shipped',iconName: 'Brain',       color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',          iconName: 'Shield',      color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Eye',       title: 'Computer Vision Navigation',  color: COLORS.amber,    desc: 'Vision-based UI element detection that doesn\'t break on minor layout changes — the bot understands what it sees, not just where to click.' },
      { iconName: 'Brain',     title: 'LLM Content Interpretation',  color: COLORS.action,   desc: 'Natural language understanding of document content, email body, form instructions — the bot reads and acts on meaning, not fixed text patterns.' },
      { iconName: 'GitMerge',  title: 'Adaptive Decision Logic',     color: COLORS.primary,  desc: 'Rule-based decisions augmented by AI classification — the bot chooses the right action from a set of options, not a rigid script.' },
      { iconName: 'RefreshCw', title: 'Self-healing Selectors',      color: COLORS.secondary,desc: 'Fallback selector strategies and auto-recovery logic when a primary UI element isn\'t found — reducing manual intervention rates.' },
      { iconName: 'FileText',  title: 'Correction Feedback Loop',    color: COLORS.gold,     desc: 'Human corrections on low-confidence decisions logged and used to improve decision accuracy over time without full retraining.' },
      { iconName: 'Activity',  title: 'Intelligent Monitoring',      color: COLORS.cyan,     desc: 'Per-run confidence scores, decision audit logs, and alerts when accuracy drops below threshold — before errors reach downstream systems.' },
    ],

    process: [
      { step: '01', title: 'Process & Variability Analysis', desc: 'Task analysed for input variability, exception types, and the AI capability needed to handle each variation reliably.' },
      { step: '02', title: 'Bot Architecture',              desc: 'Vision, LLM, and decision components designed — with fallback logic and human escalation paths for unhandled cases.' },
      { step: '03', title: 'Build & Accuracy Testing',     desc: 'Bot built and tested against real input samples including edge cases — accuracy benchmarked against agreed targets.' },
      { step: '04', title: 'Deploy & Monitor',              desc: 'Production deployment with confidence monitoring, correction feedback loop, and 30-day accuracy optimisation window.' },
    ],

    deliverables: [
      'Intelligent bot codebase (your repo)',
      'Vision + LLM integration',
      'Decision logic documentation',
      'Correction feedback system',
      'Confidence monitoring dashboard',
      'Maintenance runbook',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.amber    },
      { label: 'Playwright',   color: COLORS.action   },
      { label: 'OpenAI GPT-4o',color: COLORS.primary  },
      { label: 'OpenCV',       color: COLORS.secondary },
      { label: 'LangChain',    color: COLORS.gold     },
      { label: 'FastAPI',      color: COLORS.cyan     },
      { label: 'PostgreSQL',   color: COLORS.amber    },
      { label: 'Docker',       color: COLORS.action   },
    ],

    tiers: [
      { name: 'Intelligent Bot', price: 'From $5,000',  featured: false,
        desc:     'One intelligent RPA bot with vision and LLM-based decision logic.',
        features: ['Vision navigation', 'LLM interpretation', 'Monitoring', '3–4 week delivery'] },
      { name: 'Intelligent Bot Suite',price: 'From $11,000',featured: true,
        desc:     'Three to five intelligent bots with shared monitoring and feedback loops.',
        features: ['3–5 bots', 'Shared monitoring', 'Correction feedback loop', 'Accuracy tracking', '30-day support'] },
      { name: 'Enterprise AI RPA', price: 'Custom',     featured: false,
        desc:     'Organisation-wide intelligent automation with custom models.',
        features: ['Custom model training', 'Enterprise scale', 'Compliance audit trail', 'SLA agreement'] },
    ],
  },

  // ── 14. LLM Automation ────────────────────────────────────────────────────
  'llm-automation': {
    id:          'llm-automation',
    title:       'LLM Automation',
    tagline:     'Automate tasks that require reading, writing, and understanding.',
    badge:       'AI Automation',
    accentColor: COLORS.action,
    heroDesc:    'Large language models unlock automation for tasks that previously required human judgment — reading long documents, drafting responses, summarising calls, classifying support tickets. We build reliable LLM automation with prompt versioning, output validation, cost controls, and fallback logic so AI-powered workflows are production-grade.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $5,000'],

    pipelineNodes: [
      { id: 0, label: 'Input',     sub: 'Text / Doc / Email / Data', color: COLORS.action,   x: '5%',  y: '20%' },
      { id: 1, label: 'Prompt',    sub: 'Versioned prompt library',  color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'LLM',       sub: 'GPT-4o / Claude / Gemini', color: COLORS.primary,  x: '65%', y: '20%' },
      { id: 3, label: 'Validate',  sub: 'Output schema + rules',    color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Act',       sub: 'Write / Route / Notify',   color: COLORS.action,   x: '65%', y: '64%' },
    ],

    stats: [
      { target: 85,  suffix: '%', label: 'Knowledge Tasks Automated',iconName: 'Brain',       color: COLORS.action   },
      { target: 60,  suffix: '+', label: 'LLM Workflows Built',      iconName: 'Settings2',   color: COLORS.amber    },
      { target: 40,  suffix: '%', label: 'LLM Cost Reduction',       iconName: 'TrendingDown',color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',           iconName: 'Shield',      color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Brain',     title: 'Prompt Engineering',           color: COLORS.action,   desc: 'Structured prompt design with few-shot examples, output format specification, and systematic evaluation against real task samples.' },
      { iconName: 'FileText',  title: 'Document Summarisation',       color: COLORS.amber,    desc: 'Long-document summarisation pipelines with chunking strategy, progressive summarisation, and accuracy evaluation.' },
      { iconName: 'Repeat',    title: 'Response Drafting Automation', color: COLORS.primary,  desc: 'Customer support, email response, and report drafting automation — with human-review queue for low-confidence outputs.' },
      { iconName: 'Database',  title: 'Data Classification & Tagging',color: COLORS.secondary,desc: 'LLM-based classification of support tickets, documents, feedback, and records — at the accuracy level where manual review is no longer needed.' },
      { iconName: 'Zap',       title: 'Cost & Latency Management',    color: COLORS.gold,     desc: 'Prompt caching, model routing to cheaper alternatives for simple tasks, token budgets, and async queuing for non-urgent jobs.' },
      { iconName: 'Activity',  title: 'Quality Monitoring',           color: COLORS.cyan,     desc: 'Output quality tracking over time — catching prompt drift, model version changes, and quality degradation before they affect operations.' },
    ],

    process: [
      { step: '01', title: 'Task Analysis',         desc: 'Task analysed for LLM suitability, output variability, and quality requirements. Human baseline accuracy established.' },
      { step: '02', title: 'Prompt Engineering',    desc: 'Prompts developed iteratively against real task samples — evaluated on accuracy, consistency, and edge-case handling.' },
      { step: '03', title: 'Pipeline Build',         desc: 'LLM calls integrated into an orchestrated pipeline with validation, fallback logic, and cost controls.' },
      { step: '04', title: 'Deploy & Monitor',       desc: 'Production deployment with quality monitoring and 30-day accuracy optimisation window.' },
    ],

    deliverables: [
      'LLM automation pipeline codebase',
      'Prompt library with version control',
      'Output validation logic',
      'Cost management configuration',
      'Quality monitoring dashboard',
      'Human-review queue (where needed)',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.action   },
      { label: 'OpenAI',       color: COLORS.amber    },
      { label: 'Anthropic',    color: COLORS.primary  },
      { label: 'LangChain',    color: COLORS.secondary },
      { label: 'FastAPI',      color: COLORS.gold     },
      { label: 'Celery',       color: COLORS.cyan     },
      { label: 'PostgreSQL',   color: COLORS.action   },
      { label: 'Redis',        color: COLORS.amber    },
    ],

    tiers: [
      { name: 'LLM Task',       price: 'From $5,000',  featured: false,
        desc:     'One LLM-powered task automated with monitoring and cost controls.',
        features: ['Single LLM task', 'Prompt library', 'Cost controls', '3–4 week delivery'] },
      { name: 'LLM Workflow Suite',price: 'From $11,000',featured: true,
        desc:     'Multiple LLM automation tasks with quality monitoring and human review.',
        features: ['3–5 LLM tasks', 'Quality monitoring', 'Human-review queue', 'Cost dashboard', '30-day support'] },
      { name: 'Enterprise LLM Ops',price: 'Custom',    featured: false,
        desc:     'Organisation-wide LLM automation with fine-tuning and governance.',
        features: ['Custom fine-tuning', 'Governance framework', 'Audit trail', 'SLA agreement'] },
    ],
  },

  // ── 15. Decision Engines ──────────────────────────────────────────────────
  'decision-engine': {
    id:          'decision-engine',
    title:       'Decision Engines',
    tagline:     'Automate the decisions — not just the data movement.',
    badge:       'AI Automation',
    accentColor: COLORS.primary,
    heroDesc:    'Most automation stops at data movement and leaves the decisions to humans. We build decision engines — rules-based, ML-powered, or hybrid — that make routing, approval, pricing, and classification decisions automatically, with full audit trails, explainability, and human-override capability built in.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $6,000'],

    pipelineNodes: [
      { id: 0, label: 'Input',     sub: 'Case / Record / Event',    color: COLORS.primary,  x: '5%',  y: '20%' },
      { id: 1, label: 'Enrich',    sub: 'Feature extraction',       color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'Score',     sub: 'ML model / rules engine',  color: COLORS.action,   x: '65%', y: '20%' },
      { id: 3, label: 'Explain',   sub: 'SHAP / decision trace',    color: COLORS.secondary,x: '35%', y: '64%' },
      { id: 4, label: 'Act',       sub: 'Route / approve / notify', color: COLORS.primary,  x: '65%', y: '64%' },
    ],

    stats: [
      { target: 90,  suffix: '%', label: 'Decisions Automated',     iconName: 'Brain',       color: COLORS.primary  },
      { target: 40,  suffix: '+', label: 'Decision Engines Built',  iconName: 'Settings2',   color: COLORS.amber    },
      { target: 99,  suffix: '%', label: 'Decision Accuracy',       iconName: 'Activity',    color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Full Audit Trail',        iconName: 'Shield',      color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Brain',      title: 'Rules Engine Design',        color: COLORS.primary,  desc: 'Structured decision tables and rule chains that encode business logic — readable by non-engineers, versioned, and testable.' },
      { iconName: 'Activity',   title: 'ML Scoring Integration',     color: COLORS.action,   desc: 'Trained ML models serving probability scores for approval, churn, risk, or routing — integrated into the decision pipeline as callable services.' },
      { iconName: 'Eye',        title: 'Decision Explainability',    color: COLORS.amber,    desc: 'SHAP values, decision traces, and plain-language explanations for every automated decision — required for compliance and user trust.' },
      { iconName: 'GitMerge',   title: 'Hybrid Decision Logic',      color: COLORS.secondary,desc: 'Rules for high-confidence cases, ML for uncertain cases, and human escalation for low-confidence or high-stakes decisions.' },
      { iconName: 'Shield',     title: 'Audit Trail',                color: COLORS.gold,     desc: 'Every decision logged with inputs, model version, rule triggered, and outcome — queryable for compliance, debugging, and performance review.' },
      { iconName: 'RefreshCw',  title: 'Human Override Workflow',    color: COLORS.cyan,     desc: 'Clean human-in-the-loop interface for escalated cases — override logged, feedback captured, and model improvement triggered.' },
    ],

    process: [
      { step: '01', title: 'Decision Mapping',     desc: 'Every decision point in the process documented — inputs, options, business rules, and the data currently used by humans.' },
      { step: '02', title: 'Engine Architecture',  desc: 'Rules vs ML selection per decision type, explainability approach, and human escalation thresholds agreed.' },
      { step: '03', title: 'Build & Validate',     desc: 'Engine built and back-tested against historical decisions. Accuracy and false-positive rates measured before production.' },
      { step: '04', title: 'Deploy & Monitor',     desc: 'Decision dashboard live, audit trail active, and 30-day monitoring window to tune thresholds.' },
    ],

    deliverables: [
      'Decision engine codebase',
      'Rules engine configuration',
      'ML scoring service (if applicable)',
      'Decision audit trail database',
      'Explainability output',
      'Human override interface',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',         color: COLORS.primary  },
      { label: 'scikit-learn',   color: COLORS.amber    },
      { label: 'SHAP',           color: COLORS.action   },
      { label: 'FastAPI',        color: COLORS.secondary },
      { label: 'PostgreSQL',     color: COLORS.gold     },
      { label: 'Redis',          color: COLORS.cyan     },
      { label: 'Drools',         color: COLORS.primary  },
      { label: 'React',          color: COLORS.amber    },
    ],

    tiers: [
      { name: 'Rules Engine',      price: 'From $6,000',  featured: false,
        desc:     'Decision engine for one process with audit trail and human override.',
        features: ['Rules engine', 'Audit trail', 'Override interface', '4–5 week delivery'] },
      { name: 'AI Decision Engine', price: 'From $13,000', featured: true,
        desc:     'Hybrid rules + ML decision engine with explainability and monitoring.',
        features: ['Rules + ML hybrid', 'SHAP explainability', 'Human escalation', 'Decision dashboard', '30-day support'] },
      { name: 'Enterprise Decision Platform', price: 'Custom', featured: false,
        desc:     'Organisation-wide decision automation with governance and compliance.',
        features: ['Multi-process coverage', 'Regulatory compliance', 'Model governance', 'SLA agreement'] },
    ],
  },

  // ── 16. Audit Trail Systems ───────────────────────────────────────────────
  'audit-trail': {
    id:          'audit-trail',
    title:       'Audit Trail Systems',
    tagline:     'Every automated action logged, queryable, and compliant.',
    badge:       'AI Automation',
    accentColor: COLORS.secondary,
    heroDesc:    'Automated systems are invisible without audit trails. Compliance teams, regulators, and internal reviewers need to understand exactly what happened, when, why, and who or what triggered it. We build immutable audit trail systems that capture every automated action with the context needed to reconstruct a decision months later.',
    tags:        ['Fixed-Fee Projects', 'Compliance Documentation', 'From $4,000'],

    pipelineNodes: [
      { id: 0, label: 'Action',    sub: 'Any automated event',      color: COLORS.secondary,x: '5%',  y: '20%' },
      { id: 1, label: 'Capture',   sub: 'Who / what / when / why',  color: COLORS.amber,    x: '35%', y: '8%'  },
      { id: 2, label: 'Sign',      sub: 'Tamper-proof hash',        color: COLORS.action,   x: '65%', y: '20%' },
      { id: 3, label: 'Store',     sub: 'Immutable append-only log', color: COLORS.primary,  x: '35%', y: '64%' },
      { id: 4, label: 'Query',     sub: 'Search + export + report', color: COLORS.secondary,x: '65%', y: '64%' },
    ],

    stats: [
      { target: 100, suffix: '%', label: 'Action Coverage',          iconName: 'Shield',      color: COLORS.secondary },
      { target: 40,  suffix: '+', label: 'Audit Systems Delivered',  iconName: 'FileText',    color: COLORS.amber     },
      { target: 100, suffix: '%', label: 'Tamper-proof Logging',     iconName: 'Lock',        color: COLORS.gold      },
      { target: 100, suffix: '%', label: 'Code Ownership',           iconName: 'Settings2',   color: COLORS.action    },
    ],

    features: [
      { iconName: 'Shield',    title: 'Immutable Event Log',          color: COLORS.secondary,desc: 'Append-only event store with cryptographic hash chaining — any tampering with historical records is detectable.' },
      { iconName: 'FileText',  title: 'Rich Event Context',           color: COLORS.amber,    desc: 'Every log entry captures: actor (human or bot), action type, input state, output state, timestamp, and triggering context.' },
      { iconName: 'Search',    title: 'Queryable Audit Interface',    color: COLORS.action,   desc: 'Compliance team-friendly search interface — filter by actor, date, action type, or record ID without DBA involvement.' },
      { iconName: 'Database',  title: 'GDPR & HIPAA Compliance',     color: COLORS.primary,  desc: 'Retention policies, right-to-erasure handling for PII, and data export formats aligned to GDPR and HIPAA audit requirements.' },
      { iconName: 'Activity',  title: 'Real-time Audit Streaming',   color: COLORS.gold,     desc: 'Events streamed in real-time to a SIEM or compliance monitoring system — suspicious patterns flagged as they occur.' },
      { iconName: 'BarChart3', title: 'Compliance Reporting',        color: COLORS.cyan,     desc: 'Pre-built compliance reports — action summaries, user activity reports, and exception logs — exportable on demand or scheduled.' },
    ],

    process: [
      { step: '01', title: 'Compliance Requirements', desc: 'Regulatory and internal audit requirements mapped to specific events, retention periods, and access controls.' },
      { step: '02', title: 'Event Schema Design',     desc: 'Event taxonomy, field standards, and hash-chain architecture designed and reviewed before implementation.' },
      { step: '03', title: 'Integration Build',       desc: 'Audit hooks integrated into all automation systems, immutable store provisioned, and query interface built.' },
      { step: '04', title: 'Compliance Validation',   desc: 'Audit system validated against compliance requirements, reporting templates built, and 30-day support begins.' },
    ],

    deliverables: [
      'Audit trail system codebase',
      'Immutable event store',
      'Event capture integrations',
      'Compliance query interface',
      'Compliance report templates',
      'GDPR / HIPAA documentation',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.secondary },
      { label: 'PostgreSQL',   color: COLORS.amber     },
      { label: 'Apache Kafka', color: COLORS.action    },
      { label: 'FastAPI',      color: COLORS.primary   },
      { label: 'React',        color: COLORS.gold      },
      { label: 'AWS S3',       color: COLORS.cyan      },
      { label: 'HashiCorp Vault',color: COLORS.secondary },
      { label: 'Splunk',       color: COLORS.amber     },
    ],

    tiers: [
      { name: 'Audit Trail',       price: 'From $4,000', featured: false,
        desc:     'Immutable audit log for one automation system with query interface.',
        features: ['Immutable log', 'Event capture', 'Query interface', '2–3 week delivery'] },
      { name: 'Compliance Platform',price: 'From $9,000',featured: true,
        desc:     'Full audit system across all automations with reporting and GDPR support.',
        features: ['Multi-system coverage', 'GDPR / HIPAA support', 'Compliance reports', 'Real-time streaming', '30-day support'] },
      { name: 'Enterprise Compliance',price: 'Custom',  featured: false,
        desc:     'SOC 2 / ISO 27001 ready audit infrastructure with SIEM integration.',
        features: ['SIEM integration', 'SOC 2 / ISO 27001', 'Multi-region storage', 'SLA agreement'] },
    ],
  },

};