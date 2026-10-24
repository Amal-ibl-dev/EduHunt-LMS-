import type { Subject } from "@/constants/subjects";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { getRecentContent } from "@/features/content/services/content.service";

/** Mock aggregation – replace with real queries. */
export type Kpi = {
  key: "students" | "papers" | "notes" | "tests";
  label: string;
  value: number;
  href: string;
  a: { label: string; value: number };
  b: { label: string; value: number };
};

export type DownloadSeries = { labels: string[]; papers: number[]; notes: number[] };

export async function getTeacherDashboard() {
  const kpis: Kpi[] = [
    { key: "students", label: "Students", value: 128, href: TEACHER_ROUTES.classes, a: { label: "Active", value: 112 }, b: { label: "New", value: 9 } },
    { key: "papers", label: "Papers", value: 24, href: TEACHER_ROUTES.upload("papers"), a: { label: "Published", value: 22 }, b: { label: "Drafts", value: 2 } },
    { key: "notes", label: "Notes & Tutes", value: 41, href: TEACHER_ROUTES.upload("notes"), a: { label: "Published", value: 38 }, b: { label: "Drafts", value: 3 } },
    { key: "tests", label: "Spot Tests", value: 3, href: TEACHER_ROUTES.spotTime, a: { label: "Scheduled", value: 1 }, b: { label: "Drafts", value: 1 } },
  ];

  // Last 12 months, oldest first.
  const downloads: DownloadSeries = {
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    papers: [40, 35, 50, 55, 60, 70, 65, 90, 80, 110, 140, 150],
    notes: [30, 28, 45, 50, 52, 60, 55, 90, 70, 130, 170, 192],
  };

  const contentMix = [
    { label: "Papers", value: 24, color: "#3b82f6", href: TEACHER_ROUTES.upload("papers") },
    { label: "Notes & Tutes", value: 41, color: "#a855f7", href: TEACHER_ROUTES.upload("notes") },
    { label: "Spot Tests", value: 3, color: "#f59e0b", href: TEACHER_ROUTES.spotTime },
    { label: "Class Links", value: 8, color: "#10b981", href: TEACHER_ROUTES.upload("class-links") },
  ];

  const topContent: { id: string; title: string; subject: Subject; downloads: number }[] = [
    { id: "t1", title: "Mathematics Past Paper 2023", subject: "Mathematics", downloads: 96 },
    { id: "t2", title: "Algebra Chapter 1 Notes", subject: "Mathematics", downloads: 81 },
    { id: "t3", title: "Geometry Revision Tute", subject: "Mathematics", downloads: 64 },
    { id: "t4", title: "Mathematics Past Paper 2021", subject: "Mathematics", downloads: 52 },
  ];

  const upcoming = [
    { id: "u1", title: "Grade 10 Mathematics – Algebra", classId: "c1", day: "22", month: "Oct", time: "4:00 PM", platform: "Google Meet", url: "https://meet.example.com/grade10-algebra" },
    { id: "u2", title: "Grade 11 Mathematics – Revision", classId: "c2", day: "24", month: "Oct", time: "6:30 PM", platform: "Zoom", url: "https://zoom.example.com/j/grade11" },
    { id: "u3", title: "Grade 10 Mathematics – Doubt session", classId: "c1", day: "26", month: "Oct", time: "5:00 PM", platform: "Google Meet", url: "https://meet.example.com/doubts" },
  ];

  return { kpis, downloads, contentMix, topContent, upcoming, recentUploads: await getRecentContent() };
}

export type TeacherDashboardData = Awaited<ReturnType<typeof getTeacherDashboard>>;
