import type { ReactNode } from "react";

/** Auto-fitting grid: 1 column on phones, more as space allows, never overflows. */
export function ClassGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,16rem),1fr))] gap-4 xl:gap-6">{children}</div>;
}
