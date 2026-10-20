"use client";

import { useRef, useState, type DragEvent, type FormEvent } from "react";
import { Card } from "@/components/ui/Card";
import { SelectField } from "@/components/ui/SelectField";
import { UploadCloudIcon, XIcon } from "@/components/ui/icons";
import { BUCKETS, SUBJECTS } from "@/constants/subjects";
import { GRADES } from "@/constants/grades";
import { cn } from "@/lib/cn";
import { UPLOAD_TYPES, type UploadTypeKey } from "../upload-types";

const ALLOWED = ["image/jpeg", "image/png", "application/pdf", "video/mp4"];
const MAX_BYTES = 50 * 1024 * 1024;
const mb = (b: number) => `${(b / 1024 / 1024).toFixed(1)} MB`;

export function UploadDropzone({ type }: { type: UploadTypeKey }) {
  const cfg = UPLOAD_TYPES[type];
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function addFiles(list: FileList | null) {
    if (!list) return;
    const problems: string[] = [];
    const ok: File[] = [];
    Array.from(list).forEach((f) => {
      if (!ALLOWED.includes(f.type)) problems.push(`${f.name}: unsupported format`);
      else if (f.size > MAX_BYTES) problems.push(`${f.name}: larger than 50MB`);
      else ok.push(f);
    });
    setErrors(problems);
    setStatus("idle");
    setFiles((prev) => [...prev, ...ok]);
  }

  function onDrop(e: DragEvent) {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const meta = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: POST files + meta to your upload API (presigned URL / route handler)
    console.log({ type, meta, files: files.map((f) => f.name) });
    setFiles([]);
    setStatus("done");
  }

  return (
    <div className="space-y-6">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={cn(
          "flex min-h-[22rem] flex-col items-center justify-center rounded-3xl border-2 border-dashed bg-white px-6 py-12 text-center transition md:min-h-[26rem]",
          dragging ? "border-brand bg-brand-soft/20" : "border-navy/60",
        )}
      >
        <span className={cn("flex h-20 w-20 items-center justify-center rounded-3xl text-navy", cfg.tint)}>
          <UploadCloudIcon className="h-10 w-10" />
        </span>
        <p className="mt-8 text-xl text-slate-700 md:text-2xl">Choose {cfg.noun} or drag &amp; drop it here</p>
        <p className="mt-3 text-sm text-muted">JPEG, PNG, PDF, and MP4 formats, up to 50MB</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.pdf,.mp4"
          className="sr-only"
          tabIndex={-1}
          aria-label={`Choose ${cfg.noun}`}
          onChange={(e) => {
            addFiles(e.target.files);
            e.target.value = "";
          }}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={cn(
            "mt-8 inline-flex h-14 w-full max-w-xs items-center justify-center rounded-2xl text-lg font-medium text-slate-800 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
            cfg.button,
          )}
        >
          Browse File
        </button>
      </div>

      {errors.length > 0 && (
        <ul role="alert" className="space-y-1 rounded-2xl bg-red-50 p-4 text-sm text-red-600">
          {errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
      {status === "done" && (
        <p role="status" className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
          Files submitted. Connect the upload API in <code>UploadDropzone.tsx</code> to store them.
        </p>
      )}

      {files.length > 0 && (
        <Card className="p-6 md:p-8">
          <form onSubmit={onSubmit} className="space-y-6">
            <h2 className="text-xl font-semibold text-navy">
              {files.length} file{files.length > 1 ? "s" : ""} ready
            </h2>
            <ul className="divide-y divide-slate-100">
              {files.map((f, i) => (
                <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-4 py-3">
                  <span className="min-w-0">
                    <span className="block truncate text-slate-800">{f.name}</span>
                    <span className="text-sm text-muted">{mb(f.size)}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                    aria-label={`Remove ${f.name}`}
                    className="shrink-0 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-coral"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="grid gap-4 sm:grid-cols-3">
              <SelectField compact required name="subject" label="Subject" placeholder="Select subject" options={SUBJECTS.map((s) => ({ value: s, label: s }))} />
              <SelectField compact required name="grade" label="Grade" placeholder="Select grade" options={GRADES} />
              <SelectField compact name="bucket" label="Bucket (optional)" placeholder="None" options={BUCKETS.map((b) => ({ value: b, label: b }))} />
            </div>

            <button
              type="submit"
              className="h-12 rounded-full bg-brand px-8 font-medium text-white transition hover:bg-brand-dark"
            >
              Upload {files.length} file{files.length > 1 ? "s" : ""}
            </button>
          </form>
        </Card>
      )}
    </div>
  );
}
