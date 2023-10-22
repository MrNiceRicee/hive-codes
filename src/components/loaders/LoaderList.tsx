export function LoaderList({
  length = 4,
  children,
  list,
}: {
  length?: number;
  children?: React.ReactNode;
  list?: {
    className?: string;
  };
}) {
  return (
    <ul className="animate-pulse space-y-6">
      {Array.from({ length }).map((_, i) => (
        <li key={i}>
          <div className="flex w-full animate-bloom-fade-in items-center rounded-lg border px-2 py-4 opacity-0 backdrop-blur-lg backdrop-brightness-125 backdrop-saturate-100 duration-200 fill-mode-forwards">
            {children || (
              <h1 className="text-gradient font-cal [--text-gradient:var(--gradient-5)]">
                Loading...
              </h1>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
