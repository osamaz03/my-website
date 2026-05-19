"use client";

import Image from "next/image";
import { useState } from "react";
import type { Lang } from "@/content/siteData";

type Props = {
  lang: Lang;
  imageSrc: string;
  imageAlt: string;
  logoSrc: string;
  logoAlt: string;
};

export default function HeroMedia({
  lang,
  imageSrc,
  imageAlt,
  logoSrc,
  logoAlt,
}: Props) {
  const [useLogo, setUseLogo] = useState(false);
  const isAr = lang === "ar";

  const innerFadePos = lang === "en" ? "start-0" : "end-0";
  const innerFadeGrad =
    lang === "en"
      ? "bg-gradient-to-r from-[var(--shell-bg)] via-[color-mix(in_srgb,var(--shell-bg)_55%,transparent)] to-transparent"
      : "bg-gradient-to-l from-[var(--shell-bg)] via-[color-mix(in_srgb,var(--shell-bg)_55%,transparent)] to-transparent";

  // Arabic light: use the same fade as English for consistency
  const arLightInnerFade =
    "bg-gradient-to-l from-[var(--shell-bg)] via-[color-mix(in_srgb,var(--shell-bg)_55%,transparent)] to-transparent";

  // Determine the correct image for light/dark mode and language
  // Default to the provided imageSrc for dark mode
  // For light mode, use the special light mode images
  // This uses the 'dark:' class to show/hide images based on color scheme
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {/* Light mode image */}
      <div className="dark:hidden h-full w-full">
        <Image
          src={lang === "ar" ? "/images/hero_image_light_mode_ar.jpeg" : "/images/hero_image_light_mode_en.jpeg"}
          alt={imageAlt}
          fill
          priority
          onError={() => setUseLogo(true)}
          className={`h-full w-full object-cover ${
            lang === "ar"
            ? "object-[10%_center]"
            : "object-[90%_center]"
            }`}
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
      </div>
      {/* Dark mode image (original) */}
      <div className="hidden dark:block h-full w-full">
        {useLogo ? (
          <div className="flex h-full w-full items-center justify-center bg-[var(--shell-bg)] p-10">
            <div className="relative h-28 w-full max-w-[260px] sm:h-36 sm:max-w-[320px]">
              <Image
                src={logoSrc}
                alt={logoAlt}
                fill
                className="object-contain opacity-90"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            onError={() => setUseLogo(true)}
            className={`h-full w-full object-cover ${
            lang === "ar"
            ? "object-[20%_center]"
            : "object-[80%_center]"
            }`}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        )}
      </div>

      {/* Desktop blend toward text column */}
      {isAr ? (
        <>
          {/* Dark mode — original fade (unchanged) */}
          <div
            className={`pointer-events-none absolute inset-y-0 z-[1] hidden w-[28%] max-w-[200px] dark:lg:block ${innerFadePos} ${innerFadeGrad}`}
            aria-hidden
          />
          {/* Light mode — very subtle only */}
          <div
            className={`pointer-events-none absolute inset-y-0 z-[1] hidden w-[14%] max-w-[96px] lg:block dark:lg:hidden ${innerFadePos} ${arLightInnerFade}`}
            aria-hidden
          />
        </>
      ) : (
        <div
          className={`pointer-events-none absolute inset-y-0 z-[1] hidden w-[28%] max-w-[200px] lg:block ${innerFadePos} ${innerFadeGrad}`}
          aria-hidden
        />
      )}

      {/* Mobile top — Arabic light: off; dark unchanged */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 z-[1] h-14 bg-gradient-to-b from-[var(--shell-bg)] to-transparent sm:h-20 lg:hidden ${
          isAr ? "hidden dark:max-lg:block" : ""
        }`}
        aria-hidden
      />
      {/* */}
      {/* Mobile bottom — Arabic light: off; dark unchanged */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16 bg-gradient-to-t from-[var(--shell-bg)] via-[color-mix(in_srgb,var(--shell-bg)_45%,transparent)] to-transparent sm:h-24 lg:hidden ${
          isAr ? "hidden dark:max-lg:block" : ""
        }`}
        aria-hidden
      />
    </div>
  );
}
