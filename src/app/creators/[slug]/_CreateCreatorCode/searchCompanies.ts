import z from "zod";
import { db } from "~/db";

async function search(query?: string) {
  if (!query) {
    return db.query.company.findMany();
  }

  const res = db.query.company.findMany({
    where(company, { ilike }) {
      return ilike(company.name, `%${query}%`);
    },
  });

  return res;
}

const searchCompaniesSchema = z.object({
  company: z.string({
    required_error: "Query is required",
    invalid_type_error: "Query must be a string",
  }).optional(),
});

export async function searchCompanies(payload: { company: string }) {
  const parse = searchCompaniesSchema.safeParse(payload);

  if (!parse.success) {
    return {
      data: [] as SearchCompanies,
      error: parse.error.issues.map((issue) => issue.message).join(", "),
    };
  }

  const data = await search(parse.data.company);

  return {
    error: null,
    data,
  };
}

export type SearchCompanies = Awaited<ReturnType<typeof search>>;
