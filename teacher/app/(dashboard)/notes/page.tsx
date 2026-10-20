import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBrowser } from "@/features/content/components/ContentBrowser";
import { getContent } from "@/features/content/services/content.service";

export const metadata: Metadata = { title: "Notes & Tutes | EduHunt" };

export default async function NotesPage() {
  const items = await getContent("note");
  return (
    <PageContainer>
      <PageHeader title="Notes & Tutes" />
      <ContentBrowser items={items} searchPlaceholder="Search Notes & Tutes" />
    </PageContainer>
  );
}
