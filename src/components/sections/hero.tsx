"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { HeroBoard } from "@/components/hero-board";
import { demoHref } from "@/lib/demo";
import { gsap, motion, prefersReducedMotion } from "@/lib/gsap";

export function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      // Reduced motion / no-JS: elements stay at their natural (visible) state.
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      gsap
        .timeline({
          defaults: { ease: motion.ease },
          // Return elements to CSS control once the intro finishes.
          onComplete: () => gsap.set(q("[data-hero], [data-hero-board]"), { clearProps: "opacity,transform" }),
        })
        .from(q("[data-hero]"), {
          y: 24,
          opacity: 0,
          duration: motion.enter,
          stagger: 0.08,
        })
        .from(
          q("[data-hero-board]"),
          { y: 28, opacity: 0, duration: 0.7 },
          "-=0.45"
        );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      {/* Ledger-column texture, very faint, tied to the accounting subject. */}
      <div className="ledger-rules pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-blue-tint/60 to-transparent"
        aria-hidden
      />

      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:mx-auto">
          <Eyebrow data-hero className="justify-center">{site.hero.eyebrow}</Eyebrow>
          <h1 data-hero className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            <span className="text-ink">{site.hero.titleLead}</span>{" "}
            <span className="bg-gradient-to-r from-blue to-blue-deep bg-clip-text text-transparent">
              {site.hero.titleAccent}
            </span>
          </h1>
          <p data-hero className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {site.hero.subtitle}
          </p>

          <div data-hero className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href={demoHref()} variant="primary" size="lg">
              {site.hero.primaryCta}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="#workflow" variant="outline" size="lg">
              {site.hero.secondaryCta}
            </ButtonLink>
          </div>

          {/* Stat strip */}
          <dl data-hero className="mx-auto mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="tabular font-display text-2xl font-semibold text-ink">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[13px] leading-snug text-ink-soft">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-hero-board>
          <HeroBoard />
        </div>
      </Container>
    </section>
  );
}
