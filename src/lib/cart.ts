import { create } from "zustand";

export type CartLine = {
  productId: string;
  name: string;
  price: number;
  size?: string;
  qty: number;
  image?: string;
};

type CartState = {
  lines: CartLine[];
  open: boolean;
  add: (line: CartLine) => void;
  remove: (productId: string, size?: string) => void;
  setQty: (productId: string, size: string | undefined, qty: number) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  subtotal: () => number;
  count: () => number;
};

const key = (a: string, b?: string) => `${a}::${b ?? ""}`;

export const useCart = create<CartState>((set, get) => ({
  lines: [],
  open: false,
  add: (line) =>
    set((s) => {
      const idx = s.lines.findIndex((l) => key(l.productId, l.size) === key(line.productId, line.size));
      if (idx >= 0) {
        const next = [...s.lines];
        next[idx] = { ...next[idx], qty: next[idx].qty + line.qty };
        return { lines: next, open: true };
      }
      return { lines: [...s.lines, line], open: true };
    }),
  remove: (productId, size) =>
    set((s) => ({ lines: s.lines.filter((l) => key(l.productId, l.size) !== key(productId, size)) })),
  setQty: (productId, size, qty) =>
    set((s) => ({
      lines: s.lines
        .map((l) => (key(l.productId, l.size) === key(productId, size) ? { ...l, qty } : l))
        .filter((l) => l.qty > 0),
    })),
  clear: () => set({ lines: [] }),
  setOpen: (open) => set({ open }),
  toggle: () => set((s) => ({ open: !s.open })),
  subtotal: () => get().lines.reduce((n, l) => n + l.price * l.qty, 0),
  count: () => get().lines.reduce((n, l) => n + l.qty, 0),
}));
