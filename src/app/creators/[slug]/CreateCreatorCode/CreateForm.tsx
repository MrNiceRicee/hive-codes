import { ErrorMessage } from "~/components/ErrorMessage";
import { Input } from "~/components/Input";
import {
  FormField,
  FormLabel,
  FormDescription,
} from "~/components/forms-v1/Form";
import { SubmitButton } from "~/components/forms-v1/SubmitButton";

export function CreateForm({
  error,
  company,
}: {
  error: string | null;
  company: string;
}) {
  return (
    <>
      <FormField>
        <FormLabel htmlFor="code">code</FormLabel>
        <Input name="code" id="code" placeholder="code..." />
        <FormDescription>the code used for the deal</FormDescription>
      </FormField>
      <FormField className="hidden" aria-hidden>
        <FormLabel htmlFor="companyId">company</FormLabel>
        <Input
          name="companyId"
          id="companyId"
          placeholder="company..."
          list="company-search-list"
          value={company}
        />
        <FormDescription>the company offering the deal</FormDescription>
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
      <SubmitButton />
      <ErrorMessage error={error} />
    </>
  );
}
