// "Key takeaways" bullet lists for the articles that need a closing summary. Rendered after the glossary.

export const TAKEAWAYS = {
  'rag-explained': [
    'RAG gives a language model the right passages from your own documents at the moment it answers, instead of retraining it.',
    'Retrieval quality decides answer quality, so improve chunking, metadata and search before changing the model.',
    'Always cite sources and let the system say it does not know.',
    'Enforce access rules at retrieval time so people only see what they are allowed to.',
    'Measure with a fixed set of real questions after every change, and keep the index fresh as documents change.',
  ],
  'mlops-for-small-teams': [
    'MLOps is a set of habits, not a product. A small team can get most of the benefit from a handful of disciplined basics.',
    'Put code, dependencies and data snapshots under version control so any result can be reproduced by someone else.',
    'Automate tests and deployment so releases are routine, and make the same script the only way to deploy.',
    'Monitor inputs, predictions and, when you can, real outcomes. A model that nobody watches will quietly get worse.',
    'Skip heavy platforms until several models and teams justify them, and build only the glue specific to your product.',
  ],
  'data-quality-checks': [
    'Models learn whatever is in the data, including errors, duplicates and artefacts, so check the data before the model.',
    'Spend the first hour profiling: counts, missing rates, ranges, duplicates and a plot over time.',
    'Watch especially for leakage and for labels that were produced by a flawed process.',
    'Turn recurring checks into automated tests that run on every new batch of data.',
    'Give each important dataset an owner who can explain surprises and fix them at the source.',
  ],
  'cloud-setup-for-data-and-ai': [
    'A little structure early, around environments, access and cost, prevents expensive clean-ups later.',
    'Separate development, staging and production, and give people only the access they need.',
    'Describe infrastructure as code so environments can be recreated and changes can be reviewed.',
    'Set budgets, tags and alerts from the first day, and shut down idle resources, especially GPUs.',
    'Pick the provider your team knows and your compliance needs allow, and avoid designing around a move you may never make.',
  ],
  'explainable-ai-in-healthcare': [
    'In healthcare, a prediction is only useful if the person acting on it can see why the model said it.',
    'Start with the simplest model that performs well, and use attribution methods when you need a more complex one.',
    'Check calibration and performance across subgroups, not just one overall score.',
    'Review explanations with domain experts. Their surprise is often the first sign of a problem.',
    'Remember that an explanation describes the model, not the patient, and is never proof of cause.',
  ],
  'revenue-cycle-analytics-explained': [
    'The revenue cycle leaves a detailed data trail, which makes it well suited to measurement and prediction.',
    'The main leaks are denials, underpayments and slow follow-up, and each calls for a different analysis.',
    'Predicting problems before submission is usually cheaper than fixing them afterwards.',
    'Success is measured in fewer denials, fewer days in receivables and recovered revenue, not in model accuracy.',
    'Public reference data can support early prototypes without any patient information.',
  ],
  'healthcare-data-without-phi': [
    'Every copy of protected health information is a liability, so avoid it wherever the question allows.',
    'Use public and synthetic data to build and test, and bring in real records only when truly needed.',
    'De-identification reduces risk but does not remove it, so combine it with access control and agreements.',
    'Sign the agreements before data moves, and keep real data out of laptops, chats and shared notebooks.',
    'Treat privacy as a design input from the start rather than a checklist at the end.',
  ],
  'fraud-detection-in-production': [
    'Fraud is rare, adversarial and costly to miss, so accuracy is the wrong yardstick.',
    'Behavioural features and peer comparison usually beat raw fields, and they work even with few labels.',
    'Set the alert volume to what reviewers can handle, and show the reasons behind every alert.',
    'A score is a lead for investigation, not a verdict. Keep a human in the loop.',
    'Capture reviewer verdicts as new labels and retrain as behaviour changes.',
  ],
  'rna-seq-analysis-pipeline': [
    'The pipeline turns raw reads into a defensible list of changed genes, and each step guards against a different error.',
    'Quality control and exploratory plots catch bad samples and batch effects before they distort results.',
    'Use enough biological replicates, and use adjusted p-values when testing thousands of genes.',
    'Record versions, parameters and sample information so the analysis can be repeated.',
    'Treat enrichment results as hypotheses and confirm important findings experimentally.',
  ],
};
