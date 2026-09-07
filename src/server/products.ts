import { t, type Elysia } from "elysia";
import { auth } from "./auth";
import * as productQueries from "../database/drizzle/queries/products";

function unauthorized() {
  return new Response(JSON.stringify({ error: "Unauthorized" }), {
    status: 401,
    headers: { "content-type": "application/json" },
  });
}

// Template CRUD pattern: session-checked JSON API under /api/*.
export function productRoutes(app: Elysia) {
  return app
    .onBeforeHandle(async ({ request, path }) => {
      if (!path.startsWith("/api/products")) return;
      const session = await auth.api.getSession({ headers: request.headers });
      if (!session?.user) return unauthorized();
    })
    .get("/api/products", () => productQueries.listProducts())
    .post(
      "/api/products",
      async ({ body }) => {
        const created = await productQueries.createProduct(body);
        return new Response(JSON.stringify(created), {
          status: 201,
          headers: { "content-type": "application/json" },
        });
      },
      {
        body: t.Object({
          name: t.String({ minLength: 1 }),
          price: t.Integer({ minimum: 0 }),
          stock: t.Integer({ minimum: 0 }),
        }),
      },
    )
    .patch(
      "/api/products/:id",
      async ({ params, body }) => {
        const updated = await productQueries.updateProduct(params.id, body);
        if (!updated) return new Response("Not found", { status: 404 });
        return updated;
      },
      {
        body: t.Object({
          name: t.Optional(t.String({ minLength: 1 })),
          price: t.Optional(t.Integer({ minimum: 0 })),
          stock: t.Optional(t.Integer({ minimum: 0 })),
        }),
      },
    )
    .delete("/api/products/:id", async ({ params }) => {
      await productQueries.deleteProduct(params.id);
      return new Response(null, { status: 204 });
    });
}
