"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Lang } from "@/content/siteData";

export default function LanguageSwitcher({
  lang,
  className = "",
}: {
  lang: Lang;
  className?: string;
}) {
  const other: Lang = lang === "en" ? "ar" : "en";
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash : "");
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const label = other === "en" ? "English" : "العربية";

  return (
    <Link
      href={`/${other}${hash}`}
      className={`inline-flex items-center justify-center rounded-full border border-[var(--control-border)] bg-[var(--control-bg)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] ${className}`}
      title={label}
    >
      <span className="me-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--muted-text)]">
        {lang === "en" ? "AR" : "EN"}
      </span>
      {label}
    </Link>
  );
}
