import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { Lookbook } from "@/components/site/Lookbook";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook — SCCC" },
      { name: "description", content: "Cinematic letterboxed stills from the making of Chapter 001." },
    ],
  }),
  component: () => (
    <>
      <Nav />
      <CartDrawer />
      <main className="pt-24"><Lookbook /></main>
      <Footer />
    </>
  ),
});
