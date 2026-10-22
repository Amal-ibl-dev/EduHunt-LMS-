import type { ContentItem, ContentType } from "../types";

/**
 * Mock data layer. Replace the bodies with real API / DB calls later;
 * pages and components only depend on these function signatures.
 */
const CONTENT: ContentItem[] = [
  { id: "p-math-2023", type: "paper", title: "Mathematics Past Paper 2023", subject: "Mathematics", date: "2026-08-13", url: "#" },
  { id: "p-eng-2020", type: "paper", title: "English Past Paper 2020", subject: "English", date: "2026-08-13", url: "#" },
  { id: "p-sci-2025", type: "paper", title: "Science Past Paper 2025", subject: "Science", date: "2026-08-11", url: "#" },
  { id: "p-his-2022", type: "paper", title: "History Past Paper 2022", subject: "History", date: "2026-08-13", url: "#" },

  { id: "n-sci-5", type: "note", title: "Science Chapter 5 Notes", subject: "Science", date: "2026-08-12", url: "#" },
  { id: "n-sci-2", type: "note", title: "Science Chapter 2 Notes", subject: "Science", date: "2026-08-12", url: "#" },
  { id: "n-eng-3", type: "note", title: "English Lesson 3 Tute", subject: "English", date: "2026-08-11", url: "#" },
  { id: "n-sci-1", type: "note", title: "Science Chapter 1 Notes", subject: "Science", date: "2026-08-10", url: "#" },
  { id: "n-eng-2", type: "note", title: "English Lesson 2 Tute", subject: "English", date: "2026-08-10", url: "#" },
  { id: "n-eng-1", type: "note", title: "English Lesson 1 Notes", subject: "English", date: "2026-08-10", url: "#" },

  { id: "l-math-thu", type: "link", title: "Online Maths Class - Thursday", subject: "Mathematics", date: "2026-08-20", url: "https://meet.example.com/maths-thursday" },
];

const RECENT_IDS = ["p-math-2023", "n-sci-5", "p-sci-2025", "n-eng-1"];

export async function getContent(type: ContentType): Promise<ContentItem[]> {
  return CONTENT.filter((c) => c.type === type);
}

export async function getRecentContent(): Promise<ContentItem[]> {
  return RECENT_IDS.map((id) => CONTENT.find((c) => c.id === id)).filter((c): c is ContentItem => Boolean(c));
}

export async function getAllContent(): Promise<ContentItem[]> {
  return CONTENT;
}
