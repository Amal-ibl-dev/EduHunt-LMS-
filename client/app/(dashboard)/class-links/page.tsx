import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBrowser } from "@/features/content/components/ContentBrowser";
import { getContent } from "@/features/content/services/content.service";

export const metadata: Metadata = { title: "Class Links | EduHunt" };

export default async function ClassLinksPage() {
  const items = await getContent("link");
  return (
    <PageContainer>
      <PageHeader title="Class Links" />
      <ContentBrowser items={items} searchPlaceholder="Search" />
    </PageContainer>
  );
}
