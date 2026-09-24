import Image from "next/image";
import Reveal from "@/components/Reveal";

const PILLARS = ["Energy Efficiency", "Innovation", "Quality Assurance", "Sustainable Communities"];

const PROJECTS = [
  "Peace Towns",
  "Wallace Towns",
  "Peace Plaza",
  "AIMS Dentistry (Sheppard & Garrison)",
  "Springbank Dentistry",
  "MyoHealth Physio",
];

export default function Builder() {
  return (
    <section className="section builder" id="builder">
      <div className="container">
        <Reveal as="p" className="kicker">
          BUILT BY
        </Reveal>
        <Reveal as="h2" className="section-title">
          Meet the <span className="script">Builder</span>
        </Reveal>
        <Reveal as="p" className="section-lede">
          Summer Heaven is brought to you by Trident Builders — architects of
          possibility, creators of dreams, and shapers of the future.
        </Reveal>

        <div className="builder-panel">
          <Reveal as="div" tilt className="builder-card">
            <div className="builder-logo">
              <Image src="/images/trident-logo.png" alt="Trident Builders logo" width={150} height={118} />
            </div>
            <h3 className="builder-name">Trident Builders</h3>
            <p className="builder-about">
              For years, Trident has been crafting extraordinary living and
              working spaces that redefine excellence — blending innovative
              design, energy-efficient construction and genuine craftsmanship
              into every community they build, for new buyers, seasoned
              buyers and investors alike.
            </p>
            <div className="builder-pillars">
              {PILLARS.map((p) => (
                <span key={p}>
                  <span className="hh-dot" />
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="builder-side">
            <Reveal as="div" className="builder-projects">
              <h4>Notable Trident Communities</h4>
              <ul>
                {PROJECTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="div" className="builder-contact">
              <h4>Get in Touch with Trident</h4>
              <p>
                <a href="tel:+16478126372">647.812.6372</a>
              </p>
              <p>
                <a href="mailto:info@trident-builders.ca">info@trident-builders.ca</a>
              </p>
              <p>5306 Creditview Road, Mississauga, ON L5M 5N5</p>
              <a
                className="btn btn-outline"
                href="https://trident-builders.ca/"
                target="_blank"
                rel="noopener"
              >
                Visit Trident Builders
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
