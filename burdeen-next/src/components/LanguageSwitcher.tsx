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
      className={`inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-700 ${className}`}
      title={label}
    >
      <span className="me-1.5 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {lang === "en" ? "AR" : "EN"}
      </span>
      {label}
    </Link>
  );
}
