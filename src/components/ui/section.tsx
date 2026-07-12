import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("eyebrow flex items-center gap-2", className)} {...rest}>
      <span className="inline-block h-px w-6 bg-brass/60" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  dark,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <Eyebrow className={cn(center && "justify-center")}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.1] sm:text-4xl",
          dark ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-paper/70" : "text-ink-soft"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
