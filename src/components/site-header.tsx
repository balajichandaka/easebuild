import Link from "next/link";
import { Container } from "./container";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            Ease<span className="text-blue-600">Build</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
