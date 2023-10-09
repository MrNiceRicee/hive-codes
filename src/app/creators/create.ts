"use server";

import { z } from "zod";
import { db } from "~/db";
import { creator } from "~/db/schema";
import { revalidatePath } from "next/cache";

const createCreatorSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, {
      message: "Name must be at least 1 character",
    }),
});

export async function create(_state: any, payload: FormData) {
  const parse = createCreatorSchema.safeParse({
    name: payload.get("name"),
  });
  if (!parse.success) {
    return {
      error:
        parse.error.flatten().fieldErrors.name?.join(", ") || "Unknown error",
      data: null,
    };
  }

  const res = await db.insert(creator).values(parse.data).returning();

  revalidatePath("/creators");
  return {
    error: null,
    data: res,
  };
}
