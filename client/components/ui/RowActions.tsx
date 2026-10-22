import Link from "next/link";
import { cn } from "@/lib/cn";

type Action = { label: string; onClick?: () => void; href?: string; danger?: boolean };

export function RowActions({ actions }: { actions: Action[] }) {
  return (
    <div className="flex justify-end gap-4 whitespace-nowrap text-sm">
      {actions.map((a) => {
        const cls = cn("font-medium hover:underline", a.danger ? "text-coral" : "text-admin-dark");
        return a.href ? (
          <Link key={a.label} href={a.href} className={cls}>
            {a.label}
          </Link>
        ) : (
          <button key={a.label} type="button" onClick={a.onClick} className={cls}>
            {a.label}
          </button>
        );
      })}
    </div>
  );
}
