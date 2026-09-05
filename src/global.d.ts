import type { dbPostgres } from "./database/drizzle/db";

declare global {
  namespace Vike {
    interface PageContextServer {
      db: ReturnType<typeof dbPostgres>;
    }
  }
}
