import type { Lang, SiteData } from "@/content/siteData";
import Container from "@/components/Container";
import HeroMedia from "@/components/HeroMedia";

export default function Hero({ lang, data }: { lang: Lang; data: SiteData }) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <section
      id="home"
      dir={dir}
      className="relative overflow-hidden border-b border-[var(--card-border)] bg-gradient-to-b from-[var(--surface)] via-[var(--background)] to-[var(--background)]"
    >
      <div
        className="pointer-events-none absolute -end-32 -top-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "var(--hero-blob-1)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -start-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "var(--hero-blob-2)" }}
        aria-hidden
      />

      <Container className="relative py-12 sm:py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-start">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-copper)] sm:text-sm">
              {data.brandName}
            </p>
            <h1 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {data.heroTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed sm:text-lg lg:mx-0" style={{ color: "var(--muted-text)" }}>
              {data.heroDescription}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/pdf/catalog%202.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full min-w-[10rem] items-center justify-center rounded-xl bg-[var(--brand-amber)] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-amber-900/20 transition hover:bg-[var(--brand-amber-hover)] sm:w-auto"
              >
                {data.catalogLabel}
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full min-w-[10rem] items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--surface)] px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800 sm:w-auto"
              >
                {data.nav.contact}
              </a>
            </div>
          </div>

          <HeroMedia
            imageSrc={data.heroImage.src}
            imageAlt={data.heroImage.alt}
            logoSrc="/images/logo2.png"
            logoAlt={data.brandName}
          />
        </div>
      </Container>
    </section>
  );
}
