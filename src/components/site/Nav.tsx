import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MascotSeal } from "./MascotSeal";
import { useCart } from "@/lib/cart";
import { useMagnetic } from "@/hooks/useMagnetic";

const links = [
  { label: "Shop", to: "/shop" as const },
  { label: "Collective", to: "/collective" as const },
  { label: "Drops", to: "/drops" as const },
  { label: "Lookbook", to: "/lookbook" as const },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const count = useCart((s) => s.count());
  const openCart = useCart((s) => s.setOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className={`absolute inset-x-0 bottom-0 hairline transition-opacity ${scrolled ? "opacity-100" : "opacity-0"}`} />
        <nav className="container-editorial flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group" aria-label="SCCC home">
            <MascotSeal variant="nav" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[0.65rem] tracking-[0.4em] font-bold text-cream">S·C·C·C</span>
              <span className="text-[0.55rem] tracking-[0.28em] text-muted-ink mt-1">Est. MMXX</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[0.72rem] tracking-[0.28em] uppercase font-semibold text-cream/70 hover:text-gold transition-colors"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/reserve" className="btn-reserve">Reserve</Link>
            </li>
            <li>
              <button
                onClick={() => openCart(true)}
                aria-label={`Cart, ${count} items`}
                className="relative text-[0.72rem] tracking-[0.28em] uppercase font-semibold text-cream/70 hover:text-gold transition-colors"
              >
                Cart
                <span className="ml-2 inline-flex items-center justify-center min-w-[1.4rem] h-[1.4rem] px-1 border border-gold/60 text-gold text-[0.6rem] tabular-nums">
                  {count}
                </span>
              </button>
            </li>
          </ul>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => openCart(true)}
              aria-label={`Cart, ${count} items`}
              className="text-[0.65rem] tracking-[0.28em] uppercase font-semibold text-cream/80"
            >
              Cart · {count}
            </button>
            <button
              className="text-cream p-2 -mr-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-7 h-px bg-cream mb-1.5" />
              <span className="block w-7 h-px bg-cream mb-1.5" />
              <span className="block w-5 h-px bg-cream ml-auto" />
            </button>
          </div>
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
              <MascotSeal variant="nav" />
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
                  key={l.to}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="title-lg block text-cream hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-8">
                <Link to="/reserve" onClick={() => setOpen(false)} className="btn-reserve">
                  Reserve Drop 001
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
