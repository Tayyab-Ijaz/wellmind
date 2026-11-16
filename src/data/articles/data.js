// Data engineering & cloud articles. See software.js for the block shapes.

export const DATA_ARTICLES = [
  {
    slug: 'building-a-data-pipeline',
    cat: 'Data & Cloud',
    title: 'Building a Data Pipeline: From Source Systems to Dashboard',
    excerpt: 'How raw data in many systems becomes a trusted, up-to-date dashboard or model input, and the design choices that keep it from breaking.',
    tags: ['Data Engineering', 'ETL', 'Analytics'],
    intro: 'A dashboard is only as trustworthy as the pipeline behind it. A good pipeline moves data from where it is created to where it is used, cleans it on the way and tells you loudly when something is wrong.',
    body: [
      {
        h: 'What a data pipeline is',
        p: [
          'A pipeline is an automated, repeatable path for data: extract it from source systems such as databases, applications and files, transform it into a consistent shape, and load it somewhere people and models can use it, typically a warehouse or lake.',
        ],
      },
      {
        h: 'Why it deserves real engineering',
        p: [
          'Manual exports and spreadsheet joins work until the person who built them is away. Pipelines remove that dependency, make numbers consistent across teams and give you a place to enforce quality, so two reports no longer disagree about last month.',
        ],
      },
      {
        h: 'How to build one',
        steps: [
          ['List sources and questions', 'Start from the decisions the data must support, then identify which systems hold the data and how you can access them.'],
          ['Ingest into a raw layer', 'Copy data as it is into storage you control, with timestamps and source information. Keeping the raw copy lets you reprocess later without going back to the source.'],
          ['Transform in stages', 'Clean and standardise types, names and keys, then model the data into tables shaped around business concepts such as customers, orders or claims.'],
          ['Test the data', 'Check for nulls in key fields, duplicates, values out of range and totals that should reconcile. Fail loudly when a check breaks.'],
          ['Serve it', 'Expose curated tables to BI tools, APIs or machine learning features through clear, documented definitions.'],
          ['Orchestrate and monitor', 'Schedule the steps with dependencies, retry on failure, alert a person and track freshness so users know how current the data is.'],
        ],
      },
      {
        h: 'Design choices that matter',
        list: [
          'Batch or streaming: most reporting needs batch. Choose streaming only when decisions truly depend on seconds-old data.',
          'Idempotency: running a step twice should give the same result, so reruns after a failure are safe.',
          'Schema changes: expect sources to change; detect it and handle it deliberately rather than breaking silently.',
          'Documentation: every important metric should have one written definition.',
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Building for every possible future need instead of the first two or three decisions.',
          'Transforming data before keeping a raw copy.',
          'No tests, so bad numbers reach a dashboard before anyone notices.',
          'No owner, so nobody fixes the pipeline when a source changes.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Choose one important report that is currently built by hand. Automate exactly that, with tests and monitoring, and let it prove the pattern before you widen the scope.',
        ],
      },
    ],
  },

  {
    slug: 'data-quality-checks',
    cat: 'Data & Cloud',
    title: 'Data Quality Checks to Run Before Any Model',
    excerpt: 'A model can only learn from what you give it. The checks that catch the problems most likely to quietly ruin results, before you train anything.',
    tags: ['Data Quality', 'Data Science', 'Validation'],
    intro: 'Most disappointing models trace back to data problems that were visible in the first hour of looking. A short, disciplined set of checks saves weeks of confused debugging.',
    body: [
      {
        h: 'What data quality means',
        p: [
          'It means the data is fit for the question you are asking: accurate enough, complete enough, recent enough and consistent enough. It is not about perfection; it is about knowing exactly where the data is weak.',
        ],
      },
      {
        h: 'Why it comes first',
        p: [
          'A model will happily learn errors, duplicates and artefacts as if they were signal. The result looks impressive in testing and fails in the real world, which is a worse outcome than a model that fails early.',
        ],
      },
      {
        h: 'The checks to run',
        steps: [
          ['Completeness', 'How much is missing, and is it missing at random? Missing values that correlate with the outcome are information, and a trap.'],
          ['Validity', 'Do values fall in sensible ranges and formats? Look for impossible dates, negative quantities and codes that do not exist.'],
          ['Uniqueness', 'Are there duplicate records or duplicate keys? Duplicates split across training and test sets inflate accuracy.'],
          ['Consistency', 'Do the same things carry the same labels across systems and time? Units, currencies and category names often drift.'],
          ['Timeliness', 'Is the data recent enough for the decision, and does the history cover the situations the model will face?'],
          ['Label quality', 'How were outcome labels created? Check a sample by hand, and measure agreement if several people labelled.'],
          ['Leakage', 'Does any feature contain information that would not be known at prediction time? If a feature looks too good, it often is.'],
          ['Representativeness', 'Does the data reflect the population you will serve, including groups that are rare but important?'],
        ],
      },
      {
        h: 'How to make the checks stick',
        p: [
          'Turn the checks into code that runs automatically, using a validation library or your pipeline\'s own tests, and run it on every new batch of data. Treat a failing check like a failing unit test: investigate before proceeding.',
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Dropping every row with a missing value without asking why it is missing.',
          'Random train and test splits on time-based problems, which let the future leak into the past.',
          'Trusting labels because they came from a system rather than checking a sample.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Before training, spend an hour profiling the data: counts, missing rates, ranges, duplicates and a time plot. Write down three things that surprised you; each one is a question for the data owner.',
        ],
      },
    ],
  },

  {
    slug: 'cloud-setup-for-data-and-ai',
    cat: 'Data & Cloud',
    title: 'Choosing a Cloud Setup for Data and AI Workloads',
    excerpt: 'A vendor-neutral guide to deciding what to run where: storage, compute, environments, security and cost controls, without over-building.',
    tags: ['Cloud', 'Infrastructure', 'DevOps'],
    intro: 'Cloud choices made in the first month tend to stay for years. A little structure early on, around environments, access and cost, prevents the expensive clean-up later.',
    body: [
      {
        h: 'What a cloud setup includes',
        p: [
          'It is the foundation your systems run on: accounts and access control, networking, storage for data, compute for processing and serving, deployment automation and monitoring. For AI work it may also include GPU capacity and a place to host models.',
        ],
      },
      {
        h: 'Why it needs a plan',
        p: [
          'Without one, you get a shared account where everyone is an administrator, resources nobody remembers creating and a bill that surprises you. A small amount of structure keeps systems secure, reproducible and affordable.',
        ],
      },
      {
        h: 'How to approach it',
        steps: [
          ['Start from the workload', 'Is it a web app, a batch data job, a streaming feed or a model endpoint? The shape decides whether serverless, containers or virtual machines fit best.'],
          ['Prefer managed services', 'Managed databases, queues and warehouses remove undifferentiated work. Run your own only when there is a clear reason.'],
          ['Separate environments', 'Keep development, staging and production apart, with their own access, so an experiment cannot touch live data.'],
          ['Define infrastructure as code', 'Describe resources in version-controlled templates so environments can be recreated and changes reviewed.'],
          ['Automate delivery', 'A pipeline that tests and deploys on every change makes releases routine instead of events.'],
          ['Secure by default', 'Least-privilege access, secrets in a vault rather than in code, encryption at rest and in transit, and audit logging switched on.'],
          ['Control cost', 'Tag resources, set budgets and alerts, shut down idle environments and review the bill monthly.'],
          ['Observe it', 'Collect logs, metrics and alerts so failures are noticed by you, not by users.'],
        ],
      },
      {
        h: 'Choosing between providers',
        p: [
          'The big providers cover the same needs. Favour the one your team already knows, that fits your compliance requirements and that has the managed services you will actually use. Avoid designing around a theoretical move between providers; keep portability reasonable by using containers and standard tools where it costs little.',
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Running everything in one account with broad permissions.',
          'Over-engineering for scale you may never reach.',
          'Leaving GPU instances running between experiments.',
          'No budget alerts until the first surprising invoice.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Set up separate environments, infrastructure as code for the basics and budget alerts before deploying anything important. Those three steps are cheap and cover most early regrets.',
        ],
      },
    ],
  },
];
