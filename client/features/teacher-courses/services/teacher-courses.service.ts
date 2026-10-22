import type { TeacherCourse } from "../types";

/** Mock data layer – replace with real API calls. */
const COURSES: TeacherCourse[] = [
  {
    id: "co1", title: "Grade 10 Mathematics – Complete Revision", subject: "Mathematics", medium: "Sinhala", level: "Grade 10",
    description: "A full revision programme covering algebra, geometry and trigonometry with past-paper practice.",
    outcomes: ["Solve algebraic equations confidently", "Master geometry proofs", "Finish past papers within time"],
    price: 6500, discountPrice: 5500, durationWeeks: 12, certificate: true, status: "published", students: 64,
  },
  {
    id: "co2", title: "O/L Mathematics Crash Course", subject: "Mathematics", medium: "English", level: "GCE O/L",
    description: "Short, focused lessons for the last 6 weeks before the exam.",
    outcomes: ["Revise every chapter fast", "Learn exam-day time management"],
    price: 4500, durationWeeks: 6, enrollmentLimit: 40, certificate: false, status: "published", students: 38,
  },
  {
    id: "co3", title: "Algebra Foundations (Free)", subject: "Mathematics", medium: "Tamil", level: "Grade 9",
    description: "A free introduction to algebra for younger students.",
    outcomes: ["Understand variables and expressions"],
    price: 0, durationWeeks: 4, certificate: false, status: "draft", students: 0,
  },
];

export async function getTeacherCourses(): Promise<TeacherCourse[]> {
  return COURSES;
}

export async function getTeacherCourse(id: string): Promise<TeacherCourse | undefined> {
  return COURSES.find((c) => c.id === id);
}
