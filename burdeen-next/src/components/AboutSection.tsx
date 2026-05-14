import type { Lang, SiteData } from "@/content/siteData";
import Container from "@/components/Container";

export default function AboutSection({ lang, data }: { lang: Lang; data: SiteData }) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  const paragraphs = data.aboutText.split(/\n\n+/).filter((p) => p.trim());

  return (
    <section id="about" className="border-y border-[var(--card-border)] bg-[var(--surface)] py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2
              className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl"
              dir={dir}
            >
              {data.aboutTitle}
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-[var(--brand-amber)]" />
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-6 sm:p-8 lg:p-10">
              {paragraphs.map((block, idx) => (
                <p
                  key={idx}
                  className="mb-4 text-pretty leading-relaxed text-slate-700 last:mb-0 dark:text-slate-300"
                  dir={dir}
                >
                  {block.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
