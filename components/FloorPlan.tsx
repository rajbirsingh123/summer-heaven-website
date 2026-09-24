import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function FloorPlan() {
  return (
    <section className="section floorplan" id="floorplan">
      <div className="container floorplan-grid">
        <div className="floorplan-copy">
          <Reveal as="p" className="kicker">
            FLOOR PLAN OVERVIEW
          </Reveal>
          <Reveal as="h2" className="section-title">
            Smart, Spacious <span className="script">Semi-Detached</span> Living
          </Reveal>
          <Reveal as="p" className="section-lede">
            Each Summer Heaven home is one half of a semi-detached pair, with a
            private main floor and an entirely separate legal basement apartment
            below — two full living spaces sharing one address.
          </Reveal>
          <Reveal as="div" className="floorplan-actions">
            <a href="#drawings" className="btn btn-solid">
              View Official Permit Drawings
            </a>
            <a href="#contact" className="btn btn-ghost">
              Request Full Floor Plans
            </a>
          </Reveal>
        </div>
        <Reveal as="div" className="floorplan-table">
          <div className="fp-head">
            <span className="fp-head-label">Reserve With</span>
            <span className="fp-price">$5,000 Down</span>
          </div>

          <div className="fp-highlights">
            <div className="fp-highlight">
              <CountUp value={2050} className="fp-h-num" />
              <span className="fp-h-label">Sq.Ft. Total Living Area</span>
            </div>
            <div className="fp-h-divider"></div>
            <div className="fp-highlight">
              <span className="fp-h-num">
                4&nbsp;<i>/</i>&nbsp;4
              </span>
              <span className="fp-h-label">Bed&nbsp;/&nbsp;Bath — Whole Home</span>
            </div>
          </div>

          <div className="fp-specs">
            <div className="fp-row">
              <span className="fp-dot"></span>
              <span className="fp-label">Main Level — Living, Dining, Kitchen, 2 Bed, 2 Bath</span>
              <span className="fp-val">
                1,124 <i>Sq.Ft.</i>
              </span>
            </div>
            <div className="fp-row">
              <span className="fp-dot"></span>
              <span className="fp-label">Legal Basement Apartment — Living, Kitchen, 2 Bed, 2 Bath</span>
              <span className="fp-val">
                926 <i>Sq.Ft.</i>
              </span>
            </div>
            <div className="fp-row">
              <span className="fp-dot"></span>
              <span className="fp-label">Attached Garage</span>
              <span className="fp-val">
                267 <i>Sq.Ft.</i>
              </span>
            </div>
            <div className="fp-row">
              <span className="fp-dot"></span>
              <span className="fp-label">Separate Entrance, Utility Meters &amp; Laundry (Basement)</span>
              <span className="fp-val">Included</span>
            </div>
            <div className="fp-row">
              <span className="fp-dot"></span>
              <span className="fp-label">Assignment Sale Clause</span>
              <span className="fp-val">Included</span>
            </div>
            <div className="fp-row">
              <span className="fp-dot"></span>
              <span className="fp-label">Estimated Occupancy</span>
              <span className="fp-val">June 2027</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
