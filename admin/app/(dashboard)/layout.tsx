import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // TODO: add an auth guard here (redirect to /sign-in when there is no session)
  return <div className="min-h-screen bg-page">{children}</div>;
}
