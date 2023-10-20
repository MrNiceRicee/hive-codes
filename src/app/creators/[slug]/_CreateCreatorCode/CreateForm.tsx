import { Input } from "~/components/Input";
import {
  FormField,
  FormLabel,
  FormDescription,
} from "~/components/forms-v1/Form";
import { CompanySearchInput } from "./CompanySearch/CompanySearchInput";
import { CompanySearchOptions } from "./CompanySearch/CompanySearchOptions";
import { SearchParamsInput } from "../../../../components/SearchParamsInput";
import { Suspense } from "react";
import { Loader } from "lucide-react";

export function CreateForm({
  creatorId,
  searchParams,
}: {
  creatorId: string;
  searchParams: { company: string };
}) {
  return (
    <>
      <FormField>
        <label htmlFor="companyId">
          <span className="font-cal text-sm tracking-wide">company name</span>
        </label>
        <div className="group mb-4 flex items-center space-x-2 rounded-lg border border-gray-200 px-2 outline-[var(--brand)] backdrop-blur transition-all duration-300 [box-shadow:var(--inner-shadow-3)] focus-within:outline-dashed focus-within:outline-4 focus-within:outline-offset-4 dark:border-gray-900">
          <CompanySearchInput />
          <Suspense
            fallback={<Loader className="animate-spin" />}
            key={searchParams.company}
          >
            <CompanySearchOptions
              listName="company-search-list"
              searchParams={searchParams}
            />
          </Suspense>
        </div>
        <FormDescription>the company offering the deal</FormDescription>
      </FormField>
      <FormField>
        <FormLabel htmlFor="code">code</FormLabel>
        <SearchParamsInput name="code" placeholder="code..." />
        <FormDescription>the code used for the deal</FormDescription>
      </FormField>
      <FormField>
        <FormLabel htmlFor="description">description</FormLabel>
        <SearchParamsInput name="description" placeholder="description..." />
        <FormDescription>a description of the deal or code</FormDescription>
      </FormField>
      <FormField className="hidden" aria-hidden>
        <Input
          name="creatorId"
          id="creatorId"
          placeholder="creator..."
          defaultValue={creatorId}
        />
      </FormField>
    </>
  );
}
