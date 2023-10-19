"use client";

import { Loader, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Input } from "~/components/Input";

export function CompanySearchInput() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(searchParams.get("company"));

  // onChange for Input
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set("company", value);
      setQuery(value);
    } else {
      newParams.delete("company");
      setQuery("");
    }

    startTransition(() => {
      router.push(`${pathName}?${newParams.toString()}`);
    });
  }

  return (
    <>
      <label htmlFor="companyId">
        <span className="sr-only">Search Companies</span>
        {isPending ? (
          <Loader className="animate-spin text-[var(--gray-6)]" />
        ) : (
          <Search className="text-[var(--gray-6)]" />
        )}
      </label>
      <Input
        name="companyId"
        id="companyId"
        placeholder="company..."
        list="company-search-list"
        value={query || ""}
        onChange={onChange}
        className="w-full border-none bg-transparent [box-shadow:0_0_transparent] focus:outline-none"
      />
    </>
  );
}
