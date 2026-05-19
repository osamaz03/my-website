import type { Lang, SiteData } from "@/content/siteData";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function AboutSection({ lang, data }: { lang: Lang; data: SiteData }) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  // Split company description into short paragraphs for premium readability.
  const blocks = data.aboutText
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const title = lang === "ar" ? "من نحن؟" : "About BURDEEN";

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 scroll-mt-[84px] md:scroll-mt-[104px]"
    >
      {/* Background depth */}

      {/* Light base aligned to the site's cohesive surface */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,246,243,0.96), rgba(248,246,243,0.90) 45%, rgba(248,246,243,0.86))",
        }}
      />

      {/* Dark base (unchanged visual intent) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dark:block hidden"
        style={{ background: "linear-gradient(180deg, rgba(3,7,18,0.95), rgba(3,7,18,0.75))" }}
      />

      {/* Dark cinematic accents (only dark mode) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dark:block hidden"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, rgba(245,158,11,0.22), transparent 55%), radial-gradient(700px 450px at 10% 30%, rgba(217,119,6,0.14), transparent 55%), radial-gradient(900px 600px at 90% 40%, rgba(59,130,246,0.07), transparent 60%)",
        }}
      />

      {/* Light mode: subtle industrial sheen (no heavy brown block) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            "radial-gradient(900px 360px at 50% 0%, rgba(154, 92, 60, 0.10), transparent 60%), radial-gradient(700px 320px at 8% 35%, rgba(234, 140, 0, 0.10), transparent 55%), radial-gradient(800px 400px at 95% 55%, rgba(15, 23, 42, 0.07), transparent 58%), linear-gradient(180deg, rgba(255,255,255,0.45), rgba(255,255,255,0.00) 55%)",
          filter: "saturate(1.02) contrast(1.02)",
        }}
      />

      {/* Light mode: very soft ambient depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            "radial-gradient(680px 380px at 50% 20%, rgba(234,140,0,0.08), transparent 60%), radial-gradient(860px 520px at 50% 120%, rgba(154,92,60,0.10), transparent 52%)",
        }}
      />


      <Container>

        <div className="relative mx-auto max-w-5xl" dir={dir}>
          {/* Title */}
          <div className="text-center">
            <Reveal>
              <h2
                className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50"
                style={{
                  textShadow: "0 1px 0 rgba(255,255,255,0.55)",
                }}
              >
                {title}
              </h2>
            </Reveal>

            <Reveal delayMs={80}>
              <div
                className="mx-auto mt-4 h-px w-24"
                style={{ background: "var(--brand-copper)" }}
              />
            </Reveal>
          </div>

          {/* Text */}
          <Reveal delayMs={120}>
            <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
              <div className="space-y-6">
                {blocks.map((p, idx) => (
                  <p
                    key={idx}
                    className={
                      lang === "ar"
                        ? "text-pretty text-base leading-relaxed text-slate-900/90 sm:text-lg dark:text-slate-200"
                        : "text-pretty text-base leading-relaxed text-slate-900/90 sm:text-lg dark:text-slate-200"
                    }
                    style={{ lineHeight: 1.9 }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Statistics */}
          <div className="mt-12 sm:mt-14">
            <Reveal delayMs={160}>
              <div className="relative">
                {/* Light-only ambient behind stats (removed to keep cards integrated without extra wash) */}


                <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
                  {[
                    {
                      value: "2023",
                      label: lang === "ar" ? "تأسست" : "Founded",
                    },
                    {
                      value: "15+",
                      label: lang === "ar" ? "سنوات خبرة" : "Years Experience",
                    },
                    {
                      value: "100%",
                      label: lang === "ar" ? "جودة مُضمَنة" : "Quality Assured",
                    },
                  ].map((s) => (
                    <div
                      key={s.value}
                      className="group relative overflow-hidden rounded-2xl border border-[color:var(--card-border)] bg-[color:color-mix(in_srbg,var(--background)_92%,var(--surface)_8%)]/70 p-6 text-center shadow-[0_1px_0_rgba(0,0,0,0.03)] transition hover:-translate-y-0.5 hover:border-[var(--brand-copper)] hover:shadow-md hover:shadow-black/5 dark:bg-[color:var(--surface)]/5 dark:border-[color:rgba(255,255,255,0.09)] dark:hover:bg-[color:color-mix(in_srbg,var(--surface)_30%,var(--background)_70%)]/70 dark:hover:border-[color:var(--brand-copper)] dark:hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
                    >
                      {/* Light-only ambient surface (kept very subtle; remove extra “card behind” wash) */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:opacity-0 dark:group-hover:opacity-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(248,246,243,0.90), rgba(248,246,243,0.62))",
                          boxShadow:
                            "0 10px 28px rgba(0,0,0,0.04), 0 0 0 1px rgba(154,92,60,0.06) inset",
                        }}
                      />

                      {/* subtle metallic glow */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{ background: "rgba(234,140,0,0.10)" }}
                      />

                      <div
                        className="relative text-4xl font-extrabold text-[var(--brand-amber)]"
                        style={{ textShadow: "0 1px 0 rgba(0,0,0,0.04)" }}
                      >
                        {s.value}
                      </div>
                      <div className="relative mt-2 text-sm font-semibold text-slate-900/75 dark:text-slate-200/90">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

