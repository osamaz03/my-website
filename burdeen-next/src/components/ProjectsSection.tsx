"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Lang, SiteData } from "@/content/siteData";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

type Localized = { en: string; ar: string };

type Project = {
  id: string;
  title: Localized;
  category: Localized;
  location: Localized;
  year: string;
  description: Localized;
  materials: Localized[];
  features: Localized[];
  imageUrl: string;
  gallery: string[];
};

const projects: Project[] = [
  {
    id: "luxury-villa",
    title: { en: "Luxury Villa Project", ar: "مشروع فيلا فاخرة" },
    category: { en: "Residential Villa", ar: "فيلا سكنية" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    year: "2024",
    description: {
      en: "Premium WPC door solutions designed for modern luxury villas with elegant finishes and long-lasting durability.",
      ar: "حلول أبواب WPC فاخرة مصممة للفلل العصرية بتشطيبات أنيقة ومتانة طويلة الأمد.",
    },
    materials: [
      { en: "Premium WPC doors", ar: "أبواب WPC فاخرة" },
      { en: "Moisture-resistant cores", ar: "نواة مقاومة للرطوبة" },
      { en: "Elegant wood finishes", ar: "تشطيبات خشبية أنيقة" },
    ],
    features: [
      { en: "Custom villa proportions", ar: "مقاسات مخصصة للفلل" },
      { en: "Refined interior detailing", ar: "تفاصيل داخلية راقية" },
      { en: "Long-lasting durability", ar: "متانة طويلة الأمد" },
    ],
    imageUrl: "/images/project_image1.jpeg",
    gallery: ["/images/project_image1.jpeg"],
  },
  {
    id: "hotel-interior-doors",
    title: { en: "Hotel Interior Doors", ar: "أبواب داخلية للفنادق" },
    category: { en: "Hospitality", ar: "ضيافة" },
    location: { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية" },
    year: "2023",
    description: {
      en: "Custom interior WPC doors developed for hospitality environments with moisture resistance and premium aesthetics.",
      ar: "أبواب WPC داخلية مخصصة لبيئات الضيافة بمقاومة للرطوبة ومظهر فاخر.",
    },
    materials: [
      { en: "Custom WPC door leaves", ar: "درف أبواب WPC مخصصة" },
      { en: "Premium frames", ar: "إطارات فاخرة" },
      { en: "Hospitality-grade hardware", ar: "إكسسوارات مناسبة للضيافة" },
    ],
    features: [
      { en: "Moisture resistance", ar: "مقاومة للرطوبة" },
      { en: "Consistent room finish", ar: "تشطيب موحد للغرف" },
      { en: "Built for repeated use", ar: "مصمم للاستخدام المتكرر" },
    ],
    imageUrl: "/images/project_image2.jpeg",
    gallery: ["/images/project_image2.jpeg"],
  },
  {
    id: "modern-office-spaces",
    title: { en: "Modern Office Spaces", ar: "مساحات مكتبية حديثة" },
    category: { en: "Commercial", ar: "تجاري" },
    location: { en: "Khobar, Saudi Arabia", ar: "الخبر، المملكة العربية السعودية" },
    year: "2025",
    description: {
      en: "Modern office door systems combining clean architectural styling with durable daily-use performance.",
      ar: "أنظمة أبواب مكتبية حديثة تجمع بين الطابع المعماري النظيف والأداء المتين للاستخدام اليومي.",
    },
    materials: [
      { en: "Modern WPC systems", ar: "أنظمة WPC حديثة" },
      { en: "Durable surface finish", ar: "تشطيب سطحي متين" },
      { en: "Coordinated trims", ar: "إطارات متناسقة" },
    ],
    features: [
      { en: "Clean architectural styling", ar: "طابع معماري نظيف" },
      { en: "Daily-use performance", ar: "أداء مناسب للاستخدام اليومي" },
      { en: "Low-maintenance surfaces", ar: "أسطح سهلة الصيانة" },
    ],
    imageUrl: "/images/project_image3.jpeg",
    gallery: ["/images/project_image3.jpeg"],
  },
  {
    id: "residential-compound",
    title: { en: "Residential Compound", ar: "مجمع سكني" },
    category: { en: "Residential Community", ar: "مجمع سكني" },
    location: { en: "Dammam, Saudi Arabia", ar: "الدمام، المملكة العربية السعودية" },
    year: "2024",
    description: {
      en: "Integrated WPC door solutions for residential compounds with consistent design language and reliable durability.",
      ar: "حلول أبواب WPC متكاملة للمجمعات السكنية بلغة تصميم متناسقة ومتانة موثوقة.",
    },
    materials: [
      { en: "Integrated WPC doors", ar: "أبواب WPC متكاملة" },
      { en: "Matched frames and trims", ar: "إطارات وحليات متطابقة" },
      { en: "Protected finishes", ar: "تشطيبات محمية" },
    ],
    features: [
      { en: "Consistent design language", ar: "لغة تصميم متناسقة" },
      { en: "Reliable durability", ar: "متانة موثوقة" },
      { en: "Repeatable project quality", ar: "جودة قابلة للتكرار" },
    ],
    imageUrl: "/images/project_image4.jpeg",
    gallery: ["/images/project_image4.jpeg"],
  },
];

function getText(value: Localized, lang: Lang) {
  return lang === "ar" ? value.ar : value.en;
}

function ProjectCard({
  project,
  lang,
  index,
  variant = "standard",
  onSelect,
}: {
  project: Project;
  lang: Lang;
  index: number;
  variant?: "featured" | "wide" | "standard";
  onSelect: (project: Project) => void;
}) {
  const title = getText(project.title, lang);
  const isFeatured = variant === "featured";
  const isWide = variant === "wide";

  if (variant === "standard") {
    return (
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="group relative flex min-h-[260px] w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--card-border)_78%,white)] bg-slate-950 text-start shadow-[0_14px_36px_rgba(15,23,42,0.08)] outline-none transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--brand-copper)_45%,var(--card-border))] hover:shadow-[0_22px_52px_rgba(15,23,42,0.13)] focus-visible:ring-2 focus-visible:ring-[var(--brand-copper)]/45 dark:border-white/10 dark:shadow-black/25 lg:min-h-[250px] lg:flex-col lg:bg-[color-mix(in_srgb,var(--surface)_88%,var(--background))] lg:dark:bg-[color-mix(in_srgb,var(--surface)_76%,var(--background))]"
        aria-label={`${lang === "ar" ? "عرض تفاصيل" : "View details"}: ${title}`}
      >
        <Image
          src={project.imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 1px, (min-width: 640px) 50vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.045] lg:hidden"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-slate-950/62 via-slate-950/16 to-transparent lg:hidden" />
        <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(360px_220px_at_50%_100%,rgba(184,116,42,0.18),transparent_62%)] lg:hidden" />

        <span className="absolute start-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-slate-950/28 text-xs font-extrabold text-white shadow-sm backdrop-blur lg:hidden">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-3 end-3 rounded-full border border-white/18 bg-white/14 px-3 py-1 text-[11px] font-extrabold text-white shadow-sm backdrop-blur lg:hidden">
          {getText(project.category, lang)}
        </span>

        <span className="relative mt-auto block w-full p-4 lg:hidden">
          <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
            {getText(project.location, lang)} / {project.year}
          </span>
          <span className="mt-2 block text-lg font-extrabold leading-tight text-white sm:text-xl">
            {title}
          </span>
          <span className="mt-3 block max-w-xl text-sm leading-relaxed text-white/76">
            {getText(project.description, lang)}
          </span>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white/88 transition group-hover:text-white">
            {lang === "ar" ? "عرض التفاصيل" : "View details"}
            <span
              aria-hidden
              className={lang === "ar" ? "transition group-hover:-translate-x-1" : "transition group-hover:translate-x-1"}
            >
              {lang === "ar" ? "←" : "→"}
            </span>
          </span>
        </span>

        <span className="relative hidden aspect-[16/10] w-full overflow-hidden bg-[var(--product-tile-bg)] lg:block">
          <Image
            src={project.imageUrl}
            alt={title}
            fill
            sizes="(min-width: 1024px) 24vw, 1px"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-slate-950/48 via-transparent to-transparent" />
          <span className="absolute start-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-slate-950/28 text-xs font-extrabold text-white shadow-sm backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute bottom-3 end-3 rounded-full border border-white/18 bg-white/14 px-3 py-1 text-[11px] font-extrabold text-white shadow-sm backdrop-blur">
            {getText(project.category, lang)}
          </span>
        </span>

        <span className="hidden flex-1 flex-col p-4 lg:flex">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-copper)]">
            {getText(project.location, lang)} / {project.year}
          </span>
          <span className="mt-2 text-lg font-extrabold leading-snug text-slate-900 dark:text-slate-100">
            {title}
          </span>
          <span className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {getText(project.description, lang)}
          </span>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--brand-copper)] transition group-hover:text-[var(--brand-copper-hover)]">
            {lang === "ar" ? "عرض التفاصيل" : "View details"}
            <span
              aria-hidden
              className={lang === "ar" ? "transition group-hover:-translate-x-1" : "transition group-hover:translate-x-1"}
            >
              {lang === "ar" ? "←" : "→"}
            </span>
          </span>
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className={`group relative flex w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--card-border)_72%,white)] bg-slate-950 text-start shadow-[0_20px_55px_rgba(15,23,42,0.12)] outline-none transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--brand-copper)_55%,white)] hover:shadow-[0_28px_75px_rgba(15,23,42,0.18)] focus-visible:ring-2 focus-visible:ring-[var(--brand-copper)]/45 dark:border-white/10 dark:shadow-black/35 ${
        isFeatured
          ? "min-h-[430px] lg:min-h-[600px]"
          : isWide
            ? "min-h-[300px] lg:min-h-[330px]"
            : "min-h-[260px] lg:min-h-[250px]"
      }`}
      aria-label={`${lang === "ar" ? "عرض تفاصيل" : "View details"}: ${title}`}
    >
      <Image
        src={project.imageUrl}
        alt={title}
        fill
        sizes={
          isFeatured
            ? "(min-width: 1024px) 58vw, 100vw"
            : "(min-width: 1024px) 42vw, 100vw"
        }
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
      />
      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.20)_34%,rgba(2,6,23,0.88))]" />
      <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(520px_280px_at_50%_100%,rgba(184,116,42,0.22),transparent_62%)]" />

      <span className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4 sm:p-5">
        <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur">
          {getText(project.category, lang)}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-white/12 text-xs font-extrabold text-white shadow-sm backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </span>

      <span className={`relative mt-auto block w-full p-4 sm:p-5 ${isFeatured ? "lg:p-7" : ""}`}>
        <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
          {getText(project.location, lang)} / {project.year}
        </span>
        <span
          className={`mt-2 block font-extrabold leading-tight text-white ${
            isFeatured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl"
          }`}
        >
          {title}
        </span>
        <span className="mt-3 block max-w-xl text-sm leading-relaxed text-white/76">
          {getText(project.description, lang)}
        </span>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white/88 transition group-hover:text-white">
          {lang === "ar" ? "عرض التفاصيل" : "View details"}
          <span
            aria-hidden
            className={lang === "ar" ? "transition group-hover:-translate-x-1" : "transition group-hover:translate-x-1"}
          >
            {lang === "ar" ? "←" : "→"}
          </span>
        </span>
      </span>
    </button>
  );
}

function DetailList({
  title,
  items,
  lang,
}: {
  title: string;
  items: Localized[];
  lang: Lang;
}) {
  return (
    <div>
      <h4 className="text-sm font-extrabold text-slate-900 dark:text-slate-100">{title}</h4>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <div
            key={getText(item, lang)}
            className="flex items-center gap-3 rounded-xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--background)_58%,transparent)] px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-white/[0.03] dark:text-slate-200"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-copper)]" />
            {getText(item, lang)}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetailsModal({
  project,
  lang,
  onClose,
}: {
  project: Project | null;
  lang: Lang;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end bg-slate-950/62 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-details-title"
      dir={dir}
    >
      <button
        type="button"
        aria-label={lang === "ar" ? "إغلاق تفاصيل المشروع" : "Close project details"}
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <div className="relative mx-auto grid max-h-[90vh] w-full max-w-6xl grid-rows-[minmax(220px,34vh)_minmax(0,1fr)] overflow-hidden rounded-t-2xl border border-white/16 bg-[var(--surface)] shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:max-h-[92vh] sm:rounded-2xl lg:max-h-[92vh] lg:grid-cols-[1.06fr_0.94fr] lg:grid-rows-1">
        <div className="relative min-h-[220px] shrink-0 bg-slate-950 sm:min-h-[420px] lg:min-h-0 lg:h-full">
          <Image
            src={project.imageUrl}
            alt={getText(project.title, lang)}
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 start-5 flex gap-2">
            {project.gallery.map((image, index) => (
              <div
                key={image}
                className="relative h-14 w-20 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-sm"
              >
                <Image
                  src={image}
                  alt={`${getText(project.title, lang)} ${index + 1}`}
                  fill
                  sizes="80px"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="min-h-0 overflow-y-auto overscroll-contain p-5 touch-pan-y sm:p-7 lg:max-h-[92vh] lg:p-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--brand-copper)]">
                {getText(project.category, lang)}
              </p>
              <h3
                id="project-details-title"
                className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 dark:text-slate-50 sm:text-3xl"
              >
                {getText(project.title, lang)}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--surface-elevated)] text-xl leading-none text-slate-700 transition hover:border-[var(--brand-copper)] hover:text-[var(--brand-copper)] dark:text-slate-200"
              aria-label={lang === "ar" ? "إغلاق" : "Close"}
            >
              ×
            </button>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            {getText(project.description, lang)}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {[
              { label: lang === "ar" ? "الموقع" : "Location", value: getText(project.location, lang) },
              { label: lang === "ar" ? "السنة" : "Year", value: project.year },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--background)_62%,transparent)] p-4 dark:bg-white/[0.03]"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {item.label}
                </div>
                <div className="mt-1 text-sm font-extrabold text-slate-900 dark:text-slate-100">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-7">
            <DetailList
              title={lang === "ar" ? "المواد المستخدمة" : "Materials Used"}
              items={project.materials}
              lang={lang}
            />
            <DetailList
              title={lang === "ar" ? "مميزات المشروع" : "Project Features"}
              items={project.features}
              lang={lang}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({
  lang,
}: {
  lang: Lang;
  data: SiteData;
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden border-t border-[var(--card-border)] bg-[var(--surface)] py-16 scroll-mt-[84px] dark:bg-[var(--shell-bg)] sm:py-20 md:scroll-mt-[104px]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_96%,white),var(--surface)_45%,color-mix(in_srgb,var(--background)_76%,var(--surface)))] dark:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--shell-bg)_94%,white_6%),color-mix(in_srgb,var(--shell-bg)_96%,var(--surface)),color-mix(in_srgb,var(--shell-bg)_88%,var(--background)))]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-copper)]/35 to-transparent"
        />

        <Container>
          <div className="relative" dir={dir}>
            <Reveal>
              <div className="max-w-5xl border-b border-[var(--card-border)] pb-7 sm:pb-8 lg:pb-9">
                <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.58fr)] lg:items-end lg:gap-10">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--brand-copper)] sm:text-xs">
                      {lang === "ar" ? "أعمال مختارة" : "Selected Work"}
                    </p>
                    <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.16] text-slate-900 dark:text-slate-50 sm:text-[2.15rem] lg:text-[2.7rem]">
                      {lang === "ar"
                        ? "مشاريع تعكس جودة بردين في كل تفصيل"
                        : "Projects shaped by precision, durability, and finish"}
                    </h2>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-7 grid gap-5 lg:mt-8 lg:grid-cols-[1.14fr_0.86fr]">
              <Reveal>
                <ProjectCard
                  project={projects[0]}
                  lang={lang}
                  index={0}
                  variant="featured"
                  onSelect={setSelectedProject}
                />
              </Reveal>

              <div className="grid gap-5">
                <Reveal delayMs={70}>
                  <ProjectCard
                    project={projects[1]}
                    lang={lang}
                    index={1}
                    variant="wide"
                    onSelect={setSelectedProject}
                  />
                </Reveal>

                <div className="grid gap-5 sm:grid-cols-2">
                  {projects.slice(2).map((project, index) => (
                    <Reveal key={project.id} delayMs={140 + index * 70}>
                      <ProjectCard
                        project={project}
                        lang={lang}
                        index={index + 2}
                        onSelect={setSelectedProject}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProjectDetailsModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
