import { Suspense } from "react";
import { AddCreatorForm } from "./AddCompanyForm";
import { CompanyList } from "./CompanyList";
import { CompanySearch } from "./CompanySearch";
import { LoaderList } from "~/components/loaders/LoaderList";

export default function Company({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  return (
    <main className="flex h-[100dvh] w-screen justify-center overflow-hidden py-8 pt-10 [background-image:var(--gradient-15)] before:grainy before:opacity-80 dark:[background-image:var(--gradient-8)]">
      <div className="container flex flex-col space-y-4">
        <AddCreatorForm />
        <section className="dotted-graph h-full space-y-2">
          <h2 className="text-gradient mx-auto text-center font-cal text-6xl drop-shadow [--text-gradient:var(--gradient-8)] dark:[--text-gradient:var(--gradient-29)]">
            companies
          </h2>
          <div className="mx-auto max-w-sm">
            <CompanySearch />
            <Suspense fallback={<LoaderList />} key={searchParams.search}>
              <CompanyList name={searchParams.search} />
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
}
