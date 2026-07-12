import { TriangleAlert } from "lucide-react";
import { site } from "@/content/site";
import { Container, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

export function Problem() {
  const { problem } = site;
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={problem.eyebrow}
          title={problem.title}
          subtitle={problem.body}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {problem.pains.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="flex flex-col items-center rounded-xl border border-line bg-card p-6 text-center ring-1 ring-ink/5 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-brass-tint text-brass">
                <TriangleAlert className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 text-lg text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
