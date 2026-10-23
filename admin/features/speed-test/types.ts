import type { Subject } from "@/constants/subjects";

export type Question = {
  id: string;
  text: string;
  options: string[];
  answerIndex: number;
};

export type SpeedTestResult = { subject: Subject; score: number; total: number; date: string };

export type MonthlyMarks = Record<Subject, number[]>;
