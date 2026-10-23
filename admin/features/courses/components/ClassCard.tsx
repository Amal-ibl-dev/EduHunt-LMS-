import Link from "next/link";
import { LayersIcon } from "@/components/ui/icons";
import { SUBJECT_STYLES } from "@/constants/subjects";
import type { ClassGroup } from "../types";

type ClassCardProps = { cls: ClassGroup; href: string; showTeacher?: boolean };

export function ClassCard({ cls, href, showTeacher }: ClassCardProps) {
  return (
    <Link
      href={href}
      className="group block min-w-0 rounded-3xl bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-admin"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-admin-soft text-admin">
          <LayersIcon className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <h3 className="break-words text-lg font-semibold leading-snug text-slate-800">
            {cls.grade} – <span className={SUBJECT_STYLES[cls.subject].text}>{cls.subject}</span>
          </h3>
          {showTeacher && <p className="truncate text-sm text-slate-400">{cls.teacherName}</p>}
        </div>
      </div>
      <dl className="mt-5 flex gap-8 text-sm">
        <div>
          <dt className="text-slate-400">Lessons</dt>
          <dd className="text-lg font-semibold text-slate-800">{cls.lessonCount}</dd>
        </div>
        <div>
          <dt className="text-slate-400">Students</dt>
          <dd className="text-lg font-semibold text-slate-800">{cls.studentCount}</dd>
        </div>
      </dl>
      <p className="mt-4 text-sm font-medium text-admin-dark group-hover:underline">View lessons →</p>
    </Link>
  );
}
