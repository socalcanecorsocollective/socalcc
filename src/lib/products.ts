import alphaTee from "@/assets/product-alpha-tee.jpg.asset.json";
import guardianHoodie from "@/assets/product-guardian-hoodie.jpg";
import packLeaderTee from "@/assets/product-pack-leader-tee.jpg";
import ssccCap from "@/assets/product-sccc-cap.jpg";
import corsoCrewneck from "@/assets/product-corso-crewneck.jpg";
import legacyJacket from "@/assets/product-legacy-jacket.jpg";
import tacticalHarness from "@/assets/product-tactical-harness.webp.asset.json";
import guardianVest from "@/assets/product-guardian-vest.webp.asset.json";
import tacticalCollar from "@/assets/product-tactical-collar.webp.asset.json";
import leadLeash from "@/assets/product-lead-leash.webp.asset.json";
import packBandana from "@/assets/product-pack-bandana.webp.asset.json";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "apparel" | "gear";
  isNew?: boolean;
  note?: string;
  image: string;
};

export const apparel: Product[] = [
  { id: "alpha-tee", name: "Alpha Tee", price: 45, category: "apparel", isNew: true, image: alphaTee.url },
  { id: "guardian-hoodie", name: "Guardian Hoodie", price: 85, category: "apparel", image: guardianHoodie },
  { id: "pack-leader-tee", name: "Pack Leader Tee", price: 45, category: "apparel", image: packLeaderTee },
  { id: "sccc-cap", name: "SCCC Cap", price: 35, category: "apparel", image: ssccCap },
  { id: "corso-crewneck", name: "Corso Crewneck", price: 70, category: "apparel", isNew: true, image: corsoCrewneck },
  { id: "legacy-jacket", name: "Legacy Jacket", price: 120, category: "apparel", image: legacyJacket },
];

export const packGear: Product[] = [
  { id: "tactical-harness", name: "SCCC Tactical Harness", price: 95, category: "gear", isNew: true, image: tacticalHarness.url },
  { id: "guardian-vest", name: "SCCC Guardian Vest", price: 110, category: "gear", isNew: true, note: "Full-coverage tactical dog vest with MOLLE webbing", image: guardianVest.url },
  { id: "tactical-collar", name: "SCCC Tactical Collar", price: 55, category: "gear", image: tacticalCollar.url },
  { id: "lead-leash", name: "SCCC Lead Leash", price: 45, category: "gear", image: leadLeash.url },
  { id: "pack-bandana", name: "SCCC Pack Bandana", price: 25, category: "gear", image: packBandana.url },
];
