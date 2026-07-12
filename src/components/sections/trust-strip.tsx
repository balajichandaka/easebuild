import { site } from "@/content/site";
import { Container } from "@/components/ui/section";

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-card/50 py-8">
      <Container>
        <p className="text-center text-xs uppercase tracking-[0.14em] text-ink-soft">
          Trusted by growing practices
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {site.trustedBy.map((firm) => (
            <span
              key={firm}
              className="font-display text-sm font-semibold text-ink/45 transition-colors hover:text-ink/70 sm:text-base"
            >
              {firm}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
