/**
 * aiMlChildData.js — WellMind Data Solutions
 * Central data store for all AI & ML child service pages.
 * Consumed by ServiceChildPage.jsx via URL params.
 */

import { Cpu, Brain, Eye, GitBranch, Zap, Database, TrendingUp, BarChart3,
         MessageSquare, FileText, Code, Settings2, Activity, RefreshCw,
         Shield, Layers, FlaskConical, Sparkles, Search, Users } from 'lucide-react';

// ─── Brand color shortcuts (mirrors B in theme.js) ───────────────────────────
const COLORS = {
  action:    '#0B7C93',
  primary:   '#633068',
  accent:    '#B02A48',
  secondary: '#1B6B3A',
  gold:      '#FF9F1C',
  cyan:      '#00BBF9',
};

// ─── CHILD SERVICES DATA ──────────────────────────────────────────────────────
export const AI_ML_CHILDREN = {

  // ── 1. Predictive Modelling ──────────────────────────────────────────────────
  'predictive-modeling': {
    id:           'predictive-modeling',
    title:        'Predictive Modelling',
    tagline:      'Turn historical patterns into actionable future intelligence.',
    badge:        'Modeling & Prediction',
    accentColor:  COLORS.action,
    heroDesc:     'We build end-to-end predictive systems — from raw feature engineering to production-deployed APIs — that give your business a quantified view of what happens next. Demand forecasting, churn prevention, revenue projection, and risk scoring models trained on your actual data.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 94,  suffix: '%', label: 'Forecast Accuracy',  iconName: 'BarChart3', color: COLORS.action  },
      { target: 30,  suffix: '+', label: 'Models Shipped',     iconName: 'Cpu',       color: COLORS.primary },
      { target: 3,   suffix: 'x', label: 'ROI on Avg',         iconName: 'TrendingUp',color: COLORS.gold    },
      { target: 100, suffix: '%', label: 'Code Ownership',     iconName: 'Shield',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'TrendingUp', title: 'Demand & Sales Forecasting',   color: COLORS.action,    desc: 'Time-series models (ARIMA, Prophet, LSTMs) that project inventory needs, revenue, and demand shifts weeks or months ahead.' },
      { iconName: 'Users',      title: 'Churn Prediction',             color: COLORS.primary,   desc: 'Identify at-risk customers before they leave. Gradient boosting and survival analysis models integrated into your CRM workflow.' },
      { iconName: 'Shield',     title: 'Risk Scoring',                 color: COLORS.accent,    desc: 'Credit risk, fraud likelihood, and operational risk scores delivered as real-time API endpoints with full explainability.' },
      { iconName: 'BarChart3',  title: 'Revenue Attribution',          color: COLORS.secondary, desc: 'Multi-touch attribution and LTV prediction models that connect marketing spend directly to revenue outcomes.' },
      { iconName: 'Activity',   title: 'Predictive Maintenance',       color: COLORS.gold,      desc: 'IoT sensor data processed through anomaly-detection models to predict equipment failure before it happens.' },
      { iconName: 'Layers',     title: 'Ensemble & AutoML',            color: COLORS.cyan,      desc: 'Where single models fall short, we stack and blend architectures — maximising performance across complex, noisy datasets.' },
    ],

    process: [
      { step: '01', title: 'Data Audit & Feasibility',     desc: 'We assess data quality, sample size, label availability, and leakage risk before committing to a model approach.' },
      { step: '02', title: 'Feature Engineering',          desc: 'Lag features, rolling aggregates, target encoding, and domain-specific transforms that give models the signal they need.' },
      { step: '03', title: 'Model Training & Selection',   desc: 'Multiple architectures benchmarked with proper cross-validation — no cherry-picking on held-out test sets.' },
      { step: '04', title: 'Production Deployment',        desc: 'FastAPI endpoint, Docker container, CI/CD pipeline, and drift-monitoring alerts so your model stays accurate over time.' },
    ],

    deliverables: [
      'Trained model weights + architecture documentation',
      'Production REST API (FastAPI + Docker)',
      'Feature engineering pipeline (reproducible)',
      'Model evaluation report (RMSE, MAE, AUC, SHAP)',
      'Annotated Jupyter Notebooks',
      'Retraining pipeline + drift alert config',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',        color: COLORS.action    },
      { label: 'Scikit-Learn',  color: COLORS.primary   },
      { label: 'XGBoost',       color: COLORS.accent    },
      { label: 'Prophet',       color: COLORS.secondary },
      { label: 'PyTorch',       color: COLORS.gold      },
      { label: 'MLflow',        color: COLORS.cyan      },
      { label: 'FastAPI',       color: COLORS.action    },
      { label: 'AWS SageMaker', color: COLORS.primary   },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $3,500', featured: false,
        desc: 'One model, your data, clear accuracy benchmarks.',
        features: ['Single model architecture', 'EDA & feature engineering', 'Notebook delivery', 'Performance benchmark report', '2–3 week turnaround'] },
      { name: 'Production Model', price: 'From $7,000', featured: true,
        desc: 'Deployed, monitored, production-ready prediction API.',
        features: ['Model training + tuning', 'Production REST API', 'Retraining pipeline', 'Drift monitoring alerts', '30-day support'] },
      { name: 'Enterprise Suite', price: 'Custom', featured: false,
        desc: 'Multi-model systems with SLA-backed support.',
        features: ['Ensemble architectures', 'Real-time inference', 'HIPAA / GDPR readiness', 'Dedicated data scientist', 'SLA agreement'] },
    ],
  },

  // ── 2. Classification Systems ─────────────────────────────────────────────
  'classification': {
    id:           'classification',
    title:        'Classification Systems',
    tagline:      'Automated, accurate categorisation at any scale.',
    badge:        'Modeling & Prediction',
    accentColor:  COLORS.primary,
    heroDesc:     'From binary fraud detection to 500-class product taxonomies, we design classification systems that match your data complexity. We handle imbalanced classes, multi-label problems, and real-time inference requirements that generic AutoML tools can\'t address.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 97,  suffix: '%', label: 'Avg F1-Score',        iconName: 'BarChart3',  color: COLORS.primary  },
      { target: 25,  suffix: '+', label: 'Classifiers Built',   iconName: 'Layers',     color: COLORS.action   },
      { target: 10,  suffix: 'x', label: 'Faster Triage',       iconName: 'Zap',        color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',      iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Shield',     title: 'Fraud & Anomaly Detection',    color: COLORS.primary,   desc: 'Binary classifiers with calibrated probability outputs — tuned for precision-recall trade-offs that match your business cost of false positives.' },
      { iconName: 'Layers',     title: 'Multi-class Categorisation',   color: COLORS.action,    desc: 'Product cataloguing, support ticket routing, document classification — hundreds of categories handled cleanly with hierarchical approaches.' },
      { iconName: 'Activity',   title: 'Medical & Clinical Triage',    color: COLORS.accent,    desc: 'HIPAA-aware classification models for patient risk stratification, diagnosis coding, and clinical document labelling.' },
      { iconName: 'MessageSquare', title: 'Intent & Topic Tagging',   color: COLORS.secondary, desc: 'Customer intent classification for chatbots, support desks, and product discovery — integrates with NLP pipelines.' },
      { iconName: 'Database',   title: 'Imbalanced Class Handling',    color: COLORS.gold,      desc: 'SMOTE, class weighting, focal loss, and threshold calibration strategies for when your negative class is 99% of the data.' },
      { iconName: 'TrendingUp', title: 'Explainable Decisions',        color: COLORS.cyan,      desc: 'SHAP and LIME explanations so your compliance team, customers, and regulators understand every classification decision.' },
    ],

    process: [
      { step: '01', title: 'Label Audit & Class Analysis',  desc: 'We examine class distribution, labelling consistency, and inter-rater agreement before training begins.' },
      { step: '02', title: 'Baseline & Benchmarking',       desc: 'Simple baselines (logistic regression, TF-IDF) set the floor; complex models must meaningfully beat them.' },
      { step: '03', title: 'Architecture Selection',        desc: 'Tree ensembles, transformers, or CNNs — chosen based on data type, size, and inference latency requirements.' },
      { step: '04', title: 'Deployment & Feedback Loop',   desc: 'Active learning pipelines that let your team correct edge cases and retrain without engineering intervention.' },
    ],

    deliverables: [
      'Trained classifier with full documentation',
      'Production API with confidence scores',
      'Class imbalance handling report',
      'SHAP explainability outputs',
      'Confusion matrix + per-class metrics',
      'Active learning retraining pipeline',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',         color: COLORS.primary  },
      { label: 'Scikit-Learn',   color: COLORS.action   },
      { label: 'XGBoost',        color: COLORS.accent   },
      { label: 'Transformers',   color: COLORS.secondary},
      { label: 'SHAP',           color: COLORS.gold     },
      { label: 'FastAPI',        color: COLORS.cyan     },
      { label: 'Docker',         color: COLORS.primary  },
      { label: 'MLflow',         color: COLORS.action   },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $3,500', featured: false,
        desc: 'Single-task classifier, benchmarked and documented.',
        features: ['One classification task', 'Class analysis & EDA', 'Notebook + metrics report', '2–3 week turnaround'] },
      { name: 'Production Classifier', price: 'From $7,500', featured: true,
        desc: 'Deployed classifier with explainability and retraining pipeline.',
        features: ['Full model training + tuning', 'Production API endpoint', 'SHAP explanations', 'Active learning pipeline', '30-day support'] },
      { name: 'Enterprise Suite', price: 'Custom', featured: false,
        desc: 'Multi-label, hierarchical, or compliance-grade systems.',
        features: ['Complex taxonomy support', 'HIPAA / GDPR readiness', 'Human-in-the-loop workflows', 'Dedicated data scientist', 'SLA agreement'] },
    ],
  },

  // ── 3. Regression & Forecasting ──────────────────────────────────────────
  'regression': {
    id:           'regression',
    title:        'Regression & Forecasting',
    tagline:      'Quantify uncertainty. Plan with confidence.',
    badge:        'Modeling & Prediction',
    accentColor:  COLORS.accent,
    heroDesc:     'Regression and time-series forecasting that deliver not just a point estimate but a calibrated confidence interval — so your team knows when to act boldly and when to hedge. From linear baselines to deep temporal models, we match complexity to your data.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 92,  suffix: '%', label: 'Interval Coverage',   iconName: 'Activity',   color: COLORS.accent   },
      { target: 20,  suffix: '+', label: 'Forecasting Projects', iconName: 'TrendingUp', color: COLORS.action   },
      { target: 40,  suffix: '%', label: 'Avg Error Reduction',  iconName: 'BarChart3',  color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',      iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'TrendingUp', title: 'Time-Series Forecasting',     color: COLORS.accent,    desc: 'ARIMA, SARIMA, Prophet, and N-BEATS models for seasonality, trend decomposition, and multi-step ahead prediction.' },
      { iconName: 'BarChart3',  title: 'Continuous Value Prediction', color: COLORS.action,    desc: 'Property pricing, salary estimation, cost prediction — regression pipelines with full feature importance reporting.' },
      { iconName: 'Layers',     title: 'Multi-variate Models',        color: COLORS.primary,   desc: 'VAR and multivariate LSTM models that capture cross-series relationships for complex business forecasting.' },
      { iconName: 'Activity',   title: 'Probabilistic Forecasts',     color: COLORS.secondary, desc: 'Prediction intervals and quantile regression outputs that give operations and finance teams risk-adjusted estimates.' },
      { iconName: 'Database',   title: 'Hierarchical Forecasting',    color: COLORS.gold,      desc: 'Reconciled forecasts at product, category, region, and total level — consistent across every aggregation.' },
      { iconName: 'RefreshCw',  title: 'Automated Retraining',        color: COLORS.cyan,      desc: 'Pipelines that detect distribution shift and trigger retraining so forecast accuracy doesn\'t decay over time.' },
    ],

    process: [
      { step: '01', title: 'Signal vs Noise Analysis',   desc: 'Stationarity tests, seasonality decomposition, and autocorrelation analysis to determine what\'s actually predictable.' },
      { step: '02', title: 'Model Family Selection',     desc: 'Classical vs ML vs deep learning — chosen honestly based on your data length, frequency, and business horizon.' },
      { step: '03', title: 'Walk-forward Validation',   desc: 'Time-series cross-validation that simulates real deployment — no data leakage from future periods.' },
      { step: '04', title: 'Monitoring & Alerts',        desc: 'MAPE and coverage dashboards with automated alerts when forecast error exceeds agreed thresholds.' },
    ],

    deliverables: [
      'Trained forecasting model + documentation',
      'Prediction intervals (80% & 95% coverage)',
      'Walk-forward validation report',
      'Production REST API',
      'Feature importance analysis',
      'Automated retraining pipeline',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.accent    },
      { label: 'Prophet',      color: COLORS.action    },
      { label: 'Statsmodels',  color: COLORS.primary   },
      { label: 'PyTorch',      color: COLORS.secondary },
      { label: 'Darts',        color: COLORS.gold      },
      { label: 'MLflow',       color: COLORS.cyan      },
      { label: 'FastAPI',      color: COLORS.accent    },
      { label: 'Apache Airflow', color: COLORS.primary },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $3,500', featured: false,
        desc: 'One forecasting target, benchmarked and documented.',
        features: ['Single model benchmark', 'Walk-forward validation', 'Notebook delivery', '2–3 week turnaround'] },
      { name: 'Production Forecast', price: 'From $7,000', featured: true,
        desc: 'Deployed forecasting API with monitoring and retraining.',
        features: ['Full pipeline training', 'Prediction interval API', 'Monitoring dashboard', 'Retraining automation', '30-day support'] },
      { name: 'Enterprise Forecasting', price: 'Custom', featured: false,
        desc: 'Hierarchical, multi-horizon, high-frequency systems.',
        features: ['Hierarchical reconciliation', 'Real-time inference', 'HIPAA / GDPR readiness', 'Dedicated data scientist', 'SLA agreement'] },
    ],
  },

  // ── 4. Anomaly Detection ─────────────────────────────────────────────────
  'anomaly-detection': {
    id:           'anomaly-detection',
    title:        'Anomaly Detection',
    tagline:      'Catch what your dashboards miss — automatically.',
    badge:        'Modeling & Prediction',
    accentColor:  COLORS.secondary,
    heroDesc:     'Rule-based alerting flags what you already know to look for. Anomaly detection finds the unexpected — the subtle transaction pattern, the equipment signal, the metric drift that precedes failure by days. We build unsupervised and semi-supervised detectors trained on your normal behaviour.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 99,  suffix: '%', label: 'Detection Rate',      iconName: 'Eye',        color: COLORS.secondary },
      { target: 60,  suffix: '%', label: 'False Positive Drop', iconName: 'Shield',     color: COLORS.action    },
      { target: 15,  suffix: '+', label: 'Detectors Deployed',  iconName: 'Activity',   color: COLORS.primary   },
      { target: 100, suffix: '%', label: 'Code Ownership',      iconName: 'Shield',     color: COLORS.gold      },
    ],

    features: [
      { iconName: 'Activity',   title: 'Time-Series Anomalies',        color: COLORS.secondary, desc: 'Isolation Forest, LSTM Autoencoders, and statistical control charts for metric, IoT, and log data streams.' },
      { iconName: 'Shield',     title: 'Fraud & Intrusion Detection',  color: COLORS.action,    desc: 'Transaction-level fraud detectors with real-time scoring and explainable alerts — tuned for your false-positive tolerance.' },
      { iconName: 'Database',   title: 'Data Quality Monitoring',      color: COLORS.primary,   desc: 'Automated checks that catch schema drift, null explosions, and statistical distribution shifts in your pipelines.' },
      { iconName: 'Cpu',        title: 'Predictive Maintenance',       color: COLORS.accent,    desc: 'Sensor fusion models that flag equipment degradation patterns hours or days before failure.' },
      { iconName: 'Eye',        title: 'User Behaviour Analytics',     color: COLORS.gold,      desc: 'Session-level anomaly scores that detect account takeover, bot traffic, and insider threats.' },
      { iconName: 'Layers',     title: 'Root Cause Explanation',       color: COLORS.cyan,      desc: 'Contribution scores and SHAP explanations so analysts understand why an alert fired, not just that it did.' },
    ],

    process: [
      { step: '01', title: 'Normal Behaviour Baseline',   desc: 'We define "normal" statistically — seasonality, business cycles, and cohort differences all modelled explicitly.' },
      { step: '02', title: 'Detector Architecture',       desc: 'Isolation Forest for tabular, LSTM Autoencoder for sequences, or hybrid ensembles for complex multi-sensor data.' },
      { step: '03', title: 'Threshold Calibration',       desc: 'Alert thresholds tuned to your precision-recall requirements — not arbitrary percentile cuts.' },
      { step: '04', title: 'Live Deployment & Feedback',  desc: 'Real-time scoring API with analyst feedback loop that reduces false positives progressively over time.' },
    ],

    deliverables: [
      'Trained anomaly detector + documentation',
      'Real-time scoring REST API',
      'Threshold calibration report',
      'Alert integration (Slack, PagerDuty, email)',
      'SHAP contribution explanations',
      'Analyst feedback retraining pipeline',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',          color: COLORS.secondary },
      { label: 'Scikit-Learn',    color: COLORS.action    },
      { label: 'PyOD',            color: COLORS.primary   },
      { label: 'PyTorch',         color: COLORS.accent    },
      { label: 'Evidently AI',    color: COLORS.gold      },
      { label: 'FastAPI',         color: COLORS.cyan      },
      { label: 'Kafka',           color: COLORS.secondary },
      { label: 'MLflow',          color: COLORS.action    },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $4,000', featured: false,
        desc: 'Single data stream, anomaly detector benchmarked.',
        features: ['One detector type', 'Threshold calibration', 'Notebook delivery', '2–3 week turnaround'] },
      { name: 'Production Detector', price: 'From $8,500', featured: true,
        desc: 'Real-time API with alert integration and feedback loop.',
        features: ['Multi-source detector', 'Real-time scoring API', 'Alert integrations', 'Feedback retraining', '30-day support'] },
      { name: 'Enterprise Monitoring', price: 'Custom', featured: false,
        desc: 'Multi-stream, high-frequency, compliance-grade detection.',
        features: ['Complex sensor fusion', 'Sub-100ms inference', 'HIPAA / GDPR readiness', 'Dedicated engineer', 'SLA agreement'] },
    ],
  },

  // ── 5. NLP & Text Analytics ──────────────────────────────────────────────
  'nlp': {
    id:           'nlp',
    title:        'NLP & Text Analytics',
    tagline:      'Unstructured text, transformed into structured intelligence.',
    badge:        'Language & Vision',
    accentColor:  COLORS.action,
    heroDesc:     'Every support ticket, clinical note, legal document, and customer review contains signal your business isn\'t using. We build NLP pipelines that extract entities, classify intent, summarise documents, and surface insights — at the scale and speed your operations require.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 96,  suffix: '%', label: 'Entity Accuracy',     iconName: 'Brain',      color: COLORS.action   },
      { target: 35,  suffix: '+', label: 'NLP Systems Built',   iconName: 'MessageSquare', color: COLORS.primary },
      { target: 80,  suffix: '%', label: 'Manual Review Cut',   iconName: 'Zap',        color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',      iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Search',       title: 'Named Entity Recognition',    color: COLORS.action,    desc: 'Custom NER models for medical terms, legal clauses, financial entities, and proprietary taxonomies that off-the-shelf models miss.' },
      { iconName: 'Layers',       title: 'Document Classification',     color: COLORS.primary,   desc: 'Multi-label document routing, regulatory filing categorisation, and support ticket triage at thousands of docs per minute.' },
      { iconName: 'MessageSquare',title: 'Summarisation',               color: COLORS.accent,    desc: 'Extractive and abstractive summarisation for long-form documents — clinical notes, legal briefs, research papers.' },
      { iconName: 'Database',     title: 'Information Extraction',      color: COLORS.secondary, desc: 'Structured data pulled from unstructured text — dates, amounts, relationships, clauses — delivered as clean JSON.' },
      { iconName: 'Activity',     title: 'Text Clustering & Discovery', color: COLORS.gold,      desc: 'Unsupervised topic modelling and semantic clustering to discover themes in corpora you\'ve never manually labelled.' },
      { iconName: 'Brain',        title: 'Multilingual Pipelines',      color: COLORS.cyan,      desc: 'Urdu, Arabic, French, Spanish — we fine-tune multilingual transformer models for languages your business operates in.' },
    ],

    process: [
      { step: '01', title: 'Corpus Analysis',             desc: 'Volume, language mix, document length distribution, and labelling feasibility assessed before any model selection.' },
      { step: '02', title: 'Annotation & Fine-tuning',    desc: 'We annotate a gold-standard dataset and fine-tune transformer models on your domain vocabulary and conventions.' },
      { step: '03', title: 'Pipeline Integration',        desc: 'NLP as a service — REST API or batch processing pipeline that slots into your existing document workflows.' },
      { step: '04', title: 'Active Learning Loop',        desc: 'Annotation interface for your team to correct edge cases, feeding a retraining pipeline that compounds accuracy over time.' },
    ],

    deliverables: [
      'Fine-tuned NLP model + tokeniser',
      'Production REST API (batch + streaming)',
      'Annotation guidelines + gold-standard dataset',
      'Per-entity / per-class evaluation report',
      'Data pipeline scripts',
      'Active learning retraining setup',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',         color: COLORS.action    },
      { label: 'Hugging Face',   color: COLORS.primary   },
      { label: 'spaCy',          color: COLORS.accent    },
      { label: 'NLTK',           color: COLORS.secondary },
      { label: 'LangChain',      color: COLORS.gold      },
      { label: 'FastAPI',        color: COLORS.cyan      },
      { label: 'Label Studio',   color: COLORS.action    },
      { label: 'MLflow',         color: COLORS.primary   },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $4,500', featured: false,
        desc: 'One NLP task, benchmarked on your data.',
        features: ['Single NLP task', 'Annotation sample', 'Notebook delivery', '2–3 week turnaround'] },
      { name: 'Production NLP', price: 'From $9,000', featured: true,
        desc: 'Deployed NLP API with active learning pipeline.',
        features: ['Fine-tuned transformer', 'Production API', 'Active learning setup', 'Evaluation dashboard', '30-day support'] },
      { name: 'Enterprise NLP', price: 'Custom', featured: false,
        desc: 'Multi-task, multilingual, high-throughput systems.',
        features: ['Multi-task pipelines', 'Multilingual support', 'HIPAA / GDPR readiness', 'Dedicated NLP engineer', 'SLA agreement'] },
    ],
  },

  // ── 6. Sentiment Analysis ────────────────────────────────────────────────
  'sentiment': {
    id:           'sentiment',
    title:        'Sentiment Analysis',
    tagline:      'Know how your customers actually feel — not just what they say.',
    badge:        'Language & Vision',
    accentColor:  COLORS.primary,
    heroDesc:     'Beyond positive / negative / neutral. We build aspect-level sentiment systems that tell you customers love your onboarding but hate your billing — and track how that changes week over week across every channel you operate.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 95,  suffix: '%', label: 'Sentiment Accuracy',  iconName: 'Brain',      color: COLORS.primary  },
      { target: 20,  suffix: '+', label: 'Sentiment Systems',   iconName: 'MessageSquare', color: COLORS.action },
      { target: 5,   suffix: 'x', label: 'Faster Insights',     iconName: 'Zap',        color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',      iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'MessageSquare', title: 'Aspect-Level Sentiment',      color: COLORS.primary,   desc: 'Granular sentiment tied to specific product features, service attributes, or topics — not just an overall score.' },
      { iconName: 'Activity',      title: 'Real-time Stream Processing', color: COLORS.action,    desc: 'Sentiment scored on incoming reviews, tickets, and social mentions as they arrive — not in overnight batch runs.' },
      { iconName: 'TrendingUp',    title: 'Trend & Shift Detection',     color: COLORS.accent,    desc: 'Automated alerts when sentiment around a topic shifts significantly — catch product issues before they go viral.' },
      { iconName: 'Globe',         title: 'Multilingual Sentiment',      color: COLORS.secondary, desc: 'Consistent sentiment measurement across English, Urdu, Arabic, and other languages your customers write in.' },
      { iconName: 'BarChart3',     title: 'Competitive Benchmarking',    color: COLORS.gold,      desc: 'Sentiment analysis on public competitor reviews so you can quantify product gaps and marketing opportunities.' },
      { iconName: 'Layers',        title: 'Dashboard & Reporting',       color: COLORS.cyan,      desc: 'Live Looker Studio or Power BI dashboard showing sentiment by channel, product, and time — ready for executives.' },
    ],

    process: [
      { step: '01', title: 'Source & Schema Audit',        desc: 'Reviews, tickets, surveys, social — we map every text source and agree on the aspect taxonomy before annotation.' },
      { step: '02', title: 'Annotation & Fine-tuning',     desc: 'Domain-specific labelling and transformer fine-tuning for your industry\'s vocabulary and sentiment conventions.' },
      { step: '03', title: 'API & Dashboard Integration', desc: 'Sentiment scores delivered as API responses or streamed into your BI dashboards in real time.' },
      { step: '04', title: 'Continuous Improvement',       desc: 'Analyst correction interface and periodic retraining to maintain accuracy as language and products evolve.' },
    ],

    deliverables: [
      'Fine-tuned sentiment model',
      'Aspect taxonomy documentation',
      'Production scoring API',
      'Live dashboard (Looker Studio or Power BI)',
      'Weekly/monthly trend report template',
      'Retraining pipeline',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',         color: COLORS.primary  },
      { label: 'Hugging Face',   color: COLORS.action   },
      { label: 'VADER',          color: COLORS.accent   },
      { label: 'spaCy',          color: COLORS.secondary},
      { label: 'Kafka',          color: COLORS.gold     },
      { label: 'FastAPI',        color: COLORS.cyan     },
      { label: 'Looker Studio',  color: COLORS.primary  },
      { label: 'MLflow',         color: COLORS.action   },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $3,500', featured: false,
        desc: 'Document-level sentiment on one data source.',
        features: ['Single-source analysis', 'Overall sentiment model', 'Notebook + report', '2–3 week turnaround'] },
      { name: 'Production Sentiment', price: 'From $7,500', featured: true,
        desc: 'Aspect-level, multi-source, with live dashboard.',
        features: ['Aspect-level model', 'Real-time API', 'BI dashboard', 'Trend alerts', '30-day support'] },
      { name: 'Enterprise Suite', price: 'Custom', featured: false,
        desc: 'Multi-language, competitive intel, and SLA support.',
        features: ['Multilingual models', 'Competitor benchmarking', 'HIPAA / GDPR readiness', 'Dedicated engineer', 'SLA agreement'] },
    ],
  },

  // ── 7. Computer Vision ───────────────────────────────────────────────────
  'computer-vision': {
    id:           'computer-vision',
    title:        'Computer Vision',
    tagline:      'Give your systems the ability to see and understand.',
    badge:        'Language & Vision',
    accentColor:  COLORS.accent,
    heroDesc:     'Object detection, image classification, segmentation, and video analytics for industries where seeing is deciding — healthcare diagnostics, manufacturing quality control, retail analytics, and security. We deliver models that run accurately at production inference speeds.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 98,  suffix: '%', label: 'Detection mAP',       iconName: 'Eye',        color: COLORS.accent   },
      { target: 20,  suffix: '+', label: 'CV Systems Built',    iconName: 'Cpu',        color: COLORS.action   },
      { target: 50,  suffix: 'x', label: 'Faster Inspection',   iconName: 'Zap',        color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',      iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Eye',        title: 'Object Detection & Tracking',  color: COLORS.accent,    desc: 'YOLOv8, Faster R-CNN, and DETR models for real-time detection across video streams and static images.' },
      { iconName: 'Layers',     title: 'Semantic Segmentation',        color: COLORS.action,    desc: 'Pixel-level understanding for medical imaging, satellite imagery, and precision agriculture applications.' },
      { iconName: 'Activity',   title: 'Quality Control Inspection',   color: COLORS.primary,   desc: 'Defect detection on manufacturing lines — trained on your product images, deployed to edge devices.' },
      { iconName: 'Brain',      title: 'Medical Image Analysis',       color: COLORS.secondary, desc: 'HIPAA-compliant diagnostic support models for radiology, pathology, and dermatology image classification.' },
      { iconName: 'Database',   title: 'Video Analytics',              color: COLORS.gold,      desc: 'Crowd density, queue length, behaviour anomaly, and people counting from CCTV and IP camera feeds.' },
      { iconName: 'Cpu',        title: 'Edge Deployment',              color: COLORS.cyan,      desc: 'ONNX and TensorRT optimisation so your models run at 30fps+ on Jetson Nano, Raspberry Pi, or custom hardware.' },
    ],

    process: [
      { step: '01', title: 'Dataset Assessment',            desc: 'Image count, annotation quality, class balance, and lighting variance assessed before any model training.' },
      { step: '02', title: 'Annotation & Augmentation',    desc: 'Custom labelling workflow and augmentation strategies (Albumentations) to maximise model performance from your dataset.' },
      { step: '03', title: 'Architecture Training',         desc: 'Transfer learning from COCO/ImageNet pre-trained weights, fine-tuned on your specific domain and classes.' },
      { step: '04', title: 'Edge or Cloud Deployment',     desc: 'ONNX export for edge or Dockerised API for cloud — with latency and throughput benchmarks included.' },
    ],

    deliverables: [
      'Trained CV model + weights (PyTorch / ONNX)',
      'Production REST API or Edge deployment package',
      'Annotation guidelines + labelled dataset',
      'mAP, IoU, and per-class evaluation report',
      'Data augmentation pipeline',
      'Inference latency benchmark report',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',         color: COLORS.accent    },
      { label: 'PyTorch',        color: COLORS.action    },
      { label: 'OpenCV',         color: COLORS.primary   },
      { label: 'Ultralytics',    color: COLORS.secondary },
      { label: 'Albumentations', color: COLORS.gold      },
      { label: 'ONNX Runtime',   color: COLORS.cyan      },
      { label: 'TensorRT',       color: COLORS.accent    },
      { label: 'Label Studio',   color: COLORS.action    },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $5,000', featured: false,
        desc: 'One CV task, benchmarked on your images.',
        features: ['Single model task', 'Annotation sample', 'Evaluation report', '3–4 week turnaround'] },
      { name: 'Production CV', price: 'From $10,000', featured: true,
        desc: 'Deployed CV system, edge or cloud, with monitoring.',
        features: ['Full model training', 'API or edge package', 'Monitoring integration', 'Retraining pipeline', '30-day support'] },
      { name: 'Enterprise Vision', price: 'Custom', featured: false,
        desc: 'Multi-camera, video analytics, HIPAA-grade systems.',
        features: ['Video analytics pipeline', 'Sub-50ms inference', 'HIPAA compliance', 'Dedicated CV engineer', 'SLA agreement'] },
    ],
  },

  // ── 8. Document Intelligence ─────────────────────────────────────────────
  'document-ai': {
    id:           'document-ai',
    title:        'Document Intelligence',
    tagline:      'Documents that read, understand, and act — automatically.',
    badge:        'Language & Vision',
    accentColor:  COLORS.secondary,
    heroDesc:     'Contracts, invoices, clinical forms, and reports contain structured data trapped in unstructured formats. We build document AI systems that extract, classify, and route information with human-level accuracy — at machine speed.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 97,  suffix: '%', label: 'Extraction Accuracy', iconName: 'FileText',   color: COLORS.secondary },
      { target: 15,  suffix: '+', label: 'Doc AI Systems',      iconName: 'Database',   color: COLORS.action    },
      { target: 90,  suffix: '%', label: 'Processing Time Cut', iconName: 'Zap',        color: COLORS.gold      },
      { target: 100, suffix: '%', label: 'Code Ownership',      iconName: 'Shield',     color: COLORS.primary   },
    ],

    features: [
      { iconName: 'FileText',  title: 'Intelligent OCR',            color: COLORS.secondary, desc: 'Beyond raw OCR — layout-aware extraction that understands tables, multi-column text, and handwritten annotations.' },
      { iconName: 'Database',  title: 'Invoice & Form Processing',  color: COLORS.action,    desc: 'Automated extraction of line items, totals, dates, and vendor details from invoices and structured forms.' },
      { iconName: 'Shield',    title: 'Contract Analysis',          color: COLORS.primary,   desc: 'Clause extraction, obligation identification, and risk flagging in legal agreements — GDPR and compliance ready.' },
      { iconName: 'Brain',     title: 'Clinical Document AI',       color: COLORS.accent,    desc: 'HIPAA-compliant extraction from clinical notes, discharge summaries, and pathology reports for EHR integration.' },
      { iconName: 'Layers',    title: 'Document Classification',    color: COLORS.gold,      desc: 'Automatic routing of incoming documents to the right workflow — by type, priority, department, or action required.' },
      { iconName: 'RefreshCw', title: 'Human-in-the-Loop Review',  color: COLORS.cyan,      desc: 'Review interface for low-confidence extractions, with corrections feeding a continuous retraining pipeline.' },
    ],

    process: [
      { step: '01', title: 'Document Taxonomy Audit',    desc: 'We catalogue document types, field complexity, and volume to scope the right extraction architecture.' },
      { step: '02', title: 'Annotation & Model Build',   desc: 'LayoutLM or Donut fine-tuned on your document templates — handling varied layouts and poor scan quality.' },
      { step: '03', title: 'Confidence Thresholding',    desc: 'Automated routing: high-confidence extractions go straight through; low-confidence flagged for human review.' },
      { step: '04', title: 'Workflow Integration',        desc: 'API delivery into your ERP, DMS, or CRM with full audit trail and extraction confidence logging.' },
    ],

    deliverables: [
      'Fine-tuned document extraction model',
      'Production REST API with confidence scores',
      'Human review interface',
      'Per-field accuracy report',
      'Workflow integration guide',
      'Retraining pipeline',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.secondary },
      { label: 'LayoutLM',     color: COLORS.action    },
      { label: 'Tesseract',    color: COLORS.primary   },
      { label: 'AWS Textract', color: COLORS.accent    },
      { label: 'Donut',        color: COLORS.gold      },
      { label: 'FastAPI',      color: COLORS.cyan      },
      { label: 'Label Studio', color: COLORS.secondary },
      { label: 'MLflow',       color: COLORS.action    },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $5,000', featured: false,
        desc: 'One document type, extraction benchmarked.',
        features: ['Single doc type', 'Field extraction model', 'Accuracy report', '3–4 week turnaround'] },
      { name: 'Production Doc AI', price: 'From $10,000', featured: true,
        desc: 'Multi-template extraction API with human review.',
        features: ['Multi-template support', 'Production API', 'Review interface', 'Retraining pipeline', '30-day support'] },
      { name: 'Enterprise Doc AI', price: 'Custom', featured: false,
        desc: 'High-volume, compliance-grade document processing.',
        features: ['Unlimited templates', 'High-throughput batch', 'HIPAA / GDPR readiness', 'Dedicated engineer', 'SLA agreement'] },
    ],
  },

  // ── 9. LLM Fine-tuning ───────────────────────────────────────────────────
  'llm-finetuning': {
    id:           'llm-finetuning',
    title:        'LLM Fine-tuning',
    tagline:      'Foundation model intelligence, shaped to your domain.',
    badge:        'Generative AI & LLMs',
    accentColor:  COLORS.gold,
    heroDesc:     'General-purpose LLMs hallucinate on your domain, use the wrong tone, and don\'t know your products. Fine-tuned models do. We align foundation models to your data, vocabulary, and task — delivering consistent, reliable outputs that off-the-shelf models can\'t match.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 40,  suffix: '%', label: 'Hallucination Reduction', iconName: 'Brain',   color: COLORS.gold     },
      { target: 15,  suffix: '+', label: 'LLMs Fine-tuned',         iconName: 'Cpu',     color: COLORS.action   },
      { target: 3,   suffix: 'x', label: 'Task Accuracy Gain',      iconName: 'TrendUp', color: COLORS.primary  },
      { target: 100, suffix: '%', label: 'Code Ownership',          iconName: 'Shield',  color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Brain',     title: 'Domain Adaptation',           color: COLORS.gold,      desc: 'LoRA and QLoRA fine-tuning on Llama, Mistral, and Phi — adapted to your industry vocabulary and documentation.' },
      { iconName: 'Settings2', title: 'Instruction Fine-tuning',     color: COLORS.action,    desc: 'Supervised fine-tuning on curated instruction datasets that teach the model exactly how you want it to respond.' },
      { iconName: 'Activity',  title: 'RLHF & Preference Learning',  color: COLORS.primary,   desc: 'Reinforcement Learning from Human Feedback to align model outputs with your team\'s quality preferences.' },
      { iconName: 'Shield',    title: 'Safety & Guardrail Training', color: COLORS.accent,    desc: 'Refusal training and constitutional AI techniques to prevent harmful, off-topic, or brand-inconsistent outputs.' },
      { iconName: 'Zap',       title: 'Quantisation & Optimisation', color: COLORS.secondary, desc: '4-bit and 8-bit quantisation for cost-efficient inference without meaningful accuracy loss.' },
      { iconName: 'Database',  title: 'Dataset Curation',            color: COLORS.cyan,      desc: 'We structure your raw documents, conversations, and knowledge into high-quality fine-tuning datasets.' },
    ],

    process: [
      { step: '01', title: 'Task & Data Assessment',      desc: 'We evaluate whether fine-tuning or RAG is the right approach — and choose the base model that fits your compute budget.' },
      { step: '02', title: 'Dataset Preparation',         desc: 'Instruction pairs, preference pairs, or domain corpora curated and cleaned to training-ready quality.' },
      { step: '03', title: 'Training & Evaluation',        desc: 'LoRA fine-tuning with eval metrics relevant to your task — ROUGE, BLEU, human preference scores, or custom rubrics.' },
      { step: '04', title: 'Deployment & Serving',        desc: 'vLLM or TGI serving with quantised weights — on your cloud or ours, with latency and cost benchmarks.' },
    ],

    deliverables: [
      'Fine-tuned model weights (LoRA adapters)',
      'Training dataset (curated and documented)',
      'Evaluation report vs base model baseline',
      'Inference API (vLLM / TGI)',
      'Quantised model for cost-efficient serving',
      'Prompt engineering guide',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',           color: COLORS.gold      },
      { label: 'Hugging Face',     color: COLORS.action    },
      { label: 'LoRA / QLoRA',     color: COLORS.primary   },
      { label: 'vLLM',             color: COLORS.accent    },
      { label: 'TRL',              color: COLORS.secondary },
      { label: 'Weights & Biases', color: COLORS.cyan      },
      { label: 'BitsAndBytes',     color: COLORS.gold      },
      { label: 'FastAPI',          color: COLORS.action    },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $6,000', featured: false,
        desc: 'LoRA fine-tune, one task, benchmarked.',
        features: ['LoRA fine-tuning', 'Dataset curation', 'Eval vs baseline', '3–4 week turnaround'] },
      { name: 'Production LLM', price: 'From $12,000', featured: true,
        desc: 'Fine-tuned model with serving API and guardrails.',
        features: ['Full fine-tuning pipeline', 'vLLM serving API', 'Safety training', 'Quantised model', '30-day support'] },
      { name: 'Enterprise LLM', price: 'Custom', featured: false,
        desc: 'RLHF, multi-task, compliance-grade deployment.',
        features: ['RLHF pipeline', 'Multi-task training', 'HIPAA / GDPR readiness', 'Dedicated LLM engineer', 'SLA agreement'] },
    ],
  },

  // ── 10. RAG Architectures ────────────────────────────────────────────────
  'rag': {
    id:           'rag',
    title:        'RAG Architectures',
    tagline:      'LLMs grounded in your knowledge. Zero hallucination on what matters.',
    badge:        'Generative AI & LLMs',
    accentColor:  COLORS.cyan,
    heroDesc:     'Retrieval-Augmented Generation connects the generative power of LLMs to your proprietary knowledge base — policies, documents, product data, clinical records. Answers grounded in your content, with citations, no hallucination on your domain, and full access control.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 90,  suffix: '%', label: 'Hallucination Drop',   iconName: 'Shield',    color: COLORS.cyan     },
      { target: 20,  suffix: '+', label: 'RAG Systems Built',    iconName: 'Database',  color: COLORS.action   },
      { target: 5,   suffix: 'x', label: 'Faster Knowledge QA',  iconName: 'Zap',       color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',       iconName: 'Shield',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Database',  title: 'Vector Store Design',         color: COLORS.cyan,      desc: 'Pinecone, Weaviate, Chroma, or pgvector — chosen and configured for your document volume and query latency requirements.' },
      { iconName: 'Search',    title: 'Hybrid Search',               color: COLORS.action,    desc: 'Dense + sparse retrieval (BM25 + embeddings) for documents where keyword precision matters as much as semantic similarity.' },
      { iconName: 'Layers',    title: 'Chunking & Indexing Strategy',color: COLORS.primary,   desc: 'Optimal chunk size, overlap, and hierarchical indexing strategies tuned to your document structure and query patterns.' },
      { iconName: 'Shield',    title: 'Access-Controlled RAG',       color: COLORS.accent,    desc: 'Retrieval filtered by user role, department, or document classification — your sensitive data stays protected.' },
      { iconName: 'Activity',  title: 'Evaluation & Ragas Scoring',  color: COLORS.secondary, desc: 'Faithfulness, context recall, and answer relevancy measured with Ragas so you know exactly how your RAG performs.' },
      { iconName: 'RefreshCw', title: 'Continuous Indexing',         color: COLORS.gold,      desc: 'Pipelines that automatically index new documents as they arrive, keeping your knowledge base current without manual intervention.' },
    ],

    process: [
      { step: '01', title: 'Knowledge Audit',              desc: 'We map your document corpus: types, formats, access controls, and update frequency — to design the right indexing strategy.' },
      { step: '02', title: 'Pipeline Architecture',        desc: 'Ingestion → chunking → embedding → retrieval → generation pipeline designed and benchmarked end-to-end.' },
      { step: '03', title: 'Ragas Evaluation',             desc: 'Automated evaluation suite measuring faithfulness, precision, recall, and answer quality before any user sees it.' },
      { step: '04', title: 'Production Deployment',        desc: 'FastAPI service with streaming responses, citation output, and usage logging for compliance and improvement.' },
    ],

    deliverables: [
      'Complete RAG pipeline (ingestion to generation)',
      'Vector store setup + indexing scripts',
      'Ragas evaluation report',
      'Production API with citation output',
      'Access control integration',
      'Continuous indexing pipeline',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',        color: COLORS.cyan      },
      { label: 'LangChain',     color: COLORS.action    },
      { label: 'LlamaIndex',    color: COLORS.primary   },
      { label: 'Pinecone',      color: COLORS.accent    },
      { label: 'Weaviate',      color: COLORS.secondary },
      { label: 'OpenAI API',    color: COLORS.gold      },
      { label: 'FastAPI',       color: COLORS.cyan      },
      { label: 'Ragas',         color: COLORS.action    },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $5,500', featured: false,
        desc: 'Single corpus RAG, evaluated and documented.',
        features: ['One knowledge source', 'Vector store setup', 'Ragas evaluation', '3–4 week turnaround'] },
      { name: 'Production RAG', price: 'From $11,000', featured: true,
        desc: 'Multi-source RAG with access control and monitoring.',
        features: ['Multi-source indexing', 'Hybrid search', 'Access control', 'Citation API', '30-day support'] },
      { name: 'Enterprise RAG', price: 'Custom', featured: false,
        desc: 'High-volume, compliance-grade knowledge systems.',
        features: ['Unlimited sources', 'Sub-2s latency SLA', 'HIPAA / GDPR readiness', 'Dedicated engineer', 'SLA agreement'] },
    ],
  },

  // ── 11. AI Agents & Copilots ─────────────────────────────────────────────
  'ai-agents': {
    id:           'ai-agents',
    title:        'AI Agents & Copilots',
    tagline:      'Autonomous AI that reasons, plans, and acts — not just responds.',
    badge:        'Generative AI & LLMs',
    accentColor:  COLORS.primary,
    heroDesc:     'Copilots that assist. Agents that execute. We build LLM-powered systems that use tools, browse systems, write code, and complete multi-step workflows — freeing your team from repetitive cognitive work at a scale no hiring plan can match.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 70,  suffix: '%', label: 'Manual Task Reduction', iconName: 'Zap',      color: COLORS.primary  },
      { target: 12,  suffix: '+', label: 'Agents Deployed',       iconName: 'Brain',    color: COLORS.action   },
      { target: 24,  suffix: '/7', label: 'Always On',            iconName: 'Activity', color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',        iconName: 'Shield',   color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Brain',    title: 'ReAct & Tool-Use Agents',     color: COLORS.primary,   desc: 'Agents that reason step-by-step and invoke APIs, databases, and code interpreters to complete complex tasks autonomously.' },
      { iconName: 'Layers',   title: 'Multi-agent Orchestration',   color: COLORS.action,    desc: 'Coordinator + specialist agent patterns for workflows requiring parallel reasoning across different knowledge domains.' },
      { iconName: 'Code',     title: 'Code Generation Copilots',    color: COLORS.accent,    desc: 'Developer assistants fine-tuned to your codebase — PR review, test generation, debugging, and documentation.' },
      { iconName: 'Database', title: 'Data Analysis Agents',        color: COLORS.secondary, desc: 'Agents that connect to your databases, write SQL, generate visualisations, and explain findings in plain language.' },
      { iconName: 'Shield',   title: 'Guardrails & Oversight',      color: COLORS.gold,      desc: 'Human-in-the-loop checkpoints, action whitelisting, and audit logging so every agent action is controllable and auditable.' },
      { iconName: 'Activity', title: 'Long-horizon Planning',        color: COLORS.cyan,      desc: 'Memory systems and planning architectures that let agents handle tasks spanning hours, days, or complex multi-session workflows.' },
    ],

    process: [
      { step: '01', title: 'Workflow Decomposition',       desc: 'We map every step of the target workflow, identifying where AI can automate, assist, or escalate to humans.' },
      { step: '02', title: 'Tool & API Integration',       desc: 'Every system the agent needs to access — wired, authenticated, and tested in a safe sandbox environment.' },
      { step: '03', title: 'Agent Evaluation',             desc: 'Task completion rate, hallucination rate, and latency benchmarked across hundreds of test cases before launch.' },
      { step: '04', title: 'Production with Oversight',    desc: 'Deployed with full audit logging, human escalation paths, and monitoring dashboards for every agent action.' },
    ],

    deliverables: [
      'Agent architecture + all tool integrations',
      'Production API or embedded UI component',
      'Evaluation report (task completion, accuracy)',
      'Audit logging + oversight dashboard',
      'Guardrail configuration',
      'Human escalation workflow',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',        color: COLORS.primary  },
      { label: 'LangGraph',     color: COLORS.action   },
      { label: 'AutoGen',       color: COLORS.accent   },
      { label: 'LlamaIndex',    color: COLORS.secondary},
      { label: 'OpenAI API',    color: COLORS.gold     },
      { label: 'FastAPI',       color: COLORS.cyan     },
      { label: 'Redis',         color: COLORS.primary  },
      { label: 'PostgreSQL',    color: COLORS.action   },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $7,000', featured: false,
        desc: 'Single-task agent, evaluated on defined workflow.',
        features: ['One agent type', 'Tool integrations', 'Evaluation report', '3–4 week turnaround'] },
      { name: 'Production Agent', price: 'From $14,000', featured: true,
        desc: 'Multi-tool agent with guardrails and monitoring.',
        features: ['Full tool integration', 'Oversight dashboard', 'Audit logging', 'Escalation workflows', '30-day support'] },
      { name: 'Enterprise Agents', price: 'Custom', featured: false,
        desc: 'Multi-agent systems with compliance and SLA support.',
        features: ['Multi-agent orchestration', 'Long-horizon planning', 'HIPAA / GDPR readiness', 'Dedicated engineer', 'SLA agreement'] },
    ],
  },

  // ── 12. Generative AI Apps ───────────────────────────────────────────────
  'generative-ai': {
    id:           'generative-ai',
    title:        'Generative AI Apps',
    tagline:      'Production applications powered by generative intelligence.',
    badge:        'Generative AI & LLMs',
    accentColor:  COLORS.action,
    heroDesc:     'We build complete generative AI applications — not prompts wrapped in a UI, but production-grade products with proper evaluation, safety, scalability, and the business logic that makes AI genuinely useful. From internal tools to customer-facing products.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 15,  suffix: '+', label: 'GenAI Apps Built',    iconName: 'Sparkles',   color: COLORS.action   },
      { target: 60,  suffix: '%', label: 'Content Cost Cut',    iconName: 'TrendingUp', color: COLORS.primary  },
      { target: 10,  suffix: 'x', label: 'Output Speed',        iconName: 'Zap',        color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',      iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Sparkles', title: 'Content Generation Engines',  color: COLORS.action,    desc: 'Brand-consistent copy, reports, and personalised content generated at scale — with tone controls and quality guardrails.' },
      { iconName: 'Brain',    title: 'Conversational AI Products',  color: COLORS.primary,   desc: 'Customer-facing chatbots and internal assistants with memory, persona, and domain grounding — not generic ChatGPT wrappers.' },
      { iconName: 'Code',     title: 'AI-Powered Workflow Apps',    color: COLORS.accent,    desc: 'Internal tools that automate drafting, summarisation, translation, and synthesis — embedded in your existing software stack.' },
      { iconName: 'Eye',      title: 'Multimodal Applications',     color: COLORS.secondary, desc: 'Apps that reason across text, images, and documents — for industries where information lives in mixed formats.' },
      { iconName: 'Shield',   title: 'Safety & Evaluation',         color: COLORS.gold,      desc: 'Red-teaming, output evaluation pipelines, and constitutional guardrails so your app is safe before users see it.' },
      { iconName: 'Database', title: 'Usage Analytics & Logging',   color: COLORS.cyan,      desc: 'Full prompt/response logging, cost tracking, and quality metrics so you can improve the app post-launch.' },
    ],

    process: [
      { step: '01', title: 'Use Case & ROI Scoping',      desc: 'We map the business workflow, identify where generation adds value, and define what "good output" looks like.' },
      { step: '02', title: 'Model & Prompt Architecture', desc: 'Model selection, system prompt design, and output formatting engineered for consistency and reliability.' },
      { step: '03', title: 'Safety & Evaluation Suite',   desc: 'Red-team testing, edge case evaluation, and guardrail configuration before any user interaction.' },
      { step: '04', title: 'Production Deployment',        desc: 'Scalable API or embedded UI component with cost monitoring, rate limiting, and full logging.' },
    ],

    deliverables: [
      'Complete GenAI application codebase',
      'Production API or UI component',
      'Safety evaluation report',
      'Prompt engineering documentation',
      'Cost optimisation configuration',
      'Usage analytics dashboard',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',        color: COLORS.action   },
      { label: 'OpenAI API',    color: COLORS.primary  },
      { label: 'Anthropic API', color: COLORS.accent   },
      { label: 'LangChain',     color: COLORS.secondary},
      { label: 'Streamlit',     color: COLORS.gold     },
      { label: 'FastAPI',       color: COLORS.cyan     },
      { label: 'React',         color: COLORS.action   },
      { label: 'PostgreSQL',    color: COLORS.primary  },
    ],

    tiers: [
      { name: 'Proof of Concept', price: 'From $8,000', featured: false,
        desc: 'Single GenAI workflow, built and evaluated.',
        features: ['One GenAI use case', 'Safety evaluation', 'Delivery as API or UI', '3–4 week turnaround'] },
      { name: 'Production App', price: 'From $15,000', featured: true,
        desc: 'Full GenAI application with safety, logging, and monitoring.',
        features: ['Complete app build', 'Safety guardrails', 'Usage analytics', 'Cost optimisation', '30-day support'] },
      { name: 'Enterprise GenAI', price: 'Custom', featured: false,
        desc: 'Multi-model, high-scale, compliance-grade applications.',
        features: ['Multi-model routing', 'High-volume serving', 'HIPAA / GDPR readiness', 'Dedicated engineer', 'SLA agreement'] },
    ],
  },

  // ── 13. MLOps & Deployment ───────────────────────────────────────────────
  'mlops': {
    id:           'mlops',
    title:        'MLOps & Deployment',
    tagline:      'Models that run, scale, and improve — automatically.',
    badge:        'MLOps & Lifecycle',
    accentColor:  COLORS.secondary,
    heroDesc:     'A model in a Jupyter Notebook isn\'t a product. We build the MLOps infrastructure that turns trained models into reliable, scalable production services — with CI/CD, monitoring, retraining, and the operational discipline your business requires.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 99,  suffix: '%', label: 'Uptime SLA',            iconName: 'Activity',  color: COLORS.secondary },
      { target: 10,  suffix: 'x', label: 'Deployment Speed',      iconName: 'Zap',       color: COLORS.action    },
      { target: 80,  suffix: '%', label: 'Ops Cost Reduction',    iconName: 'BarChart3', color: COLORS.gold      },
      { target: 100, suffix: '%', label: 'Code Ownership',        iconName: 'Shield',    color: COLORS.primary   },
    ],

    features: [
      { iconName: 'Settings2',  title: 'CI/CD for ML Pipelines',    color: COLORS.secondary, desc: 'GitHub Actions, GitLab CI, or Jenkins pipelines that automatically test, validate, and deploy new model versions.' },
      { iconName: 'Server',     title: 'Containerised Model Serving',color: COLORS.action,    desc: 'Docker + Kubernetes deployment with auto-scaling, load balancing, and rolling updates for zero-downtime releases.' },
      { iconName: 'Activity',   title: 'Performance Monitoring',     color: COLORS.primary,   desc: 'Latency, throughput, and prediction distribution dashboards with automated alerts on SLA breach.' },
      { iconName: 'RefreshCw',  title: 'Automated Retraining',       color: COLORS.accent,    desc: 'Trigger-based retraining pipelines that detect data or concept drift and schedule model updates automatically.' },
      { iconName: 'Database',   title: 'Feature Stores',             color: COLORS.gold,      desc: 'Centralised feature computation and serving so every model in your stack uses consistent, up-to-date features.' },
      { iconName: 'GitBranch',  title: 'Model Registry & Versioning',color: COLORS.cyan,      desc: 'MLflow or W&B model registry with full lineage tracking — every model version tied to its training data and code.' },
    ],

    process: [
      { step: '01', title: 'Current State Audit',         desc: 'We assess your existing model serving setup, identify reliability and scalability gaps, and define the target architecture.' },
      { step: '02', title: 'Pipeline Design & Build',     desc: 'CI/CD, serving, monitoring, and retraining components designed, built, and tested in a staging environment.' },
      { step: '03', title: 'Migration & Cutover',         desc: 'Existing models migrated to the new infrastructure with zero downtime and full rollback capability.' },
      { step: '04', title: 'Handover & Documentation',   desc: 'Runbooks, architecture diagrams, and hands-on training so your team can operate the infrastructure independently.' },
    ],

    deliverables: [
      'CI/CD pipeline configuration',
      'Containerised model serving (Docker + K8s)',
      'Monitoring dashboard + alert rules',
      'Retraining pipeline with drift detection',
      'Model registry setup (MLflow / W&B)',
      'Architecture documentation + runbooks',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',          color: COLORS.secondary },
      { label: 'Docker',          color: COLORS.action    },
      { label: 'Kubernetes',      color: COLORS.primary   },
      { label: 'MLflow',          color: COLORS.accent    },
      { label: 'Apache Airflow',  color: COLORS.gold      },
      { label: 'Prometheus',      color: COLORS.cyan      },
      { label: 'Grafana',         color: COLORS.secondary },
      { label: 'GitHub Actions',  color: COLORS.action    },
    ],

    tiers: [
      { name: 'MLOps Starter', price: 'From $5,000', featured: false,
        desc: 'One model containerised and deployed with basic monitoring.',
        features: ['Docker deployment', 'Basic monitoring', 'Model registry', '2–3 week turnaround'] },
      { name: 'Production MLOps', price: 'From $10,000', featured: true,
        desc: 'Full MLOps stack with CI/CD, retraining, and monitoring.',
        features: ['CI/CD pipeline', 'Auto-retraining', 'Full monitoring', 'Drift detection', '30-day support'] },
      { name: 'Enterprise MLOps', price: 'Custom', featured: false,
        desc: 'Multi-model platform with SLA-backed operations.',
        features: ['Multi-model serving', 'High-availability K8s', 'HIPAA / GDPR readiness', 'Dedicated MLOps engineer', 'SLA agreement'] },
    ],
  },

  // ── 14. Model Monitoring ─────────────────────────────────────────────────
  'monitoring': {
    id:           'monitoring',
    title:        'Model Monitoring',
    tagline:      'Know when your model starts failing — before your users do.',
    badge:        'MLOps & Lifecycle',
    accentColor:  COLORS.gold,
    heroDesc:     'Production ML models degrade silently. Data distributions shift. Features change. Labels drift. We build monitoring systems that watch your models continuously and alert your team the moment performance starts to slip.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 95,  suffix: '%', label: 'Drift Caught Early',   iconName: 'Eye',       color: COLORS.gold     },
      { target: 24,  suffix: '/7', label: 'Continuous Watching', iconName: 'Activity',  color: COLORS.action   },
      { target: 60,  suffix: '%', label: 'MTTR Reduction',       iconName: 'RefreshCw', color: COLORS.primary  },
      { target: 100, suffix: '%', label: 'Code Ownership',       iconName: 'Shield',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Activity',   title: 'Data Drift Detection',       color: COLORS.gold,      desc: 'PSI, KS-test, and Wasserstein distance metrics tracking input feature distributions against your training baseline.' },
      { iconName: 'Eye',        title: 'Prediction Drift Monitoring',color: COLORS.action,    desc: 'Output distribution monitoring that flags when your model starts predicting differently — before ground truth confirms it.' },
      { iconName: 'BarChart3',  title: 'Performance Tracking',       color: COLORS.primary,   desc: 'Accuracy, precision, recall, and business KPI dashboards updated as ground truth labels become available.' },
      { iconName: 'Zap',        title: 'Automated Alerting',         color: COLORS.accent,    desc: 'PagerDuty, Slack, and email alerts with configured thresholds — tuned to alert on real problems, not noise.' },
      { iconName: 'Database',   title: 'Data Quality Checks',        color: COLORS.secondary, desc: 'Null rates, schema changes, value range violations — caught at the pipeline level before they corrupt predictions.' },
      { iconName: 'RefreshCw',  title: 'Retraining Triggers',        color: COLORS.cyan,      desc: 'Automated retraining jobs that fire when drift exceeds defined thresholds — keeping model accuracy self-sustaining.' },
    ],

    process: [
      { step: '01', title: 'Baseline Profiling',           desc: 'We profile your training data and model outputs to define the statistical baseline everything is measured against.' },
      { step: '02', title: 'Metric Selection',             desc: 'We select drift metrics, performance proxies, and business KPIs that are meaningful for your specific model type.' },
      { step: '03', title: 'Dashboard & Alert Build',      desc: 'Grafana or custom dashboard with threshold-based alerts, escalation paths, and on-call rotation integration.' },
      { step: '04', title: 'Retraining Pipeline',          desc: 'Automated triggers connected to your CI/CD pipeline so drift above threshold automatically kicks off retraining.' },
    ],

    deliverables: [
      'Monitoring dashboard (Grafana or custom)',
      'Drift detection configuration',
      'Alert rules + escalation setup',
      'Retraining trigger pipeline',
      'Baseline statistical profiles',
      'Runbook for alert triage',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',          color: COLORS.gold     },
      { label: 'Evidently AI',    color: COLORS.action   },
      { label: 'Prometheus',      color: COLORS.primary  },
      { label: 'Grafana',         color: COLORS.accent   },
      { label: 'Apache Airflow',  color: COLORS.secondary},
      { label: 'MLflow',          color: COLORS.cyan     },
      { label: 'PagerDuty',       color: COLORS.gold     },
      { label: 'FastAPI',         color: COLORS.action   },
    ],

    tiers: [
      { name: 'Monitoring Starter', price: 'From $4,000', featured: false,
        desc: 'One model monitored with dashboard and basic alerts.',
        features: ['Single model monitoring', 'Drift detection', 'Basic alerting', '2–3 week turnaround'] },
      { name: 'Production Monitoring', price: 'From $8,000', featured: true,
        desc: 'Multi-model monitoring with retraining triggers.',
        features: ['Multi-model support', 'Full drift suite', 'Alert integrations', 'Retraining triggers', '30-day support'] },
      { name: 'Enterprise Monitoring', price: 'Custom', featured: false,
        desc: 'Platform-wide model observability with SLA support.',
        features: ['Unlimited models', 'Real-time streaming', 'HIPAA / GDPR readiness', 'Dedicated engineer', 'SLA agreement'] },
    ],
  },

  // ── 15. A/B Testing Frameworks ───────────────────────────────────────────
  'ab-testing': {
    id:           'ab-testing',
    title:        'A/B Testing Frameworks',
    tagline:      'Ship with evidence. Never guess what works.',
    badge:        'MLOps & Lifecycle',
    accentColor:  COLORS.primary,
    heroDesc:     'Most ML teams ship models and hope for the best. We build A/B testing infrastructure that compares model versions, feature variants, and business logic changes with statistical rigour — so every deployment decision is backed by evidence, not opinion.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 100, suffix: '%', label: 'Decision Confidence',  iconName: 'BarChart3', color: COLORS.primary  },
      { target: 15,  suffix: '+', label: 'A/B Platforms Built',  iconName: 'GitBranch', color: COLORS.action   },
      { target: 30,  suffix: '%', label: 'Avg Metric Lift',      iconName: 'TrendingUp',color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',       iconName: 'Shield',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'GitBranch',  title: 'Traffic Splitting',           color: COLORS.primary,   desc: 'Percentage-based, user-segment, and canary rollout strategies with deterministic assignment and full reproducibility.' },
      { iconName: 'BarChart3',  title: 'Statistical Power Analysis',  color: COLORS.action,    desc: 'Pre-experiment power calculations so you know exactly how long to run the test and how many samples you need.' },
      { iconName: 'Activity',   title: 'Real-time Metric Tracking',   color: COLORS.accent,    desc: 'Live dashboards showing conversion rates, model performance, and business KPIs updating as the experiment runs.' },
      { iconName: 'Shield',     title: 'Guardrail Metrics',           color: COLORS.secondary, desc: 'Automated alerts and rollback triggers if a treatment causes harm on secondary metrics while winning on the primary.' },
      { iconName: 'Database',   title: 'Multi-armed Bandit Option',   color: COLORS.gold,      desc: 'Epsilon-greedy and Thompson Sampling alternatives for when you need to minimise exposure to underperforming variants.' },
      { iconName: 'Layers',     title: 'Experiment Governance',       color: COLORS.cyan,      desc: 'Centralised experiment registry, conflict detection, and analysis automation so learnings are captured and shared.' },
    ],

    process: [
      { step: '01', title: 'Metric & Hypothesis Design',  desc: 'We define the primary and guardrail metrics, sample size requirements, and success criteria before anything goes live.' },
      { step: '02', title: 'Assignment Infrastructure',   desc: 'Consistent user assignment with hash-based bucketing, holdout groups, and full logging for post-hoc analysis.' },
      { step: '03', title: 'Analysis & Significance',    desc: 'Frequentist and Bayesian analysis options with multiple comparison corrections and confidence interval reporting.' },
      { step: '04', title: 'Rollout Automation',          desc: 'Winner auto-promotion pipelines so validated improvements deploy to 100% of traffic without manual intervention.' },
    ],

    deliverables: [
      'A/B testing infrastructure codebase',
      'Experiment registry interface',
      'Statistical analysis tooling',
      'Real-time metrics dashboard',
      'Guardrail alert configuration',
      'Winner rollout automation',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.primary  },
      { label: 'Statsmodels',  color: COLORS.action   },
      { label: 'FastAPI',      color: COLORS.accent   },
      { label: 'PostgreSQL',   color: COLORS.secondary},
      { label: 'Grafana',      color: COLORS.gold     },
      { label: 'Redis',        color: COLORS.cyan     },
      { label: 'React',        color: COLORS.primary  },
      { label: 'Airflow',      color: COLORS.action   },
    ],

    tiers: [
      { name: 'A/B Starter', price: 'From $4,500', featured: false,
        desc: 'Two-variant testing for one model or feature.',
        features: ['Binary A/B setup', 'Statistical analysis', 'Dashboard', '2–3 week turnaround'] },
      { name: 'Production A/B Platform', price: 'From $9,000', featured: true,
        desc: 'Full experimentation platform with registry and automation.',
        features: ['Multi-variant support', 'Experiment registry', 'Guardrail alerts', 'Winner automation', '30-day support'] },
      { name: 'Enterprise Experimentation', price: 'Custom', featured: false,
        desc: 'Organisation-wide experimentation with governance.',
        features: ['Unlimited experiments', 'Multi-armed bandit', 'HIPAA / GDPR readiness', 'Dedicated engineer', 'SLA agreement'] },
    ],
  },

  // ── 16. Feature Stores ───────────────────────────────────────────────────
  'feature-stores': {
    id:           'feature-stores',
    title:        'Feature Stores',
    tagline:      'One source of truth for every feature every model uses.',
    badge:        'MLOps & Lifecycle',
    accentColor:  COLORS.accent,
    heroDesc:     'Without a feature store, every data scientist recomputes the same features differently. Models trained in notebooks diverge from models in production. We build centralised feature stores that ensure consistency, reduce duplication, and accelerate every future model you build.',
    tags:         ['Fixed-Fee Projects', 'Full Code Ownership'],

    stats: [
      { target: 70,  suffix: '%', label: 'Feature Reuse Rate',   iconName: 'RefreshCw', color: COLORS.accent   },
      { target: 10,  suffix: '+', label: 'Feature Stores Built', iconName: 'Database',  color: COLORS.action   },
      { target: 3,   suffix: 'x', label: 'Faster Experiments',   iconName: 'Zap',       color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Code Ownership',       iconName: 'Shield',    color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Database',   title: 'Offline Feature Store',       color: COLORS.accent,    desc: 'Historical feature retrieval for model training — point-in-time correct to prevent data leakage.' },
      { iconName: 'Zap',        title: 'Online Feature Serving',      color: COLORS.action,    desc: 'Low-latency feature retrieval for real-time inference — Redis or DynamoDB backed, sub-10ms P99.' },
      { iconName: 'Layers',     title: 'Feature Registry & Discovery',color: COLORS.primary,   desc: 'Centralised catalogue so data scientists can find, understand, and reuse features rather than rebuilding them.' },
      { iconName: 'Shield',     title: 'Point-in-Time Correctness',   color: COLORS.secondary, desc: 'Training-serving skew eliminated — every training sample uses only features available at the time of that event.' },
      { iconName: 'Activity',   title: 'Feature Monitoring',          color: COLORS.gold,      desc: 'Automated freshness checks, null rate monitoring, and distribution drift alerts for every served feature.' },
      { iconName: 'RefreshCw',  title: 'Batch + Streaming Ingestion', color: COLORS.cyan,      desc: 'Spark batch pipelines and Kafka streaming ingestion unified under one feature computation framework.' },
    ],

    process: [
      { step: '01', title: 'Feature Audit',                desc: 'We catalogue existing feature computation logic across your notebooks, pipelines, and SQL queries to identify consolidation opportunities.' },
      { step: '02', title: 'Architecture Design',          desc: 'Feast, Tecton, or custom store — chosen based on your scale, latency requirements, and existing infrastructure.' },
      { step: '03', title: 'Migration & Backfill',         desc: 'Existing features migrated, historical data backfilled, and training-serving consistency validated before cutover.' },
      { step: '04', title: 'Governance & Documentation',  desc: 'Feature catalogue populated, ownership assigned, and data lineage documented so the store compounds value over time.' },
    ],

    deliverables: [
      'Feature store infrastructure setup',
      'Offline + online store configuration',
      'Feature registry with documentation',
      'Ingestion pipelines (batch + streaming)',
      'Point-in-time retrieval validation',
      'Feature monitoring configuration',
      '30-day post-deployment support',
    ],

    techStack: [
      { label: 'Python',        color: COLORS.accent   },
      { label: 'Feast',         color: COLORS.action   },
      { label: 'Apache Spark',  color: COLORS.primary  },
      { label: 'Kafka',         color: COLORS.secondary},
      { label: 'Redis',         color: COLORS.gold     },
      { label: 'PostgreSQL',    color: COLORS.cyan     },
      { label: 'dbt',           color: COLORS.accent   },
      { label: 'Airflow',       color: COLORS.action   },
    ],

    tiers: [
      { name: 'Feature Store Starter', price: 'From $6,000', featured: false,
        desc: 'Offline store with registry for one model team.',
        features: ['Offline store setup', 'Basic registry', 'Batch ingestion', '3–4 week turnaround'] },
      { name: 'Production Feature Store', price: 'From $12,000', featured: true,
        desc: 'Full offline + online store with monitoring.',
        features: ['Offline + online store', 'Streaming ingestion', 'Feature monitoring', 'Full registry', '30-day support'] },
      { name: 'Enterprise Feature Platform', price: 'Custom', featured: false,
        desc: 'Organisation-wide feature platform with SLA support.',
        features: ['Multi-team governance', 'Sub-10ms serving SLA', 'HIPAA / GDPR readiness', 'Dedicated engineer', 'SLA agreement'] },
    ],
  },
};