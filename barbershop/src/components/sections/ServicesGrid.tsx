import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const cards = [
  {
    title: "Haircuts",
    desc: "Classic, modern, fades & styling.",
    href: "/site/services#haircuts",
  },
  {
    title: "Bearding",
    desc: "Trim, shape, line-up & hot towel.",
    href: "/site/services#bearding",
  },
  {
    title: "Kids",
    desc: "Clean cuts for young clients.",
    href: "/site/services#kids",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Services
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Pick your service and book online.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="/site/book" variant="outline">
              Book an appointment
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 transition hover:border-[rgb(var(--gold))]/60 hover:shadow-sm"
            >
              <div className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {c.title}
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {c.desc}
              </div>
              <div className="mt-4 text-sm font-medium text-zinc-900 group-hover:underline dark:text-zinc-100">
                View pricing →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button href="/site/book" className="w-full">
            Book now
          </Button>
        </div>
      </Container>
    </section>
  );
}