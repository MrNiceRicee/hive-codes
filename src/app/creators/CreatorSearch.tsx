"use client";

import { useRouter, useSearchParams } from "next/navigation";
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
      <fieldset className="mb-4 flex flex-col group focus-within:outline-dashed focus-within:outline-4 outline-[var(--brand)] focus-within:outline-offset-4 transition-all duration-300 [box-shadow:var(--inner-shadow-3)]">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <Input name="search" id="search" placeholder="search..." className="focus:outline-none border-none shadow-[0 0 0 0]" />

      </fieldset>
    </form>
  );
}
