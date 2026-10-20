import Link from "next/link";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { ROUTES } from "@/constants/routes";

type PageHeaderProps = { title: string; backHref?: string };

export function PageHeader({ title, backHref = ROUTES.dashboard }: PageHeaderProps) {
  return (
    <header className="flex items-center gap-5">
      <Link href={backHref} aria-label="Go back" className="text-navy hover:text-brand">
        <ArrowLeftIcon className="h-6 w-6" />
      </Link>
      <h1 className="text-3xl font-bold uppercase text-navy md:text-4xl">{title}</h1>
    </header>
  );
}
