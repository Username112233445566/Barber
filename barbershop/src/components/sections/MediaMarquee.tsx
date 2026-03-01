"use client";

import Container from "@/components/layout/Container";

const clips = [
  "/IMG_7538.MOV",
  "/IMG_7539.MOV",
  "/IMG_7540.MOV",
  "/IMG_7541.MOV",
  "/IMG_7542.MOV",
  "/IMG_7543.MOV",
  "/IMG_7544.MOV",
  "/IMG_7545.MOV",
];

export default function MediaMarquee() {
  const row = [...clips, ...clips]; // дублируем для бесшовной анимации

  return (
    <section className="py-10">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]">
          <div className="relative">
            <div className="flex gap-3 p-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <div className="flex gap-3 animate-marquee">
                {row.map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    className="h-44 w-64 overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-black"
                  >
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
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </div>
        </div>
      </Container>
    </section>
  );
}