import { db } from "~/db";
import { CreateCreatorCode } from "./_CreateCreatorCode";
import { CreateForm } from "./_CreateCreatorCode/CreateForm";

async function CreatorFetch(id: string) {
  const creator = await db.query.creator.findFirst({
    where(creator, { eq }) {
      // @ts-ignore -- this works, but drizzle doesn't like it
      return eq(creator.id, id);
    },
    with: {
      codes: {
        columns: {
          id: true,
          code: true,
          description: true,
          createdAt: true,
          updatedAt: true,
        },
        with: {
          company: {
            columns: {
              id: true,
              name: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
        orderBy(fields, { desc }) {
          return desc(fields.createdAt);
        },
      },
    },
    columns: {
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return creator;
}

export async function CreatorData({
  id,
  searchParams,
}: {
  id: string;
  searchParams: { company: string };
}) {
  const data = await CreatorFetch(id);

  return (
    <section className="container mx-auto flex flex-col items-center justify-center space-y-2">
      <h2 className="text-center font-cal text-6xl">{data?.name}</h2>
      <CreateCreatorCode>
        <CreateForm creatorId={id} searchParams={searchParams} />
      </CreateCreatorCode>
      <ul className="mx-auto space-y-6">
        {data?.codes.length ? (
          data.codes.map((code) => {
            return (
              <li key={code.id}>
                <h3 className="font-cal text-2xl">
                  <pre className="inline rounded-lg border bg-[var(--surface-2)] px-2 py-1">
                    {code.code}
                  </pre>
                  {" - "}
                  {code.company.name}
                </h3>
                <p>{code.description}</p>
              </li>
            );
          })
        ) : (
          <li>
            <h3>No codes found</h3>
          </li>
        )}
      </ul>
    </section>
  );
}
