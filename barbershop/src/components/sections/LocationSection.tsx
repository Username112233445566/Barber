import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { locations } from "@/data/locations";

export default function LocationSection() {
  const loc = locations[0];

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Location
            </h2>
            <div className="text-sm text-zinc-600 dark:text-zinc-300">
              <div className="font-medium text-zinc-950 dark:text-zinc-50">
                {loc.name}
              </div>
              {loc.addressLines.map((l) => (
                <div key={l}>{l}</div>
              ))}
              <div className="mt-2">{loc.phone}</div>
            </div>

            <div className="grid gap-2 pt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {loc.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-8">
                  <span>{h.label}</span>
                  <span className="text-zinc-900 dark:text-zinc-100">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <Button href={loc.bookingUrl} target="_blank" rel="noreferrer">
                Book online
              </Button>
              <Button
                href={loc.directionsUrl}
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </Button>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:max-w-xl">
            <div className="aspect-[16/10]">
              <iframe
                title="Map"
                src={loc.mapEmbedUrl}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}