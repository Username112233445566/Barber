import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function StoryMedia() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          {/* Text */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-sm text-[rgb(var(--gold))]">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--gold))]" />
              The Experience
            </div>

            <h2 className="text-3xl font-semibold tracking-tight">
              A premium barbershop vibe — black & gold.
            </h2>

            <p className="text-sm leading-7 text-[rgb(var(--muted))]">
              Not just a haircut. Clean details, confident finish, and a space
              you actually want to spend time in.
            </p>

            <ul className="space-y-2 text-sm text-[rgb(var(--muted))]">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--gold))]" />
                Skin fades & modern cuts
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--gold))]" />
                Beard shaping & line-ups
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--gold))]" />
                Attention to detail
              </li>
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/site/book">Book now</Button>
              <Button href="/site/services" variant="outline">
                View pricing
              </Button>
            </div>
          </div>

          {/* Media */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-black">
              <div className="aspect-[16/10]">
                <video
                  className="h-full w-full object-cover"
                  src="/IMG_7540.MOV"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                />
              </div>

              {/* gold glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[rgba(201,162,39,0.22)] blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[rgba(201,162,39,0.18)] blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}