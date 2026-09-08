/**
 * theme_dropdown.jsx — WellMind Data Solutions
 * Central theme file for all mega-dropdown sub-components.
 * Import colors (B), layout tokens (DT), animation variants,
 * and shared micro-components from here.
 */

// ─── COLOR PALETTE ────────────────────────────────────────────────────────────
export const B = {
  primary:        '#6B2E74',
  primaryDark:    '#2C1636',
  primaryMid:     '#47234F',
  primaryLight:   'rgba(74,43,95,0.08)',
  secondary:      '#93213F',
  secondaryLight: '#8a1c3730',
  primaryBorder:  'rgba(74,43,95,0.12)',
  textMain:       '#1A0F2E',
  textMid:        'rgba(26,15,46,0.62)',
  textMuted:      'rgba(26, 15, 46, 0.67)',
  glass:          'rgba(255,255,255,0.85)',
  glassBorder:    'rgba(74,43,95,0.12)',
  action:         '#0B7C93',
  actionLight:    'rgba(11, 124, 147,0.08)',
  surface:        '#FAFAFA',
  surfaceHover:   'rgba(74,43,95,0.055)',
};

// ─── LAYOUT / SPACING TOKENS ──────────────────────────────────────────────────
export const DT = {
  // Panel dimensions
  leftPanelWidth:   'clamp(180px, 18vw, 260px)',
  rightStripWidth:  200,
  minHeight:        500,

  // Padding
  leftPadInline:    '5vw',
  panelHeaderPad:   '28px 36px 22px',
  panelContentPad:  '24px 36px 28px',
  leftPanelPadR:    20,
  rightStripPadX:   20,
  rightStripPadY:   28,

  // Typography scale
  pillsize:         11,
  overlineSize:     13,
  headingSize:      20,
  taglineSize:      17,
  itemSize:         15,
  smallLabelSize:   16,
  chipSize:         12.5,
  ctaSize:          15,

  // Shape
  itemRadius:       7,
  cardRadius:       10,
  chipRadius:       8,
  badgeRadius:      99,
  dotSize:          6,
  capDotSize:       5,
  accentBarWidth:   4,
  accentBarHeight:  16,

  // Borders
  subtleBorder:     'rgba(74,43,95,0.07)',
  thinBorder:       'rgba(74,43,95,0.09)',
};

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
export const dropdownVariants = {
  hidden:  { opacity: 0, y: -14, scaleY: 0.97, transformOrigin: 'top center' },
  visible: {
    opacity: 1, y: 0, scaleY: 1, transformOrigin: 'top center',
    transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
  },
  exit:    {
    opacity: 0, y: -8, scaleY: 0.97, transformOrigin: 'top center',
    transition: { duration: 0.16 },
  },
};

export const panelVariants = {
  hidden:  { opacity: 0, x: 14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, x: -8, transition: { duration: 0.12 } },
};

export const drawerVariants = {
  hidden:  { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 32 } },
  exit:    { x: '100%', transition: { duration: 0.22 } },
};

// ─── SHARED MICRO-COMPONENTS ──────────────────────────────────────────────────

/** Uppercase overline label used as section heading */
export function OverlineLabel({ children, style = {} }) {
  return (
    <div style={{
      fontSize:      DT.overlineSize,
      fontWeight:    800,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color:         B.primaryMid,
      opacity:       0.55,
      fontFamily:    "'Plus Jakarta Sans', sans-serif",
      ...style,
    }}>
      {children}
    </div>
  );
}

/** Small coloured dot — used in pill badge or before items */
export function AccentDot({ color, size = DT.dotSize, style = {} }) {
  return (
    <div style={{
      width:        size,
      height:       size,
      borderRadius: '50%',
      background:   color || B.primaryMid,
      flexShrink:   0,
      ...style,
    }} />
  );
}

/** Pill badge — "Service" / "Industry" tag in panel headers */
export function PillBadge({ label, accentColor, style = {} }) {
  return (
    <div style={{
      display:      'inline-flex',
      alignItems:   'center',
      gap:          6,
      padding:      '3px 10px',
      borderRadius: DT.badgeRadius,
      background:   B.primaryLight,
      border:       `1px solid ${B.primaryBorder}`,
      marginBottom: 8,
      ...style,
    }}>
      <AccentDot color={accentColor || B.primaryMid} />
      <span style={{
        fontSize:      DT.pillsize,
        fontWeight:    800,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        color:         B.primaryMid,
        fontFamily:    "'Plus Jakarta Sans', sans-serif",
      }}>
        {label}
      </span>
    </div>
  );
}

/** Panel heading + tagline block */
export function PanelHeading({ heading, tagline }) {
  return (
    <div style={{ flex: 1 }}>
      <h3 style={{
        fontFamily:    "'Plus Jakarta Sans', sans-serif",
        fontWeight:    800,
        fontSize:      DT.headingSize,
        color:         B.primaryDark,
        margin:        0,
        letterSpacing: '-0.02em',
        lineHeight:    1.2,
      }}>
        {heading}
      </h3>
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize:   DT.taglineSize,
        color:      B.textMid,
        margin:     '6px 0 0',
        lineHeight: 1.6,
      }}>
        {tagline}
      </p>
    </div>
  );
}

/** Left panel wrapper — purple-tinted sidebar */
export function LeftPanel({ children, style = {} }) {
  return (
    <div style={{
      width:          '30vw',
      flexShrink:     0,
      borderRight:    `1px solid ${B.primaryBorder}`,
      display:        'flex',
      flexDirection:  'column',
      paddingTop:     8,
      paddingBottom:  20,
      background:     'rgba(74,43,95,0.022)',
      ...style,
    }}>
      {children}
    </div>
  );
}

/** Right strip wrapper — stats / CTA column */
export function RightStrip({ children, style = {} }) {
  return (
    <div style={{
      width:          DT.rightStripWidth,
      flexShrink:     0,
      borderLeft:     `1px solid ${B.primaryBorder}`,
      padding:        `${DT.rightStripPadY}px ${DT.rightStripPadX}px`,
      background:     `linear-gradient(180deg, rgba(74,43,95,0.04) 0%, rgba(74,43,95,0.015) 100%)`,
      display:        'flex',
      flexDirection:  'column',
      ...style,
    }}>
      {children}
    </div>
  );
}

/** Thin horizontal rule */
export function Divider({ style = {} }) {
  return (
    <div style={{
      height:     1,
      width:      '100%',
      background: B.primaryBorder,
      flexShrink: 0,
      ...style,
    }} />
  );
}

/** "Explore →" or "View All →" text link */
export function TextLink({ to, onClick, children, color, style = {} }) {
  // We export a raw <a> fallback so sub-files can swap Link from react-router
  return { to, onClick, children, color: color || B.action, style };
}