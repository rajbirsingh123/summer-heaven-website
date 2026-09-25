import Reveal from "@/components/Reveal";

const FEATURES = [
  {
    num: "01",
    title: "Legal Basement (Banff) Apartment",
    body: "A fully self-contained lower-level apartment with its own kitchen, living/dining, two bedrooms and two full washrooms — ideal for extended family or excellent rental-income potential.",
  },
  {
    num: "02",
    title: "Separate Entrance & Utilities",
    body: "A private separate entrance, separate utility meters and separate laundry for the basement apartment, so both households live comfortably and independently.",
  },
  {
    num: "03",
    title: "Sound-Rated Demising Walls",
    body: "STC-51 rated party walls between homes, built with resilient channel and double type-X gypsum board — real privacy between neighbours, not just a marketing line.",
  },
  {
    num: "04",
    title: "Energy-Efficient Construction",
    body: "R-24 fibreglass insulation, an HRV in every suite, drain-water heat recovery, and a ductless heat pump system for efficient year-round comfort.",
  },
  {
    num: "05",
    title: "Modern Kitchen & Finishes",
    body: "Upgraded kitchens, cozy bathrooms and stainless-steel appliances throughout, with numerous quality upgrades included at no extra cost.",
  },
  {
    num: "06",
    title: "Attached Private Garage",
    body: "An attached garage per unit plus a private driveway, with stone and brick veneer exteriors built to stand up to Ontario winters.",
  },
];

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <Reveal as="p" className="kicker">
          WHY SUMMER HEAVEN
        </Reveal>
        <Reveal as="h2" className="section-title">
          One Home. <span className="script">Two Living Spaces.</span> - Banff
        </Reveal>
        <Reveal as="p" className="section-lede">
          Built to Ontario Building Code with a genuinely separate legal basement (Banff)
          apartment — not an afterthought, but part of the original design.
        </Reveal>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <Reveal as="div" tilt className="feature-card" key={f.num}>
              <div className="feature-icon">{f.num}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
