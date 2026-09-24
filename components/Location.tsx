import type { ReactNode } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const ICONS: Record<string, ReactNode> = {
  school: (
    <path d="M12 3 2 8l10 5 8-4.2V15h1.5V8L12 3Zm-6 8.2V15c0 2 3 4 6 4s6-2 6-4v-3.8L12 15l-6-3.8Z" />
  ),
  downtown: (
    <path d="M4 21V9l5-3v3l5-3v6h2v9H4Zm2-2h2v-2H6v2Zm0-4h2v-2H6v2Zm4 4h2v-2h-2v2Zm0-4h2v-2h-2v2Zm4 4h4v-3h-4v3Z" />
  ),
  coffee: (
    <path d="M4 3h13v2h1.5A2.5 2.5 0 0 1 21 7.5v2A2.5 2.5 0 0 1 18.5 12H17c-.4 3.4-3.3 6-6.8 6H8c-3.9 0-7-3.1-7-7V3h3Zm13 4v3h1.5c.8 0 1.5-.7 1.5-1.5v-2c0-.8-.7-1.5-1.5-1.5H17ZM3 19h12v2H3v-2Z" />
  ),
  hospital: (
    <path d="M11 2h2v4h4v2h-4v4h-2V8H7V6h4V2ZM4 12h16v9a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1v-9Z" />
  ),
  pool: (
    <path d="M4 18c1.3 0 1.3-1 2.6-1s1.3 1 2.6 1 1.3-1 2.6-1 1.3 1 2.6 1 1.3-1 2.6-1 1.3 1 2.6 1v2c-1.3 0-1.3 1-2.6 1s-1.3-1-2.6-1-1.3 1-2.6 1-1.3-1-2.6-1-1.3 1-2.6 1-1.3-1-2.6-1v-2Zm7-16 3 5h-2v6h-2V7H8l3-5Z" />
  ),
  river: (
    <path d="M4 6c1.3 0 1.3 1.2 2.6 1.2S7.9 6 9.2 6s1.3 1.2 2.6 1.2S13.1 6 14.4 6s1.3 1.2 2.6 1.2S18.3 6 19.6 6l.4 1.9c-1.3 0-1.3 1.2-2.6 1.2S16.1 7.9 14.8 7.9s-1.3 1.2-2.6 1.2S10.9 7.9 9.6 7.9 8.3 9.1 7 9.1 5.7 7.9 4.4 7.9L4 6Zm0 6c1.3 0 1.3 1.2 2.6 1.2s1.3-1.2 2.6-1.2 1.3 1.2 2.6 1.2 1.3-1.2 2.6-1.2 1.3 1.2 2.6 1.2 1.3-1.2 2.6-1.2l.4 1.9c-1.3 0-1.3 1.2-2.6 1.2s-1.3-1.2-2.6-1.2-1.3 1.2-2.6 1.2-1.3-1.2-2.6-1.2-1.3 1.2-2.6 1.2S5.7 13.1 4.4 13.1L4 12Z" />
  ),
};

const PINS = [
  {
    key: "school",
    title: "Wallaceburg District Secondary School",
    sub: "A short walk on University Ave",
  },
  {
    key: "downtown",
    title: "Downtown Wallaceburg",
    sub: "Shops, dining & Town Hall along Dufferin Ave",
  },
  {
    key: "coffee",
    title: "Tim Hortons",
    sub: "Steps away on Dufferin Ave",
  },
  {
    key: "hospital",
    title: "Chatham-Kent Health Alliance — Wallaceburg Site",
    sub: "Margaret Ave, open 24 hours",
  },
  {
    key: "pool",
    title: "Wallaceburg Sydenham District Pool",
    sub: "Just around the corner on Elgin St",
  },
  {
    key: "river",
    title: "Crothers Park Trail",
    sub: "Scenic walking trail along the Sydenham River",
  },
] as const;

export default function Location() {
  return (
    <section className="section location" id="location">
      <div className="container location-content">
        <Reveal as="p" className="kicker">
          LOCATION &amp; NEIGHBOURHOOD
        </Reveal>
        <Reveal as="h2" className="section-title">
          Explore the <span className="script">Neighbourhood</span>
        </Reveal>
        <Reveal as="p" className="section-lede">
          32 new homes at Elizabeth Street &amp; Lisgar Street, Wallaceburg — real
          places, minutes from your front door.
        </Reveal>

        <Reveal as="div" className="location-map-hero">
          <Image
            src="/images/location-map.jpg"
            alt="Aerial map of Wallaceburg showing the Jasper Model site at Elizabeth &amp; Lisgar Street with nearby Downtown Wallaceburg, Tim Hortons, Wallaceburg District Secondary School, Chatham-Kent Health Alliance, Wallaceburg Sydenham District Pool and the Sydenham River waterfront"
            width={1672}
            height={941}
            sizes="(max-width: 980px) 100vw, 1180px"
          />
        </Reveal>

        <Reveal as="div" className="neighbourhood-panel">
          {PINS.map((pin) => (
            <div className="neighbourhood-pin" key={pin.key}>
              <span className="pin-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  {ICONS[pin.key]}
                </svg>
              </span>
              <h4>{pin.title}</h4>
              <p>{pin.sub}</p>
            </div>
          ))}
        </Reveal>

        <Reveal as="div" className="map-card">
          <div className="map-card-head">
            <div>
              <h4>Find Us — Elizabeth Street &amp; Lisgar Street</h4>
              <p>800 Elizabeth Street, Wallaceburg, ON N8A 3A3</p>
            </div>
            <a
              className="btn btn-solid"
              href="https://www.google.com/maps/dir/?api=1&destination=800+Elizabeth+St,+Wallaceburg,+ON+N8A+3A3"
              target="_blank"
              rel="noopener"
            >
              Get Directions
            </a>
          </div>
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps?q=800+Elizabeth+St,+Wallaceburg,+ON+N8A+3A3&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Map of Summer Heaven at Elizabeth Street and Lisgar Street, Wallaceburg, ON"
            ></iframe>
          </div>
        </Reveal>

        <Reveal as="p" className="img-disclaimer">
          Nearby places are shown for general orientation based on their real,
          current locations in Wallaceburg and are not affiliated with Summer
          Heaven. Refer to the registered plan of subdivision for exact lot
          boundaries and dimensions.
        </Reveal>
      </div>
    </section>
  );
}
