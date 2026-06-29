import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact EaseBuild for custom web application projects.",
};

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@easebuild.in";

export default function ContactPage() {
  return (
    <Container>
      <div className="py-12 sm:py-16 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Contact</h1>
        <p className="mt-4 leading-relaxed text-slate-700">
          Interested in a custom web app for your business, or want to learn more
          about our products? Reach out — we typically respond within one business day.
        </p>
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium text-slate-500">Email</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-1 block text-lg font-semibold text-blue-600 hover:text-blue-700"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          For CA Firm Ops product support, use the contact details on{" "}
          <a
            href="https://cafirmops.in"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            cafirmops.in
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
