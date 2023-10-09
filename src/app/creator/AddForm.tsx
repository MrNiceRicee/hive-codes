"use client";

import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { create } from "./create";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? "Creating..." : "Create"}
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(create, {
    name: null,
  });

  return (
    <section>
      <form action={formAction}>
        <input name="name" />
        {/* <button type="submit">Create</button> */}
        <SubmitButton />
        {state.error && <div>{state.error}</div>}
      </form>
    </section>
  );
}
