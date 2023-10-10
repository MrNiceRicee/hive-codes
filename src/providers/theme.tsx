"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useClientOnly } from "~/lib/ClientOnly";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const hasMounted = useClientOnly();

  if (!hasMounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
