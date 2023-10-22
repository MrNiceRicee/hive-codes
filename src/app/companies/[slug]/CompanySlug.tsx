import { CreatorData } from "./CompanyData";

export default function CompanySlug({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <main className="flex h-[100dvh] w-screen justify-center overflow-hidden py-8 pt-10 [background-image:var(--gradient-15)] before:grainy before:opacity-80 dark:[background-image:var(--gradient-8)]">
      <CreatorData id={params.slug} />
    </main>
  );
}
