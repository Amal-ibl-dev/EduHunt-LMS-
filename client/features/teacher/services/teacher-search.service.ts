import type { SearchEntry } from "@/components/layout/portal/PortalSearch";
import { TEACHER_PATHS, TEACHER_ROUTES } from "@/constants/teacher-routes";
import { getClassesByTeacher, getLessonsByClass } from "@/features/courses/services/courses.service";
import { getSpotTests } from "@/features/spot-time/services/spot-time.service";
import { getTeacherCourses } from "@/features/teacher-courses/services/teacher-courses.service";
import { getMeetings } from "@/features/teacher-meetings/services/meetings.service";

export async function getTeacherSearchIndex(teacherId: string): Promise<SearchEntry[]> {
  const [classes, courses, meetings, spots] = await Promise.all([
    getClassesByTeacher(teacherId),
    getTeacherCourses(),
    getMeetings(),
    getSpotTests(),
  ]);
  const lessons = (await Promise.all(classes.map(async (c) => (await getLessonsByClass(c.id)).map((l) => ({ c, l }))))).flat();

  const pages: SearchEntry[] = [
    { label: "Dashboard", href: TEACHER_ROUTES.dashboard, group: "Pages" },
    { label: "Classes", href: TEACHER_ROUTES.classes, group: "Pages" },
    { label: "Courses", href: TEACHER_ROUTES.courses, group: "Pages" },
    { label: "Spot Time", href: TEACHER_ROUTES.spotTime, group: "Pages" },
    { label: "Public Meetings", href: TEACHER_ROUTES.meetings, group: "Pages" },
    { label: "Upload Papers", href: TEACHER_ROUTES.upload("papers"), group: "Pages" },
    { label: "Upload Notes & Tutes", href: TEACHER_ROUTES.upload("notes"), group: "Pages" },
    { label: "Upload Class Links", href: TEACHER_ROUTES.upload("class-links"), group: "Pages" },
    { label: "My Profile", href: TEACHER_ROUTES.profile, group: "Pages" },
    { label: "Notifications", href: TEACHER_ROUTES.notifications, group: "Pages" },
  ];

  return [
    ...pages,
    { label: "Create class", href: TEACHER_PATHS.classNew, group: "Actions" },
    { label: "Create course", href: TEACHER_PATHS.courseNew, group: "Actions" },
    { label: "Schedule public meeting", href: TEACHER_PATHS.meetingNew, group: "Actions" },
    { label: "Create spot test", href: TEACHER_PATHS.spotNew, group: "Actions" },
    ...classes.map((c) => ({ label: `${c.grade} – ${c.subject}`, hint: `${c.lessonCount} lessons`, href: TEACHER_PATHS.class(c.id), group: "Classes" })),
    ...lessons.map(({ c, l }) => ({ label: l.title, hint: `${c.grade} – ${c.subject}`, href: TEACHER_PATHS.lesson(c.id, l.id), group: "Lessons" })),
    ...courses.map((c) => ({ label: c.title, hint: c.subject, href: TEACHER_PATHS.courseEdit(c.id), group: "Courses" })),
    ...meetings.map((m) => ({ label: m.title, hint: `${m.date} · ${m.platform}`, href: TEACHER_ROUTES.meetings, group: "Meetings" })),
    ...spots.map((s) => ({ label: s.title, hint: `${s.subject} · ${s.date}`, href: TEACHER_PATHS.spotEdit(s.id), group: "Spot Time" })),
  ];
}
