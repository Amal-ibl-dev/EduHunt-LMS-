import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TEACHER_PATHS } from "@/constants/teacher-routes";
import { formatCurrency } from "@/lib/format";
import type { TeacherCourse } from "../types";

export function CourseCard({ course }: { course: TeacherCourse }) {
  const medium = course.medium === "Other" ? course.mediumOther ?? "Other" : course.medium;

  return (
    <Card className="flex min-w-0 flex-col overflow-hidden p-0">
      <div
        className="relative flex aspect-video items-end bg-gradient-to-br from-admin to-accent p-4"
        style={course.thumbnailUrl ? { backgroundImage: `url(${course.thumbnailUrl})`, backgroundSize: "cover" } : undefined}
      >
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-admin-dark">{medium} medium</span>
        <span className="absolute right-4 top-4"><StatusBadge status={course.status === "published" ? "active" : "pending"} /></span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="min-w-0">
          <h3 className="line-clamp-2 break-words text-lg font-semibold leading-snug text-slate-800">{course.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{course.subject} · {course.level} · {course.durationWeeks} weeks</p>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3">
          <p className="text-lg font-bold text-navy">
            {course.price === 0 ? "Free" : formatCurrency(course.discountPrice ?? course.price)}
            {course.discountPrice !== undefined && course.price > 0 && (
              <span className="ml-2 text-sm font-normal text-slate-400 line-through">{formatCurrency(course.price)}</span>
            )}
          </p>
          <p className="text-sm text-slate-500">{course.students} students</p>
        </div>
        <Link href={TEACHER_PATHS.courseEdit(course.id)} className="text-sm font-medium text-admin-dark hover:underline">
          Edit course →
        </Link>
      </div>
    </Card>
  );
}
