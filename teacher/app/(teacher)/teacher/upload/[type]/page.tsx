import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeacherQuickAccess } from "@/features/teacher/components/TeacherQuickAccess";
import { ClassLinkForm } from "@/features/teacher-upload/components/ClassLinkForm";
import { UploadDropzone } from "@/features/teacher-upload/components/UploadDropzone";
import { UPLOAD_TYPES, isUploadType } from "@/features/teacher-upload/upload-types";
import { requireTeacher } from "../../../../../lib/auth/require-teacher";

export const metadata: Metadata = { title: "Uploads | EduHunt Teacher" };

export default async function TeacherUploadPage({ params }: { params: Promise<{ type: string }> }) {
  await requireTeacher();
  const { type } = await params;
  if (!isUploadType(type)) notFound();

  return (
    <div className="space-y-6 xl:space-y-8">
      <h2 className="text-2xl font-bold text-navy">{UPLOAD_TYPES[type].title}</h2>
      <TeacherQuickAccess active={type} />
      {type === "class-links" ? <ClassLinkForm /> : <UploadDropzone type={type} />}
    </div>
  );
}
