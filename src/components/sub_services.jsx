/**
 * sub_services.jsx — WellMind Data Solutions
 * ServicesMegaMenu — categorised sub-services panel with left nav + 4-col grid.
 * Imports all styling from theme_dropdown.jsx.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import {
  B, DT,
  panelVariants,
  OverlineLabel, PillBadge, PanelHeading,
  LeftPanel, RightStrip, Divider,
  AccentDot, // Imported for cleaner footer styling
} from './theme_dropdown';

// ─── NAV DATA ─────────────────────────────────────────────────────────────────
const SERVICES_DATA = {
  sections: [
    {
      id:          'ai-ml',
      heading:     'AI & Machine Learning',
      tagline:     'End-to-end ML pipelines from data to production.',
      link:        '/services-ai-ml',
      accentColor: '#6226A0',
      categories: [
        {
          name: 'Modeling & Prediction',
          items: [
            { label: 'Predictive Modelling',     link: '/services-ai-ml/predictive-modeling' },
            { label: 'Classification Systems',   link: '/services-ai-ml/classification' },
            { label: 'Regression & Forecasting', link: '/services-ai-ml/regression' },
            { label: 'Anomaly Detection',        link: '/services-ai-ml/anomaly-detection' },
          ],
        },
        {
          name: 'Language & Vision',
          items: [
            { label: 'NLP & Text Analytics',     link: '/services-ai-ml/nlp' },
            { label: 'Sentiment Analysis',       link: '/services-ai-ml/sentiment' },
            { label: 'Computer Vision',          link: '/services-ai-ml/computer-vision' },
            { label: 'Document Intelligence',    link: '/services-ai-ml/document-ai' },
          ],
        },
        {
          name: 'Generative AI & LLMs',
          items: [
            { label: 'LLM Fine-tuning',          link: '/services-ai-ml/llm-finetuning' },
            { label: 'RAG Architectures',        link: '/services-ai-ml/rag' },
            { label: 'AI Agents & Copilots',     link: '/services-ai-ml/ai-agents' },
            { label: 'Generative AI Apps',       link: '/services-ai-ml/generative-ai' },
          ],
        },
        {
          name: 'MLOps & Lifecycle',
          items: [
            { label: 'MLOps & Deployment',       link: '/services-ai-ml/mlops' },
            { label: 'Model Monitoring',         link: '/services-ai-ml/monitoring' },
            { label: 'A/B Testing Frameworks',   link: '/services-ai-ml/ab-testing' },
            { label: 'Feature Stores',           link: '/services-ai-ml/feature-stores' },
          ],
        },
      ],
    },
    {
      id:          'data',
      heading:     'Data Science & Analytics',
      tagline:     'Transform raw data into competitive intelligence.',
      link:        '/services-data-analytics',
      accentColor: '#0B7C93',
      categories: [
        {
          name: 'Business Intelligence',
          items: [
            { label: 'BI Strategy & Consulting', link: '/services-data-analytics/bi-strategy' },
            { label: 'Dashboard Design',         link: '/services-data-analytics/dashboards' },
            { label: 'KPI Frameworks',           link: '/services-data-analytics/kpi' },
            { label: 'Self-Serve Analytics',     link: '/services-data-analytics/self-serve' },
          ],
        },
        {
          name: 'Statistical Methods',
          items: [
            { label: 'Statistical Analysis',     link: '/services-data-analytics/statistical' },
            { label: 'Causal Inference',         link: '/services-data-analytics/causal' },
            { label: 'Experimentation Design',   link: '/services-data-analytics/experimentation' },
            { label: 'Survey & Cohort Analysis', link: '/services-data-analytics/survey-cohort' },
          ],
        },
        {
          name: 'Data Engineering',
          items: [
            { label: 'Data Engineering',         link: '/services-data-analytics/data-engineering' },
            { label: 'ETL / ELT Pipelines',      link: '/services-data-analytics/etl' },
            { label: 'Data Lakes & Warehouses',  link: '/services-data-analytics/data-lakes' },
            { label: 'Real-time Streaming',      link: '/services-data-analytics/streaming' },
          ],
        },
        {
          name: 'Data Quality & Ops',
          items: [
            { label: 'Data Quality Auditing',    link: '/services-data-analytics/quality' },
            { label: 'Metadata Management',      link: '/services-data-analytics/metadata' },
            { label: 'Observability & Alerting', link: '/services-data-analytics/observability' },
            { label: 'Governance Frameworks',    link: '/services-data-analytics/governance' },
          ],
        },
      ],
    },
    {
      id:          'soft',
      heading:     'AI-Powered Software',
      tagline:     'Custom products with ML capabilities built into the core.',
      link:        '/services-ai-software',
      accentColor: '#1B6B3A',
      categories: [
        {
          name: 'Product Development',
          items: [
            { label: 'SaaS Product Dev',          link: '/services-ai-software/saas' },
            { label: 'Rapid Prototyping',         link: '/services-ai-software/prototyping' },
            { label: 'MVP Engineering',           link: '/services-ai-software/mvp' },
            { label: 'Product Scaling',           link: '/services-ai-software/scaling' },
          ],
        },
        {
          name: 'Integration & APIs',
          items: [
            { label: 'API Design & Development',  link: '/services-ai-software/api' },
            { label: 'Third-party Integrations',  link: '/services-ai-software/integrations' },
            { label: 'Microservices Architecture',link: '/services-ai-software/microservices' },
            { label: 'Event-driven Systems',      link: '/services-ai-software/event-driven' },
          ],
        },
        {
          name: 'AI Feature Engineering',
          items: [
            { label: 'AI Feature Embedding',      link: '/services-ai-software/ai-features' },
            { label: 'Recommendation Engines',    link: '/services-ai-software/recommendations' },
            { label: 'Intelligent Search',        link: '/services-ai-software/search' },
            { label: 'Personalisation Layers',    link: '/services-ai-software/personalisation' },
          ],
        },
        {
          name: 'Infrastructure',
          items: [
            { label: 'System Architecture',       link: '/services-ai-software/architecture' },
            { label: 'Cloud Deployment',          link: '/services-ai-software/cloud' },
            { label: 'DevOps & CI/CD',            link: '/services-ai-software/devops' },
            { label: 'Security & Compliance',     link: '/services-ai-software/security' },
          ],
        },
      ],
    },
    {
      id:          'auto',
      heading:     'Automation & Workflows',
      tagline:     'Intelligent automation that eliminates manual operations.',
      link:        '/services-automation',
      accentColor: '#B45309',
      categories: [
        {
          name: 'Process Automation',
          items: [
            { label: 'RPA & Scripting',           link: '/services-automation/rpa' },
            { label: 'Workflow Orchestration',    link: '/services-automation/orchestration' },
            { label: 'Business Process Mapping',  link: '/services-automation/bpm' },
            { label: 'End-to-end Automation',     link: '/services-automation/e2e' },
          ],
        },
        {
          name: 'Document & Data',
          items: [
            { label: 'Document Processing',       link: '/services-automation/document' },
            { label: 'OCR & Extraction',          link: '/services-automation/ocr' },
            { label: 'Form Intelligence',         link: '/services-automation/forms' },
            { label: 'Report Generation',         link: '/services-automation/reporting' },
          ],
        },
        {
          name: 'Integration & Alerts',
          items: [
            { label: 'Integration APIs',              link: '/services-automation/integration' },
            { label: 'Alert & Notification Systems',  link: '/services-automation/alerts' },
            { label: 'Webhook Architectures',         link: '/services-automation/webhooks' },
            { label: 'Scheduling & Cron Jobs',        link: '/services-automation/scheduling' },
          ],
        },
        {
          name: 'AI-Enhanced Ops',
          items: [
            { label: 'Intelligent Routing',       link: '/services-automation/routing' },
            { label: 'NLP-based Triage',          link: '/services-automation/nlp-triage' },
            { label: 'Auto-classification',       link: '/services-automation/classification' },
            { label: 'Decision Automation',       link: '/services-automation/decisions' },
          ],
        },
      ],
    },
    {
      id:          'design',
      heading:     'UI/UX & Digital Design',
      tagline:     'Human-centric interfaces for complex data-heavy products.',
      link:        '/services-ui-ux',
      accentColor: '#C2185B',
      categories: [
        {
          name: 'Product Design',
          items: [
            { label: 'Product Design',            link: '/services-ui-ux/product' },
            { label: 'Design Systems',            link: '/services-ui-ux/design-systems' },
            { label: 'Component Libraries',       link: '/services-ui-ux/components' },
            { label: 'Brand Identity',            link: '/services-ui-ux/brand' },
          ],
        },
        {
          name: 'Research & Strategy',
          items: [
            { label: 'UX Research',               link: '/services-ui-ux/research' },
            { label: 'User Interviews',           link: '/services-ui-ux/interviews' },
            { label: 'Usability Testing',         link: '/services-ui-ux/usability' },
            { label: 'Heuristic Evaluation',      link: '/services-ui-ux/heuristics' },
          ],
        },
        {
          name: 'Prototyping',
          items: [
            { label: 'Wireframing',               link: '/services-ui-ux/wireframing' },
            { label: 'Interactive Prototypes',    link: '/services-ui-ux/prototyping' },
            { label: 'Design QA & Handoff',       link: '/services-ui-ux/handoff' },
            { label: 'Front-end Delivery',        link: '/services-ui-ux/frontend' },
          ],
        },
        {
          name: 'Data Visualisation',
          items: [
            { label: 'Data Visualisation UI',     link: '/services-ui-ux/data-viz' },
            { label: 'Dashboard UX',              link: '/services-ui-ux/dashboard-ux' },
            { label: 'Chart & Graph Design',      link: '/services-ui-ux/charts' },
            { label: 'Geospatial Visualisation',  link: '/services-ui-ux/geo' },
          ],
        },
      ],
    },
    {
      id:          'bio',
      heading:     'Bioinformatics & Health AI',
      tagline:     'Genomic pipelines, multi-omics analysis & clinical AI tools.',
      link:        '/services-bioinformatics',
      accentColor: '#0F766E',
      categories: [
        {
          name: 'Genomic & Sequencing',
          items: [
            { label: 'RNA-seq Pipelines',         link: '/services-bioinformatics/rna-seq' },
            { label: 'DNA Variant Calling',       link: '/services-bioinformatics/variant-calling' },
            { label: 'Genomic Sequencing',        link: '/services-bioinformatics/genomic' },
            { label: 'Epigenomics Analysis',      link: '/services-bioinformatics/epigenomics' },
          ],
        },
        {
          name: 'Multi-omics & Systems',
          items: [
            { label: 'Multi-omics Analysis',      link: '/services-bioinformatics/multi-omics' },
            { label: 'Proteomics Integration',    link: '/services-bioinformatics/proteomics' },
            { label: 'Metabolomics Pipelines',    link: '/services-bioinformatics/metabolomics' },
            { label: 'Single-cell Analysis',      link: '/services-bioinformatics/single-cell' },
          ],
        },
        {
          name: 'Clinical AI',
          items: [
            { label: 'Clinical Decision AI',      link: '/services-bioinformatics/clinical-ai' },
            { label: 'Diagnostic AI Models',      link: '/services-bioinformatics/diagnostic' },
            { label: 'Patient Risk Stratification',link:'/services-bioinformatics/risk' },
            { label: 'Imaging AI (Pathology)',    link: '/services-bioinformatics/pathology' },
          ],
        },
        {
          name: 'Drug & Lab',
          items: [
            { label: 'Drug Discovery AI',         link: '/services-bioinformatics/drug-discovery' },
            { label: 'Molecular Docking ML',      link: '/services-bioinformatics/docking' },
            { label: 'LIMS Integration',          link: '/services-bioinformatics/lims' },
            { label: 'Clinical Trial Analytics',  link: '/services-bioinformatics/clinical-trials' },
          ],
        },
      ],
    },
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ServicesMegaMenu({ onClose }) {
  const [activeId, setActiveId] = useState(SERVICES_DATA.sections[0].id);
  const currentSection = SERVICES_DATA.sections.find(s => s.id === activeId);

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: DT.minHeight }}>

      {/* ── Left: service list ────────────────────────────────────────────── */}
      <LeftPanel>
        <OverlineLabel style={{
          padding:     `14px ${DT.leftPanelPadR}px 10px`,
          paddingLeft: DT.leftPadInline,
        }}>
          Our Services
        </OverlineLabel>

        {SERVICES_DATA.sections.map(section => (
          <button
            key={section.id}
            onMouseEnter={() => setActiveId(section.id)}
            onClick={() => { onClose(); window.location.href = section.link; }}
            style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'space-between',
              paddingTop:     12,
              paddingBottom:  12,
              paddingRight:   DT.leftPanelPadR,
              paddingLeft:    DT.leftPadInline,
              background:     activeId === section.id
                ? `linear-gradient(90deg, rgba(74,43,95,0.10) 0%, rgba(74,43,95,0.04) 100%)`
                : 'transparent',
              borderLeft:   `3px solid ${activeId === section.id ? B.primaryMid : 'transparent'}`,
              borderTop:    'none',
              borderRight:  'none',
              borderBottom: 'none',
              cursor:       'pointer',
              transition:   'all 0.15s ease',
              textAlign:    'left',
              width:        '100%',
              gap:           8,
            }}
          >
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize:   18,
              fontWeight: activeId === section.id ? 700 : 500,
              color:      activeId === section.id ? B.primaryMid : B.textMid,
              lineHeight: 1.35,
              transition: 'all 0.15s',
            }}>
              {section.heading}
            </span>
            {activeId === section.id && (
              <ArrowRight size={13} style={{ flexShrink: 0, color: B.primaryMid, opacity: 0.7 }} />
            )}
          </button>
        ))}

        <div style={{
          marginTop:   'auto',
          paddingTop:  20,
          paddingRight: DT.leftPanelPadR,
          paddingLeft:  DT.leftPadInline,
          borderTop:   `1px solid ${B.primaryBorder}`,
        }}>
          <Link
            to="/services"
            onClick={onClose}
            style={{
              fontSize:   DT.ctaSize,
              fontWeight: 700,
              color:      B.action,
              textDecoration: 'none',
              display:    'flex',
              alignItems: 'center',
              gap:         5,
            }}
          >
            View All Services <ArrowRight size={12} />
          </Link>
        </div>
      </LeftPanel>

      {/* ── Center: categorised sub-services ─────────────────────────────── */}
      <div style={{ flex: 1, overflow: 'hidden', background: '#fff' }}>
        <AnimatePresence mode="wait">
          {currentSection && (
            <motion.div
              key={currentSection.id}
              variants={panelVariants}
              initial="hidden" animate="visible" exit="exit"
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              {/* Panel header */}
              <div style={{
                padding:      DT.panelHeaderPad,
                borderBottom: `1px solid ${B.primaryBorder}`,
                display:      'flex',
                alignItems:   'flex-start',
                justifyContent: 'space-between',
                gap:           20,
                background:   `linear-gradient(135deg, rgba(74,43,95,0.03) 0%, rgba(255,255,255,0) 60%)`,
              }}>
                <div style={{ flex: 1 }}>
                  <PillBadge label="Service" accentColor={currentSection.accentColor} />
                  <PanelHeading heading={currentSection.heading} tagline={currentSection.tagline} />
                </div>
                <Link
                  to={currentSection.link}
                  onClick={onClose}
                  className="wm-cyan-btn"
                  style={{ flexShrink: 0, alignSelf: 'flex-start' }}
                >
                  Explore <ArrowRight size={13} />
                </Link>
              </div>

              {/* Categories 4-column grid */}
              <div style={{
                flex:                1,
                padding:             DT.panelContentPad,
                display:             'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap:                 '0 24px',
                overflowY:           'auto',
                paddingBottom:        16, // Slight adjustment before footer
              }}>
                {currentSection.categories.map(cat => (
                  <div key={cat.name}>
                    <OverlineLabel style={{
                      marginBottom: 10,
                      paddingBottom: 6,
                      borderBottom: `1px solid ${B.primaryBorder}`,
                      opacity:      0.6,
                    }}>
                      {cat.name}
                    </OverlineLabel>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {cat.items.map(item => (
                        <Link
                          key={item.label}
                          to={item.link}
                          onClick={onClose}
                          className="wm-sub-link"
                          style={{
                            display:        'block',
                            padding:        `8px 10px`,
                            borderRadius:   DT.itemRadius,
                            textDecoration: 'none',
                            fontFamily:     "'Plus Jakarta Sans', sans-serif",
                            fontSize:       DT.itemSize,
                            fontWeight:     500,
                            color:          B.textMid,
                            transition:     'all 0.15s',
                            lineHeight:     1.35,
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}