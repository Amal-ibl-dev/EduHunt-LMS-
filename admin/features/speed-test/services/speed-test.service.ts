import type { MonthlyMarks, Question, SpeedTestResult } from "../types";

export const SPEED_TEST_CONFIG = {
  subject: "Mathematics",
  grade: "Grade 10",
  questionCount: 5,
  durationMinutes: 10,
} as const;

const QUESTIONS: Question[] = [
  { id: "q1", text: "If 2X-5 > X-2, what is the value of x?", options: ["4", "1", "2", "3"], answerIndex: 0 },
  { id: "q2", text: "What is the value of 3² + 4²?", options: ["25", "7", "12", "49"], answerIndex: 0 },
  { id: "q3", text: "Solve: 5x = 45", options: ["8", "9", "10", "7"], answerIndex: 1 },
  { id: "q4", text: "What is 15% of 200?", options: ["20", "25", "30", "35"], answerIndex: 2 },
  { id: "q5", text: "A square has a perimeter of 36 cm. What is the length of one side?", options: ["6 cm", "8 cm", "9 cm", "12 cm"], answerIndex: 2 },
];

const MONTHLY_MARKS: MonthlyMarks = {
  Mathematics: [2, 3, 4, 5, 6, 6, 6, 8, 9, 9, 8, 6],
  Science: [3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 7, 7],
  English: [2, 3, 4, 5, 6, 6, 6, 8, 9, 9, 8, 6],
  Sinhala: [4, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 9],
  History: [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 8],
  Buddhism: [5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10],
};

const RECENT_RESULTS: SpeedTestResult[] = [
  { subject: "Mathematics", score: 9, total: 10, date: "Aug 20" },
  { subject: "Science", score: 7, total: 10, date: "Aug 19" },
  { subject: "English", score: 8, total: 10, date: "Aug 18" },
];

export async function getQuestions(): Promise<Question[]> {
  return QUESTIONS;
}
export async function getMonthlyMarks(): Promise<MonthlyMarks> {
  return MONTHLY_MARKS;
}
export async function getRecentResults(): Promise<SpeedTestResult[]> {
  return RECENT_RESULTS;
}
