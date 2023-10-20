import {
  CommandGroup,
  CommandList,
  CommandLoading,
} from "~/components/Command";
import { searchCompanies } from "../searchCompanies";
import { CompanyItem } from "./CompanyItem";
import { Suspense } from "react";
import { Trash2 } from "lucide-react";

async function Options({
  searchParams,
}: {
  searchParams: { companyQuery: string; company: string };
}) {
  const { data, error } = await searchCompanies(searchParams);

  if (!data.length) {
    return (
      <div className="py-3 text-center text-sm animate-in fade-in-0 slide-in-from-left-6">
        no companies found. try something else.
      </div>
    );
  }

  return (
    <CommandGroup>
      {Boolean(searchParams.company) && (
        <CompanyItem value="clear" clear>
          <Trash2 className="mr-2 h-4 w-4 duration-300 ease-spring-3 animate-in zoom-in-0 spin-in-[-45deg] slide-in-from-left-2" />
          <span>clear</span>
        </CompanyItem>
      )}
      {data.map((company, index) => {
        return <CompanyItem value={company.name} key={company.id} />;
      })}
    </CommandGroup>
  );
}

export function CompanyOptions({
  searchParams,
}: {
  searchParams: { companyQuery: string; company: string };
}) {
  return (
    <CommandList>
      <Suspense fallback={<CommandLoading />} key={searchParams.companyQuery}>
        <Options searchParams={searchParams} />
      </Suspense>
    </CommandList>
  );
}
