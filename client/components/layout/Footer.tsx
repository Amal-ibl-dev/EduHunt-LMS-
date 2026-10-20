import { Logo } from "@/components/common/Logo";
import { ROUTES } from "@/constants/routes";

const footerLinks = {
  Platform: ["Browse Courses", "Categories", "Become an Instructor", "For Business"],
  Resources: ["Help Center", "Learning Guide", "Community", "Contact Us"],
  Company: ["About EduHunt", "Careers", "Privacy Policy", "Terms of Service"],
} as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly string[];
}) {
  return (
    <div>
      <h3 className="text-xs font-extrabold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#top"
              className="text-xs text-slate-300 transition hover:text-brand"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="top" className="border-t border-slate-800 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo light />
            <p className="mt-5 text-xs leading-6 text-slate-300">
              Learn practical skills from expert instructors and build a
              future you are proud of.
            </p>
            <a
              href={ROUTES.signUp}
              className="mt-5 inline-flex items-center text-xs font-bold text-brand hover:text-brand-dark"
            >
              Start learning today <span className="ml-2">→</span>
            </a>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <FooterColumn key={title} title={title} links={links} />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 EduHunt. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-brand">Facebook</a>
            <a href="#top" className="hover:text-brand">Instagram</a>
            <a href="#top" className="hover:text-brand">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
