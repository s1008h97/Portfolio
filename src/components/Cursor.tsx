"use client";

import { useEffect, useRef } from "react";

// Cursor micro-interaction: a small dot that trails the pointer and swells over interactive elements.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = matchMedia("(pointer: fine)").matches;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = dot.current;
    if (!fine || reduce || !el) return;

    let x = 0, y = 0, cx = 0, cy = 0, raf = 0, scale = 1, target = 1;
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      scale += (target - scale) * 0.2;
      el.style.transform = `translate3d(${cx - 6}px, ${cy - 6}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
      target = (e.target as Element | null)?.closest("a, button, [data-cursor]") ? 4 : 1;
    };
    const leave = () => (el.style.opacity = "0");
    addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-3 w-3 rounded-full bg-accent opacity-0 mix-blend-multiply transition-opacity max-md:hidden dark:mix-blend-screen"
      style={{ opacity: 0 }}
    />
  );
}
