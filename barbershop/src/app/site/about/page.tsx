import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <main className="py-12">
      <Container>
        <div className="max-w-2xl space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight">Our Brand</h1>
          <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            We’re focused on consistent quality, clean details, and a great
            experience — from the moment you book to the final mirror check.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="font-semibold">Quality</div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Skilled barbers, clean lines, and a polished finish.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="font-semibold">Comfort</div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                A modern space built for great vibes and confidence.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Button href="/site/book">Book now</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}