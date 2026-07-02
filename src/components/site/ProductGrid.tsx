import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

const ease = [0.19, 1, 0.22, 1] as const;

function PlaceholderFrame({ label, tactical }: { label: string; tactical?: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center overflow-hidden ${
        tactical ? "bg-smoke" : "bg-panel"
      }`}
    >
      {tactical && (
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0 22px, rgba(244,240,232,.12) 22px 23px), repeating-linear-gradient(90deg, transparent 0 22px, rgba(244,240,232,.12) 22px 23px)",
          }}
        />
      )}
      <div className="pointer-events-none absolute inset-4 border border-gold/15" />
      <span
        className="relative font-display text-cream/10 select-none"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}
      >
        {label.split(" ").slice(-1)[0].slice(0, 3).toUpperCase()}
      </span>
      <span className="absolute bottom-3 left-4 eyebrow text-cream/30 text-[0.55rem]">
        {tactical ? "SCCC · PACK GEAR" : "SCCC · APPAREL"}
      </span>
    </div>
  );
}

function ProductCard({
  product,
  aspect,
  tactical,
}: {
  product: Product;
  aspect: string;
  tactical?: boolean;
}) {
  return (
    <motion.a
      href="#reserve"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease }}
      className="group block"
    >
      <div className={`relative w-full ${aspect} overflow-hidden`}>
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease }}
        >
          <PlaceholderFrame label={product.name} tactical={tactical} />
        </motion.div>
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-gold text-ink px-2.5 py-1 text-[0.6rem] tracking-[0.28em] uppercase font-bold">
            New
          </span>
        )}
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
          <span className="eyebrow text-cream">View →</span>
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
        </div>
        <span className="font-sans text-gold text-sm tracking-widest tabular-nums">
          ${product.price}
        </span>
      </div>
    </motion.a>
  );
}

// asymmetric magazine layout — cycles through varied aspects
const apparelAspects = [
  "aspect-[4/5]",
  "aspect-[3/4] md:mt-16",
  "aspect-[4/5]",
  "aspect-[1/1] md:mt-12",
  "aspect-[3/4]",
  "aspect-[4/5] md:mt-20",
];

export function ProductGrid({
  id,
  eyebrow,
  title,
  subtitle,
  products,
  tactical,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  products: Product[];
  tactical?: boolean;
}) {
  return (
    <section id={id} className="relative py-28 md:py-40 bg-ink">
      <div className="container-editorial">
        <div className="grid md:grid-cols-[auto_1fr] md:items-end gap-8 mb-16 md:mb-24">
          <div>
            <p className="eyebrow mb-5">{eyebrow}</p>
            <h2 className="title-lg text-cream">{title}</h2>
          </div>
          {subtitle && (
            <p className="md:justify-self-end md:text-right md:max-w-sm text-mist text-sm leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="hairline mb-16 md:mb-20" />

        {tactical ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} aspect="aspect-[4/5]" tactical />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-14 md:gap-y-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} aspect={apparelAspects[i % apparelAspects.length]} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
