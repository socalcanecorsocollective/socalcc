import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { Bloodline } from "@/components/site/Bloodline";

export const Route = createFileRoute("/bloodline")({
  head: () => ({
    meta: [
      { title: "The Bloodline — SCCC" },
      { name: "description", content: "From Roman battlefields to Southern California streets, the Corso has stood the line." },
    ],
  }),
  component: () => (
    <>
      <Nav />
      <CartDrawer />
      <main className="pt-24"><Bloodline /></main>
      <Footer />
    </>
  ),
});
