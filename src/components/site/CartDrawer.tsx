import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { lines, open, setOpen, remove, setQty, subtotal } = useCart();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-ink/70 backdrop-blur-sm"
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[71] w-full sm:w-[440px] bg-ink border-l border-gold/25 flex flex-col"
            role="dialog"
            aria-label="Cart"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
              <p className="eyebrow">Your Pack</p>
              <button
                onClick={() => setOpen(false)}
                className="text-xs tracking-[0.28em] uppercase text-cream/70 hover:text-gold"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {lines.length === 0 ? (
                <div className="text-center py-16">
                  <p className="font-display uppercase text-cream/70 text-2xl">Empty</p>
                  <p className="mt-2 text-sm text-muted-ink tracking-widest">
                    Reserve your allocation.
                  </p>
                </div>
              ) : (
                <ul className="space-y-6">
                  {lines.map((l) => (
                    <li
                      key={`${l.productId}-${l.size ?? ""}`}
                      className="flex gap-4 border-b border-gold/15 pb-6"
                    >
                      <div className="w-20 h-24 bg-panel shrink-0 overflow-hidden">
                        {l.image ? (
                          <img src={l.image} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full grid place-items-center text-[0.5rem] tracking-widest text-muted-ink">
                            SCCC
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p className="text-sm uppercase tracking-[0.14em] text-cream font-semibold">
                          {l.name}
                        </p>
                        {l.size && (
                          <p className="text-xs text-muted-ink tracking-widest mt-1">
                            Size · {l.size}
                          </p>
                        )}
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center border border-gold/30">
                            <button
                              onClick={() => setQty(l.productId, l.size, l.qty - 1)}
                              className="w-8 h-8 text-cream hover:text-gold"
                              aria-label="Decrease"
                            >−</button>
                            <span className="w-8 text-center text-sm tabular-nums">{l.qty}</span>
                            <button
                              onClick={() => setQty(l.productId, l.size, l.qty + 1)}
                              className="w-8 h-8 text-cream hover:text-gold"
                              aria-label="Increase"
                            >+</button>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-gold tabular-nums text-sm">
                              ${l.price * l.qty}
                            </span>
                            <button
                              onClick={() => remove(l.productId, l.size)}
                              className="text-[0.55rem] tracking-[0.28em] uppercase text-muted-ink hover:text-crimson-bright"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-gold/20 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.28em] uppercase text-muted-ink">Subtotal</span>
                <span className="text-gold tabular-nums text-base">${subtotal()}</span>
              </div>
              <button
                disabled={lines.length === 0}
                onClick={() => alert("Checkout opens with Chapter 001 ship window · Q3 MMXXVI")}
                className="btn-reserve w-full justify-center bg-gold text-ink hover:bg-gold-bright disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Checkout →
              </button>
              <p className="text-[0.55rem] tracking-[0.28em] uppercase text-muted-ink text-center">
                Shipping Q3 MMXXVI · Free over $150
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
