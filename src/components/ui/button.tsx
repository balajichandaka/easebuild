import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ink" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white shadow-sm shadow-blue/20 hover:bg-blue-deep hover:shadow-md hover:shadow-blue/25",
  ink: "bg-ink text-paper hover:bg-ink-2",
  outline:
    "border border-line-strong bg-card text-ink hover:border-ink/30 hover:bg-paper-2",
  ghost: "text-ink hover:bg-paper-2",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & { href: string } & React.ComponentProps<typeof Link>) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(external ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
