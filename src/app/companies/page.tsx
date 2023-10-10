import { AddCreatorForm } from "./AddCreatorForm";

export default function Company() {
  return (
    <main className="mt-10 flex h-[100dvh] w-screen justify-center overflow-hidden py-8 before:grainy before:opacity-40">
      <div className="container flex flex-col space-y-4">
        <AddCreatorForm />
        <section className="dotted-graph h-full space-y-2">
          <h2 className="text-gradient mx-auto text-center font-cal text-6xl drop-shadow [--text-gradient:var(--background-gradient-1)]">
            companies
          </h2>
          <div className="mx-auto max-w-sm"></div>
        </section>
      </div>
    </main>
  );
}
