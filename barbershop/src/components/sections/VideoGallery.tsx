import Container from "@/components/layout/Container";

const videos = [
  "/IMG_7538.MOV",
  "/IMG_7539.MOV",
  "/IMG_7540.MOV",
  "/IMG_7541.MOV",
  "/IMG_7542.MOV",
  "/IMG_7543.MOV",
  "/IMG_7544.MOV",
  "/IMG_7545.MOV",
  "/IMG_7556.MOV",
  "/IMG_7557.MOV",
  "/IMG_7558.MOV",
  "/IMG_7559.MOV",
];

export default function VideoGallery() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Moments</h2>
          <p className="text-sm text-[rgb(var(--muted))]">
            Real clips from the shop.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]"
            >
              <div className="aspect-[4/5]">
                <video
                  className="h-full w-full object-cover"
                  src={src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}