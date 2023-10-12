"use client";

import {
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from "react-dom";
import { Loader } from "lucide-react";

import { createCode } from "./createCode";
import { Input } from "~/components/Input";
import { ErrorMessage } from "~/components/ErrorMessage";
import {
  FormDescription,
  FormField,
  FormLabel,
} from "~/components/forms-v1/Form";

function LoadingIndicator() {
  return (
    <div className="flex animate-pulse items-center justify-center space-x-2">
      <Loader className="h-5 w-5 animate-spin" />
      <span className="inline-block">adding...</span>
    </div>
  );
}

function SubmitButton() {
  let { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="mt-4 w-full rounded-lg border py-2 font-cal backdrop-blur backdrop-brightness-125"
    >
      {pending ? <LoadingIndicator /> : "add"}
    </button>
  );
}

export function CreateCreatorCode() {
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
        <form action={formAction} className="space-y-2">
          <FormField>
            <FormLabel htmlFor="code">code</FormLabel>
            <Input name="code" id="code" placeholder="code..." />
            <FormDescription>the code used for the deal</FormDescription>
          </FormField>
          <fieldset className="flex flex-col space-y-1">
            <label htmlFor="companyId">company</label>
            <Input name="companyId" id="companyId" placeholder="company..." />
          </fieldset>
          <fieldset className="flex flex-col space-y-1">
            <label htmlFor="creatorId">creator</label>
            <Input name="creatorId" id="creatorId" placeholder="creator..." />
          </fieldset>
          <fieldset className="flex flex-col space-y-1">
            <label htmlFor="description">description</label>
            <Input
              name="description"
              id="description"
              placeholder="description..."
            />
            <FormDescription>a description of the deal or code</FormDescription>
          </fieldset>
          <SubmitButton />
          <ErrorMessage error={state.error} />
        </form>
      </section>
    </div>
  );
}
