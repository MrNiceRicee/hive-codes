import Link from "next/link";
import { db } from "~/db";

async function CompanyFetch(id: string) {
  const company = await db.query.company.findFirst({
    where(company, { eq }) {
      // @ts-ignore -- this works, but drizzle doesn't like it
      return eq(company.id, id);
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
          creator: {
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

  return company;
}

export async function CreatorData({ id }: { id: string }) {
  const data = await CompanyFetch(id);

  return (
    <section className="container flex flex-col items-center justify-center space-y-2">
      <h2 className="text-center font-cal text-6xl">{data?.name}</h2>
      <ul className="space-y-6">
        {data?.codes.length ? (
          data?.codes.map((code) => {
            return (
              <li key={code.id}>
                <Link
                  className="inline-block w-full rounded-lg border bg-transparent px-2 py-3 shadow-md backdrop-blur-lg backdrop-brightness-105 backdrop-saturate-100"
                  href={`/codes/${code.id}`}
                >
                  <h3 className="font-cal text-2xl">
                    {code.creator.name} - {code.code}
                  </h3>
                  <p className="text-sm text-gray-500">{code.description}</p>
                </Link>
              </li>
            );
          })
        ) : (
          <li>
            <h3>No codes found for this company</h3>
          </li>
        )}
      </ul>
    </section>
  );
}
