import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LinkIcon, NotesIcon } from "@/components/ui/icons";
import { LESSON_SECTIONS, type ClassGroup, type Lesson, type Material } from "../types";

const GROUPS = [
  { kind: "note", label: "Tutes / Notes", icon: NotesIcon, hint: "PDF, DOCX" },
  { kind: "link", label: "Class / Video Links", icon: LinkIcon, hint: "Meet, YouTube, Zoom" },
] as const;

type Props = { cls: ClassGroup; lesson: Lesson; materials: Material[] };

export function LessonMaterials({ cls, lesson, materials }: Props) {
  return (
    <div className="space-y-6">
      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2 className="break-words text-2xl font-bold text-slate-800">{lesson.title}</h2>
          <p className="mt-1 text-slate-500">
            {cls.grade} – {cls.subject} · {cls.teacherName}
          </p>
        </div>
        {/* TODO: upload / add-link form */}
        <Button variant="admin" size="sm">+ Add resource</Button>
      </Card>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-4 xl:gap-6">
        {LESSON_SECTIONS.map((section) => (
          <Card key={section} className="min-w-0 space-y-5">
            <h3 className="text-lg font-semibold capitalize text-slate-800">{section}</h3>
            {GROUPS.map(({ kind, label, icon: Icon, hint }) => {
              const items = materials.filter((m) => m.section === section && m.kind === kind);
              return (
                <div key={kind}>
                  <p className="mb-2 text-sm font-medium text-slate-500">
                    {label} <span className="font-normal text-slate-400">({hint})</span>
                  </p>
                  {items.length === 0 ? (
                    <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-400">Nothing added yet.</p>
                  ) : (
                    <ul className="space-y-1">
                      {items.map((m) => (
                        <li key={m.id}>
                          <a
                            href={m.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-admin-soft"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-admin-soft text-admin">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="min-w-0 flex-1 break-words text-sm text-slate-700">{m.title}</span>
                            <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500">{m.format}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </Card>
        ))}
      </div>
    </div>
  );
}
