import "../app/globals.css";
import "./Layout.css";

import { IconHome, IconListCheck, IconMovie } from "@tabler/icons-react";
import { usePageContext } from "vike-react/usePageContext";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";
import { Separator } from "../components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

const nav = [
  { href: "/", label: "Welcome", Icon: IconHome },
  { href: "/todo", label: "Todo", Icon: IconListCheck },
  { href: "/star-wars", label: "Data Fetching", Icon: IconMovie },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl">
      <aside className="flex w-60 shrink-0 flex-col gap-1 p-5">
        <a href="/" className="mt-2 mb-4 flex items-center gap-2 px-2">
          <img src={logoUrl} height={40} width={40} alt="logo" />
          <span className="font-heading text-lg font-semibold tracking-tight">My Vike app</span>
        </a>
        <nav className="flex flex-col gap-1">
          {nav.map(({ href, label, Icon }) => (
            <Link key={href} href={href}>
              <Icon />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <Separator orientation="vertical" />
      <div id="page-container" className="min-w-0 flex-1">
        <main id="page-content" className="min-h-screen p-6 pb-12">
          <PageBreadcrumb />
          {children}
        </main>
      </div>
    </div>
  );
}

function PageBreadcrumb() {
  const { urlPathname } = usePageContext();
  const current = nav.find((item) =>
    item.href === "/" ? urlPathname === "/" : urlPathname.startsWith(item.href),
  );
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {current && current.href !== "/" && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{current.label}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
