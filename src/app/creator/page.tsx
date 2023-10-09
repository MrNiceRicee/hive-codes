import { AddForm } from "./AddForm";

export default async function Creator() {
  return (
    <main className="flex h-[100dvh] w-screen items-center justify-center overflow-hidden bg-gradient-1 before:grainy before:opacity-40">
      <AddForm />
    </main>
  );
}
