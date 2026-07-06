/**
 * Barely-perceptible fixed grain overlay. Pointer-events off, blend overlay,
 * sits above all content. Uses an inline SVG feTurbulence — no network cost.
 */
const NOISE_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'>
       <filter id='n'>
         <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
         <feColorMatrix values='0 0 0 0 0.96 0 0 0 0 0.94 0 0 0 0 0.9 0 0 0 1 0'/>
       </filter>
       <rect width='100%' height='100%' filter='url(%23n)'/>
     </svg>`.replace(/\s+/g, " "),
  );

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        backgroundImage: `url("${NOISE_SVG}")`,
        backgroundSize: "240px 240px",
        mixBlendMode: "overlay",
        opacity: 0.035,
      }}
    />
  );
}
