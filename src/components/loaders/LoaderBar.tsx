interface LoaderBarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function LoaderBar({ className, ...props }: LoaderBarProps) {
  return (
    <div
      className={`animate-pulse h-4 w-full rounded-lg bg-[var(--surface-2)] ${className}`}
      {...props}
    />
  );
}
