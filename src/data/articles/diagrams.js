// One infographic per article, rendered by components/ArticleDiagram.jsx.
//   kind: 'flow' | 'compare' | 'tiers' | 'grid' | 'bars'
//   cover: the motif drawn on the article's cover art (components/ArticleCover.jsx)
// Flow nodes are [label, short description, optional flag]. Nothing here states a statistic.

export const DIAGRAMS = {
  'custom-software-project-lifecycle': {
    kind: 'flow', cover: 'flow',
    title: 'A custom software project at a glance',
    caption: 'Seven stages, each ending in something you can inspect.',
    lanes: [{ nodes: [
      ['Discovery', 'Understand the problem'],
      ['Scoping', 'Agree what ships first'],
      ['Design', 'Prototype before building'],
      ['Build', 'Short, demoable cycles'],
      ['Testing', 'Automated and manual'],
      ['Launch', 'A rehearsed release'],
      ['Support', 'Handover and care'],
    ] }],
  },

  'build-buy-or-customise': {
    kind: 'compare', cover: 'compare',
    title: 'Buy, customise or build: the trade-offs',
    caption: 'A general guide. Your own requirements decide where each option lands.',
    columns: ['Buy', 'Customise', 'Build'],
    rows: [
      ['Speed to start', 'Fastest', 'Medium', 'Slowest'],
      ['Fit to your process', 'Limited', 'Good within limits', 'Exact'],
      ['Control of the roadmap', 'Low', 'Medium', 'Full'],
      ['Upfront cost', 'Lowest', 'Medium', 'Highest'],
      ['Who maintains it', 'The vendor', 'Shared', 'You'],
      ['Best for', 'Commodity needs', 'Mostly standard needs with quirks', 'What makes you different'],
    ],
  },

  'staff-augmentation-explained': {
    kind: 'compare', cover: 'compare',
    title: 'Four ways to add engineering capacity',
    caption: 'Staff augmentation sits between hiring and project delivery.',
    columns: ['Hire', 'Staff augmentation', 'Project delivery', 'Freelancers'],
    rows: [
      ['Who directs the work', 'You', 'You', 'The vendor', 'You'],
      ['Who owns the outcome', 'You', 'You', 'The vendor', 'You'],
      ['Speed to start', 'Slowest', 'Weeks', 'Weeks', 'Varies'],
      ['Commitment', 'Long term', 'Flexible', 'Fixed scope', 'Flexible'],
      ['Best for', 'Core, permanent roles', 'Extra capacity or niche skills', 'A defined result', 'Small, short tasks'],
    ],
  },

  'is-your-business-ready-for-ai': {
    kind: 'grid', cover: 'grid',
    title: 'Six signs you are ready for AI',
    caption: 'If most of these are true, a short proof of concept is a sensible next step.',
    tiles: [
      ['Measurable goal', 'A result the business cares about'],
      ['Accessible data', 'You can get at it and roughly trust it'],
      ['A baseline', 'Today\'s performance is known'],
      ['A named owner', 'Someone wants it to work'],
      ['A place in the workflow', 'The output plugs into a decision'],
      ['Willingness to change', 'The process can adapt'],
    ],
  },

  'ml-model-to-production': {
    kind: 'flow', cover: 'loop',
    title: 'From notebook to production',
    caption: 'Monitoring feeds back into retraining, so the last step leads back to the start.',
    lanes: [{ nodes: [
      ['Frame', 'Decision and action'],
      ['Baseline', 'Start simple'],
      ['Validate', 'Honest splits'],
      ['Package', 'Tested, versioned API'],
      ['Wire in', 'Connect real systems'],
      ['Release', 'Shadow, then gradual'],
      ['Monitor', 'Drift, then retrain'],
    ] }],
  },

  'rag-explained': {
    kind: 'flow', cover: 'flow',
    title: 'How a RAG system answers from your documents',
    caption: 'The top lane runs when content changes. The bottom lane runs for every question.',
    lanes: [
      { label: 'Prepare (when content changes)', nodes: [
        ['Documents', 'Policies, manuals, tickets'],
        ['Chunks', 'Passages with one idea'],
        ['Embeddings', 'Meaning as numbers'],
        ['Vector store', 'A searchable index'],
      ] },
      { label: 'Answer (every question)', nodes: [
        ['Question', 'Asked in plain language'],
        ['Retrieve', 'Find the closest passages'],
        ['Prompt', 'Question plus passages'],
        ['Language model', 'Answers only from them'],
        ['Answer', 'With cited sources'],
      ] },
    ],
  },

  'ai-agents-vs-automation': {
    kind: 'compare', cover: 'compare',
    title: 'Automation or agent?',
    caption: 'Most real systems use a workflow with an AI step, and add agent behaviour only where needed.',
    columns: ['Automation (workflow)', 'AI agent'],
    rows: [
      ['Steps', 'Fixed in advance', 'Chosen by the agent'],
      ['Predictability', 'High', 'Lower'],
      ['Cost and speed per task', 'Low and fast', 'Higher and slower'],
      ['Testing', 'Straightforward', 'Needs scenario suites'],
      ['Risk of a wrong action', 'Contained', 'Needs guardrails and approval'],
      ['Best for', 'Known, repeatable processes', 'Open-ended tasks that vary'],
    ],
  },

  'mlops-for-small-teams': {
    kind: 'tiers', shape: 'stairs', cover: 'stairs',
    title: 'The MLOps ladder: climb one step at a time',
    caption: 'Move up when the pain of your current level justifies it.',
    items: [
      ['Level 1', 'Code and environment in Git'],
      ['Level 2', 'Experiments tracked, tests automated'],
      ['Level 3', 'Scripted, repeatable deployment'],
      ['Level 4', 'Live monitoring and alerts'],
      ['Level 5', 'Automated retraining with a safety check'],
    ],
  },

  'building-a-data-pipeline': {
    kind: 'flow', cover: 'flow',
    title: 'A data pipeline from source to dashboard',
    caption: 'Keep a raw copy first, test before serving, and watch freshness at the end.',
    lanes: [{ nodes: [
      ['Sources', 'Apps, databases, files'],
      ['Raw layer', 'An untouched copy'],
      ['Transform', 'Clean and model'],
      ['Test', 'Keys, ranges, totals'],
      ['Serve', 'Warehouse, BI, models'],
      ['Monitor', 'Freshness and alerts'],
    ] }],
  },

  'data-quality-checks': {
    kind: 'grid', cover: 'grid',
    title: 'Eight data quality checks before modelling',
    caption: 'Run them in the first hour, then automate the ones that matter.',
    tiles: [
      ['Completeness', 'What is missing, and why?'],
      ['Validity', 'Are values in sensible ranges?'],
      ['Uniqueness', 'Are there duplicate records?'],
      ['Consistency', 'Same thing, same label?'],
      ['Timeliness', 'Recent enough for the decision?'],
      ['Label quality', 'Are the outcomes right?'],
      ['Leakage', 'Any future information in features?'],
      ['Representativeness', 'Does it match real use?'],
    ],
  },

  'cloud-setup-for-data-and-ai': {
    kind: 'tiers', shape: 'layers', cover: 'layers',
    title: 'The layers of a sound cloud setup',
    caption: 'Build from the bottom up: each layer depends on the one beneath it.',
    items: [
      ['Delivery and monitoring', 'CI/CD, logs, alerts, cost budgets'],
      ['Workloads', 'Apps, jobs and model endpoints'],
      ['Data and storage', 'Databases, warehouse, object storage'],
      ['Network and access', 'Roles, secrets, private networks'],
      ['Accounts and environments', 'Development, staging and production kept apart'],
    ],
  },

  'explainable-ai-in-healthcare': {
    kind: 'bars', cover: 'bars',
    title: 'How to read a feature-attribution view',
    caption: 'Layout only, not real results. Bars to the right push the predicted risk up; bars to the left push it down.',
    items: [
      ['Admissions in the last year', 0.82],
      ['Number of medications', 0.55],
      ['Length of stay', 0.3],
      ['Age band', -0.22],
      ['Follow-up appointment booked', -0.62],
    ],
    left: 'Lowers predicted risk',
    right: 'Raises predicted risk',
  },

  'revenue-cycle-analytics-explained': {
    kind: 'flow', cover: 'loop',
    title: 'The revenue cycle and where money leaks',
    caption: 'Each flagged step is a place where analytics can measure, predict or prioritise.',
    lanes: [{ nodes: [
      ['Registration', 'Eligibility and authorisation', 'Eligibility gaps'],
      ['Coding', 'Services turned into codes', 'Coding errors'],
      ['Claim', 'Submitted to the payer'],
      ['Adjudication', 'Pay, adjust or deny', 'Denials, underpayments'],
      ['Payment', 'Posted and reconciled'],
      ['Follow-up', 'Open balances worked', 'Slow follow-up'],
    ] }],
  },

  'healthcare-data-without-phi': {
    kind: 'flow', cover: 'spectrum',
    title: 'From public data to real patient data',
    caption: 'Start on the left. Move right only for the questions that truly need it.',
    note: 'Risk and obligations increase from left to right',
    lanes: [{ nodes: [
      ['Public data', 'No individuals described'],
      ['Synthetic data', 'Artificial records'],
      ['De-identified', 'Identifiers removed, still controlled'],
      ['Real PHI', 'Full controls and agreements'],
    ] }],
  },

  'fraud-detection-in-production': {
    kind: 'tiers', shape: 'funnel', cover: 'funnel',
    title: 'From all activity to confirmed cases',
    caption: 'Each stage narrows the list, and reviewer verdicts flow back as new labels.',
    items: [
      ['All activity', 'Everything is scored'],
      ['Ranked', 'Behaviour compared with peers'],
      ['Alerts', 'Volume set by review capacity'],
      ['Reviewed', 'Reasons shown to the reviewer'],
      ['Confirmed', 'Becomes a new label'],
    ],
  },

  'rna-seq-analysis-pipeline': {
    kind: 'flow', cover: 'flow',
    title: 'The RNA-seq analysis pipeline',
    caption: 'Tools shown are common choices, not the only ones.',
    lanes: [{ nodes: [
      ['FASTQ reads', 'Raw sequencer output'],
      ['Quality control', 'FastQC, MultiQC'],
      ['Trimming', 'fastp, Trim Galore'],
      ['Alignment', 'STAR, HISAT2 or Salmon'],
      ['Counting', 'Reads per gene'],
      ['Differential expression', 'DESeq2, edgeR, limma'],
      ['Interpretation', 'Pathways and validation'],
    ] }],
  },
};
