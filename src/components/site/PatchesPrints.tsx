import { ProductGrid } from "./ProductGrid";
import { productsByCategory } from "@/lib/products";

export function PatchesPrints() {
  return (
    <ProductGrid
      id="patches"
      eyebrow="Chapter IV · Patches & Prints"
      title={<>Collectible <span style={{ fontFamily: "var(--font-blackletter)" }} className="text-gold normal-case italic">Entries</span>.</>}
      subtitle="Morale patches, MOLLE hook-backs, and numbered archival prints — small pieces of the founding chapter."
      products={productsByCategory("patches")}
      layout="uniform"
    />
  );
}
