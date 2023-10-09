import { db } from "~/db";

async function CreatorFetch(id: string) {
  const creator = await db.query.creator.findFirst({
    // where: (creator, {eq}) => eq(creator.id, id),
    where(creator, { eq }) {
      // @ts-ignore -- this works, but drizzle doesn't like it
      return eq(creator.id, id);
    },
    with: {
      codes: true,
    }
  });

  return creator;
}

export async function CreatorData({ id }: { id: string }) {
  const data = await CreatorFetch(id);

  return (
    <section className="space-y-2">
      <h2 className="font-cal text-6xl text-center">
        {data?.name}
      </h2>
      <pre className="rounded-[var(--radius-2)] border px-2 py-3 brightness-110 contrast-125 backdrop-blur">
        {JSON.stringify(data, null, 2)}
      </pre>
    </section>
  );
}
