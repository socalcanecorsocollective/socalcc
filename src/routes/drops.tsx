import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { DropsArchive } from "@/components/site/DropsArchive";

export const Route = createFileRoute("/drops")({
  head: () => ({
    meta: [
      { title: "Drops Archive — SCCC" },
      { name: "description", content: "Every SCCC chapter, dated and credited. Chapter 001 live. Future chapters open on release." },
    ],
  }),
  component: () => (
    <>
      <Nav />
      <CartDrawer />
      <main className="pt-24"><DropsArchive /></main>
      <Footer />
    </>
  ),
});
