import { MascotSeal } from "./MascotSeal";

export function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="container-editorial py-16 md:py-24">
      <MascotSeal variant="divider" />
      {label && (
        <p className="mt-6 text-center text-[0.6rem] tracking-[0.4em] uppercase text-muted-ink">
          {label}
        </p>
      )}
    </div>
  );
}
