import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { dbPostgres } from "../database/drizzle/db";
import * as authSchema from "../database/drizzle/schema/auth";

export const auth = betterAuth({
  database: drizzleAdapter(dbPostgres(), { provider: "pg", schema: authSchema }),
  emailAndPassword: {
    enabled: true,
  },
  // Extra origins allowed to call the auth API (e.g. dev on another port).
  // Comma-separated via TRUSTED_ORIGINS.
  trustedOrigins: (process.env.TRUSTED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
});
