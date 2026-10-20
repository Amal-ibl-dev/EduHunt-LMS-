"use client";

import { Button } from "@/components/ui/Button";
import { CheckIcon, XIcon } from "@/components/ui/icons";
import { Modal } from "@/components/ui/Modal";

const STEPS = [
  { title: "Open the email", text: "Look for a message from EduHunt." },
  { title: "Enter your code", text: "Use the four-digit number in the verification form." },
  { title: "Start teaching", text: "Your account opens after verification." },
];

type Props = { open: boolean; onClose: () => void; onContinue: () => void };

export function VerifyEmailModal({ open, onClose, onContinue }: Props) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="verify-title">
      <div className="relative p-6 text-center sm:p-8">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100">
          <XIcon className="h-5 w-5" />
        </button>
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckIcon className="h-8 w-8" />
        </span>
        <p className="mt-3 text-xs font-semibold tracking-wide text-emerald-600">ACCOUNT CREATED</p>
        <h2 id="verify-title" className="mt-2 text-2xl font-bold text-navy">
          Check your inbox to activate your account
        </h2>
        <p className="mt-3 text-sm text-slate-500">We sent a four-digit verification code to your registered email address. Enter it here to continue.</p>

        <ol className="mt-6 grid gap-3 text-left sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-slate-200 p-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">{i + 1}</span>
              <p className="mt-2 text-sm font-medium text-navy">{s.title}</p>
              <p className="text-xs text-muted">{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-4 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-3 text-left text-sm text-amber-800">
          <span className="font-semibold">Cannot find it?</span> Check your spam or promotions folder and request a new code.
        </p>

        <Button className="mt-6" onClick={onContinue}>
          Continue to verification
        </Button>
      </div>
    </Modal>
  );
}
