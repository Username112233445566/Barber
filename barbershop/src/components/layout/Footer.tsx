import Container from "./Container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] bg-black">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {site.name}
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Premium grooming in {site.city}. Haircuts, fades, beards — done
              right.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Contact
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {site.phone}
            </p>
            <a
              className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-300"
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book online (Clover)
            </a>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Social
            </div>
            <div className="flex gap-4 text-sm">
              <a
                className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}