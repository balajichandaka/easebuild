import { cn } from "@/lib/cn";
import { site } from "@/content/site";

/**
 * Brand mark: a rounded "CA" monogram (product blue) with a small brass "seal"
 * tick — a nod to a verified/attested filing — plus the wordmark.
 * `tone` switches text colour for light vs dark (ink) backgrounds.
 * To use a real logo image instead, drop it in /public and swap the monogram span.
 */
export function Logo({
  tone = "light",
  showSub = true,
  className,
}: {
  tone?: "light" | "dark";
  showSub?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue to-blue-deep font-display text-[15px] font-bold text-white shadow-sm">
        CA
        <span
          className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-paper bg-brass"
          aria-hidden
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-semibold tracking-tight",
            tone === "dark" ? "text-paper" : "text-ink"
          )}
        >
          {site.name}
        </span>
        {showSub ? (
          <span
            className={cn(
              "mt-0.5 text-[11px]",
              tone === "dark" ? "text-paper/55" : "text-ink-soft"
            )}
          >
            Work Management
          </span>
        ) : null}
      </span>
    </span>
  );
}
