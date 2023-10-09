"use client";
import { useEffect, useState } from "react";

export function useClientOnly() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const hasMounted = useClientOnly();

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
