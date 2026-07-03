import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import { categories } from "@/lib/types";
import type { Category } from "@/lib/types";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — SCCC" },
      { name: "description", content: "Apparel, pack gear, patches and prints — the full SCCC catalog." },
      { property: "og:title", content: "Shop — SCCC" },
      { property: "og:description", content: "The full SCCC catalog." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const list = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <Nav />
      <CartDrawer />
      <main className="bg-ink pt-32 pb-24">
        <div className="container-editorial">
          <p className="eyebrow mb-5">The Catalog</p>
          <h1 className="title-xl text-cream mb-10">Shop.</h1>
          <div className="hairline mb-10" />

          <div className="flex flex-wrap gap-3 mb-12">
            {(["all", ...categories.map((c) => c.id)] as const).map((k) => {
              const label = k === "all" ? "All" : categories.find((c) => c.id === k)?.label;
              const active = filter === k;
              return (
                <button
                  key={k}
                  onClick={() => setFilter(k)}
                  className={`px-4 py-2 border text-xs tracking-[0.24em] uppercase transition-colors ${
                    active ? "border-gold text-gold" : "border-gold/25 text-cream/60 hover:border-gold/60"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
            {list.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
