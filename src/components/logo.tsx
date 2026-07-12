import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

/**
 * Brand mark: logo image plus the wordmark.
 * `tone` switches text colour for light vs dark (ink) backgrounds.
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
      <Image
        src="/logo.png"
        alt={site.name}
        width={36}
        height={36}
        className="size-9 shrink-0 rounded-lg object-contain"
      />
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
