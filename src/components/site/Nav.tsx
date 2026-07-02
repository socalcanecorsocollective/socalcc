import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import glyph from "@/assets/glyph.png.asset.json";

const links = [
  { label: "Home", href: "#top" },
  { label: "Shop", href: "#apparel" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "The Bloodline", href: "#bloodline" },
  { label: "Contact", href: "#reserve" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className={`absolute inset-x-0 bottom-0 hairline transition-opacity ${scrolled ? "opacity-100" : "opacity-0"}`} />
        <nav className="container-editorial flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3 group" aria-label="SCCC home">
            <span className="relative flex items-center justify-center w-11 h-11 border border-gold/40 group-hover:border-gold transition-colors">
              <img src={glyph.url} alt="" className="h-7 w-auto" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[0.65rem] tracking-[0.4em] font-bold text-cream">S·C·C·C</span>
              <span className="text-[0.55rem] tracking-[0.28em] text-muted-ink mt-1">Est. MMXX</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.72rem] tracking-[0.28em] uppercase font-semibold text-cream/70 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#reserve" className="btn-reserve">Reserve</a>
            </li>
          </ul>
          <button
            className="md:hidden text-cream p-2 -mr-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-7 h-px bg-cream mb-1.5" />
            <span className="block w-7 h-px bg-cream mb-1.5" />
            <span className="block w-5 h-px bg-cream ml-auto" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="container-editorial flex items-center justify-between py-5">
              <img src={glyph.url} alt="" className="h-9 w-auto" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-cream text-xs tracking-[0.3em] uppercase"
              >
                Close
              </button>
            </div>
            <div className="hairline" />
            <ul className="flex-1 flex flex-col justify-center container-editorial gap-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="title-lg block text-cream hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-8">
                <a href="#reserve" onClick={() => setOpen(false)} className="btn-reserve">Reserve Drop 001</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
