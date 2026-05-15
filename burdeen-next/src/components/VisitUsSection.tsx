import type { Lang, SiteData } from "@/content/siteData";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function VisitUsSection({ lang, data }: { lang: Lang; data: SiteData }) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  // Note: Replace with your exact address/coordinates if you have them.
  // Using Google Maps embed without any client-side API/libraries.
  const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.68005851471537!2d46.86599539043263!3d24.6277882267822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa7003566faed%3A0x7489d923ef1934cc!2z2YXYtdmG2Lkg2LTYsdmD2Kkg2KjYsdiv2YrZhiDZhNmE2LXZhtin2LnYqQ!5e0!3m2!1sen!2sde!4v1778804923637!5m2!1sen!2sde"

  return (
    <section className="border-t border-[var(--card-border)] bg-[var(--surface)] py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14" dir={dir}>
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl">
                {lang === "ar" ? "زورنا" : "Visit Us"}
              </h2>
              <div className="mt-4 h-1 w-14 rounded-full bg-[var(--brand-copper)]" />
            </Reveal>

            <Reveal delayMs={60}>
              <p className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {data.contact.address}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delayMs={120}>
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-4 shadow-sm">
                <div className="overflow-hidden rounded-xl">
                  <div className="relative" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      title="Google Map"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={mapSrc}
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

