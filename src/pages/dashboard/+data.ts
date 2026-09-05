import { redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { auth } from "../../server/auth";

// Protected route: bounce anonymous visitors to /login.
export async function data(pageContext: PageContextServer) {
  const session = pageContext.headers
    ? await auth.api.getSession({ headers: pageContext.headers })
    : null;
  if (!session) throw redirect("/login");
  return {};
}
