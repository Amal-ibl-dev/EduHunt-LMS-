import type { CSSProperties } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { COLORS } from "@/config/colors";
import { ROUTES } from "@/constants/routes";
import { Footer } from "@/components/layout/Footer";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For learners getting started",
    action: "Get Started",
    features: ["Full free course access", "Basic certificates", "Community access"],
    featured: false,
  },
  {
    name: "Starter",
    price: "$48",
    description: "For focused learners",
    action: "Try Free for 14 days",
    features: ["Unlimited course access", "Downloadable lectures", "Progress tracking", "Email support"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$250",
    description: "For serious growth",
    action: "Try Pro for 14 days",
    features: ["Everything in Starter", "Premium certificates", "Mentor feedback", "Priority support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    action: "Contact Sales",
    features: ["Dedicated learning manager", "Custom learning paths", "Team analytics", "Priority support"],
    featured: false,
  },
] as const;

const comparisonRows = [
  ["Course access", "Limited", "Unlimited", "Unlimited", "Unlimited"],
  ["Certificates", "Basic", "Verified", "Premium", "Premium"],
  ["Download lectures", "—", "✓", "✓", "✓"],
  ["Progress tracking", "Basic", "Advanced", "Advanced", "Team"],
  ["Mentor feedback", "—", "—", "✓", "✓"],
  ["Team analytics", "—", "—", "—", "✓"],
] as const;

const faqs = [
  ["How do I create an account?", "Choose a plan and select Get Started. You can create your EduHunt account in less than a minute."],
  ["How long is the free trial?", "Starter and Pro plans include a 14-day free trial. You can cancel any time before the trial ends."],
  ["Can I change my plan later?", "Yes. You can upgrade or downgrade your plan whenever your learning needs change."],
] as const;

export default function PricingPage() {
  const brandStyle = { "--color-brand": COLORS.brand } as CSSProperties;

  return (
    <main className="min-h-screen bg-[#f8fbff] text-navy" style={brandStyle}>
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 text-center lg:px-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand">Simple transparent pricing</span>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">Choose the plan that fits your goals</h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500">Start learning today with flexible plans designed for every stage of your learning journey.</p>
        <div className="mt-5 flex items-center justify-center gap-3 text-[10px] font-semibold text-slate-500">
          <span>20% Discount Per Year</span>
          <span className="h-4 w-8 rounded-full bg-brand p-0.5"><span className="block h-3 w-3 translate-x-4 rounded-full bg-white" /></span>
          <span className="text-brand">Pay Monthly</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {plans.map((plan) => (
          <article key={plan.name} className={`rounded-xl border p-5 ${plan.featured ? "border-brand bg-brand text-white shadow-xl" : "border-slate-100 bg-white"}`}>
            <span className={`text-[10px] font-bold ${plan.featured ? "text-violet-100" : "text-brand"}`}>{plan.name}</span>
            <div className="mt-3 flex items-end gap-1"><strong className="text-3xl font-extrabold">{plan.price}</strong>{plan.price !== "Custom" && <span className={`pb-1 text-[10px] ${plan.featured ? "text-violet-100" : "text-slate-400"}`}>/ Month</span>}</div>
            <p className={`mt-2 min-h-8 text-[10px] ${plan.featured ? "text-violet-100" : "text-slate-500"}`}>{plan.description}</p>
            <Button href={plan.name === "Enterprise" ? "#faq" : ROUTES.signUp} className={`mt-5 h-9 rounded-full px-3 text-[10px] ${plan.featured ? "bg-white text-gray-500! hover:bg-violet-50" : ""}`}>{plan.action}</Button>
            <ul className={`mt-6 space-y-3 text-[10px] ${plan.featured ? "text-violet-50" : "text-slate-600"}`}>
              {plan.features.map((feature) => <li key={feature}><span className="mr-2">✓</span>{feature}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold">Compare Plans</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-100 bg-white">
          <table className="w-full min-w-[720px] border-collapse text-left text-xs">
            <thead><tr className="border-b border-slate-100 bg-slate-50 text-[10px] text-slate-500"><th className="px-5 py-4">Features</th>{plans.map((plan) => <th key={plan.name} className="px-5 py-4">{plan.name}</th>)}</tr></thead>
            <tbody>{comparisonRows.map(([feature, ...values]) => <tr key={feature} className="border-b border-slate-50 last:border-0"><th className="px-5 py-4 font-semibold text-slate-600">{feature}</th>{values.map((value, index) => <td key={`${feature}-${index}`} className="px-5 py-4 text-slate-500">{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand">How it all starts</span>
          <h2 className="mt-2 text-2xl font-extrabold">Frequently asked questions</h2>
        </div>
        <div className="mx-auto mt-6 max-w-5xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(([question, answer]) => <details key={question} className="py-4"><summary className="cursor-pointer text-xs font-bold text-slate-700">{question}</summary><p className="mt-3 max-w-2xl text-xs leading-5 text-slate-500">{answer}</p></details>)}
        </div>
      </section>

      <Footer />
    </main>
  );
}
