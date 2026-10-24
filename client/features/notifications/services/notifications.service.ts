import { ADMIN_ROUTES } from "@/constants/admin-routes";
import { TEACHER_PATHS, TEACHER_ROUTES } from "@/constants/teacher-routes";
import type { AppNotification } from "../types";

/** Dummy data. Replace with your real notifications API. */
export async function getTeacherNotifications(): Promise<AppNotification[]> {
  return [
    { id: "n1", kind: "student", title: "New student enrolled", description: "Nethmi Silva joined Grade 10 – Mathematics.", time: "2h ago", group: "Today", read: false, href: TEACHER_PATHS.class("c1") },
    { id: "n2", kind: "meeting", title: "Public meeting starts soon", description: "O/L Maths – last month tips begins at 6:00 PM.", time: "5h ago", group: "Today", read: false, href: TEACHER_ROUTES.meetings },
    { id: "n3", kind: "payment", title: "Course payment received", description: "LKR 5,500 for Grade 10 Mathematics – Complete Revision.", time: "Yesterday", group: "Yesterday", read: false, href: TEACHER_ROUTES.courses },
    { id: "n4", kind: "upload", title: "50 downloads reached", description: "Mathematics Past Paper 2023 was downloaded 50 times.", time: "Yesterday", group: "Yesterday", read: true, href: TEACHER_ROUTES.upload("papers") },
    { id: "n5", kind: "test", title: "Spot test completed", description: "24 students finished the Algebra spot test.", time: "Oct 22", group: "Earlier", read: true, href: TEACHER_ROUTES.spotTime },
    { id: "n6", kind: "class", title: "Lesson published", description: "Lesson 02 – Geometry is now visible to students.", time: "Oct 21", group: "Earlier", read: true, href: TEACHER_PATHS.lesson("c1", "c1-l2") },
    { id: "n7", kind: "system", title: "Profile verified", description: "Your teacher profile is now verified.", time: "Oct 18", group: "Earlier", read: true, href: TEACHER_ROUTES.profile },
  ];
}

export async function getAdminNotifications(): Promise<AppNotification[]> {
  return [
    { id: "a1", kind: "student", title: "New student sign-up", description: "Ravindu Senanayake created an account.", time: "1h ago", group: "Today", read: false, href: ADMIN_ROUTES.students },
    { id: "a2", kind: "payment", title: "Payments overdue", description: "2 students have overdue fees for September.", time: "4h ago", group: "Today", read: false, href: ADMIN_ROUTES.payments },
    { id: "a3", kind: "class", title: "New course submitted", description: "Kamal Rajapaksha created Algebra Foundations.", time: "Yesterday", group: "Yesterday", read: false, href: ADMIN_ROUTES.courses },
    { id: "a4", kind: "system", title: "Weekly summary ready", description: "Your revenue summary for this week is ready.", time: "Oct 20", group: "Earlier", read: true, href: ADMIN_ROUTES.dashboard },
  ];
}
