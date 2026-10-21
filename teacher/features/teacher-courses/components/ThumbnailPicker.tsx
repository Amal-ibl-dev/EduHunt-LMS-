"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { UploadCloudIcon } from "@/components/ui/icons";

const MAX_BYTES = 5 * 1024 * 1024;

export function ThumbnailPicker({ initialUrl }: { initialUrl?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | undefined>(initialUrl);
  const [error, setError] = useState("");

  function onChange(file?: File) {
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) return setError("Use a JPG, PNG or WebP image.");
    if (file.size > MAX_BYTES) return setError("The image must be 5MB or smaller.");
    setError("");
    setPreview(URL.createObjectURL(file));
  }

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-slate-600">Course thumbnail</p>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-field text-slate-500 transition hover:border-admin focus-visible:outline-2 focus-visible:outline-admin"
      >
        {preview ? (
          <Image src={preview} alt="Thumbnail preview" fill sizes="(min-width: 1024px) 24rem, 100vw" className="object-cover" />
        ) : (
          <span className="flex flex-col items-center gap-2 px-4 text-center text-sm">
            <UploadCloudIcon className="h-8 w-8 text-admin" />
            Click to upload (16:9, JPG / PNG / WebP, up to 5MB)
          </span>
        )}
        {preview && (
          <span className="absolute inset-x-0 bottom-0 bg-slate-900/60 py-2 text-center text-sm text-white opacity-0 transition group-hover:opacity-100">
            Change image
          </span>
        )}
      </button>
      <input ref={inputRef} type="file" name="thumbnail" accept="image/jpeg,image/png,image/webp" className="sr-only" tabIndex={-1} aria-label="Course thumbnail file" onChange={(e) => onChange(e.target.files?.[0])} />
      {error && <p role="alert" className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
