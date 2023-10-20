import {
  CommandGroup,
  CommandList,
  CommandLoading,
} from "~/components/Command";
import { searchCompanies } from "../searchCompanies";
import { CompanyItem } from "./CompanyItem";
import { Suspense } from "react";
import { Loader } from "lucide-react";

async function Options({
  searchParams,
}: {
  searchParams: { companyQuery: string };
}) {
  const { data, error } = await searchCompanies(searchParams);

  return (
    <CommandGroup>
      {data.map((company, index) => {
        return (
          <CompanyItem value={company.name} key={company.id} index={index} />
        );
      })}
    </CommandGroup>
  );
}

export function CompanyOptions({
  searchParams,
}: {
  searchParams: { companyQuery: string };
}) {
  return (
    <CommandList>
      <Suspense fallback={<CommandLoading />} key={searchParams.companyQuery}>
        <Options searchParams={searchParams} />
      </Suspense>
    </CommandList>
  );
}
