"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const SHEETS = [
  {
    src: "/images/drawings/site_plan.jpg",
    caption: "Site Plan & 3D Views — Sheet A1 (1/8\" = 1'-0\")",
    label: "Site Plan & 3D Views",
  },
  {
    src: "/images/drawings/floor_plans.jpg",
    caption: "Basement & Main Floor Plans — Sheet A2 (1/4\" = 1'-0\")",
    label: "Basement & Main Floor Plans",
  },
  {
    src: "/images/drawings/roof_plan.jpg",
    caption: "Roof Plan — Sheet A2.1 (1/4\" = 1'-0\")",
    label: "Roof Plan",
  },
  {
    src: "/images/drawings/elevations_south_north.jpg",
    caption: "South & North Elevations — Sheet A3 (1/4\" = 1'-0\")",
    label: "South & North Elevations",
  },
  {
    src: "/images/drawings/elevations_east_west.jpg",
    caption: "East & West Elevations — Sheet A3.2 (1/4\" = 1'-0\")",
    label: "East & West Elevations",
  },
  {
    src: "/images/drawings/sections.jpg",
    caption: "Building Sections — Sheet A4.1",
    label: "Building Sections",
  },
];

export default function Drawings() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const active = open !== null ? SHEETS[open] : null;

  return (
    <section className="section drawings" id="drawings">
      <div className="container">
        <Reveal as="p" className="kicker">
          STRAIGHT FROM THE BUILDING PERMIT SET
        </Reveal>
        <Reveal as="h2" className="section-title">
          The Real <span className="script">Blueprints</span>
        </Reveal>
        <Reveal as="p" className="section-lede">
          No stock floor plans — these are the actual stamped drawings prepared
          for the Summer Heaven site in Wallaceburg. Click any sheet to view it
          full size.
        </Reveal>
        <div className="drawings-grid">
          {SHEETS.map((sheet, i) => (
            <Reveal
              as="button"
              tilt
              className="dwg-card"
              key={sheet.src}
              onClick={() => setOpen(i)}
            >
              <span className="dwg-thumb">
                <Image src={sheet.src} alt={sheet.label} fill sizes="(max-width: 980px) 50vw, 33vw" style={{ objectFit: "cover", objectPosition: "top" }} />
              </span>
              <span className="dwg-label">{sheet.label}</span>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="img-disclaimer">
          Drawings shown are from the current building permit set, issued for
          review and subject to municipal approval and construction revisions.
          Not for construction use — always refer to the latest stamped set on
          file with the Municipality of Chatham-Kent.
        </Reveal>
      </div>

      <div className={`lightbox${active ? " open" : ""}`} onClick={() => setOpen(null)}>
        <button className="lb-close" aria-label="Close" onClick={() => setOpen(null)}>
          &times;
        </button>
        {active && (
          <figure onClick={(e) => e.stopPropagation()}>
            <Image src={active.src} alt={active.caption} width={1400} height={1000} style={{ width: "auto", height: "auto", maxWidth: "92vw", maxHeight: "78vh", objectFit: "contain" }} />
            <figcaption>{active.caption}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
