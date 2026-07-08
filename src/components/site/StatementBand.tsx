import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.19, 1, 0.22, 1] as const;
const lines = [
  "Built on Instinct.",
  "Defined by Discipline.",
  "Loyal for Life.",
];

export function StatementBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className="relative pt-16 md:pt-24 pb-16 md:pb-24 bg-ink grain overflow-hidden">
      <div className="hairline container-editorial mb-12 md:mb-16" />
      <motion.div style={{ y }} className="container-editorial">
        <p className="eyebrow mb-10">The Creed — I</p>
        <h2 className="title-lg text-cream max-w-6xl">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.1, ease, delay: i * 0.12 }}
                className="block"
              >
                {i === 2 ? (
                  <>
                    Loyal for{" "}
                    <span className="font-blackletter italic text-gold normal-case" style={{ fontFamily: "var(--font-blackletter)" }}>
                      Life
                    </span>
                    .
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h2>
      </motion.div>
    </section>

  );
}
