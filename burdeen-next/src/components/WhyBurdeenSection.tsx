import type { Lang, SiteData } from "@/content/siteData";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

function FeatureIcon({ variant }: { variant: "quality" | "design" | "moisture" | "manufacturing" }) {
  // Inline SVG icons (lightweight, no dependencies)
  const common = "h-6 w-6";
  switch (variant) {
    case "quality":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2l7 4v6c0 5-3.5 9.7-7 10-3.5-.3-7-5-7-10V6l7-4z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8.5 12l2.2 2.2L15.7 9.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "design":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 17l6-6 4 4 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 21h16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M14 3h7v7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "moisture":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2s7 7.4 7 13a7 7 0 11-14 0c0-5.6 7-13 7-13z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9.5 15.2c.7 1.4 2 2.3 3.6 2.3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "manufacturing":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 7l8-4 8 4v13H4V7z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9 10h6v10H9V10z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyBurdeenSection({ lang, data }: { lang: Lang; data: SiteData }) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  const cards = [
    {
      title: lang === "ar" ? "جودة عالية" : "High Quality",
      description:
        lang === "ar"
          ? "مصممة بدقة وتحقق معايير أداء ثابتة."
          : "Built with precision for consistent performance.",
      icon: "quality" as const,
    },
    {
      title: lang === "ar" ? "تصميم عصري" : "Modern Design",
      description:
        lang === "ar"
          ? "خطوط أنيقة تناسب الذوق الحديث والاحتياجات المتنوعة."
          : "Elegant lines that suit modern tastes and requirements.",
      icon: "design" as const,
    },
    {
      title: lang === "ar" ? "مقاومة للرطوبة" : "Moisture Resistant",
      description:
        lang === "ar"
          ? "مناسبة للاستخدامات اليومية مع حماية إضافية ضد الرطوبة."
          : "Engineered to protect against moisture in daily use.",
      icon: "moisture" as const,
    },
    {
      title: lang === "ar" ? "تصنيع احترافي" : "Professional Manufacturing",
      description:
        lang === "ar"
          ? "عمليات تصنيع موثوقة تضمن جودة نهائية عالية."
          : "Reliable manufacturing processes for a premium finish.",
      icon: "manufacturing" as const,
    },
  ];

  return (
    <section className="border-b border-[var(--shell-divider)] bg-[var(--shell-bg)] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-20 lg:pb-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              {lang === "ar" ? (
                <>
                  لماذا <span className="text-[var(--accent-amber)]">BURDEEN</span>
                </>
              ) : (
                <>
                  Why <span className="text-[var(--accent-amber)]">BURDEEN</span>
                </>
              )}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {cards.map((c, idx) => (
            <Reveal key={c.title} delayMs={idx * 50}>
              <div
                dir={dir}
                className="group flex h-full flex-col rounded-xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--surface)_55%,var(--shell-bg))] p-7 transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--accent-amber)_35%,var(--card-border))] hover:bg-[color-mix(in_srgb,var(--surface)_88%,var(--shell-bg))] dark:bg-[color-mix(in_srgb,var(--surface)_40%,var(--shell-bg))] dark:hover:bg-[color-mix(in_srgb,var(--surface)_70%,var(--shell-bg))]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-lg border border-[var(--card-border)] bg-[var(--surface)] p-2.5 text-[var(--brand-copper)] transition-colors duration-200 group-hover:border-[color-mix(in_srgb,var(--accent-amber)_25%,var(--card-border))]">
                    <FeatureIcon variant={c.icon} />
                  </div>
                  <div className="text-start">
                    <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">{c.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
                      {c.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

