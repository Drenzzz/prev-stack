import { usePageContext } from "vike-react/usePageContext";
import { cn } from "cn";
import { buttonVariants } from "./ui/button";

export function Link({ href, children }: { href: string; children: React.ReactNode }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(buttonVariants({ variant: "ghost" }), "justify-start", isActive && "bg-muted text-foreground")}
    >
      {children}
    </a>
  );
}
