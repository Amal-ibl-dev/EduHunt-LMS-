import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

export function Navbar() {
  return (
    <header className="border-b border-slate-100 bg-white/90">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4 lg:px-8">
        <a href={ROUTES.home} aria-label="EduHunt home" className="shrink-0"><Logo /></a>
        <nav className="hidden flex-1 items-center justify-center gap-7 text-xs font-semibold text-slate-700 md:flex">
          <a href={ROUTES.home + "#courses"} className="transition hover:text-brand">Courses <span className="ml-1 text-[9px]">⌄</span></a>
          <a href={ROUTES.home + "#categories"} className="transition hover:text-brand">Categories <span className="ml-1 text-[9px]">⌄</span></a>
          <a href={ROUTES.home + "#courses"} className="transition hover:text-brand">Resources <span className="ml-1 text-[9px]">⌄</span></a>
          <a href={ROUTES.home + "#for-business"} className="transition hover:text-brand">For Business</a>
          <a href={ROUTES.pricing} className="transition hover:text-brand">Pricing</a>
        </nav>
        <div className="flex shrink-0 items-center gap-4">
          <label className="hidden h-11 w-44 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-xs text-slate-400 lg:flex">
            <span className="sr-only">Search courses</span>
            <input className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400" placeholder="Search courses..." aria-label="Search courses" />
            <span aria-hidden className="text-base leading-none">⌕</span>
          </label>
          <a href={ROUTES.signIn} className="hidden h-2 items-center whitespace-nowrap text-xs font-bold text-slate-700 transition hover:text-brand sm:flex">Log In</a>
          <Button href={ROUTES.signUp} className="hidden h-5 w-28 rounded-md px-4 text-xs shadow-sm sm:flex">Get Started</Button>
          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-navy transition hover:border-brand hover:text-brand [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation menu</span>
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
              </span>
            </summary>
            <nav className="absolute right-0 top-12 z-20 w-56 rounded-xl border border-slate-100 bg-white p-3 shadow-xl">
              <div className="flex flex-col text-sm font-semibold text-slate-600">
                <a href={ROUTES.home + "#courses"} className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">Courses</a>
                <a href={ROUTES.home + "#categories"} className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">Categories</a>
                <a href={ROUTES.home + "#courses"} className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">Resources</a>
                <a href={ROUTES.home + "#for-business"} className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">For Business</a>
                <a href={ROUTES.pricing} className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">Pricing</a>
              </div>
              <div className="mt-2 border-t border-slate-100 pt-2 sm:hidden">
                <a href={ROUTES.signIn} className="block rounded-lg px-3 py-2.5 text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-brand">Log In</a>
                <Button href={ROUTES.signUp} className="mt-2 h-5 rounded-lg text-sm">Get Started</Button>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
