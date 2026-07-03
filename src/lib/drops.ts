import type { Drop } from "./types";

export const drops: Drop[] = [
  {
    id: "chapter-001",
    chapter: 1,
    roman: "I",
    title: "Founding Chapter",
    artistId: "xenvectors",
    status: "live",
    date: "MMXXVI · Q3",
    productIds: [
      "alpha-tee", "guardian-hoodie", "pack-leader-tee", "sccc-cap", "corso-crewneck", "legacy-jacket",
      "tactical-harness", "guardian-vest", "tactical-collar", "lead-leash", "pack-bandana",
      "guardian-patch", "legion-patch", "crest-print", "bloodline-print",
    ],
  },
  {
    id: "chapter-002",
    chapter: 2,
    roman: "II",
    title: "Guest Artist · TBA",
    artistId: "tba-002",
    status: "upcoming",
    date: "MMXXVI · Q4",
    releaseISO: "2026-11-01T17:00:00Z",
    productIds: [],
  },
  {
    id: "chapter-003",
    chapter: 3,
    roman: "III",
    title: "Guest Artist · TBA",
    artistId: "tba-003",
    status: "upcoming",
    date: "MMXXVII · Q1",
    releaseISO: "2027-02-01T17:00:00Z",
    productIds: [],
  },
  {
    id: "chapter-004",
    chapter: 4,
    roman: "IV",
    title: "Guest Artist · TBA",
    artistId: "tba-004",
    status: "upcoming",
    date: "MMXXVII · Q2",
    releaseISO: "2027-05-01T17:00:00Z",
    productIds: [],
  },
];

export const getDrop = (id: string) => drops.find((d) => d.id === id);
export const liveDrops = () => drops.filter((d) => d.status === "live");
export const upcomingDrops = () => drops.filter((d) => d.status === "upcoming");
