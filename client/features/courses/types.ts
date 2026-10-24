import type { Subject } from "@/constants/subjects";

export const LESSON_SECTIONS = ["theory", "revision", "practice"] as const;
export type LessonSection = (typeof LESSON_SECTIONS)[number];

export type ClassGroup = {
  id: string;
  teacherId: string;
  teacherName: string;
  grade: string;
  subject: Subject;
  studentCount: number;
  lessonCount: number;
  /** ISO date the class starts */
  startDate: string;
};

export type Lesson = { id: string; classId: string; number: number; title: string; materialCount: number };

export type MaterialFormat = "PDF" | "DOCX" | "Note" | "Meet" | "YouTube" | "Zoom" | "Link";

export type Material = {
  id: string;
  lessonId: string;
  section: LessonSection;
  /** note = Tutes / Notes, link = Class / Video links */
  kind: "note" | "link";
  title: string;
  format: MaterialFormat;
  url: string;
};
