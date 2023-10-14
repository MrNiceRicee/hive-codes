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
import { CompanySearchOptions } from "./CompanySearchOptions";
import { searchCompanies, type SearchCompanies } from "./searchCompanies";

export function CreateCreatorCode({ creatorId }: { creatorId: string }) {
  const [state, formAction] = useFormState<
    {
      error: string | null;
    },
    FormData
  >(createCode, { error: null });

  const [dataList, dataListAction] = useFormState<
    {
      data: SearchCompanies;
      error: string | null;
    },
    FormData
  >(searchCompanies, { data: [], error: null });

  return (
    <div className="mx-auto w-full max-w-sm space-y-4 rounded-[calc(0.5rem+0.5rem)] border p-2 backdrop-blur">
      <header>
        <h3 className="font-cal text-2xl">add code</h3>
        <p>add a code to this creator</p>
      </header>
      <section>
        <form action={formAction} className="space-y-2">
          <CreateForm error={state.error} creatorId={creatorId} />
        </form>
      </section>
    </div>
  );
}
