import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

const order = ["Haircuts", "Bearding", "Kids", "Other"] as const;

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function PricingTable() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Pricing
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Transparent prices and estimated time.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="/site/book" variant="outline">
              Book now
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          {order.map((cat) => {
            const list = services.filter((s) => s.category === cat);
            if (list.length === 0) return null;

            const anchor = cat.toLowerCase();
            return (
              <div
                key={cat}
                id={anchor}
                className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6"
              >
                <div className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  {cat}
                </div>

                <div className="mt-4 divide-y divide-zinc-200 dark:divide-zinc-800">
                  {list.map((s) => (
                    <div
                      key={s.id}
                      className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <div className="font-medium text-zinc-950 dark:text-zinc-50">
                          {s.name}
                        </div>
                        <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                          {s.durationMin} minutes
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:justify-end">
                        <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                          {formatPrice(s.priceCad)}
                        </div>
                        <Button
                          href={s.bookingUrl}
                          variant="outline"
                          size="sm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Book
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}