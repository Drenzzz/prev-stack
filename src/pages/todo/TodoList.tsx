import type { Data } from "./+data";
import { useState } from "react";
import { useData } from "vike-react/useData";
import { IconInbox, IconPlus } from "@tabler/icons-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../../components/ui/empty";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export function TodoList() {
  const { todoItemsInitial } = useData<Data>();
  const [todoItems, setTodoItems] = useState<{ text: string }[]>(todoItemsInitial);
  const [newTodo, setNewTodo] = useState("");
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Tasks <Badge variant="secondary">{todoItems.length}</Badge>
        </CardTitle>
        <CardDescription>Initial data comes from the server, new items save via API.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {todoItems.length === 0 ? (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <IconInbox />
              </EmptyMedia>
              <EmptyTitle>No tasks yet</EmptyTitle>
              <EmptyDescription>Add your first to-do below to get started.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <ul className="flex flex-col gap-2">
            {todoItems.map((todoItem, index) => (
              <li
                key={index}
                className="flex items-center gap-2.5 rounded-lg border border-border px-3 py-2 text-sm"
              >
                <Badge variant="outline">{index + 1}</Badge>
                {todoItem.text}
              </li>
            ))}
          </ul>
        )}
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();

            const text = newTodo;
            setTodoItems((prev) => [...prev, { text }]);
            setNewTodo("");
            const response = await fetch("/api/todo/create", {
              method: "POST",
              body: JSON.stringify({ text }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            await response.blob();
          }}
          className="flex items-end gap-2"
        >
          <div className="grid flex-1 gap-1.5">
            <Label htmlFor="new-todo">New to-do</Label>
            <Input
              id="new-todo"
              type="text"
              placeholder="Buy milk…"
              onChange={(ev) => setNewTodo(ev.target.value)}
              value={newTodo}
            />
          </div>
          <Button type="submit">
            <IconPlus />
            Add to-do
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
