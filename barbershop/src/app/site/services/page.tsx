import PricingTable from "@/components/sections/PricingTable";
import Container from "@/components/layout/Container";

export default function ServicesPage() {
  return (
    <main className="py-10">
      <Container className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Browse pricing and book each service online.
        </p>
      </Container>

      <PricingTable />
    </main>
  );
}