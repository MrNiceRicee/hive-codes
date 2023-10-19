"use client";

import { experimental_useFormState as useFormState } from "react-dom";

import { createCode } from "./createCode";
import { CreateForm } from "./CreateForm";
import { useRef } from "react";

export function CreateCreatorCode({
  creatorId,
  children,
}: {
  creatorId: string;
  children?: React.ReactNode;
}) {
  const [state, formAction] = useFormState<
    {
      error: string | null;
    },
    FormData
  >(createCode, { error: null });
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="mx-auto w-full max-w-sm space-y-4 rounded-[calc(0.5rem+0.5rem)] border p-2 backdrop-blur">
      <header>
        <h3 className="font-cal text-2xl">add code</h3>
        <p>add a code to this creator</p>
      </header>
      <section>
        <form
          ref={ref}
          action={async (formData) => {
            await formAction(formData);
            if (!state.error) {
              ref.current?.reset();
            }
          }}
          className="space-y-2"
        >
          {children}
          <CreateForm error={state.error} creatorId={creatorId} />
        </form>
      </section>
    </div>
  );
}
