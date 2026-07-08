import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { artists } from "@/lib/artists";
import guest002 from "@/assets/collective-guest-002.jpg.asset.json";
import guest003 from "@/assets/collective-guest-003.jpg.asset.json";

const ease = [0.19, 1, 0.22, 1] as const;

export function Collective() {
  const [sent, setSent] = useState(false);

  return (
    <section id="collective" className="relative py-28 md:py-40 bg-panel grain overflow-hidden">
      <div className="container-editorial">
        <div className="grid md:grid-cols-[auto_1fr] md:items-end gap-8 mb-16 md:mb-24">
          <div>
            <p className="eyebrow mb-5">Chapter VI · The Collective</p>
            <h2 className="title-lg text-cream">
              Authored by <span style={{ fontFamily: "var(--font-blackletter)" }} className="text-gold normal-case italic">Artists</span>.
            </h2>
          </div>
          <p className="md:justify-self-end md:text-right md:max-w-sm text-mist text-sm leading-relaxed">
            SCCC is an artist-run house. Each chapter is authored, credited, and dated.
            Xenvectors leads the founding release. Guest artists follow.
          </p>
        </div>

        <div className="hairline mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
              className="group relative"
            >
              <Link to="/artist/$id" params={{ id: a.id }} className="block">
                <div className="relative aspect-[4/5] bg-ink border border-gold/20 overflow-hidden">
                  <img
                    src={a.portrait}
                    alt={`${a.name} studio portrait`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[0.6rem] tracking-[0.32em] uppercase text-gold mb-2">
                      Chapter 001 · Founding
                    </p>
                    <h3 className="font-display uppercase text-cream text-3xl leading-none tracking-tight">
                      {a.name}
                    </h3>
                    <p className="mt-1 text-xs text-mist tracking-widest">{a.handle}</p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                    <p className="text-cream text-sm leading-relaxed italic max-w-xs">
                      "{a.statement}"
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Guest slots */}
          {["Chapter 002", "Chapter 003"].map((label) => (
            <div
              key={label}
              className="relative aspect-[4/5] border border-dashed border-gold/25 flex flex-col items-center justify-center text-center p-8"
            >
              <span className="text-[0.6rem] tracking-[0.32em] uppercase text-muted-ink mb-3">
                {label}
              </span>
              <p className="font-display uppercase text-cream/60 text-2xl tracking-tight">
                Guest Artist
              </p>
              <span className="mt-3 h-px w-10 bg-gold/40" />
              <p className="mt-3 text-xs text-muted-ink tracking-widest">To be announced</p>
            </div>
          ))}
        </div>

        {/* Join */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-2 gap-12 md:gap-20 items-start border-t border-gold/20 pt-16">
          <div>
            <p className="eyebrow mb-5">Submissions</p>
            <h3 className="title-lg text-cream mb-6">Join the <span style={{ fontFamily: "var(--font-blackletter)" }} className="text-gold normal-case italic">Collective</span>.</h3>
            <p className="text-mist text-sm leading-relaxed max-w-md">
              Illustrators, tattooers, and print-makers who work in the guardian, heritage, or working-dog tradition can pitch a chapter. One artist per drop. Every piece credited.
            </p>
          </div>

          {sent ? (
            <div className="border border-gold/40 p-8 md:p-10">
              <p className="eyebrow text-gold mb-4">Received</p>
              <p className="text-cream text-lg leading-relaxed">
                Your pitch is in the pack. We review submissions before each chapter opens — expect a reply within 30 days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Name" className="bg-transparent border border-gold/30 px-4 py-3 text-sm text-cream placeholder:text-muted-ink focus:outline-none focus:border-gold" />
                <input required type="email" placeholder="Email" className="bg-transparent border border-gold/30 px-4 py-3 text-sm text-cream placeholder:text-muted-ink focus:outline-none focus:border-gold" />
              </div>
              <input required placeholder="Portfolio URL" className="bg-transparent border border-gold/30 px-4 py-3 text-sm text-cream placeholder:text-muted-ink focus:outline-none focus:border-gold" />
              <input placeholder="Medium (illustration, tattoo, print, etc.)" className="bg-transparent border border-gold/30 px-4 py-3 text-sm text-cream placeholder:text-muted-ink focus:outline-none focus:border-gold" />
              <button type="submit" className="btn-reserve self-start mt-2">Submit Pitch →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
