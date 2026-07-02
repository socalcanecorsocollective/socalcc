import { motion } from "framer-motion";
import crestItalia from "@/assets/crest-italia.png.asset.json";
import monogram from "@/assets/monogram.png.asset.json";

const ease = [0.19, 1, 0.22, 1] as const;

export function Bloodline() {
  return (
    <section id="bloodline" className="relative py-32 md:py-48 bg-panel grain overflow-hidden">
      <div className="container-editorial grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.4, ease }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] bg-ink overflow-hidden">
            <div className="pointer-events-none absolute inset-4 border border-gold/25" />
            <img
              src={crestItalia.url}
              alt="SCCC Italian heritage crest"
              className="absolute inset-0 w-full h-full object-contain p-10"
            />
            <span className="absolute bottom-5 left-5 eyebrow text-cream/50 text-[0.6rem]">
              Cane · Corso · Italiano
            </span>
          </div>
        </motion.div>

        <div className="md:col-span-7">
          <p className="eyebrow mb-6">Origin · The Bloodline</p>
          <h2 className="title-lg text-cream mb-10">
            The{" "}
            <span
              className="text-gold normal-case italic align-baseline"
              style={{ fontFamily: "var(--font-blackletter)" }}
            >
              Bloodline
            </span>
            <br />
            Runs Deep.
          </h2>
          <div className="space-y-6 max-w-xl text-mist leading-relaxed">
            <p className="text-cream text-lg leading-relaxed">
              <span
                className="float-left mr-3 mt-1 text-gold"
                style={{
                  fontFamily: "var(--font-blackletter)",
                  fontSize: "3.5rem",
                  lineHeight: 0.9,
                }}
              >
                F
              </span>
              rom Roman battlefields to Southern California streets, the Corso has
              stood the line — a working guardian carved by centuries of quiet
              discipline. SCCC exists to honor that line.
            </p>
            <p>
              Every piece in this collection is designed for the ones who
              understand the weight of standing watch — for the handler, the pack,
              and the breed. Cut heavy. Finished by hand. Made to be trusted.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <span className="h-3 w-8 bg-it-green" />
              <span className="h-3 w-8 bg-it-white" />
              <span className="h-3 w-8 bg-it-red" />
              <span className="ml-3 text-xs tracking-[0.28em] uppercase text-muted-ink">
                Italian Heritage · Est. MMXX
              </span>
            </div>
          </div>
        </div>
      </div>

      <img
        src={monogram.url}
        alt=""
        aria-hidden
        className="hidden md:block absolute -bottom-10 right-10 h-40 w-auto opacity-[0.06]"
      />
    </section>
  );
}
