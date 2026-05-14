"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  imageSrc: string;
  imageAlt: string;
  logoSrc: string;
  logoAlt: string;
};

export default function HeroMedia({
  imageSrc,
  imageAlt,
 logoSrc,
  logoAlt,
}: Props) {
  const [useLogo, setUseLogo] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
      <div className="group relative aspect-[16/9] overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--product-tile-bg)] shadow-2xl shadow-black/10 dark:shadow-black/40">

        {/* Hover Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>

        {/* Border Ring */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5 dark:ring-white/10"
          aria-hidden
        />

        {useLogo ? (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--surface)] to-[var(--background)] p-8">

            {/* Logo fallback */}
            <div className="relative h-28 w-full max-w-[260px] sm:h-36 sm:max-w-[320px]">
              <Image
                src={logoSrc}
                alt={logoAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </div>
        ) : (
          <>
            {/* Main Hero Image */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              onError={() => setUseLogo(true)}
              className="object-cover object-center transition-transform duration-700 will-change-transform group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Cinematic Dark Overlay */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent"
              aria-hidden
            />

            {/* Warm Luxury Light */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,80,0.18),transparent_55%)]"
              aria-hidden
            />

            {/* Soft Vignette */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.28)_100%)]"
              aria-hidden
            />

            {/* Glass Reflection */}
            <div
              className="pointer-events-none absolute -left-20 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40 transition duration-700 group-hover:translate-x-[250%]"
              aria-hidden
            />
          </>
        )}

        {/* Amber Glow */}
        <div
          className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[var(--brand-amber)]/20 blur-3xl"
          aria-hidden
        />
      </div>
    </div>
  );
}