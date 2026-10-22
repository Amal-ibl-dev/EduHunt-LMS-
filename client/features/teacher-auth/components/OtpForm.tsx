"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ClipboardEvent, type FormEvent, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";

const LENGTH = 4;
const RESEND_SECONDS = 30;

export function OtpForm({ email }: { email?: string }) {
  const router = useRouter();
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const [digits, setDigits] = useState<string[]>(Array(LENGTH).fill(""));
  const [seconds, setSeconds] = useState(RESEND_SECONDS);
  const [error, setError] = useState("");

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  function setAt(i: number, v: string) {
    const d = v.replace(/\D/g, "").slice(-1);
    setDigits((prev) => prev.map((x, j) => (j === i ? d : x)));
    setError("");
    if (d && i < LENGTH - 1) refs.current[i + 1]?.focus();
  }

  function onKeyDown(i: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
  }

  function onPaste(e: ClipboardEvent) {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, LENGTH);
    if (!text) return;
    e.preventDefault();
    setDigits(Array.from({ length: LENGTH }, (_, i) => text[i] ?? ""));
    refs.current[Math.min(text.length, LENGTH - 1)]?.focus();
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const code = digits.join("");
    if (code.length < LENGTH) return setError("Enter the four-digit code.");
    // TODO: verify the code with your API; show an error on failure
    router.push(TEACHER_ROUTES.signIn);
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-8 text-center">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-navy">Verify your email</h1>
        <p className="text-muted">
          We sent a four-digit code to <span className="font-medium text-navy">{email || "your email address"}</span>.
        </p>
      </header>

      <div className="flex justify-center gap-3" onPaste={onPaste}>
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            value={d}
            onChange={(e) => setAt(i, e.target.value)}
            onKeyDown={(e) => onKeyDown(i, e)}
            inputMode="numeric"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            maxLength={1}
            aria-label={`Digit ${i + 1}`}
            className="h-16 w-14 rounded-2xl bg-field text-center text-2xl font-semibold text-navy outline-none focus:ring-2 focus:ring-brand"
          />
        ))}
      </div>
      {error && (
        <p role="alert" className="text-sm text-red-500">
          {error}
        </p>
      )}

      <Button type="submit">Verify and continue</Button>

      <p className="text-sm text-muted">
        Didn&apos;t get it?{" "}
        {seconds > 0 ? (
          <span>Resend in {seconds}s</span>
        ) : (
          <button type="button" onClick={() => setSeconds(RESEND_SECONDS)} className="font-semibold text-brand hover:underline">
            Send a new code
          </button>
        )}
      </p>
    </form>
  );
}
