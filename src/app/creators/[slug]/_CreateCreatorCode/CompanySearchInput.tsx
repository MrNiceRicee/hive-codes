"use client";

import { Loader, Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Input } from "~/components/Input";
import { cn } from "~/lib/utils";

export function CompanySearchInput() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(searchParams.get("company") || "");

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

  function onClear() {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete("company");
    setQuery("");

    startTransition(() => {
      router.push(`${pathName}?${newParams.toString()}`);
    });
  }

  return (
    <>
      <Search className="text-[var(--gray-6)]" />
      <Input
        name="companyName"
        id="companyName"
        placeholder="company..."
        list="company-search-list"
        value={query || ""}
        onChange={onChange}
        className="w-full border-none bg-transparent [box-shadow:0_0_transparent] focus:outline-none"
        type="search"
      />
      {/* {!isPending && query && (
        <button className="animate-in slide-in-from-bottom-2 zoom-in-0">
          <X className="text-[var(--gray-6)]" onClick={onClear} type="button" />
        </button>
      )} */}
    </>
  );
}
