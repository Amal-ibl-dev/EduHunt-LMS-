import { cn } from "@/lib/cn";

type LogoProps = { className?: string; light?: boolean };

/** Placeholder mark – swap for your exported logo SVG when ready. */
export function LogoMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden fill="none">
      <path d="M19 69.5 30.5 24l13 9 12-18 14 18 17-10 14.5 46.5H19Z" fill="currentColor" opacity=".14" />
      <path d="m17 68 13-45 13 10 12-18 14 18 17-10 16 45" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" />
      <path d="M13 69h94" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
      <circle cx="55" cy="15" r="5" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-12 w-16 text-brand" />
      <div className="leading-none">
        <span className={cn("block text-xl font-extrabold tracking-tight", light ? "text-white" : "text-navy")}>EduHunt</span>
        <span className={cn("mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em]", light ? "text-slate-400" : "text-muted")}>Learn. Grow. Succeed.</span>
      </div>
    </div>
  );
}
