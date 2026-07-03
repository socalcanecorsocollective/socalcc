import type { Artist } from "./types";

export const artists: Artist[] = [
  {
    id: "xenvectors",
    name: "Xenvectors",
    handle: "@xenvectors",
    bio: "Founding studio of SCCC. Xenvectors authored the house identity — the wordmark, the mascot mark, and the visual doctrine that Chapter 001 is cut from.",
    statement:
      "We drew Chapter 001 for the ones who stand watch. Roman lineage, SoCal light, and the quiet weight of the working guardian.",
    links: [
      { label: "Portfolio", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    chapterId: "chapter-001",
  },
];

export const getArtist = (id: string) => artists.find((a) => a.id === id);
