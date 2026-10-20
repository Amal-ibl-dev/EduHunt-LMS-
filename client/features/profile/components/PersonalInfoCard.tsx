import type { UserProfile } from "../services/profile.service";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-lg uppercase text-slate-500">{label}</dt>
      <dd className="mt-3 text-xl text-slate-600">{value}</dd>
    </div>
  );
}

export function PersonalInfoCard({ user }: { user: UserProfile }) {
  return (
    <section className="rounded-3xl bg-profile p-6 shadow-sm md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl text-slate-600">Personal Info</h2>
        {/* TODO: wire up to an edit-profile form */}
        <button type="button" className="text-lg text-slate-500 hover:text-brand">
          Edit
        </button>
      </div>
      <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        <Field label="Full name" value={user.name} />
        <Field label="School" value={user.school} />
        <div className="border-t border-slate-300/70 pt-6 sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-x-10">
          <Field label="Email" value={user.email} />
          <div className="mt-6 sm:mt-0">
            <Field label="Grade" value={user.grade} />
          </div>
        </div>
      </dl>
    </section>
  );
}
