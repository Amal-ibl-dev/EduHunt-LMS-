import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { TeacherHeader } from "@/features/teacher/components/TeacherHeader";
import { TeacherQuickAccess } from "@/features/teacher/components/TeacherQuickAccess";
import { ClassLinkForm } from "@/features/teacher-upload/components/ClassLinkForm";
import { UploadDropzone } from "@/features/teacher-upload/components/UploadDropzone";
import { UPLOAD_TYPES, isUploadType } from "@/features/teacher-upload/upload-types";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Upload | EduHunt Teacher" };

export default async function TeacherUploadPage({ params }: { params: Promise<{ type: string }> }) {
  const teacher = await requireTeacher();
  const { type } = await params;
  if (!isUploadType(type)) notFound();

  return (
    <PageContainer className="max-w-7xl space-y-8">
      <TeacherHeader title={UPLOAD_TYPES[type].title} teacher={teacher} backHref={TEACHER_ROUTES.dashboard} />
      <TeacherQuickAccess active={type} />
      {type === "class-links" ? <ClassLinkForm /> : <UploadDropzone type={type} />}
    </PageContainer>
  );
}
