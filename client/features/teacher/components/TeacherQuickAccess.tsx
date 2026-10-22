import Link from "next/link";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { cn } from "@/lib/cn";
import { UPLOAD_ORDER, UPLOAD_TYPES, type UploadTypeKey } from "@/features/teacher-upload/upload-types";

/** Dashboard shortcuts; on upload pages the same cards act as tabs (active one is tinted). */
export function TeacherQuickAccess({ active }: { active?: UploadTypeKey }) {
  return (
    <nav aria-label="Quick access" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
      {UPLOAD_ORDER.map((key) => {
        const t = UPLOAD_TYPES[key];
        const Icon = t.icon;
        return (
          <Link
            key={key}
            href={TEACHER_ROUTES.upload(key)}
            aria-current={active === key ? "page" : undefined}
            className={cn(
              "flex min-w-0 items-center gap-4 rounded-3xl p-5 shadow-sm transition hover:shadow-md md:py-8",
              active === key ? t.active : "bg-white",
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
