import { Mail, Phone, MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { DemoForm } from "@/components/sections/demo-form";

export function FinalCta() {
  const { finalCta, contact } = site;
  const waDigits = contact.whatsapp.replace(/[^\d]/g, "");
  return (
    <section id="demo" className="scroll-mt-20 py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>{finalCta.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
            {finalCta.body}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 text-sm text-ink transition-colors hover:text-blue"
            >
              <span className="grid size-9 place-items-center rounded-lg border border-line bg-card text-blue">
                <Mail className="size-4" />
              </span>
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 text-sm text-ink transition-colors hover:text-blue"
            >
              <span className="grid size-9 place-items-center rounded-lg border border-line bg-card text-blue">
                <Phone className="size-4" />
              </span>
              {contact.phone}
            </a>
            <a
              href={`https://wa.me/${waDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-ink transition-colors hover:text-green"
            >
              <span className="grid size-9 place-items-center rounded-lg border border-line bg-card text-green">
                <MessageCircle className="size-4" />
              </span>
              WhatsApp us
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <DemoForm />
        </Reveal>
      </Container>
    </section>
  );
}
