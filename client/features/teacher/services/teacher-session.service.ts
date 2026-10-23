import type { TeacherSession } from "../types";

/** TODO: replace with your real session lookup. Return null when signed out. `id` links to the teacher record. */
export async function getTeacherSession(): Promise<TeacherSession | null> {
  return { id: "t1", name: "Rajapaksha", fullName: "Kamal Rajapaksha", title: "Mathematics Teacher", avatarUrl: "/images/teacher-avatar.jpg" };
}
