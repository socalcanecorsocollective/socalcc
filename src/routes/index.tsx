import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ProductGrid } from "@/components/site/ProductGrid";
import { Bloodline } from "@/components/site/Bloodline";
import { PatchesPrints } from "@/components/site/PatchesPrints";
import { Collective } from "@/components/site/Collective";
import { DropsArchive } from "@/components/site/DropsArchive";
import { Lookbook } from "@/components/site/Lookbook";
import { Reserve } from "@/components/site/Reserve";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { SectionDivider } from "@/components/site/SectionDivider";
import { productsByCategory } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCCC — Chapter 001 · SoCal Cane Corso Co." },
      {
        name: "description",
        content:
          "SoCal Cane Corso Co. — an artist-run house of guardian apparel and pack gear. Chapter 001 authored by Xenvectors. Built on instinct. Defined by discipline.",
      },
      { property: "og:title", content: "SCCC — Chapter 001" },
      { property: "og:description", content: "Artist-run guardian goods. Chapter 001 by Xenvectors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase"
      >
        Skip to content
      </a>
      <SmoothScroll />
      <Nav />
      <CartDrawer />
      <main>
        <Hero />

        <ProductGrid
          id="apparel"
          eyebrow="Chapter I · Apparel"
          title={
            <>
              For the{" "}
              <span style={{ fontFamily: "var(--font-blackletter)", fontStyle: "italic" }} className="text-gold normal-case">Guardian</span>.
            </>
          }
          subtitle="Heavyweight cottons, hand-finished seams, and title-card typography. Cut for the ones who stand watch."
          products={productsByCategory("apparel")}
        />

        <SectionDivider label="Chapter II" />
        <Bloodline />

        <ProductGrid
          id="gear"
          eyebrow="Chapter III · Pack Gear"
          title={
            <>
              For the{" "}
              <span style={{ fontFamily: "var(--font-blackletter)", fontStyle: "italic" }} className="text-gold normal-case">Cane Corso</span>.
            </>
          }
          subtitle="MOLLE-ready harnesses, full-coverage vests, and lead systems engineered for working guardian breeds."
          products={productsByCategory("gear")}
          layout="uniform"
        />

        <PatchesPrints />
        <SectionDivider label="Chapter V" />
        <Collective />
        <DropsArchive />
        <Lookbook />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
