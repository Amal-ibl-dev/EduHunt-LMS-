import type { CSSProperties } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";
import { COLORS } from "@/config/colors";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const categories = [
  ["</>", "Development", "1250+ Courses", "bg-violet-100 text-violet-600"],
  ["⌁", "Business", "980+ Courses", "bg-emerald-100 text-emerald-600"],
  ["✦", "Design", "850+ Courses", "bg-rose-100 text-rose-600"],
  ["◉", "Marketing", "760+ Courses", "bg-orange-100 text-orange-600"],
  ["▦", "Data Science", "680+ Courses", "bg-indigo-100 text-indigo-600"],
  ["◎", "Personal Growth", "590+ Courses", "bg-amber-100 text-amber-600"],
] as const;

const courses = [
  ["Complete Web Development Bootcamp", "Jonas Schmedtmann", "4.9", "$59.99", "web"],
  ["Python for Data Science & ML", "Dr. Angela Yu", "4.8", "$49.99", "python"],
  ["UI/UX Design Masterclass", "Sarah Johnson", "4.9", "$44.99", "design"],
  ["Digital Marketing Full Course", "Alex Rivera", "4.7", "$39.99", "marketing"],
  ["Video Editing with Adobe Premiere Pro", "Mark Evans", "4.8", "$39.99", "video"],
] as const;

const testimonials = [
  ["A", "Ananya Menon", "Web Development Student", "EduHunt helped me move from complete beginner to building real projects in just a few months."],
  ["R", "Rahul Sharma", "Data Science Learner", "The courses are practical, easy to follow, and fit perfectly around my work schedule."],
  ["S", "Sara Thomas", "UI/UX Design Student", "I loved learning at my own pace and earning certificates that strengthened my portfolio."],
] as const;

function CourseArt({ type }: { type: (typeof courses)[number][4] }) {
  const label = type === "python" ? "Py" : type === "web" ? "</>" : type === "design" ? "UX" : type === "marketing" ? "↗" : "▶";
  return <div className={`course-art course-art-${type}`}><span>{label}</span></div>;
}

export function LandingHero() {
  const brandStyle = { "--color-brand": COLORS.brand } as CSSProperties;

  return (
    <main className="min-h-screen bg-[#f8fbff] text-navy" style={brandStyle}>
      <Navbar />

      <section className="relative mx-auto min-h-[540px] max-w-7xl overflow-hidden rounded-b-3xl px-5 py-10 lg:px-12 lg:py-16">
        <Image
          src="/images/heroImage.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center"
        /> 
        <div  className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/65 to-transparent lg:from-white/90 lg:via-white/30" />
        <div className="relative z-10 grid min-h-[460px] items-center gap-8 lg:grid-cols-[1fr_280px]">
          <div className="max-w-xl">
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">Learn New Skills.<br /><span className="text-brand">Advance Your Future.</span></h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">Access 10,000+ courses taught by industry experts. Learn at your own pace. Anytime, anywhere.</p>
            <div className="mt-8 flex items-center gap-3 text-[10px] text-slate-500"><div className="flex -space-x-2">{["A", "J", "M", "S"].map((letter) => <span key={letter} className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-300 font-bold text-white">{letter}</span>)}</div><span><b className="text-amber-500">★★★★★</b> Trusted by 50K+ learners worldwide</span></div>
          </div>
          
        </div>
      </section>

    

      <section id="courses" className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="mb-5 flex items-center justify-between"><div><span className="text-[9px] font-bold uppercase tracking-widest text-brand">Featured courses</span><h2 className="mt-1 text-lg font-extrabold">Most Popular Courses</h2><p className="mt-1 text-xs text-slate-500">Handpicked courses loved by learners around the world.</p></div><a href="#courses" className="text-[10px] font-bold text-brand">View All Courses →</a></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{courses.map(([title, author, rating, price, type]) => <article key={title} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"><CourseArt type={type} /><div className="p-3"><h3 className="line-clamp-2 min-h-8 text-xs font-extrabold leading-4">{title}</h3><p className="mt-2 text-[10px] text-slate-400">{author}</p><p className="mt-2 text-[10px]"><span className="text-amber-500">★ {rating}</span><span className="ml-2 text-slate-300">(1.2k)</span></p><b className="mt-3 block text-sm">{price}</b></div></article>)}</div></section>

      <section id="for-business" className="mx-5 mb-12 overflow-hidden rounded-2xl bg-navy px-6 py-5 text-white lg:mx-auto lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-12"><div className="grid grid-cols-2 gap-8 sm:flex"><div><b className="block text-xl">10,000+</b><span className="text-[10px] text-blue-200">Online Courses</span></div><div><b className="block text-xl">50,000+</b><span className="text-[10px] text-blue-200">Happy Learners</span></div><div><b className="block text-xl">200+</b><span className="text-[10px] text-blue-200">Expert Instructors</span></div><div><b className="block text-xl">100%</b><span className="text-[10px] text-blue-200">Satisfaction</span></div></div><a href={ROUTES.signUp} className="mt-5 inline-block text-xs font-bold text-sky-300 lg:mt-0">Build your skills with EduHunt →</a></section>

      <section className="mx-5 mb-12 min-h-[560px] overflow-hidden rounded-3xl bg-transparent shadow-none lg:mx-auto lg:flex lg:min-h-[540px] lg:max-w-7xl lg:items-center">
        <div className="relative z-10 px-6 py-12 lg:w-[38%] lg:px-10">
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand">Learn anytime, anywhere</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy">Learn on Your Terms</h2>
          <p className="mt-3 max-w-xs text-xs leading-5 text-slate-500">Whether you&apos;re on your laptop, tablet, or phone, your learning journey goes where you go.</p>
          <ul className="mt-5 space-y-2 text-[10px] font-semibold text-slate-600">
            <li><span className="mr-2 text-brand">✓</span>Access on all devices</li>
            <li><span className="mr-2 text-brand">✓</span>Download lectures</li>
            <li><span className="mr-2 text-brand">✓</span>Learn offline</li>
          </ul>
          <Button href={ROUTES.signUp} className="mt-6 h-10 w-auto rounded-lg px-4 text-xs">Start Learning Today <span className="ml-2">→</span></Button>
        </div>
        <div className="relative min-h-[380px] flex-1 shadow-none lg:min-h-[540px]">
          <Image src="/images/learnteam.png" alt="EduHunt learning across multiple devices" fill sizes="(max-width: 1024px) 100vw, 62vw" className="object-contain object-center shadow-none" />
        </div>
      </section>

      <section className="mx-5 mb-16 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand">Learner success stories</span>
          <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">Loved by Learners Worldwide</h2>
          <p className="mt-3 text-xs leading-5 text-slate-500">See how EduHunt helps students build practical skills and reach their goals.</p>
        </div>
        <div className="review-carousel mt-8 overflow-hidden" aria-label="Learner reviews">
          <div className="review-track flex w-max gap-4 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map(([initial, name, role, quote], index) => (
            <article key={`${name}-${index}`} className="w-[280px] shrink-0 rounded-2xl border border-slate-100 bg-white p-5 sm:w-[350px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-brand">{initial}</span>
                  <div><b className="block text-xs text-navy">{name}</b><span className="text-[10px] text-slate-400">{role}</span></div>
                </div>
                <span className="text-xs text-amber-500">★★★★★</span>
              </div>
              <p className="mt-5 text-xs leading-5 text-slate-600">&ldquo;{quote}&rdquo;</p>
            </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
