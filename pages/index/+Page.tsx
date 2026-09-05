import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Counter } from "./Counter.js";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-3xl font-semibold tracking-tight">My Vike app</h1>
        <p className="text-muted-foreground">Rendered to HTML on the server, interactive on the client.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>SSR + Hydration</CardTitle>
          <CardDescription>This page is rendered to HTML and hydrated for interactivity.</CardDescription>
        </CardHeader>
        <CardContent>
          <Counter />
        </CardContent>
      </Card>
    </div>
  );
}
