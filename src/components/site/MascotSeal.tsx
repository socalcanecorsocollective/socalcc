import glyph from "@/assets/glyph.png.asset.json";

type Variant = "nav" | "seal" | "divider" | "watermark";

export function MascotSeal({
  variant = "seal",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "watermark") {
    return (
      <img
        src={glyph.url}
        alt=""
        aria-hidden
        className={`pointer-events-none select-none opacity-[0.05] ${className}`}
      />
    );
  }
  if (variant === "divider") {
    return (
      <div className={`flex items-center gap-6 ${className}`}>
        <span className="hairline flex-1" />
        <img src={glyph.url} alt="" aria-hidden className="h-8 md:h-10 w-auto opacity-70" />
        <span className="hairline flex-1" />
      </div>
    );
  }
  if (variant === "nav") {
    return (
      <span className="relative flex items-center justify-center w-11 h-11 border border-gold/40 hover:border-gold transition-colors">
        <img src={glyph.url} alt="SCCC" className="h-7 w-auto" />
      </span>
    );
  }
  return (
    <span className={`flex items-center justify-center border border-gold/40 ${className}`}>
      <img src={glyph.url} alt="SCCC" className="h-2/3 w-auto" />
    </span>
  );
}
