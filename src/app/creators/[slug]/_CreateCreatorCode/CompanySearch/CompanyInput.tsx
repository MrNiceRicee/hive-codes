"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { CommandInput } from "~/components/Command";

export function CompanyInput() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("companyQuery") || "");
  const [_isPending, startTransition] = useTransition();

  function onChange(e: string) {
    const params = new URLSearchParams(searchParams);
    setQuery(e);

    if (e) {
      params.set("companyQuery", e);
    } else {
      params.delete("companyQuery");
    }
    startTransition(() => {
      router.push(`${pathName}?${params.toString()}`);
    });
  }

  return (
    <CommandInput
      placeholder="search companies..."
      onValueChange={onChange}
      value={query}
    />
  );
}
