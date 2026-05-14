"use client";

import { useMemo, useState } from "react";
import type { Lang, ProductCategory, ProductCategoryId, SiteData } from "@/content/siteData";
import Container from "@/components/Container";

function ProductGrid({ items }: { items: SiteData["productTabs"][number]["items"] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((p) => (
        <article
          key={p.id}
          className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:shadow-black/20"
        >
          <div className="relative flex min-h-[260px] flex-1 overflow-hidden bg-[var(--product-tile-bg)] sm:min-h-[300px]">
          <img
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              src={p.imageUrl}
              alt={p.title}
            />
          </div>
          <div className="border-t border-[var(--card-border)] p-4">
            <h3 className="text-sm font-semibold leading-snug text-slate-900 dark:text-slate-100 sm:text-base">{p.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ProductsSection({ lang, data }: { lang: Lang; data: SiteData }) {
  const [active, setActive] = useState<ProductCategoryId>(data.productTabs[0]?.id ?? "wood");

  const activeCategory: ProductCategory | undefined = useMemo(() => {
    return data.productTabs.find((c) => c.id === active);
  }, [active, data.productTabs]);

  return (
    <section id="products" className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            {data.productsTitle}
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[var(--brand-copper)]" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {data.productTabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm font-bold transition sm:px-6 ${
                  isActive
                    ? "border-[var(--brand-copper)] bg-[var(--brand-copper)] text-white shadow-md shadow-[var(--brand-copper)]/25"
                    : "border-[var(--card-border)] bg-[var(--surface)] text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        <div className="mt-10">{activeCategory ? <ProductGrid items={activeCategory.items} /> : null}</div>
      </Container>
    </section>
  );
}
