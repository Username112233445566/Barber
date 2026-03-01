import LocationSection from "@/components/sections/LocationSection";
import Container from "@/components/layout/Container";

export default function LocationsPage() {
  return (
    <main className="py-10">
      <Container className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Locations</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Find us and get directions.
        </p>
      </Container>

      <LocationSection />
    </main>
  );
}