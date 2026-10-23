import type { Metadata } from "next";
import Link from "next/link";
import { Suspense, type CSSProperties } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { COLORS } from "@/config/colors";
import { ROUTES } from "@/constants/routes";
import { courses } from "./_data/courses";
import { CourseList, CourseListWithSearchParams } from "./_components/CourseList";

export const metadata: Metadata = {
  title: "Explore Courses | EduHunt",
  description: "Explore courses in development, design, business, and more. Find your next skill with EduHunt.",
};

export default function CoursesPage() {
  const brandStyle = { "--color-brand": COLORS.brand } as CSSProperties;

  return (
    <div className="min-h-screen bg-[#f8fbff] text-navy" style={brandStyle}>
      <Navbar />
      <main>
        <section className="border-b border-slate-100 bg-white bg-[url('/images/courses.png')] bg-cover bg-left lg:bg-center">
          <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
            <nav aria-label="Breadcrumb" className="mb-7 flex gap-2 text-xs text-slate-500">
              <Link href={ROUTES.home} className="hover:text-brand">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="font-semibold text-navy">Courses</span>
            </nav>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Keep learning. Keep growing.</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Find your next <span className="text-brand">big skill.</span></h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">From your first steps to your next career move, discover practical courses to help you reach your goals.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
              <span className="rounded-full bg-slate-50 px-4 py-2">{courses.length} courses to explore</span>
              <span className="rounded-full bg-slate-50 px-4 py-2">Learn at your own pace</span>
              <span className="rounded-full bg-slate-50 px-4 py-2">All skill levels</span>
            </div>
          </div>
        </section>

        <Suspense fallback={<CourseList />}>
          <CourseListWithSearchParams />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
