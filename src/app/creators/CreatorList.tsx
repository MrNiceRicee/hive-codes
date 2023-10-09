import Link from "next/link";
import { db } from "~/db";
import { CreatorSearch } from "./CreatorSearch";

async function getCreatorList(search = "") {
  const creatorList = await db.query.creator.findMany({
    where(creators, { ilike }) {
      return ilike(creators.name, `%${search}%`);
    },
  });

  return creatorList;
}

export async function CreatorList({ search }: { search: string }) {
  const data = await getCreatorList(search);

  return (
    <section className="dotted-graph space-y-2 pb-4">
      <h2 className="text-gradient mx-auto text-center font-cal text-6xl drop-shadow [--text-gradient:var(--background-gradient-1)]">
        creators
      </h2>
      <div className="mx-auto max-w-sm">
        <CreatorSearch />
        <ul className="space-y-6">
          {data.map((creator) => (
            <li key={creator.id}>
              <Link
                className="inline-block w-full rounded-lg border px-2 py-3 backdrop-blur-lg backdrop-brightness-125 backdrop-saturate-100"
                href={`/creators/${creator.id}`}
              >
                {creator.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
