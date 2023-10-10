"use client";

import {
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from "react-dom";
import { Loader } from "lucide-react";

import { createCompany } from "./createCompany";
import { Input } from "~/components/Input";

function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center space-x-2 animate-pulse">
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
      {!pending ? <LoadingIndicator /> : "add"}
    </button>
  );
}

function ErrorMessage({ error }: { error: string | null }) {
  if (!error) return null;

  return <div className="text-red-500">{error}</div>;
}

const initialState = {
  error: null,
};

export function AddCreatorForm() {
  const [state, formAction] = useFormState<
    {
      error: string | null;
    },
    FormData
  >(createCompany, initialState);

  return (
    <section className="mx-auto max-w-sm rounded-[calc(0.5rem+0.25rem)] border p-1 backdrop-blur">
      <form action={formAction}>
        <fieldset className="flex flex-col space-y-1">
          <label htmlFor="name">name</label>
          <Input name="name" id="name" placeholder="company name..." />
        </fieldset>
        <SubmitButton />
        <ErrorMessage error={state.error} />
      </form>
    </section>
  );
}
