import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once (client-only; guarded so it's a no-op during SSR).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Shared motion tokens so every animation shares one rhythm (skill guidance:
 * unify duration/easing globally). Enter ~0.6s, power3.out, small offsets.
 */
export const motion = {
  enter: 0.6,
  ease: "power3.out",
  y: 20,
  stagger: 0.06,
} as const;

/** True when the user has asked the OS to reduce motion. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export { gsap, ScrollTrigger };
