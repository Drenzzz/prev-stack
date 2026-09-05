import { usePageContext } from "vike-react/usePageContext";
import { IconAlertTriangle, IconHome } from "@tabler/icons-react";
import { cn } from "cn";
import { buttonVariants } from "../../components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../components/ui/empty";

export default function Page() {
  const { is404 } = usePageContext();
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconAlertTriangle />
        </EmptyMedia>
        <EmptyTitle>{is404 ? "Page Not Found" : "Internal Error"}</EmptyTitle>
        <EmptyDescription>
          {is404 ? "This page could not be found." : "Something went wrong."}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <a href="/" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
          <IconHome />
          Back home
        </a>
      </EmptyContent>
    </Empty>
  );
}
