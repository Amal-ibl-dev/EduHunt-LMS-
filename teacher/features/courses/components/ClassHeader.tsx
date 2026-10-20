import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { ClassGroup } from "../types";

export function ClassHeader({ cls }: { cls: ClassGroup }) {
  return (
    <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h2 className="break-words text-2xl font-bold text-slate-800">
          {cls.grade} – {cls.subject}
        </h2>
        <p className="mt-1 text-slate-500">
          {cls.teacherName} · {cls.lessonCount} lessons · {cls.studentCount} students
        </p>
      </div>
      {/* TODO: open an add-lesson form */}
      <Button variant="admin" size="sm">+ Add lesson</Button>
    </Card>
  );
}
