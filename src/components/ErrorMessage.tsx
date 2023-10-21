import { cn } from "~/lib/utils";

export function ErrorMessage({
  error,
  className,
}: {
  error: string | null;
  className?: string;
}) {
  if (!error) return null;

  return (
    <p
      className={cn(
        "ease-[var(--ease-elastic-in-3)] break-before-all text-red-500 motion-safe:animate-in fade-in slide-in-from-bottom-2",
        className,
      )}
    >
      {error}
    </p>
  );
}
