/**
 * sub_resources.jsx — WellMind Data Solutions
 * ResourcesMegaMenu — Updated styles to match sub_services.jsx layout & typography.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import {
  B, DT,
  panelVariants,
  OverlineLabel, PillBadge, PanelHeading,
  LeftPanel,
} from './theme_dropdown';

// ─── ARTICLE CARD COMPONENT ─────────────────────────────────────────────────
function ArticleCard({ article, onClose }) {
  return (
    <Link
      to={article.link}
      onClick={onClose}
      className="wm-res-card"
      style={{
        display:        'flex',
        flexDirection:  'column',
        textDecoration: 'none',
        border:         `1px solid ${B.primaryBorder}`,
        borderRadius:   DT.cardRadius,
        overflow:       'hidden',
        transition:     'all 0.18s ease',
        background:     '#fff',
        height:         '100%',
        position:       'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 124, 147,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >

      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Title */}
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize:   16,
          fontWeight: 700,
          color:      B.textMain,
          lineHeight: 1.4,
          display:    'block',
          marginBottom: 10,
        }}>
          {article.title}
        </span>

        {/* Description */}
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize:   16,
          color:      B.textMuted,
          margin:     0,
          lineHeight: 1.6,
          flex:       1,
          display:    '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow:   'hidden',
        }}>
          {article.desc}
        </p>

        {/* Meta row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingTop: 14, borderTop: `1px solid ${B.primaryBorder}` }}>
          <span style={{
            fontSize:     DT.overlineSize,
            fontWeight:   700,
            padding:      '3px 8px',
            borderRadius: 4,
            background:   B.actionLight,
            color:        B.action,
            border:       `1px solid rgba(11, 124, 147,0.15)`,
            textTransform:'uppercase',
            letterSpacing: '0.05em',
          }}>
            {article.cat}
          </span>
          
          <span style={{
            fontSize:   12,
            color:      B.textMuted,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            display:    'flex',
            alignItems: 'center',
            gap: 4,
          }}>
            <span>{article.rt}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── NAV DATA ─────────────────────────────────────────────────────────────────
const RESOURCES_DATA = [
  {
    id:          'featured',
    heading:     'Featured Articles',
    tagline:     'Deep dives into AI, Bioinformatics, and MLOps methodologies.',
    link:        '/resources#featured',
    accentColor: B.action,
    articles: [
      {
        title: 'The Complete RNA-seq Analysis Pipeline (2026)',
        cat:   'Bioinformatics',
        link:  '/resources/rna-seq-analysis-guide',
        rt:    '14 min',
        desc:  'Step-by-step guide covering alignment, quantification, and differential expression for modern genomic workflows.',
      },
      {
        title: 'Why Explainable AI Matters in Healthcare',
        cat:   'Healthcare AI',
        link:  '/resources/explainable-ai-healthcare',
        rt:    '9 min',
        desc:  'SHAP, LIME, and model interpretability frameworks for regulated clinical environments.',
      },
    ],
  },
  {
    id:          'guides',
    heading:     'Quick Guides & Checklists',
    tagline:     'Actionable roadmaps for rapid implementation.',
    link:        '/resources#guides',
    accentColor: B.primaryMid,
    guides: [
      { label: 'Getting Started with MLOps',        link: '/resources/getting-started-mlops' },
      { label: 'Enterprise AI Readiness Checklist',  link: '/resources/ai-readiness-checklist' },
      { label: 'Building a Data Lakehouse',         link: '/resources/guide-data-lakehouse' },
      { label: 'LLM Security Best Practices',       link: '/resources/guide-llm-security' },
      { label: 'Choosing the Right Cloud Database',  link: '/resources/guide-cloud-db' },
      { label: 'HIPAA Compliant Data Pipelines',    link: '/resources/guide-hipaa-pipelines' },
      { label: 'Fine-tuning vs. RAG',                link: '/resources/guide-finetuning-rag' },
      { label: 'Kubernetes for Data Science',       link: '/resources/guide-k8s-ml' },
    ],
  },
  {
    id:          'bio',
    heading:     'Bioinformatics',
    tagline:     'Genomic pipelines, variant calling, and clinical analysis.',
    link:        '/resources#bioinformatics',
    accentColor: '#0F766E',
    articles: [
      {
        title: 'RNA-seq Analysis Guide',
        cat:   'Tutorial',
        link:  '/resources/rna-seq-analysis-guide',
        rt:    '14 min',
        desc:  'From raw FASTQ files to differentially expressed genes.'
      },
      {
        title: 'Single-Cell RNA-seq 101',
        cat:   'Analysis',
        link:  '/resources/single-cell-101',
        rt:    '18 min',
        desc:  'Introduction to Seurat and Scanpy workflows.'
      }
    ]
  },
  {
    id:          'health',
    heading:     'Healthcare AI',
    tagline:     'Diagnostics, patient stratification, and clinical decision support.',
    link:        '/resources#healthcare-ai',
    accentColor: '#0B7C93',
    articles: [
      {
        title: 'Explainable AI in Diagnostics',
        cat:   'XAI',
        link:  '/resources/explainable-ai-healthcare',
        rt:    '9 min',
        desc:  'Interpreting black-box models for clinical trust.'
      }
    ]
  },
  {
    id:          'genai',
    heading:     'LLMs & GenAI',
    tagline:     'Transformers, embeddings, and generative applications.',
    link:        '/resources#genai',
    accentColor: '#6226A0',
    articles: [
      {
        title: 'RAG Architecture Patterns',
        cat:   'Engineering',
        link:  '/resources/rag-patterns',
        rt:    '15 min',
        desc:  'Vector databases, retrieval strategies, and prompt optimization.'
      }
    ]
  },
  {
    id:          'mlops',
    heading:     'MLOps',
    tagline:     'Lifecycle management, monitoring, and deployment.',
    link:        '/resources#mlops',
    accentColor: '#B45309',
    articles: [
      {
        title: 'Model Monitoring Strategies',
        cat:   'Operations',
        link:  '/resources/model-monitoring',
        rt:    '10 min',
        desc:  'Tracking data drift and performance degradation in prod.'
      }
    ]
  }
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ResourcesMegaMenu({ onClose }) {
  const [activeId, setActiveId] = useState(RESOURCES_DATA[0].id);
  const currentSection = RESOURCES_DATA.find(s => s.id === activeId);

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: DT.minHeight }}>

      {/* ── Left: Resource Categories ───────────────────────────────────────── */}
      <LeftPanel>
        <OverlineLabel style={{
          padding:     `14px ${DT.leftPanelPadR}px 10px`,
          paddingLeft: DT.leftPadInline,
        }}>
          Library
        </OverlineLabel>

        {RESOURCES_DATA.map(section => (
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
              fontSize:   18, // Matches sub_services size
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
            to="/resources"
            onClick={onClose}
            style={{
              fontSize:       DT.ctaSize,
              fontWeight:     700,
              color:          B.action,
              textDecoration: 'none',
              display:        'flex',
              alignItems:     'center',
              gap:             5,
              fontFamily:     "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Browse All Resources <ArrowRight size={12} />
          </Link>
        </div>
      </LeftPanel>

      {/* ── Center: Content Grid ────────────────────────────────────────────── */}
      <div style={{ flex: 1, overflow: 'hidden', background: '#fff' }}>
        <AnimatePresence mode="wait">
          {currentSection && (
            <motion.div
              key={currentSection.id}
              variants={panelVariants}
              initial="hidden" animate="visible" exit="exit"
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              {/* Panel Header */}
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
                  <PillBadge label="Topic" accentColor={currentSection.accentColor} />
                  <PanelHeading heading={currentSection.heading} tagline={currentSection.tagline} />
                </div>
                <Link
                  to={currentSection.link}
                  onClick={onClose}
                  className="wm-cyan-btn"
                  style={{ flexShrink: 0, alignSelf: 'flex-start' }}
                >
                  View All <ArrowRight size={13} />
                </Link>
              </div>

              {/* Content Area */}
              <div style={{
                flex:            1,
                padding:         DT.panelContentPad,
                overflowY:       'auto',
              }}>
                
                {/* If Section has Articles */}
                {currentSection.articles && (
                  <div style={{
                    display:             'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap:                 20,
                  }}>
                    {currentSection.articles.map(article => (
                      <ArticleCard key={article.link} article={article} onClose={onClose} />
                    ))}
                  </div>
                )}

                {/* If Section has Guides List */}
                {currentSection.guides && (
                  <div style={{
                    display:             'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns for guides
                    gap:                 '12px 24px',
                  }}>
                    {currentSection.guides.map(g => (
                      <Link
                        key={g.label}
                        to={g.link}
                        onClick={onClose}
                        className="wm-guide-link"
                        style={{
                          display:        'flex',
                          alignItems:     'center',
                          gap:             10,
                          padding:        '12px 16px',
                          borderRadius:   DT.itemRadius,
                          textDecoration: 'none',
                          border:         `1px solid ${B.primaryBorder}`,
                          background:     '#fff',
                          fontFamily:     "'Plus Jakarta Sans', sans-serif",
                          fontSize:       DT.itemSize,
                          fontWeight:     500,
                          color:          B.textMid,
                          transition:     'all 0.15s',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = B.primaryLight;
                            e.target.style.borderColor = B.primaryMid;
                            e.target.style.color = B.primaryMid;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = '#fff';
                            e.target.style.borderColor = B.primaryBorder;
                            e.target.style.color = B.textMid;
                        }}
                      >
                        <ExternalLink size={14} style={{ flexShrink: 0, color: B.textMuted }} />
                        {g.label}
                      </Link>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}