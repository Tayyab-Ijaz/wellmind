import { lazy, Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './tokens.css';
import './navbar.css';
import {
  NAV, SERVICES, INDUSTRIES, RESOURCES, PROJECTS, SEARCH_INDEX, CONFIG, EMPTY_FILTER, matches,
} from './navData';
import { useMedia, useReducedMotion, useScrollState, useMagnetic, useSpotlight } from './hooks';
import CommandPalette from './CommandPalette';
import { Icon, Thumb } from './icons';

const DotGrid = lazy(() => import('./DotGrid'));

const cx = (...a) => a.filter(Boolean).join(' ');
const LISTS = { services: SERVICES, industries: INDUSTRIES, resources: RESOURCES };
const ALL = { services: '/services', industries: '/industries', resources: '/resources' };

/* ---------- small pieces ---------- */
const Chevron = () => (
  <svg className="chev" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.5 6 8 10.5 12.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Arrow = () => (
  <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Roll = ({ children }) => (
  <span className="roll">
    <span className="roll__a">{children}</span>
    <span className="roll__b" aria-hidden="true">{children}</span>
  </span>
);

function BookButton() {
  const ref = useRef(null);
  useMagnetic(ref, { strength: 0, disabled: true });
  return (
    <a ref={ref} href="/book-discovery" className="book">
      <span className="book__label">Book a Call</span>
      <Arrow />
    </a>
  );
}

function CalcPreview() {
  const [h, setH] = useState(20);
  return (
    <div className="calc" role="group" aria-label="AI Cost Calculator preview">
      <div className="calc__title">Estimate before you commit</div>
      <label className="calc__row">
        <span>Manual hours per week</span>
        <b>{h}</b>
      </label>
      <input type="range" min="5" max="80" value={h} onChange={(e) => setH(+e.target.value)} aria-label="Manual hours per week" />
      <div className="calc__out">~{Math.round(h * 4.33 * 0.6)} hrs/month automatable</div>
      <div className="calc__note">Illustrative only. The full tool uses your inputs.</div>
    </div>
  );
}

function FilterList({ label, type, items, value, onPick }) {
  const onKey = (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const b = [...e.currentTarget.querySelectorAll('button')];
    const i = b.indexOf(document.activeElement);
    const n = b[(i + (e.key === 'ArrowDown' ? 1 : -1) + b.length) % b.length];
    if (n) n.focus();
  };
  return (
    <div className="cs__col" role="group" aria-label={label} onKeyDown={onKey}>
      <div className="nb-label">{label}</div>
      {items.map((it) => (
        <button
          key={it.id}
          type="button"
          className="item"
          data-spot
          aria-pressed={value === it.id}
          onPointerEnter={(e) => e.pointerType === 'mouse' && onPick(type, it.id)}
          onFocus={() => onPick(type, it.id)}
          onClick={() => onPick(type, it.id)}
        >
          <span className="item__t">{it.label}</span>
          <span className="item__n">{PROJECTS.filter((p) => p[type === 'service' ? 'services' : 'industries'].includes(it.id)).length}</span>
        </button>
      ))}
    </div>
  );
}

function CaseStudiesPane({ filter, setFilter }) {
  const pick = (type, id) => setFilter((f) => (f[type] === id ? f : { ...f, [type]: id }));
  const clear = (type) => setFilter((f) => ({ ...f, [type]: null }));
  const svc = SERVICES.find((s) => s.id === filter.service);
  const ind = INDUSTRIES.find((s) => s.id === filter.industry);
  let rank = 0;
  const flags = PROJECTS.map((p) => {
    const ok = matches(p, filter);
    return { p, ok, i: ok ? rank++ : 0 };
  });

  return (
    <div className="cs">
      <div className="cs__filters">
        <FilterList label="Filter by service" type="service" items={SERVICES} value={filter.service} onPick={pick} />
        <FilterList label="Filter by industry" type="industry" items={INDUSTRIES} value={filter.industry} onPick={pick} />
        <a className="cta" href="/case-studies">
          View all case studies <Arrow />
        </a>
      </div>

      <div className="cs__results">
        <div className="cs__head">
          <div className="nb-label">Featured projects</div>
          <div className="cs__count">{flags.filter((f) => f.ok).length} of {PROJECTS.length}</div>
        </div>
        <div className="cs__chips" aria-live="polite">
          {svc && (
            <button type="button" className="chip" onClick={() => clear('service')} aria-label={`Remove filter: ${svc.label}`}>
              {svc.label}<span aria-hidden="true">&times;</span>
            </button>
          )}
          {ind && (
            <button type="button" className="chip" onClick={() => clear('industry')} aria-label={`Remove filter: ${ind.label}`}>
              {ind.label}<span aria-hidden="true">&times;</span>
            </button>
          )}
        </div>

        <div className="cs__cards">
          {flags.map(({ p, ok, i }) => (
            <div key={p.id} className={cx('cw', !ok && 'is-out')} style={{ '--i': i }} aria-hidden={!ok}>
              <div className="clip">
                <a className="card" data-spot href={p.href} tabIndex={ok ? 0 : -1}>
                  <span className="card__art"><Thumb kind={p.services[0]} /></span>
                  <span className="card__body">
                    <span className="card__title">{p.title}</span>
                    <span className="card__sum">{p.summary}</span>
                    <span className="card__tags">
                      {p.tags.map((t, ti) => (
                        <span key={t} className={cx('tag', ((ti === 0 && filter.service === p.services[0]) || (ti === 1 && filter.industry === p.industries[0])) && 'tag--on')}>{t}</span>
                      ))}
                    </span>
                  </span>
                  <span className="card__go"><span className="go"><Arrow /></span></span>
                </a>
              </div>
            </div>
          ))}
          {!flags.some((f) => f.ok) && (
            <div className="cs__empty">
              No case studies for this combination yet.{' '}
              <a href="/case-studies">View all case studies</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Photo({ it, i }) {
  const style = it.imgStyle || { objectFit: 'cover', objectPosition: 'center' };
  return it.img
    ? <img src={it.img} alt="" loading="lazy" decoding="async" style={style} />
    : <span className="ph-fb" style={{ '--h': i }} />;
}

const INTRO = {
  services: 'What we build, from the first model to production.',
  industries: 'Where our work is already running.',
  resources: 'Writing and guides from our projects.',
};

function ListPane({ id, label, items, all, field }) {
  const [a, setA] = useState(0);
  const cur = items[a];
  const countOf = (it) => (field ? PROJECTS.filter((p) => p[field].includes(it.id)).length : 0);
  const n = countOf(cur);
  return (
    <div className="lp3">
      <aside className="lp3__intro">
        <h3>{label}</h3>
        <p>{INTRO[id]}</p>
        <a className="lp3__more" href={all}>View all {label.toLowerCase()} <Arrow /></a>
      </aside>

      <div className="lp3__cols">
        {items.map((it, i) => {
          const c = countOf(it);
          return (
            <a
              key={it.id}
              className={cx('lp3__row', a === i && 'is-on')}
              href={it.href}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setA(i)}
              onFocus={() => setA(i)}
            >
              <span className="lp3__tx"><b>{it.label}</b>{it.desc && <span>{it.desc}</span>}</span>
              <span className="lp3__end">{c > 0 && <i className="n">{c}</i>}<Arrow /></span>
            </a>
          );
        })}
      </div>

      <figure className="lp3__feat">
        <div className="lp3__img">
          {items.map((it, i) => (
            <div key={it.id} className={cx('lp3__ph', a === i && 'is-on')} aria-hidden="true"><Photo it={it} i={i} /></div>
          ))}
        </div>
        <figcaption>
          {n > 0 && <span className="lp3__tag">{n} case {n === 1 ? 'study' : 'studies'}</span>}
          <b>{cur.label}</b>
          {cur.desc && <span className="lp3__d">{cur.desc}</span>}
          <a className="lp3__more" href={cur.href}>Explore <Arrow /></a>
        </figcaption>
      </figure>
    </div>
  );
}

/* ---------- mobile ---------- */
function MobileMenu({ open, filter, setFilter, onClick }) {
  const [acc, setAcc] = useState(null);
  const shown = PROJECTS.filter((p) => matches(p, filter));
  const toggle = (type, id) => setFilter((f) => ({ ...f, [type]: f[type] === id ? null : id }));
  let n = 0;

  return (
    <div id="nb-mobile" className={cx('mm', open && 'is-open')} role="dialog" aria-modal="true" aria-label="Menu" onClick={onClick}>
      <div className="mm__scroll">
        <ul className="mm__list">
          {NAV.map((item) => {
            const i = n++;
            return (
              <li key={item.id} className="mm__item" style={{ '--i': i }}>
                {item.menu ? (
                  <>
                    <button
                      type="button"
                      className="mm__row"
                      aria-expanded={acc === item.id}
                      aria-controls={`mm-acc-${item.id}`}
                      onClick={() => setAcc(acc === item.id ? null : item.id)}
                    >
                      {item.label}<Chevron />
                    </button>
                    <div id={`mm-acc-${item.id}`} className={cx('acc', acc === item.id && 'is-open')}>
                      <div>
                        {item.id === 'case-studies' ? (
                          <>
                            <div className="mm__chips" role="group" aria-label="Filter by service">
                              {SERVICES.map((s) => (
                                <button key={s.id} type="button" className="mchip" aria-pressed={filter.service === s.id} onClick={() => toggle('service', s.id)}>{s.label}</button>
                              ))}
                            </div>
                            <div className="mm__chips" role="group" aria-label="Filter by industry">
                              {INDUSTRIES.map((s) => (
                                <button key={s.id} type="button" className="mchip" aria-pressed={filter.industry === s.id} onClick={() => toggle('industry', s.id)}>{s.label}</button>
                              ))}
                            </div>
                            <ul className="mm__sub">
                              {shown.map((p) => <li key={p.id}><a href={p.href}>{p.title}</a></li>)}
                              {!shown.length && <li className="mm__empty">No case studies for this combination yet.</li>}
                              <li><a href="/case-studies">View all case studies</a></li>
                            </ul>
                          </>
                        ) : (
                          <ul className="mm__sub">
                            {LISTS[item.id].map((l) => <li key={l.id}><a href={l.href}>{l.label}</a></li>)}
                          </ul>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <a className="mm__row" href={item.href}>
                    {item.highlight && <i className="pulse" aria-hidden="true" />}{item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mm__cta"><BookButton magnetic={false} /></div>
    </div>
  );
}

/* ---------- main ---------- */
export default function Navbar({ logo, activeId = null, onNavigate }) {
  const desktop = useMedia('(min-width: 1150px)');
  const reduced = useReducedMotion();
  const [openKey, setOpenKey] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const [filter, setFilter] = useState(EMPTY_FILTER);
  const [palette, setPalette] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [ind, setInd] = useState({ x: 0, s: 0, on: false });
  const [height, setHeight] = useState(0);

  const headerRef = useRef(null);
  const listRef = useRef(null);
  const panelRef = useRef(null);
  const paneRefs = useRef({});
  const triggerRefs = useRef({});
  const closeT = useRef(0);
  const [morph, setMorph] = useState(false);

  const { scrolled, barRef, reveal } = useScrollState(true);

  /* open / close with a close delay */
  const cancelClose = useCallback(() => clearTimeout(closeT.current), []);
  const closeNow = useCallback(() => {
    cancelClose();
    setOpenKey(null);
    setMorph(false);
  }, [cancelClose]);
  const scheduleClose = () => {
    cancelClose();
    closeT.current = setTimeout(() => setOpenKey(null), CONFIG.closeDelay);
  };
  const open = (id) => {
    cancelClose();
    reveal();
    if (openKey === null) {
      setFilter(EMPTY_FILTER);
      setMorph(false);
    } else if (openKey !== id) {
      setMorph(true);
    }
    setOpenKey(id);
  };
  useEffect(() => () => clearTimeout(closeT.current), []);

  /* measure the active pane so the shared panel can morph its height */
  useLayoutEffect(() => {
    if (!openKey) return;
    const el = paneRefs.current[openKey];
    if (!el) return;
    const m = () => setHeight(el.offsetHeight);
    m();
    const ro = new ResizeObserver(m);
    ro.observe(el);
    return () => ro.disconnect();
  }, [openKey, desktop]);

  /* sliding indicator */
  const targetId = hoverId || openKey || activeId;
  useLayoutEffect(() => {
    if (!desktop) return;
    const measure = () => {
      const link = listRef.current && listRef.current.querySelector(`[data-id="${targetId}"] .nb__link`);
      if (!link) { setInd((p) => (p.on ? { ...p, on: false } : p)); return; }
      const l = listRef.current.getBoundingClientRect();
      const r = link.getBoundingClientRect();
      const pad = parseFloat(getComputedStyle(link).paddingLeft) || 0;
      setInd({ x: r.left - l.left + pad, s: Math.max(r.width - pad * 2, 0) / 100, on: true });
    };
    measure();
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [targetId, desktop]);

  useSpotlight(panelRef, !desktop || reduced);

  /* outside click (touch) */
  useEffect(() => {
    if (openKey === null) return;
    const f = (e) => { if (headerRef.current && !headerRef.current.contains(e.target)) closeNow(); };
    document.addEventListener('pointerdown', f);
    return () => document.removeEventListener('pointerdown', f);
  }, [openKey, closeNow]);

  /* Ctrl/Cmd + K */
  useEffect(() => {
    const f = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        reveal();
        setPalette((p) => !p);
      }
    };
    window.addEventListener('keydown', f);
    return () => window.removeEventListener('keydown', f);
  }, [reveal]);

  /* mobile: lock scroll, Esc, auto-close on desktop */
  useEffect(() => {
    if (!mobile) return;
    document.documentElement.style.overflow = 'hidden';
    const f = (e) => e.key === 'Escape' && setMobile(false);
    window.addEventListener('keydown', f);
    return () => { document.documentElement.style.overflow = ''; window.removeEventListener('keydown', f); };
  }, [mobile]);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1150px)');
    const handleChange = () => {
      setMobile(false);
      closeNow();
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [closeNow]);

  const go = (r) => {
    setMobile(false);
    closeNow();
    if (onNavigate) onNavigate(r.href);
    else window.location.assign(r.href);
  };
  const handleInternalNavigation = (e) => {
    if (!onNavigate || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const anchor = e.target.closest && e.target.closest('a[href^="/"]');
    if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
    e.preventDefault();
    setMobile(false);
    closeNow();
    onNavigate(anchor.getAttribute('href'));
  };

  const onTriggerClick = (e, id) => {
    const mouse = e.nativeEvent.pointerType === 'mouse';
    const keyboard = e.detail === 0;
    if (mouse) { open(id); return; }
    if (openKey === id) { closeNow(); return; }
    open(id);
    if (keyboard) {
      requestAnimationFrame(() => {
        const first = paneRefs.current[id] && paneRefs.current[id].querySelector('a, button');
        if (first) first.focus();
      });
    }
  };

  const onHeaderKey = (e) => {
    if (e.key === 'Escape' && openKey) {
      const t = triggerRefs.current[openKey];
      closeNow();
      if (t) t.focus();
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cx('nb', scrolled && 'is-scrolled', openKey && 'is-open')}
        onPointerEnter={(e) => e.pointerType === 'mouse' && cancelClose()}
        onPointerLeave={(e) => e.pointerType === 'mouse' && openKey && scheduleClose()}
        onKeyDown={onHeaderKey}
        onClick={handleInternalNavigation}
        onBlur={(e) => { if (openKey && !e.currentTarget.contains(e.relatedTarget)) closeNow(); }}
      >
        <div className="nb__bar">
          <a className="nb__logo" href="/" aria-label="WellMind Data Solutions, home">{logo}</a>

          {desktop && (
            <nav aria-label="Main">
              <ul className="nb__list" ref={listRef} onPointerLeave={() => setHoverId(null)}>
                {NAV.map((n) => (
                  <li
                    key={n.id}
                    data-id={n.id}
                    className={cx('nb__item', n.highlight && 'nb__item--calc', activeId === n.id && 'is-current')}
                    onFocus={() => setHoverId(n.id)}
                    onBlur={() => setHoverId(null)}
                  >
                    {n.menu ? (
                      <button
                        type="button"
                        ref={(el) => { triggerRefs.current[n.id] = el; }}
                        className="nb__link"
                        aria-expanded={openKey === n.id}
                        aria-controls={`nb-pane-${n.id}`}
                        onPointerEnter={(e) => { if (e.pointerType === 'mouse') { setHoverId(n.id); open(n.id); } }}
                        onClick={(e) => onTriggerClick(e, n.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            open(n.id);
                            requestAnimationFrame(() => {
                              const first = paneRefs.current[n.id] && paneRefs.current[n.id].querySelector('a, button');
                              if (first) first.focus();
                            });
                          }
                        }}
                      >
                        <Roll>{n.label}</Roll><Chevron />
                      </button>
                    ) : (
                      <a
                        className="nb__link"
                        href={n.href}
                        aria-current={activeId === n.id ? 'page' : undefined}
                        onPointerEnter={(e) => { if (e.pointerType === 'mouse') { setHoverId(n.id); if (openKey) scheduleClose(); } }}
                      >
                        {n.highlight && <i className="pulse" aria-hidden="true" />}
                        <Roll>{n.label}</Roll>
                      </a>
                    )}
                    {n.id === 'calculator' && <CalcPreview />}
                  </li>
                ))}
                <span
                  className={cx('nb__ind', ind.on && 'is-on')}
                  style={{ '--x': `${ind.x}px`, '--s': ind.s }}
                  aria-hidden="true"
                />
              </ul>
            </nav>
          )}

          <div className="nb__right">
            {desktop && <BookButton magnetic={!reduced} />}
            {!desktop && (
              <button
                type="button"
                className={cx('nb__burger', mobile && 'is-open')}
                aria-label={mobile ? 'Close menu' : 'Open menu'}
                aria-expanded={mobile}
                aria-controls="nb-mobile"
                onClick={() => {
                  reveal();
                  setMobile((m) => !m);
                }}
              >
                <span /><span />
              </button>
            )}
          </div>
        </div>
        <div className="nb__progress" ref={barRef} aria-hidden="true" />

        {desktop && (
          <div
            ref={panelRef}
            className={cx('nb__panel', openKey && 'is-open', morph && 'is-morph')}
          >
            {openKey && !reduced && (
              <Suspense fallback={null}><DotGrid /></Suspense>
            )}
            <div className="nb__stage" style={{ height }}>
              {NAV.filter((n) => n.menu).map((n) => (
                <div
                  key={n.id}
                  id={`nb-pane-${n.id}`}
                  ref={(el) => { paneRefs.current[n.id] = el; }}
                  className={cx('pane', openKey === n.id && 'is-active')}
                  role="region"
                  aria-label={n.label}
                >
                  {n.id === 'case-studies' ? (
                    <CaseStudiesPane filter={filter} setFilter={setFilter} />
                  ) : (
                    <ListPane id={n.id} label={n.label} items={LISTS[n.id]} all={ALL[n.id]} field={n.id === 'services' || n.id === 'industries' ? n.id : null} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {!desktop && <MobileMenu open={mobile} filter={filter} setFilter={setFilter} onClick={handleInternalNavigation} />}

      <CommandPalette
        key={palette ? 'open' : 'closed'}
        open={palette}
        onClose={() => setPalette(false)}
        index={SEARCH_INDEX}
        onSelect={(r) => { setPalette(false); go(r); }}
      />
    </>
  );
}
