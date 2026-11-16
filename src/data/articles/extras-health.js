// Extra sections for the healthcare & biomedical articles. See extras-software.js.

export const HEALTH_EXTRAS = {
  'explainable-ai-in-healthcare': [
    {
      h: 'Choosing between two readmission models',
      p: [
        'Suppose a hospital team builds a model to flag patients at higher risk of being readmitted within thirty days of discharge. A gradient-boosted model slightly outperforms a logistic regression, but when the team looks at feature attributions, the most influential inputs include the ward the patient was discharged from and the day of the week.',
        'Clinicians point out that these reflect staffing patterns and discharge habits rather than patient condition. The team tests a simpler model that uses clinical measures, prior admissions and medication counts. It is a little less accurate, but the reasons it gives match what a nurse would say, and nurses are willing to use it.',
        'They also check calibration across age groups and find the model overestimates risk for the youngest patients. That finding leads to a separate threshold for that group. None of this would have surfaced from a single accuracy number.',
      ],
    },
    {
      h: 'What a good explanation shows',
      list: [
        'The top reasons for this specific prediction, in language the user understands.',
        'How confident the model is, and when it is outside the kind of data it was trained on.',
        'What would need to change for the prediction to change, where that is meaningful.',
        'Whether the model performs similarly across the groups that matter.',
        'A way for the user to disagree and record why.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Is SHAP enough to make a model explainable?', 'It is a useful tool, but not a guarantee. Attributions describe how the model behaves, can be unstable when features are correlated and need domain review. Treat them as evidence to examine, not as the final word.'],
        ['Do regulators require explainability?', 'Requirements vary by country, use case and whether the system counts as a medical device. Check the rules that apply to your situation early, and keep documentation of how the model was built and validated.'],
        ['Should we always choose the interpretable model?', 'Not always, but you should justify not doing so. If a complex model offers a meaningful gain on a measure that matters, use it with the best explanation tooling you can, and monitor it closely.'],
      ],
    },
  ],

  'revenue-cycle-analytics-explained': [
    {
      h: 'From rising denials to a work plan',
      p: [
        'Suppose an outpatient group sees an uptick in denied claims but cannot say why. Analysts begin by grouping denials by the reason given on the remittance. Three reasons account for most of them: missing prior authorisation, eligibility not verified and a coding mismatch for one procedure family.',
        'A denial-risk model is trained on historical claims, using features such as payer, procedure code, place of service and whether authorisation was recorded. Before submission, high-risk claims are routed to a short checklist so that missing authorisations can be fixed while the patient is still in the system.',
        'In parallel, an underpayment check compares each payment with the expected amount from the payer\'s fee schedule and flags shortfalls above a threshold. Staff work the largest shortfalls first. The measure of success is not model accuracy but fewer denials, fewer days in accounts receivable and more recovered revenue.',
      ],
    },
    {
      h: 'Metrics worth tracking',
      list: [
        'First-pass acceptance rate: the share of claims accepted without rework.',
        'Denial rate, split by reason, payer and procedure.',
        'Days in accounts receivable, and the ageing of open balances.',
        'Underpayment recovery: amount identified and amount actually recovered.',
        'Appeal success rate and time to resolution.',
        'Cost to collect.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Do we need patient data to start?', 'Not always. Public reference data, such as Medicare fee schedules and provider files, can support prototypes of underpayment detection and forecasting without any patient information. Production use on your own claims requires proper agreements and controls.'],
        ['How accurate does a denial model need to be?', 'Accurate enough to rank claims usefully for the people reviewing them. A model that surfaces the riskiest ten percent well can pay off even if overall accuracy looks modest.'],
        ['Will this replace our billing staff?', 'The realistic goal is to point skilled staff at the claims that most need them, and to remove repetitive checking. Judgement, payer relationships and appeals still need people.'],
      ],
    },
  ],

  'healthcare-data-without-phi': [
    {
      h: 'Building a billing-review tool without patient data',
      p: [
        'Suppose a startup wants to build a tool that helps clinics spot unusual billing patterns. It has no clinic partners yet, and requesting patient records now would delay everything for months.',
        'The team starts with public Medicare provider payment files and fee schedules, which describe what providers billed and were paid in aggregate, with no patient identifiers. They build the data pipeline, the peer-comparison logic and the dashboard on this data, and they write documentation of the methods.',
        'For the parts that need realistic patient-level records, such as testing the ingestion code, they generate synthetic records. When a clinic partner joins, the pipeline is already working, and only the final validation uses real, de-identified data under a signed agreement. The result is a working product months earlier and a much smaller compliance surface.',
      ],
    },
    {
      h: 'A privacy-by-design checklist',
      list: [
        'The purpose of the analysis is written down, and only the fields it needs are requested.',
        'Public or synthetic data is used for development wherever possible.',
        'Agreements are signed before any real data is shared.',
        'Real data sits in a restricted environment with encryption, access control and audit logs.',
        'Direct identifiers are removed or replaced, and the risk of re-identification is reviewed.',
        'Outputs such as charts and exports are checked for small cells that could identify someone.',
        'There is a plan for retention and deletion when the project ends.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Is de-identified data completely safe?', 'No method removes all risk. Combinations of details such as age, location and dates can sometimes identify a person. De-identification lowers the risk, and it should be paired with access control and agreements.'],
        ['Can we use real data in a notebook on a laptop?', 'It is best avoided. Laptops are easy to lose and notebooks are easy to share by mistake. Use a controlled environment, and keep real data out of local copies, email and chat.'],
        ['Which rules apply to us?', 'That depends on your country, your role and the kind of data. In the United States, HIPAA is often relevant; elsewhere, other health and data protection laws apply. Take legal advice for your situation.'],
      ],
    },
  ],

  'fraud-detection-in-production': [
    {
      h: 'Ranking providers for review',
      p: [
        'Suppose an analyst team wants to flag providers whose billing looks unusual. A labelled set of confirmed fraud cases is tiny, so they begin with peer comparison: for each provider, they compare billing patterns with similar providers, such as the same specialty in the same region, and measure how far each one deviates.',
        'An isolation forest adds a second view, highlighting providers whose combination of features is rare. A short list of top-ranked providers goes to a reviewer, who finds that many of the top results are legitimate specialists with unusual but explainable practices. That feedback leads the team to add features for specialty mix and patient volume, and the list improves.',
        'The team sets the alert volume to the number of cases the reviewer can look at in a week, shows the reasons behind each score and records each verdict. Over time those verdicts become labels, and a supervised model can be trained to complement the anomaly scores.',
      ],
    },
    {
      h: 'Metrics that suit rare events',
      list: [
        'Precision at a fixed alert volume: of the top alerts, how many were worth reviewing?',
        'Recall: how much of the known fraud is caught?',
        'Area under the precision-recall curve, which is more informative than accuracy when positives are rare.',
        'Value caught compared with review cost.',
        'Alert stability over time, so reviewers are not flooded after a data change.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Can we do fraud detection without labels?', 'Yes, to a point. Anomaly detection and peer comparison can produce a useful shortlist. Labels collected from reviewer feedback then make supervised models possible later.'],
        ['How do we avoid flagging honest customers or providers?', 'Keep a human in the review loop, show the reasons for each alert and treat the score as a lead, not a verdict. Track false-positive rates by group so that no one is unfairly targeted.'],
        ['What about fraudsters adapting?', 'They do. Monitor how alert patterns change, retrain regularly, combine several signals and keep some detection rules that are not obvious from the outside.'],
      ],
    },
  ],

  'rna-seq-analysis-pipeline': [
    {
      h: 'Spotting a batch effect before it misleads',
      p: [
        'Suppose a lab compares gene expression in treated and untreated cells, with four biological replicates of each. Quality control shows that all eight samples are good, but a principal component plot reveals that the samples separate by the day they were prepared, not only by treatment.',
        'Without that exploratory step, the batch effect could have been mistaken for a treatment effect, or could have hidden a real one. The analysts include the preparation day as a covariate in the differential expression model. The treatment now explains the second axis of variation, and the list of significantly changed genes is smaller but far more credible.',
        'Gene-set analysis then shows that genes involved in a particular stress response are enriched among those that increased. The lab treats this as a hypothesis, and plans a follow-up experiment on a few selected genes to confirm it.',
      ],
    },
    {
      h: 'What to record for reproducibility',
      list: [
        'The reference genome and annotation versions.',
        'The exact versions of every tool and package, ideally captured in a container.',
        'All parameters used in trimming, alignment and quantification.',
        'The sample sheet, including batch and any covariates.',
        'The code or workflow definition, kept in version control.',
        'The random seeds used in any step that depends on them.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['How many replicates do we need?', 'More replicates give more power to detect changes. Three per group is a common minimum, but the right number depends on the expected effect size and the variability between samples. A power analysis before the experiment helps.'],
        ['Alignment or pseudo-alignment?', 'Both are widely used. Pseudo-alignment with Salmon or kallisto is faster and works well for gene-level expression. Full alignment with STAR or HISAT2 is useful when you also need the alignments themselves, for example to find novel splicing.'],
        ['What about single-cell data?', 'Single-cell RNA-seq follows similar ideas but adds steps such as cell filtering, normalisation for sparse counts, clustering and annotation. It has its own pitfalls, so treat it as a separate workflow.'],
      ],
    },
  ],
};
