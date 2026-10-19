import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { ContentCard } from "@/features/content/components/ContentCard";
import type { ContentItem } from "@/features/content/types";

export function RecentContent({ items }: { items: ContentItem[] }) {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold uppercase text-navy">Recent Content</h2>
        <Link href={ROUTES.papers} className="text-lg text-muted hover:text-brand">
          View all
        </Link>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
