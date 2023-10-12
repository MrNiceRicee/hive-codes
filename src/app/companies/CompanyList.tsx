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
        <li key={company.id} className="bg-transparent">
          <Link
            className="inline-block w-full rounded-lg border bg-transparent px-2 py-3 shadow-md backdrop-blur-lg backdrop-brightness-105 backdrop-saturate-100"
            href={`/companies/${company.id}`}
          >
            {company.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
