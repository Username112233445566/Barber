import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/data/site";

export default function VideoHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        {/* положи в public/video/hero.mp4 */}
        <source src="/IMG_7538.MOV" type="video/quicktime" />
      </video>

      {/* overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      <div className="absolute -top-24 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[rgba(201,162,39,0.20)] blur-3xl" />

      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl space-y-6">
          <Badge className="border-[rgb(var(--gold))] bg-black text-[rgb(var(--gold))]">
            Based in {site.city}
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Black & Gold. Sharp cuts. Premium vibe.
          </h1>

          <p className="text-base leading-7 text-[rgb(var(--muted))] sm:text-lg">
            Clean fades, classic cuts, beard detailing — book online in seconds.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/site/book" size="lg">
              Book now
            </Button>
            <Button href="/site/services" variant="outline" size="lg">
              View services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}