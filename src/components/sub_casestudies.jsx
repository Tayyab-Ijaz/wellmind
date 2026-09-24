/**
 * sub_casestudies.jsx — WellMind Data Solutions
 * CaseStudiesMegaMenu — Updated styles to match sub_services theme.
 * ✅ Agriculture & Education added to byIndustry
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { B, DT, OverlineLabel } from './theme_dropdown';

// ─── NAV DATA ─────────────────────────────────────────────────────────────────
const CASE_STUDIES_DATA = {
  byService: [
    { label: 'AI & Machine Learning', link: '/case-studies?service=ai-ml',         count: '9+' },
    { label: 'Data Analytics',        link: '/case-studies?service=data-analytics', count: '5+'  },
    { label: 'AI Software',           link: '/case-studies?service=ai-software',    count: '2+'  },
    { label: 'Automation',            link: '/case-studies?service=automation',     count: '3+'  },
    { label: 'Bioinformatics',        link: '/case-studies?service=bioinformatics', count: '1+'  },
    { label: 'UI/UX Design',          link: '/case-studies?service=ui-ux',          count: '0'  },
  ],

  // ✅ UPDATED: Agriculture + Education added
  byIndustry: [
    { label: 'Financial Services',    link: '/case-studies?industry=financial',     count: '5+' },
    { label: 'Healthcare & Biotech',  link: '/case-studies?industry=healthcare',    count: '7+' },
    { label: 'Retail & E-Commerce',   link: '/case-studies?industry=retail',        count: '5+'  },
    { label: 'Manufacturing',         link: '/case-studies?industry=manufacturing', count: '1+'  },
    { label: 'Agriculture & AgriTech',link: '/case-studies?industry=agriculture',   count: '1+'  },
    { label: 'Education & EdTech',    link: '/case-studies?industry=education',     count: '1+'  },
  ],

  featured: [
    {
      title:    'AR Prioritization & Underpayment Recovery Engine',
      tag:      'Data Analytics',
      industry: 'Healthcare',
      link:     '/case-studies/ar-prioritization-underpayment-recovery',
      metric:   '6.1M claims analyzed',
      desc:     'LightGBM classifier + live dashboard flagging underpaid Medicare claims from public CMS data.',
    },
    {
      title:    'Telecom Customer Churn Prediction',
      tag:      'AI & Machine Learning',
      industry: 'Retail',
      link:     '/case-studies/telecom-churn-prediction',
      metric:   '86.4% accuracy',
      desc:     'Random Forest churn model with SHAP explainability, capturing 65%+ of churners in the top 20% risk band.',
    },
    {
      title:    'Healthcare Fraud Detection System',
      tag:      'AI & Machine Learning',
      industry: 'Healthcare',
      link:     '/case-studies/healthcare-fraud-detection-billing',
      metric:   '3,842 providers flagged',
      desc:     'Peer-benchmarking, anomaly detection, and OIG exclusion-list matching across 44,528 Medicare providers.',
    },
  ],
};

// ─── HELPER: filter row ───────────────────────────────────────────────────────
function FilterRow({ item, onClose }) {
  return (
    <Link
      to={item.link}
      onClick={onClose}
      className="wm-filter-row"
      style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        padding:        '10px 14px',
        borderRadius:   DT.itemRadius,
        textDecoration: 'none',
        fontFamily:     "'Plus Jakarta Sans', sans-serif",
        fontSize:       DT.itemSize,
        fontWeight:     500,
        color:          B.textMid,
        transition:     'all 0.16s',
        marginBottom:    2,
        border:         '1px solid transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background  = 'rgba(74,43,95,0.03)';
        e.currentTarget.style.borderColor = 'rgba(74,43,95,0.08)';
        e.currentTarget.style.color       = B.textMain;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background  = 'transparent';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color       = B.textMid;
      }}
    >
      <span>{item.label}</span>
      <span style={{
        fontWeight:   800,
        color:        B.primaryMid,
        fontSize:     11,
        background:   B.primaryLight,
        padding:      '3px 8px',
        borderRadius: DT.badgeRadius,
        border:       `1px solid ${B.primaryBorder}`,
      }}>
        {item.count}
      </span>
    </Link>
  );
}

// ─── HELPER: featured project card ───────────────────────────────────────────
function FeaturedCard({ cs, onClose }) {
  return (
    <Link
      to={cs.link}
      onClick={onClose}
      className="wm-cs-card"
      style={{
        display:        'flex',
        alignItems:     'stretch',
        textDecoration: 'none',
        border:         `1px solid ${B.primaryBorder}`,
        borderRadius:   DT.cardRadius,
        overflow:       'hidden',
        transition:     'all 0.2s ease',
        background:     '#fff',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = B.primaryMid;
        e.currentTarget.style.boxShadow   = '0 4px 12px rgba(74,43,95,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = B.primaryBorder;
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >

      <div style={{ flex: 1, padding: '18px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <span style={{
              fontFamily:   "'Plus Jakarta Sans', sans-serif",
              fontSize:      17,
              fontWeight:    700,
              color:         B.textMain,
              lineHeight:    1.4,
              display:       'block',
              marginBottom:  6,
            }}>
              {cs.title}
            </span>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize:    14,
              color:       B.textMuted,
              margin:      0,
              lineHeight:  1.5,
            }}>
              {cs.desc}
            </p>
          </div>

          {/* Metric */}
          <div style={{ flexShrink: 0, textAlign: 'right' }}>
            <div style={{
              fontFamily:    "'Plus Jakarta Sans', sans-serif",
              fontSize:       17,
              fontWeight:     800,
              color:         B.action,
              letterSpacing: '-0.02em',
              lineHeight:     1,
            }}>
              {cs.metric}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <span style={{
            fontSize:      DT.overlineSize,
            fontWeight:    700,
            padding:       '3px 9px',
            borderRadius:  4,
            background:    B.primaryLight,
            color:         B.primaryMid,
            border:        `1px solid ${B.primaryBorder}`,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            {cs.tag}
          </span>
          <span style={{
            fontSize:      DT.overlineSize,
            fontWeight:    600,
            padding:       '3px 9px',
            borderRadius:  4,
            background:    '#F0FAFB',
            color:         B.action,
            border:        `1px solid rgba(11, 124, 147,0.15)`,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            {cs.industry}
          </span>
        </div>
      </div>

      {/* Arrow */}
      <div style={{
        width:          36,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        flexShrink:     0,
        borderLeft:     `1px solid ${B.primaryBorder}`,
        color:          B.textMuted,
        opacity:         0.4,
      }}>
        <ArrowRight size={15} />
      </div>
    </Link>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function CaseStudiesMegaMenu({ onClose }) {
  const cfg = CASE_STUDIES_DATA;

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: DT.minHeight }}>

      {/* ── Left: filter columns ──────────────────────────────────────────── */}
      <div style={{
        width:         520,           // slightly wider to fit 6 industry rows comfortably
        flexShrink:    0,
        borderRight:   `1px solid ${B.primaryBorder}`,
        paddingTop:    28,
        paddingBottom: 28,
        paddingRight:  32,
        paddingLeft:   DT.leftPadInline,
        background:    'rgba(74,43,95,0.015)',
        display:       'flex',
        flexDirection: 'column',
        gap:            0,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 28px' }}>

          {/* By Service */}
          <div>
            <OverlineLabel style={{ marginBottom: 12, paddingLeft: 4 }}>Filter by Service</OverlineLabel>
            {cfg.byService.map(item => (
              <FilterRow key={item.label} item={item} onClose={onClose} />
            ))}
          </div>

          {/* By Industry — now 6 items */}
          <div>
            <OverlineLabel style={{ marginBottom: 12, paddingLeft: 4 }}>Filter by Industry</OverlineLabel>
            {cfg.byIndustry.map(item => (
              <FilterRow key={item.label} item={item} onClose={onClose} />
            ))}

            <div style={{
              marginTop:  20,
              paddingTop: 18,
              borderTop:  `1px solid ${B.primaryBorder}`,
            }}>
              <Link
                to="/case-studies"
                onClick={onClose}
                style={{
                  fontSize:       DT.ctaSize,
                  fontWeight:     700,
                  color:          B.action,
                  textDecoration: 'none',
                  display:        'flex',
                  alignItems:     'center',
                  gap:             6,
                  fontFamily:     "'Plus Jakarta Sans', sans-serif",
                }}
              >
                View All Case Studies <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Right: featured projects ──────────────────────────────────────── */}
      <div style={{
        flex:          1,
        padding:       '28px 36px',
        background:    '#fff',
        display:       'flex',
        flexDirection: 'column',
      }}>
        <OverlineLabel style={{ marginBottom: 18, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: B.textMuted, fontWeight: 700 }}>
          Featured Projects
        </OverlineLabel>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {cfg.featured.map(cs => (
            <FeaturedCard key={cs.title} cs={cs} onClose={onClose} />
          ))}
        </div>
      </div>

    </div>
  );
}