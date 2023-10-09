import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle as neonDrizzle } from "drizzle-orm/neon-http";

import postgres from "postgres";
import { drizzle as pgDrizzle } from "drizzle-orm/postgres-js";

import { env } from "~/env.mjs";
import * as schema from "./schema";

neonConfig.fetchConnectionCache = true;

// const client = neon(env.DATABASE_URL);
// export const db = drizzle(client, { schema });

const config = () => {
  if (env.NODE_ENV !== "production") {
    const client = postgres(env.DATABASE_URL);
    return {
      client,
      db: pgDrizzle(client, { schema }),
    };
  }

  const client = neon(env.DATABASE_URL);
  return {
    client,
    db: neonDrizzle(client, { schema }),
  };
};

export const { client, db } = config();