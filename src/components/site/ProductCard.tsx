import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/types";
import { getArtist } from "@/lib/artists";
import { getDrop } from "@/lib/drops";

const ease = [0.19, 1, 0.22, 1] as const;
const revealEase = [0.16, 1, 0.3, 1] as const;

export function ProductCard({
  product,
  aspect = "aspect-[4/5]",
  index = 0,
}: {
  product: Product;
  aspect?: string;
  index?: number;
}) {
  const artist = getArtist(product.artistId);
  const drop = getDrop(product.chapterId);
  const hasImage = product.images.length > 0;
  // Stagger within a row only (max 80ms per neighbor, cap at 3 columns).
  const delay = (index % 3) * 0.08;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: revealEase, delay }}
      className="group"
    >
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="block"
        aria-label={`${product.name} — $${product.price}`}
      >
        <div className={`relative w-full ${aspect} overflow-hidden bg-panel`}>
          {hasImage ? (
            <motion.img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-smoke text-center px-6">
              <span className="text-[0.55rem] tracking-[0.4em] uppercase text-muted-ink">
                Image Forthcoming
              </span>
              <span className="mt-3 h-px w-10 bg-gold/40" />
              <span className="mt-3 font-display text-cream/40 uppercase text-sm tracking-widest">
                {product.name}
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-3 border border-gold/15 group-hover:border-gold/40 transition-colors duration-500" />

          {product.isNew && (
            <span className="absolute top-4 left-4 bg-gold text-ink px-2.5 py-1 text-[0.6rem] tracking-[0.28em] uppercase font-bold">
              New
            </span>
          )}
          {product.category === "gear" && (
            <span className="absolute top-4 right-4 text-[0.55rem] tracking-[0.28em] uppercase text-cream/70 bg-ink/60 px-2 py-1 backdrop-blur-sm">
              Pack Gear
            </span>
          )}
          {product.category === "patches" && (
            <span className="absolute top-4 right-4 text-[0.55rem] tracking-[0.28em] uppercase text-cream/70 bg-ink/60 px-2 py-1 backdrop-blur-sm">
              Print
            </span>
          )}

          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
            <span className="text-[0.65rem] tracking-[0.28em] uppercase text-gold">View →</span>
            <span className="font-sans text-cream text-xs tracking-widest">${product.price}</span>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-sans text-cream text-sm md:text-base uppercase tracking-[0.14em] font-semibold group-hover:text-gold transition-colors">
              <span className="relative inline-block">
                {product.name}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out" />
              </span>
            </h3>
            {product.note && (
              <p className="mt-1.5 text-mist text-xs leading-relaxed max-w-xs">{product.note}</p>
            )}
            {artist && drop && (
              <p className="mt-2 text-[0.6rem] tracking-[0.28em] uppercase text-gold/80">
                Art by {artist.name} · Chapter {drop.chapter.toString().padStart(3, "0")}
              </p>
            )}
          </div>
          <span className="font-sans text-gold text-sm tracking-widest tabular-nums shrink-0">
            ${product.price}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
