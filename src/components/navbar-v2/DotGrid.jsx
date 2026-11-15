import { useEffect, useRef } from 'react';

/** Faint animated dot grid. Mounted only while the panel is open, so it costs nothing when closed. */
export default function DotGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const host = c.parentElement;
    const ctx = c.getContext('2d');
    const gap = 26;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;

    const size = () => {
      const r = host.getBoundingClientRect();
      w = r.width;
      h = r.height;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(host);

    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 33) return; // ~30fps is plenty for a 4% layer
      last = t;
      ctx.clearRect(0, 0, w, h);
      for (let y = gap / 2, j = 0; y < h; y += gap, j++) {
        for (let x = gap / 2, i = 0; x < w; x += gap, i++) {
          const a = 0.55 + 0.45 * Math.sin(t / 1600 + i * 0.55 + j * 0.8);
          ctx.fillStyle = `rgba(10,10,10,${a.toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.1, 0, 6.2832);
          ctx.fill();
        }
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="nb__dots" aria-hidden="true" />;
}
