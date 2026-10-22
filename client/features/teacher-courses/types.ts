import type { Subject } from "@/constants/subjects";

export const MEDIUMS = ["English", "Sinhala", "Tamil", "Other"] as const;
export type Medium = (typeof MEDIUMS)[number];

export type TeacherCourse = {
  id: string;
  title: string;
  subject: Subject;
  medium: Medium;
  /** Used when medium is "Other". */
  mediumOther?: string;
  level: string;
  description: string;
  /** One learning outcome per entry. */
  outcomes: string[];
  /** LKR. 0 = free. */
  price: number;
  discountPrice?: number;
  durationWeeks: number;
  enrollmentLimit?: number;
  videoUrl?: string;
  certificate: boolean;
  status: "draft" | "published";
  students: number;
  thumbnailUrl?: string;
};
