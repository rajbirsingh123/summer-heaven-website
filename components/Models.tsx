import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Models() {
  return (
    <section className="section models" id="models">
      <div className="container">
        <Reveal as="p" className="kicker">
          THE HOME DESIGN
        </Reveal>
        <Reveal as="h2" className="section-title">
          Meet the <span className="script">Jasper</span>
        </Reveal>
        <Reveal as="p" className="section-lede">
          A thoughtfully designed semi-detached layout — every Summer Heaven home
          comes with a legal basement apartment included.
        </Reveal>

        <div className="model-panel">
          <Reveal as="div" tilt className="model-media">
            <Image
              src="/images/tour/exterior-dusk.jpg"
              alt="The Jasper model exterior elevation"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <span className="model-badge">Legal Basement Included</span>
          </Reveal>

          <div>
            <h3 className="model-name">The Jasper</h3>
            <p className="model-tagline">A crisp elevation with stone accents and a private rear deck.</p>

            <div className="model-levels">
              <Reveal as="div" className="model-level">
                <h4>
                  Main Level
                  <span className="level-count">1,124 Sq.Ft.</span>
                </h4>
                <p>2 bedrooms and 2 washrooms, with an open living, dining and kitchen area plus attached garage access.</p>
              </Reveal>
              <Reveal as="div" className="model-level">
                <h4>
                  Legal Basement Apartment
                  <span className="level-count">926 Sq.Ft.</span>
                </h4>
                <p>2 additional bedrooms and 2 full washrooms, with its own separate entrance, separate utility meters and separate laundry — built for rental income or multi-generational living.</p>
              </Reveal>
            </div>

            <Reveal as="div" className="model-note">
              <span className="n-dot" />
              <p>An assignment-sale clause is included with every home for added flexibility, and each reservation is secured with only $5,000 down — total deposit is just 5%, payable in easy installments.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
