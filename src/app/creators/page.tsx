import { Suspense } from "react";
import { AddForm } from "./AddForm";
import { CreatorList } from "./CreatorList";
import { CreatorSearch } from "./CreatorSearch";

export default async function Creator({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  return (
    <main className="dotted-graph py-8 flex h-[100dvh] w-screen justify-center overflow-hidden bg-fixed before:grainy before:opacity-40">
      <div className="flex flex-col space-y-4">
        <AddForm />
        <Suspense>
          <CreatorList search={searchParams.search} />
        </Suspense>
      </div>
    </main>
  );
}
