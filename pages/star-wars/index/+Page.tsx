import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

export default function Page() {
  const { movies } = useData<Data>();
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-3xl font-semibold tracking-tight">Star Wars Movies</h1>
        <p className="text-muted-foreground">
          Source:{" "}
          <a href="https://brillout.github.io/star-wars" className="underline underline-offset-4 hover:text-primary">
            brillout.github.io/star-wars
          </a>
          .
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Movies <Badge variant="secondary">{movies.length}</Badge>
          </CardTitle>
          <CardDescription>Fetched on the server, rendered to HTML.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Star Wars movies by release date.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="text-right">Release date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {movies.map(({ id, title, release_date }) => (
                <TableRow key={id}>
                  <TableCell className="font-medium">
                    <a href={`/star-wars/${id}`} className="underline underline-offset-4 hover:text-primary">
                      {title}
                    </a>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline">{release_date}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
