import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { dbPostgres } from "../database/drizzle/db";
import * as authSchema from "../database/drizzle/schema/auth";

export const auth = betterAuth({
  database: drizzleAdapter(dbPostgres(), { provider: "pg", schema: authSchema }),
  emailAndPassword: {
    enabled: true,
  },
});
