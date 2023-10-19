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
  creatorId, // companyId,
}: {
  error: string | null;
  // companyId: string;
  creatorId: string;
}) {
  return (
    <>
      <FormField>
        <FormLabel htmlFor="companyId">company</FormLabel>
        <Input
          name="companyId"
          id="companyId"
          placeholder="company..."
          list="company-search-list"
        />
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
          value={creatorId}
          onChange={() => {
            console.log("creatorId", creatorId);
          }}
        />
      </FormField>
      <SubmitButton />
      <ErrorMessage error={error} />
    </>
  );
}
