import { Check } from "lucide-react";
import { site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { demoHref } from "@/lib/demo";

export function Pricing() {
  const { pricing } = site;
  return (
    <section id="pricing" className="scroll-mt-20 border-y border-line bg-card/40 py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-line bg-card shadow-xl shadow-ink/5 ring-1 ring-ink/5">
          <div className="grid gap-8 p-8 sm:grid-cols-[1.2fr_1fr] sm:p-10">
            <div className="text-center">
              <Eyebrow className="justify-center">{pricing.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-2xl leading-tight text-ink sm:text-3xl">
                {pricing.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                {pricing.body}
              </p>
              <div className="mt-7 flex justify-center">
                <ButtonLink href={demoHref()} variant="primary" size="lg">
                  {pricing.cta}
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-paper p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Every plan includes
              </p>
              <ul className="mt-4 flex flex-col items-center gap-3">
                {pricing.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-green-tint">
                      <Check className="size-3 text-green" strokeWidth={3} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
