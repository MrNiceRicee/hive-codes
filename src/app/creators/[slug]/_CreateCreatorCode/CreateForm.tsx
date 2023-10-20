import { Input } from "~/components/Input";
import {
  FormField,
  FormLabel,
  FormDescription,
} from "~/components/forms-v1/Form";
import { SearchParamsInput } from "../../../../components/SearchParamsInput";
import { CompanySearchInputV2 } from "./CompanySearch/CompanySearch";

export function CreateForm({
  creatorId,
  searchParams,
}: {
  creatorId: string;
  searchParams: { company: string; companyQuery: string };
}) {
  return (
    <>
      <FormField>
        <label htmlFor="companyId">
          <span className="font-cal text-sm tracking-wide">company name</span>
        </label>
        <input
          className="hidden"
          type="hidden"
          defaultValue={searchParams.company}
          name="companyName"
          id="companyName"
        />
        <CompanySearchInputV2 searchParams={searchParams} />
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
        <input
          name="creatorId"
          id="creatorId"
          placeholder="creator..."
          defaultValue={creatorId}
          type="hidden"
        />
      </FormField>
    </>
  );
}
