/**
 * sub_industries.jsx — WellMind Data Solutions
 * IndustriesMegaMenu — left nav + capabilities grid + stats strip.
 * Imports all styling from theme_dropdown.jsx.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import {
  B, DT,
  panelVariants,
  OverlineLabel, PanelHeading,
  LeftPanel, RightStrip,
} from './theme_dropdown';

// ─── NAV DATA ─────────────────────────────────────────────────────────────────
const INDUSTRIES_DATA = {
  sections: [
    {
      id:      'fin',
      heading: 'Financial Services',
      tagline: 'AI-powered risk management and intelligent compliance.',
      link:    '/industry-financial-service',
      stat:    { value: '5', label: 'Real-World Projects' },
      capabilities: [
        { label: 'Insurance Risk Scoring', link: '/case-studies/insurance-risk-scoring' },
        { label: 'Automated Invoice Extraction', link: '/case-studies/accounts-payable-invoice-extraction' },
        { label: 'Real-Time Fraud Detection', link: '/case-studies/real-time-fraud-detection' },
        { label: 'Policy Document Classification', link: '/case-studies/insurance-policy-document-classification' },
        { label: 'Regulatory Form Automation (RPA)', link: '/case-studies/regulatory-form-auto-completion' },
      ],
    },
    {
      id:      'health',
      heading: 'Healthcare & Biotech',
      tagline: 'AI-powered revenue cycle management and clinical intelligence.',
      link:    '/industry-healthcare',
      stat:    { value: '7', label: 'Real-World Projects' },
      capabilities: [
        { label: 'ICD-10 & CPT Coding Automation', link: '/case-studies/icd10-cpt-coding-engine' },
        { label: 'Underpayment Recovery (AR)', link: '/case-studies/ar-prioritization-underpayment-recovery' },
        { label: 'Claim Denial Prediction', link: '/case-studies/claim-denial-prediction' },
        { label: 'Prior Authorization Forecasting', link: '/case-studies/rcm-prior-authorization-intelligence' },
        { label: 'Clinical NLP & Record Structuring', link: '/case-studies/ehr-clinical-nlp-automation' },
        { label: 'Single-Cell RNA-seq Analysis', link: '/case-studies/single-cell-rnaseq-automation' },
        { label: 'Medicare Fraud Detection', link: '/case-studies/healthcare-fraud-detection-billing' },
      ],
    },
    {
      id:      'retail',
      heading: 'Retail & E-Commerce',
      tagline: 'AI-driven demand forecasting and operational intelligence.',
      link:    '/industry-retail-ecommerce',
      stat:    { value: '5', label: 'Real-World Projects' },
      capabilities: [
        { label: 'Conversational BI Analytics', link: '/case-studies/conversational-analytics-platform' },
        { label: 'Multi-Branch Ops & Fraud Detection', link: '/case-studies/restaurant-command-center' },
        { label: 'Customer Churn Prediction', link: '/case-studies/telecom-churn-prediction' },
        { label: 'Demand Forecasting', link: '/case-studies/retail-demand-forecasting' },
        { label: 'Email-to-Order Automation', link: '/case-studies/email-order-intake-system' },
      ],
    },
    {
      id:      'mfg',
      heading: 'Manufacturing',
      tagline: 'Predictive risk monitoring across the supply chain.',
      link:    '/industry-manufacturing',
      stat:    { value: '1', label: 'Real-World Project' },
      capabilities: [
        { label: 'Supply Chain Disruption Alerts', link: '/case-studies/supplyguard-disruption-alerts' },
        { label: 'Operational Risk Scoring', link: '/case-studies/supplyguard-disruption-alerts' },
        { label: 'Environmental Risk Monitoring', link: '/case-studies/supplyguard-disruption-alerts' },
      ],
    },
    {
      id:      'agri',
      heading: 'Agriculture & AgriTech',
      tagline: 'Precision agriculture driven by AI and Earth observation.',
      link:    '/industry-agriculture',
      stat:    { value: '1', label: 'Real-World Project' },
      capabilities: [
        { label: 'Satellite & Weather Data Fusion', link: '/case-studies/satellite-weather-crop-yield' },
        { label: 'Vegetation Index Analysis (NDVI/EVI)', link: '/case-studies/satellite-weather-crop-yield' },
        { label: 'Crop Yield Prediction', link: '/case-studies/satellite-weather-crop-yield' },
      ],
    },
    {
      id:      'edu',
      heading: 'Education & EdTech',
      tagline: 'Personalised learning powered by adaptive AI.',
      link:    '/industry-education',
      stat:    { value: '1', label: 'Real-World Project' },
      capabilities: [
        { label: 'Per-Skill Mastery Tracking', link: '/case-studies/adaptive-learning-engine' },
        { label: 'Real-Time Difficulty Adjustment', link: '/case-studies/adaptive-learning-engine' },
        { label: 'Prerequisite Gap Detection', link: '/case-studies/adaptive-learning-engine' },
      ],
    },
  ],
};

// ─── REACH STATS ──────────────────────────────────────────────────────────────
const REACH_STATS = [
  { value: '5+',  label: 'Countries' },
  { value: '20',  label: 'Projects Delivered' },
  { value: '6',   label: 'Industries Served' },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function IndustriesMegaMenu({ onClose }) {
  const [activeId, setActiveId] = useState(INDUSTRIES_DATA.sections[0].id);
  const currentSection = INDUSTRIES_DATA.sections.find(s => s.id === activeId);

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: DT.minHeight }}>

      {/* ── Left: industry list ───────────────────────────────────────────── */}
      <LeftPanel>
        <OverlineLabel style={{
          paddingTop:    14,
          paddingBottom: 10,
          paddingRight:  20,
          paddingLeft:   DT.leftPadInline,
        }}>
          Industries Served
        </OverlineLabel>

        {INDUSTRIES_DATA.sections.map(section => (
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
              paddingRight:   20,
              paddingLeft:    DT.leftPadInline,
              background:     activeId === section.id
                ? `linear-gradient(90deg, rgba(74,43,95,0.10) 0%, rgba(74,43,95,0.03) 100%)`
                : 'transparent',
              borderLeft:   `3px solid ${activeId === section.id ? B.primaryMid : 'transparent'}`,
              borderTop:    'none',
              borderRight:  'none',
              borderBottom: 'none',
              cursor:       'pointer',
              transition:   'all 0.15s',
              textAlign:    'left',
              width:        '100%',
              gap:           8,
            }}
          >
            <div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize:   18,
                fontWeight: activeId === section.id ? 700 : 500,
                color:      activeId === section.id ? B.primaryMid : B.textMid,
                lineHeight: 1.3,
                transition: 'all 0.15s',
              }}>
                {section.heading}
              </div>
              <div style={{
                fontSize:   DT.smallLabelSize,
                color:      B.action,
                marginTop:  2,
                
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                {section.stat.value} {section.stat.label}
              </div>
            </div>
            {activeId === section.id && (
              <ArrowRight size={13} style={{ flexShrink: 0, color: B.primaryMid, opacity: 0.7 }} />
            )}
          </button>
        ))}
      </LeftPanel>

      {/* ── Center: capabilities grid ─────────────────────────────────────── */}
      <div style={{ flex: 1, background: '#fff', overflow: 'hidden' }}>
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
                padding:        DT.panelHeaderPad,
                borderBottom:   `1px solid ${B.primaryBorder}`,
                display:        'flex',
                alignItems:     'flex-start',
                justifyContent: 'space-between',
                gap:             20,
                background:     `linear-gradient(135deg, rgba(74,43,95,0.03) 0%, rgba(255,255,255,0) 60%)`,
              }}>
                <div style={{ flex: 1 }}>
                  {/* Industry pill */}
                  <div style={{
                    display:      'inline-flex',
                    alignItems:   'center',
                    gap:           6,
                    padding:      '3px 10px',
                    borderRadius: DT.badgeRadius,
                    background:   B.primaryLight,
                    border:       `1px solid ${B.primaryBorder}`,
                    marginBottom: 8,
                  }}>
                    <span style={{
                      fontSize:      DT.overlineSize,
                      fontWeight:    800,
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                      color:         B.primaryMid,
                      fontFamily:    "'Plus Jakarta Sans', sans-serif",
                    }}>Industry</span>
                  </div>
                  <PanelHeading heading={currentSection.heading} tagline={currentSection.tagline} />
                </div>

                {/* Stat block */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                  <div style={{
                    fontSize:      28,
                    fontWeight:    900,
                    color:         B.primaryMid,
                    lineHeight:    1,
                    fontFamily:    "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: '-0.02em',
                  }}>
                    {currentSection.stat.value}
                  </div>
                  <div style={{
                    fontSize:   DT.smallLabelSize,
                    color:      B.textMuted,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    textAlign:  'right',
                  }}>
                    {currentSection.stat.label}
                  </div>
                </div>
              </div>

              {/* Capabilities 2-col grid */}
              <div style={{
                flex:                1,
                padding:             '22px 36px 28px',
                display:             'grid',
                gridTemplateColumns: '1fr 1fr',
                gap:                  6,
                alignContent:        'start',
              }}>
                <OverlineLabel style={{
                  gridColumn:   '1 / -1',
                  marginBottom:  6,
                  opacity:       0.55,
                }}>
                  Key Capabilities
                </OverlineLabel>

                {currentSection.capabilities.map(cap => (
                  <Link
                    key={cap.label}
                    to={cap.link}
                    onClick={onClose}
                    className="wm-cap-link"
                    style={{
                      display:        'flex',
                      alignItems:     'center',
                      gap:             10,
                      padding:        '10px 14px',
                      borderRadius:   DT.chipRadius,
                      textDecoration: 'none',
                      border:         `1px solid ${DT.thinBorder}`,
                      background:     'rgba(74,43,95,0.025)',
                      transition:     'all 0.16s',
                    }}
                  >
                    <div style={{
                      width:        DT.capDotSize,
                      height:       DT.capDotSize,
                      borderRadius: '50%',
                      background:   B.primaryMid,
                      opacity:       0.5,
                      flexShrink:    0,
                    }} />
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize:   DT.itemSize,
                      fontWeight: 500,
                      color:      B.textMain,
                      lineHeight: 1.3,
                    }}>
                      {cap.label}
                    </span>
                  </Link>
                ))}

                {/* Explore link */}
                <div style={{ gridColumn: '1 / -1', marginTop: 12 }}>
                  <Link
                    to={currentSection.link}
                    onClick={onClose}
                    style={{
                      fontSize:       DT.ctaSize,
                      fontWeight:     700,
                      color:          B.action,
                      textDecoration: 'none',
                      display:        'inline-flex',
                      alignItems:     'center',
                      gap:             5,
                    }}
                  >
                    Explore {currentSection.heading} Solutions <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}