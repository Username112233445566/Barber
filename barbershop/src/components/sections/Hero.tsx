import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white dark:from-zinc-950 dark:via-black dark:to-black" />
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-zinc-200/50 blur-3xl dark:bg-zinc-800/40" />
      </div>

      <Container className="py-16 sm:py-20">
        <div className="max-w-2xl space-y-6">
          <Badge>Based in {site.city}</Badge>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Premium grooming, sharp results — every visit.
          </h1>

          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Clean fades, classic cuts, and beard detailing in a modern barbershop
            atmosphere. Book online in seconds.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/site/book" size="lg">
              Book now
            </Button>
            <Button href="/site/services" variant="outline" size="lg">
              View services
            </Button>
          </div>

          <div className="grid gap-3 pt-6 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="font-semibold text-zinc-950 dark:text-zinc-50">
                Skilled barbers
              </div>
              <div className="mt-1">Consistent quality</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="font-semibold text-zinc-950 dark:text-zinc-50">
                Online booking
              </div>
              <div className="mt-1">Fast Clover flow</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="font-semibold text-zinc-950 dark:text-zinc-50">
                Great vibe
              </div>
              <div className="mt-1">Comfort & style</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}