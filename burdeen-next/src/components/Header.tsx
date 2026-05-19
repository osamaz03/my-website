"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import Container from "@/components/Container";
import type { Lang, SiteData } from "@/content/siteData";

export default function Header({
  lang,
  data,
}: {
  lang: Lang;
  data: SiteData;
}) {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "#home", label: data.nav.home },
    { href: "#products", label: data.nav.products },
    { href: "#projects", label: lang === "ar" ? "مشاريعنا" : "Our Projects" },
    { href: "#about", label: data.nav.about },
    { href: "#contact", label: data.nav.contact },
  ];

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--shell-divider)] bg-[color-mix(in_srgb,var(--shell-bg)_90%,transparent)] backdrop-blur-md">

      {/* Header Container */}
      <Container className="flex h-25 items-center justify-between gap-3">

        {/* Left Side */}
        <div className="flex items-center gap-2">

          {/* Mobile Menu */}
          <button
            type="button"
            className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--control-border)] bg-[var(--control-bg)] text-[var(--foreground)] shadow-none transition-colors hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>

            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 w-5 rounded-full bg-[var(--foreground)] transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 rounded-full bg-[var(--foreground)] transition ${
                  open ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 rounded-full bg-[var(--foreground)] transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle ariaLabel={data.a11y.toggleTheme} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1 lg:gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-full px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] lg:px-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Desktop Language Switcher */}
          <div
            className={
              lang === "ar" ? "order-1 hidden md:block" : "order-2 hidden md:block"
            }
          >
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Logo */}
          <a
            href="#home"
            className={
              lang === "ar" ? "relative z-[60] flex items-center order-2" : "relative z-[60] flex items-center order-1"
            }
          >
            <div className="relative h-40 w-32 sm:h-16 sm:w-40 md:h-50 md:w-50">
              <Image
                src="/images/logo2.png"
                alt="BURDEEN logo"
                fill
                priority
                sizes="(max-width: 768px) 160px, 260px"
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </Container>

      {/* Mobile Overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm transition-opacity md:hidden dark:bg-black/60 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-50 max-h-[100dvh] overflow-y-auto border-b border-[var(--shell-divider)] bg-[var(--shell-bg)] px-4 pb-6 pt-24 shadow-sm transition duration-200 ease-out md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile primary">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Language Switcher */}
          <div className="mt-4 border-t border-[var(--shell-divider)] pt-4">
            <LanguageSwitcher
              lang={lang}
              className="w-full justify-center"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}