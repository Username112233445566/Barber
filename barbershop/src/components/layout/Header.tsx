import Link from "next/link";
import Container from "./Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

const nav = [
  { href: "/site/services", label: "Services" },
  { href: "/site/locations", label: "Locations" },
  { href: "/site/about", label: "Our Brand" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-black/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/site"
            className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
          >
            {site.name}
          </Link>
          <nav className="hidden items-center gap-5 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" href="/site/book">
            Book now
          </Button>
        </div>
      </Container>
    </header>
  );
}