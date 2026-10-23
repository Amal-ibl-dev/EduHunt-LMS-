"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ModalProps = { open: boolean; onClose: () => void; labelledBy: string; children: ReactNode };

/** Native <dialog>: focus trap, Esc to close and backdrop come for free. */
export function Modal({ open, onClose, labelledBy, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={onClose}
      className="m-auto w-[min(92vw,34rem)] rounded-3xl p-0 shadow-xl backdrop:bg-slate-900/60"
    >
      {children}
    </dialog>
  );
}
