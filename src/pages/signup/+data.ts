import { redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { auth } from "../../server/auth";

// Already logged in? Skip the form.
export async function data(pageContext: PageContextServer) {
  const session = pageContext.headers
    ? await auth.api.getSession({ headers: pageContext.headers })
    : null;
  if (session) throw redirect("/dashboard");
  return {};
}
