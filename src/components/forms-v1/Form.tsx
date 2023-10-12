import React from "react";
import { cn } from "~/lib/utils";

interface FormFieldProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

export function FormField({ className, children, ...props }: FormFieldProps) {
  return (
    <fieldset className={cn("flex flex-col space-y-1", className)} {...props}>
      {children}
    </fieldset>
  );
}

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function FormLabel({ className, children, ...props }: FormLabelProps) {
  return (
    <label
      className={cn(
        "font-cal text-sm uppercase tracking-wide text-gray-500",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}

interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function FormDescription({
  className,
  children,
  ...props
}: FormDescriptionProps) {
  return (
    <p className={cn("text-sm text-gray-500", className)} {...props}>
      {children}
    </p>
  );
}
