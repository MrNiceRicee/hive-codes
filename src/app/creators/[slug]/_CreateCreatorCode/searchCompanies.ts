import { asc } from "drizzle-orm";
import z from "zod";
import { db } from "~/db";

async function search(query?: string) {
  if (!query) {
    return db.query.company.findMany();
  }

  const res = db.query.company.findMany({
    where(company, { ilike, sql, or }) {
      // const search = `${query.trim()}:*`;
      return or(
        ilike(company.name, `%${query}%`),
        // sql`levenshtein(${company.name}, ${query}, 2, 1, 1) <= 1`,
        sql`similarity(${company.name}, ${query}) >= 0.3`,
        // sql`to_tsvector(${company.name}) @@ to_tsquery(${search})`,
      );
    },
    orderBy(company, { desc, sql }) {
      const formattedQuery = query.split(" ").join(" & ");
      // return desc(sql`similarity(${company.name}, ${query})`);
      return [
        desc(sql`CASE WHEN ${company.name} = ${query} THEN 1 ELSE 0 END`),
        // desc(sql`CASE WHEN ${company.name} ILIKE ${query} || '%' THEN 1 ELSE 0 END`),
        // desc(sql`CASE WHEN ${company.name} ILIKE '%' || ${query} THEN 1 ELSE 0 END`),
        desc(sql`similarity(${company.name}, ${query})`),
      ];
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

  return {
    error: null,
    data,
  };
}

export type SearchCompanies = Awaited<ReturnType<typeof search>>;
