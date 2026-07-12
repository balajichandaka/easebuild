"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, motion, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/cn";

/**
 * Reveals its children on scroll-into-view (once) with a GSAP fade + slide-up.
 * SSR renders the content visible (SEO/no-JS safe); the hide→reveal happens in a
 * pre-paint layout effect so there's no flash. Respects prefers-reduced-motion.
 * `delay` is in ms (used to stagger sibling reveals).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(el, { opacity: 0, y: motion.y });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: motion.enter,
        ease: motion.ease,
        delay: delay / 1000,
        // Hand the element back to CSS after revealing so Tailwind hover
        // transforms/transitions aren't blocked by GSAP's inline styles.
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    },
    { scope: ref, dependencies: [delay] }
  );

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={cn(className)}>
      {children}
    </Comp>
  );
}
