import { Plus } from "lucide-react";
import { site } from "@/content/site";
import { Container, SectionHeader } from "@/components/ui/section";

export function Faq() {
  return (
    <section className="border-t border-line bg-card/40 py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="FAQ" title="Questions CA firms ask us" />

        <div className="flex flex-col divide-y divide-line rounded-xl border border-line bg-card ring-1 ring-ink/5">
          {site.faq.map((item) => (
            <details key={item.q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink">
                {item.q}
                <Plus className="size-4 shrink-0 text-ink-soft transition-transform duration-200 group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
