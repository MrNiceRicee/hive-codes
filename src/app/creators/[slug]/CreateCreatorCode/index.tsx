"use client";

import { experimental_useFormState as useFormState } from "react-dom";

import { createCode } from "./createCode";
import { Input } from "~/components/Input";
import {
  FormDescription,
  FormField,
  FormLabel,
} from "~/components/forms-v1/Form";
import { CreateForm } from "./CreateForm";

export function CreateCreatorCode({ creatorId }: { creatorId: string }) {
  const [state, formAction] = useFormState<
    {
      error: string | null;
    },
    FormData
  >(createCode, { error: null });

  return (
    <div className="mx-auto w-full max-w-sm space-y-4 rounded-[calc(0.5rem+0.5rem)] border p-2 backdrop-blur">
      <header>
        <h3 className="font-cal text-2xl">add code</h3>
        <p>add a code to this creator</p>
      </header>
      <section>
        <form>
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
        </form>
        <form action={formAction} className="space-y-2">
          <CreateForm error={state.error} />
        </form>
      </section>
    </div>
  );
}
