import { useEffect, useMemo, useRef, useState } from 'react';

const ORDER = ['Services', 'Industries', 'Case studies', 'Resources', 'Pages'];

export default function CommandPalette({ open, onClose, index, onSelect }) {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const input = useRef(null);
  const list = useRef(null);
  const prev = useRef(null);

  const groups = useMemo(() => {
    const terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const rows = index.filter((r) => terms.every((t) => (r.label + ' ' + (r.keywords || '')).toLowerCase().includes(t)));
    return ORDER.map((g) => ({ g, rows: rows.filter((r) => r.type === g) })).filter((x) => x.rows.length);
  }, [q, index]);
  const flat = groups.flatMap((x) => x.rows);
  const indexes = new Map(flat.map((row, index) => [row, index]));

  useEffect(() => {
    if (!open) return;
    prev.current = document.activeElement;
    document.documentElement.style.overflow = 'hidden';
    const id = requestAnimationFrame(() => input.current && input.current.focus());
    return () => {
      cancelAnimationFrame(id);
      document.documentElement.style.overflow = '';
      if (prev.current && prev.current.focus) prev.current.focus();
    };
  }, [open]);

  useEffect(() => {
    const el = list.current && list.current.querySelector('[aria-selected="true"]');
    if (el) el.scrollIntoView({ block: 'nearest' });
  }, [active]);

  if (!open) return null;

  const onKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (flat.length ? (a + 1) % flat.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (flat.length ? (a - 1 + flat.length) % flat.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (flat[active]) onSelect(flat[active]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'Tab') {
      e.preventDefault(); // focus trap: the input is the only tab stop
    }
  };

  return (
    <div className="cp" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cp__dialog" role="dialog" aria-modal="true" aria-label="Search" onKeyDown={onKey}>
        <input
          ref={input}
          className="cp__input"
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="cp-list"
          aria-activedescendant={flat[active] ? `cp-opt-${active}` : undefined}
          aria-autocomplete="list"
          placeholder="Search services, industries, case studies, pages"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(0);
          }}
          autoComplete="off"
          spellCheck="false"
        />
        <div className="cp__body" id="cp-list" role="listbox" ref={list}>
          {groups.map(({ g, rows }) => (
            <div key={g} role="group" aria-label={g}>
              <div className="cp__group" aria-hidden="true">{g}</div>
            {rows.map((r) => {
              const idx = indexes.get(r);
                return (
                  <div
                    key={r.type + r.href}
                    id={`cp-opt-${idx}`}
                    role="option"
                    aria-selected={idx === active}
                    className="cp__opt"
                    onMouseMove={() => setActive(idx)}
                    onClick={() => onSelect(r)}
                  >
                    <span>{r.label}</span>
                  </div>
                );
              })}
            </div>
          ))}
          {!flat.length && <div className="cp__empty">No results for "{q}". Try a service or an industry.</div>}
        </div>
        <div className="cp__foot" aria-hidden="true">
          <span>Up / Down to move</span>
          <span>Enter to open</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}
