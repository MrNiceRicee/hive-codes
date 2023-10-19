import { CreatorData } from "./CreatorData";

export default function CreatorPage({
  params,
  searchParams
}: {
  params: {
    slug: string;
  };
  searchParams: {
    company: string;
  };
}) {
  return (
    <main className="flex h-[100dvh] w-screen items-center justify-center overflow-hidden before:grainy before:opacity-40">
      <CreatorData id={params.slug} searchParams={searchParams} />
    </main>
  );
}
