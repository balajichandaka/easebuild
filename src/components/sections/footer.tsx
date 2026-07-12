import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/section";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-paper">
      <Container>
        <div className="flex flex-col items-center justify-between gap-10 text-center md:flex-row">
          <div className="mx-auto max-w-xs">
            <Logo tone="dark" />
            <p className="mt-4 text-sm leading-relaxed text-paper/55">
              {site.tagline}. Built for Indian chartered accountant practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-paper/40">
                Product
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {site.nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-sm text-paper/70 hover:text-paper">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-paper/40">
                Contact
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-paper/70">
                <li>
                  <a href={`mailto:${site.contact.email}`} className="hover:text-paper">
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-paper">
                    {site.contact.phone}
                  </a>
                </li>
                <li>{site.contact.city}</li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-paper/40">
                Get started
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-paper/70">
                <li>
                  <Link href="#demo" className="hover:text-paper">
                    Book a demo
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-paper">
                    Get a quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="tabular font-mono">{site.url.replace(/^https?:\/\//, "")}</p>
        </div>
      </Container>
    </footer>
  );
}
