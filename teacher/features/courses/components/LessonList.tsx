import Link from "next/link";
import { LESSON_SECTIONS, type Lesson } from "../types";

export function LessonList({ lessons, basePath }: { lessons: Lesson[]; basePath: string }) {
  return (
    <ul className="space-y-3">
      {lessons.map((l) => (
        <li key={l.id}>
          <Link
            href={`${basePath}/lessons/${l.id}`}
            className="flex items-center gap-4 rounded-3xl bg-white/90 p-4 shadow-sm transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-admin sm:p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-admin-soft font-semibold text-admin-dark">
              {l.number}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block break-words font-medium text-slate-800">{l.title}</span>
              <span className="block text-sm capitalize text-slate-400">
                {l.materialCount} resources · {LESSON_SECTIONS.join(", ")}
              </span>
            </span>
            <span aria-hidden className="text-slate-400">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
