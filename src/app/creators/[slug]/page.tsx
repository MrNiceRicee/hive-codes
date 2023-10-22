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
    companyQuery: string;
  };
}) {
  return (
    <main className="h-[100dvh] w-screen overflow-hidden overflow-y-scroll py-14 before:grainy before:opacity-40">
      <CreatorData id={params.slug} searchParams={searchParams} />
    </main>
  );
}
