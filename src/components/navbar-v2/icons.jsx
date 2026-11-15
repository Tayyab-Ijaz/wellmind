const P = {
  ml: <><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="12" r="2.4" /><path d="M8 6.8 15.8 11M8 17.2 15.8 13M6 8v8" /></>,
  analytics: <><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
  'ai-software': <path d="m9 8-4 4 4 4M15 8l4 4-4 4M13 6l-2 12" />,
  automation: <><path d="M20 12a8 8 0 1 1-2.5-5.8" /><path d="M20 4v4.5h-4.5" /></>,
  'health-ai': <><path d="M8 3c0 4.5 8 4.5 8 9s-8 4.5-8 9" /><path d="M16 3c0 4.5-8 4.5-8 9s8 4.5 8 9" /><path d="M9 6.5h6M9 17.5h6" /></>,
  uiux: <><rect x="3.5" y="4.5" width="17" height="15" rx="2.5" /><path d="M3.5 9h17M9 9v10.5" /></>,
  finance: <path d="M3 9.5 12 4l9 5.5M5 10v7M9.5 10v7M14.5 10v7M19 10v7M3.5 20h17" />,
  healthcare: <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />,
  retail: <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></>,
  manufacturing: <path d="M3.5 20h17V5h-5v8.5l-6-3.5v3.5l-6-3.5z" />,
  agri: <><path d="M12 20v-9" /><path d="M12 11c0-4 3-6 7-6 0 4-3 6-7 6Z" /><path d="M12 14c0-3-2.5-4.5-6-4.5 0 3 2.5 4.5 6 4.5Z" /></>,
  edu: <><path d="m2.5 9.5 9.5-5 9.5 5-9.5 5z" /><path d="M6.5 12v4.5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V12" /></>,
  doc: <><path d="M7 3.5h7l4 4V20.5H7z" /><path d="M14 3.5V8h4M9.5 12h6M9.5 15.5h6" /></>,
};

export function Icon({ id }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[id] || P.doc}
    </svg>
  );
}

/** Decorative abstract art for project cards (no data claims). */
export function Thumb({ kind }) {
  if (kind === 'analytics') {
    const h = [30, 46, 38, 62, 52];
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true" className="thumb">
        <path d="M14 78h68" stroke="#cfcfcf" strokeWidth="1.5" />
        {h.map((v, i) => (
          <rect key={i} className="b" x={16 + i * 14} y={78 - v} width="9" height={v} rx="2" fill={i === 4 ? 'var(--nb-accent-ink)' : '#0a0a0a'} opacity={i === 4 ? 1 : 0.85} />
        ))}
        <path d="M20 54 34 44 48 50 62 30 76 36" stroke="#9a9a9a" strokeWidth="1.4" strokeDasharray="3 3" fill="none" />
      </svg>
    );
  }
  const L1 = [[22, 28], [22, 48], [22, 68]];
  const L2 = [[48, 36], [48, 60]];
  const out = [74, 48];
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="thumb">
      {L1.flatMap((a, i) => L2.map((b, j) => <path key={`${i}${j}`} d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`} stroke="#c4c4c4" strokeWidth="1.2" />))}
      {L2.map((b, i) => <path key={`o${i}`} d={`M${b[0]} ${b[1]}L${out[0]} ${out[1]}`} stroke="#c4c4c4" strokeWidth="1.2" />)}
      {[...L1, ...L2].map((n, i) => <circle key={i} cx={n[0]} cy={n[1]} r="5" fill="#0a0a0a" />)}
      <circle cx={out[0]} cy={out[1]} r="7" fill="var(--nb-accent-ink)" />
    </svg>
  );
}
