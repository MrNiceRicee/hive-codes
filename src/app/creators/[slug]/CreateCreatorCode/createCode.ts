"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "~/db";
import { code } from "~/db/schema";
import { stripUndef } from "~/lib/utils";

const createCodeSchema = z.object({
  code: z
    .string({
      required_error: "Code is required",
      invalid_type_error: "Code must be a string",
    })
    .min(1, {
      message: "Code must be at least 1 character",
    }),
  companyId: z.coerce
    .number({
      required_error: "Company ID is required",
    })
    .int(),
  creatorId: z.coerce
    .number({
      required_error: "Creator ID is required",
    })
    .positive({
      message: "Creator ID must be positive",
    })
    .int(),
  description: z.string().optional(),
});

function praseError<T extends z.AnyZodObject>(error: z.ZodError<T["shape"]>) {
  const fields = stripUndef(error.flatten().fieldErrors);
  const keys = Object.keys(fields) as (keyof typeof fields)[];

  return keys.map((key) => (fields[key] as string[]).join(", ")).join(", ");
}

export async function createCode(_state: any, payload: FormData) {
  const parse = createCodeSchema.safeParse({
    code: payload.get("code"),
    companyId: payload.get("companyId"),
    creatorId: payload.get("creatorId"),
    description: payload.get("description"),
  });
  if (!parse.success) {
    return {
      error: praseError(parse.error),
    };
  }

  try {
    await db.insert(code).values(parse.data).returning();

    revalidatePath("/creators/[slug]", "page");
    return {
      error: null,
    };
  } catch (e) {
    const error = e as Error;
    if (error.message.includes("duplicate key")) {
      return {
        error: `Code (${parse.data.code}) already exists. Please choose a different code.`,
      };
    }

    return {
      error: JSON.stringify(error.message),
    };
  }
}
