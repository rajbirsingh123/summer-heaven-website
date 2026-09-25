"use client";

import { useEffect, useRef, useState } from "react";
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

const ZOOM_MIN = 1;
const ZOOM_MAX = 4;
const ZOOM_STEP = 0.5;

export default function Drawings() {
  const [open, setOpen] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const active = open !== null ? SHEETS[open] : null;

  const close = () => setOpen(null);
  const go = (dir: 1 | -1) => {
    if (open === null) return;
    setZoom(1);
    setOpen((open + dir + SHEETS.length) % SHEETS.length);
  };
  const zoomIn = () => setZoom((z) => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2)));
  const zoomOut = () => setZoom((z) => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2)));
  const toggleZoom = () => setZoom((z) => (z > 1 ? 1 : 2.2));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || zoom > 1) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

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
          full size, zoom in and slide through the full set.
        </Reveal>
        <div className="drawings-grid">
          {SHEETS.map((sheet, i) => (
            <Reveal
              as="button"
              tilt
              className="dwg-card"
              key={sheet.src}
              onClick={() => {
                setZoom(1);
                setOpen(i);
              }}
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

      <div className={`lightbox${active ? " open" : ""}`} onClick={close}>
        <button className="lb-close" aria-label="Close" onClick={close}>
          &times;
        </button>

        {active && (
          <>
            <button
              className="lb-nav lb-prev"
              aria-label="Previous sheet"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
            >
              &#8249;
            </button>
            <button
              className="lb-nav lb-next"
              aria-label="Next sheet"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
            >
              &#8250;
            </button>

            <div className="lb-zoom-controls" onClick={(e) => e.stopPropagation()}>
              <button aria-label="Zoom out" onClick={zoomOut} disabled={zoom <= ZOOM_MIN}>
                &minus;
              </button>
              <span>{Math.round(zoom * 100)}%</span>
              <button aria-label="Zoom in" onClick={zoomIn} disabled={zoom >= ZOOM_MAX}>
                +
              </button>
            </div>

            <figure
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className={`lb-frame${zoom > 1 ? " zoomed" : ""}`}>
                <div
                  className="lb-img-wrap"
                  style={{ transform: `scale(${zoom})` }}
                  onClick={toggleZoom}
                >
                  <Image
                    src={active.src}
                    alt={active.caption}
                    width={1400}
                    height={1000}
                    style={{ width: "auto", height: "auto", maxWidth: "92vw", maxHeight: "72vh", objectFit: "contain" }}
                  />
                </div>
              </div>
              <figcaption>
                {active.caption}
                <span className="lb-count">
                  {" "}
                  — Sheet {(open as number) + 1} of {SHEETS.length}
                </span>
              </figcaption>
            </figure>
          </>
        )}
      </div>
    </section>
  );
}
