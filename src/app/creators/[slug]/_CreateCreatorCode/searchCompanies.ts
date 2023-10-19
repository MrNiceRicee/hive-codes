"use server";

import z from "zod";
import { db } from "~/db";

async function search(query: string) {
  const res = db.query.company.findMany({
    where(company, { ilike }) {
      return ilike(company.name, `%${query}%`);
    },
  });

  return res;
}

const searchCompaniesSchema = z.object({
  query: z.string({
    required_error: "Query is required",
    invalid_type_error: "Query must be a string",
  }),
});

export async function searchCompanies(_state: any, payload: FormData) {
  const parse = searchCompaniesSchema.safeParse({
    query: payload.get("query"),
  });

  if (!parse.success) {
    return {
      data: [] as SearchCompanies,
      error: parse.error.issues.map((issue) => issue.message).join(", "),
    };
  }

  const data = await search(parse.data.query);

  return {
    error: null,
    data,
  };
}

export type SearchCompanies = Awaited<ReturnType<typeof search>>;
