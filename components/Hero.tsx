import Reveal from "@/components/Reveal";
import HeroVideo from "@/components/HeroVideo";
import CountUp from "@/components/CountUp";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <HeroVideo />
        <div className="hero-scrim"></div>
      </div>
      <div className="container hero-content">
        <Reveal as="p" className="eyebrow">
          NOW SELLING — WALLACEBURG, ONTARIO
        </Reveal>
        <Reveal as="h1" className="hero-title">
          Summer<span className="script">Heaven</span>
          <br />
          Your Wait Is Over
        </Reveal>
        <Reveal as="p" className="hero-lede">
          Brand-new, pre-construction semi-detached homes where comfortable living
          meets smart investment. Banff home includes a legal basement (Banff) apartment
          with its own entrance, utilities and laundry — excellent rental-income
          potential that helps cover a major portion of your mortgage.
        </Reveal>
        <Reveal as="div" className="hero-highlights">
          <span>
            <span className="hh-dot"></span>Legal Basement (Banff) Apartment
          </span>
          <span>
            <span className="hh-dot"></span>2 Bed / 2 Bath Per Level
          </span>
          <span>
            <span className="hh-dot"></span>Separate Entrance &amp; Utilities
          </span>
          <span>
            <span className="hh-dot"></span>Modern Kitchen &amp; Stainless Appliances
          </span>
        </Reveal>
        <Reveal as="div" className="hero-actions">
          <a href="#contact" className="btn btn-solid">
            Reserve With $5,000
          </a>
          <a href="#tour" className="btn btn-ghost">
            <span className="ic">&#8595;</span> Watch The Walkthrough
          </a>
        </Reveal>
      </div>
      <Reveal as="div" className="stat-strip">
        <div className="container stat-grid">
          <div className="stat">
            <CountUp value={926} className="stat-num" />
            <span className="stat-label">Sq.Ft. Basement Apartment</span>
          </div>
          <div className="stat">
            <CountUp value={1124} className="stat-num" />
            <span className="stat-label">Sq.Ft. Main Floor</span>
          </div>
          <div className="stat">
            <CountUp value={267} className="stat-num" />
            <span className="stat-label">Sq.Ft. Attached Garage</span>
          </div>
          <div className="stat">
            <CountUp value={2050} className="stat-num" />
            <span className="stat-label">Sq.Ft. Total Living Area</span>
          </div>
        </div>
      </Reveal>
      <a href="#tour" className="scroll-cue" aria-label="Scroll to explore">
        <span></span>
      </a>
    </section>
  );
}
