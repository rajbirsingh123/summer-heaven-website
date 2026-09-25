import type { Metadata } from "next";
import Drawings from "@/components/Drawings";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Real Blueprints | Summer Heaven by Trident Builders — Wallaceburg, ON",
  description:
    "The actual stamped building permit drawings for Summer Heaven in Wallaceburg — site plan, floor plans, roof plan, elevations and sections. Click any sheet to zoom and browse the full set.",
};

export default function BlueprintsPage() {
  return (
    <>
      <main>
        <Drawings />
      </main>
      <SiteFooter />
    </>
  );
}
