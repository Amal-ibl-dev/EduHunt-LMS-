import type { InputHTMLAttributes } from "react";
import { SearchIcon } from "./icons";

export function SearchInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex h-14 items-center gap-4 rounded-2xl bg-white px-6 text-muted shadow-sm focus-within:ring-2 focus-within:ring-brand">
      <SearchIcon className="h-5 w-5 shrink-0" />
      <input
        type="search"
        className="h-full w-full bg-transparent text-sm text-navy outline-none placeholder:text-muted"
        {...props}
      />
    </div>
  );
}
