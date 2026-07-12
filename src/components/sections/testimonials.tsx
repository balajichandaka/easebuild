import { Quote } from "lucide-react";
import { site } from "@/content/site";
import { Container, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

export function Testimonials() {
  const { testimonials } = site;
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          center
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className="flex flex-col rounded-xl border border-line bg-card p-6 ring-1 ring-ink/5 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <Quote className="size-7 text-brass/50" aria-hidden />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                “{t.quote}”
              </p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-[13px] text-ink-soft">
                  {t.role}, {t.firm} · {t.city}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
