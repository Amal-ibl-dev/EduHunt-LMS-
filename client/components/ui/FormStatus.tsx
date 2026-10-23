export function FormStatus({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="status" className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
      {message}
    </p>
  );
}
