import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

export function Navbar() {
  return (
    <header className="border-b border-slate-100 bg-white/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:gap-6 lg:px-8">

        {/* Logo */}
        <Link
          href={ROUTES.home}
          aria-label="EduHunt home"
          className="shrink-0"
        >
          <Logo className="[&>svg]:h-9 [&>svg]:w-10 [&>div>p:first-child]:text-2xl sm:[&>svg]:h-12 sm:[&>svg]:w-16 sm:[&>div>p:first-child]:text-4xl" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-7 text-xs font-semibold text-slate-700 xl:flex">
          <Link
            href={ROUTES.courses}
            className="transition hover:text-brand"
          >
            Courses
          </Link>

          <a
            href={ROUTES.home + "#categories"}
            className="transition hover:text-brand"
          >
            Categories
          </a>

          <a
            href={ROUTES.home + "#courses"}
            className="transition hover:text-brand"
          >
            Resources
          </a>

          <a
            href={ROUTES.home + "#for-business"}
            className="transition hover:text-brand"
          >
            For Business
          </a>

          <Link
            href={ROUTES.pricing}
            className="transition hover:text-brand"
          >
            Pricing
          </Link>
        </nav>

        {/* Right Section */}
        <div className="ml-auto flex shrink-0 items-center gap-4">

          {/* Search Bar - Original Height */}
          <label className="hidden h-11 w-44 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-xs text-slate-400 xl:flex">
            <span className="sr-only">Search courses</span>

            <input
              className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400"
              placeholder="Search courses..."
              aria-label="Search courses"
            />

            <span aria-hidden className="text-base leading-none">
              ⌕
            </span>
          </label>

          {/* Login */}
          <Link
            href={ROUTES.signIn}
            className="hidden h-11 items-center whitespace-nowrap text-xs font-bold text-slate-700 transition hover:text-brand sm:flex"
          >
            Log In
          </Link>

          {/* Fixed width keeps this action independent of full-width form buttons. */}
          <Link
            href={ROUTES.signUp}
            className="hidden h-11 w-28 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-brand px-3 text-xs font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:inline-flex"
          >
            Get Started
          </Link>

          {/* Mobile Menu */}
          <details className="relative xl:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-navy transition hover:border-brand hover:text-brand [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation menu</span>

              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
              </span>
            </summary>

            {/* Mobile Dropdown */}
            <nav className="absolute right-0 top-12 z-20 w-56 max-w-[calc(100vw-2.5rem)] rounded-xl border border-slate-100 bg-white p-3 shadow-xl">
              <div className="flex flex-col text-sm font-semibold text-slate-600">
                <Link
                  href={ROUTES.courses}
                  className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand"
                >
                  Courses
                </Link>

                <a
                  href={ROUTES.home + "#categories"}
                  className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand"
                >
                  Categories
                </a>

                <a
                  href={ROUTES.home + "#courses"}
                  className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand"
                >
                  Resources
                </a>

                <a
                  href={ROUTES.home + "#for-business"}
                  className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand"
                >
                  About
                </a>

                <Link
                  href={ROUTES.pricing}
                  className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand"
                >
                  Pricing
                </Link>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="mt-2 border-t border-slate-100 pt-2 sm:hidden">
                <Link
                  href={ROUTES.signIn}
                  className="block rounded-lg px-3 py-2.5 text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-brand"
                >
                  Log In
                </Link>

                <Button
                  href={ROUTES.signUp}
                  className="mt-2 !h-11 !min-h-11 w-full items-center justify-center rounded-lg !py-0 text-sm font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
