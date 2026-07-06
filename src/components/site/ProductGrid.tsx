import type { ReactNode } from "react";
import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";

const apparelAspects = [
  "aspect-[4/5]",
  "aspect-[3/4] md:mt-16",
  "aspect-[4/5]",
  "aspect-[1/1] md:mt-12",
  "aspect-[3/4]",
  "aspect-[4/5] md:mt-20",
];

export function ProductGrid({
  id,
  eyebrow,
  title,
  subtitle,
  products,
  layout = "asymmetric",
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  products: Product[];
  layout?: "asymmetric" | "uniform";
}) {
  return (
    <section id={id} className="relative py-28 md:py-40 bg-ink">
      <div className="container-editorial">
        <div className="grid md:grid-cols-[auto_1fr] md:items-end gap-8 mb-16 md:mb-24">
          <div>
            <p className="eyebrow mb-5">{eyebrow}</p>
            <h2 className="title-lg text-cream">{title}</h2>
          </div>
          {subtitle && (
            <p className="md:justify-self-end md:text-right md:max-w-sm text-mist text-sm leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="hairline mb-16 md:mb-20" />

        {layout === "uniform" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} aspect="aspect-[4/5]" index={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-14 md:gap-y-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} aspect={apparelAspects[i % apparelAspects.length]} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
