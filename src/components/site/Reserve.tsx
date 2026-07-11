import { motion } from "framer-motion";
import crest from "@/assets/crest-gold.png.asset.json";

const ease = [0.19, 1, 0.22, 1] as const;

export function Reserve() {
  return (
    <section id="reserve" className="relative py-32 md:py-44 bg-ink grain vignette overflow-hidden">
      <img
        src={crest.url}
        alt=""
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[110%] w-auto opacity-[0.06]"
      />
      <div className="container-editorial relative">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Chapter VIII · Reserve</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="title-lg text-cream mb-10"
          >
            Hold Your Place in Drop 001.
          </motion.h2>
          <p className="text-mist text-base leading-relaxed max-w-xl mb-12">
            A refundable $25 deposit reserves your size and gear allocation before
            public release. Notified 48 hours ahead. No queues, no bots — just the pack.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-0 max-w-xl border border-gold/40"
          >
            <label className="sr-only" htmlFor="reserve-email">Email address</label>
            <input
              id="reserve-email"
              type="email"
              required
              placeholder="you@bloodline.com"
              className="flex-1 bg-transparent px-5 py-4 text-cream placeholder:text-muted-ink focus:outline-none focus:bg-panel/60 text-sm tracking-wider"
            />
            <button type="submit" className="btn-reserve border-0 border-l border-gold/40 sm:border-l bg-gold text-ink hover:bg-gold-bright">
              Reserve →
            </button>
          </form>
          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted-ink">
            $25 deposit · Fully refundable · Shipping Q3 MMXXVI
          </p>
        </div>
      </div>
    </section>
  );
}
