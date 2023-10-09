"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "~/components/Input";

export function CreatorSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const newParams = new URLSearchParams(searchParams);

    if (search) {
      newParams.set("search", search);
    } else {
      newParams.delete("search");
    }

    router.push(`/creators?${newParams.toString()}`);
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset className="group mb-4 flex items-center space-x-2 rounded-lg border border-gray-200 px-2 outline-[var(--brand)] backdrop-blur transition-all duration-300 [box-shadow:var(--inner-shadow-3)] focus-within:outline-dashed focus-within:outline-4 focus-within:outline-offset-4 dark:border-gray-900">
        <label htmlFor="search">
          <span className="sr-only">Search</span>
          <Search className="text-[var(--gray-6)]" />
        </label>
        <Input
          name="search"
          id="search"
          placeholder="search..."
          className="w-full border-none bg-transparent [box-shadow:0_0_transparent] focus:outline-none"
        />
      </fieldset>
    </form>
  );
}
