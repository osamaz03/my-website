import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import DocumentLang from "@/components/DocumentLang";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteData } from "@/content/siteData";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burdeen",
  description: siteData.en.heroDescription,
};

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const lang = "en" as const;
  const data = siteData[lang];

  return (
    <>
      <DocumentLang lang={lang} />
      <div className={`${poppins.className} min-h-dvh flex flex-col antialiased`}>
        <Header lang={lang} data={data} />
        <main className="flex-1 bg-[var(--background)]">{children}</main>
        <Footer lang={lang} data={data} />
        <WhatsAppFloat lang={lang} />
      </div>
    </>
  );
}
