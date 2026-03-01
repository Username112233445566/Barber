import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

const demo = [
  {
    name: "A. K.",
    text: "Great fade and super clean lineup. Booking was easy.",
  },
  {
    name: "J. M.",
    text: "Friendly staff and solid attention to detail. Coming back.",
  },
  {
    name: "S. R.",
    text: "Best barbershop vibe in town. Highly recommend.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-[rgb(var(--gold))]"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.454a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.377-2.454a1 1 0 00-1.176 0l-3.377 2.454c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.288-3.966z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-16">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold tracking-tight">
                Client Reviews
              </h2>
              <Badge className="border-[rgb(var(--gold))] bg-black text-[rgb(var(--gold))]">
                Google Verified
              </Badge>
            </div>

            <p className="text-sm text-[rgb(var(--muted))]">
              Real feedback from real clients.
            </p>
          </div>

          {/* Overall rating */}
          <div className="flex items-center gap-3">
            <Stars />
            <div className="text-sm">
              <span className="font-semibold text-[rgb(var(--gold))]">
                4.9
              </span>{" "}
              / 5.0
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {demo.map((r) => (
            <div
              key={r.name}
              className="group relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 transition duration-300 hover:border-[rgb(var(--gold))]/60 hover:shadow-[0_0_40px_rgba(201,162,39,0.08)]"
            >
              {/* Gold glow background */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[rgba(201,162,39,0.15)] blur-3xl opacity-0 transition group-hover:opacity-100" />

              {/* Quote icon */}
              <div className="absolute right-6 top-6 text-[rgba(201,162,39,0.15)] text-6xl font-serif select-none">
                “
              </div>

              <Stars />

              <p className="relative mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
                {r.text}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(201,162,39,0.15)] text-sm font-semibold text-[rgb(var(--gold))]">
                  {r.name.charAt(0)}
                </div>
                <div className="text-sm font-medium">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}