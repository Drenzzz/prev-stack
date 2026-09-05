import { dbMiddleware } from "./db-middleware";
import { createTodoHandler } from "./create-todo-handler";
import vike from "@vikejs/elysia";
import { Elysia } from "elysia";

function getApp() {
  const app = new Elysia();

  vike(app, [
    // Make database available in Context as `context.db`
    dbMiddleware,
    createTodoHandler,
  ]);

  return app;
}

export const app = getApp();
