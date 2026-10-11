"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Count-up animation, starts when the number enters the viewport
export default function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    const c = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      {n}
      {suffix}
    </span>
  );
}
