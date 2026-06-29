import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="flex flex-col gap-2 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} EaseBuild. Web apps for businesses.
          </p>
          <div className="flex gap-4">
            <Link href="/projects" className="hover:text-slate-900">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
