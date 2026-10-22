"use client";

import { useRef, useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { CameraIcon } from "@/components/ui/icons";

export function AvatarPicker({ name, src }: { name: string; src?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(src);
  const [error, setError] = useState("");

  function onChange(file?: File) {
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 3 * 1024 * 1024) return setError("Choose an image up to 3MB.");
    setError("");
    setPreview(URL.createObjectURL(file));
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <Avatar name={name} src={preview} className="h-24 w-24 text-2xl" />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Change profile photo"
          className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-admin text-white shadow hover:bg-admin-dark"
        >
          <CameraIcon className="h-4 w-4" />
        </button>
        <input ref={inputRef} type="file" name="avatar" accept="image/*" className="sr-only" tabIndex={-1} aria-label="Profile photo file" onChange={(e) => onChange(e.target.files?.[0])} />
      </div>
      {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
