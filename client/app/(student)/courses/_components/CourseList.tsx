"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { courses } from "../_data/courses";

const PAGE_SIZE = 8;
const pageLinkClass = "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold transition hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export function CourseListWithSearchParams() {
  const searchParams = useSearchParams();
  const pages = searchParams.getAll("page");
  return <CourseList pageParam={pages.length === 1 ? pages[0] : undefined} />;
}

export function CourseList({ pageParam }: { pageParam?: string }) {
  const requestedPage = typeof pageParam === "string" ? Number(pageParam) : 1;
  const totalPages = Math.ceil(courses.length / PAGE_SIZE);
  const currentPage = Number.isInteger(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;
  const start = (currentPage - 1) * PAGE_SIZE;
  const visibleCourses = courses.slice(start, start + PAGE_SIZE);
  const pageHref = (page: number) => `${ROUTES.courses}?page=${page}#course-list`;

  return (
    <section id="course-list" aria-labelledby="courses-heading" className="mx-auto max-w-7xl scroll-mt-6 px-5 py-10 lg:px-8 lg:py-12">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="courses-heading" className="text-xl font-extrabold">Explore all courses</h2>
          <p className="mt-2 text-xs text-slate-500">Build skills you can put into practice.</p>
        </div>
        <p className="text-xs text-slate-500">Showing {start + 1}–{start + visibleCourses.length} of {courses.length} courses</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleCourses.map((course) => (
          <article key={course.id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none">
            <div className={`course-art course-art-${course.art} relative min-h-44`} aria-hidden="true">
              <span>{course.symbol}</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold">
                <span className="rounded-full bg-violet-50 px-2.5 py-1 text-brand">{course.category}</span>
                <span className="text-slate-400">{course.level}</span>
              </div>
              <h3 className="mt-3 min-h-12 text-sm font-extrabold leading-6">{course.title}</h3>
              <p className="mt-2 text-xs text-slate-500">{course.instructor}</p>
              <p className="mt-3 text-xs text-slate-500"><span className="mr-1 text-amber-500" aria-hidden="true">★</span><span className="font-bold text-navy">{course.rating.toFixed(1)}</span><span className="sr-only"> out of 5 stars</span></p>
              <p className="mt-3 text-[11px] text-slate-400">{course.hours} hours <span className="mx-1" aria-hidden="true">·</span> {course.lessons} lessons</p>
              <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
                <strong className="text-lg font-extrabold">${course.price.toFixed(2)}</strong>
                <Link href={ROUTES.signUp} aria-label={`Start learning: ${course.title}`} className="rounded-lg bg-brand px-3 py-2 text-[11px] font-bold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Start learning</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
        <p className="text-xs text-slate-500">Page {currentPage} of {totalPages}</p>
        <nav aria-label="Course pagination" className="flex flex-wrap items-center justify-center gap-2">
          {currentPage > 1 ? (
            <Link href={pageHref(currentPage - 1)} rel="prev" className={pageLinkClass}>Previous</Link>
          ) : (
            <span aria-disabled="true" className={`${pageLinkClass} cursor-not-allowed opacity-40`}>Previous</span>
          )}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <Link key={page} href={pageHref(page)} aria-label={`Page ${page}`} aria-current={page === currentPage ? "page" : undefined} className={page === currentPage ? `${pageLinkClass} border-brand! bg-brand! text-white!` : pageLinkClass}>{page}</Link>
          ))}
          {currentPage < totalPages ? (
            <Link href={pageHref(currentPage + 1)} rel="next" className={pageLinkClass}>Next</Link>
          ) : (
            <span aria-disabled="true" className={`${pageLinkClass} cursor-not-allowed opacity-40`}>Next</span>
          )}
        </nav>
      </div>
    </section>
  );
}
