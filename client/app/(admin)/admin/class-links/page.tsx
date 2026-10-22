import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/require-role";
import { ContentAdminTable } from "@/features/admin-content/components/ContentAdminTable";
import { getContent } from "@/features/content/services/content.service";

export const metadata: Metadata = { title: "Class Links | EduHunt Admin" };

export default async function AdminClassLinksPage() {
  await requireRole(["admin", "teacher"]);
  return <ContentAdminTable items={await getContent("link")} addLabel="+ Add class link" />;
}
