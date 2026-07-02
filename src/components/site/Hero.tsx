import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import crest from "@/assets/crest-gold.png.asset.json";
import wordmark from "@/assets/wordmark.png.asset.json";

const ease = [0.19, 1, 0.22, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[720px] overflow-hidden grain vignette">
      {/* Backdrop crest */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={crest.url}
          alt=""
          aria-hidden
          className="h-[130%] w-auto max-w-none opacity-[0.09] select-none"
        />
      </motion.div>

      {/* gold hairline frame */}
      <div className="pointer-events-none absolute inset-6 md:inset-10 border border-gold/25" />
      <div className="pointer-events-none absolute top-6 md:top-10 left-1/2 -translate-x-1/2 h-6 w-px bg-gold/40" />

      <motion.div
        style={{ opacity }}
        className="container-editorial relative h-full flex flex-col justify-end pb-20 md:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease }}
          className="eyebrow mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold/60" />
          Limited Release · MMXXVI
        </motion.p>

        <h1 className="title-xl text-cream">
          {["DROP", "001"].map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease, delay: 0.1 + i * 0.12 }}
                className="block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 md:mt-14 grid md:grid-cols-[1fr_auto] items-end gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
            className="max-w-md text-mist text-sm md:text-base leading-relaxed"
          >
            A cinematic first chapter of guardian apparel and pack gear —
            forged for the ones who lead the line. SoCal born, Corso bred.
          </motion.p>
          <motion.a
            href="#apparel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.7 }}
            className="btn-reserve self-end"
          >
            Shop Drop 001 →
          </motion.a>
        </div>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="eyebrow text-cream/50 text-[0.6rem]">Scroll</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gold/60"
        />
      </div>

      {/* wordmark bottom-right watermark */}
      <img
        src={wordmark.url}
        alt=""
        aria-hidden
        className="hidden md:block absolute bottom-14 right-14 h-6 w-auto opacity-25"
      />
    </section>
  );
}
