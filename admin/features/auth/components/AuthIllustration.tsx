import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = { src: string; alt: string; className?: string; priority?: boolean };

export function AuthIllustration({ src, alt, className, priority }: Props) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl bg-brand-soft/40", className)}>
      <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
    </div>
  );
}
