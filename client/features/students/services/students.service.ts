import type { Student } from "../types";

/** Mock data layer – swap the bodies for real API / DB calls. */
type Row = [string, string, string, string, string, Student["status"], string];

const ROWS: Row[] = [
  ["Kavindu Perera", "Grade 10", "Ananda College, Colombo", "kavindu@example.com", "STU000001", "active", "2026-08-02"],
  ["Nethmi Silva", "Grade 11", "Visakha Vidyalaya", "nethmi@example.com", "STU000002", "active", "2026-08-05"],
  ["Sahan Fernando", "Grade 10", "Maris Stella College, Negombo", "sahan@example.com", "STU000003", "active", "2026-08-11"],
  ["Dilini Jayasinghe", "Grade 9", "Devi Balika Vidyalaya", "dilini@example.com", "STU000004", "active", "2026-08-19"],
  ["Tharindu Bandara", "Grade 11", "Royal College, Colombo", "tharindu@example.com", "STU000005", "suspended", "2026-09-01"],
  ["Ishara Wickramasinghe", "Grade 10", "St. Joseph's College", "ishara@example.com", "STU000006", "active", "2026-09-07"],
  ["Hasini Rajapaksha", "Grade 9", "Visakha Vidyalaya", "hasini@example.com", "STU000007", "active", "2026-09-14"],
  ["Chamath Gunawardena", "Grade 10", "Ananda College, Colombo", "chamath@example.com", "STU000008", "active", "2026-09-21"],
  ["Sanduni Herath", "Grade 11", "Devi Balika Vidyalaya", "sanduni@example.com", "STU000009", "active", "2026-10-03"],
  ["Ravindu Senanayake", "Grade 9", "Royal College, Colombo", "ravindu@example.com", "STU000010", "active", "2026-10-09"],
];

const STUDENTS: Student[] = ROWS.map(([name, grade, school, email, studentId, status, joinedAt], i) => ({
  id: `s${i + 1}`,
  name,
  grade,
  school,
  email,
  studentId,
  status,
  joinedAt,
}));

export async function getStudents(): Promise<Student[]> {
  return STUDENTS;
}

export async function getNewestStudents(limit = 4): Promise<Student[]> {
  return [...STUDENTS].sort((a, b) => b.joinedAt.localeCompare(a.joinedAt)).slice(0, limit);
}
