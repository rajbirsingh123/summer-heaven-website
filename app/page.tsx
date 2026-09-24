import Hero from "@/components/Hero";
import PricingBand from "@/components/PricingBand";
import RoomTour from "@/components/RoomTour";
import Features from "@/components/Features";
import Models from "@/components/Models";
import Builder from "@/components/Builder";
import FloorPlan from "@/components/FloorPlan";
import Drawings from "@/components/Drawings";
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
        <Models />
        <Builder />
        <FloorPlan />
        <Drawings />
        <Location />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
