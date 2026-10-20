import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { ArrowLeftIcon, BellIcon } from "@/components/ui/icons";
import type { TeacherSession } from "../types";

type TeacherHeaderProps = { title: string; subtitle?: string; teacher: TeacherSession; backHref?: string };

export function TeacherHeader({ title, subtitle, teacher, backHref }: TeacherHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-4">
        {backHref && (
          <Link href={backHref} aria-label="Back to dashboard" className="-m-2 rounded-full p-2 text-navy hover:text-brand">
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
        )}
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-bold text-navy md:text-4xl">{title}</h1>
          {subtitle && <p className="mt-1 truncate text-sm text-muted md:text-base">{subtitle}</p>}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <button type="button" aria-label="Notifications" className="relative hidden text-slate-500 hover:text-brand sm:block">
          <BellIcon className="h-6 w-6" />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-coral" />
        </button>
        <div className="flex items-center gap-3">
          <span className="hidden text-right leading-tight sm:block">
            <span className="block text-lg font-medium text-blue-900">{teacher.name}</span>
            <span className="block text-xs text-navy">{teacher.title}</span>
          </span>
          <Avatar name={teacher.fullName} src={teacher.avatarUrl} className="h-12 w-12 md:h-14 md:w-14" />
        </div>
      </div>
    </header>
  );
}
