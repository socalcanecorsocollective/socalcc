import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { drops } from "@/lib/drops";
import { getArtist } from "@/lib/artists";
import { MascotSeal } from "./MascotSeal";

const ease = [0.19, 1, 0.22, 1] as const;

function useCountdown(iso?: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!iso) return;
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, [iso]);
  if (!iso) return null;
  const diff = new Date(iso).getTime() - now;
  if (diff <= 0) return "Live";
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  return `${days}d ${hours}h`;
}

export function DropsArchive() {
  return (
    <section id="drops" className="relative py-28 md:py-40 bg-ink overflow-hidden">
      <div className="container-editorial">
        <div className="grid md:grid-cols-[auto_1fr] md:items-end gap-8 mb-16 md:mb-24">
          <div>
            <p className="eyebrow mb-5">Chapter VII · Archive</p>
            <h2 className="title-lg text-cream">
              The <span style={{ fontFamily: "var(--font-blackletter)" }} className="text-gold normal-case italic">Chapters</span>.
            </h2>
          </div>
          <p className="md:justify-self-end md:text-right md:max-w-sm text-mist text-sm leading-relaxed">
            Every chapter is dated, credited, and archived. The catalog compounds — nothing is retired.
          </p>
        </div>

        <div className="hairline mb-12" />

        <ol className="relative border-l border-gold/25 pl-8 md:pl-12 space-y-16">
          {drops.map((d, i) => {
            const artist = getArtist(d.artistId);
            return (
              <DropRow key={d.id} d={d} artistName={artist?.name} index={i} />
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function DropRow({ d, artistName, index }: { d: (typeof drops)[number]; artistName?: string; index: number }) {
  const countdown = useCountdown(d.releaseISO);
  const [notified, setNotified] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease, delay: index * 0.05 }}
      className="relative"
    >
      <span className="absolute -left-[42px] md:-left-[54px] top-1 w-3 h-3 border border-gold bg-ink" />
      <div className="grid md:grid-cols-[220px_1fr_auto] gap-6 md:gap-10 items-start">
        <div>
          <p className="font-display uppercase text-gold text-4xl md:text-5xl leading-none tracking-tight">
            {d.chapter.toString().padStart(3, "0")}
          </p>
          <p className="mt-2 text-[0.6rem] tracking-[0.32em] uppercase text-muted-ink">
            Chapter {d.roman} · {d.date}
          </p>
        </div>

        <div>
          <h3 className="font-sans uppercase text-cream text-lg md:text-xl tracking-[0.18em] font-semibold">
            {d.title}
          </h3>
          <p className="mt-1 text-sm text-mist">
            {artistName ? `Authored by ${artistName}` : "Guest artist · TBA"}
          </p>
          <p className="mt-3 text-xs tracking-[0.24em] uppercase text-muted-ink">
            {d.productIds.length
              ? `${d.productIds.length} pieces`
              : "Roster locked until release"}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          {d.status === "live" ? (
            <>
              <span className="text-[0.6rem] tracking-[0.32em] uppercase text-it-green">● Live</span>
              <a href="#apparel" className="btn-reserve">Shop</a>
            </>
          ) : (
            <>
              <span className="text-[0.6rem] tracking-[0.32em] uppercase text-gold">
                {countdown ? `Opens in ${countdown}` : "Upcoming"}
              </span>
              {notified ? (
                <span className="text-xs tracking-widest uppercase text-cream/80 border border-gold/40 px-4 py-2">
                  ✓ Notified
                </span>
              ) : (
                <button onClick={() => setNotified(true)} className="btn-reserve">
                  Notify Me
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </motion.li>
  );
}
