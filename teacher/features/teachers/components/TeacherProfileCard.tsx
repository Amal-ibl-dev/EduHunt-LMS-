import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Teacher } from "../types";

export function TeacherProfileCard({ teacher, classCount }: { teacher: Teacher; classCount: number }) {
  const initials = teacher.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  const stats = [
    { label: "Classes", value: classCount },
    { label: "Students", value: teacher.students },
    { label: "Subjects", value: teacher.subjects.length },
  ];

  return (
    <Card className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex min-w-0 flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent-soft text-2xl font-semibold text-accent">
          {initials}
        </span>
        <div className="min-w-0 space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <h2 className="break-words text-2xl font-bold text-slate-800">{teacher.name}</h2>
            <StatusBadge status={teacher.status} />
          </div>
          <p className="break-all text-slate-500">{teacher.email}</p>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {[...teacher.subjects, ...teacher.grades].map((chip) => (
              <span key={chip} className="rounded-full bg-admin-soft px-3 py-1 text-xs font-medium text-admin-dark">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <dl className="grid shrink-0 grid-cols-3 divide-x divide-slate-100 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse px-4 sm:px-6">
            <dt className="text-sm text-slate-400">{s.label}</dt>
            <dd className="text-2xl font-bold text-slate-800">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
