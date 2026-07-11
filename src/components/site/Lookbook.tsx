import { motion } from "framer-motion";

const frames = [
  { label: "Watchtower", tag: "01 / Field" },
  { label: "Discipline", tag: "02 / Studio" },
  { label: "The Pack", tag: "03 / Coastline" },
  { label: "Standard", tag: "04 / Portrait" },
  { label: "Guardian", tag: "05 / Interior" },
  { label: "Bloodline", tag: "06 / Heritage" },
];

export function Lookbook() {
  return (
    <section id="lookbook" className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="container-editorial mb-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="eyebrow mb-5">Chapter VIII · Lookbook</p>
            <h2 className="title-lg text-cream">Lookbook.</h2>
          </div>
          <p className="text-mist text-sm max-w-xs">
            Frames from the making of Drop 001 — cinematic letterboxed stills.
          </p>
        </div>
      </div>

      <div className="hairline container-editorial mb-10" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-px-8 px-6 md:px-12"
        style={{ scrollbarWidth: "none" }}
      >
        {frames.map((f, i) => (
          <div
            key={f.label}
            className="relative shrink-0 snap-start w-[78vw] md:w-[520px] aspect-[21/9] bg-panel overflow-hidden group"
          >
            <div className="pointer-events-none absolute inset-3 border border-gold/15" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-display uppercase text-cream/8 tracking-tight"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "rgba(244,240,232,0.06)" }}
              >
                {f.label}
              </span>
            </div>
            <div className="absolute inset-x-0 top-0 h-[10%] bg-ink" />
            <div className="absolute inset-x-0 bottom-0 h-[10%] bg-ink" />
            <div className="absolute bottom-[12%] left-5 flex items-center gap-3">
              <span className="h-px w-6 bg-gold" />
              <span className="eyebrow text-cream/60 text-[0.6rem]">{f.tag}</span>
            </div>
            <div className="absolute top-[12%] right-5 eyebrow text-cream/40 text-[0.55rem]">
              0{i + 1} / 06
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
