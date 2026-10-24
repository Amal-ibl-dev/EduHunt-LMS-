import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/format";
import type { ClassGroup } from "../types";

type ClassHeaderProps = { cls: ClassGroup; addLessonHref?: string; editHref?: string };

export function ClassHeader({ cls, addLessonHref, editHref }: ClassHeaderProps) {
  return (
    <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h2 className="break-words text-2xl font-bold text-slate-800">
          {cls.grade} – {cls.subject}
        </h2>
        <p className="mt-1 text-slate-500">
          {cls.teacherName} · {cls.lessonCount} lessons · {cls.studentCount} students · starts {formatDate(cls.startDate)}
        </p>
      </div>
      {/* TODO: open an add-lesson form */}
      <div className="flex flex-wrap gap-3">
        {editHref && (
          <Button href={editHref} variant="adminOutline" size="sm">
            Edit class
          </Button>
        )}
        <Button href={addLessonHref} variant="admin" size="sm">
          + Add lesson
        </Button>
      </div>
    </Card>
  );
}
