"use client";

import { useRouter, useSearchParams } from "next/navigation";

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
      <fieldset className="mb-4 flex flex-col space-y-1">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          name="search"
          id="search"
          placeholder="search..."
          className="rounded-lg bg-[--surface-1] px-2 text-lg leading-loose [box-shadow:var(--inner-shadow-3)]"
        />
      </fieldset>
    </form>
  );
}
