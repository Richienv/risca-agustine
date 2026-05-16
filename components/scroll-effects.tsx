"use client";

import { useEffect } from "react";

/* Ambient scroll behaviours: progress bar, magnetic-pill cursor tracking,
   and a subtle parallax nudge on revealed images. */
export function ScrollEffects() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");

    let progRaf = 0;
    const updateProgress = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (bar) bar.style.width = pct + "%";
      progRaf = 0;
    };
    const onScrollProgress = () => {
      if (!progRaf) progRaf = requestAnimationFrame(updateProgress);
    };
    window.addEventListener("scroll", onScrollProgress, { passive: true });
    updateProgress();

    const onPointerMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const t = target?.closest?.(".pill, .ph") as HTMLElement | null;
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      t.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    };
    document.addEventListener("pointermove", onPointerMove);

    let parRaf = 0;
    const tickParallax = () => {
      const els = document.querySelectorAll<HTMLElement>(".img-rise.in");
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const center = r.top + r.height / 2;
        const offset = (center - vh / 2) / vh;
        const inner = el.firstElementChild as HTMLElement | null;
        if (inner) inner.style.transform = `translateY(${offset * -14}px)`;
      });
      parRaf = 0;
    };
    const onScrollParallax = () => {
      if (!parRaf) parRaf = requestAnimationFrame(tickParallax);
    };
    window.addEventListener("scroll", onScrollParallax, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollProgress);
      window.removeEventListener("scroll", onScrollParallax);
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <div id="scroll-progress" />;
}
