import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { Reserve } from "@/components/site/Reserve";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve — SCCC Drop 001" },
      { name: "description", content: "A $25 refundable deposit reserves your size and pack-gear allocation before public release." },
    ],
  }),
  component: () => (
    <>
      <Nav />
      <CartDrawer />
      <main className="pt-24"><Reserve /></main>
      <Footer />
    </>
  ),
});
