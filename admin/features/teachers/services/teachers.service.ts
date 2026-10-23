import type { Teacher } from "../types";

const TEACHERS: Teacher[] = [
  { id: "t1", name: "Prasanna Wijesekara", email: "prasanna@example.com", subjects: ["Mathematics"], grades: ["Grade 10", "Grade 11"], students: 42, status: "active" },
  { id: "t2", name: "Malsha Rodrigo", email: "malsha@example.com", subjects: ["Science"], grades: ["Grade 9", "Grade 10"], students: 38, status: "active" },
  { id: "t3", name: "Nuwan Karunaratne", email: "nuwan@example.com", subjects: ["English"], grades: ["Grade 9", "Grade 10", "Grade 11"], students: 51, status: "active" },
  { id: "t4", name: "Sewwandi Abeysekara", email: "sewwandi@example.com", subjects: ["Sinhala", "Buddhism"], grades: ["Grade 9"], students: 24, status: "active" },
  { id: "t5", name: "Lakmal Dissanayake", email: "lakmal@example.com", subjects: ["History"], grades: ["Grade 10", "Grade 11"], students: 19, status: "inactive" },
];

export async function getTeachers(): Promise<Teacher[]> {
  return TEACHERS;
}

export async function getTeacher(id: string): Promise<Teacher | undefined> {
  return TEACHERS.find((t) => t.id === id);
}
