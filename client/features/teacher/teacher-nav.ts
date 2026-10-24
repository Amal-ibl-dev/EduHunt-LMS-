import { BellIcon, BookIcon, GridIcon, LayersIcon, TimerIcon, UploadCloudIcon, UserCircleIcon, VideoIcon } from "@/components/ui/icons";
import type { NavItem } from "@/components/layout/portal/nav";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";

export const TEACHER_NAV: NavItem[] = [
  { label: "Dashboard", href: TEACHER_ROUTES.dashboard, icon: GridIcon },
  { label: "Classes", href: TEACHER_ROUTES.classes, icon: LayersIcon },
  { label: "Courses", href: TEACHER_ROUTES.courses, icon: BookIcon },
  { label: "Spot Time", href: TEACHER_ROUTES.spotTime, icon: TimerIcon },
  { label: "Public Meetings", href: TEACHER_ROUTES.meetings, icon: VideoIcon },
  { label: "Uploads", href: TEACHER_ROUTES.upload("papers"), icon: UploadCloudIcon, match: "/teacher/upload" },
  // Not in the sidebar: opened from the avatar menu and the bell. They still set the page title.
  { label: "Profile", href: TEACHER_ROUTES.profile, icon: UserCircleIcon, hidden: true },
  { label: "Notifications", href: TEACHER_ROUTES.notifications, icon: BellIcon, hidden: true },
];
