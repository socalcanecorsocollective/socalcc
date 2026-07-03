import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { Collective } from "@/components/site/Collective";

export const Route = createFileRoute("/collective")({
  head: () => ({
    meta: [
      { title: "The Collective — SCCC" },
      { name: "description", content: "SCCC is an artist-run house. Every chapter is authored, credited, and dated." },
      { property: "og:title", content: "The Collective — SCCC" },
      { property: "og:description", content: "Guest artists author each dated chapter of SCCC." },
    ],
  }),
  component: () => (
    <>
      <Nav />
      <CartDrawer />
      <main className="pt-24"><Collective /></main>
      <Footer />
    </>
  ),
});
