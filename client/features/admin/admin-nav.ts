import { ADMIN_ROUTES } from "@/constants/admin-routes";
import {
  BookIcon,
  GridIcon,
  LayersIcon,
  LinkIcon,
  SettingsIcon,
  SpeedIcon,
  TeacherIcon,
  UsersIcon,
  WalletIcon,
} from "@/components/ui/icons";
import type { AdminRole } from "./types";

export const ADMIN_NAV: { label: string; href: string; icon: typeof GridIcon; roles: AdminRole[] }[] = [
  { label: "Dashboard", href: ADMIN_ROUTES.dashboard, icon: GridIcon, roles: ["admin", "teacher"] },
  { label: "Students", href: ADMIN_ROUTES.students, icon: UsersIcon, roles: ["admin"] },
  { label: "Teachers", href: ADMIN_ROUTES.teachers, icon: TeacherIcon, roles: ["admin"] },
  { label: "Courses", href: ADMIN_ROUTES.courses, icon: LayersIcon, roles: ["admin", "teacher"] },
  { label: "Payments", href: ADMIN_ROUTES.payments, icon: WalletIcon, roles: ["admin"] },
  { label: "Content", href: ADMIN_ROUTES.content, icon: BookIcon, roles: ["admin", "teacher"] },
  { label: "Class Links", href: ADMIN_ROUTES.classLinks, icon: LinkIcon, roles: ["admin", "teacher"] },
  { label: "Speed Tests", href: ADMIN_ROUTES.speedTests, icon: SpeedIcon, roles: ["admin", "teacher"] },
  { label: "Settings", href: ADMIN_ROUTES.settings, icon: SettingsIcon, roles: ["admin"] },
];
