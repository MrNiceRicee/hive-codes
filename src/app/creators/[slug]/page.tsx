import { CreatorData } from "./CreatorData";

export default function CreatorPage({
  params,
  searchParams,
}: {
  params: {
    slug: string;
  };
  searchParams: {
    company: string;
  };
}) {
  return (
    <main className="pt-20 h-[100dvh] w-screen overflow-hidden overflow-y-scroll before:grainy before:opacity-40">
      <CreatorData id={params.slug} searchParams={searchParams} />
    </main>
  );
}
