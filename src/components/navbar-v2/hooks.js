import { useCallback, useEffect, useRef, useState } from 'react';

export function useMedia(query) {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const f = () => setM(mq.matches);
    mq.addEventListener('change', f);
    f();
    return () => mq.removeEventListener('change', f);
  }, [query]);
  return m;
}

export const useReducedMotion = () => useMedia('(prefers-reduced-motion: reduce)');

/** scrolled / hidden state + progress line (written straight to the DOM, no re-render). */
export function useScrollState(locked) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const barRef = useRef(null);
  const lockRef = useRef(locked);
  const last = useRef(0);
  const hid = useRef(false);

  useEffect(() => {
    lockRef.current = locked;
  }, [locked]);

  useEffect(() => {
    let raf = 0;
    const run = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      setScrolled(y > 24);
      const dy = y - last.current;
      if (lockRef.current || y < 120) hid.current = false;
      else if (dy > 6) hid.current = true;
      else if (dy < -6) hid.current = false;
      if (Math.abs(dy) > 6 || y < 120) last.current = y;
      setHidden(hid.current);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(run);
    };
    run();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      cancelAnimationFrame(raf);
    };
  }, []);

  const reveal = useCallback(() => {
    hid.current = false;
    setHidden(false);
  }, []);

  return { scrolled, hidden, barRef, reveal };
}

/** Moves the element a few px toward the cursor. */
export function useMagnetic(ref, { strength = 5, disabled = false } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;
    const move = (e) => {
      if (e.pointerType !== 'mouse') return;
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      el.style.transform = `translate(${(dx * strength).toFixed(2)}px, ${(dy * strength).toFixed(2)}px)`;
    };
    const leave = () => {
      el.style.transform = '';
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
      el.style.transform = '';
    };
  }, [ref, strength, disabled]);
}

/** One delegated listener: sets --mx / --my on the hovered [data-spot] element. */
export function useSpotlight(ref, disabled) {
  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;
    let raf = 0;
    let ev = null;
    const move = (e) => {
      if (e.pointerType !== 'mouse') return;
      ev = e;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const t = ev.target.closest && ev.target.closest('[data-spot]');
        if (!t) return;
        const r = t.getBoundingClientRect();
        t.style.setProperty('--mx', `${ev.clientX - r.left}px`);
        t.style.setProperty('--my', `${ev.clientY - r.top}px`);
      });
    };
    el.addEventListener('pointermove', move, { passive: true });
    return () => {
      el.removeEventListener('pointermove', move);
      cancelAnimationFrame(raf);
    };
  }, [ref, disabled]);
}
