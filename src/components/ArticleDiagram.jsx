/**
 * ArticleDiagram.jsx — the infographic shown at the top of each resource article.
 * Specs live in data/articles/diagrams.js. Pure HTML/CSS so it stays sharp and reflows on phones.
 */
import React from 'react';

const CSS = `
.ig{margin:0;padding:clamp(18px,3vw,32px);border-radius:24px;background:#fff;border:1px solid rgba(0,0,0,.1);box-shadow:0 18px 40px -26px rgba(0,0,0,.3)}
.ig-eyebrow{display:block;margin-bottom:6px;font:700 var(--fs-label)/1 'Space Grotesk',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#777;text-align:left}
.ig-title{margin:0 0 4px;font-family:'Space Grotesk',sans-serif;font-weight:800;font-size:var(--fs-h3);letter-spacing:-.015em;color:#0b0b0b;text-align:left}
.ig-cap{margin:0 0 clamp(16px,2.4vw,26px);font-size:var(--fs-card-body);line-height:1.6;color:#555;text-align:left}
.ig-lane+.ig-lane{margin-top:clamp(18px,2.4vw,28px)}
.ig-lane-label{margin-bottom:10px;font:700 var(--fs-label)/1 'Space Grotesk',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#444;text-align:left}
.ig-flow{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:16px;margin:0;padding:0;list-style:none}
.ig-node{position:relative;padding:14px 12px 16px;border-radius:16px;background:#f5f5f5;border:1px solid rgba(0,0,0,.1);text-align:left;min-width:0}
.ig-node:not(:last-child)::after{content:"";position:absolute;top:50%;right:-12px;width:8px;height:8px;border-top:2.5px solid #0b0b0b;border-right:2.5px solid #0b0b0b;transform:translateY(-50%) rotate(45deg)}
.ig-num{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;margin-bottom:10px;border-radius:50%;background:#0b0b0b;color:#fff;font:700 12px/1 'Space Grotesk',sans-serif}
.ig-node b{display:block;margin-bottom:3px;font-size:var(--fs-card-body);line-height:1.25;color:#0b0b0b;overflow-wrap:anywhere}
.ig-node span.d{display:block;font-size:var(--fs-small);line-height:1.4;color:#555;overflow-wrap:anywhere}
.ig-node em{display:inline-block;margin-top:9px;padding:3px 8px;border-radius:999px;background:#0b0b0b;color:#fff;font:600 11px/1.2 'Space Grotesk',sans-serif;font-style:normal;letter-spacing:.03em}
.ig-note{margin-top:14px;display:flex;align-items:center;gap:10px;font-size:var(--fs-small);font-weight:600;color:#444}
.ig-note i{flex:1;height:2px;background:linear-gradient(90deg,#d6d6d6,#0b0b0b);border-radius:2px}
.ig-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch}
.ig-table{width:100%;min-width:520px;border-collapse:separate;border-spacing:0;text-align:left}
.ig-table th,.ig-table td{padding:12px 14px;font-size:var(--fs-card-body);line-height:1.4;border-bottom:1px solid rgba(0,0,0,.08);text-align:left;vertical-align:top}
.ig-table thead th{background:#0b0b0b;color:#fff;font-weight:700;border-bottom:0}
.ig-table thead th:first-child{border-radius:12px 0 0 12px}
.ig-table thead th:last-child{border-radius:0 12px 12px 0}
.ig-table tbody th{font-weight:700;color:#0b0b0b;white-space:nowrap}
.ig-table tbody td{color:#333}
.ig-table tbody tr:last-child th,.ig-table tbody tr:last-child td{border-bottom:0}
.ig-tiers{display:flex;flex-direction:column;gap:10px;margin:0;padding:0;list-style:none}
.ig-tier{padding:14px 18px;border-radius:14px;color:#fff;text-align:left;box-sizing:border-box}
.ig-tier b{display:block;font-size:var(--fs-card-body);line-height:1.25}
.ig-tier span{display:block;margin-top:2px;font-size:var(--fs-small);line-height:1.4;opacity:.78}
.ig-tiers--funnel .ig-tier{margin-left:auto;margin-right:auto;text-align:center}
.ig-tiers--funnel .ig-tier b,.ig-tiers--funnel .ig-tier span{text-align:center}
.ig-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:12px;margin:0;padding:0;list-style:none}
.ig-tile{display:flex;gap:12px;align-items:flex-start;padding:16px;border-radius:16px;background:#f5f5f5;border:1px solid rgba(0,0,0,.1);text-align:left}
.ig-tick{flex:none;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:#0b0b0b;color:#fff}
.ig-tile b{display:block;font-size:var(--fs-card-body);line-height:1.25;color:#0b0b0b}
.ig-tile span.d{display:block;margin-top:3px;font-size:var(--fs-small);line-height:1.4;color:#555}
.ig-bars{display:flex;flex-direction:column;gap:10px}
.ig-brow{display:grid;grid-template-columns:minmax(120px,38%) minmax(0,1fr);gap:14px;align-items:center}
.ig-brow>span{font-size:var(--fs-card-body);line-height:1.3;color:#222;text-align:right}
.ig-btrack{position:relative;height:26px}
.ig-btrack::before{content:"";position:absolute;left:50%;top:-4px;bottom:-4px;width:2px;background:rgba(0,0,0,.18)}
.ig-bbar{position:absolute;top:0;bottom:0;border-radius:8px}
.ig-bbar--up{left:50%;background:#0b0b0b}
.ig-bbar--down{right:50%;background:#9a9a9a}
.ig-legend{display:grid;grid-template-columns:minmax(120px,38%) minmax(0,1fr);gap:14px;margin-top:6px;font:600 var(--fs-label)/1.3 'Space Grotesk',sans-serif;color:#555}
.ig-legend div{display:flex;justify-content:space-between;gap:10px}
@media (max-width:900px){
  .ig-flow{grid-template-columns:minmax(0,1fr);gap:0}
  .ig-node{display:grid;grid-template-columns:34px minmax(0,1fr);column-gap:12px;align-items:start;border-radius:14px;margin-bottom:22px;padding:12px 14px}
  .ig-node:last-child{margin-bottom:0}
  .ig-num{margin:0;grid-row:span 3}
  .ig-node em{justify-self:start}
  .ig-node:not(:last-child)::after{top:auto;bottom:-17px;right:auto;left:26px;transform:rotate(135deg)}
}
@media (max-width:560px){.ig-brow,.ig-legend{grid-template-columns:minmax(0,1fr)}.ig-brow>span{text-align:left}}
`;

const shade = (i, n) => {                      // dark → lighter greys for tier bars
  const v = Math.round(14 + (i / Math.max(1, n - 1)) * 58);
  return `rgb(${v},${v},${v + 2})`;
};

function Flow({ d }) {
  return d.lanes.map((lane, li) => (
    <div className="ig-lane" key={li}>
      {lane.label && <div className="ig-lane-label">{lane.label}</div>}
      <ol className="ig-flow" style={{ '--n': lane.nodes.length }}>
        {lane.nodes.map(([t, desc, flag], i) => (
          <li className="ig-node" key={t}>
            <span className="ig-num">{i + 1}</span>
            <b>{t}</b>
            {desc && <span className="d">{desc}</span>}
            {flag && <em>{flag}</em>}
          </li>
        ))}
      </ol>
    </div>
  )).concat(d.note ? [<div className="ig-note" key="note"><span>{d.note}</span><i /></div>] : []);
}

function Compare({ d }) {
  return (
    <div className="ig-scroll">
      <table className="ig-table">
        <thead><tr><th scope="col"><span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Criterion</span></th>{d.columns.map((c) => <th scope="col" key={c}>{c}</th>)}</tr></thead>
        <tbody>
          {d.rows.map(([label, ...cells]) => (
            <tr key={label}><th scope="row">{label}</th>{cells.map((c, i) => <td key={i}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Tiers({ d }) {
  const n = d.items.length;
  const width = (i) => (d.shape === 'stairs' ? 46 + (i / (n - 1)) * 54 : d.shape === 'funnel' ? 100 - i * 14 : 100);
  return (
    <ul className={`ig-tiers ig-tiers--${d.shape}`}>
      {d.items.map(([t, desc], i) => (
        <li className="ig-tier" key={t} style={{ width: `${width(i)}%`, background: shade(d.shape === 'funnel' ? i : n - 1 - i, n) }}>
          <b>{t}</b><span>{desc}</span>
        </li>
      ))}
    </ul>
  );
}

function Tiles({ d }) {
  return (
    <ul className="ig-tiles">
      {d.tiles.map(([t, desc]) => (
        <li className="ig-tile" key={t}>
          <span className="ig-tick" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <div><b>{t}</b><span className="d">{desc}</span></div>
        </li>
      ))}
    </ul>
  );
}

function Bars({ d }) {
  return (
    <div className="ig-bars" role="img" aria-label={d.caption}>
      {d.items.map(([label, v]) => (
        <div className="ig-brow" key={label}>
          <span>{label}</span>
          <div className="ig-btrack"><i className={`ig-bbar ig-bbar--${v >= 0 ? 'up' : 'down'}`} style={{ width: `${Math.abs(v) * 50}%` }} /></div>
        </div>
      ))}
      <div className="ig-legend" aria-hidden="true"><span /><div><span>&larr; {d.left}</span><span>{d.right} &rarr;</span></div></div>
    </div>
  );
}

const KINDS = { flow: Flow, compare: Compare, tiers: Tiers, grid: Tiles, bars: Bars };

export default function ArticleDiagram({ diagram }) {
  if (!diagram) return null;
  const Body = KINDS[diagram.kind];
  if (!Body) return null;
  return (
    <figure className="ig">
      <style>{CSS}</style>
      <figcaption>
        <span className="ig-eyebrow">At a glance</span>
        <h2 className="ig-title">{diagram.title}</h2>
        <p className="ig-cap">{diagram.caption}</p>
      </figcaption>
      <Body d={diagram} />
    </figure>
  );
}
