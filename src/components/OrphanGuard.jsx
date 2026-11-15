/**
 * OrphanGuard.jsx — WellMind Data Solutions
 * Stops a single word sitting alone on the last line of a heading, paragraph
 * or list item. Binds the last two words with a non-breaking space so they
 * wrap together. Complements the CSS `text-wrap: pretty / balance` rules in
 * theme.css for browsers that don't support them (e.g. Firefox `pretty`).
 *
 * Text nodes only — never touches element structure, so React is unaffected.
 */
import { useEffect } from 'react';

const SELECTOR = 'h1,h2,h3,h4,h5,p,li,blockquote,figcaption,.section-lead,.card-body,.card-title';
const SKIP = 'pre,code,textarea,input,[contenteditable],[data-no-orphan]';
const NBSP = '\u00A0';
const MAX_JOINED = 26; // don't glue two very long words together

function tidy(el) {
  if (el.closest(SKIP)) return;
  let last = el.lastChild;
  while (last && last.nodeType === 3 && !last.nodeValue.trim()) last = last.previousSibling;
  if (!last || last.nodeType !== 3) return;

  const text = last.nodeValue;
  const m = text.match(/^([\s\S]*?(\S+))\s+(\S+)(\s*)$/);
  if (!m) return;
  const [, head, prevWord, lastWord, tail] = m;
  if (prevWord.length + lastWord.length > MAX_JOINED) return;
  if (el.textContent.trim().split(/\s+/).length < 4) return;

  const next = head + NBSP + lastWord + tail;
  if (next !== text) last.nodeValue = next;
}

function collect(node, set) {
  if (node.nodeType === 3) node = node.parentElement;
  if (!node || node.nodeType !== 1) return;
  if (node.matches(SELECTOR)) set.add(node);
  node.querySelectorAll?.(SELECTOR).forEach(n => set.add(n));
  const up = node.closest?.(SELECTOR);
  if (up) set.add(up);
}

export default function OrphanGuard() {
  useEffect(() => {
    const pending = new Set();
    let raf = 0;
    const flush = () => {
      raf = 0;
      pending.forEach(tidy);
      pending.clear();
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(flush); };

    collect(document.body, pending);
    schedule();

    const obs = new MutationObserver(muts => {
      for (const m of muts) {
        if (m.type === 'characterData') collect(m.target, pending);
        else m.addedNodes.forEach(n => collect(n, pending));
      }
      schedule();
    });
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => { obs.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return null;
}
