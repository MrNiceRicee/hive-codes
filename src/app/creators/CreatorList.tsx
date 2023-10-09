import Link from "next/link";
import { db } from "~/db";

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
  );
}

export function CreatorListLoading() {
  return (
    <ul className="space-y-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}>
          <div className="inline-block h-[4rem] w-full animate-pulse rounded-lg border backdrop-blur-lg backdrop-brightness-125 backdrop-saturate-100" />
        </li>
      ))}
    </ul>
  );
}
