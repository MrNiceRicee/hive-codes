"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { CommandInput } from "~/components/Command";
import { useDebounceFn } from "~/lib/useDebounce";

export function CompanyInput() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("companyQuery") || "");
  const [_isPending, startTransition] = useTransition();

  const debouncedParams = useDebounceFn(
    (e: string) => {
      const params = new URLSearchParams(searchParams);
      if (e) {
        params.set("companyQuery", e);
      } else {
        params.delete("companyQuery");
      }
      startTransition(() => {
        router.push(`${pathName}?${params.toString()}`);
      });
    },
    500,
    {
      leading: true,
      trailing: true,
    },
  );

  function onChange(e: string) {
    setQuery(e);
    debouncedParams(e);
  }

  return (
    <CommandInput
      placeholder="search companies..."
      onValueChange={onChange}
      value={query}
      name="companyQuery"
    />
  );
}
