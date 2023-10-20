"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Popover } from "~/components/Popover";

export function CompanyPopover({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  return (
    <Popover
      onOpenChange={(open) => {
        if (!open) {
          const params = new URLSearchParams(searchParams);
          params.delete("companyQuery");
          router.push(`${pathName}?${params.toString()}`);
        }
      }}
    >
      {children}
    </Popover>
  );
}
