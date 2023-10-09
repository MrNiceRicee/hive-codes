import { cn } from "~/lib/utils";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "rounded-lg border border-gray-200 bg-[--surface-1] px-2 text-lg leading-loose [box-shadow:var(--inner-shadow-3)] dark:border-gray-800",
        props.className,
      )}
    />
  );
}
