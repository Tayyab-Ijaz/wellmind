/**
 * IndividualCaseStudy.jsx — WellMind Data Solutions
 * Full case study page — routed by /case-studies/:slug
 * Redesigned: Removed hero image, added Premium "Professional Bridge" dark section,
 * richer content presentation, glassy cards, and strong nav section.
 */

import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { B, SECTION_PAD, PX, NARROW, DataParticles, SectionBadge, CircuitBg } from '../theme';
import imgArPrioritization from '../assets/case-studies/ar-prioritization.png';
import imgClaimDenial from '../assets/case-studies/claim-denial.png';
import imgCommandCenter from '../assets/case-studies/command-center.png';
import imgSupplyGuard from '../assets/case-studies/supplyguard.png';
import imgInsuranceRiskScoring from '../assets/case-studies/insurance-risk-scoring.png';
import imgTelecomChurn from '../assets/case-studies/telecom-churn.png';
import imgRetailDemand from '../assets/case-studies/retail-demand-forecasting.png';
import imgRcmPriorAuth from '../assets/case-studies/rcm-prior-auth.png';
import imgAccountsPayable from '../assets/case-studies/accounts-payable.png';
import imgEmailOrderIntake from '../assets/case-studies/email-order-intake.png';
import imgSatelliteCropYield from '../assets/case-studies/satellite-crop-yield.png';
import imgAdaptiveLearning from '../assets/case-studies/adaptive-learning.png';
import imgEhrClinicalNlp from '../assets/case-studies/ehr-clinical-nlp.png';
import imgSingleCellRnaseq from '../assets/case-studies/single-cell-rnaseq.png';
import imgRealTimeFraud from '../assets/case-studies/real-time-fraud-detection.png';
import imgInsurancePolicyClassification from '../assets/case-studies/insurance-policy-classification.png';
import imgHealthcareFraudBilling from '../assets/case-studies/healthcare-fraud-billing.png';
import {
  ArrowRight, ArrowLeft, Dna, TrendingUp, Brain, Leaf, Clock,
  Zap, CheckCircle, BookOpen, BarChart3, ChevronRight, Star,
  Code2, Database, GitBranch, Globe, Target, Lightbulb,
  FlaskConical, Cpu, Shield, Award, Lock, Globe2, Rocket,
  Phone, GraduationCap, UtensilsCrossed, Mail, SquareCode,
} from 'lucide-react';


// ─── Industry config ──────────────────────────────────────────────────────────
const INDUSTRY_COLORS = {
  'Bioinformatics': { bg: B.actionLight,   border: B.actionBorder,          text: B.action,    icon: <Dna size={12}/> },
  'Fintech AI':     { bg: B.secondaryLight, border: 'rgba(147, 33, 63,0.30)', text: B.secondary, icon: <TrendingUp size={12}/> },
  'Healthcare AI':  { bg: B.primaryLight,   border: B.primaryBorder,        text: B.primary,   icon: <Brain size={12}/> },
  'Agriculture AI': { bg: B.accentLight,    border: B.accentBorder,         text: B.accent,    icon: <Leaf size={12}/> },
  'Data Science':   { bg: B.primaryLight,   border: B.primaryBorder,        text: B.primary,   icon: <BarChart3 size={12}/> },
  'Automation':     { bg: B.accentLight,    border: B.accentBorder,         text: B.accent,    icon: <Zap size={12}/> },
  'Hospitality Tech': { bg: 'rgba(245,158,11,0.10)', border: 'rgba(245,158,11,0.25)', text: B.accent, icon: <UtensilsCrossed size={12}/> },
  'Manufacturing AI': { bg: 'rgba(42,122,181,0.10)', border: 'rgba(42,122,181,0.30)', text: '#2A7AB5', icon: <Cpu size={12}/> },
  'Insurance AI':     { bg: 'rgba(123,82,181,0.10)', border: 'rgba(123,82,181,0.30)', text: '#7B52B5', icon: <Shield size={12}/> },
  'Telecom AI':       { bg: 'rgba(192,88,74,0.10)',  border: 'rgba(192,88,74,0.30)',  text: '#C0584A', icon: <Phone size={12}/> },
  'Retail AI':        { bg: B.actionLight,  border: B.actionBorder,          text: B.action,   icon: <TrendingUp size={12}/> },
  'Education AI':     { bg: 'rgba(123,82,181,0.10)', border: 'rgba(123,82,181,0.30)', text: '#7B52B5', icon: <GraduationCap size={12}/> },
};

// ─── Case Studies Data ────────────────────────────────────────────────────────
const ALL_CASE_STUDIES = {
  'icd10-cpt-coding-engine': {
    slug: 'icd10-cpt-coding-engine', industry: 'Healthcare AI',
    timeline: '1 commit', investment: 'Concept (README)',
    accentColor: '#1A8A6E',
    title: "ICD-10 & CPT Coding Recommendation Engine",
    overview: "Medical coders manually match clinical notes to ICD-10 and CPT codes — a slow process where a missed or wrong code can mean a denied claim. This engine automates that matching: it cleans and structures the note, retrieves candidate codes through keyword, embedding, and semantic-similarity search, ranks them against clinical guidelines and code rules, then returns top recommendations with a confidence score and justification ready for coder review.",
    challenge: `Manually matching free-text clinical notes to the right ICD-10 diagnosis and CPT procedure codes is slow, inconsistent between coders, and a single missed or mismatched code can trigger a denied claim. Generic keyword search misses clinical context and synonyms, while a fully black-box model would be hard for coders and auditors to trust or verify.`,
    approach: `Built a text preprocessing pipeline (cleaning, tokenization, lemmatization, key-term/entity extraction) feeding a hybrid candidate-retrieval layer that combines keyword matching, embeddings, and semantic similarity across both ICD-10 and CPT code sets. Candidates are then re-ranked by an ML/NLP scoring layer that factors in clinical guidelines, exclusions, and code rules, and every final recommendation ships with a confidence score, code description, and rationale so coders can verify it at a glance.`,
    results: ["Hybrid retrieval (keyword + embeddings + semantic similarity) built across both ICD-10 and CPT code sets", "Ranking layer incorporates clinical guidelines and code-exclusion rules, not just keyword overlap", "Every recommendation returns a confidence score and rationale, ready for coder review", "Export path designed for direct integration into existing EHR and billing systems"],
    tools: ['Python', 'NLP', 'Embeddings', 'Semantic Search', 'spaCy'],
    quote: null,
    metrics: [{ value: 'NLP + Embeddings', label: 'Approach' }, { value: 'ICD-10 + CPT', label: 'Codes' }, { value: 'Concept / README', label: 'Stage' }],
    heroIcon: <FlaskConical size={52} strokeWidth={1.2}/>,
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/ICD-10-CPT-coding-recommendation-engine',
    nextSlug: 'ar-prioritization-underpayment-recovery', prevSlug: 'healthcare-fraud-detection-billing',
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
    heroIcon: <TrendingUp size={52} strokeWidth={1.2}/>,
    heroImage: imgArPrioritization,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/AR-prioritization-underpayment-recovery-engine',
    nextSlug: 'conversational-analytics-platform', prevSlug: 'icd10-cpt-coding-engine',
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
    heroIcon: <Database size={52} strokeWidth={1.2}/>,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Conversational-Analytics-Platform',
    nextSlug: 'claim-denial-prediction', prevSlug: 'ar-prioritization-underpayment-recovery',
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
    heroIcon: <Target size={52} strokeWidth={1.2}/>,
    heroImage: imgClaimDenial,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Claim-denial-prediction-root-cause-classifier',
    nextSlug: 'restaurant-command-center', prevSlug: 'conversational-analytics-platform',
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
    heroIcon: <Rocket size={52} strokeWidth={1.2}/>,
    heroImage: imgCommandCenter,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/restaurant-management-system',
    liveDemo: 'https://nexus-rms.vercel.app',
    nextSlug: 'supplyguard-disruption-alerts', prevSlug: 'claim-denial-prediction',
  },
  'supplyguard-disruption-alerts': {
    slug: 'supplyguard-disruption-alerts', industry: 'Manufacturing AI',
    timeline: '8 commits', investment: 'Full-Stack Build',
    accentColor: '#2A7AB5',
    title: "SupplyGuard — Supply Chain Disruption Alert System",
    overview: "SupplyGuard helps supply chain managers spot potential supplier disruptions before they hit production. It evaluates operational metrics (like KG Score and Emergency Score) alongside environmental risk signals — weather, economic, geopolitical, technical infrastructure — to generate a continuous disruption risk score for every supplier.",
    challenge: `Procurement teams typically found out about supplier disruptions only after they had already affected production — after the damage was done. There was no unified way to combine internal operational stress signals with external environmental risk feeds into a single, actionable early-warning score.`,
    approach: `Engineered operational risk features (KG Score, Emergency Score) alongside categorical environmental signals — weather, economic, geopolitical, and technical infrastructure risk. Trained a Logistic Regression classifier to calculate disruption probability, converted it into a continuous 0–100 risk score, and classified suppliers into Low, Medium, and High risk tiers. Delivered through a Flask backend with an HTML dashboard for supplier risk monitoring and a single-supplier risk checker.`,
    results: ["Continuous 0–100 disruption risk score generated per supplier", "Combines internal operational metrics with external weather, economic, and geopolitical risk signals", "Low / Medium / High risk classification supports proactive contingency sourcing", "Deployed with a live risk-checker dashboard and vercel.json for deploy-ready hosting"],
    tools: ['Python', 'Logistic Regression', 'Flask', 'HTML Dashboard'],
    quote: null,
    metrics: [{ value: '0–100 Scale', label: 'Risk Score' }, { value: 'Logistic Regression', label: 'Model' }, { value: 'Low / Med / High', label: 'Risk Tiers' }],
    heroIcon: <Globe size={52} strokeWidth={1.2}/>,
    heroImage: imgSupplyGuard,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Supply-Chain-Disruption-Alerts',
    nextSlug: 'insurance-risk-scoring', prevSlug: 'restaurant-command-center',
  },
  'insurance-risk-scoring': {
    slug: 'insurance-risk-scoring', industry: 'Insurance AI',
    timeline: '3 commits', investment: 'Full-Stack Build',
    accentColor: '#7B52B5',
    title: "Insurance Risk Scoring",
    overview: "Insurance Risk Scoring assesses customer risk from financial, demographic, health, lifestyle, vehicle, policy, and behavioral information. The system cleans and prepares customer data, engineers and selects features, trains risk models, and serves predictions through an interactive Streamlit application.",
    challenge: `Underwriting teams needed a consistent, explainable way to convert a wide, messy set of customer attributes — income, credit score, claims history, driving record, health indicators — into a single, trustworthy risk classification, instead of relying on inconsistent manual judgment calls.`,
    approach: `Cleaned and prepared customer data, then ran exploratory analysis and feature engineering/selection to identify the strongest risk predictors. Trained a Gradient Boosting Classifier on 45 engineered features spanning income, credit score, claims history, vehicle and policy data, and behavioral signals. Deployed the trained model (\`gradient_boosting_best.pkl\`) through a Streamlit app that returns a percentage-based risk probability, a Low/Medium/High classification, and top feature-importance visualizations for every customer.`,
    results: ["Gradient Boosting Classifier trained on 45 customer-level features", "Converts model output into a percentage-based risk probability with a Low/Medium/High category", "Interactive Streamlit app for real-time single-customer risk prediction", "Feature-importance visualization shows underwriters exactly what drove each score"],
    tools: ['Python', 'Gradient Boosting', 'Streamlit', 'scikit-learn'],
    quote: null,
    metrics: [{ value: '45', label: 'Model Features' }, { value: 'Gradient Boosting', label: 'Model' }, { value: '3', label: 'Risk Tiers' }],
    heroIcon: <Shield size={52} strokeWidth={1.2}/>,
    heroImage: imgInsuranceRiskScoring,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Insurance-Risk-Scoring',
    nextSlug: 'telecom-churn-prediction', prevSlug: 'supplyguard-disruption-alerts',
  },
  'telecom-churn-prediction': {
    slug: 'telecom-churn-prediction', industry: 'Telecom AI',
    timeline: '13 commits', investment: 'ML Pipeline Build',
    accentColor: '#C0584A',
    title: "Telecom Customer Churn Prediction",
    overview: "Telecom Customer Churn Prediction identifies customers likely to stop using services, defining churn as zero recharge and zero data usage in month nine. The pipeline handles data cleaning, feature engineering, class balancing, multi-model comparison, and SHAP-based explainability to turn predictions into actionable retention insights.",
    challenge: `With a 14.5% churn rate buried inside 150 raw behavioral features, the team needed a model that was both accurate and explainable enough for a retention team to act on specific drivers — not just a black-box probability — while avoiding data leakage from the very month-nine behavior that defines churn.`,
    approach: `Removed month-nine features to prevent leakage, then engineered activity, RFM, trend, frequency, and efficiency-based features. Reduced the feature space from 150 to 25 using VIF, correlation filtering, and Random Forest importance, and applied SMOTE to address the 14.5% churn class imbalance. Compared five models — Random Forest, XGBoost, LightGBM, CatBoost, and Logistic Regression — via 5-fold cross-validation optimized for F1, then used SHAP to identify and explain the top churn drivers per customer.`,
    results: ["Random Forest best model: 86.42% accuracy, 84.23% precision, 0.91 AUC-ROC", "Feature space reduced from 150 to 25 via VIF, correlation filtering, and RF importance", "Targeting the top 20% highest-risk customers captures over 65% of actual churners", "SHAP analysis ranks Total Activity, Activity Trend, and Month-8 Recharge as top churn drivers"],
    tools: ['Random Forest', 'XGBoost', 'LightGBM', 'CatBoost', 'SHAP', 'SMOTE'],
    quote: null,
    metrics: [{ value: '86.4%', label: 'Accuracy' }, { value: '0.91', label: 'AUC-ROC' }, { value: '65%+ Churners', label: 'Top 20% Capture' }],
    heroIcon: <TrendingUp size={52} strokeWidth={1.2}/>,
    heroImage: imgTelecomChurn,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Telecom-Customer_Churn_Prediction',
    nextSlug: 'retail-demand-forecasting', prevSlug: 'insurance-risk-scoring',
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
    heroIcon: <BarChart3 size={52} strokeWidth={1.2}/>,
    heroImage: imgRetailDemand,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Retail-Demand-Forecasting',
    nextSlug: 'rcm-prior-authorization-intelligence', prevSlug: 'telecom-churn-prediction',
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
    heroIcon: <BarChart3 size={52} strokeWidth={1.2}/>,
    heroImage: imgRcmPriorAuth,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Revenue-forecasting-prior-authorization-intelligence',
    nextSlug: 'accounts-payable-invoice-extraction', prevSlug: 'retail-demand-forecasting',
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
    heroIcon: <Code2 size={52} strokeWidth={1.2}/>,
    heroImage: imgAccountsPayable,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Accounts-Payable-Invoice-Extraction',
    nextSlug: 'email-order-intake-system', prevSlug: 'rcm-prior-authorization-intelligence',
  },
  'email-order-intake-system': {
    slug: 'email-order-intake-system', industry: 'Automation',
    timeline: '2 commits', investment: 'Concept (README)',
    accentColor: '#3AB896',
    title: "Email-Based Order Intake System",
    overview: "Businesses often receive orders through emails formatted differently by every customer. This system is designed to monitor a designated inbox, retrieve incoming order emails and attachments, extract order information, validate it, and create a structured order in the target system — converting unstructured email orders into organized, actionable records.",
    challenge: `Manually reading order emails in different formats, identifying customer and product details, and re-entering them into an order system was time-consuming and error-prone at any real volume — with no consistent path for flagging incomplete or ambiguous orders for review.`,
    approach: `Designed an end-to-end flow: monitor the inbox, fetch new emails and attachments, extract order data (customer, product, quantity, pricing, delivery), validate against mandatory fields and business rules, and either auto-create the structured order or route it to manual review. Every processed email is logged for traceability, with status notifications sent once an order is confirmed or flagged.`,
    results: ["End-to-end concept flow from raw inbox email to validated, structured order record", "Validation layer separates auto-createable orders from ones needing manual review", "Audit logging designed in from the start for traceability and troubleshooting", "Suggested stack (FastAPI + LLM extraction + PostgreSQL) scoped for production deployment"],
    tools: ['Python', 'IMAP / Graph API', 'FastAPI', 'PostgreSQL (suggested)'],
    quote: null,
    metrics: [{ value: 'Email + Attachments', label: 'Channels' }, { value: 'Rule-Based', label: 'Validation' }, { value: 'Concept / README', label: 'Stage' }],
    heroIcon: <Mail size={52} strokeWidth={1.2}/>,
    heroImage: imgEmailOrderIntake,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Email-Based-Order-Intake-System',
    nextSlug: 'satellite-weather-crop-yield', prevSlug: 'accounts-payable-invoice-extraction',
  },
  'satellite-weather-crop-yield': {
    slug: 'satellite-weather-crop-yield', industry: 'Agriculture AI',
    timeline: '1 commit', investment: 'Concept (README)',
    accentColor: '#1A8A6E',
    title: "Satellite, Weather & Crop Yield Prediction",
    overview: "Crop yield depends on soil conditions, weather, and vegetation health — hard to track manually across large farming regions. This pipeline combines satellite imagery, weather data, and ground-truth records into a single unified dataset, extracts vegetation and weather indices (NDVI, EVI, NDWI, LST), and trains multiple ML/DL models to predict crop yield.",
    challenge: `Yield-relevant signal was scattered across three different data sources — satellite imagery, weather stations, and ground-truth records — with no unified pipeline to fuse them spatially and temporally, or to compare which modeling approach (classical ML vs. time-series deep learning) actually predicted yield best.`,
    approach: `Built a multi-source collection and preprocessing pipeline covering Sentinel-2, MODIS, and Landsat imagery — cloud masking, compositing, and vegetation/weather index calculation (NDVI, EVI, NDWI, LST) — then integrated it spatially and temporally with ground-truth yield records. Compared Random Forest, XGBoost, LightGBM, SVR, and LSTM/GRU models for time-series yield prediction, evaluated with RMSE, MAE, R², and MAPE, with exportable yield maps, regional reports, and CSV/GeoTIFF outputs.`,
    results: ["Unified dataset fusing satellite imagery, weather data, and ground-truth records by location and time", "Vegetation/weather indices (NDVI, EVI, NDWI, LST) engineered directly from raw imagery", "Five model families compared (RF, XGBoost, LightGBM, SVR, LSTM/GRU) for best-fit yield prediction", "Exportable outputs designed for yield maps, regional reports, and GeoTIFF/CSV downloads"],
    tools: ['Python', 'Sentinel-2', 'Random Forest', 'XGBoost', 'LSTM/GRU'],
    quote: null,
    metrics: [{ value: '3 Fused', label: 'Data Sources' }, { value: '5', label: 'Models Compared' }, { value: 'Concept / README', label: 'Stage' }],
    heroIcon: <Leaf size={52} strokeWidth={1.2}/>,
    heroImage: imgSatelliteCropYield,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/satellite-weather-crop-yield',
    nextSlug: 'adaptive-learning-engine', prevSlug: 'email-order-intake-system',
  },
  'adaptive-learning-engine': {
    slug: 'adaptive-learning-engine', industry: 'Education AI',
    timeline: '2 commits', investment: 'Concept (README)',
    accentColor: '#7B52B5',
    title: "Adaptive Learning Engine",
    overview: "Every student learns math at a different pace, and a fixed curriculum either holds fast learners back or leaves struggling students behind. This engine tracks mastery separately for each skill and sub-skill, adjusts difficulty dynamically based on ongoing performance, and recommends the next best exercise to close gaps early.",
    challenge: `A one-size-fits-all curriculum can't serve students who are progressing at very different speeds on different sub-skills — struggling students fall further behind while advanced ones get held at a fixed pace, and teachers don't have time to hand-tailor practice for every student individually.`,
    approach: `Designed per-skill mastery modeling using a Bayesian/probabilistic approach (Bayesian Knowledge Tracing or Item Response Theory) to track mastery at the individual skill and sub-skill level, not just overall subject performance. Question difficulty adjusts in real time based on correctness, response time, and hint usage, with automatic identification of prerequisite gaps before advancing to new concepts — surfaced through progress and mastery dashboards for students and educators.`,
    results: ["Per-skill (not per-subject) mastery tracking via Bayesian/probabilistic modeling", "Real-time difficulty adjustment based on correctness, response time, and hint usage", "Automatic prerequisite-gap detection before a student advances to new material", "Designed to scale personalized learning paths without one-on-one tutoring"],
    tools: ['Python', 'Bayesian Knowledge Tracing', 'Item Response Theory'],
    quote: null,
    metrics: [{ value: 'Bayesian Mastery', label: 'Approach' }, { value: 'Real-Time', label: 'Adjustment' }, { value: 'Concept / README', label: 'Stage' }],
    heroIcon: <GraduationCap size={52} strokeWidth={1.2}/>,
    heroImage: imgAdaptiveLearning,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/adaptive-learning-engine',
    nextSlug: 'ehr-clinical-nlp-automation', prevSlug: 'satellite-weather-crop-yield',
  },
  'ehr-clinical-nlp-automation': {
    slug: 'ehr-clinical-nlp-automation', industry: 'Healthcare AI',
    timeline: '1 commit', investment: 'Concept (README)',
    accentColor: B.primary,
    title: "Clinical NLP for Structuring Hospital Records",
    overview: "Most clinical information lives in free-text notes — diagnoses, medications, procedures, and outcomes buried in physician narratives rather than structured fields. This pipeline reads through hospital records, extracts clinically meaningful entities, de-identifies patient data, and organizes everything into structured data that can actually be queried and reported on.",
    challenge: `Years of clinically valuable data sat locked in unstructured physician notes — unsearchable and unusable for research or reporting — and any extraction pipeline had to de-identify PHI before storage or analysis to stay privacy-compliant by design, not as an afterthought.`,
    approach: `Designed Named Entity Recognition tuned for clinical language — diagnoses, medications, procedures, symptoms — with de-identification built into the pipeline before any structuring or storage. Extracted entities are normalized against standard clinical vocabularies (ICD, SNOMED) so multi-year, multi-format hospital records land in a single structured, analyzable dataset ready for downstream analytics and reporting.`,
    results: ["Clinical NER extracts diagnoses, medications, procedures, and lab values from free text", "De-identification built into the pipeline before any storage or downstream processing", "Entity normalization against ICD/SNOMED standardizes years of disconnected notes", "Structured output designed to feed quality reporting, research, and audit requirements directly"],
    tools: ['Python', 'spaCy / NER', 'ICD/SNOMED Normalization'],
    quote: null,
    metrics: [{ value: 'Dx / Meds / Procedures', label: 'Entities' }, { value: 'De-ID Built-In', label: 'Privacy' }, { value: 'Concept / README', label: 'Stage' }],
    heroIcon: <Brain size={52} strokeWidth={1.2}/>,
    heroImage: imgEhrClinicalNlp,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/ehr-clinical-nlp-automation',
    nextSlug: 'single-cell-rnaseq-automation', prevSlug: 'adaptive-learning-engine',
  },
  'single-cell-rnaseq-automation': {
    slug: 'single-cell-rnaseq-automation', industry: 'Bioinformatics',
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
    heroIcon: <Dna size={52} strokeWidth={1.2}/>,
    heroImage: imgSingleCellRnaseq,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/single-cell-rnaseq-automation',
    nextSlug: 'real-time-fraud-detection', prevSlug: 'ehr-clinical-nlp-automation',
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
    heroIcon: <Shield size={52} strokeWidth={1.2}/>,
    heroImage: imgRealTimeFraud,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/real-time-fraud-detection',
    nextSlug: 'insurance-policy-document-classification', prevSlug: 'single-cell-rnaseq-automation',
  },
  'insurance-policy-document-classification': {
    slug: 'insurance-policy-document-classification', industry: 'Insurance AI',
    timeline: '2 commits', investment: 'Mobile App Build',
    accentColor: '#2A7AB5',
    title: "Insurance Policy Document Classification System",
    overview: "Processing incoming insurance documents manually is slow and error-prone. This platform automates document ingestion, classification, and key data extraction for insurance policies, claims, and endorsements — with an AI model trained directly on insurance policy layouts for reliable categorization across digital and scanned files.",
    challenge: `Staff were spending hours manually sorting and categorizing incoming policy documents, and low-resolution scans or complex policy layouts routinely broke traditional document-processing software — with no central visibility into verification status or backlog across the whole document queue.`,
    approach: `Trained a domain-specific classification model directly on insurance policy document layouts and clause structures, so it reliably distinguishes Auto, Health, Life, Property, and Endorsement documents that generic OCR tools miss. Combined OCR with visual-structure analysis to handle scanned and multi-page PDFs, added a verification/review queue for human-in-the-loop handling of low-confidence documents, and shipped it all as a React Native/Expo mobile app with secure role-based access and a real-time analytics dashboard.`,
    results: ["Domain-trained model distinguishes policy types generic OCR tools routinely miss", "OCR + visual-structure analysis handles scanned and multi-page policy PDFs", "Human-in-the-loop review queue routes low-confidence documents automatically", "Shipped as a full React Native/Expo mobile app with role-based secure access"],
    tools: ['React Native', 'Expo', 'OCR', 'Document AI'],
    quote: null,
    metrics: [{ value: 'React Native / Expo', label: 'Platform' }, { value: 'Scanned + Multi-Page', label: 'OCR' }, { value: 'Human-in-the-Loop', label: 'Review' }],
    heroIcon: <Shield size={52} strokeWidth={1.2}/>,
    heroImage: imgInsurancePolicyClassification,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Insurance-Policy-Document-Classification-System',
    nextSlug: 'regulatory-form-auto-completion', prevSlug: 'real-time-fraud-detection',
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
    heroIcon: <Rocket size={52} strokeWidth={1.2}/>,
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Regulatory-Form-Auto-Completion',
    nextSlug: 'healthcare-fraud-detection-billing', prevSlug: 'insurance-policy-document-classification',
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
    heroIcon: <Shield size={52} strokeWidth={1.2}/>,
    heroImage: imgHealthcareFraudBilling,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Fraudulent-Outlier-Billing-Detection-System',
    nextSlug: 'icd10-cpt-coding-engine', prevSlug: 'regulatory-form-auto-completion',
  },
};

// ─── Particles ────────────────────────────────────────────────────────────────
// ─── Section Badge ─────────────────────────────────────────────────────────────
// ─── Body Section Header ──────────────────────────────────────────────────────
function BodySectionHeader({ label, icon, color, stepNum }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      marginBottom: 'clamp(18px, 2.5vw, 28px)',
    }}>
      {/* Step number circle */}
      <div style={{
        width: 'clamp(36px, 4vw, 44px)', height: 'clamp(36px, 4vw, 44px)',
        borderRadius: '50%', flexShrink: 0,
        background: `${color}18`,
        border: `2px solid ${color}35`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: color,
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontSize: 'clamp(9px, 1vw, 11px)', fontWeight: 800,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: color, marginBottom: 2,
        }}>
          {stepNum && `Step ${stepNum} · `}{label}
        </div>
      </div>
      {/* Decorative line */}
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${color}30, transparent)` }}/>
    </div>
  );
}

// ─── Tool Badge ───────────────────────────────────────────────────────────────
function ToolBadge({ label, accent }) {
  const [hovered, setHovered] = useState(false);
  const color = accent || B.action;
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: 'clamp(6px, 0.9vw, 9px) clamp(12px, 1.8vw, 16px)',
        borderRadius: 'var(--radius-sm)',
        background: hovered ? color : `${color}12`,
        border: `1.5px solid ${hovered ? color : `${color}35`}`,
        color: hovered ? B.white : color,
        fontSize: 'clamp(11px, 1.2vw, 13px)', fontWeight: 700, letterSpacing: '0.04em',
        transition: 'all 0.22s ease', cursor: 'default',
        boxShadow: hovered ? `0 4px 14px ${color}35` : 'none',
      }}
    >
      <Code2 size={11}/>{label}
    </span>
  );
}

// ─── Result Item — animated ───────────────────────────────────────────────────
function ResultItem({ text, accent, i }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.09 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ x: 6 }}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 14,
        padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2.5vw, 24px)',
        borderRadius: 16, marginBottom: 10,
        background: hovered ? accent : `${accent}08`,
        border: `1.5px solid ${hovered ? accent : `${accent}22`}`,
        transition: 'all 0.3s ease',
        boxShadow: hovered ? `0 8px 28px ${accent}30` : 'none',
      }}
    >
      {/* Icon */}
      <div style={{
        width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
        background: hovered ? 'rgba(255,255,255,0.25)' : `${accent}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginTop: 1, transition: 'all 0.3s ease',
      }}>
        <CheckCircle size={15} color={hovered ? B.white : accent} strokeWidth={2.5}/>
      </div>
      <span style={{
        fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.75,
        color: hovered ? B.white : B.textMain, fontWeight: 500,
        transition: 'color 0.3s ease',
      }}>{text}</span>
    </motion.div>
  );
}

// ─── Metric Pill (hero) ───────────────────────────────────────────────────────
function MetricPill({ value, label, accent, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2.5vw, 24px)',
        borderRadius: 18,
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(16px)',
        border: `1.5px solid ${accent}25`,
        boxShadow: `0 8px 28px ${accent}15, 0 2px 8px rgba(0,0,0,0.06)`,
        textAlign: 'center', flex: 1,
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Subtle glow top-left */}
      <div style={{
        position: 'absolute', top: -10, left: -10, width: 60, height: 60,
        borderRadius: '50%', background: `radial-gradient(circle, ${accent}25, transparent 70%)`,
        pointerEvents: 'none',
      }}/>
      <div style={{
        fontWeight: 800,
        fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
        color: accent, letterSpacing: '-0.02em', lineHeight: 1,
        marginBottom: 5, position: 'relative', zIndex: 1,
      }}>{value}</div>
      <div style={{
        fontSize: 'clamp(9px, 1vw, 11px)', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.10em',
        color: B.textMuted, position: 'relative', zIndex: 1,
      }}>{label}</div>
    </motion.div>
  );
}

// ─── Nav Card ─────────────────────────────────────────────────────────────────
function NavCard({ slug, dir }) {
  const cs = ALL_CASE_STUDIES[slug];
  if (!cs) return null;
  const tag = INDUSTRY_COLORS[cs.industry] || {};
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={`/case-studies/${slug}`} style={{ textDecoration: 'none', flex: 1, minWidth: 0 }}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -5 }}
        style={{
          borderRadius: 22, overflow: 'hidden',
          background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
          border: `1.5px solid ${hovered ? cs.accentColor : 'rgba(255,255,255,0.10)'}`,
          boxShadow: hovered ? `0 16px 48px ${cs.accentColor}28, 0 0 0 1px ${cs.accentColor}20` : 'none',
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          cursor: 'pointer', position: 'relative',
        }}
      >
        {/* Hero image strip */}
        <div style={{
          height: 'clamp(80px, 10vw, 120px)',
          backgroundImage: `url(${cs.heroImage})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: hovered ? 'brightness(0.55)' : 'brightness(0.35)',
          transition: 'filter 0.4s ease',
          position: 'relative',
        }}>
          {/* Gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 20%, rgba(13,10,21,0.95) 100%)' }}/>
          {/* Accent top line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: hovered ? `linear-gradient(90deg, ${cs.accentColor}, ${cs.accentColor}50)` : 'transparent',
            transition: 'background 0.3s',
          }}/>
          {/* Direction label */}
          <div style={{
            position: 'absolute', bottom: 12, left: dir === 'prev' ? 16 : 'auto', right: dir === 'next' ? 16 : 'auto',
            fontSize: 'clamp(9px, 1vw, 11px)', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: B.textDarkMuted,
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            {dir === 'prev' && <ArrowLeft size={10}/>}
            {dir === 'prev' ? 'Previous' : 'Next'}
            {dir === 'next' && <ArrowRight size={10}/>}
          </div>
        </div>

        {/* Text area */}
        <div style={{ padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2.5vw, 24px)' }}>
          {/* Industry tag */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 'clamp(9px, 1vw, 11px)', fontWeight: 700,
            color: cs.accentColor, letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: 8,
          }}>
            {tag.icon && React.cloneElement(tag.icon, { size: 10, color: cs.accentColor })}
            {cs.industry}
          </div>
          {/* Title */}
          <div style={{
            fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)', fontWeight: 700,
            color: hovered ? B.textDark : B.textDarkMid, lineHeight: 1.5,
            transition: 'color 0.25s',
          }}>{cs.title}</div>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── Reading Progress Bar ─────────────────────────────────────────────────────
function ReadingProgress({ accentColor }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 3,
      background: 'rgba(0,0,0,0.08)', zIndex: 9999, pointerEvents: 'none',
    }}>
      <motion.div
        style={{
          height: '100%', width: `${progress}%`,
          background: `linear-gradient(90deg, ${accentColor || B.action}, ${B.secondary})`,
          boxShadow: `0 0 10px ${accentColor || B.action}80`,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

// ─── Professional Bridge (New Dark Section) ───────────────────────────────
function ProfessionalBridge() {
  const items = [
    { icon: <Lock size={14}/>, text: "Client Confidentiality" },
    { icon: <Code2 size={14}/>, text: "100% Code Ownership" },
    { icon: <Rocket size={14}/>, text: "Scalable Architecture" },
    { icon: <Globe2 size={14}/>, text: "Global Standards" },
  ];

  return (
    <section style={{
      position: 'relative', zIndex: 2,
      background: B.bgDark,
      padding: 'clamp(60px, 8vw, 100px) 0', // Approx 20-25vh
      overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <CircuitBg opacity={0.08}/>
      <DataParticles count={12} dark/>

      {/* WATERMARK TEXT */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', opacity: 0.04,
        overflow: 'hidden', whiteSpace: 'nowrap',
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 12rem)',
          fontWeight: 900, color: B.white,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          transform: 'rotate(-5deg)',
        }}>
          Presented by WellMind Data Solutions
        </h1>
      </div>

      {/* FLOATING PILLS */}
      <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 'clamp(10px, 1.5vw, 16px)',
          justifyContent: 'center',
        }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: B.action }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: 'clamp(8px, 1.2vw, 12px) clamp(16px, 2.5vw, 24px)',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid rgba(255,255,255,0.10)`,
                color: B.textDarkMid,
                fontSize: 'clamp(11px, 1.3vw, 13px)', fontWeight: 700,
                letterSpacing: '0.05em', textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                // Floating animation
                animation: `wmFloat ${4 + i * 0.5}s ease-in-out infinite`,
              }}
            >
              <span style={{ color: B.action }}>{item.icon}</span>
              {item.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function IndividualCaseStudy() {
  const { slug } = useParams();
  const cs = ALL_CASE_STUDIES[slug];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!cs) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: B.bgLight, fontFamily: 'var(--font-main)' }}>
        <h2 style={{ color: B.textMain, marginBottom: 16 }}>Case study not found.</h2>
        <Link to="/case-studies" style={{ color: B.action, fontWeight: 700, fontSize: 14 }}>← Back to Case Studies</Link>
      </div>
    );
  }

  const tag = INDUSTRY_COLORS[cs.industry] || {};

  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', fontFamily: 'var(--font-main)' }}>
      <ReadingProgress accentColor={cs.accentColor}/>

      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO (No Image Strip)
         ═══════════════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: B.heroBg,
        paddingTop: 'clamp(90px, 12vw, 140px)',
        paddingBottom: 'clamp(40px, 6vw, 80px)', // Reduced bottom padding since no image
      }}>
        {/* Decorative ambient glows */}
        <div style={{ position: 'absolute', right: '-5%', top: '10%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${cs.accentColor}10 0%, transparent 65%)`, pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', left: '-8%', bottom: '0%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(127,32,55,0.07) 0%, transparent 70%)', pointerEvents: 'none' }}/>
        <DataParticles count={14}/>

        <div style={{ ...PX, position: 'relative', zIndex: 5 }}>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 'clamp(24px, 4vw, 44px)', flexWrap: 'wrap' }}
          >
            {[
              { label: 'Home', href: '/' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: cs.industry, href: null },
            ].map((crumb, ci) => (
              <React.Fragment key={ci}>
                {ci > 0 && <ChevronRight size={12} color={B.textMuted}/>}
                {crumb.href ? (
                  <Link to={crumb.href} style={{ fontSize: 'clamp(11px, 1.3vw, 13px)', color: B.textMuted, fontWeight: 600, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = B.action}
                    onMouseLeave={e => e.currentTarget.style.color = B.textMuted}>{crumb.label}</Link>
                ) : (
                  <span style={{ fontSize: 'clamp(11px, 1.3vw, 13px)', color: B.textMain, fontWeight: 700 }}>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Two-column: left text / right metrics */}
          <div className="cs-detail-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 310px)', gap: 'clamp(36px, 6vw, 88px)', alignItems: 'center' }}>

            {/* LEFT: full narrative */}
            <div style={{ minWidth: 0 }}>
              {/* Industry + meta row */}
              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 'clamp(18px, 2.8vw, 30px)' }}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '5px clamp(12px, 1.8vw, 18px)', borderRadius: 99,
                  background: tag.bg || B.primaryLight,
                  border: `1px solid ${tag.border || B.primaryBorder}`,
                  fontSize: 'clamp(10px, 1.2vw, 12px)', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: tag.text || B.primary,
                }}>
                  {tag.icon} {cs.industry}
                </div>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontWeight: 800,
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.85rem)',
                  lineHeight: 1.15, letterSpacing: '-0.025em',
                  color: B.primaryDark,
                  marginBottom: 'clamp(16px, 2.5vw, 26px)',
                }}
              >
                {cs.title}
              </motion.h1>

              {/* Overview */}
              <motion.p
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                style={{
                  fontSize: 'clamp(0.95rem, 1.7vw, 1.2rem)',
                  lineHeight: 1.85, color: B.textMid,
                  marginBottom: 'clamp(28px, 4vw, 48px)', fontWeight: 500,
                }}
              >
                {cs.overview}
              </motion.p>

              {/* CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 'clamp(20px, 4vw, 40px)' }}
              >
                <Link to="/book-discovery" className="btn-primary"
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                  <Zap size={15}/> Have a similar challenge?
                </Link>
                <Link to="/case-studies" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: 'clamp(10px, 1.5vw, 14px) clamp(18px, 2.5vw, 26px)',
                  borderRadius: 'var(--radius-md)', background: 'transparent', color: B.textMid,
                  fontWeight: 700, fontSize: 'clamp(0.8rem, 1.4vw, 0.95rem)',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  border: `1.5px solid ${B.primaryBorder}`,
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = B.primary; e.currentTarget.style.color = B.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = B.primaryBorder; e.currentTarget.style.color = B.textMid; }}>
                  <ArrowLeft size={14}/> All Case Studies
                </Link>
                {cs.githubUrl && (
                  <a href={cs.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: 'clamp(10px, 1.5vw, 14px) clamp(18px, 2.5vw, 26px)',
                    borderRadius: 'var(--radius-md)', background: 'transparent', color: B.textMid,
                    fontWeight: 700, fontSize: 'clamp(0.8rem, 1.4vw, 0.95rem)',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    border: `1.5px solid ${B.primaryBorder}`,
                    transition: 'all 0.2s ease', textDecoration: 'none',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = B.primary; e.currentTarget.style.color = B.primary; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = B.primaryBorder; e.currentTarget.style.color = B.textMid; }}>
                    <SquareCode size={14}/> View on GitHub
                  </a>
                )}
                {cs.liveDemo && (
                  <a href={cs.liveDemo} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: 'clamp(10px, 1.5vw, 14px) clamp(18px, 2.5vw, 26px)',
                    borderRadius: 'var(--radius-md)', background: `${cs.accentColor}12`, color: cs.accentColor,
                    fontWeight: 700, fontSize: 'clamp(0.8rem, 1.4vw, 0.95rem)',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    border: `1.5px solid ${cs.accentColor}40`,
                    transition: 'all 0.2s ease', textDecoration: 'none',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = cs.accentColor; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${cs.accentColor}12`; e.currentTarget.style.color = cs.accentColor; }}>
                    <Rocket size={14}/> Live Demo
                  </a>
                )}
              </motion.div>
            </div>

            {/* RIGHT: Metrics card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ minWidth: 0, width: '100%' }}
            >
              <div style={{
                borderRadius: 'var(--radius-xl)',
                background: B.glassBg,
                backdropFilter: 'blur(20px)',
                border: `2px solid ${cs.accentColor}28`,
                boxShadow: `0 24px 60px ${cs.accentColor}14, 0 4px 20px rgba(0,0,0,0.07)`,
                overflow: 'hidden',
                position: 'relative',
              }}>
                {/* Accent top bar */}
                <div style={{ height: 4, background: `linear-gradient(90deg, ${cs.accentColor}, ${cs.accentColor}50, transparent)` }}/>

                {/* Icon area with subtle bg */}
                <div style={{
                  padding: 'clamp(24px, 3.5vw, 36px) 0 clamp(18px, 2.5vw, 26px)',
                  background: `linear-gradient(135deg, ${cs.accentColor}08, transparent)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: cs.accentColor, position: 'relative',
                }}>
                  {/* Glow behind icon */}
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: 100, height: 100, borderRadius: '50%',
                    background: `radial-gradient(circle, ${cs.accentColor}20, transparent 70%)`,
                    pointerEvents: 'none',
                  }}/>
                  <div style={{ position: 'relative', zIndex: 1 }}>{cs.heroIcon}</div>
                </div>

                {/* Metrics */}
                <div style={{ padding: '0 clamp(20px, 3vw, 30px) clamp(20px, 3vw, 30px)' }}>
                  {cs.metrics.map((m, mi) => (
                    <motion.div
                      key={mi}
                      initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + mi * 0.09 }}
                      style={{
                        padding: 'clamp(13px, 1.8vw, 18px) 0',
                        borderBottom: mi < cs.metrics.length - 1 ? `1px solid ${cs.accentColor}14` : 'none',
                        display: 'flex', flexDirection: 'column', gap: 6,
                      }}
                    >
                      <div style={{
                        fontSize: 'clamp(10px, 1.1vw, 12px)', fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '0.09em', color: B.textMuted,
                      }}>{m.label}</div>
                      <div style={{
                        fontWeight: 800,
                        fontSize: m.value.length > 14 ? 'clamp(0.95rem, 1.6vw, 1.15rem)' : 'clamp(1.1rem, 2vw, 1.55rem)',
                        color: cs.accentColor, letterSpacing: '-0.01em', lineHeight: 1.25,
                        maxWidth: '100%', textAlign: 'left', wordBreak: 'break-word', overflowWrap: 'break-word',
                      }}>{m.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. PROFESSIONAL BRIDGE (NEW DARK SECTION)
         ═══════════════════════════════════════════════════════════════════ */}
      <ProfessionalBridge />

      {/* ═══════════════════════════════════════════════════════════════════
          3. BODY — Challenge / Approach / Results / Tools / CTA
         ═══════════════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', zIndex: 1, overflow: 'hidden',
        background: 'linear-gradient(180deg, #EDE7F2 0%, #E5DCEF 40%, #DDD5EC 100%)',
        padding: 'var(--sp-section) 0',
      }}>
        <DataParticles count={10}/>

        <div style={{ ...NARROW, position: 'relative', zIndex: 2 }}>

          {/* ── THE CHALLENGE ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: 'clamp(44px, 6.5vw, 80px)' }}
          >
            <BodySectionHeader
              label="The Challenge"
              icon={<Target size={18} strokeWidth={2}/>}
              color={B.secondary}
              stepNum="01"
            />
            <div style={{
              padding: 'clamp(24px, 3.5vw, 40px) clamp(20px, 3.5vw, 44px)',
              borderRadius: 22,
              background: 'rgba(255,255,255,0.70)',
              backdropFilter: 'blur(12px)',
              border: `1.5px solid rgba(147, 33, 63,0.14)`,
              borderLeft: `4px solid ${B.secondary}`,
              boxShadow: '0 8px 40px rgba(147, 33, 63,0.07)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Faint watermark number */}
              <div style={{
                position: 'absolute', right: 24, top: 12,
                fontSize: 80, fontWeight: 900, lineHeight: 1,
                color: `${B.secondary}06`, pointerEvents: 'none',
                userSelect: 'none', fontFamily: 'var(--font-main)',
              }}>01</div>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.65vw, 1.15rem)',
                lineHeight: 1.9, color: B.textMain, position: 'relative', zIndex: 1,
              }}>
                {cs.challenge}
              </p>
            </div>
          </motion.div>

          {/* ── OUR APPROACH ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: 'clamp(44px, 6.5vw, 80px)' }}
          >
            <BodySectionHeader
              label="Our Approach"
              icon={<Lightbulb size={18} strokeWidth={2}/>}
              color={B.action}
              stepNum="02"
            />
            <div style={{
              padding: 'clamp(24px, 3.5vw, 40px) clamp(20px, 3.5vw, 44px)',
              borderRadius: 22,
              background: 'rgba(255,255,255,0.70)',
              backdropFilter: 'blur(12px)',
              border: `1.5px solid rgba(11, 124, 147,0.14)`,
              borderLeft: `4px solid ${B.action}`,
              boxShadow: '0 8px 40px rgba(11, 124, 147,0.06)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', right: 24, top: 12,
                fontSize: 80, fontWeight: 900, lineHeight: 1,
                color: `${B.action}06`, pointerEvents: 'none',
                userSelect: 'none', fontFamily: 'var(--font-main)',
              }}>02</div>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.65vw, 1.15rem)',
                lineHeight: 1.9, color: B.textMain, position: 'relative', zIndex: 1,
              }}>
                {cs.approach}
              </p>
            </div>
          </motion.div>

          {/* ── THE RESULTS ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: 'clamp(44px, 6.5vw, 80px)' }}
          >
            <BodySectionHeader
              label="The Results"
              icon={<Award size={18} strokeWidth={2}/>}
              color={cs.accentColor}
              stepNum="03"
            />
            <div>
              {cs.results.map((r, ri) => (
                <ResultItem key={ri} text={r} accent={cs.accentColor} i={ri}/>
              ))}
            </div>
          </motion.div>

          {/* ── TOOLS & TECHNOLOGIES ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: 'clamp(44px, 6.5vw, 80px)' }}
          >
            <BodySectionHeader
              label="Tools & Technologies"
              icon={<Cpu size={18} strokeWidth={2}/>}
              color={B.primary}
              stepNum="04"
            />
            <div style={{
              padding: 'clamp(20px, 3vw, 32px) clamp(18px, 3vw, 32px)',
              borderRadius: 22,
              background: 'rgba(255,255,255,0.70)',
              backdropFilter: 'blur(12px)',
              border: `1.5px solid ${B.primaryBorder}`,
              boxShadow: B.cardShadow,
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {cs.tools.map((t, ti) => (
                  <ToolBadge key={ti} label={t} accent={cs.accentColor}/>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── QUOTE ── */}
          {cs.quote && (
            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ marginBottom: 'clamp(44px, 6.5vw, 80px)' }}
            >
              <div style={{
                padding: 'clamp(28px, 4vw, 48px) clamp(22px, 3.5vw, 44px)',
                borderRadius: 'var(--radius-xl)',
                background: `linear-gradient(135deg, ${cs.accentColor}10, ${cs.accentColor}04)`,
                border: `1.5px solid ${cs.accentColor}22`,
                boxShadow: `0 12px 48px ${cs.accentColor}12`,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 12, left: 24, fontSize: 88, lineHeight: 1, color: `${cs.accentColor}14`, fontWeight: 900, fontFamily: 'serif', pointerEvents: 'none' }}>"</div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 18, position: 'relative', zIndex: 2 }}>
                  {[...Array(5)].map((_, si) => <Star key={si} size={14} fill={cs.accentColor} color={cs.accentColor}/>)}
                </div>
                <p style={{ fontSize: 'clamp(0.95rem, 1.65vw, 1.1rem)', lineHeight: 1.85, color: B.textMain, fontStyle: 'italic', marginBottom: 20, position: 'relative', zIndex: 2 }}>
                  &ldquo;{cs.quote.text}&rdquo;
                </p>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontWeight: 700, fontSize: 'clamp(12px, 1.3vw, 14px)', color: B.textMain }}>{cs.quote.name}</div>
                  <div style={{ fontSize: 'clamp(11px, 1.2vw, 13px)', color: cs.accentColor, fontWeight: 600, marginTop: 3 }}>{cs.quote.role}</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── INLINE CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div style={{
              borderRadius: 'var(--radius-xl)',
              background: 'rgba(255,255,255,0.80)',
              backdropFilter: 'blur(16px)',
              border: `2px solid ${B.primaryBorder}`,
              boxShadow: `0 16px 48px ${B.shadowMd}`,
              overflow: 'hidden', position: 'relative',
            }}>
              {/* Accent top bar */}
              <div style={{ height: 3, background: `linear-gradient(90deg, ${cs.accentColor}, ${B.action}, ${B.secondary})` }}/>
              <div style={{
                padding: 'clamp(24px, 3.5vw, 40px) clamp(20px, 3vw, 40px)',
                display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 40px)', flexWrap: 'wrap',
              }}>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
                    {[...Array(5)].map((_, si) => <Star key={si} size={12} fill={B.accent} color={B.accent}/>)}
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 'clamp(1rem, 2.2vw, 1.45rem)', color: B.primaryDark, marginBottom: 10, lineHeight: 1.3 }}>
                    Have a similar challenge?
                  </h3>
                  <p style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)', color: B.textMid, lineHeight: 1.7 }}>
                    Book a free 30-minute call. We'll tell you exactly what's possible, what it would cost, and whether we're the right fit. No pitch. No pressure.
                  </p>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <Link to="/book-discovery" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    padding: 'clamp(12px, 1.8vw, 16px) clamp(22px, 3.5vw, 36px)',
                    borderRadius: 'var(--radius-md)',
                    background: `linear-gradient(135deg, ${B.action}, #0A5F75)`,
                    color: B.white, fontWeight: 700,
                    fontSize: 'clamp(11px, 1.3vw, 13px)',
                    letterSpacing: '0.10em', textTransform: 'uppercase',
                    textDecoration: 'none',
                    boxShadow: `0 8px 32px ${B.actionGlow}`,
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                    <Zap size={13}/> Book Free Consultation <ArrowRight size={13}/>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. PREV / NEXT — dark section
         ═══════════════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #100C1E 0%, #170F22 50%, #0F1320 100%)',
        padding: 'var(--sp-section) 0',
      }}>
        <CircuitBg opacity={0.07}/>
        <DataParticles count={8} dark/>

        <div style={{ ...PX, position: 'relative', zIndex: 2 }}>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}>
            <SectionBadge dark style={{ color: B.textDarkMuted }}>Continue Reading</SectionBadge>
            <h2 style={{
              fontWeight: 700, fontSize: 'clamp(1.2rem, 2.8vw, 2rem)',
              color: B.textDark, lineHeight: 1.2, marginTop: 8,
            }}>More Case Studies</h2>
          </div>

          {/* Nav cards */}
          <div style={{ display: 'flex', gap: 'clamp(14px, 2.5vw, 28px)', flexWrap: 'wrap', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            {cs.prevSlug && <NavCard slug={cs.prevSlug} dir="prev"/>}
            {cs.nextSlug && <NavCard slug={cs.nextSlug} dir="next"/>}
          </div>

          {/* "All Case Studies" button */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/case-studies" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 'clamp(11px, 1.3vw, 13px)', fontWeight: 700,
              color: B.textDarkMuted, textDecoration: 'none',
              padding: 'clamp(10px, 1.4vw, 13px) clamp(18px, 2.8vw, 28px)',
              borderRadius: 10, border: `1px solid rgba(255,255,255,0.10)`,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              transition: 'all 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = B.textDark; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = B.textDarkMuted; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.background = 'transparent'; }}>
              View All Case Studies <ArrowRight size={13}/>
            </Link>
          </div>
        </div>
      </section>
</div>
  );
}