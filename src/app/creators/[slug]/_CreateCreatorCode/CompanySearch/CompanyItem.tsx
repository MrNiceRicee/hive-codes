"use client";

import { Check } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CommandItem } from "~/components/Command";
import { cn } from "~/lib/utils";

export function CompanyItem({
  value,
  index,
}: {
  value: string;
  index: number;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const match = searchParams.get("company") === value;

  function onSelect(value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("company", value);
    } else {
      params.delete("company");
    }

    params.delete("companyQuery");

    router.push(`${pathName}?${params.toString()}`);
  }
  return (
    <CommandItem value={value} onSelect={onSelect}>
      {match && (
        <Check className="mr-2 h-4 w-4 text-[var(--green-6)] duration-300 ease-spring-3 animate-in zoom-in-0 spin-in-[-45deg] slide-in-from-left-2" />
      )}
      <span className={cn(match ? "font-cal tracking-wide " : "ml-6")}>
        {value}
      </span>
    </CommandItem>
  );
}
