import type { SpotTest } from "../types";

/** Mock data layer – replace with real API calls. */
const SPOT_TESTS: SpotTest[] = [
  {
    id: "st1", title: "Algebra spot test", subject: "Mathematics", grade: "Grade 10", date: "2026-10-28", time: "16:00", durationMinutes: 20, status: "scheduled",
    questions: [
      { id: "st1-q1", text: "If 2x − 5 > x − 2, which value of x satisfies it?", mode: "single", options: [
        { id: "st1-q1-a", text: "4", correct: true }, { id: "st1-q1-b", text: "1", correct: false }, { id: "st1-q1-c", text: "2", correct: false }, { id: "st1-q1-d", text: "3", correct: false },
      ] },
      { id: "st1-q2", text: "Which of these are prime numbers?", mode: "multiple", options: [
        { id: "st1-q2-a", text: "7", correct: true }, { id: "st1-q2-b", text: "9", correct: false }, { id: "st1-q2-c", text: "11", correct: true },
      ] },
    ],
  },
  {
    id: "st2", title: "Geometry quick check", subject: "Mathematics", grade: "Grade 11", date: "2026-10-12", time: "17:00", durationMinutes: 15, status: "completed",
    questions: [
      { id: "st2-q1", text: "The sum of angles in a triangle is?", mode: "single", options: [
        { id: "st2-q1-a", text: "90°", correct: false }, { id: "st2-q1-b", text: "180°", correct: true }, { id: "st2-q1-c", text: "360°", correct: false },
      ] },
    ],
  },
  { id: "st3", title: "Trigonometry basics", subject: "Mathematics", grade: "Grade 11", date: "2026-11-04", time: "16:30", durationMinutes: 30, status: "draft", questions: [] },
];

export async function getSpotTests(): Promise<SpotTest[]> {
  return SPOT_TESTS;
}

export async function getSpotTest(id: string): Promise<SpotTest | undefined> {
  return SPOT_TESTS.find((t) => t.id === id);
}
