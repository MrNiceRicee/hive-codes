import Link from "next/link";
import { db } from "~/db";

async function getCompanies(name = "") {
  const res = await db.query.company.findMany({
    where(companies, { ilike }) {
      return ilike(companies.name, `%${name}%`);
    },
  });

  return res;
}

export async function CompanyList({ name }: { name: string }) {
  const res = await getCompanies(name);

  return (
    <ul className="space-y-6">
      {res.map((company) => (
        <li key={company.id}>
          <Link
            className="inline-block w-full rounded-lg border px-2 py-3 backdrop-blur-lg backdrop-brightness-125 backdrop-saturate-100"
            href={`/companies/${company.id}`}
          >
            {company.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function CompanyListLoading() {
  return (
    <ul className="animate-pulse space-y-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i}>
          <div
            className="flex h-[4rem] w-full animate-bloom-fade-in items-center justify-center rounded-lg border opacity-0 backdrop-blur-lg backdrop-brightness-125 backdrop-saturate-100 duration-200 fill-mode-forwards"
            style={{
              animationDelay: `${i * 15},s`,
            }}
          >
            <h1 className="text-gradient font-cal [--text-gradient:var(--gradient-5)]">
              Loading...
            </h1>
          </div>
        </li>
      ))}
    </ul>
  );
}
