import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { getProduct, productsByArtist } from "@/lib/products";
import { getArtist } from "@/lib/artists";
import { getDrop } from "@/lib/drops";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/site/ProductCard";

const ease = [0.19, 1, 0.22, 1] as const;

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — SCCC` },
        { name: "description", content: p.desc ?? `${p.name} — SoCal Cane Corso Co.` },
        { property: "og:title", content: `${p.name} — SCCC` },
        { property: "og:description", content: p.desc ?? "" },
        ...(p.images[0] ? [{ property: "og:image", content: p.images[0] }] : []),
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-ink text-cream">
      <div className="text-center">
        <p className="eyebrow mb-4">Not found</p>
        <Link to="/shop" className="btn-reserve">Back to Shop</Link>
      </div>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const artist = getArtist(product.artistId);
  const drop = getDrop(product.chapterId);
  const [size, setSize] = useState(product.sizes?.[0] ?? "One Size");
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const related = productsByArtist(product.artistId).filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Nav />
      <CartDrawer />
      <main className="bg-ink pt-28 md:pt-36 pb-24">
        <div className="container-editorial">
          <nav className="text-[0.6rem] tracking-[0.32em] uppercase text-muted-ink mb-10">
            <Link to="/shop" className="hover:text-gold">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-cream/70">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}
              className="relative aspect-[4/5] bg-panel overflow-hidden"
            >
              {product.images[0] ? (
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center px-8">
                  <span className="text-[0.55rem] tracking-[0.4em] uppercase text-muted-ink">Image Forthcoming</span>
                  <span className="mt-3 h-px w-10 bg-gold/40" />
                  <span className="mt-3 font-display uppercase text-cream/40 text-2xl tracking-widest">{product.name}</span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-3 border border-gold/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.1 }}
            >
              {drop && artist && (
                <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold mb-6">
                  <Link to="/artist/$id" params={{ id: artist.id }} className="hover:underline">
                    Art by {artist.name}
                  </Link>
                  {" · "}
                  Chapter {drop.chapter.toString().padStart(3, "0")}
                </p>
              )}
              <h1 className="title-lg text-cream mb-6">{product.name}</h1>
              <p className="text-gold text-2xl tabular-nums mb-8">${product.price}</p>
              {product.desc && <p className="text-mist text-base leading-relaxed mb-10 max-w-md">{product.desc}</p>}

              {product.sizes && product.sizes.length > 1 && (
                <div className="mb-8">
                  <p className="text-[0.6rem] tracking-[0.32em] uppercase text-muted-ink mb-3">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`px-4 py-2 border text-xs tracking-widest uppercase transition-colors ${
                          size === s ? "border-gold text-gold" : "border-gold/25 text-cream/60 hover:border-gold/60"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <p className="text-[0.6rem] tracking-[0.32em] uppercase text-muted-ink mb-3">Quantity</p>
                <div className="inline-flex items-center border border-gold/30">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 text-cream hover:text-gold">−</button>
                  <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-10 h-10 text-cream hover:text-gold">+</button>
                </div>
              </div>

              <button
                onClick={() => add({ productId: product.id, name: product.name, price: product.price, size, qty, image: product.images[0] })}
                className="btn-reserve bg-gold text-ink hover:bg-gold-bright w-full sm:w-auto justify-center"
              >
                Add to Cart — ${product.price * qty}
              </button>
              <p className="mt-6 text-[0.55rem] tracking-[0.32em] uppercase text-muted-ink">
                Shipping Q3 MMXXVI · Cinematic guardian goods
              </p>
            </motion.div>
          </div>

          {related.length > 0 && (
            <div className="mt-32">
              <div className="hairline mb-10" />
              <p className="eyebrow mb-8">From the same chapter</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
