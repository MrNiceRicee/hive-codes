import { Input } from "~/components/Input";
import {
  FormField,
  FormLabel,
  FormDescription,
} from "~/components/forms-v1/Form";
import { CompanySearchInput } from "./CompanySearchInput";
import { CompanySearchOptions } from "./CompanySearchOptions";

export function CreateForm({
  creatorId,
  searchParams,
}: {
  creatorId: string;
  searchParams: { company: string };
}) {
  return (
    <>
      <FormField >
        <search className="group mb-4 flex items-center space-x-2 rounded-lg border border-gray-200 px-2 outline-[var(--brand)] backdrop-blur transition-all duration-300 [box-shadow:var(--inner-shadow-3)] focus-within:outline-dashed focus-within:outline-4 focus-within:outline-offset-4 dark:border-gray-900">
          <CompanySearchInput />
          <CompanySearchOptions
            listName="company-search-list"
            searchParams={searchParams}
          />
        </search>
        <FormDescription>the company offering the deal</FormDescription>
      </FormField>
      <FormField>
        <FormLabel htmlFor="code">code</FormLabel>
        <Input name="code" id="code" placeholder="code..." />
        <FormDescription>the code used for the deal</FormDescription>
      </FormField>
      <FormField>
        <FormLabel htmlFor="description">description</FormLabel>
        <Input
          name="description"
          id="description"
          placeholder="description..."
        />
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
