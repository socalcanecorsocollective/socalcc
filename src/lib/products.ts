import alphaTee from "@/assets/product-alpha-tee.jpg.asset.json";
import guardianHoodie from "@/assets/product-guardian-hoodie.jpg.asset.json";
import packLeaderTee from "@/assets/product-pack-leader-tee.jpg.asset.json";
import scccCap from "@/assets/product-sccc-cap.jpg.asset.json";
import corsoCrewneck from "@/assets/product-corso-crewneck.jpg.asset.json";
import legacyJacket from "@/assets/product-legacy-jacket.jpg.asset.json";
import tacticalHarness from "@/assets/product-tactical-harness.webp.asset.json";
import guardianVest from "@/assets/product-guardian-vest.webp.asset.json";
import tacticalCollar from "@/assets/product-tactical-collar.webp.asset.json";
import leadLeash from "@/assets/product-lead-leash.webp.asset.json";
import packBandana from "@/assets/product-pack-bandana.webp.asset.json";
import type { Product } from "./types";

const APPAREL_SIZES = ["S", "M", "L", "XL", "XXL"];
const GEAR_SIZES = ["S", "M", "L"];

export const products: Product[] = [
  // ── Apparel — Chapter 001 · Xenvectors ─────────────────────────
  { id: "alpha-tee", name: "Alpha Tee", price: 45, images: [alphaTee.url], category: "apparel", chapterId: "chapter-001", artistId: "xenvectors", isNew: true, sizes: APPAREL_SIZES, desc: "Heavyweight 8oz cotton, boxy cut, hand-set neckband. The house tee." },
  { id: "guardian-hoodie", name: "Guardian Hoodie", price: 85, images: [guardianHoodie.url], category: "apparel", chapterId: "chapter-001", artistId: "xenvectors", sizes: APPAREL_SIZES, desc: "500gsm brushed fleece, double-layer hood, tonal gold embroidery." },
  { id: "pack-leader-tee", name: "Pack Leader Tee", price: 45, images: [packLeaderTee.url], category: "apparel", chapterId: "chapter-001", artistId: "xenvectors", sizes: APPAREL_SIZES, desc: "Complement to the Alpha. Cut for daily rotation." },
  { id: "sccc-cap", name: "SCCC Cap", price: 35, images: [scccCap.url], category: "apparel", chapterId: "chapter-001", artistId: "xenvectors", sizes: ["One Size"], desc: "Six-panel unstructured cap, gold-stitched glyph." },
  { id: "corso-crewneck", name: "Corso Crewneck", price: 70, images: [corsoCrewneck.url], category: "apparel", chapterId: "chapter-001", artistId: "xenvectors", isNew: true, sizes: APPAREL_SIZES, desc: "Heavy loopback crewneck, ribbed cuffs, dropped shoulder." },
  { id: "legacy-jacket", name: "Legacy Jacket", price: 120, images: [legacyJacket.url], category: "apparel", chapterId: "chapter-001", artistId: "xenvectors", sizes: APPAREL_SIZES, desc: "Waxed cotton chore jacket, brass hardware, four utility pockets." },

  // ── Pack Gear — Chapter 001 · Xenvectors ───────────────────────
  { id: "tactical-harness", name: "SCCC Tactical Harness", price: 95, images: [tacticalHarness.url], category: "gear", chapterId: "chapter-001", artistId: "xenvectors", isNew: true, sizes: GEAR_SIZES, desc: "MOLLE-ready tactical harness engineered for large working breeds." },
  { id: "guardian-vest", name: "SCCC Guardian Vest", price: 110, images: [guardianVest.url], category: "gear", chapterId: "chapter-001", artistId: "xenvectors", isNew: true, note: "Full-coverage tactical dog vest with MOLLE webbing", sizes: GEAR_SIZES, desc: "Full-coverage guardian vest with MOLLE panels, drag handle, and reinforced chest plate." },
  { id: "tactical-collar", name: "SCCC Tactical Collar", price: 55, images: [tacticalCollar.url], category: "gear", chapterId: "chapter-001", artistId: "xenvectors", sizes: GEAR_SIZES, desc: "1.5\" heavyweight nylon collar with cast metal hardware." },
  { id: "lead-leash", name: "SCCC Lead Leash", price: 45, images: [leadLeash.url], category: "gear", chapterId: "chapter-001", artistId: "xenvectors", sizes: ["6ft"], desc: "6ft double-stitched lead with brass swivel and traffic handle." },
  { id: "pack-bandana", name: "SCCC Pack Bandana", price: 25, images: [packBandana.url], category: "gear", chapterId: "chapter-001", artistId: "xenvectors", sizes: ["One Size"], desc: "Screen-printed heritage bandana, hand-hemmed." },

  // ── Patches & Prints — Chapter 001 · Xenvectors ────────────────
  { id: "guardian-patch", name: "Guardian MOLLE Patch", price: 15, images: [], category: "patches", chapterId: "chapter-001", artistId: "xenvectors", sizes: ["One Size"], desc: "3\" embroidered MOLLE patch, hook backing." },
  { id: "legion-patch", name: "Legion Morale Patch", price: 12, images: [], category: "patches", chapterId: "chapter-001", artistId: "xenvectors", sizes: ["One Size"], desc: "PVC morale patch, gold on ink." },
  { id: "crest-print", name: "SCCC Crest Print", price: 30, images: [], category: "patches", chapterId: "chapter-001", artistId: "xenvectors", sizes: ["11×14", "18×24"], desc: "Archival giclée print of the house crest, numbered edition." },
  { id: "bloodline-print", name: "Bloodline Print", price: 45, images: [], category: "patches", chapterId: "chapter-001", artistId: "xenvectors", sizes: ["11×14", "18×24"], desc: "Editorial print — the founding manifesto, set in Anton." },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const productsByCategory = (c: Product["category"]) => products.filter((p) => p.category === c);
export const productsByChapter = (id: string) => products.filter((p) => p.chapterId === id);
export const productsByArtist = (id: string) => products.filter((p) => p.artistId === id);

// Legacy named exports retained for any lingering imports.
export const apparel = productsByCategory("apparel");
export const packGear = productsByCategory("gear");
