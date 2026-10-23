import type { Meeting } from "../types";

/** Mock data layer – replace with real API calls. */
const MEETINGS: Meeting[] = [
  { id: "m1", title: "O/L Maths – Last month tips (open session)", description: "Free live session for any student. Bring your questions.", date: "2026-10-24", time: "18:00", durationMinutes: 60, platform: "Zoom", url: "https://zoom.example.com/j/111", registered: 87, status: "upcoming" },
  { id: "m2", title: "How to start Algebra", description: "Open introduction for Grade 9 and 10.", date: "2026-10-27", time: "17:30", durationMinutes: 45, platform: "Google Meet", url: "https://meet.example.com/algebra", registered: 41, status: "upcoming" },
  { id: "m3", title: "Past paper walkthrough – 2023", description: "Public walkthrough of the 2023 paper.", date: "2026-10-31", time: "19:00", durationMinutes: 90, platform: "YouTube Live", url: "https://youtube.example.com/live/abc", registered: 120, status: "upcoming" },
  { id: "m4", title: "Geometry doubts clinic", description: "Recorded and shared afterwards.", date: "2026-10-10", time: "18:00", durationMinutes: 60, platform: "Zoom", url: "https://zoom.example.com/j/222", registered: 64, status: "past" },
];

export async function getMeetings(): Promise<Meeting[]> {
  return MEETINGS;
}
