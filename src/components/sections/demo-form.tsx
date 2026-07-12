"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const FIELDS = [
  { name: "name", label: "Your name", type: "text", placeholder: "Suresh Kumar", required: true },
  { name: "firm", label: "Firm name", type: "text", placeholder: "Kumar & Associates", required: true },
  { name: "email", label: "Work email", type: "email", placeholder: "you@yourfirm.in", required: true },
  { name: "phone", label: "Phone (optional)", type: "tel", placeholder: "+91 …", required: false },
] as const;

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Couldn't reach the server. Please email us instead.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-green/20 bg-green-tint/50 p-10 text-center">
        <CheckCircle2 className="size-12 text-green" strokeWidth={1.5} />
        <h3 className="mt-4 text-xl text-ink">Request received</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-soft">
          Thanks — we&apos;ll reach out shortly to schedule your walkthrough. Prefer
          to talk now? Email{" "}
          <a href={`mailto:${site.contact.email}`} className="font-medium text-blue underline">
            {site.contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-line bg-card p-6 shadow-xl shadow-ink/5 ring-1 ring-ink/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.name} className={cn(f.name === "email" || f.name === "phone" ? "" : "sm:col-span-1")}>
            <label htmlFor={f.name} className="block text-sm font-medium text-ink">
              {f.label} {f.required ? <span className="text-brass">*</span> : null}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              placeholder={f.placeholder}
              className="mt-1.5 h-11 w-full rounded-lg border border-line-strong bg-paper px-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-blue focus:bg-card"
            />
          </div>
        ))}
      </div>

      {status === "error" ? (
        <p className="mt-4 text-sm text-red">{error}</p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="mt-6 w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            {site.hero.primaryCta} <ArrowRight className="size-4" />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-ink-soft">
        No spam. We&apos;ll only use your details to arrange the demo.
      </p>
    </form>
  );
}
