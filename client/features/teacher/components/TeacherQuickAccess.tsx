import Link from "next/link";
import { TimerIcon } from "@/components/ui/icons";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { cn } from "@/lib/cn";
import { UPLOAD_TYPES, type UploadTypeKey } from "@/features/teacher-upload/upload-types";

type QuickKey = UploadTypeKey | "spot-time";

const ITEMS: { key: QuickKey; label: string; href: string; icon: typeof TimerIcon; box: string; active: string }[] = [
  { key: "papers", label: UPLOAD_TYPES.papers.label, href: TEACHER_ROUTES.upload("papers"), icon: UPLOAD_TYPES.papers.icon, box: UPLOAD_TYPES.papers.box, active: UPLOAD_TYPES.papers.active },
  { key: "notes", label: UPLOAD_TYPES.notes.label, href: TEACHER_ROUTES.upload("notes"), icon: UPLOAD_TYPES.notes.icon, box: UPLOAD_TYPES.notes.box, active: UPLOAD_TYPES.notes.active },
  { key: "spot-time", label: "Spot Time", href: TEACHER_ROUTES.spotTime, icon: TimerIcon, box: "bg-amber-200 text-amber-500", active: "bg-amber-50" },
  { key: "class-links", label: UPLOAD_TYPES["class-links"].label, href: TEACHER_ROUTES.upload("class-links"), icon: UPLOAD_TYPES["class-links"].icon, box: UPLOAD_TYPES["class-links"].box, active: UPLOAD_TYPES["class-links"].active },
];

/** Dashboard shortcuts; on upload pages the same cards act as tabs (active one is tinted). */
export function TeacherQuickAccess({ active }: { active?: QuickKey }) {
  return (
    <nav aria-label="Quick access" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
      {ITEMS.map((t) => {
        const Icon = t.icon;
        return (
          <Link
            key={t.key}
            href={t.href}
            aria-current={active === t.key ? "page" : undefined}
            className={cn(
              "flex min-w-0 items-center gap-4 rounded-3xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-admin md:py-8",
              active === t.key ? t.active : "bg-white",
            )}
          >
            <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl", t.box)}>
              <Icon className="h-6 w-6" />
            </span>
            <span className="truncate text-xl text-slate-700">{t.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
