import { site } from "@/content/site";
import { Container, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";

export function Features() {
  const { features } = site;
  return (
    <section id="features" className="scroll-mt-20 border-y border-line bg-card/40 py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={features.eyebrow}
          title={features.title}
          subtitle={features.subtitle}
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line ring-1 ring-ink/5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 70}
              className="group bg-card p-6 transition-colors hover:bg-blue-tint/40"
            >
              <span className="grid size-11 place-items-center rounded-lg border border-line bg-paper text-blue transition-colors group-hover:border-blue/30 group-hover:bg-card">
                <Icon name={f.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-lg text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
