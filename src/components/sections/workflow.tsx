import Image from "next/image";
import { Check } from "lucide-react";
import { site } from "@/content/site";
import { Container, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

export function Workflow() {
  const { workflow } = site;
  return (
    <section id="workflow" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={workflow.eyebrow} title={workflow.title} />

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {workflow.blocks.map((b, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={b.title}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                <Reveal className={cn(flip && "lg:order-2")}>
                  <p className="eyebrow">{b.kicker}</p>
                  <h3 className="mt-3 text-2xl text-ink sm:text-3xl">{b.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    {b.body}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {b.bullets.map((bl) => (
                      <li key={bl} className="flex items-center gap-3 text-sm text-ink">
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-green-tint">
                          <Check className="size-3 text-green" strokeWidth={3} aria-hidden />
                        </span>
                        {bl}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal
                  delay={100}
                  className={cn("relative", flip && "lg:order-1")}
                >
                  <div
                    className="pointer-events-none absolute -inset-4 -z-10 rounded-[1.75rem] bg-gradient-to-tr from-blue/8 to-brass/5 blur-2xl"
                    aria-hidden
                  />
                  <div className="overflow-hidden rounded-xl border border-line bg-card shadow-xl shadow-ink/5 ring-1 ring-ink/5">
                    <Image
                      src={b.image}
                      alt={b.alt}
                      width={720}
                      height={460}
                      className="h-auto w-full"
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
