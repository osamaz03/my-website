"use client";

import { siteData, type Lang } from "@/content/siteData";

export default function WhatsAppFloat({ lang }: { lang: Lang }) {
  const data = siteData[lang];

  return (
    <a
      href={data.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-[1.06] end-5"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
      }}
      title={data.whatsapp.title}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </a>
  );
}

