import type { Lang, SiteData } from "@/content/siteData";
import Container from "@/components/Container";

export default function ContactSection({ lang, data }: { lang: Lang; data: SiteData }) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <section id="contact" className="border-t border-[var(--card-border)] bg-[var(--surface)] py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-xl">
          <div className="text-center sm:text-start" dir={dir}>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              {data.contactTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted-text)" }}>
              {data.contactBlurb}
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-5 shadow-sm sm:p-8">
            <form action={data.contactForm.formAction} method="POST" className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {data.contactForm.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[var(--surface)] px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-[var(--brand-copper)] focus:ring-2 focus:ring-[var(--brand-copper)]/25 dark:border-slate-600 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {data.contactForm.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[var(--surface)] px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--brand-copper)] focus:ring-2 focus:ring-[var(--brand-copper)]/25 dark:border-slate-600 dark:text-slate-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {data.contactForm.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-[var(--surface)] px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--brand-copper)] focus:ring-2 focus:ring-[var(--brand-copper)]/25 dark:border-slate-600 dark:text-slate-100"
                />
              </div>

              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                className="w-full rounded-xl bg-[var(--brand-amber)] py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[var(--brand-amber-hover)]"
              >
                {data.contactForm.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
