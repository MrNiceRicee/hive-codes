import z from "zod";
import { db } from "~/db";

async function search(query?: string) {
  if (!query) {
    return db.query.company.findMany();
  }

  const res = db.query.company.findMany({
    where(company, { ilike, sql, or }) {
      // return ilike(company.name, `%${query}%`);
      const search = `${query.trim()}:*`;
      return or(
        ilike(company.name, `%${query}%`),
        sql`levenshtein(${company.name}, ${query}, 2, 1, 1) <= 1`,
        sql`similarity(${company.name}, ${query}) >= 0.1`,
        sql`to_tsvector(${company.name}) @@ to_tsquery(${search})`,
      );
      // return
    },
  });
  return res;
}

const searchCompaniesSchema = z.object({
  companyQuery: z
    .string({
      required_error: "Query is required",
      invalid_type_error: "Query must be a string",
    })
    .optional(),
});

export async function searchCompanies(payload: { companyQuery: string }) {
  const parse = searchCompaniesSchema.safeParse(payload);

  if (!parse.success) {
    return {
      data: [] as SearchCompanies,
      error: parse.error.issues.map((issue) => issue.message).join(", "),
    };
  }

  const data = await search(parse.data.companyQuery);
  console.log(payload.companyQuery);
  console.log(data.length, data);

  return {
    error: null,
    data,
  };
}

export type SearchCompanies = Awaited<ReturnType<typeof search>>;
