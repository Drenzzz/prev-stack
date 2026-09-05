import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";
import { IconArrowLeft } from "@tabler/icons-react";
import { cn } from "cn";
import { Badge } from "../../../components/ui/badge";
import { buttonVariants } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";

export default function Page() {
  const { movie } = useData<Data>();
  return (
    <div className="flex max-w-xl flex-col gap-6">
      <a href="/star-wars" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "self-start")}>
        <IconArrowLeft />
        All movies
      </a>
      <Card>
        <CardHeader>
          <CardDescription>
            <Badge>{movie.release_date}</Badge>
          </CardDescription>
          <CardTitle className="font-heading text-3xl font-semibold tracking-tight">{movie.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="text-muted-foreground">Director</dt>
            <dd>{movie.director}</dd>
            <dt className="text-muted-foreground">Producer</dt>
            <dd>{movie.producer}</dd>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}
