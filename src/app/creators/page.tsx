import { Suspense } from "react";
import { AddForm } from "./AddForm";
import { CreatorList } from "./CreatorList";
import { Metadata } from "next";

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
    <main className="flex h-[100dvh] w-screen justify-center overflow-hidden bg-[--surface-2] bg-fixed py-8 before:grainy before:opacity-40">
      <div className="container flex flex-col space-y-4">
        <AddForm />
        <Suspense>
          <CreatorList search={searchParams.search} />
        </Suspense>
      </div>
    </main>
  );
}
