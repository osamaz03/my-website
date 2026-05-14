import type { Lang, SiteData } from "@/content/siteData";

export default function Footer({ lang, data }: { lang: Lang; data: SiteData }) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  const telHref = data.contact.phone.replace(/\s+/g, "");

  const links = [
    { href: "#home", label: data.nav.home },
    { href: "#products", label: data.nav.products },
    { href: "#about", label: data.nav.about },
    { href: "#contact", label: data.nav.contact },
  ];

  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950 text-slate-200" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="text-xl font-extrabold tracking-tight text-[var(--brand-amber)]">{data.brandName}</div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">{data.footer.tagline}</p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {lang === "ar" ? "تصفح" : "Explore"}
            </div>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm font-medium text-slate-300 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {lang === "ar" ? "تواصل" : "Contact"}
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${data.contact.email}`}
                  className="inline-flex items-center gap-2 font-medium text-slate-200 hover:text-white"
                >
                  <span className="text-base" aria-hidden>
                    📧
                  </span>
                  {data.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${telHref}`}
                  className="inline-flex items-center gap-2 font-medium text-slate-200 hover:text-white"
                >
                  <span className="text-base" aria-hidden>
                    📱
                  </span>
                  {data.contact.phone}
                </a>
              </li>
              <li className="flex gap-2 text-slate-400">
                <span className="shrink-0 text-base" aria-hidden>
                  📍
                </span>
                <span>{data.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 text-center text-xs text-slate-500 sm:text-sm">
          {data.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
