import Link from "next/link";

type NameCellProps = { name: string; sub?: string; href?: string };

export function NameCell({ name, sub, href }: NameCellProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  const nameClass = "block truncate font-medium text-slate-800";

  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
        {initials}
      </span>
      <span className="min-w-0">
        {href ? (
          <Link href={href} className={`${nameClass} hover:text-admin-dark hover:underline`}>
            {name}
          </Link>
        ) : (
          <span className={nameClass}>{name}</span>
        )}
        {sub && <span className="block truncate text-sm text-slate-400">{sub}</span>}
      </span>
    </div>
  );
}
