import { siteData } from "@/content/siteData";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import WhyBurdeenSection from "@/components/WhyBurdeenSection";
import VisitUsSection from "@/components/VisitUsSection";
import WorkingHoursSection from "@/components/WorkingHoursSection";

export default function EnPage() {
  const lang = "en" as const;
  const data = siteData[lang];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero lang={lang} data={data} />

      {/* New sections */}
      <WhyBurdeenSection lang={lang} data={data} />

      {/* Products */}
      <ProductsSection lang={lang} data={data} />

      {/* About */}
      <AboutSection lang={lang} data={data} />

      {/* Visit Us / Google Maps */}
      <VisitUsSection lang={lang} data={data} />

      {/* Working Hours */}
      <WorkingHoursSection lang={lang} data={data} />


      {/* Contact */}
      <ContactSection lang={lang} data={data} />
    </div>
  );
}


