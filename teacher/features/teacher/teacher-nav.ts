import { BookIcon, GridIcon, LayersIcon, UploadCloudIcon, UserCircleIcon, VideoIcon } from "@/components/ui/icons";
import type { NavItem } from "@/components/layout/portal/nav";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";

export const TEACHER_NAV: NavItem[] = [
    { label: "Profile", href: TEACHER_ROUTES.profile, icon: UserCircleIcon },
  { label: "Dashboard", href: TEACHER_ROUTES.dashboard, icon: GridIcon },
  { label: "Classes", href: TEACHER_ROUTES.classes, icon: LayersIcon },
  { label: "Courses", href: TEACHER_ROUTES.courses, icon: BookIcon },
  { label: "Public Meetings", href: TEACHER_ROUTES.meetings, icon: VideoIcon },
  { label: "Uploads", href: TEACHER_ROUTES.upload("papers"), icon: UploadCloudIcon, match: "/teacher/upload" },
];
