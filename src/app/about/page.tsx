import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About",
  description: "About EaseBuild — custom web applications for businesses.",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="py-12 sm:py-16 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">About EaseBuild</h1>
        <p className="mt-6 leading-relaxed text-slate-700">
          EaseBuild is a studio for practical web software — CRMs, internal tools,
          and client-facing apps built with modern stacks (Next.js, PostgreSQL, Docker,
          cloud hosting).
        </p>
        <p className="mt-4 leading-relaxed text-slate-700">
          Each project on this site is a real deployment: designed for a business
          workflow, shipped to production, and maintained over time. CA Firm Ops is
          our flagship practice-management product for Chartered Accountants in India.
        </p>
        <p className="mt-4 leading-relaxed text-slate-700">
          We focus on clarity, reliability, and total cost of ownership — so small
          teams get enterprise-quality tools without enterprise complexity.
        </p>
      </div>
    </Container>
  );
}
