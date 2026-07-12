"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Check, Clock3, CircleDot } from "lucide-react";
import { cn } from "@/lib/cn";
import { gsap, motion, prefersReducedMotion } from "@/lib/gsap";

/**
 * Signature element: a stylised "compliance board" built from the real product's
 * visual language. Cards settle in with a GSAP stagger, then the "Filed on time"
 * seal pops. Reduced-motion / no-JS renders everything at rest (visible).
 */

type Ticket = {
  code: string;
  client: string;
  due: string;
  tone?: "due" | "progress" | "done";
};

const COLUMNS: { name: string; accent: string; tickets: Ticket[] }[] = [
  {
    name: "Due this week",
    accent: "text-brass",
    tickets: [
      { code: "GSTR-3B", client: "Sharma Traders", due: "11 Jul", tone: "due" },
      { code: "TDS 26Q", client: "Ramesh Gupta", due: "14 Jul", tone: "due" },
    ],
  },
  {
    name: "In progress",
    accent: "text-blue",
    tickets: [
      { code: "ITR-3", client: "Balaji Consulting", due: "18 Jul", tone: "progress" },
      { code: "ROC MGT-7", client: "Sri Hardware", due: "22 Jul", tone: "progress" },
    ],
  },
  {
    name: "Filed",
    accent: "text-green",
    tickets: [{ code: "GSTR-1", client: "Padala & Co.", due: "08 Jul", tone: "done" }],
  },
];

function ToneIcon({ tone }: { tone?: Ticket["tone"] }) {
  if (tone === "done")
    return <Check className="size-3.5 text-green" strokeWidth={2.5} aria-hidden />;
  if (tone === "progress")
    return <CircleDot className="size-3.5 text-blue" strokeWidth={2} aria-hidden />;
  return <Clock3 className="size-3.5 text-brass" strokeWidth={2} aria-hidden />;
}

function TicketCard({ t }: { t: Ticket }) {
  return (
    <div
      data-ticket
      className="rounded-lg border border-line bg-card p-2.5 shadow-sm"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] font-medium tracking-tight text-ink">
          {t.code}
        </span>
        <span
          className={cn(
            "tabular font-mono text-[10px]",
            t.tone === "done" ? "text-green" : "text-ink-soft"
          )}
        >
          {t.due}
        </span>
      </div>
      <div className="mt-1.5 flex items-center gap-1.5">
        <ToneIcon tone={t.tone} />
        <span className="truncate text-[11px] text-ink-soft">{t.client}</span>
      </div>
    </div>
  );
}

export function HeroBoard() {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      gsap
        .timeline({ defaults: { ease: motion.ease } })
        .from(q("[data-ticket]"), {
          y: 10,
          opacity: 0,
          scale: 0.98,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
        })
        .from(
          q("[data-seal]"),
          { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(2)" },
          "-=0.1"
        );
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative">
      {/* Ambient glow */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-blue/10 via-brass/5 to-transparent blur-2xl"
        aria-hidden
      />

      <div className="overflow-hidden rounded-xl border border-line bg-paper-2/70 shadow-2xl shadow-ink/10 ring-1 ring-ink/5 backdrop-blur">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-card/80 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="ml-2 text-[11px] font-medium text-ink-soft">
            Compliance board
          </span>
          <span className="tabular ml-auto font-mono text-[10px] text-ink-soft">
            Jul 2026
          </span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-3 gap-3 p-3 sm:p-4">
          {COLUMNS.map((col) => (
            <div key={col.name} className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className={cn("text-[11px] font-semibold", col.accent)}>
                  {col.name}
                </span>
                <span className="tabular font-mono text-[10px] text-ink-soft">
                  {col.tickets.length}
                </span>
              </div>
              {col.tickets.map((t) => (
                <TicketCard key={t.code} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Floating "on time" seal — the payoff of the animation */}
      <div
        data-seal
        className="absolute -bottom-4 -right-3 flex items-center gap-2 rounded-full border border-green/20 bg-card px-3 py-2 shadow-lg"
      >
        <span className="grid size-6 place-items-center rounded-full bg-green-tint">
          <Check className="size-3.5 text-green" strokeWidth={2.5} aria-hidden />
        </span>
        <span className="text-[12px] font-medium text-ink">Filed on time</span>
      </div>
    </div>
  );
}
