"use client";

import { Checkbox } from "@/components/ui/Checkbox";
import { TextField } from "@/components/ui/TextField";
import { CITIES } from "../options";
import type { StepProps } from "../types";

export function TeachingModeStep({ data, errors, update }: StepProps) {
  const toggleCity = (c: string) =>
    update({ cities: data.cities.includes(c) ? data.cities.filter((x) => x !== c) : [...data.cities, c] });

  return (
    <div className="space-y-6">
      <p className="rounded-2xl bg-brand-soft/30 p-4 text-sm text-slate-600">These optional details can be updated later in profile settings.</p>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-slate-600">Class format</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <Checkbox card checked={data.online} onChange={(online) => update({ online })} label="Online" description="Teach from anywhere" />
          <Checkbox card checked={data.physical} onChange={(physical) => update({ physical })} label="Physical" description="Meet students in person" />
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-slate-600">Teaching cities (choose all that apply)</legend>
        <div className="grid max-h-48 grid-cols-2 gap-x-4 gap-y-3 overflow-y-auto rounded-2xl border border-slate-200 p-4 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Checkbox key={c} checked={data.cities.includes(c)} onChange={() => toggleCity(c)} label={c} />
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField compact label="Other teaching cities" placeholder="Separate cities with commas" value={data.otherCities} onChange={(e) => update({ otherCities: e.target.value })} />
        <TextField compact label="Location or teaching area" placeholder="For example: Colombo 07 or online only" value={data.area} onChange={(e) => update({ area: e.target.value })} />
      </div>

      <div>
        <label htmlFor="intro" className="mb-2 block text-sm font-medium text-slate-600">Short introduction</label>
        <textarea
          id="intro"
          rows={4}
          value={data.intro}
          onChange={(e) => update({ intro: e.target.value })}
          placeholder="Tell students about your experience and teaching style."
          className="w-full resize-y rounded-2xl bg-field p-4 text-base text-navy outline-none placeholder:text-muted/70 focus:ring-2 focus:ring-brand"
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-slate-600">Profile &amp; notifications</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <Checkbox card checked={data.notifications} onChange={(notifications) => update({ notifications })} label="Enable teacher notifications" description="Class, student and account alerts." />
          <Checkbox card checked={data.publicProfile} onChange={(publicProfile) => update({ publicProfile })} label="Make my teacher profile public" description="Let students discover your profile." />
        </div>
      </fieldset>

      <fieldset className="space-y-3 border-t border-slate-100 pt-4">
        <legend className="text-sm font-medium text-slate-600">Consent</legend>
        <Checkbox
          checked={data.acceptTerms}
          onChange={(acceptTerms) => update({ acceptTerms })}
          label="I accept the teacher terms and privacy policy"
          description="Required to create and manage your EduHunt teacher profile."
          error={errors.acceptTerms}
        />
        <Checkbox checked={data.productUpdates} onChange={(productUpdates) => update({ productUpdates })} label="Product and teaching updates" description="Optional emails about new EduHunt tools and offers." />
      </fieldset>
    </div>
  );
}
