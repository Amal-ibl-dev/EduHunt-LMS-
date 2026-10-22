"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { XIcon } from "@/components/ui/icons";
import { Modal } from "@/components/ui/Modal";
import { SelectField } from "@/components/ui/SelectField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";

const TYPES = [
  { value: "pdf", label: "PDF document", input: "file", accept: ".pdf" },
  { value: "docx", label: "Notes / Tute (DOC, PPT)", input: "file", accept: ".doc,.docx,.ppt,.pptx" },
  { value: "note", label: "Written note", input: "text" },
  { value: "video", label: "Video link (YouTube)", input: "url" },
  { value: "meeting", label: "Class link (Meet / Zoom)", input: "url" },
  { value: "link", label: "Other link", input: "url" },
] as const;

const SECTIONS = ["Theory", "Revision", "Practice"].map((s) => ({ value: s.toLowerCase(), label: s }));

export function AddResourceDialog({ lessonId }: { lessonId: string }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<(typeof TYPES)[number]["value"]>("pdf");
  const formRef = useRef<HTMLFormElement>(null);
  const current = TYPES.find((t) => t.value === type)!;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // TODO: upload the file / save the link or note for this lesson via your API
    console.log({ lessonId, type, title: data.get("title"), section: data.get("section") });
    formRef.current?.reset();
    setType("pdf");
    setOpen(false);
  }

  return (
    <>
      <Button variant="admin" size="sm" onClick={() => setOpen(true)}>
        + Add resource
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} labelledBy="add-resource-title">
        <form ref={formRef} onSubmit={onSubmit} className="relative space-y-5 p-6 sm:p-8">
          <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100">
            <XIcon className="h-5 w-5" />
          </button>
          <h2 id="add-resource-title" className="text-xl font-bold text-navy">Add resource</h2>

          <SelectField compact name="type" label="Resource type" placeholder="Select type" options={[...TYPES]} defaultValue="pdf" onChange={(e) => setType(e.target.value as typeof type)} />
          <TextField compact required name="title" label="Title" placeholder="Theory notes" />
          <SelectField compact required name="section" label="Lesson section" placeholder="Select section" options={SECTIONS} />

          {current.input === "file" && (
            <div>
              <label htmlFor="res-file" className="mb-2 block text-sm font-medium text-slate-600">File (up to 50MB)</label>
              <input id="res-file" required type="file" name="file" accept={"accept" in current ? current.accept : undefined} className="block w-full rounded-2xl bg-field p-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-admin file:px-4 file:py-2 file:text-white" />
            </div>
          )}
          {current.input === "url" && <TextField compact required type="url" name="url" label="Link" placeholder="https://" />}
          {current.input === "text" && <TextAreaField required name="note" label="Note" placeholder="Write your note here..." />}

          <div className="flex flex-wrap gap-3">
            <Button type="submit" variant="admin" size="sm">Add resource</Button>
            <Button type="button" variant="adminOutline" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
