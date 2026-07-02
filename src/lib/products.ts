export type Product = {
  id: string;
  name: string;
  price: number;
  category: "apparel" | "gear";
  isNew?: boolean;
  note?: string;
  image?: string;
};

export const apparel: Product[] = [
  { id: "alpha-tee", name: "Alpha Tee", price: 45, category: "apparel", isNew: true },
  { id: "guardian-hoodie", name: "Guardian Hoodie", price: 85, category: "apparel" },
  { id: "pack-leader-tee", name: "Pack Leader Tee", price: 45, category: "apparel" },
  { id: "sccc-cap", name: "SCCC Cap", price: 35, category: "apparel" },
  { id: "corso-crewneck", name: "Corso Crewneck", price: 70, category: "apparel", isNew: true },
  { id: "legacy-jacket", name: "Legacy Jacket", price: 120, category: "apparel" },
];

export const packGear: Product[] = [
  { id: "tactical-harness", name: "SCCC Tactical Harness", price: 95, category: "gear", isNew: true },
  { id: "guardian-vest", name: "SCCC Guardian Vest", price: 110, category: "gear", isNew: true, note: "Full-coverage tactical dog vest with MOLLE webbing" },
  { id: "tactical-collar", name: "SCCC Tactical Collar", price: 55, category: "gear" },
  { id: "lead-leash", name: "SCCC Lead Leash", price: 45, category: "gear" },
  { id: "pack-bandana", name: "SCCC Pack Bandana", price: 25, category: "gear" },
];
