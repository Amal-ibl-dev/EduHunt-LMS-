export type Student = {
  id: string;
  name: string;
  studentId: string;
  grade: string;
  school: string;
  email: string;
  status: "active" | "suspended";
  /** ISO date */
  joinedAt: string;
};
