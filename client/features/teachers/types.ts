import type { Subject } from "@/constants/subjects";

export type Teacher = {
  id: string;
  name: string;
  email: string;
  subjects: Subject[];
  grades: string[];
  students: number;
  status: "active" | "inactive";
};
