export const SUBJECTS = ["Mathematics", "Science", "English", "Sinhala", "History", "Buddhism"] as const;
export const BUCKETS = ["Bucket I", "Bucket II", "Bucket III"] as const;

export type Subject = (typeof SUBJECTS)[number];
export type Bucket = (typeof BUCKETS)[number];

/** Full class names so Tailwind can detect them. */
export const SUBJECT_STYLES: Record<Subject, { text: string; bar: string; border: string }> = {
  Mathematics: { text: "text-subject-math", bar: "bg-subject-math/40", border: "border-subject-math/40" },
  Science: { text: "text-subject-science", bar: "bg-subject-science/40", border: "border-subject-science/40" },
  English: { text: "text-subject-english", bar: "bg-subject-english/40", border: "border-subject-english/40" },
  Sinhala: { text: "text-subject-sinhala", bar: "bg-subject-sinhala/40", border: "border-subject-sinhala/40" },
  History: { text: "text-subject-history", bar: "bg-subject-history/40", border: "border-subject-history/40" },
  Buddhism: { text: "text-subject-buddhism", bar: "bg-subject-buddhism/40", border: "border-subject-buddhism/40" },
};
