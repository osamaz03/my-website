"use client";

import type { Lang, SiteData } from "@/content/siteData";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

/**
 * Working Hours / Business Hours section.
 *
 * - Premium Burdeen styling (borders, radii, muted text, accent colors)
 * - Mobile: compact combined line (no repetitive day list)
 * - Desktop: detailed day-by-day cards
 * - Time formatting fix for Arabic RTL bidi issues
 */
export default function WorkingHoursSection({
  lang,
  data,
}: {
  lang: Lang;
  data: SiteData;
}) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  const items = [
    { day: lang === "ar" ? "الجمعة" : "Friday", status: "closed" as const },
    { day: lang === "ar" ? "السبت" : "Saturday", status: "open" as const },
    { day: lang === "ar" ? "الأحد" : "Sunday", status: "open" as const },
    { day: lang === "ar" ? "الاثنين" : "Monday", status: "open" as const },
    { day: lang === "ar" ? "الثلاثاء" : "Tuesday", status: "open" as const },
    { day: lang === "ar" ? "الأربعاء" : "Wednesday", status: "open" as const },
    { day: lang === "ar" ? "الخميس" : "Thursday", status: "open" as const },
  ];

  const openTimeEn = "7 AM - 5 PM";
  const openTimeAr = "7 AM - 5 PM";

  return (
    <section className="border-t border-[var(--card-border)] bg-[var(--surface)] py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14" dir={dir}>
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl">
                {/* Small elegant clock icon */}
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--background)] shadow-sm transition hover:border-slate-300 dark:hover:border-slate-600"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8v4.5l3 1.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {lang === "ar" ? "أوقات العمل" : "Working Hours"}
              </h2>
              <div className="mt-4 h-1 w-14 rounded-full bg-[var(--brand-copper)]" />
            </Reveal>

            {/* Mobile: compact combined line */}
            <div className="mt-6 block lg:hidden">
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {lang === "ar" ? (
                  <>
                    من السبت إلى الخميس — <span dir="ltr">{openTimeAr}</span>
                    <br />
                    الجمعة: <span className="font-bold text-red-600 dark:text-red-400">مغلق</span>
                  </>
                ) : (
                  <>
                    Saturday to Thursday — <span dir="ltr">{openTimeEn}</span>
                    <br />
                    Friday: <span className="font-bold">Closed</span>
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal delayMs={80}>
              {/* Desktop: detailed day-by-day cards */}
              <div className="hidden rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-5 shadow-sm sm:p-8 lg:block">
                <ul className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
                  {items.map((it) => {
                    const closed = it.status === "closed";
                    return (
                      <li
                        key={it.day}
                        className="group flex items-start justify-between rounded-xl border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3 transition hover:border-slate-300 dark:bg-[var(--background)] dark:hover:border-slate-600"
                      >
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">{it.day}</span>
                        <span
                          className={
                            closed
                              ? "text-sm font-bold text-red-600 dark:text-red-400"
                              : "text-sm font-bold text-[var(--brand-copper)]"
                          }
                        >
                          {closed ? (lang === "ar" ? "مغلق" : "Closed") : <span dir="ltr">{lang === "ar" ? openTimeAr : openTimeEn}</span>}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Mobile placeholder: keeps spacing consistent without repeating the list */}
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-5 shadow-sm sm:p-8 lg:hidden">
                <ul className="grid grid-cols-1 gap-3">
                  <li className="group flex items-start justify-between rounded-xl border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                      {lang === "ar" ? "الأوقات" : "Hours"}
                    </span>
                    <span className="text-sm font-bold text-[var(--brand-copper)]" dir="ltr">
                      {lang === "ar" ? openTimeAr : openTimeEn}
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

