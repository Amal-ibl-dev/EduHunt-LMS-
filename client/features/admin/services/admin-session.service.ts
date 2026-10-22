import type { AdminSession } from "../types";

/** TODO: replace with your real session lookup (cookies / JWT / NextAuth). Return null when signed out. */
export async function getAdminSession(): Promise<AdminSession | null> {
  return { name: "Dilshan Perera", role: "admin" };
}
