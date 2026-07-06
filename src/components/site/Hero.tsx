import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-corsos.jpg.asset.json";
import wordmark from "@/assets/wordmark.png.asset.json";
import monogram from "@/assets/monogram.png.asset.json";
import { useMagnetic } from "@/hooks/useMagnetic";

const ease = [0.19, 1, 0.22, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[720px] overflow-hidden bg-ink">
      {/* Backdrop image — ken-burns parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg.url}
          alt="Three Cane Corsos in tactical SCCC gear on cathedral steps"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          fetchPriority="high"
        />
        {/* atmospheric layers — darker at edges, subject stays legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" style={{ backgroundSize: "100% 55%", backgroundRepeat: "no-repeat", backgroundPosition: "bottom" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40" />
        {/* subject vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 0%, transparent 35%, rgba(0,0,0,0.55) 90%)" }} />
      </motion.div>

      {/* grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.96 0 0 0 0 0.94 0 0 0 0 0.9 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* gold hairline frame */}
      <div className="pointer-events-none absolute inset-4 md:inset-8 border border-gold/30" />
      <div className="pointer-events-none absolute top-4 md:top-8 left-1/2 -translate-x-1/2 h-5 w-px bg-gold/60" />
      <div className="pointer-events-none absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 h-5 w-px bg-gold/60" />

      {/* corner marks */}
      {[
        "top-4 left-4 md:top-8 md:left-8",
        "top-4 right-4 md:top-8 md:right-8",
        "bottom-4 left-4 md:bottom-8 md:left-8",
        "bottom-4 right-4 md:bottom-8 md:right-8",
      ].map((pos, i) => (
        <div key={i} className={`pointer-events-none absolute ${pos} w-3 h-3`}>
          <span className="absolute inset-0 border-l border-t border-gold" style={{ transform: i === 1 ? "scaleX(-1)" : i === 2 ? "scaleY(-1)" : i === 3 ? "scale(-1)" : undefined }} />
        </div>
      ))}

      <motion.div
        style={{ opacity, y: textY }}
        className="container-editorial relative h-full flex flex-col justify-between py-16 md:py-24"
      >
        {/* top row: eyebrow + monogram */}
        <div className="flex items-start justify-between gap-6 pt-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-gold/70" />
            <span className="eyebrow">Chapter 001 · MMXXVI</span>
          </motion.div>
          <motion.img
            src={monogram.url}
            alt=""
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ duration: 1.4, ease, delay: 0.4 }}
            className="hidden sm:block h-6 w-auto"
          />
        </div>

        {/* main title anchored bottom */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="eyebrow mb-6 text-gold-bright"
          >
            Limited Release
          </motion.p>

          <h1 className="title-xl text-cream">
            {["Drop", "001."].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.3, ease, delay: 0.4 + i * 0.14 }}
                  className="block"
                  style={i === 1 ? { color: "var(--gold)" } : undefined}
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
              transition={{ duration: 1, ease, delay: 0.9 }}
              className="max-w-md text-mist text-sm md:text-base leading-relaxed"
            >
              A cinematic first chapter of guardian apparel and pack gear —
              forged for the ones who lead the line.{" "}
              <span className="text-cream">SoCal born. Corso bred.</span>
            </motion.p>
            <motion.a
              href="#apparel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1.05 }}
              className="btn-reserve self-end bg-gold text-ink hover:bg-gold-bright"
            >
              Shop Drop 001 →
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* wordmark bottom-right watermark */}
      <img
        src={wordmark.url}
        alt=""
        aria-hidden
        className="hidden md:block absolute bottom-14 right-14 h-5 w-auto opacity-40 z-10"
      />

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="eyebrow text-cream/60 text-[0.55rem]">Scroll</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gold/70"
        />
      </motion.div>
    </section>
  );
}
