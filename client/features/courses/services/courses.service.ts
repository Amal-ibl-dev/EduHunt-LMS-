import type { Subject } from "@/constants/subjects";
import { getTeachers } from "@/features/teachers/services/teachers.service";
import type { ClassGroup, Lesson, LessonSection, Material, MaterialFormat } from "../types";

/** Mock data layer – class -> lessons -> sections -> materials. Swap for real queries later. */
const CLASS_ROWS: [string, string, string, Subject, number, string][] = [
  ["c1", "t1", "Grade 10", "Mathematics", 24, "2026-01-12"],
  ["c2", "t1", "Grade 11", "Mathematics", 18, "2026-01-19"],
  ["c3", "t2", "Grade 9", "Science", 22, "2026-02-02"],
  ["c4", "t2", "Grade 10", "Science", 16, "2026-02-09"],
  ["c5", "t3", "Grade 10", "English", 28, "2026-03-01"],
  ["c6", "t3", "Grade 9", "English", 23, "2026-03-08"],
  ["c7", "t4", "Grade 9", "Sinhala", 24, "2026-04-05"],
  ["c8", "t5", "Grade 10", "History", 19, "2026-04-12"],
];

const LESSON_TITLES: Record<Subject, string[]> = {
  Mathematics: ["Algebra", "Geometry", "Trigonometry"],
  Science: ["Motion and Force", "Chemical Reactions", "Human Biology"],
  English: ["Grammar Basics", "Reading Comprehension", "Essay Writing"],
  Sinhala: ["Grammar", "Literature", "Composition"],
  History: ["Ancient Civilizations", "Colonial Period", "Independence Movement"],
  Buddhism: ["Life of the Buddha", "The Four Noble Truths", "Ethics and Practice"],
};

function materialsFor(lessonId: string): Material[] {
  let n = 0;
  const m = (section: LessonSection, kind: Material["kind"], title: string, format: MaterialFormat): Material => ({
    id: `${lessonId}-m${++n}`,
    lessonId,
    section,
    kind,
    title,
    format,
    url: "#",
  });
  return [
    m("theory", "note", "Theory notes", "PDF"),
    m("theory", "note", "Theory worksheet", "DOCX"),
    m("theory", "link", "Concept explanation video", "YouTube"),
    m("revision", "note", "Revision summary", "PDF"),
    m("revision", "link", "Revision class", "Zoom"),
    m("practice", "note", "Practice questions", "PDF"),
    m("practice", "note", "Answer sheet", "DOCX"),
    m("practice", "link", "Doubt-clearing session", "Meet"),
  ];
}

function lessonsFor(classId: string, subject: Subject): Lesson[] {
  return LESSON_TITLES[subject].map((title, i) => {
    const id = `${classId}-l${i + 1}`;
    return {
      id,
      classId,
      number: i + 1,
      title: `Lesson ${String(i + 1).padStart(2, "0")} – ${title}`,
      materialCount: materialsFor(id).length,
    };
  });
}

export async function getAllClasses(): Promise<ClassGroup[]> {
  const teachers = await getTeachers();
  return CLASS_ROWS.map(([id, teacherId, grade, subject, studentCount, startDate]) => ({
    id,
    teacherId,
    teacherName: teachers.find((t) => t.id === teacherId)?.name ?? "Unassigned",
    grade,
    subject,
    studentCount,
    lessonCount: LESSON_TITLES[subject].length,
    startDate,
  }));
}

export async function getClassesByTeacher(teacherId: string): Promise<ClassGroup[]> {
  return (await getAllClasses()).filter((c) => c.teacherId === teacherId);
}

export async function getClassById(classId: string): Promise<ClassGroup | undefined> {
  return (await getAllClasses()).find((c) => c.id === classId);
}

export async function getLessonsByClass(classId: string): Promise<Lesson[]> {
  const row = CLASS_ROWS.find((r) => r[0] === classId);
  return row ? lessonsFor(classId, row[3]) : [];
}

export async function getLessonById(lessonId: string): Promise<Lesson | undefined> {
  const classId = lessonId.split("-l")[0];
  return (await getLessonsByClass(classId)).find((l) => l.id === lessonId);
}

export async function getMaterialsByLesson(lessonId: string): Promise<Material[]> {
  return materialsFor(lessonId);
}
