import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBrowser } from "@/features/content/components/ContentBrowser";
import { getContent } from "@/features/content/services/content.service";

export const metadata: Metadata = { title: "Papers | EduHunt" };

export default async function PapersPage() {
  const items = await getContent("paper");
  return (
    <PageContainer>
      <PageHeader title="Papers" />
      <ContentBrowser items={items} searchPlaceholder="Search Papers" downloadable />
    </PageContainer>
  );
}
