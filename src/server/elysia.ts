import { auth } from "./auth";
import { dbMiddleware } from "./db-middleware";
import vike from "@vikejs/elysia";
import { Elysia } from "elysia";

function getApp() {
  const app = new Elysia();

  // Better Auth API: /api/auth/*
  // Handled in onRequest (before Elysia parses the body),
  // otherwise auth.handler fails cloning the consumed request.
  app.onRequest(({ request }) => {
    if (new URL(request.url).pathname.startsWith("/api/auth")) {
      return auth.handler(request);
    }
  });

  vike(app, [
    // Make database available in Context as `context.db`
    dbMiddleware,
  ]);

  return app;
}

export const app = getApp();
