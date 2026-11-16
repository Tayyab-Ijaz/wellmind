// Healthcare & biomedical articles. `cases` links to our own published case studies (slugs in data/caseStudies.jsx).
// See software.js for the block shapes.

export const HEALTH_ARTICLES = [
  {
    slug: 'explainable-ai-in-healthcare',
    cat: 'Healthcare AI',
    title: 'Why Explainable AI Matters in Healthcare',
    excerpt: 'A model nobody trusts does not get used. Why interpretability belongs in the design from day one, and practical ways to build it in.',
    tags: ['Explainable AI', 'Clinical', 'Trust'],
    cases: ['hospital-readmission-prediction'],
    intro: 'In healthcare, a prediction is rarely the end of the story. A clinician or analyst has to decide whether to act on it, and they will only do that if they can see why the model said what it said.',
    body: [
      {
        h: 'What explainability means',
        p: [
          'Explainable AI is the set of methods that show which inputs drove a prediction and how confident the model is. It ranges from models that are interpretable by design, such as simple rules or linear models, to tools that explain more complex models after the fact.',
        ],
      },
      {
        h: 'Why it matters more here',
        list: [
          'Trust: people act on predictions they can sanity-check against their own knowledge.',
          'Safety: explanations expose when a model relies on something it should not, such as a proxy for a hospital or a billing artefact.',
          'Fairness: you can only look for unequal performance across groups if you can see what the model uses.',
          'Accountability: decisions that affect patients or payments need to be justified and reviewed.',
        ],
      },
      {
        h: 'How to build it in',
        steps: [
          ['Start with the simplest model that works', 'If a regularised linear model or a small tree performs close to a complex one, use it. Simpler models are easier to explain, audit and maintain.'],
          ['Use feature attribution for complex models', 'Methods such as SHAP show how much each input pushed a prediction up or down, both for one case and across the whole dataset.'],
          ['Check calibration', 'When a model says 30 percent risk, roughly 30 percent of such cases should have the outcome. Uncalibrated scores mislead even when ranking is good.'],
          ['Analyse errors by subgroup', 'Look at performance across ages, sites, payers or any group relevant to the use, not only overall.'],
          ['Show it in the workflow', 'Put the top reasons and the uncertainty next to the prediction, in the screen where the decision is made.'],
          ['Review with domain experts', 'Ask clinicians or revenue-cycle specialists whether the reasons make sense. Their surprise is a signal worth investigating.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Treating an explanation as proof of causation. It describes the model, not the patient\'s biology.',
          'Producing explanations nobody asked for and nobody looks at.',
          'Chasing the last point of accuracy with a model nobody can explain.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'For your next model, decide up front who will use the output and what they would need to see to trust it. Build that view first, then optimise the model behind it.',
        ],
      },
    ],
  },

  {
    slug: 'revenue-cycle-analytics-explained',
    cat: 'Healthcare AI',
    title: 'Revenue-Cycle Analytics Explained: Denials, Underpayments and Where AI Helps',
    excerpt: 'A plain-language tour of the healthcare revenue cycle, where money leaks, and which parts are a good fit for data science.',
    tags: ['RCM', 'Healthcare', 'Claims'],
    cases: ['claim-denial-prediction', 'ar-prioritization-underpayment-recovery', 'rcm-prior-authorization-intelligence'],
    intro: 'Healthcare providers do the work first and get paid later. The revenue cycle is everything in between, and small leaks at each step add up. Analytics can show where, and machine learning can help prioritise what to fix.',
    body: [
      {
        h: 'What the revenue cycle is',
        p: [
          'It is the path from a patient booking an appointment to the provider being paid in full. The main steps are registration and eligibility checks, coding the care that was delivered, submitting a claim, the payer adjudicating it, payment posting, and follow-up on anything denied or underpaid.',
        ],
      },
      {
        h: 'Why analytics pays off here',
        p: [
          'Every claim leaves a data trail: codes, amounts, payers, dates and outcomes. That makes the cycle unusually measurable. Even a small improvement in denial rates or in recovered underpayments applies to a very large number of claims.',
        ],
      },
      {
        h: 'Where money leaks',
        list: [
          'Denials: claims rejected for missing information, coding errors, eligibility problems or missing prior authorisation.',
          'Underpayments: claims paid below what the contract or fee schedule says they should be.',
          'Slow follow-up: accounts receivable that age because work queues are not prioritised well.',
          'Preventable write-offs: appeals not filed in time.',
        ],
      },
      {
        h: 'Where data science helps',
        steps: [
          ['Predict denials before submission', 'A model scores each claim for denial risk so problems can be fixed while it is still cheap to do so.'],
          ['Explain denial causes', 'Classifying denial remarks into root causes, such as coding, eligibility or authorisation, points teams at the process to fix, not just the claim.'],
          ['Detect underpayments', 'Compare what was paid with what was expected, using fee schedules or contract terms, and flag the gaps worth chasing.'],
          ['Prioritise work queues', 'Rank follow-up by expected recovery and likelihood of success so staff time goes to the highest-value accounts.'],
          ['Forecast and plan', 'Track trends in enrolment, authorisation requirements and payer behaviour to anticipate workload and risk.'],
        ],
      },
      {
        h: 'What it takes to do this well',
        p: [
          'The hard part is rarely the model. It is clean claim and remittance data, agreed definitions of "denial" and "underpayment", and a work process that actually uses the ranking. Many useful analyses can be prototyped on public reference data, such as Medicare fee schedules and provider files, without handling patient information.',
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Predicting denials without a plan to act on the prediction.',
          'Mixing up different denial types in one label, which hides the actionable causes.',
          'Measuring model accuracy instead of dollars recovered or days saved.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Pull a year of claims and remittances and count denials by reason and payer. The top three reasons usually point directly at the first project. We have published examples of this kind of work in our case studies.',
        ],
      },
    ],
  },

  {
    slug: 'healthcare-data-without-phi',
    cat: 'Healthcare AI',
    title: 'Working With Healthcare Data Without Exposing PHI',
    excerpt: 'How teams build and test healthcare analytics using public, synthetic and de-identified data, and the basics to get right before touching real records.',
    tags: ['PHI', 'Privacy', 'Compliance'],
    cases: ['rcm-prior-authorization-intelligence'],
    intro: 'Protected health information raises the stakes on every data decision. The good news is that a surprising amount of useful work can be done without it, and the rest can be done safely with the right controls.',
    body: [
      {
        h: 'What PHI is',
        p: [
          'Protected health information is health data that can be linked to an individual, such as names, full dates, contact details, record numbers and many other identifiers. Rules about it differ by country and by situation, so this article is a practical overview, not legal advice.',
        ],
      },
      {
        h: 'Why avoiding it where possible is smart',
        p: [
          'Every copy of PHI is a liability: it needs access control, logging, secure storage and legal agreements. If an analysis or a prototype can be built without it, the project starts sooner, costs less and carries far less risk.',
        ],
      },
      {
        h: 'How to work around it',
        steps: [
          ['Use public data first', 'Government and research bodies publish large, legitimate datasets, such as Medicare provider and fee schedule files, that are suited to prototyping analytics and models.'],
          ['Use synthetic data for development', 'Tools can generate realistic but artificial patient records, which are ideal for building and testing pipelines and software.'],
          ['De-identify when real records are needed', 'Remove or transform identifiers following a recognised standard, and have the method reviewed. De-identification reduces risk but needs care, because combinations of fields can still identify people.'],
          ['Minimise what you collect', 'Take only the fields the analysis needs and keep them for only as long as it needs.'],
          ['Control access', 'Use least-privilege access, separate environments, encryption and audit logs. Keep real data out of laptops, chats and notebooks that get shared.'],
          ['Get the agreements in place first', 'Contracts and data use agreements should be signed before data moves, not after.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Assuming that removing names is enough to de-identify a dataset.',
          'Copying production data into a development environment for convenience.',
          'Pasting real records into external tools that were never approved for them.',
          'Treating compliance as a final checklist instead of a design input.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'List the questions you want answered, then ask for each one: could this be answered with public or synthetic data? Start there, and bring in real records only for the questions that truly need them.',
        ],
      },
    ],
  },

  {
    slug: 'fraud-detection-in-production',
    cat: 'Healthcare AI',
    title: 'Fraud Detection in Production: From Data to Deployment',
    excerpt: 'Why fraud is a hard machine learning problem, and how to take a model from rare-event data to something that runs, scores and gets reviewed.',
    tags: ['Fraud', 'Anomaly Detection', 'Machine Learning'],
    cases: ['healthcare-fraud-detection-billing', 'real-time-fraud-detection'],
    intro: 'Fraud is rare, adversarial and expensive to miss, which makes it unlike most prediction problems. Getting it right is about data design, honest evaluation and a good review process as much as the algorithm.',
    body: [
      {
        h: 'What makes fraud detection different',
        list: [
          'Imbalance: fraudulent cases are a tiny share of the data, so accuracy is a misleading metric.',
          'Delayed and noisy labels: confirmed fraud may take months to appear, and many cases are never found.',
          'Adversaries adapt: patterns change once they are detected.',
          'Review capacity is limited: investigators can only look at so many alerts.',
        ],
      },
      {
        h: 'Why it needs more than a classifier',
        p: [
          'A model that flags too much overwhelms reviewers and is switched off. One that flags too little misses losses. The system has to balance both, which means designing the whole loop: scoring, thresholds, review and feedback.',
        ],
      },
      {
        h: 'How to build it',
        steps: [
          ['Define the target and the cost', 'Decide what counts as fraud or an anomaly, and estimate what a miss and a false alarm each cost. That sets the right trade-off later.'],
          ['Engineer behavioural features', 'Aggregate activity over windows, compare each entity with its peers and measure changes from its own history. These usually beat raw fields.'],
          ['Combine supervised and unsupervised methods', 'Use labelled examples where you have them and anomaly detection, such as isolation forests, to surface patterns that have no labels yet.'],
          ['Evaluate honestly', 'Split by time, use precision-recall measures and report performance at the review volume you can actually handle, not just a headline score.'],
          ['Set the threshold with operations', 'Choose the alert rate the review team can work through, and rank alerts so the best ones come first.'],
          ['Deploy with a review loop', 'Score new activity on a schedule or in real time, give reviewers the reasons behind each alert and capture their verdicts as new labels.'],
          ['Monitor and retrain', 'Watch alert volume, hit rate and drift, and retrain as behaviour changes.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Reporting accuracy on a dataset where 99 percent of cases are normal.',
          'Random splits that leak future behaviour into training.',
          'Black-box alerts with no reasons, which reviewers learn to ignore.',
          'Treating a flagged case as proof. A score is a lead for investigation, not a verdict.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Start with peer comparison and simple anomaly scores on the data you already have, and put the top results in front of a reviewer. Their feedback on what is useful will shape the model better than any tuning.',
        ],
      },
    ],
  },

  {
    slug: 'rna-seq-analysis-pipeline',
    cat: 'Biomedical Data Science',
    title: 'The RNA-seq Analysis Pipeline, Step by Step',
    excerpt: 'From raw sequencing reads to a list of differentially expressed genes: what each stage does, why it is there and where analyses usually go wrong.',
    tags: ['RNA-seq', 'Bioinformatics', 'Genomics'],
    cases: ['single-cell-rnaseq-automation'],
    intro: 'RNA sequencing measures which genes are active in a sample. The analysis turns millions of short reads into a defensible answer about what changed between conditions, and each step guards against a different kind of error.',
    body: [
      {
        h: 'What the pipeline does',
        p: [
          'It takes raw reads from a sequencer, checks their quality, works out which gene each read came from, counts them and then tests statistically which genes differ between groups, for example treated versus untreated.',
        ],
      },
      {
        h: 'Why a careful pipeline matters',
        p: [
          'Small choices change results. Poor quality control lets artefacts through, wrong normalisation produces false differences and ignoring batch effects can make a technical variation look like biology. A documented, repeatable pipeline makes the findings trustworthy and reproducible.',
        ],
      },
      {
        h: 'How the analysis runs',
        steps: [
          ['Quality control of reads', 'Tools such as FastQC and MultiQC summarise base quality, adapter content and duplication across all samples, so bad samples are spotted early.'],
          ['Trimming and filtering', 'Adapters and low-quality ends are removed with a tool such as fastp or Trim Galore.'],
          ['Alignment or pseudo-alignment', 'Reads are mapped to a reference genome with an aligner such as STAR or HISAT2, or assigned to transcripts directly with Salmon or kallisto.'],
          ['Quantification', 'Reads are counted per gene, for example with featureCounts, or transcript abundances are summarised to genes.'],
          ['Exploratory analysis', 'PCA and sample-distance plots show whether replicates cluster together and whether a batch or an outlier needs handling.'],
          ['Normalisation and differential expression', 'Packages such as DESeq2, edgeR or limma-voom model the counts, account for library size and test for differences with correction for multiple testing.'],
          ['Interpretation', 'Gene-set and pathway analyses place the results in biological context. Findings should then be checked against prior knowledge and, ideally, validated experimentally.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Too few biological replicates. Technical repeats do not replace them.',
          'Ignoring batch effects, such as samples prepared or sequenced on different days.',
          'Filtering results by an uncorrected p-value instead of an adjusted one.',
          'Not recording software versions and parameters, which makes the analysis unrepeatable.',
        ],
      },
      {
        h: 'Making it repeatable',
        p: [
          'Workflow managers such as Nextflow or Snakemake, together with containers, turn the steps above into a pipeline that runs the same way on a laptop, a server or the cloud. That is where most research teams gain the most time.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Before sequencing, write down the comparison you want to make and the number of replicates per group. Everything downstream depends on that design.',
        ],
      },
    ],
  },
];
