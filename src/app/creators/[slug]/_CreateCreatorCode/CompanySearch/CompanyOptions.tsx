import {
  CommandGroup,
  CommandList,
  CommandLoading,
} from "~/components/Command";
import { searchCompanies } from "../searchCompanies";
import { CompanyItem } from "./CompanyItem";
import { Suspense } from "react";
import { Microscope } from "~/components/icons/Microscope";

async function Options({
  searchParams,
}: {
  searchParams: { companyQuery: string; company: string };
}) {
  const { data, error } = await searchCompanies(searchParams);

  if (!data.length) {
    return (
      <section className="grid grid-cols-6 grid-rows-1 items-center px-1 py-3 text-sm motion-safe:animate-in fade-in-0 slide-in-from-left-6">
        {/* <span className="text-9xl block mx-auto">😥</span> */}
        <div className="col-span-1 mx-auto flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-background">
          <div className="duration-700 ease-spring-3 motion-safe:animate-in fade-in-0 spin-in-[-45deg] slide-in-from-right-6">
            <Microscope className="block h-6 w-6" />
          </div>
        </div>
        <div className="col-span-5 ml-2 [text-wrap:balance]">
          <h3 className="font-cal text-lg">no results found</h3>
          <p className="text-sm">
            oops, {"couldn't"} find anything here. want to try again?
          </p>
        </div>
      </section>
    );
  }

  return (
    <CommandGroup>
      {Boolean(searchParams.company) && <CompanyItem value="clear" clear />}
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
      <Suspense fallback={<CommandLoading />}>
        <Options searchParams={searchParams} />
      </Suspense>
    </CommandList>
  );
}
