"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const ROOMS = [
  {
    src: "/images/street-photo-real.jpg",
    alt: "Real photograph of finished semi-detached homes with brick and stone elevations",
    tag: "Real Photograph",
    title: "Completed Model Row",
    desc: "An actual photo of finished semi-detached homes built to this same standard — real brick, stone and craftsmanship, not a rendering.",
  },
  {
    src: "/images/tour/exterior-dusk.jpg",
    alt: "Exterior elevation still from the Summer Heaven walkthrough animation",
    tag: "From The Walkthrough",
    title: "Exterior Elevation",
    desc: "Board-and-batten and stone accents, an attached garage and a landscaped front yard welcome you home.",
  },
  {
    src: "/images/tour/living-dining.jpg",
    alt: "Open-concept living, dining and kitchen still from the Summer Heaven walkthrough animation",
    tag: "From The Walkthrough",
    title: "Living, Dining & Kitchen",
    desc: "An open-concept main floor with a warm lighting cove, island kitchen and a built-in home-office nook.",
  },
  {
    src: "/images/tour/bedroom-primary.jpg",
    alt: "Primary bedroom still from the Summer Heaven walkthrough animation",
    tag: "From The Walkthrough",
    title: "Primary Bedroom",
    desc: "A bright, calming retreat with room for a full furniture suite and walk-out access.",
  },
  {
    src: "/images/tour/bedroom-second.jpg",
    alt: "Second bedroom still from the Summer Heaven walkthrough animation",
    tag: "From The Walkthrough",
    title: "Second Bedroom",
    desc: "A comfortably sized second bedroom — ideal for a growing family, guests or a home office.",
  },
  {
    src: "/images/aerial-render-real.jpg",
    alt: "Aerial rendering of the Summer Heaven community site plan",
    tag: "Site Plan",
    title: "Aerial Community Plan",
    desc: "16 blocks of semi-detached homes at Elizabeth & Lisgar Street, Wallaceburg.",
  },
];

export default function RoomTour() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section gallery" id="tour">
      <div className="container">
        <Reveal as="p" className="kicker">
          TAKE THE TOUR
        </Reveal>
        <Reveal as="h2" className="section-title">
          Room by <span className="script">Room</span>
        </Reveal>
        <Reveal as="p" className="section-lede">
          A real photo of finished homes, an aerial view of the community, and
          stills pulled straight from our walkthrough animation. Scroll to move
          through the home — the view on the left follows along.
        </Reveal>

        <div className="tour-scroll-grid">
          <div className="tour-media-sticky">
            <div className="tour-media-frame">
              {ROOMS.map((room, i) => (
                <div
                  key={room.src}
                  className={`tour-media-slide${i === active ? " active" : ""}${
                    i % 2 === 0 ? " pan-a" : " pan-b"
                  }`}
                >
                  <Image
                    src={room.src}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
            <div className="tour-media-caption">
              <span className="tour-tag">{ROOMS[active].tag}</span>
              <span className="tour-index">
                0{active + 1} <i>/</i> 0{ROOMS.length}
              </span>
            </div>
          </div>

          <div className="tour-steps">
            {ROOMS.map((room, i) => (
              <div
                key={room.src}
                data-index={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`tour-step${i === active ? " active" : ""}`}
              >
                <span className="tour-step-num">0{i + 1}</span>
                <h3>{room.title}</h3>
                <p>{room.desc}</p>
                <div className="tour-step-media">
                  <Image
                    src={room.src}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 40px), calc(100vw - 64px)"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal as="p" className="img-disclaimer">
          Exterior, living, dining and bedroom images are stills from the
          project&apos;s 3D walkthrough animation and are artist&apos;s concepts
          for illustrative purposes — interior furniture and decor shown are not
          included. The street-view photo shows previously completed homes built
          to the same standard. Actual finishes and streetscape may vary.
        </Reveal>
      </div>
    </section>
  );
}
