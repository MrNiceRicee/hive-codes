import { Suspense } from "react";
import { AddForm } from "./AddForm";
import { CreatorList, CreatorListLoading } from "./CreatorList";
import { Metadata } from "next";
import { CreatorSearch } from "./CreatorSearch";

export const metadata: Metadata = {
  title: "Creators",
  description: "List of creators that are currently on the platform",
};

export default async function Creator({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  return (
    <main className="mt-10 flex h-[100dvh] w-screen justify-center overflow-hidden py-8 before:grainy before:opacity-40">
      <div className="container flex flex-col space-y-4">
        <AddForm />
        <section className="dotted-graph h-full space-y-2">
          <h2 className="text-gradient mx-auto text-center font-cal text-6xl drop-shadow [--text-gradient:var(--background-gradient-1)]">
            creators
          </h2>
          <div className="mx-auto max-w-sm">
            <CreatorSearch />
            <Suspense fallback={<CreatorListLoading />}>
              <CreatorList search={searchParams.search} />
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
}
