import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { StatementBand } from "@/components/site/StatementBand";
import { ProductGrid } from "@/components/site/ProductGrid";
import { Bloodline } from "@/components/site/Bloodline";
import { Lookbook } from "@/components/site/Lookbook";
import { Reserve } from "@/components/site/Reserve";
import { Footer } from "@/components/site/Footer";
import { apparel, packGear } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCCC — Drop 001 · SoCal Cane Corso Co." },
      {
        name: "description",
        content:
          "Drop 001 — a limited release of cinematic guardian apparel and pack gear from SoCal Cane Corso Co. Built on instinct. Defined by discipline.",
      },
      { property: "og:title", content: "SCCC — Drop 001" },
      { property: "og:description", content: "A limited release of guardian apparel and Cane Corso pack gear." },
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
      <main>
        <Hero />
        <StatementBand />
        <ProductGrid
          id="apparel"
          eyebrow="Chapter I · Apparel"
          title={
            <>
              For the <span style={{ fontFamily: "var(--font-blackletter)", fontStyle: "italic" }} className="text-gold normal-case">Guardian</span>.
            </> as unknown as string
          }
          subtitle="Heavyweight cottons, hand-finished seams, and title-card typography. Cut for the ones who stand watch."
          products={apparel}
        />
        <Bloodline />
        <ProductGrid
          id="gear"
          eyebrow="Chapter III · Pack Gear"
          title={
            <>
              For the <span style={{ fontFamily: "var(--font-blackletter)", fontStyle: "italic" }} className="text-gold normal-case">Cane Corso</span>.
            </> as unknown as string
          }
          subtitle="MOLLE-ready harnesses, full-coverage vests, and lead systems engineered for working guardian breeds."
          products={packGear}
          tactical
        />
        <Lookbook />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
