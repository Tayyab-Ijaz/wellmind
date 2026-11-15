import React from 'react';
import PillMenu from './PillMenu';

const SERVICES = [
  {
    id: 'ai-ml',
    heading: 'AI & Machine Learning',
    tagline: 'End-to-end ML pipelines from data to production.',
    link: '/services-ai-ml',
    accentColor: '#373737',
    description: 'Explore machine learning, language, vision, and generative AI capabilities in one service area.',
  },
  {
    id: 'data',
    heading: 'Data Science & Analytics',
    tagline: 'Transform raw data into competitive intelligence.',
    link: '/services-data-analytics',
    accentColor: '#545454',
    description: 'Build a trusted data foundation and turn analysis into clear, actionable decisions.',
  },
  {
    id: 'soft',
    heading: 'AI-Powered Software',
    tagline: 'Custom products with ML capabilities built into the core.',
    link: '/services-ai-software',
    accentColor: '#404040',
    description: 'Design, build, and deliver custom software products with intelligent features.',
  },
  {
    id: 'auto',
    heading: 'Automation & Workflows',
    tagline: 'Intelligent automation that eliminates manual operations.',
    link: '/services-automation',
    accentColor: '#646464',
    description: 'Connect systems and streamline repeatable workflows with practical automation.',
  },
  {
    id: 'design',
    heading: 'UI/UX & Digital Design',
    tagline: 'Human-centric interfaces for complex data-heavy products.',
    link: '/services-ui-ux',
    accentColor: '#464646',
    description: 'Create useful, accessible digital experiences for people and the work they do.',
  },
  {
    id: 'bio',
    heading: 'Bioinformatics & Health AI',
    tagline: 'Genomic pipelines, multi-omics analysis & clinical AI tools.',
    link: '/services-bioinformatics',
    accentColor: '#4b4b4b',
    description: 'Apply data science and AI to biological, clinical, and health research challenges.',
  },
];

export default function ServicesMegaMenu({ onClose }) {
  return (
    <PillMenu
      label="Our Services"
      items={SERVICES}
      viewAll={{ to: '/services', label: 'View all services' }}
      onClose={onClose}
    />
  );
}
