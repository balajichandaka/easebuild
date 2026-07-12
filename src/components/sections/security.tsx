import { site } from "@/content/site";
import { Container, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";

export function Security() {
  const { security } = site;
  return (
    <section id="security" className="scroll-mt-20 bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={security.eyebrow}
          title={security.title}
          subtitle={security.body}
          dark
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {security.points.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="flex flex-col items-center rounded-xl border border-white/10 bg-ink-2 p-6 text-center transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-white/20"
            >
              <span className="grid size-11 place-items-center rounded-lg bg-white/5 text-brass-soft ring-1 ring-white/10">
                <Icon name={p.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-lg text-paper">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
