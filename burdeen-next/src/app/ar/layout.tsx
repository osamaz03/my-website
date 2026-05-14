import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import DocumentLang from "@/components/DocumentLang";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteData } from "@/content/siteData";

const tajawal = Tajawal({
  weight: ["400", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Burdeen",
  description: siteData.ar.heroDescription,
};

export default function ArLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const lang = "ar" as const;
  const data = siteData[lang];

  return (
    <>
      <DocumentLang lang={lang} />
      <div className={`${tajawal.className} min-h-dvh flex flex-col antialiased`}>
        <Header lang={lang} data={data} />
        <main className="flex-1 bg-[var(--background)]">{children}</main>
        <Footer lang={lang} data={data} />
        <WhatsAppFloat lang={lang} />
      </div>
    </>
  );
}
