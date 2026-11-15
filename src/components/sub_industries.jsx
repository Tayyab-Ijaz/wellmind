/**
 * sub_industries.jsx — WellMind Data Solutions
 * IndustriesMegaMenu — pill buttons for the six main industries.
 */

import React from 'react';
import PillMenu from './PillMenu';

const INDUSTRIES_DATA = {
  sections: [
    {
      id:      'fin',
      heading: 'Financial Services',
      tagline: 'AI-powered risk management and intelligent compliance.',
      link:    '/industry-financial-service',
    },
    {
      id:      'health',
      heading: 'Healthcare & Biotech',
      tagline: 'AI-powered revenue cycle management and clinical intelligence.',
      link:    '/industry-healthcare',
    },
    {
      id:      'retail',
      heading: 'Retail & E-Commerce',
      tagline: 'AI-driven demand forecasting and operational intelligence.',
      link:    '/industry-retail-ecommerce',
    },
    {
      id:      'mfg',
      heading: 'Manufacturing',
      tagline: 'Predictive risk monitoring across the supply chain.',
      link:    '/industry-manufacturing',
    },
    {
      id:      'agri',
      heading: 'Agriculture & AgriTech',
      tagline: 'Precision agriculture driven by AI and Earth observation.',
      link:    '/industry-agriculture',
    },
    {
      id:      'edu',
      heading: 'Education & EdTech',
      tagline: 'Personalised learning powered by adaptive AI.',
      link:    '/industry-education',
    },
  ],
};

export default function IndustriesMegaMenu({ onClose }) {
  return (
    <PillMenu
      label="Our Industries"
      items={INDUSTRIES_DATA.sections}
      viewAll={{ to: '/industries', label: 'View all industries' }}
      onClose={onClose}
    />
  );
}
