import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/require-role";
import { ContentAdminTable } from "@/features/admin-content/components/ContentAdminTable";
import { getContent } from "@/features/content/services/content.service";

export const metadata: Metadata = { title: "Content | EduHunt Admin" };

export default async function AdminContentPage() {
  await requireRole(["admin", "teacher"]);
  const [papers, notes] = await Promise.all([getContent("paper"), getContent("note")]);
  return <ContentAdminTable items={[...papers, ...notes]} addLabel="+ Upload content" />;
}
