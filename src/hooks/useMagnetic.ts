import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, useRef } from "react";

/**
 * Magnetic hover effect — offset an element toward the cursor,
 * clamped to `max` px, spring-eased. Snaps back on leave.
 * Scoped: only apply to primary CTAs.
 */
export function useMagnetic(max = 8) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 15, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 15, mass: 0.4 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current ?? (e.currentTarget as HTMLElement);
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      const nx = Math.max(-max, Math.min(max, (relX / (rect.width / 2)) * max));
      const ny = Math.max(-max, Math.min(max, (relY / (rect.height / 2)) * max));
      x.set(nx);
      y.set(ny);
    },
    [max, x, y],
  );

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x, y, onMouseMove, onMouseLeave };
}
