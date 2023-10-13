import { db } from "~/db";

export async function searchCompanies(query: string) {
  const res = db.query.company.findMany({
    where(company, { ilike }) {
      return ilike(company.name, `%${query}%`);
    },
  });

  return res;
}

export type SearchCompanies = Awaited<ReturnType<typeof searchCompanies>>