/**
 * AI-core-animation.jsx
 * Reusable component for AI Core Orbit Animation — Fully Responsive
 */
import React from 'react';
import AICORE from '../../assets/AI-CORE-icon.webp';

export default function AiCoreDiagram() {
  const colors = {
    action:   '#0B7C93',
    accent:   '#C88A46',
    white:    '#FFFFFF',
    textMain: '#2A313C',
  };
  const cx = 300, cy = 300;
  const orbits = [
    { r: 240, reverse: false, dur: 18, dotColor: colors.action, label: 'NLP',       labelColor: colors.action },
    { r: 188, reverse: true,  dur: 23, dotColor: colors.accent, label: 'Vision',    labelColor: colors.accent },
    { r: 138, reverse: false, dur: 28, dotColor: colors.action, label: 'Analytics', labelColor: colors.action },
    { r:  88, reverse: true,  dur: 33, dotColor: colors.accent, label: 'AutoML',    labelColor: colors.accent },
  ];

  return (
    <>
      <style>{`
        .aicore-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* 1440px — full size */
        .aicore-wrapper { height: 520px; }

        /* 1024px */
        @media (max-width: 1024px) {
          .aicore-wrapper { height: 400px; }
        }
        /* 768px */
        @media (max-width: 768px) {
          .aicore-wrapper { height: 320px; }
        }
        /* 425px */
        @media (max-width: 425px) {
          .aicore-wrapper { height: 280px; }
        }
        /* 320px */
        @media (max-width: 320px) {
          .aicore-wrapper { height: 240px; }
        }
      `}</style>
      <div className="aicore-wrapper">
        <svg
          viewBox="0 0 600 600"
          width="100%"
          height="100%"
          style={{ overflow: 'visible', display: 'block' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {orbits.map((o, i) => (
              <React.Fragment key={i}>
                <path id={`orbitPath${i}`} d={`M ${cx},${cy - o.r} a ${o.r},${o.r} 0 1,1 -0.01,0`} fill="none" />
                <path id={`orbitPathRev${i}`} d={`M ${cx},${cy + o.r} a ${o.r},${o.r} 0 1,0 -0.01,0`} fill="none" />
              </React.Fragment>
            ))}
            <filter id="pillShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.10)" />
            </filter>
          </defs>

          {orbits.map((o, i) => (
            <circle
              key={i}
              cx={cx} cy={cy} r={o.r}
              fill="none"
              stroke={i % 2 === 0 ? 'rgba(11, 124, 147,0.28)' : 'rgba(200, 138, 70,0.22)'}
              strokeWidth="1.5"
            />
          ))}

          {orbits.map((o, i) => {
            const pathId = o.reverse ? `orbitPathRev${i}` : `orbitPath${i}`;
            return (
              <g key={i}>
                <circle r="7" fill={o.dotColor}>
                  <animateMotion dur={`${o.dur}s`} repeatCount="indefinite" rotate="0">
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </circle>
                <circle r="13" fill="none" stroke={o.dotColor} strokeWidth="1.5" opacity="0.3">
                  <animateMotion dur={`${o.dur}s`} repeatCount="indefinite" rotate="0">
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </circle>
                <g>
                  <animateMotion dur={`${o.dur}s`} repeatCount="indefinite" rotate="0">
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                  <rect x="-46" y="-44" width="92" height="30" rx="15"
                    fill={colors.white} stroke={o.labelColor} strokeWidth="1.5"
                    strokeOpacity="0.4" filter="url(#pillShadow)" />
                  <text x="0" y="-23" textAnchor="middle"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="15" fontWeight="700" fill={colors.textMain}>
                    {o.label}
                  </text>
                </g>
              </g>
            );
          })}

          <image
            href={AICORE}
            x={cx - 160} y={cy - 160}
            width="320" height="320"
            preserveAspectRatio="xMidYMid meet"
          />
          <text x={cx} y={cy + 76} textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="16" fontWeight="800" fill={colors.action} letterSpacing="1">
            AI CORE
          </text>
        </svg>
      </div>
    </>
  );
}