import { cn } from "@/lib/cn";

type LogoProps = { className?: string };

/** Placeholder mark – swap for your exported logo SVG when ready. */
export function LogoMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden>

    </svg>
  );
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-12 w-16" />
      <div>
      </div>
    </div>
  );
}
