import VideoHero from "@/components/sections/VideoHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PricingTable from "@/components/sections/PricingTable";
import Reviews from "@/components/sections/Reviews";
import MediaMarquee from "@/components/sections/MediaMarquee";
import StoryMedia from "@/components/sections/StoryMedia";
import LocationSection from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <main>
      <VideoHero />
      <ServicesGrid />
      <PricingTable />
      <Reviews />
      <MediaMarquee />
      <StoryMedia />
      <LocationSection />
    </main>
  );
}