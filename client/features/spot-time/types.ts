import type { Subject } from "@/constants/subjects";

export type AnswerMode = "single" | "multiple";

export type SpotOption = { id: string; text: string; correct: boolean };
export type SpotQuestion = { id: string; text: string; mode: AnswerMode; options: SpotOption[] };

export type SpotTest = {
  id: string;
  title: string;
  subject: Subject;
  grade: string;
  /** ISO date */
  date: string;
  time: string;
  durationMinutes: number;
  status: "draft" | "scheduled" | "completed";
  questions: SpotQuestion[];
};
