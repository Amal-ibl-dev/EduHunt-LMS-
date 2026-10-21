export type TeacherProfileData = {
  fullName: string;
  email: string;
  whatsapp: string;
  city: string;
  bio: string;
  title: string;
  levels: string[];
  subjects: string[];
  languages: string[];
  cities: string[];
  online: boolean;
  physical: boolean;
  publicProfile: boolean;
  notifyClasses: boolean;
  notifyStudents: boolean;
  notifyPayments: boolean;
  productUpdates: boolean;
};

export type TeacherProfile = {
  avatarUrl?: string;
  stats: { classes: number; courses: number; students: number };
  data: TeacherProfileData;
};

/** Mock – replace with the signed-in teacher's real profile. */
export async function getTeacherProfile(): Promise<TeacherProfile> {
  return {
    avatarUrl: "/images/teacher-avatar.jpg",
    stats: { classes: 2, courses: 3, students: 42 },
    data: {
      fullName: "Kamal Rajapaksha",
      email: "kamal@example.com",
      whatsapp: "+94 77 123 4567",
      city: "Colombo",
      bio: "Mathematics teacher with 10 years of experience helping O/L students.",
      title: "Mathematics Teacher",
      levels: ["Grade 6-9", "GCE O/L"],
      subjects: ["Mathematics"],
      languages: ["Sinhala", "English"],
      cities: ["Colombo", "Negombo"],
      online: true,
      physical: false,
      publicProfile: true,
      notifyClasses: true,
      notifyStudents: true,
      notifyPayments: true,
      productUpdates: false,
    },
  };
}
