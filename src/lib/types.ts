export type Category = "apparel" | "gear" | "patches";

export type CategoryDef = {
  id: Category;
  label: string;
  tagline: string;
  eyebrow: string;
  reserved?: boolean;
};

export const categories: CategoryDef[] = [
  { id: "apparel", label: "Apparel", tagline: "For the Guardian.", eyebrow: "Chapter I · Apparel" },
  { id: "gear", label: "Pack Gear", tagline: "For the Cane Corso.", eyebrow: "Chapter III · Pack Gear" },
  { id: "patches", label: "Patches & Prints", tagline: "For the Collector.", eyebrow: "Chapter IV · Patches & Prints" },
];

export const futureCategories = [
  "Umbrellas", "Beds & Crates", "Rain / Cooling Shells", "ID Tags", "Banners", "Home Goods",
] as const;

export type Artist = {
  id: string;
  name: string;
  handle: string;
  portrait?: string;
  bio: string;
  statement: string;
  links: { label: string; href: string }[];
  chapterId: string;
};

export type DropStatus = "live" | "upcoming";

export type Drop = {
  id: string;
  chapter: number;      // 1, 2, 3 ...
  roman: string;        // I, II, III
  title: string;
  artistId: string;
  status: DropStatus;
  date: string;         // MMXXVI phrasing
  releaseISO?: string;  // for countdown on upcoming
  productIds: string[];
  cover?: string;       // hero image url (never AI)
};

export type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];     // urls; empty [] renders placeholder
  category: Category;
  chapterId: string;
  artistId: string;
  isNew?: boolean;
  badges?: string[];
  note?: string;
  desc?: string;
  sizes?: string[];
};
