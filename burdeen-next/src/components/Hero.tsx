import type { Lang, SiteData } from "@/content/siteData";
import HeroMedia from "@/components/HeroMedia";

const ACCENT = "BURDEEN";

function HeroHeading({ title }: { title: string }) {
  if (!title.includes(ACCENT)) {
    return <>{title}</>;
  }
  const parts = title.split(ACCENT);
  return (
    <>
      {parts[0]}
      <span className="font-medium text-[var(--accent-amber)]">{ACCENT}</span>
      {parts.slice(1).join(ACCENT)}
    </>
  );
}

/** English hero — do not change */
function HeroEn({ data }: { data: SiteData }) {
  return (
    <section
      id="home"
      dir="ltr"
      className="relative overflow-hidden bg-[var(--shell-bg)] lg:min-h-[min(85vh,820px)] scroll-mt-[84px] md:scroll-mt-[104px]"
    >
      <div className="relative flex flex-col lg:min-h-[min(85vh,820px)]">
          <div className="order-1 relative w-full min-h-[min(62vw,480px)] overflow-hidden sm:min-h-[min(56vw,520px)] lg:absolute lg:inset-y-0 lg:order-none lg:min-h-0 lg:h-full lg:w-[48%] lg:end-0 lg:start-[52%]">
            <HeroMedia
              lang="en"
              imageSrc={data.heroImage.src}
              imageAlt={data.heroImage.alt}
              logoSrc="/images/logo2.png"
              logoAlt={data.brandName}
            />
          </div>

          <div className="order-2 relative z-10 flex w-full flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 lg:order-none lg:w-[52%] lg:max-w-[42rem] lg:py-16 lg:min-h-[min(85vh,820px)] lg:me-auto lg:ps-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] lg:pe-10 xl:pe-14">
            <div
              className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_85%_75%_at_22%_50%,color-mix(in_srgb,var(--hero-warm-cream)_95%,transparent),transparent_68%)] lg:block dark:lg:hidden"
              aria-hidden
            />
            <div className="relative mx-auto w-full max-w-lg text-center lg:mx-0 lg:max-w-[38rem] lg:text-start xl:max-w-[40rem]">
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--brand-copper)] sm:text-xs lg:mb-3">
                {data.brandName}
              </p>
              <h1 className="text-balance text-3xl font-normal leading-[1.14] tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12] xl:text-[2.65rem]">
                <HeroHeading title={data.heroTitle} />
              </h1>
              <p
                className="mx-auto mt-4 max-w-md text-pretty text-[0.98rem] leading-[1.72] text-[var(--muted-text)] sm:text-base lg:mx-0 lg:mt-5 lg:max-w-[34rem] xl:max-w-[36rem] xl:leading-[1.75]"
              >
                {data.heroDescription}
              </p>
              <div className="mt-7 flex flex-col items-stretch gap-2.5 sm:flex-row sm:justify-center sm:gap-3 lg:mt-8 lg:justify-start">
                <a
                  href="/pdf/catalog%202.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--brand-amber)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-amber-hover)] sm:min-w-[9rem] lg:px-6"
                >
                  {data.catalogLabel}
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--control-border)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] sm:min-w-[9rem] lg:px-6"
                >
                  {data.nav.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

/** Arabic hero — desktop: explicit flex-row, image left, text right */
function HeroAr({ data }: { data: SiteData }) {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative overflow-hidden bg-[var(--shell-bg)] lg:h-[min(85vh,820px)] lg:min-h-[min(85vh,820px)] scroll-mt-[84px] md:scroll-mt-[104px]"
    >
      {/* Layout shell is LTR so flex order is not auto-flipped; content stays RTL */}
      <div
        className="relative flex flex-col lg:h-full lg:min-h-[min(85vh,820px)] lg:flex-row lg:items-stretch"
        dir="ltr"
      >
        {/* Image — left on desktop (order 1), same full-bleed styling as EN */}
        <div className="order-1 relative w-full min-h-[min(62vw,480px)] overflow-hidden sm:min-h-[min(56vw,520px)] lg:absolute lg:inset-y-0 lg:order-1 lg:min-h-0 lg:h-full lg:w-[48%] lg:left-0 lg:right-[52%]">
          <HeroMedia
            lang="ar"
            imageSrc={data.heroImage.src}
            imageAlt={data.heroImage.alt}
            logoSrc="/images/logo2.png"
            logoAlt={data.brandName}
          />
        </div>

        {/* Text — light: slate panel; dark: unchanged */}
        <div
          dir="rtl"
          className="order-2 relative z-10 flex w-full flex-col justify-center bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 dark:bg-transparent max-lg:bg-slate-50 lg:bg-transparent lg:order-2 lg:ml-[48%] lg:h-full lg:w-[52%] lg:max-w-none lg:justify-center lg:py-12 lg:pe-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] lg:ps-10 xl:ps-14"
        >
          <div
            className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_85%_75%_at_78%_50%,color-mix(in_srgb,var(--hero-warm-cream)_95%,transparent),transparent_68%)] lg:block dark:lg:hidden"
            aria-hidden
          />
          <div className="relative mx-auto w-full max-w-lg text-center lg:ms-auto lg:me-0 lg:max-w-[38rem] lg:text-right xl:max-w-[40rem]">
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--brand-copper)] sm:text-xs lg:mb-3">
                {data.brandName}
              </p>
              <h1 className="text-balance text-3xl font-normal leading-[1.14] tracking-tight text-gray-900 dark:text-[var(--foreground)] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12] xl:text-[2.65rem]">
                <HeroHeading title={data.heroTitle} />
              </h1>
              <p className="mx-auto mt-4 max-w-md text-pretty text-[0.98rem] leading-[1.72] text-gray-700 dark:text-[var(--muted-text)] sm:text-base lg:ms-0 lg:me-0 lg:mt-5 lg:max-w-[34rem] xl:max-w-[36rem] xl:leading-[1.75]">
                {data.heroDescription}
              </p>
              <div className="mt-7 flex flex-col items-stretch gap-2.5 sm:flex-row sm:justify-center sm:gap-3 lg:mt-8 lg:flex-row-reverse lg:justify-end">
                <a
                  href="/pdf/catalog%202.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--brand-amber)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-amber-hover)] sm:min-w-[9rem] lg:px-6"
                >
                  {data.catalogLabel}
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-50 dark:border-[var(--control-border)] dark:bg-transparent dark:text-[var(--foreground)] dark:hover:bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] sm:min-w-[9rem] lg:px-6"
                >
                  {data.nav.contact}
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero({ lang, data }: { lang: Lang; data: SiteData }) {
  if (lang === "en") {
    return <HeroEn data={data} />;
  }
  return <HeroAr data={data} />;
}
