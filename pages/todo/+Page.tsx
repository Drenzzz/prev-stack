import { TodoList } from "./TodoList.js";

export default function Page() {
  return (
    <div className="flex max-w-xl flex-col gap-6">
      <div>
        <h1 className="font-heading text-3xl font-semibold tracking-tight">To-do List</h1>
        <p className="text-muted-foreground">Server-loaded data with optimistic client updates.</p>
      </div>
      <TodoList />
    </div>
  );
}
