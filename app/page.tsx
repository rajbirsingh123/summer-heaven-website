import Hero from "@/components/Hero";
import PricingBand from "@/components/PricingBand";
import RoomTour from "@/components/RoomTour";
import Features from "@/components/Features";
import Builder from "@/components/Builder";
import FloorPlan from "@/components/FloorPlan";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PricingBand />
        <RoomTour />
        <Features />
        <Builder />
        <FloorPlan />
        <Location />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
