export type UserProfile = {
  name: string;
  firstName: string;
  email: string;
  grade: string;
  school: string;
  /** Put a file at public/images/avatar.jpg, otherwise initials are shown. */
  avatarUrl?: string;
  stats: { streak: number; downloads: number; tests: number };
};

export async function getCurrentUser(): Promise<UserProfile> {
  return {
    name: "Kavindu Perera",
    firstName: "Kavindu",
    email: "kavinduperera@gmail.com",
    grade: "Grade 10",
    school: "Ananda College, Colombo",
    avatarUrl: "/images/avatar.jpg",
    stats: { streak: 7, downloads: 10, tests: 5 },
  };
}
