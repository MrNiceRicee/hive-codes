export function ErrorMessage({ error }: { error: string | null }) {
  if (!error) return null;

  return (
    <div className="ease-[var(--ease-elastic-in-3)] text-red-500 animate-in fade-in slide-in-from-bottom-2">
      {error}
    </div>
  );
}
