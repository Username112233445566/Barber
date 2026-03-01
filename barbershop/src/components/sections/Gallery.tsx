import Image from "next/image";
import Container from "@/components/layout/Container";

const imgs = Array.from({ length: 12 }, (_, i) => ({
  src: `/IMG_${7536 + i}.jpg`,
  alt: `Gallery ${i + 1}`,
}));

function Tile({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-[rgba(201,162,39,0.10)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[rgba(201,162,39,0.6)]" />
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
            <p className="text-sm text-[rgb(var(--muted))]">
              Not a grid — an editorial collage.
            </p>
          </div>
          <div className="hidden sm:block text-sm text-[rgb(var(--gold))]">
            Black · Gold · Details
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Tile src={imgs[0].src} alt={imgs[0].alt} className="lg:col-span-7 aspect-[16/10]" />
          <Tile src={imgs[1].src} alt={imgs[1].alt} className="lg:col-span-5 aspect-[16/10]" />

          <Tile src={imgs[2].src} alt={imgs[2].alt} className="lg:col-span-4 aspect-[4/5]" />
          <Tile src={imgs[3].src} alt={imgs[3].alt} className="lg:col-span-4 aspect-[4/5]" />
          <Tile src={imgs[4].src} alt={imgs[4].alt} className="lg:col-span-4 aspect-[4/5]" />
        </div>
      </Container>
    </section>
  );
}