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
    <section className="space-y-2">
      <h2 className="text-gradient text-center font-cal text-6xl drop-shadow [--text-gradient:var(--gradient-23)]">
        creators
      </h2>
      <CreatorSearch />
      <ul className="space-y-6">
        {data.map((creator) => (
          <li key={creator.id}>
            <Link
              className="inline-block w-full rounded-lg border px-2 py-3 brightness-110 contrast-125 backdrop-blur"
              href={`/creators/${creator.id}`}
            >
              {creator.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
