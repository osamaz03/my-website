"use client";

import { useEffect, useState } from "react";

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export default function ThemeToggle({ ariaLabel }: { ariaLabel: string }) {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setReady(true);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ariaLabel}
      aria-pressed={dark}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--control-border)] bg-[var(--control-bg)] text-[var(--foreground)] transition-colors hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]"
    >
      {ready ? dark ? <SunIcon /> : <MoonIcon /> : <span className="h-4 w-4 rounded-full bg-[var(--muted-text)] opacity-40" aria-hidden />}
    </button>
  );
}
