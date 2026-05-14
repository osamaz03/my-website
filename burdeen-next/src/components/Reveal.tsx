"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal reveal-on-scroll utility (no heavy libraries).
 * - Respects prefers-reduced-motion.
 * - Avoids layout shift by keeping transform/opacity within wrapper.
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show immediately.
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq?.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { root: null, threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionDuration: "700ms",
      }}
    >
      <div
        className={
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
        }
        style={{
          transitionProperty: "opacity, transform",
          transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
          transitionDuration: "700ms",
        }}
      >
        {children}
      </div>
    </div>
  );
}

