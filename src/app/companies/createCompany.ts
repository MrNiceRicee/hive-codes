"use server";

import { z } from "zod";
import { db } from "~/db";
import { company } from "~/db/schema";
import { revalidatePath } from "next/cache";

const createCompanySchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, {
      message: "Name must be at least 1 character",
    }),
});

export async function createCompany(_state: any, payload: FormData) {
  const parse = createCompanySchema.safeParse({
    name: payload.get("name"),
  });

  if (!parse.success) {
    return {
      error:
        parse.error.flatten().fieldErrors.name?.join(", ") || "Unknown error",
      // data: null,
    };
  }

  try {
    await db.insert(company).values(parse.data);
    revalidatePath("/companies");
    return {
      error: null,
      // data: null,
    };
  } catch (e) {
    const error = e as Error;
    return {
      error: error.message,
      // data: null,
    };
  }
}
