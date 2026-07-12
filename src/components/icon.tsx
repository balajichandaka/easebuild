import {
  Ticket,
  Repeat,
  Clock,
  Users,
  LayoutTemplate,
  FileSpreadsheet,
  ShieldCheck,
  Mail,
  LayoutDashboard,
  Server,
  Lock,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

// Names referenced from content/site.ts → lucide components.
const MAP: Record<string, LucideIcon> = {
  Ticket,
  Repeat,
  Clock,
  Users,
  LayoutTemplate,
  FileSpreadsheet,
  ShieldCheck,
  Mail,
  LayoutDashboard,
  Server,
  Lock,
  KeyRound,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? Ticket;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden />;
}
