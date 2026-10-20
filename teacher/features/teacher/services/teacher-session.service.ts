import type { TeacherSession } from "../types";

/** TODO: replace with your real session lookup. Return null when signed out. */
export async function getTeacherSession(): Promise<TeacherSession | null> {
  return { name: "Rajapaksha", fullName: "Kamal Rajapaksha", title: "Mathematics Teacher", avatarUrl: "/images/teacher-avatar.jpg" };
}
