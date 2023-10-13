import { db } from "~/db";
import { CreateCreatorCode } from "./CreateCreatorCodeForm";

async function CreatorFetch(id: string) {
  const creator = await db.query.creator.findFirst({
    where(creator, { eq }) {
      // @ts-ignore -- this works, but drizzle doesn't like it
      return eq(creator.id, id);
    },
    with: {
      // codes: true,
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

export async function CreatorData({ id }: { id: string }) {
  const data = await CreatorFetch(id);

  return (
    <section className="container flex flex-col items-center justify-center space-y-2">
      <h2 className="text-center font-cal text-6xl">{data?.name}</h2>
      {/* <pre className="rounded-[var(--radius-2)] border px-2 py-3 backdrop-blur backdrop-brightness-110 backdrop-contrast-125">
        {JSON.stringify(data, null, 2)}
      </pre> */}
      <CreateCreatorCode creatorId={id} />
      <ul className="space-y-6">
        {data?.codes.length ? (
          data.codes.map((code) => {
            return (
              <li key={code.id}>
                <h3 className="font-cal text-2xl">
                  {code.company.name} - {code.code}
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
