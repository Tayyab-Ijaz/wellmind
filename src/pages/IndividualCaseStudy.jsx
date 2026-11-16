/**
 * IndividualCaseStudy.jsx — WellMind Data Solutions
 * Case study page — routed by /case-studies/:slug
 *
 * Layout: hero (category, title, summary, tags, at-a-glance strip) → "On this page" nav →
 * Overview → The Challenge → The Solution → Outcomes → Tech stack → related case studies → CTA.
 * List data lives in ../data/caseStudies.jsx; the longer write-ups below (plus the newer ones in
 * ../data/extraCaseStudies.jsx) feed this page.
 */

import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { B, PX } from '../theme';
import { useSeo, SITE_NAME } from '../seo';
import imgArPrioritization from '../assets/case-studies/ar-prioritization.webp';
import imgClaimDenial from '../assets/case-studies/claim-denial.webp';
import imgCommandCenter from '../assets/case-studies/command-center.webp';
import imgSupplyGuard from '../assets/case-studies/supplyguard.webp';
import imgInsuranceRiskScoring from '../assets/case-studies/insurance-risk-scoring.webp';
import imgTelecomChurn from '../assets/case-studies/telecom-churn.webp';
import imgRetailDemand from '../assets/case-studies/retail-demand-forecasting.webp';
import imgRcmPriorAuth from '../assets/case-studies/rcm-prior-auth.webp';
import imgAccountsPayable from '../assets/case-studies/accounts-payable.webp';
import imgEmailOrderIntake from '../assets/case-studies/email-order-intake.webp';
import imgSatelliteCropYield from '../assets/case-studies/satellite-crop-yield.webp';
import imgAdaptiveLearning from '../assets/case-studies/adaptive-learning.webp';
import imgEhrClinicalNlp from '../assets/case-studies/ehr-clinical-nlp.webp';
import imgSingleCellRnaseq from '../assets/case-studies/single-cell-rnaseq.webp';
import imgRealTimeFraud from '../assets/case-studies/real-time-fraud-detection.webp';
import imgInsurancePolicyClassification from '../assets/case-studies/insurance-policy-classification.webp';
import imgHealthcareFraudBilling from '../assets/case-studies/healthcare-fraud-billing.webp';
import { ArrowRight, ArrowUpRight, CheckCircle, ChevronRight, SquareCode } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { EXTRA_CASE_STUDIES } from '../data/extraCaseStudies';
import { challengePoints, firstSentence, leadIn, solutionSteps } from '../data/caseStudyText';

// ─── Case Studies Data ────────────────────────────────────────────────────────
const ALL_CASE_STUDIES = {
  'icd10-cpt-coding-engine': {
    slug: 'icd10-cpt-coding-engine', industry: 'Healthcare AI',
    timeline: '1 commit', investment: 'Concept (README)',
    accentColor: '#616161',
    title: "ICD-10 & CPT Coding Recommendation Engine",
    overview: "Medical coders manually match clinical notes to ICD-10 and CPT codes — a slow process where a missed or wrong code can mean a denied claim. This engine automates that matching: it cleans and structures the note, retrieves candidate codes through keyword, embedding, and semantic-similarity search, ranks them against clinical guidelines and code rules, then returns top recommendations with a confidence score and justification ready for coder review.",
    challenge: `Manually matching free-text clinical notes to the right ICD-10 diagnosis and CPT procedure codes is slow, inconsistent between coders, and a single missed or mismatched code can trigger a denied claim. Generic keyword search misses clinical context and synonyms, while a fully black-box model would be hard for coders and auditors to trust or verify.`,
    approach: `Built a text preprocessing pipeline (cleaning, tokenization, lemmatization, key-term/entity extraction) feeding a hybrid candidate-retrieval layer that combines keyword matching, embeddings, and semantic similarity across both ICD-10 and CPT code sets. Candidates are then re-ranked by an ML/NLP scoring layer that factors in clinical guidelines, exclusions, and code rules, and every final recommendation ships with a confidence score, code description, and rationale so coders can verify it at a glance.`,
    results: ["Hybrid retrieval (keyword + embeddings + semantic similarity) built across both ICD-10 and CPT code sets", "Ranking layer incorporates clinical guidelines and code-exclusion rules, not just keyword overlap", "Every recommendation returns a confidence score and rationale, ready for coder review", "Export path designed for direct integration into existing EHR and billing systems"],
    tools: ['Python', 'NLP', 'Embeddings', 'Semantic Search', 'spaCy'],
    quote: null,
    metrics: [{ value: 'NLP + Embeddings', label: 'Approach' }, { value: 'ICD-10 + CPT', label: 'Codes' }, { value: 'Concept / README', label: 'Stage' }],
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/ICD-10-CPT-coding-recommendation-engine',
  },
  'ar-prioritization-underpayment-recovery': {
    slug: 'ar-prioritization-underpayment-recovery', industry: 'Healthcare AI',
    timeline: '12 commits', investment: 'Full-Stack Build',
    accentColor: B.action,
    title: "AR Prioritization & Underpayment Recovery Engine",
    overview: "Revenue Cycle teams need a practical way to identify claims that are likely underpaid and worth following up. This project builds expected-payment tables from CMS RVU reference data, flags claims that appear materially underpaid, and ranks which ones AR teams should review first — surfacing which states, HCPCS codes, and provider types drive the largest recovery opportunity. No PHI is used; the pipeline runs entirely on public CMS Medicare and Physician Fee Schedule data.",
    challenge: `AR teams need to know which underpaid claims are worth chasing first, out of millions of rows, without access to patient-level data. A pure rules-based CMS-formula benchmark is audit-defensible but slow to act on at scale, and needs a validation layer to confirm it isn't systematically over- or under-flagging claims.`,
    approach: `Built expected-payment tables from CMS RVU reference data and joined them against actual CMS payment data. Trained and compared five models — LightGBM came out on top — to flag high-recovery-priority claims, with threshold tuning for different precision/recall targets. Added an Isolation Forest layer to catch anomalous underpayment patterns beyond the standard variance model, plus a supplementary regression layer that cross-checks the CMS formula benchmark against actual allowed amounts. Shipped as a FastAPI backend with an interactive React dashboard for the priority queue, underpayment reports, and a live single-claim checker.`,
    results: ["LightGBM best model: Test PR-AUC 0.875, ROC-AUC 0.886, F1 0.758 on 6.14M rows across 23 features", "6,056,133 underpaid claims queued and ranked into a prioritized AR workqueue", "9,114 Critical-tier and 173,218 High-tier claims surfaced for immediate AR review", "Regression validation layer (HistGradientBoosting, MAE 14.48) confirms the CMS formula benchmark stays the audit-defensible pricing engine"],
    tools: ['Python', 'LightGBM', 'Isolation Forest', 'FastAPI', 'React', 'CMS RVU Data'],
    quote: null,
    metrics: [{ value: '0.875', label: 'PR-AUC' }, { value: '6.1M', label: 'Rows Modeled' }, { value: '9,114', label: 'Critical-Tier Claims' }],
    heroImage: imgArPrioritization,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/AR-prioritization-underpayment-recovery-engine',
  },
  'conversational-analytics-platform': {
    slug: 'conversational-analytics-platform', industry: 'Data Science',
    timeline: '4 commits', investment: 'Full-Stack Build',
    accentColor: B.primary,
    title: "Conversational Analytics Platform",
    overview: "Business users shouldn't need to know how to query a database to get an answer from their data. This platform lets anyone type a plain-language business question into a chat panel; an LLM engine parses it into structured filters, a FastAPI backend resolves them into a live database query, and a React dashboard auto-detects and renders the right chart type — no manual chart selection required.",
    challenge: `Non-technical stakeholders needed to ask ad-hoc business questions of live data without waiting on an analyst to write a query and pick a chart type every time. The system had to reliably map open-ended natural language into structured, safe query filters, and then decide — automatically — which of six chart types actually fit the shape of the result.`,
    approach: `Built a five-layer pipeline: the UI layer captures the raw question and forwards it with a strict system prompt to Google Gemini Pro for zero-shot parameter mapping into a clean JSON object (product, city, date range, aggregation). A FastAPI backend resolves those filters into a live query against Firebase Firestore with real-time listeners, shapes the response, and a component mapper on the frontend inspects the response's data keys to automatically mount the correct Recharts visual — bar, line, pie, scatter, KPI card, or table — with zero manual chart configuration.`,
    results: ["Natural-language questions convert to structured JSON filters via zero-shot LLM parameter mapping", "Six chart types (bar, line, pie, scatter, KPI cards, table) auto-selected purely from response data shape", "Real-time Firestore listeners keep dashboard results live as underlying data changes", "Fully decoupled five-layer architecture — UI, AI engine, backend, database, and component mapper"],
    tools: ['React', 'FastAPI', 'Google Gemini Pro', 'Firebase Firestore', 'Recharts', 'Python 3.12'],
    quote: null,
    metrics: [{ value: '6 Auto-Rendered', label: 'Chart Types' }, { value: 'Gemini Pro', label: 'LLM Engine' }, { value: 'Real-time Firestore', label: 'Data Layer' }],
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Conversational-Analytics-Platform',
  },
  'claim-denial-prediction': {
    slug: 'claim-denial-prediction', industry: 'Healthcare AI',
    timeline: '38 commits', investment: 'Full-Stack Build',
    accentColor: B.secondary,
    title: "Claim Denial Prediction & Root-Cause Classifier",
    overview: "Healthcare billing teams lose time and revenue when claims are denied after submission. This project moves that check earlier: before a claim goes out, it estimates denial probability from CMS provider-service data, and — if a denial remark is already on hand — classifies the likely operational root cause against an X12 RARC-style taxonomy with a recommended fix.",
    challenge: `Denials caught after submission are already a loss of time and revenue, and billing teams had no structured way to route denial remark text to the right root-cause category before deciding how to fix it. The model also needed to be explainable enough for a billing team to trust and act on, not just a black-box score.`,
    approach: `Combined structured CMS Medicare provider-service data with an X12 RARC-style NLP dataset. Built a boosted-tree denial-risk model (Optuna-tuned) with SHAP-based feature importance and threshold-tuned risk tiers (low/medium/high), plus a parallel root-cause NLP pipeline comparing TF-IDF and DistilBERT classifiers against a RARC-style taxonomy. Shipped both through a FastAPI service with an interactive Streamlit dashboard for entering claim details and reviewing risk + root-cause results together.`,
    results: ["Boosted-tree denial-risk model tuned with Optuna, output as a 0–100% denial probability", "Risk tiering (low/medium/high) via optimized probability thresholds", "TF-IDF vs. DistilBERT root-cause classifiers compared against an X12 RARC-style taxonomy", "SHAP-based feature drivers and a recommended first-pass fix returned with every prediction"],
    tools: ['Python', 'Optuna', 'DistilBERT', 'SHAP', 'FastAPI', 'Streamlit'],
    quote: null,
    metrics: [{ value: '3-Tier', label: 'Risk Tiers' }, { value: 'TF-IDF + DistilBERT', label: 'Root-Cause NLP' }, { value: 'SHAP', label: 'Explainability' }],
    heroImage: imgClaimDenial,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Claim-denial-prediction-root-cause-classifier',
  },
  'restaurant-command-center': {
    slug: 'restaurant-command-center', industry: 'Hospitality Tech',
    timeline: '1 commit', investment: 'Live Deployed Build',
    accentColor: B.accent,
    title: "Command Center — Multi-Branch Restaurant Operations Platform",
    overview: "Managing a restaurant across multiple branches means an owner can't personally supervise every shift, order, or cash transaction. Command Center closes that gap: every check-in, order, cancellation, and kitchen delay passes through a continuous monitoring layer, and anything that needs the owner's attention is pushed to them immediately — on WhatsApp and the dashboard — instead of being discovered at the end of the week.",
    challenge: `Owners of multi-branch restaurants relied on end-of-day summaries and only learned about fraud, delays, or proxy attendance after the fact. Order cancellations and price manipulation had no automated pattern-detection, and staff could clock in for absent colleagues with no way to confirm who was actually on-site.`,
    approach: `Built five role-based portals (staff, cashier, kitchen, owner, admin) on one connected platform. Attendance requires a live selfie match against a verified reference photo plus geo-fenced location confirmation within the branch radius. Every order is continuously scored for suspicious cancellation and pricing patterns by an automated fraud-detection engine, kitchen prep time is tracked against SLA targets, and any fraud, delay, or attendance anomaly is pushed straight to the owner's WhatsApp and dashboard in real time.`,
    results: ["Face-verified + geo-fenced check-in eliminates proxy attendance", "Automated fraud engine scores every order cancellation and price change, flagging repeat patterns by staff member", "Kitchen SLA tracking flags prep-time delays automatically before customers complain", "Deployed live across five role-scoped portals in one multi-branch platform"],
    tools: ['React', 'Fraud Detection Engine', 'Face Verification', 'Geo-Fencing', 'WhatsApp Alerts'],
    quote: null,
    metrics: [{ value: '5 Role-Based', label: 'Portals' }, { value: 'Real-Time WhatsApp', label: 'Alerts' }, { value: 'Face + Geo-Fence', label: 'Verification' }],
    heroImage: imgCommandCenter,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/restaurant-management-system',
    liveDemo: 'https://nexus-rms.vercel.app',
  },
  'supplyguard-disruption-alerts': {
    slug: 'supplyguard-disruption-alerts', industry: 'Supply Chain',
    timeline: '8 commits', investment: 'Full-Stack Build',
    accentColor: '#666666',
    title: "SupplyGuard — Supply Chain Disruption Alert System",
    overview: "SupplyGuard helps supply chain managers spot potential supplier disruptions before they hit production. It evaluates operational metrics (like KG Score and Emergency Score) alongside environmental risk signals — weather, economic, geopolitical, technical infrastructure — to generate a continuous disruption risk score for every supplier.",
    challenge: `Procurement teams typically found out about supplier disruptions only after they had already affected production — after the damage was done. There was no unified way to combine internal operational stress signals with external environmental risk feeds into a single, actionable early-warning score.`,
    approach: `Engineered operational risk features (KG Score, Emergency Score) alongside categorical environmental signals — weather, economic, geopolitical, and technical infrastructure risk. Trained a Logistic Regression classifier to calculate disruption probability, converted it into a continuous 0–100 risk score, and classified suppliers into Low, Medium, and High risk tiers. Delivered through a Flask backend with an HTML dashboard for supplier risk monitoring and a single-supplier risk checker.`,
    results: ["Continuous 0–100 disruption risk score generated per supplier", "Combines internal operational metrics with external weather, economic, and geopolitical risk signals", "Low / Medium / High risk classification supports proactive contingency sourcing", "Deployed with a live risk-checker dashboard and vercel.json for deploy-ready hosting"],
    tools: ['Python', 'Logistic Regression', 'Flask', 'HTML Dashboard'],
    quote: null,
    metrics: [{ value: '0–100 Scale', label: 'Risk Score' }, { value: 'Logistic Regression', label: 'Model' }, { value: 'Low / Med / High', label: 'Risk Tiers' }],
    heroImage: imgSupplyGuard,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Supply-Chain-Disruption-Alerts',
  },
  'insurance-risk-scoring': {
    slug: 'insurance-risk-scoring', industry: 'Insurance AI',
    timeline: '3 commits', investment: 'Full-Stack Build',
    accentColor: '#676767',
    title: "Insurance Risk Scoring",
    overview: "Insurance Risk Scoring assesses customer risk from financial, demographic, health, lifestyle, vehicle, policy, and behavioral information. The system cleans and prepares customer data, engineers and selects features, trains risk models, and serves predictions through an interactive Streamlit application.",
    challenge: `Underwriting teams needed a consistent, explainable way to convert a wide, messy set of customer attributes — income, credit score, claims history, driving record, health indicators — into a single, trustworthy risk classification, instead of relying on inconsistent manual judgment calls.`,
    approach: `Cleaned and prepared customer data, then ran exploratory analysis and feature engineering/selection to identify the strongest risk predictors. Trained a Gradient Boosting Classifier on 45 engineered features spanning income, credit score, claims history, vehicle and policy data, and behavioral signals. Deployed the trained model (\`gradient_boosting_best.pkl\`) through a Streamlit app that returns a percentage-based risk probability, a Low/Medium/High classification, and top feature-importance visualizations for every customer.`,
    results: ["Gradient Boosting Classifier trained on 45 customer-level features", "Converts model output into a percentage-based risk probability with a Low/Medium/High category", "Interactive Streamlit app for real-time single-customer risk prediction", "Feature-importance visualization shows underwriters exactly what drove each score"],
    tools: ['Python', 'Gradient Boosting', 'Streamlit', 'scikit-learn'],
    quote: null,
    metrics: [{ value: '45', label: 'Model Features' }, { value: 'Gradient Boosting', label: 'Model' }, { value: '3', label: 'Risk Tiers' }],
    heroImage: imgInsuranceRiskScoring,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Insurance-Risk-Scoring',
  },
  'telecom-churn-prediction': {
    slug: 'telecom-churn-prediction', industry: 'Telecom AI',
    timeline: '13 commits', investment: 'ML Pipeline Build',
    accentColor: '#767676',
    title: "Telecom Customer Churn Prediction",
    overview: "Telecom Customer Churn Prediction identifies customers likely to stop using services, defining churn as zero recharge and zero data usage in month nine. The pipeline handles data cleaning, feature engineering, class balancing, multi-model comparison, and SHAP-based explainability to turn predictions into actionable retention insights.",
    challenge: `With a 14.5% churn rate buried inside 150 raw behavioral features, the team needed a model that was both accurate and explainable enough for a retention team to act on specific drivers — not just a black-box probability — while avoiding data leakage from the very month-nine behavior that defines churn.`,
    approach: `Removed month-nine features to prevent leakage, then engineered activity, RFM, trend, frequency, and efficiency-based features. Reduced the feature space from 150 to 25 using VIF, correlation filtering, and Random Forest importance, and applied SMOTE to address the 14.5% churn class imbalance. Compared five models — Random Forest, XGBoost, LightGBM, CatBoost, and Logistic Regression — via 5-fold cross-validation optimized for F1, then used SHAP to identify and explain the top churn drivers per customer.`,
    results: ["Random Forest best model: 86.42% accuracy, 84.23% precision, 0.91 AUC-ROC", "Feature space reduced from 150 to 25 via VIF, correlation filtering, and RF importance", "Targeting the top 20% highest-risk customers captures over 65% of actual churners", "SHAP analysis ranks Total Activity, Activity Trend, and Month-8 Recharge as top churn drivers"],
    tools: ['Random Forest', 'XGBoost', 'LightGBM', 'CatBoost', 'SHAP', 'SMOTE'],
    quote: null,
    metrics: [{ value: '86.4%', label: 'Accuracy' }, { value: '0.91', label: 'AUC-ROC' }, { value: '65%+ Churners', label: 'Top 20% Capture' }],
    heroImage: imgTelecomChurn,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Telecom-Customer_Churn_Prediction',
  },
  'retail-demand-forecasting': {
    slug: 'retail-demand-forecasting', industry: 'Retail AI',
    timeline: '3 commits', investment: 'Concept (README)',
    accentColor: B.action,
    title: "Retail Demand Forecasting",
    overview: "Retail Demand Forecasting helps retail businesses understand historical sales patterns and predict future demand. The pipeline processes historical sales data, analyzes trends and seasonality, applies forecasting techniques, and presents results in a structured, actionable format to support inventory and replenishment decisions.",
    challenge: `Retail buying teams needed a repeatable way to separate genuine seasonal demand swings from noise in historical sales data, so inventory decisions could be based on forecasted demand instead of gut feel — reducing both stockout and overstock risk.`,
    approach: `Designed a forecasting pipeline: clean and prepare historical sales data, run exploratory analysis to surface demand trends and seasonality, engineer time-based and demand-related features, apply forecasting models, and evaluate performance against actual demand. Results feed directly into inventory planning and replenishment decisions.`,
    results: ["End-to-end pipeline from raw sales data to demand forecast and business insight", "Seasonality analysis identifies recurring demand patterns for inventory planning", "Forecast evaluation built in using standard forecasting performance metrics", "Designed to plug directly into replenishment and stockout/overstock risk decisions"],
    tools: ['Python', 'Pandas', 'Time-Series Forecasting'],
    quote: null,
    metrics: [{ value: 'Time-Series', label: 'Approach' }, { value: 'Seasonality', label: 'Focus' }, { value: 'Concept / README', label: 'Stage' }],
    heroImage: imgRetailDemand,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Retail-Demand-Forecasting',
  },
  'rcm-prior-authorization-intelligence': {
    slug: 'rcm-prior-authorization-intelligence', industry: 'Healthcare AI',
    timeline: '31 commits', investment: 'Full-Stack Build',
    accentColor: B.primary,
    title: "RCM Opportunity Forecasting & Prior Authorization Intelligence",
    overview: "This system analyzes Medicare Advantage enrollment trends, forecasts 90-day enrollment opportunities, identifies prior-authorization exposure, and highlights growth opportunities for Revenue Cycle Management teams — built entirely on publicly available CMS enrollment, penetration, plan, and prior-authorization benefit data, with no PHI or revenue assumptions involved.",
    challenge: `RCM teams needed forward-looking, public-data-only intelligence on where Medicare Advantage enrollment was growing and which plans carried higher prior-authorization exposure — without access to PHI, and without relying on unsupported denial or PMPM revenue assumptions that wouldn't survive an audit.`,
    approach: `Collected and cleaned public CMS Medicare Advantage enrollment, plan, penetration, and benefit data covering January 2024 through May 2026. Built a 90-day enrollment forecast (Linear Drift came out best on holdout, ~0.048% MAPE), analyzed CMS PBP benefit fields to flag plans with higher prior-authorization exposure, and evaluated plans against CMS authorization timing guardrails. Delivered growth-opportunity analysis across states, counties, plan types, and plans through an interactive Streamlit executive dashboard.`,
    results: ["National Medicare Advantage enrollment tracked from ~33.48M to 36.08M across the dataset window", "Best holdout model (Linear Drift) hit ~0.048% MAPE on the 90-day enrollment forecast", "Prior-authorization exposure flagged directly from CMS PBP benefit fields — no synthetic denial labels used", "Growth-opportunity analysis surfaces states, counties, and plans worth prioritizing for RCM outreach"],
    tools: ['Python', 'Time-Series Forecasting', 'Streamlit', 'CMS Public Data'],
    quote: null,
    metrics: [{ value: '0.048%', label: 'Holdout MAPE' }, { value: '33.5M → 36.1M', label: 'Enrollment Tracked' }, { value: '90 Days', label: 'Forecast Horizon' }],
    heroImage: imgRcmPriorAuth,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Revenue-forecasting-prior-authorization-intelligence',
  },
  'accounts-payable-invoice-extraction': {
    slug: 'accounts-payable-invoice-extraction', industry: 'Automation',
    timeline: '6 commits', investment: 'Notebook Prototype',
    accentColor: B.accent,
    title: "Accounts Payable Invoice Extraction",
    overview: "Accounts Payable Invoice Extraction takes invoice documents as input, processes their content, extracts relevant fields, validates the extraction, and produces structured output ready for downstream accounts payable processing — automating what was previously repetitive manual data entry.",
    challenge: `AP teams were manually re-typing the same invoice fields — dates, amounts, customer details, charges — across a high volume of documents, a process that was slow and error-prone with no consistent way to flag incomplete or incorrect extractions before they hit the books.`,
    approach: `Built a document-processing pipeline: ingest the invoice, process and prepare its content, extract relevant fields (invoice details, customer information, dates, amounts, charges), validate completeness and correctness, and route anything incomplete for correction before generating the final structured record.`,
    results: ["Automates extraction of invoice details, customer info, dates, amounts, and charges", "Built-in data validation flags incomplete or incorrect extractions before they reach AP records", "Structured output generation standardizes invoice data for downstream processing", "Designed to scale across bulk invoice batches instead of one-by-one manual entry"],
    tools: ['Python', 'Jupyter Notebook', 'Document Extraction'],
    quote: null,
    metrics: [{ value: '6+ Core Fields', label: 'Fields Extracted' }, { value: 'Structured Data', label: 'Output' }, { value: 'Notebook Prototype', label: 'Stage' }],
    heroImage: imgAccountsPayable,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Accounts-Payable-Invoice-Extraction',
  },
  'email-order-intake-system': {
    slug: 'email-order-intake-system', industry: 'Automation',
    timeline: '2 commits', investment: 'Concept (README)',
    accentColor: '#8e8e8e',
    title: "Email-Based Order Intake System",
    overview: "Businesses often receive orders through emails formatted differently by every customer. This system is designed to monitor a designated inbox, retrieve incoming order emails and attachments, extract order information, validate it, and create a structured order in the target system — converting unstructured email orders into organized, actionable records.",
    challenge: `Manually reading order emails in different formats, identifying customer and product details, and re-entering them into an order system was time-consuming and error-prone at any real volume — with no consistent path for flagging incomplete or ambiguous orders for review.`,
    approach: `Designed an end-to-end flow: monitor the inbox, fetch new emails and attachments, extract order data (customer, product, quantity, pricing, delivery), validate against mandatory fields and business rules, and either auto-create the structured order or route it to manual review. Every processed email is logged for traceability, with status notifications sent once an order is confirmed or flagged.`,
    results: ["End-to-end concept flow from raw inbox email to validated, structured order record", "Validation layer separates auto-createable orders from ones needing manual review", "Audit logging designed in from the start for traceability and troubleshooting", "Suggested stack (FastAPI + LLM extraction + PostgreSQL) scoped for production deployment"],
    tools: ['Python', 'IMAP / Graph API', 'FastAPI', 'PostgreSQL (suggested)'],
    quote: null,
    metrics: [{ value: 'Email + Attachments', label: 'Channels' }, { value: 'Rule-Based', label: 'Validation' }, { value: 'Concept / README', label: 'Stage' }],
    heroImage: imgEmailOrderIntake,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Email-Based-Order-Intake-System',
  },
  'satellite-weather-crop-yield': {
    slug: 'satellite-weather-crop-yield', industry: 'Agriculture AI',
    timeline: '1 commit', investment: 'Concept (README)',
    accentColor: '#616161',
    title: "Satellite, Weather & Crop Yield Prediction",
    overview: "Crop yield depends on soil conditions, weather, and vegetation health — hard to track manually across large farming regions. This pipeline combines satellite imagery, weather data, and ground-truth records into a single unified dataset, extracts vegetation and weather indices (NDVI, EVI, NDWI, LST), and trains multiple ML/DL models to predict crop yield.",
    challenge: `Yield-relevant signal was scattered across three different data sources — satellite imagery, weather stations, and ground-truth records — with no unified pipeline to fuse them spatially and temporally, or to compare which modeling approach (classical ML vs. time-series deep learning) actually predicted yield best.`,
    approach: `Built a multi-source collection and preprocessing pipeline covering Sentinel-2, MODIS, and Landsat imagery — cloud masking, compositing, and vegetation/weather index calculation (NDVI, EVI, NDWI, LST) — then integrated it spatially and temporally with ground-truth yield records. Compared Random Forest, XGBoost, LightGBM, SVR, and LSTM/GRU models for time-series yield prediction, evaluated with RMSE, MAE, R², and MAPE, with exportable yield maps, regional reports, and CSV/GeoTIFF outputs.`,
    results: ["Unified dataset fusing satellite imagery, weather data, and ground-truth records by location and time", "Vegetation/weather indices (NDVI, EVI, NDWI, LST) engineered directly from raw imagery", "Five model families compared (RF, XGBoost, LightGBM, SVR, LSTM/GRU) for best-fit yield prediction", "Exportable outputs designed for yield maps, regional reports, and GeoTIFF/CSV downloads"],
    tools: ['Python', 'Sentinel-2', 'Random Forest', 'XGBoost', 'LSTM/GRU'],
    quote: null,
    metrics: [{ value: '3 Fused', label: 'Data Sources' }, { value: '5', label: 'Models Compared' }, { value: 'Concept / README', label: 'Stage' }],
    heroImage: imgSatelliteCropYield,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/satellite-weather-crop-yield',
  },
  'adaptive-learning-engine': {
    slug: 'adaptive-learning-engine', industry: 'Education AI',
    timeline: '2 commits', investment: 'Concept (README)',
    accentColor: '#676767',
    title: "Adaptive Learning Engine",
    overview: "Every student learns math at a different pace, and a fixed curriculum either holds fast learners back or leaves struggling students behind. This engine tracks mastery separately for each skill and sub-skill, adjusts difficulty dynamically based on ongoing performance, and recommends the next best exercise to close gaps early.",
    challenge: `A one-size-fits-all curriculum can't serve students who are progressing at very different speeds on different sub-skills — struggling students fall further behind while advanced ones get held at a fixed pace, and teachers don't have time to hand-tailor practice for every student individually.`,
    approach: `Designed per-skill mastery modeling using a Bayesian/probabilistic approach (Bayesian Knowledge Tracing or Item Response Theory) to track mastery at the individual skill and sub-skill level, not just overall subject performance. Question difficulty adjusts in real time based on correctness, response time, and hint usage, with automatic identification of prerequisite gaps before advancing to new concepts — surfaced through progress and mastery dashboards for students and educators.`,
    results: ["Per-skill (not per-subject) mastery tracking via Bayesian/probabilistic modeling", "Real-time difficulty adjustment based on correctness, response time, and hint usage", "Automatic prerequisite-gap detection before a student advances to new material", "Designed to scale personalized learning paths without one-on-one tutoring"],
    tools: ['Python', 'Bayesian Knowledge Tracing', 'Item Response Theory'],
    quote: null,
    metrics: [{ value: 'Bayesian Mastery', label: 'Approach' }, { value: 'Real-Time', label: 'Adjustment' }, { value: 'Concept / README', label: 'Stage' }],
    heroImage: imgAdaptiveLearning,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/adaptive-learning-engine',
  },
  'ehr-clinical-nlp-automation': {
    slug: 'ehr-clinical-nlp-automation', industry: 'Healthcare AI',
    timeline: '1 commit', investment: 'Concept (README)',
    accentColor: B.primary,
    title: "Clinical NLP for Structuring Hospital Records",
    overview: "Most clinical information lives in free-text notes — diagnoses, medications, procedures, and outcomes buried in physician narratives rather than structured fields. This pipeline reads through hospital records, extracts clinically meaningful entities, de-identifies patient data, and organizes everything into structured data that can actually be queried and reported on.",
    challenge: `Years of clinically valuable data sat locked in unstructured physician notes — unsearchable and unusable for research or reporting — and any extraction pipeline had to de-identify PHI before storage or analysis to protect patient privacy by design, not as an afterthought.`,
    approach: `Designed Named Entity Recognition tuned for clinical language — diagnoses, medications, procedures, symptoms — with de-identification built into the pipeline before any structuring or storage. Extracted entities are normalized against standard clinical vocabularies (ICD, SNOMED) so multi-year, multi-format hospital records land in a single structured, analyzable dataset ready for downstream analytics and reporting.`,
    results: ["Clinical NER extracts diagnoses, medications, procedures, and lab values from free text", "De-identification built into the pipeline before any storage or downstream processing", "Entity normalization against ICD/SNOMED standardizes years of disconnected notes", "Structured output designed to feed quality reporting, research, and audit requirements directly"],
    tools: ['Python', 'spaCy / NER', 'ICD/SNOMED Normalization'],
    quote: null,
    metrics: [{ value: 'Dx / Meds / Procedures', label: 'Entities' }, { value: 'De-ID Built-In', label: 'Privacy' }, { value: 'Concept / README', label: 'Stage' }],
    heroImage: imgEhrClinicalNlp,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/ehr-clinical-nlp-automation',
  },
  'single-cell-rnaseq-automation': {
    slug: 'single-cell-rnaseq-automation', industry: 'Biomedical Data Science',
    timeline: '1 commit', investment: 'Concept (README)',
    accentColor: B.action,
    title: "Single-Cell RNA-seq Automation",
    overview: "Single-cell RNA-seq datasets are high-dimensional and noisy, making it hard to identify meaningful cell groups directly. This pipeline reduces that complexity through dimensionality reduction, automatically selects the optimal clustering configuration, and produces clear visualizations of the resulting cell states.",
    challenge: `Researchers were manually tuning dimensionality-reduction and clustering parameters by trial and error for every new scRNA-seq dataset, with no principled way to decide how many clusters actually existed in the data or to catch cell populations that a single clustering method might miss.`,
    approach: `Built parameter-optimized dimensionality reduction across PCA (variance threshold), t-SNE (perplexity), and UMAP (n_neighbors). Combined a probabilistic method (GMM) with a density-based method (DBSCAN) for clustering, with automatic model selection via the Bayesian Information Criterion (BIC) to remove guesswork around cluster count — paired with visualizations of posterior probabilities and reduced-data embeddings.`,
    results: ["Parameter-optimized PCA, t-SNE, and UMAP dimensionality reduction", "Automatic cluster-count selection via BIC removes manual trial-and-error tuning", "GMM + DBSCAN combination catches cell populations a single method could miss", "Reusable across any new scRNA-seq dataset without rebuilding the pipeline"],
    tools: ['Python', 'PCA', 'UMAP', 'GMM', 'DBSCAN'],
    quote: null,
    metrics: [{ value: 'PCA / t-SNE / UMAP', label: 'Reduction' }, { value: 'GMM + DBSCAN', label: 'Clustering' }, { value: 'BIC-Optimized', label: 'Selection' }],
    heroImage: imgSingleCellRnaseq,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/single-cell-rnaseq-automation',
  },
  'real-time-fraud-detection': {
    slug: 'real-time-fraud-detection', industry: 'Fintech AI',
    timeline: '1 commit', investment: 'Concept (README)',
    accentColor: B.secondary,
    title: "Real-Time Fraud Detection System",
    overview: "Fraud has to be caught before a transaction clears — reviewing it a day later is already too late. This system is designed to score every incoming transaction in real time, combining a trained classifier with anomaly detection to catch both known fraud patterns and novel ones a rules-only system would miss.",
    challenge: `A single rule-based fraud system misses evolving fraud patterns, while manual review can't scale as transaction volume grows — and any real-time system needs to balance catching fraud with not wrongly declining legitimate customers, since false blocks cost customer trust too.`,
    approach: `Designed real-time transaction scoring combining a supervised fraud classifier with unsupervised anomaly detection, feature-engineered on transaction details, customer behavior, device/location, and velocity checks. A weighted risk-score fusion produces a single 0–100 score per transaction, feeding a tiered decision system — auto-block, manual review, or auto-approve — with a feedback loop where analyst decisions retrain and improve the models over time.`,
    results: ["Combined supervised + unsupervised scoring catches both known and novel fraud patterns", "Weighted fusion produces a single 0–100 risk score per transaction", "Tiered decisioning (auto-block / review / auto-approve) prioritizes investigator time", "Feedback loop designed to retrain models continuously as fraud tactics evolve"],
    tools: ['Python', 'Supervised + Unsupervised ML', 'Real-Time Scoring'],
    quote: null,
    metrics: [{ value: '0–100 Scale', label: 'Risk Score' }, { value: '3-Tier', label: 'Decisioning' }, { value: 'Concept / README', label: 'Stage' }],
    heroImage: imgRealTimeFraud,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/real-time-fraud-detection',
  },
  'insurance-policy-document-classification': {
    slug: 'insurance-policy-document-classification', industry: 'Insurance AI',
    timeline: '2 commits', investment: 'Mobile App Build',
    accentColor: '#666666',
    title: "Insurance Policy Document Classification System",
    overview: "Processing incoming insurance documents manually is slow and error-prone. This platform automates document ingestion, classification, and key data extraction for insurance policies, claims, and endorsements — with an AI model trained directly on insurance policy layouts for reliable categorization across digital and scanned files.",
    challenge: `Staff were spending hours manually sorting and categorizing incoming policy documents, and low-resolution scans or complex policy layouts routinely broke traditional document-processing software — with no central visibility into verification status or backlog across the whole document queue.`,
    approach: `Trained a domain-specific classification model directly on insurance policy document layouts and clause structures, so it reliably distinguishes Auto, Health, Life, Property, and Endorsement documents that generic OCR tools miss. Combined OCR with visual-structure analysis to handle scanned and multi-page PDFs, added a verification/review queue for human-in-the-loop handling of low-confidence documents, and shipped it all as a React Native/Expo mobile app with secure role-based access and a real-time analytics dashboard.`,
    results: ["Domain-trained model distinguishes policy types generic OCR tools routinely miss", "OCR + visual-structure analysis handles scanned and multi-page policy PDFs", "Human-in-the-loop review queue routes low-confidence documents automatically", "Shipped as a full React Native/Expo mobile app with role-based secure access"],
    tools: ['React Native', 'Expo', 'OCR', 'Document AI'],
    quote: null,
    metrics: [{ value: 'React Native / Expo', label: 'Platform' }, { value: 'Scanned + Multi-Page', label: 'OCR' }, { value: 'Human-in-the-Loop', label: 'Review' }],
    heroImage: imgInsurancePolicyClassification,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Insurance-Policy-Document-Classification-System',
  },
  'regulatory-form-auto-completion': {
    slug: 'regulatory-form-auto-completion', industry: 'Automation',
    timeline: '5 commits', investment: 'Full-Stack Build',
    accentColor: B.action,
    title: "Regulatory Form Auto-Completion (RPA)",
    overview: "Filling the same regulatory or government form repeatedly for dozens of different clients is tedious and error-prone by hand. This system stores each client's data once, maps it to a target form's fields, and lets a real-browser Playwright bot auto-fill and submit the form — pausing only when it hits a CAPTCHA or a genuinely missing field, for a human to resolve.",
    challenge: `Regulatory forms varied in layout across clients and government portals, and pure automation breaks the moment it hits a CAPTCHA or a field the system doesn't have data for — the system needed to fail gracefully into a human review step rather than failing silently, while still logging every run for accountability.`,
    approach: `Built a Python/Playwright bot engine that opens a real browser, fetches client data from Supabase, and auto-fills every mapped field on the target form. An AI field mapper (Groq) intelligently maps client data to unfamiliar form fields. Missing required data and CAPTCHAs are pushed to a Human-in-the-Loop review queue in a React dashboard — the bot keeps the browser session open and resumes automatically the moment a human resolves the flagged item — with every run logged with a screenshot via Supabase Realtime.`,
    results: ["Bot only ever pauses for the two things software genuinely can't do — CAPTCHAs and missing data", "AI field mapper (Groq) intelligently maps client data to unfamiliar form fields", "Every run logged with a screenshot, streamed live to the dashboard via Supabase Realtime", "PDF form filling supported alongside web forms via PyPDF2 and ReportLab"],
    tools: ['Playwright', 'FastAPI', 'React + Vite', 'Groq AI', 'Supabase'],
    quote: null,
    metrics: [{ value: 'Full Field-Fill', label: 'Automation' }, { value: 'CAPTCHA + Missing Data', label: 'HITL' }, { value: 'Playwright + Groq', label: 'Stack' }],
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Regulatory-Form-Auto-Completion',
  },
  'healthcare-fraud-detection-billing': {
    slug: 'healthcare-fraud-detection-billing', industry: 'Healthcare AI',
    timeline: '16 commits', investment: 'ML Notebook Pipeline',
    accentColor: B.secondary,
    title: "Healthcare Fraud Detection System (Medicare Billing)",
    overview: "Medicare fraud affects a significant share of U.S. healthcare spending every year, and manual review can't scale across millions of billing records. This system processes raw CMS Medicare billing data and outputs a prioritized, investigator-ready list of providers ranked by fraud risk, each flagged with the specific anomalies that triggered the alert.",
    challenge: `Investigators were facing millions of raw Medicare billing rows with no way to prioritize which providers actually warranted a closer look, and no single system that combined statistical peer benchmarking, unsupervised anomaly detection, upcoding pattern detection, and federal exclusion-list matching into one ranked, defensible shortlist.`,
    approach: `Engineered five provider-level features (payment per beneficiary, services per beneficiary, payment per service, charge-to-payment ratio, unique HCPCS count) and benchmarked every provider against its specialty-state peer group (1,200+ groups) using Z-score analysis. Layered in an Isolation Forest for unsupervised anomaly detection, a rule-based E&M upcoding score across 90+ provider types, and cross-referenced active OIG LEIE federal exclusion lists by NPI. Combined everything into a single composite Fraud Risk Score with Critical / High / Medium / Standard investigation-priority labels.`,
    results: ["44,528 providers analyzed on the 2023 CMS dataset; 3,842 flagged high-risk", "1,247 Critical-priority providers identified — High Risk score plus an active LEIE match", "2,914 E&M upcoding flags issued across 90+ provider types", "Duplicate-claim Random Forest classifier reached ~96% accuracy as a supporting signal"],
    tools: ['Python', 'Isolation Forest', 'Random Forest', 'Z-score Analysis', 'OIG LEIE'],
    quote: null,
    metrics: [{ value: '44,528', label: 'Providers Analyzed' }, { value: '3,842', label: 'High-Risk Flagged' }, { value: '~96%', label: 'Classifier Accuracy' }],
    heroImage: imgHealthcareFraudBilling,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Fraudulent-Outlier-Billing-Detection-System',
  },
};

const CASE_STUDIES_BY_SLUG = {
  ...ALL_CASE_STUDIES,
  ...Object.fromEntries(EXTRA_CASE_STUDIES.map((e) => [e.slug, { ...e, heroImage: e.image }])),
};

// ─── Page layout styles ───────────────────────────────────────────────────────
const CSS = `
.cs-page{background:#f4f4f4;color:#111;font-family:var(--font-main);overflow-x:clip}
.cs-hero{position:relative;padding:clamp(96px,11vw,150px) 0 clamp(36px,5vw,64px);background:linear-gradient(180deg,#ececec 0%,#f4f4f4 100%);border-bottom:1px solid rgba(0,0,0,.08)}
.cs-crumbs{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:clamp(22px,3.5vw,38px);font-size:var(--fs-small);font-weight:600;color:#6b6b6b}
.cs-crumbs a{color:#6b6b6b;text-decoration:none;transition:color .2s}
.cs-crumbs a:hover{color:#000}
.cs-crumbs b{color:#111;font-weight:700}
.cs-kicker{display:inline-flex;align-items:center;gap:10px;font-size:var(--fs-label);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#555;margin-bottom:16px}
.cs-kicker i{width:4px;height:4px;border-radius:50%;background:#999}
.cs-hero h1{margin:0 0 clamp(14px,2vw,22px);max-width:980px;font-size:var(--fs-section-h2);font-weight:800;line-height:1.12;letter-spacing:-.025em;color:#0b0b0b;text-align:left}
.cs-sub{margin:0 0 clamp(18px,2.4vw,26px);max-width:820px;font-size:var(--fs-card-title);line-height:1.65;color:#444;text-align:left}
.cs-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:clamp(20px,2.6vw,30px)}
.cs-chip{padding:6px 13px;border-radius:999px;border:1px solid rgba(0,0,0,.16);background:rgba(255,255,255,.7);font-size:var(--fs-small);font-weight:600;color:#2a2a2a}
.cs-actions{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:clamp(26px,3.6vw,44px)}
.cs-btn{display:inline-flex;align-items:center;gap:9px;padding:13px 22px;border-radius:12px;font-size:var(--fs-small);font-weight:700;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:transform .2s,background .2s,color .2s,border-color .2s}
.cs-btn--solid{background:#0b0b0b;color:#fff;border:1px solid #0b0b0b}
.cs-btn--solid:hover{background:#2a2a2a;transform:translateY(-2px)}
.cs-btn--ghost{background:transparent;color:#0b0b0b;border:1px solid rgba(0,0,0,.35)}
.cs-btn--ghost:hover{background:#0b0b0b;color:#fff;transform:translateY(-2px)}
.cs-strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));border:1px solid rgba(0,0,0,.12);border-radius:18px;background:#fff;overflow:hidden}
.cs-stat{padding:clamp(16px,2vw,24px) clamp(18px,2.2vw,28px);border-right:1px solid rgba(0,0,0,.1)}
.cs-stat:last-child{border-right:0}
.cs-stat b{display:block;font-size:var(--fs-card-title);font-weight:800;letter-spacing:-.01em;color:#0b0b0b;line-height:1.2}
.cs-stat span{display:block;margin-top:6px;font-size:var(--fs-label);font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#777}
.cs-wrap{display:grid;grid-template-columns:210px minmax(0,1fr) minmax(300px,400px);gap:clamp(32px,5vw,72px);padding:clamp(36px,5vw,72px) 0 clamp(48px,6vw,96px);align-items:start}
.cs-toc{position:sticky;top:104px}
.cs-toc p{margin:0 0 12px;font-size:var(--fs-label);font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#777}
.cs-toc a{display:block;padding:9px 0 9px 16px;border-left:2px solid rgba(0,0,0,.12);font-size:var(--fs-small);font-weight:600;color:#666;text-decoration:none;transition:color .2s,border-color .2s}
.cs-toc a:hover{color:#000}
.cs-toc a.is-on{color:#000;border-left-color:#000}
.cs-main{min-width:0}
.cs-side{position:sticky;top:104px;display:grid;gap:18px}
.cs-side .cs-fig{margin:0}
.cs-side .cs-glance{margin:0;grid-template-columns:1fr}
.cs-side .cs-glance div:last-child{border-bottom:0}
.cs-fig--inline{display:none}
.cs-fig{margin:0 0 clamp(32px,4.5vw,56px);border-radius:20px;overflow:hidden;border:1px solid rgba(0,0,0,.1);background:#0b0b0b;line-height:0}
.cs-fig img{width:100%;height:auto;display:block}
.cs-fig--side img{aspect-ratio:4/3;object-fit:cover}
.cs-sec{scroll-margin-top:104px;margin-bottom:clamp(36px,5vw,64px)}
.cs-sec h2{margin:0 0 clamp(14px,1.8vw,20px);font-size:var(--fs-h3);font-weight:800;letter-spacing:-.02em;color:#0b0b0b;text-align:left}
.cs-sec p{margin:0 0 14px;font-size:var(--fs-card-title);line-height:1.8;color:#2f2f2f;text-align:left}
.cs-glance{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0;margin:clamp(18px,2.4vw,28px) 0 0;border:1px solid rgba(0,0,0,.12);border-radius:16px;background:#fff;overflow:hidden}
.cs-glance div{padding:16px 20px;border-bottom:1px solid rgba(0,0,0,.08)}
.cs-glance dt{font-size:var(--fs-label);font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#777;margin:0 0 5px}
.cs-glance dd{margin:0;font-size:var(--fs-card-body);font-weight:600;color:#111}
.cs-glance a{color:#111;text-decoration:underline;text-underline-offset:3px}
.cs-list{list-style:none;margin:0;padding:0;display:grid;gap:14px}
.cs-list li{position:relative;padding:16px 18px 16px 52px;border-radius:14px;background:#fff;border:1px solid rgba(0,0,0,.1);font-size:var(--fs-card-body);line-height:1.7;color:#2f2f2f;text-align:left}
.cs-list li b{color:#0b0b0b}
.cs-list li::before{content:"";position:absolute;left:19px;top:22px;width:8px;height:8px;border-radius:50%;background:#0b0b0b}
.cs-steps{counter-reset:step;list-style:none;margin:0;padding:0;display:grid;gap:14px}
.cs-steps li{counter-increment:step;position:relative;padding:16px 18px 16px 62px;border-radius:14px;background:#fff;border:1px solid rgba(0,0,0,.1);font-size:var(--fs-card-body);line-height:1.7;color:#2f2f2f;text-align:left}
.cs-steps li b{color:#0b0b0b}
.cs-steps li::before{content:counter(step);position:absolute;left:16px;top:14px;width:30px;height:30px;border-radius:50%;background:#0b0b0b;color:#fff;font-size:var(--fs-small);font-weight:700;display:flex;align-items:center;justify-content:center}
.cs-checks{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.cs-checks li{display:flex;gap:14px;align-items:flex-start;padding:15px 18px;border-radius:14px;background:#fff;border:1px solid rgba(0,0,0,.1);font-size:var(--fs-card-body);line-height:1.65;color:#2f2f2f;text-align:left}
.cs-checks svg{flex:none;margin-top:3px;color:#0b0b0b}
.cs-stack{display:flex;flex-wrap:wrap;gap:10px}
.cs-stack span{padding:9px 16px;border-radius:10px;background:#0b0b0b;color:#fff;font-size:var(--fs-small);font-weight:600;letter-spacing:.02em}
.cs-related{padding:clamp(48px,6vw,88px) 0;background:#0a0a0a;color:#fff}
.cs-related-head{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:16px;margin-bottom:clamp(24px,3.4vw,40px)}
.cs-related-head h2{margin:0;font-size:var(--fs-section-h2);font-weight:800;letter-spacing:-.02em;color:#fff;text-align:left}
.cs-related-head a{color:rgba(255,255,255,.75);font-size:var(--fs-small);font-weight:700;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;display:inline-flex;gap:8px;align-items:center;transition:color .2s}
.cs-related-head a:hover{color:#fff}
.cs-rgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(16px,2vw,26px)}
.cs-rcard{display:flex;flex-direction:column;border-radius:18px;overflow:hidden;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);text-decoration:none;color:#fff;transition:transform .3s,border-color .3s,background .3s}
.cs-rcard:hover{transform:translateY(-5px);border-color:rgba(255,255,255,.34);background:rgba(255,255,255,.07)}
.cs-rcard img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;background:#161616}
.cs-rbody{padding:clamp(16px,2vw,22px);display:flex;flex-direction:column;gap:10px;flex:1}
.cs-rbody small{font-size:var(--fs-label);font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55)}
.cs-rbody h3{margin:0;font-size:var(--fs-card-title);font-weight:700;line-height:1.3;color:#fff;text-align:left}
.cs-rbody em{margin-top:auto;font-style:normal;font-size:var(--fs-small);font-weight:700;color:rgba(255,255,255,.85);display:inline-flex;gap:8px;align-items:center}
.cs-cta{padding:clamp(48px,6vw,88px) 0;background:#f4f4f4}
.cs-cta-box{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;padding:clamp(26px,4vw,52px);border-radius:24px;background:#0b0b0b;color:#fff}
.cs-cta-box h2{margin:0 0 10px;font-size:var(--fs-h3);font-weight:800;color:#fff;text-align:left}
.cs-cta-box p{margin:0;max-width:640px;font-size:var(--fs-card-body);line-height:1.7;color:rgba(255,255,255,.72);text-align:left}
.cs-cta-box .cs-btn--solid{background:#fff;color:#000;border-color:#fff}
.cs-cta-box .cs-btn--solid:hover{background:#d9d9d9}
@media (max-width:1180px){
  .cs-wrap{grid-template-columns:210px minmax(0,1fr)}
  .cs-side{position:static;grid-column:1/-1}
  .cs-fig--side{display:none}
  .cs-side .cs-glance{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
  .cs-fig--inline{display:block}
}
@media (max-width:980px){
  .cs-wrap{grid-template-columns:minmax(0,1fr)}
  .cs-toc{position:static;display:flex;flex-wrap:wrap;gap:8px;align-items:center}
  .cs-toc p{width:100%;margin-bottom:2px}
  .cs-toc a{padding:8px 14px;border:1px solid rgba(0,0,0,.16);border-radius:999px;background:#fff}
  .cs-toc a.is-on{border-color:#000}
}
@media (max-width:560px){ .cs-stat{border-right:0;border-bottom:1px solid rgba(0,0,0,.1)} .cs-stat:last-child{border-bottom:0} }
`;

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'solution', label: 'The Solution' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'stack', label: 'Tech stack' },
];

function Points({ items, className }) {
  return (
    <ul className={className}>
      {items.map((t, i) => {
        const { lead, rest } = leadIn(t);
        return <li key={i}>{lead ? <><b>{lead}:</b> {rest}</> : t}</li>;
      })}
    </ul>
  );
}

function RelatedCard({ item }) {
  return (
    <Link to={`/case-studies/${item.slug}`} className="cs-rcard">
      <img src={item.image} alt="" loading="lazy" decoding="async" />
      <div className="cs-rbody">
        <small>{item.serviceLabel} · {item.industryLabel}</small>
        <h3>{item.title}</h3>
        <em>Read the case study <ArrowRight size={15} /></em>
      </div>
    </Link>
  );
}

export default function IndividualCaseStudy() {
  const { slug } = useParams();
  return <CaseStudyView key={slug} slug={slug} />;   // keyed: state resets when you move to another case study
}

function CaseStudyView({ slug }) {
  const cs = CASE_STUDIES_BY_SLUG[slug];
  const meta = caseStudies.find((c) => c.slug === slug);
  const [active, setActive] = useState('overview');

  useSeo(cs ? { title: `${cs.title} | Case Study | ${SITE_NAME}`, description: `${cs.title}: ${firstSentence(cs.overview, 150)}`, path: `/case-studies/${slug}` } : null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // highlight the section currently in view in the "On this page" list
  useEffect(() => {
    if (!cs) return undefined;
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [cs, slug]);

  const related = useMemo(() => {
    if (!meta) return [];
    const others = caseStudies.filter((c) => c.slug !== slug);
    const score = (c) => (c.service === meta.service ? 2 : 0) + (c.industry === meta.industry ? 1 : 0);
    return [...others].sort((a, b) => score(b) - score(a)).slice(0, 3);
  }, [meta, slug]);

  if (!cs || !meta) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: B.bgLight, fontFamily: 'var(--font-main)' }}>
        <h2 style={{ color: B.textMain, marginBottom: 16 }}>Case study not found.</h2>
        <Link to="/case-studies" style={{ color: B.action, fontWeight: 700, fontSize: 'var(--fs-small)' }}>← Back to Case Studies</Link>
      </div>
    );
  }

  const { lead, bullets } = challengePoints(cs.challenge);
  const steps = solutionSteps(cs.approach);
  const image = meta.image || cs.heroImage;

  return (
    <div className="cs-page">
      <style>{CSS}</style>

      {/* ═══ HERO ═══ */}
      <section className="cs-hero">
        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
          <nav className="cs-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><ChevronRight size={13} />
            <Link to="/case-studies">Case Studies</Link><ChevronRight size={13} />
            <b>{meta.industryLabel}</b>
          </nav>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <div className="cs-kicker">Case study <i /> {meta.industryLabel} <i /> {meta.serviceLabel}</div>
            <h1>{cs.title}</h1>
            <p className="cs-sub">{firstSentence(cs.overview)}</p>
            <div className="cs-actions">
              {meta.githubUrl && (
                <a className="cs-btn cs-btn--solid" href={meta.githubUrl} target="_blank" rel="noopener noreferrer"><SquareCode size={16} /> View the code</a>
              )}
              {meta.liveDemo && (
                <a className="cs-btn cs-btn--ghost" href={meta.liveDemo} target="_blank" rel="noopener noreferrer">Open live demo <ArrowUpRight size={16} /></a>
              )}
            </div>
            {cs.metrics?.length > 0 && (
              <div className="cs-strip">
                {cs.metrics.map((m) => <div className="cs-stat" key={m.label}><b>{m.value}</b><span>{m.label}</span></div>)}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══ BODY ═══ */}
      <div style={PX}>
        <div className="cs-wrap">
          <aside className="cs-toc" aria-label="On this page">
            <p>On this page</p>
            {SECTIONS.map((s) => <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-on' : ''}>{s.label}</a>)}
          </aside>

          <main className="cs-main">
            {image && <figure className="cs-fig cs-fig--inline"><img src={image} alt={`${cs.title} project visual`} loading="eager" decoding="async" /></figure>}

            <section className="cs-sec" id="overview">
              <h2>Overview</h2>
              <p>{cs.overview}</p>
            </section>

            <section className="cs-sec" id="challenge">
              <h2>The Challenge</h2>
              <p>{lead}</p>
              {bullets.length > 0 && <Points items={bullets} className="cs-list" />}
            </section>

            <section className="cs-sec" id="solution">
              <h2>The Solution</h2>
              <Points items={steps} className="cs-steps" />
            </section>

            <section className="cs-sec" id="outcomes">
              <h2>Outcomes</h2>
              <ul className="cs-checks">
                {cs.results.map((r, i) => <li key={i}><CheckCircle size={20} /><span>{r}</span></li>)}
              </ul>
            </section>

            <section className="cs-sec" id="stack">
              <h2>Tech stack</h2>
              <div className="cs-stack">{cs.tools.map((t) => <span key={t}>{t}</span>)}</div>
            </section>
          </main>

          <aside className="cs-side" aria-label="Project visual and details">
            {image && <figure className="cs-fig cs-fig--side"><img src={image} alt={`${cs.title} project visual`} loading="eager" decoding="async" /></figure>}
              <dl className="cs-glance">
                <div><dt>Industry</dt><dd>{meta.industryLabel}</dd></div>
                <div><dt>Service</dt><dd>{meta.serviceLabel}</dd></div>
                <div><dt>Project type</dt><dd>{cs.investment}</dd></div>
                <div><dt>Source</dt><dd>{meta.githubUrl ? <a href={meta.githubUrl} target="_blank" rel="noopener noreferrer">Public GitHub repository</a> : 'Portfolio project'}</dd></div>
                {meta.liveDemo && <div><dt>Live demo</dt><dd><a href={meta.liveDemo} target="_blank" rel="noopener noreferrer">Open the demo</a></dd></div>}
              </dl>
          </aside>
        </div>
      </div>

      {/* ═══ RELATED ═══ */}
      <section className="cs-related">
        <div style={PX}>
          <div className="cs-related-head">
            <h2>Explore other case studies</h2>
            <Link to="/case-studies">Read all case studies <ArrowRight size={15} /></Link>
          </div>
          <div className="cs-rgrid">{related.map((r) => <RelatedCard key={r.slug} item={r} />)}</div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cs-cta">
        <div style={PX}>
          <div className="cs-cta-box">
            <div>
              <h2>Have a similar challenge?</h2>
              <p>Book a free call. We'll tell you what's possible, what it would take, and whether we're the right fit.</p>
            </div>
            <Link to="/book-discovery" className="cs-btn cs-btn--solid">Book a discovery call <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </div>
  );
}
