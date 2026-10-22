import type { Subject } from "@/constants/subjects";
import { getRecentContent } from "@/features/content/services/content.service";

/** Mock aggregation – replace with real queries. */
export type Kpi = {
  key: "students" | "papers" | "notes" | "tests";
  label: string;
  value: number;
  a: { label: string; value: number };
  b: { label: string; value: number };
};

export async function getTeacherDashboard() {
  const kpis: Kpi[] = [
    { key: "students", label: "Students", value: 128, a: { label: "Active", value: 112 }, b: { label: "New", value: 9 } },
    { key: "papers", label: "Papers", value: 24, a: { label: "Published", value: 22 }, b: { label: "Drafts", value: 2 } },
    { key: "notes", label: "Notes & Tutes", value: 41, a: { label: "Published", value: 38 }, b: { label: "Drafts", value: 3 } },
    { key: "tests", label: "Speed Tests", value: 12, a: { label: "Live", value: 8 }, b: { label: "Avg score", value: 7 } },
  ];

  const downloads = [
    { label: "May", value: 120 },
    { label: "Jun", value: 180 },
    { label: "Jul", value: 150 },
    { label: "Aug", value: 240 },
    { label: "Sep", value: 310 },
    { label: "Oct", value: 342 },
  ];

  const contentMix = [
    { label: "Papers", value: 24, color: "#3b82f6" },
    { label: "Notes & Tutes", value: 41, color: "#a855f7" },
    { label: "Speed Tests", value: 12, color: "#f59e0b" },
    { label: "Class Links", value: 8, color: "#10b981" },
  ];

  const topContent: { id: string; title: string; subject: Subject; downloads: number }[] = [
    { id: "t1", title: "Mathematics Past Paper 2023", subject: "Mathematics", downloads: 96 },
    { id: "t2", title: "Algebra Chapter 1 Notes", subject: "Mathematics", downloads: 81 },
    { id: "t3", title: "Geometry Revision Tute", subject: "Mathematics", downloads: 64 },
    { id: "t4", title: "Mathematics Past Paper 2021", subject: "Mathematics", downloads: 52 },
  ];

  const upcoming = [
    { id: "u1", title: "Grade 10 Mathematics – Algebra", day: "22", month: "Oct", time: "4:00 PM", platform: "Google Meet" },
    { id: "u2", title: "Grade 11 Mathematics – Revision", day: "24", month: "Oct", time: "6:30 PM", platform: "Zoom" },
    { id: "u3", title: "Doubt-clearing session", day: "26", month: "Oct", time: "5:00 PM", platform: "Google Meet" },
  ];

  return { kpis, downloads, contentMix, topContent, upcoming, recentUploads: await getRecentContent() };
}

export type TeacherDashboardData = Awaited<ReturnType<typeof getTeacherDashboard>>;
