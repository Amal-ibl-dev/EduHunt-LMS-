import type { Bucket, Subject } from "@/constants/subjects";

export type ContentType = "paper" | "note" | "link";

export type ContentItem = {
  id: string;
  type: ContentType;
  title: string;
  subject: Subject;
  bucket?: Bucket;
  /** ISO date, e.g. 2026-08-13 */
  date: string;
  /** File or meeting URL */
  url: string;
};
