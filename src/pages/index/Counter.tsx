import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";
import { Button } from "../../components/ui/button";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button type="button" onClick={() => setCount((count) => count + 1)}>
      <IconPlus />
      Counter {count}
    </Button>
  );
}
