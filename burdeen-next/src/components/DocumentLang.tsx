"use client";

import { useEffect } from "react";
import type { Lang } from "@/content/siteData";

export default function DocumentLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  return null;
}
