/**
 * CaseStudies.jsx — WellMind Data Solutions — Fully Responsive
 * Synced 1:1 with Home.jsx design system
 * Breakpoints: 1440 | 1024 | 768 | 425 | 320
 *
 * Changes from previous version:
 * - Section 3 (Featured) + Section 5 (CTA) merged into ONE unified light section
 * - Agriculture & Education industries added to INDUSTRIES array + caseStudies data
 */

import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowDown, Dna, TrendingUp, Brain, Zap,
  FlaskConical, BarChart3, CheckCircle, BookOpen, Settings2,
  Cpu, Code, Palette, Clock, X, Building2, Globe,
  ChevronDown, ChevronRight, DollarSign, Layers, Filter, Star,
  SlidersHorizontal, Search, Leaf, GraduationCap, CloudRain, Users,
  Shield, GitBranch, SquareCode, Mail,
} from 'lucide-react';

import { HeroGridBg, SectionGridBg } from '../components/BgGrid';
import { B, SECTION_PAD, PX, fadeUp, DataParticles, SectionBadge, SectionDivider } from '../theme';
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

// ─── Card accent palette (cycles across cards) ────────────────────────────────
const CARD_ACCENTS = [
  { border: B.action,     glow: 'rgba(11, 124, 147,0.35)',    tag: B.action,    tagBg: 'rgba(11, 124, 147,0.12)',  tagBorder: 'rgba(11, 124, 147,0.25)'  },
  { border: B.secondary,  glow: 'rgba(147, 33, 63,0.35)',     tag: '#C47B8A',   tagBg: 'rgba(147, 33, 63,0.12)',   tagBorder: 'rgba(147, 33, 63,0.25)'   },
  { border: B.primary,    glow: 'rgba(107, 46, 116,0.35)',     tag: '#C59AD4',   tagBg: 'rgba(107, 46, 116,0.12)',   tagBorder: 'rgba(107, 46, 116,0.25)'   },
  { border: B.accent,     glow: 'rgba(200, 138, 70,0.35)',    tag: B.accent,    tagBg: 'rgba(200, 138, 70,0.12)',  tagBorder: 'rgba(200, 138, 70,0.25)'  },
  { border: '#1A8A6E',    glow: 'rgba(26,138,110,0.35)',    tag: '#3AB896',   tagBg: 'rgba(26,138,110,0.12)',  tagBorder: 'rgba(26,138,110,0.25)'  },
  { border: '#7B52B5',    glow: 'rgba(123,82,181,0.35)',    tag: '#A07EE0',   tagBg: 'rgba(123,82,181,0.12)',  tagBorder: 'rgba(123,82,181,0.25)'  },
  { border: '#C0584A',    glow: 'rgba(192,88,74,0.35)',     tag: '#E08070',   tagBg: 'rgba(192,88,74,0.12)',   tagBorder: 'rgba(192,88,74,0.25)'   },
  { border: '#2A7AB5',    glow: 'rgba(42,122,181,0.35)',    tag: '#5BA5D8',   tagBg: 'rgba(42,122,181,0.12)',  tagBorder: 'rgba(42,122,181,0.25)'  },
];

// ─── Services & Industries taxonomy ──────────────────────────────────────────
const SERVICES = [
  { id: 'ai-ml',          label: 'AI & ML',       icon: <Brain size={15}/>,     color: B.primary,   bg: 'rgba(107, 46, 116,0.10)', border: 'rgba(107, 46, 116,0.30)',  route: '/services-ai-ml' },
  { id: 'data-analytics', label: 'Data Science',  icon: <BarChart3 size={15}/>, color: B.action,    bg: 'rgba(11, 124, 147,0.10)', border: 'rgba(11, 124, 147,0.30)', route: '/services-data-analytics' },
  { id: 'ai-software',    label: 'AI Software',   icon: <Code size={15}/>,      color: B.secondary, bg: 'rgba(147, 33, 63,0.10)',  border: 'rgba(147, 33, 63,0.30)',  route: '/services-ai-software' },
  { id: 'automation',     label: 'Automation',    icon: <Settings2 size={15}/>, color: B.accent,    bg: 'rgba(200, 138, 70,0.12)', border: 'rgba(200, 138, 70,0.35)', route: '/services-automation' },
  { id: 'ui-ux',          label: 'UI/UX',         icon: <Palette size={15}/>,   color: '#7B52B5',   bg: 'rgba(123,82,181,0.10)', border: 'rgba(123,82,181,0.30)', route: '/services-ui-ux' },
  { id: 'bioinformatics', label: 'Bioinformatics',icon: <Dna size={15}/>,       color: '#1A8A6E',   bg: 'rgba(26,138,110,0.10)', border: 'rgba(26,138,110,0.30)', route: '/services-bioinformatics' },
];

// ─── ✅ UPDATED: Agriculture + Education added ────────────────────────────────
const INDUSTRIES = [
  { id: 'financial',     label: 'Financial',     icon: <TrendingUp size={15}/>,    color: B.secondary, bg: 'rgba(147, 33, 63,0.10)',  border: 'rgba(147, 33, 63,0.30)',  route: '/industry-financial-service' },
  { id: 'healthcare',    label: 'Healthcare',    icon: <Brain size={15}/>,         color: B.primary,   bg: 'rgba(107, 46, 116,0.10)',  border: 'rgba(107, 46, 116,0.30)',  route: '/industry-healthcare' },
  { id: 'retail',        label: 'Retail',        icon: <Layers size={15}/>,        color: B.accent,    bg: 'rgba(200, 138, 70,0.12)', border: 'rgba(200, 138, 70,0.35)', route: '/industry-retail-ecommerce' },
  { id: 'manufacturing', label: 'Manufacturing', icon: <Cpu size={15}/>,           color: B.action,    bg: 'rgba(11, 124, 147,0.10)', border: 'rgba(11, 124, 147,0.30)', route: '/industry-manufacturing' },
  { id: 'agriculture',   label: 'Agriculture',   icon: <Leaf size={15}/>,          color: '#1A8A6E',   bg: 'rgba(26,138,110,0.10)', border: 'rgba(26,138,110,0.30)', route: '/industry-agriculture' },
  { id: 'education',     label: 'Education',     icon: <GraduationCap size={15}/>, color: '#7B52B5',   bg: 'rgba(123,82,181,0.10)', border: 'rgba(123,82,181,0.30)', route: '/industry-education' },
];

// ─── ✅ UPDATED: Case Studies Data — Agriculture + Education added ─────────────
const caseStudies = [
  {
    slug: 'icd10-cpt-coding-engine',
    service: 'ai-ml', industry: 'healthcare',
    serviceLabel: 'AI & Machine Learning', industryLabel: 'Healthcare',
    timeline: '1 commit', investment: 'Concept (README)',
    title: "ICD-10 & CPT Coding Recommendation Engine",
    summary: "Reads a clinical note and retrieves, ranks, and recommends the most relevant ICD-10 diagnosis and CPT procedure codes, combining keyword matching, embeddings, and semantic similarity with a confidence score and clinical rationale for every suggestion.",
    result: "Concept: coder-ready ICD-10/CPT recommendations",
    resultIcon: <BookOpen size={14}/>,
    metrics: [{ label: 'Approach', value: 'NLP + Embeddings' }, { label: 'Codes', value: 'ICD-10 + CPT' }, { label: 'Stage', value: 'Concept / README' }],
    accentColor: '#1A8A6E',
    tags: ['NLP', 'Embeddings', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/ICD-10-CPT-coding-recommendation-engine',
    featured: false,
  },
  {
    slug: 'ar-prioritization-underpayment-recovery',
    service: 'data-analytics', industry: 'healthcare',
    serviceLabel: 'Data Science & Analytics', industryLabel: 'Healthcare',
    timeline: '12 commits', investment: 'Full-Stack Build',
    title: "AR Prioritization & Underpayment Recovery Engine",
    summary: "A public-CMS-data proof of concept that estimates what a Medicare claim should have paid, flags claims that look materially underpaid, and ranks them into a prioritized AR workqueue, backed by a LightGBM classifier and a live FastAPI + React dashboard.",
    result: "6.1M Medicare claims analyzed to flag underpayments for AR review",
    resultIcon: <BarChart3 size={14}/>,
    metrics: [{ label: 'PR-AUC', value: '0.875' }, { label: 'Rows Modeled', value: '6.1M' }, { label: 'Critical-Tier Claims', value: '9,114' }],
    accentColor: B.action,
    tags: ['LightGBM', 'FastAPI', 'React'],
    image: imgArPrioritization,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/AR-prioritization-underpayment-recovery-engine',
    featured: true,
  },
  {
    slug: 'conversational-analytics-platform',
    service: 'data-analytics', industry: 'retail',
    serviceLabel: 'Data Science & Analytics', industryLabel: 'Retail & E-Commerce',
    timeline: '4 commits', investment: 'Full-Stack Build',
    title: "Conversational Analytics Platform",
    summary: "A full-stack conversational BI engine that turns plain-language questions like \"show me total sales for laptops in Faisalabad last month\" into structured queries and automatically renders the right chart: bar, line, pie, scatter, KPI cards, or table.",
    result: "Plain-language questions auto-rendered as live charts",
    resultIcon: <Zap size={14}/>,
    metrics: [{ label: 'Chart Types', value: '6 Auto-Rendered' }, { label: 'LLM Engine', value: 'Gemini Pro' }, { label: 'Data Layer', value: 'Real-time Firestore' }],
    accentColor: B.primary,
    tags: ['React', 'Gemini', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Conversational-Analytics-Platform',
    featured: false,
  },
  {
    slug: 'claim-denial-prediction',
    service: 'ai-ml', industry: 'healthcare',
    serviceLabel: 'AI & Machine Learning', industryLabel: 'Healthcare',
    timeline: '38 commits', investment: 'Full-Stack Build',
    title: "Claim Denial Prediction & Root-Cause Classifier",
    summary: "An end-to-end Revenue Cycle Management system that predicts a Medicare claim's denial probability before submission and, given a denial remark, classifies the operational root cause with a recommended first-pass fix, served through a FastAPI + Streamlit demo.",
    result: "Pre-submission denial risk + root-cause classification",
    resultIcon: <CheckCircle size={14}/>,
    metrics: [{ label: 'Risk Tiers', value: '3-Tier' }, { label: 'Root-Cause NLP', value: 'TF-IDF + DistilBERT' }, { label: 'Explainability', value: 'SHAP' }],
    accentColor: B.secondary,
    tags: ['XGBoost', 'DistilBERT', 'SHAP'],
    image: imgClaimDenial,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Claim-denial-prediction-root-cause-classifier',
    featured: false,
  },
  {
    slug: 'restaurant-command-center',
    service: 'ai-software', industry: 'retail',
    serviceLabel: 'AI Software', industryLabel: 'Retail & E-Commerce',
    timeline: '1 commit', investment: 'Live Deployed Build',
    title: "Command Center: Multi-Branch Restaurant Operations Platform",
    summary: "A unified operations platform connecting face-verified, geo-fenced staff attendance, order and kitchen tracking, and an automated fraud-detection engine, pushing real-time alerts straight to the owner's WhatsApp across every branch.",
    result: "Live multi-branch ops platform with real-time fraud alerts",
    resultIcon: <CheckCircle size={14}/>,
    metrics: [{ label: 'Portals', value: '5 Role-Based' }, { label: 'Alerts', value: 'Real-Time WhatsApp' }, { label: 'Verification', value: 'Face + Geo-Fence' }],
    accentColor: B.accent,
    tags: ['React', 'Fraud Detection', 'Live Demo'],
    image: imgCommandCenter,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/restaurant-management-system',
    liveDemo: 'https://nexus-rms.vercel.app',
    featured: false,
  },
  {
    slug: 'supplyguard-disruption-alerts',
    service: 'data-analytics', industry: 'manufacturing',
    serviceLabel: 'Data Science & Analytics', industryLabel: 'Manufacturing',
    timeline: '8 commits', investment: 'Full-Stack Build',
    title: "SupplyGuard: Supply Chain Disruption Alert System",
    summary: "A predictive risk-monitoring system that turns operational health metrics and environmental risk signals into a continuous 0–100 supplier disruption score, helping procurement teams move from reactive to proactive risk management.",
    result: "Continuous 0–100 disruption risk scoring per supplier",
    resultIcon: <Zap size={14}/>,
    metrics: [{ label: 'Risk Score', value: '0–100 Scale' }, { label: 'Model', value: 'Logistic Regression' }, { label: 'Risk Tiers', value: 'Low / Med / High' }],
    accentColor: '#2A7AB5',
    tags: ['Logistic Regression', 'Flask', 'Risk Scoring'],
    image: imgSupplyGuard,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Supply-Chain-Disruption-Alerts',
    featured: false,
  },
  {
    slug: 'insurance-risk-scoring',
    service: 'ai-ml', industry: 'financial',
    serviceLabel: 'AI & Machine Learning', industryLabel: 'Financial Services',
    timeline: '3 commits', investment: 'Full-Stack Build',
    title: "Insurance Risk Scoring",
    summary: "A Gradient Boosting model that scores insurance customers across 45 financial, demographic, health, lifestyle, and behavioral features, classifying each into Low, Medium, or High risk through an interactive Streamlit prediction app.",
    result: "45-feature Gradient Boosting risk classifier",
    resultIcon: <CheckCircle size={14}/>,
    metrics: [{ label: 'Model Features', value: '45' }, { label: 'Model', value: 'Gradient Boosting' }, { label: 'Risk Tiers', value: '3' }],
    accentColor: '#7B52B5',
    tags: ['Gradient Boosting', 'Streamlit', 'Insurance'],
    image: imgInsuranceRiskScoring,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Insurance-Risk-Scoring',
    featured: false,
  },
  {
    slug: 'telecom-churn-prediction',
    service: 'ai-ml', industry: 'retail',
    serviceLabel: 'AI & Machine Learning', industryLabel: 'Retail & E-Commerce',
    timeline: '13 commits', investment: 'ML Pipeline Build',
    title: "Telecom Customer Churn Prediction",
    summary: "A Random Forest churn model (chosen from five algorithms compared head-to-head) that reduces 150 raw features to 25 with SHAP-explained predictions, reaching 86.4% accuracy and a 0.91 AUC-ROC on real telecom behavioral data.",
    result: "86.4% accuracy, 0.91 AUC-ROC churn model",
    resultIcon: <BarChart3 size={14}/>,
    metrics: [{ label: 'Accuracy', value: '86.4%' }, { label: 'AUC-ROC', value: '0.91' }, { label: 'Top 20% Capture', value: '65%+ Churners' }],
    accentColor: '#C0584A',
    tags: ['Random Forest', 'SHAP', 'SMOTE'],
    image: imgTelecomChurn,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Telecom-Customer_Churn_Prediction',
    featured: true,
  },
  {
    slug: 'retail-demand-forecasting',
    service: 'data-analytics', industry: 'retail',
    serviceLabel: 'Data Science & Analytics', industryLabel: 'Retail & E-Commerce',
    timeline: '3 commits', investment: 'Concept (README)',
    title: "Retail Demand Forecasting",
    summary: "A demand-forecasting and analytics concept that analyzes historical retail sales patterns and seasonality to predict future product demand, designed to reduce stockouts and overstock through better inventory planning.",
    result: "Concept pipeline for seasonal demand forecasting",
    resultIcon: <TrendingUp size={14}/>,
    metrics: [{ label: 'Approach', value: 'Time-Series' }, { label: 'Focus', value: 'Seasonality' }, { label: 'Stage', value: 'Concept / README' }],
    accentColor: B.action,
    tags: ['Forecasting', 'Pandas', 'Retail'],
    image: imgRetailDemand,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Retail-Demand-Forecasting',
    featured: false,
  },
  {
    slug: 'rcm-prior-authorization-intelligence',
    service: 'data-analytics', industry: 'healthcare',
    serviceLabel: 'Data Science & Analytics', industryLabel: 'Healthcare',
    timeline: '31 commits', investment: 'Full-Stack Build',
    title: "RCM Opportunity Forecasting & Prior Authorization Intelligence",
    summary: "A public-CMS-data analytics system for Revenue Cycle teams that forecasts 90-day Medicare Advantage enrollment, flags prior-authorization exposure, and highlights growth opportunities through an interactive Streamlit executive dashboard.",
    result: "90-day MA enrollment forecast at 0.048% holdout MAPE",
    resultIcon: <TrendingUp size={14}/>,
    metrics: [{ label: 'Holdout MAPE', value: '0.048%' }, { label: 'Enrollment Tracked', value: '33.5M → 36.1M' }, { label: 'Forecast Horizon', value: '90 Days' }],
    accentColor: B.primary,
    tags: ['Forecasting', 'Streamlit', 'CMS Data'],
    image: imgRcmPriorAuth,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Revenue-forecasting-prior-authorization-intelligence',
    featured: false,
  },
  {
    slug: 'accounts-payable-invoice-extraction',
    service: 'automation', industry: 'financial',
    serviceLabel: 'Automation & Workflows', industryLabel: 'Financial Services',
    timeline: '6 commits', investment: 'Notebook Prototype',
    title: "Accounts Payable Invoice Extraction",
    summary: "A document-processing system that extracts key invoice fields (customer details, dates, amounts, charges) from invoice documents and converts them into validated, structured data for accounts payable processing.",
    result: "Automated invoice-to-structured-data extraction",
    resultIcon: <CheckCircle size={14}/>,
    metrics: [{ label: 'Fields Extracted', value: '6+ Core Fields' }, { label: 'Output', value: 'Structured Data' }, { label: 'Stage', value: 'Notebook Prototype' }],
    accentColor: B.accent,
    tags: ['Document AI', 'Python', 'Automation'],
    image: imgAccountsPayable,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Accounts-Payable-Invoice-Extraction',
    featured: false,
  },
  {
    slug: 'email-order-intake-system',
    service: 'automation', industry: 'retail',
    serviceLabel: 'Automation & Workflows', industryLabel: 'Retail & E-Commerce',
    timeline: '2 commits', investment: 'Concept (README)',
    title: "Email-Based Order Intake System",
    summary: "An email automation concept that monitors an inbox, extracts customer and product details from order emails and attachments, validates the information, and creates structured orders automatically with minimal manual intervention.",
    result: "Concept pipeline for email-to-order automation",
    resultIcon: <CheckCircle size={14}/>,
    metrics: [{ label: 'Channels', value: 'Email + Attachments' }, { label: 'Validation', value: 'Rule-Based' }, { label: 'Stage', value: 'Concept / README' }],
    accentColor: '#3AB896',
    tags: ['Email Automation', 'Python', 'RPA'],
    image: imgEmailOrderIntake,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Email-Based-Order-Intake-System',
    featured: false,
  },
  {
    slug: 'satellite-weather-crop-yield',
    service: 'ai-ml', industry: 'agriculture',
    serviceLabel: 'AI & Machine Learning', industryLabel: 'Agriculture',
    timeline: '1 commit', investment: 'Concept (README)',
    title: "Satellite, Weather & Crop Yield Prediction",
    summary: "A geospatial pipeline fusing Sentinel-2, MODIS, and Landsat satellite imagery with weather and ground-truth data into one unified dataset, designed to predict crop yield at the location and time level.",
    result: "Concept: multi-source geospatial yield prediction",
    resultIcon: <CheckCircle size={14}/>,
    metrics: [{ label: 'Data Sources', value: '3 Fused' }, { label: 'Models Compared', value: '5' }, { label: 'Stage', value: 'Concept / README' }],
    accentColor: '#1A8A6E',
    tags: ['Satellite Data', 'XGBoost', 'LSTM'],
    image: imgSatelliteCropYield,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/satellite-weather-crop-yield',
    featured: false,
  },
  {
    slug: 'adaptive-learning-engine',
    service: 'ai-ml', industry: 'education',
    serviceLabel: 'AI & Machine Learning', industryLabel: 'Education',
    timeline: '2 commits', investment: 'Concept (README)',
    title: "Adaptive Learning Engine",
    summary: "A per-skill mastery engine designed to track each student's progress at the individual math skill level, adjust question difficulty in real time, and recommend the next best exercise. Every student follows a path suited to their own pace.",
    result: "Concept: real-time adaptive math mastery tracking",
    resultIcon: <Zap size={14}/>,
    metrics: [{ label: 'Approach', value: 'Bayesian Mastery' }, { label: 'Adjustment', value: 'Real-Time' }, { label: 'Stage', value: 'Concept / README' }],
    accentColor: '#7B52B5',
    tags: ['EdTech', 'Bayesian ML', 'Personalization'],
    image: imgAdaptiveLearning,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/adaptive-learning-engine',
    featured: false,
  },
  {
    slug: 'ehr-clinical-nlp-automation',
    service: 'ai-ml', industry: 'healthcare',
    serviceLabel: 'AI & Machine Learning', industryLabel: 'Healthcare',
    timeline: '1 commit', investment: 'Concept (README)',
    title: "Clinical NLP for Structuring Hospital Records",
    summary: "A named-entity-recognition pipeline designed to read years of unstructured hospital notes, extract diagnoses, medications, procedures, and lab values, de-identify PHI, and normalize everything against ICD/SNOMED into a queryable dataset.",
    result: "Concept: hospital notes structured via clinical NER",
    resultIcon: <CheckCircle size={14}/>,
    metrics: [{ label: 'Entities', value: 'Dx / Meds / Procedures' }, { label: 'Privacy', value: 'De-ID Built-In' }, { label: 'Stage', value: 'Concept / README' }],
    accentColor: B.primary,
    tags: ['Clinical NLP', 'NER', 'Healthcare'],
    image: imgEhrClinicalNlp,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/ehr-clinical-nlp-automation',
    featured: false,
  },
  {
    slug: 'single-cell-rnaseq-automation',
    service: 'bioinformatics', industry: 'healthcare',
    serviceLabel: 'Bioinformatics & Health Sci', industryLabel: 'Healthcare',
    timeline: '1 commit', investment: 'Concept (README)',
    title: "Single-Cell RNA-seq Automation",
    summary: "A pipeline designed to automate PCA/t-SNE/UMAP dimensionality reduction and BIC-optimized GMM + DBSCAN clustering, turning noisy, high-dimensional single-cell RNA-seq data into clear, interpretable cell-state groupings.",
    result: "Concept: automated clustering for scRNA-seq data",
    resultIcon: <Dna size={14}/>,
    metrics: [{ label: 'Reduction', value: 'PCA / t-SNE / UMAP' }, { label: 'Clustering', value: 'GMM + DBSCAN' }, { label: 'Selection', value: 'BIC-Optimized' }],
    accentColor: B.action,
    tags: ['scRNA-seq', 'UMAP', 'Clustering'],
    image: imgSingleCellRnaseq,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/single-cell-rnaseq-automation',
    featured: false,
  },
  {
    slug: 'real-time-fraud-detection',
    service: 'ai-ml', industry: 'financial',
    serviceLabel: 'AI & Machine Learning', industryLabel: 'Financial Services',
    timeline: '1 commit', investment: 'Concept (README)',
    title: "Real-Time Fraud Detection System",
    summary: "A concept for scoring every incoming transaction in real time: combining a supervised fraud classifier with unsupervised anomaly detection to catch both known and novel fraud patterns, and returning an approve, review, or block decision instantly.",
    result: "Concept: real-time 0–100 transaction risk scoring",
    resultIcon: <Zap size={14}/>,
    metrics: [{ label: 'Risk Score', value: '0–100 Scale' }, { label: 'Decisioning', value: '3-Tier' }, { label: 'Stage', value: 'Concept / README' }],
    accentColor: B.secondary,
    tags: ['Fraud Detection', 'Anomaly Detection', 'Real-Time'],
    image: imgRealTimeFraud,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/real-time-fraud-detection',
    featured: false,
  },
  {
    slug: 'insurance-policy-document-classification',
    service: 'ai-software', industry: 'financial',
    serviceLabel: 'AI Software', industryLabel: 'Financial Services',
    timeline: '2 commits', investment: 'Mobile App Build',
    title: "Insurance Policy Document Classification System",
    summary: "A domain-trained document intelligence platform (shipped as a React Native/Expo mobile app) that automatically classifies incoming insurance documents by policy type and extracts key fields, including from scanned, multi-page PDFs.",
    result: "Domain-trained document classification + OCR",
    resultIcon: <CheckCircle size={14}/>,
    metrics: [{ label: 'Platform', value: 'React Native / Expo' }, { label: 'OCR', value: 'Scanned + Multi-Page' }, { label: 'Review', value: 'Human-in-the-Loop' }],
    accentColor: '#2A7AB5',
    tags: ['React Native', 'OCR', 'Insurance'],
    image: imgInsurancePolicyClassification,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Insurance-Policy-Document-Classification-System',
    featured: false,
  },
  {
    slug: 'regulatory-form-auto-completion',
    service: 'automation', industry: 'financial',
    serviceLabel: 'Automation & Workflows', industryLabel: 'Financial Services',
    timeline: '5 commits', investment: 'Full-Stack Build',
    title: "Regulatory Form Auto-Completion (RPA)",
    summary: "An AI-powered RPA bot that automatically fills regulatory and government forms from client data stored in Supabase (pausing only for CAPTCHAs or missing information) with a Playwright bot engine and a React human-in-the-loop dashboard.",
    result: "AI-mapped RPA form-filling with human-in-the-loop review",
    resultIcon: <CheckCircle size={14}/>,
    metrics: [{ label: 'Automation', value: 'Full Field-Fill' }, { label: 'HITL', value: 'CAPTCHA + Missing Data' }, { label: 'Stack', value: 'Playwright + Groq' }],
    accentColor: B.action,
    tags: ['RPA', 'Playwright', 'Groq AI'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Regulatory-Form-Auto-Completion',
    featured: false,
  },
  {
    slug: 'healthcare-fraud-detection-billing',
    service: 'ai-ml', industry: 'healthcare',
    serviceLabel: 'AI & Machine Learning', industryLabel: 'Healthcare',
    timeline: '16 commits', investment: 'ML Notebook Pipeline',
    title: "Healthcare Fraud Detection System (Medicare Billing)",
    summary: "An ML pipeline analyzing Medicare billing data to surface suspicious providers: combining peer-group Z-score benchmarking, Isolation Forest anomaly detection, E&M upcoding detection, and OIG federal exclusion-list cross-referencing into one composite Fraud Risk Score.",
    result: "3,842 high-risk providers flagged from 44,528 analyzed",
    resultIcon: <Shield size={14}/>,
    metrics: [{ label: 'Providers Analyzed', value: '44,528' }, { label: 'High-Risk Flagged', value: '3,842' }, { label: 'Classifier Accuracy', value: '~96%' }],
    accentColor: B.secondary,
    tags: ['Isolation Forest', 'Anomaly Detection', 'CMS Data'],
    image: imgHealthcareFraudBilling,
    githubUrl: 'https://github.com/WELLMIND-DataSolutions/Fraudulent-Outlier-Billing-Detection-System',
    featured: true,
  },
];

// ─── Dark Stats Card ───────────────────────────────────────────────────────────
function StatCard({ value, label, icon, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)',
        borderRadius: 'var(--radius-lg)', border: `1px solid rgba(255,255,255,0.10)`,
        padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 24px)', textAlign: 'center',
        position: 'relative', overflow: 'hidden', cursor: 'default',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
        opacity: 0.5,
      }}/>
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6, ease: 'circOut' }}
        style={{
          position: 'relative', zIndex: 2, marginBottom: 16,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 'clamp(44px, 5vw, 60px)', height: 'clamp(44px, 5vw, 60px)',
          borderRadius: 14, background: `${color}20`, border: `1px solid ${color}40`,
        }}
      >
        {React.cloneElement(icon, { size: 24, color: color })}
      </motion.div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ fontWeight: 800, fontSize: 'var(--fs-section-h2)', color: B.textDark, letterSpacing: '-0.02em', lineHeight: 1 }}>
          {value}
        </div>
        <div style={{ fontSize: 'clamp(11px, 1.2vw, 13px)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: B.textDarkMuted, marginTop: 8 }}>
          {label}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Professional Unified Filter Bar ─────────────────────────────────────────
function UnifiedFilterBar({ activeService, activeIndustry, onFilterClick }) {
  const isAllActive = !activeService && !activeIndustry;

  return (
    <div style={{ width: '100%', marginBottom: 48 }}>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        marginBottom: 20, flexWrap: 'wrap', position: 'relative',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          fontSize: 'clamp(10px, 1.2vw, 12px)', fontWeight: 800,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: B.textMuted, padding: '5px 10px',
          background: 'rgba(107, 46, 116,0.06)', borderRadius: 6,
          border: `1px solid ${B.primaryBorder}`,
        }}>
          <SlidersHorizontal size={12} color={B.primary} strokeWidth={2.5} />
          Filter Projects
        </div>

        <button
          onClick={() => onFilterClick('all')}
          className={`filter-chip chip-reset ${isAllActive ? 'active' : ''}`}
        >
          All Projects
        </button>

        {(activeService || activeIndustry) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            onClick={() => onFilterClick('all')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 12px', borderRadius: 'var(--radius-sm)',
              background: 'rgba(200, 138, 70,0.12)', border: `1px solid ${B.accent}50`,
              color: B.accent, fontWeight: 700, fontSize: 12,
              cursor: 'pointer', letterSpacing: '0.04em',
            }}
          >
            <X size={12} /> Clear Filters
          </motion.button>
        )}
      </div>

      {/* Services row */}
      <div style={{ marginBottom: 10 }}>
        <div style={{
          fontSize: 'clamp(9px, 1.1vw, 11px)', fontWeight: 800, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: B.textMuted, marginBottom: 8,
          textAlign: 'center',
        }}>
          Services
        </div>
        <div className="filter-row-services">
          {SERVICES.map((item) => {
            const isActive = activeService === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onFilterClick('service', item.id)}
                className={`filter-chip chip-service ${isActive ? 'active' : ''}`}
                style={isActive ? {
                  background: item.color, borderColor: item.color, color: '#fff',
                  boxShadow: `0 4px 16px ${item.border || item.color}55`,
                } : {
                  borderColor: item.border || 'rgba(107, 46, 116,0.25)',
                  color: item.color, background: item.bg,
                }}
              >
                <span className="chip-icon" style={{ color: isActive ? '#fff' : item.color }}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Industries row */}
      <div>
        <div style={{
          fontSize: 'clamp(9px, 1.1vw, 11px)', fontWeight: 800, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: B.textMuted, marginBottom: 8,
          textAlign: 'center',
        }}>
          Industries
        </div>
        <div className="filter-row-industries">
          {INDUSTRIES.map((item) => {
            const isActive = activeIndustry === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onFilterClick('industry', item.id)}
                className={`filter-chip chip-industry ${isActive ? 'active' : ''}`}
                style={isActive ? {
                  background: item.color, borderColor: item.color, color: '#fff',
                  boxShadow: `0 4px 16px ${item.border || item.color}55`,
                } : {
                  borderColor: item.border || 'rgba(107, 46, 116,0.25)',
                  color: item.color, background: item.bg,
                }}
              >
                <span className="chip-icon" style={{ color: isActive ? '#fff' : item.color }}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Case Study Card ──────────────────────────────────────────────────────────
function CaseStudyCard({ cs, i, isFeatured = false }) {
  const [hovered, setHovered] = useState(false);
  const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%' }}
    >
      <Link to={`/case-studies/${cs.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            height: '100%', minHeight: 'clamp(300px, 32vw, 400px)',
            background: '#0D0A15',
            border: `1.5px solid ${hovered ? accent.border : 'rgba(107, 46, 116,0.20)'}`,
            boxShadow: hovered
              ? `0 24px 60px -12px ${accent.glow}, 0 0 0 1px ${accent.border}40`
              : '0 8px 32px -8px rgba(0,0,0,0.25)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex', flexDirection: 'column',
          }}
        >
          {/* IMAGE HEADER */}
          <div style={{ position: 'relative', height: 'clamp(140px, 16vw, 200px)', flexShrink: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${cs.image})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: hovered ? 'brightness(0.75)' : 'brightness(0.68)',
            }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,10,21,0) 45%, rgba(13,10,21,0.88) 100%)' }} />
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${accent.border}, ${accent.border}60, transparent)`,
              zIndex: 5,
            }} />
            {isFeatured && (
              <div style={{
                position: 'absolute', top: 16, left: 16,
                background: B.accent, color: '#fff',
                padding: '4px 10px', borderRadius: 6,
                fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
                zIndex: 10, display: 'flex', alignItems: 'center', gap: 5,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <Star size={12} fill="white" /> Featured
              </div>
            )}
            <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end', maxWidth: '80%', zIndex: 5 }}>
              {cs.tags.map((tag, tIdx) => (
                <span key={tIdx} style={{
                  fontSize: 'clamp(10px, 1.2vw, 11px)', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: B.textDark, background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(8px)', padding: '4px 10px', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div style={{
            padding: 'clamp(18px, 2.5vw, 28px)',
            display: 'flex', flexDirection: 'column', flexGrow: 1,
            background: 'linear-gradient(to bottom, rgba(13,10,21,1) 0%, rgba(20,12,32,1) 100%)',
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
              <span style={{
                fontSize: 'clamp(10px, 1.1vw, 11px)', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.06em', color: accent.tag,
                background: accent.tagBg, border: `1px solid ${accent.tagBorder}`,
                padding: '3px 9px', borderRadius: 5,
              }}>{cs.serviceLabel}</span>
              <span style={{
                fontSize: 'clamp(10px, 1.1vw, 11px)', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.06em', color: B.textDarkMuted,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)',
                padding: '3px 9px', borderRadius: 5,
              }}>{cs.industryLabel}</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-main)', fontWeight: 700,
              fontSize: 'clamp(1rem, 2vw, 1.6rem)',
              color: B.textDark, lineHeight: 1.3, marginBottom: 14,
            }}>{cs.title}</h3>

            <p style={{
              fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', lineHeight: 1.7,
              color: B.textDarkMid, marginBottom: 20, flexGrow: 1,
            }}>{cs.summary}</p>

            <div style={{
              display: 'flex', gap: 8, marginBottom: 20,
              padding: 'clamp(10px, 1.5vw, 14px)',
              background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)',
              border: `1px solid rgba(255,255,255,0.06)`,
            }}>
              {cs.metrics.map((m, mIdx) => (
                <div key={mIdx} style={{
                  flex: 1, textAlign: 'center',
                  borderRight: mIdx < cs.metrics.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  paddingRight: mIdx < cs.metrics.length - 1 ? 8 : 0,
                }}>
                  <div style={{ fontWeight: 800, fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)', color: accent.tag, lineHeight: 1.1 }}>{m.value}</div>
                  <div style={{ fontSize: 'clamp(9px, 1vw, 10px)', fontWeight: 600, color: B.textDarkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 3 }}>{m.label}</div>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingTop: 20, borderTop: `1px solid rgba(255,255,255,0.07)`,
            }}>
              <span style={{
                display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700,
                fontSize: 'clamp(12px, 1.4vw, 15px)', letterSpacing: '0.06em',
                color: hovered ? accent.border : B.textDarkMuted,
                textTransform: 'uppercase', transition: 'color 0.3s ease',
              }}>
                View Case Study
                <ArrowRight size={14} style={{
                  transform: hovered ? 'translateX(5px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease',
                }} />
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {cs.githubUrl && (
                  <a
                    href={cs.githubUrl} target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    title="View repository on GitHub"
                    style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease', textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = accent.border; e.currentTarget.style.borderColor = 'transparent'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <SquareCode size={14} color={B.textDarkMuted} />
                  </a>
                )}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: hovered ? accent.border : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${hovered ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}>
                  <ArrowRight size={14} color={hovered ? '#fff' : B.textDarkMuted} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function CaseStudies() {
  const location  = useLocation();
  const navigate  = useNavigate();

  const params = new URLSearchParams(location.search);
  const [activeService,  setActiveService]  = useState(params.get('service')  || null);
  const [activeIndustry, setActiveIndustry] = useState(params.get('industry') || null);

  const featuredStudies = caseStudies.filter(cs => cs.featured).slice(0, 3);

  const heroTrustItems = [
    { icon: <SquareCode size={16} />,    label: 'Public GitHub Portfolio', accent: '#3AB896' },
    { icon: <Layers size={16} />,    label: '6 Service Domains',       accent: '#5BB8CC' },
    { icon: <BarChart3 size={16} />, label: '20 Projects Shipped',     accent: '#C0A87A' },
  ];

  useEffect(() => {
    const p = new URLSearchParams(location.search);
    setActiveService(p.get('service'));
    setActiveIndustry(p.get('industry'));
  }, [location.search]);

  const handleFilterClick = (type, id = null) => {
    const p = new URLSearchParams(location.search);
    let newService  = activeService;
    let newIndustry = activeIndustry;
    if (type === 'all')           { newService = null; newIndustry = null; }
    else if (type === 'service')  { newService  = (activeService  === id) ? null : id; }
    else if (type === 'industry') { newIndustry = (activeIndustry === id) ? null : id; }
    if (newService)  p.set('service',  newService);  else p.delete('service');
    if (newIndustry) p.set('industry', newIndustry); else p.delete('industry');
    navigate({ search: p.toString() }, { replace: true });
  };

  const filtered = caseStudies.filter(cs => {
    const matchService  = activeService  ? cs.service  === activeService  : true;
    const matchIndustry = activeIndustry ? cs.industry === activeIndustry : true;
    return matchService && matchIndustry;
  });

  return (
    <div style={{ background: B.bgLight, minHeight: '100vh', overflowX: 'clip', position: 'relative', fontFamily: 'var(--font-main)' }}>

      {/* ═══ 1. HERO ═══ */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', zIndex: 1,
        paddingTop: 'clamp(40px, 5vw, 50px)',
        background: B.heroBg,
      }}>
        <HeroGridBg opacity={0.3} />
        <div style={{ position: 'absolute', left: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(90deg, rgba(127,32,55,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, width: '45%', height: '100%', background: 'linear-gradient(270deg, rgba(127,32,55,0.06) 0%, transparent 80%)', pointerEvents: 'none', zIndex: 1 }} />
        <DataParticles count={18} />

        <div style={{
          flex: 1, position: 'relative', zIndex: 10,
          display: 'flex', alignItems: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 72px)',
        }}>
          <div style={{ maxWidth: 1400, width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', alignItems: 'center' }} className="cs-hero-grid">
          <motion.div
            initial="hidden" animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
            style={{ width: '100%', textAlign: 'center' }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge>Proven Results</SectionBadge>
            </motion.div>

            <motion.h1
              variants={fadeUp} custom={0.05}
              style={{
                fontFamily: 'var(--font-main)', fontWeight: 700,
                fontSize: 'var(--fs-hero)',
                lineHeight: 1.1, letterSpacing: '-0.02em',
                marginBottom: 'clamp(16px, 2.5vw, 28px)',
              }}
            >
              <span style={{ color: B.primaryDark }}>Our Work in Action. </span>
              <br className="hero-br" />
              <span style={{ background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Real Projects & Real Results.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={0.2}
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: 'clamp(0.9rem, 2.2vw, 1.5rem)',
                color: B.textMid,
                maxWidth: 1200, margin: '0 auto clamp(16px, 2.5vw, 36px)',
                letterSpacing: '0.02em', lineHeight: 1.6,
              }}
            >
              From genomics research to fintech fraud detection, every case study below is a project we've shipped, a client we've served, and a result that's measurable.
            </motion.p>

            <motion.div
              variants={fadeUp} custom={0.15}
              style={{
                display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2.5vw, 30px)',
                justifyContent: 'center',
                marginBottom: 'clamp(28px, 4vw, 60px)',
                marginTop: 'clamp(20px, 3vw, 60px)',
              }}
            >
              <Link to="/book-discovery" className="btn-primary"
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.90'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}>
                <Zap size={20} /> Book a Free Consultation
              </Link>
              <a href="#all-projects" className="btn-secondary"
                onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                Explore Projects <ArrowDown size={20} />
              </a>
              <a href="https://github.com/WELLMIND-DataSolutions" target="_blank" rel="noopener noreferrer" className="btn-secondary"
                onMouseEnter={e => { e.currentTarget.style.background = B.secondaryLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; }}>
                <SquareCode size={20} /> View on GitHub
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={0.20}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, paddingTop: 10 }}
            >
              <div style={{ padding: '4px 16px', borderRadius: 99, background: 'rgba(147, 33, 63,0.08)', color: B.secondary, fontSize: 'clamp(10px, 1.8vw, 16px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', border: '1px solid rgba(147, 33, 63,0.2)' }}>
                Highlights
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 1.5vw, 12px)', justifyContent: 'center', alignItems: 'center' }}>
                {heroTrustItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 'clamp(8px, 1.2vw, 10px) clamp(12px, 2vw, 18px)', fontSize: 'clamp(12px, 1.8vw, 18px)', fontWeight: 600, color: 'rgba(58,32,59,0.8)', background: 'rgba(255,255,255,0.5)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(127,32,55,0.1)' }}>
                    <div style={{ width: 22, height: 22, borderRadius: 5, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${item.accent}15` }}>
                      {React.cloneElement(item.icon, { size: 14, color: item.accent, strokeWidth: 2.5 })}
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .cs-hero-grid{text-align:center}
        }
      `}</style>

      {/* ═══ 2. DARK STATS ═══ */}
      <section style={{
        padding: 'var(--sp-section) 0', position: 'relative', zIndex: 1,
        background: `linear-gradient(135deg, #170F22 0%, #140B20 100%)`,
      }}>
        <DataParticles count={10} dark />
        <div style={{ ...PX, position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionBadge dark style={{ color: B.textDarkMuted, marginBottom: 20 }}>Our Impact</SectionBadge>
            <h2 className="section-h2 dark" style={{ marginBottom: 'clamp(20px, 3.5vw, 40px)', textAlign: 'center' }}>Results that Speak</h2>
            <div className="grid-stats" style={{ width: '100%' }}>
              <StatCard value="6"    label="Service Domains"    icon={<Cpu size={20}/>}         color={B.action}    />
              <StatCard value="6"    label="Industries Served"  icon={<Globe size={20}/>}        color={B.accent}    />
              <StatCard value="20"   label="GitHub Projects"    icon={<SquareCode size={20}/>}      color={B.secondary} />
              <StatCard value="100%" label="Public Repositories" icon={<CheckCircle size={20}/>}  color={B.primary}   />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. MAIN LIGHT SECTION ═══ */}
      <section style={{
        position: 'relative', zIndex: 2,
        background: `linear-gradient(180deg, ${B.bgLight} 0%, #F2EBF9 50%, #E8E1F0 100%)`,
        overflow: 'clip', padding: 0,
      }}>
        <SectionGridBg opacity={0.2} />
        <DataParticles count={12} />

        {/* ── 3a. FEATURED ── */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}
            >
              <SectionBadge>Top Selected</SectionBadge>
              <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>Featured Success Stories</h2>
              <p className="section-lead" style={{ maxWidth: 1200 }}>Hand-picked projects showcasing our highest impact across industries.</p>
            </motion.div>

            <div className="grid-projects">
              <AnimatePresence>
                {featuredStudies.map((cs, i) => (
                  <CaseStudyCard key={cs.slug} cs={cs} i={i} isFeatured={true} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* ── 3b. ALL PROJECTS ── */}
        <div id="all-projects" style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0' }}>
          <div style={{ ...PX, position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}
            >
              <SectionBadge>Portfolio</SectionBadge>
              <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 12 }}>All Projects</h2>
              <p className="section-lead" style={{ maxWidth: 1200 }}>Filter by service or industry to find work most relevant to your challenge.</p>
            </motion.div>

            <UnifiedFilterBar
              activeService={activeService}
              activeIndustry={activeIndustry}
              onFilterClick={handleFilterClick}
            />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', marginBottom: 40 }}>
              {activeService || activeIndustry ? (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 3vw, 28px)', borderRadius: 16, background: B.primaryDark, boxShadow: '0 8px 30px rgba(44, 22, 54,0.25)', border: `1px solid rgba(255,255,255,0.1)` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Filter size={18} color={B.accent} />
                    <span style={{ fontSize: 'clamp(13px, 1.6vw, 16px)', fontWeight: 700, color: B.white }}>Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
                  </div>
                  <button onClick={() => handleFilterClick('all')} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', color: B.white, fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 'var(--radius-sm)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}>
                    <X size={14}/> Clear
                  </button>
                </div>
              ) : (
                <span style={{ fontSize: 14, fontWeight: 600, color: B.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Showing all {caseStudies.length} projects</span>
              )}
            </motion.div>

            <motion.div layout className="grid-projects">
              <AnimatePresence mode="popLayout">
                {filtered.length > 0 ? filtered.map((cs, i) => (
                  <CaseStudyCard key={cs.slug} cs={cs} i={i} isFeatured={false} />
                )) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'clamp(60px, 8vw, 100px) 24px', background: 'rgba(255,255,255,0.50)', borderRadius: 'var(--radius-lg)', border: `1.5px dashed ${B.primaryBorder}` }}
                  >
                    <div style={{ fontSize: 48, marginBottom: 20 }}>🔍</div>
                    <h3 style={{ fontWeight: 700, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: B.textMain, marginBottom: 12 }}>No results found</h3>
                    <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', color: B.textMuted, marginBottom: 24 }}>No case studies match your current filter combination.</p>
                    <button onClick={() => handleFilterClick('all')} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 24px', borderRadius: 10, background: B.primary, color: B.white, border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer', letterSpacing: '0.06em' }}>
                      <X size={16}/> Clear Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <SectionDivider />

        {/* ── 3c. CTA ── */}
        <div style={{ position: 'relative', zIndex: 2, padding: 'var(--sp-section) 0', paddingTop: 'clamp(48px, 8vw, 100px)', paddingBottom: 'clamp(48px, 8vw, 100px)' }}>
          <div style={{ position: 'absolute', top: '15%', left: '8%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 46, 116,0.10) 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(11, 124, 147,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />

          <div style={{ ...PX, position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionBadge style={{ color: B.primary }}>Have a similar challenge?</SectionBadge>
              <h2 className="section-h2" style={{ color: B.primaryDark, marginBottom: 20 }}>
                Let's Build Your<br />
                <span style={{ background: 'linear-gradient(90deg, #B02A48 25%, #93213F 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Success Story Next
                </span>
              </h2>
              <p className="section-lead" style={{ maxWidth: 1200, margin: '0 auto clamp(24px, 3.5vw, 48px)' }}>
                Book a free 30-minute discovery call. We'll assess your challenge, give you honest feedback, and outline a clear path forward.
              </p>
              <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', marginBottom: 48 }}>
                <Link to="/book-discovery" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  padding: 'clamp(14px, 2.5vw, 20px) clamp(24px, 5vw, 56px)',
                  borderRadius: 'var(--radius-md)', background: `linear-gradient(135deg, ${B.action}, #0A5F75)`,
                  color: B.white, fontFamily: 'var(--font-main)', fontWeight: 700,
                  fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', letterSpacing: '0.10em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  boxShadow: `0 8px 40px ${B.actionGlow}, 0 0 80px rgba(11, 124, 147,0.15)`,
                  border: `1px solid rgba(11, 124, 147,0.40)`,
                }}>
                  <Zap size={18} /> Book a Free Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </section>
    </div>
  );
}