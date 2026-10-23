import Link from "next/link";
import { LinkIcon, NotesIcon, PapersIcon, SpeedIcon } from "@/components/ui/icons";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";

const ITEMS = [
  { label: "Papers", href: ROUTES.papers, icon: PapersIcon, tone: "bg-blue-200 text-blue-600" },
  { label: "Notes & Tutes", href: ROUTES.notes, icon: NotesIcon, tone: "bg-purple-200 text-purple-600" },
  { label: "Speed Test", href: ROUTES.speedTest, icon: SpeedIcon, tone: "bg-amber-200 text-amber-500" },
  { label: "Class Links", href: ROUTES.classLinks, icon: LinkIcon, tone: "bg-emerald-200 text-emerald-500" },
];

export function QuickAccess() {
  return (
    <nav aria-label="Quick access" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {ITEMS.map(({ label, href, icon: Icon, tone }) => (
        <Link
          key={label}
          href={href}
          className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md md:py-9"
        >
          <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl", tone)}>
            <Icon className="h-6 w-6" />
          </span>
          <span className="text-xl text-slate-700">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
