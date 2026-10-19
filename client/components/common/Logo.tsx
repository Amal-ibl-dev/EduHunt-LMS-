import { cn } from "@/lib/cn";

type LogoProps = { className?: string };

/** Placeholder mark – swap for your exported logo SVG when ready. */
export function LogoMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden>
      <path d="M60 2 92 16 60 30 28 16 60 2Z" fill="#00205B" />
      <path d="M44 24v10c0 5 7 8 16 8s16-3 16-8V24L60 32l-16-8Z" fill="#00205B" />
      <path d="M4 44 58 56v30L4 72V44Z" fill="#00B4FF" />
      <path d="M116 44 62 56v30l54-14V44Z" fill="#0A6CF0" />
      <path d="M2 74l56 14 4 0 56-14v6L62 94 58 94 2 80v-6Z" fill="#0B3FC8" />
    </svg>
  );
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-12 w-16" />
      <div>
        <p className="text-4xl font-bold leading-none text-brand-dark">EduHunt</p>
        <p className="mt-1 text-sm text-navy/70">Learn. Grow. Succeed</p>
      </div>
    </div>
  );
}
