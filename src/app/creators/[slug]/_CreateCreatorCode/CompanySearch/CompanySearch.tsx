import { ChevronsUpDown, Search } from "lucide-react";
import { Command } from "~/components/Command";
import { PopoverContent, PopoverTrigger } from "~/components/Popover";
import { CompanyInput } from "./CompanyInput";
import { cn } from "~/lib/utils";
import { CompanyOptions } from "./CompanyOptions";
import { CompanyPopover } from "./CompanyPopOver";

export function CompanySearchInputV2({
  searchParams,
}: {
  searchParams: {
    companyQuery: string;
    company: string;
  };
}) {
  return (
    <CompanyPopover>
      <PopoverTrigger asChild>
        <button className="flex w-full justify-between rounded-lg border border-gray-200 bg-[--surface-1] px-2 text-lg leading-loose [box-shadow:var(--inner-shadow-3)] dark:border-gray-800">
          <span
            className={cn(
              "flex items-center space-x-4",
              searchParams.company
                ? "text-[var(--text-1)]"
                : "text-text-primary-contrast",
            )}
          >
            <Search className="h-[1.33rem] w-[1.33rem] text-[var(--gray-6)]" />
            <span>{searchParams.company || "company..."}</span>
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command shouldFilter={false}>
          <CompanyInput />
          <CompanyOptions searchParams={searchParams} />
        </Command>
      </PopoverContent>
    </CompanyPopover>
  );
}
