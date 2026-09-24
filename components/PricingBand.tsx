import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v20M17 5.5c0-1.9-2.2-3.5-5-3.5S7 3.6 7 5.5 9.2 9 12 9s5 1.6 5 3.5-2.2 3.5-5 3.5-5-1.6-5-3.5" />
      </svg>
    ),
    num: "$5,000",
    label: "To Reserve Your Home",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 19h16M4 19V9l8-5 8 5v10M9 19v-6h6v6" />
      </svg>
    ),
    num: "5% Total",
    label: "Deposit — Easy Installments",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V7l8-4z" />
      </svg>
    ),
    num: "Included",
    label: "Assignment Sale Clause",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="16" rx="1.5" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
    num: "June 2027",
    label: "Estimated Occupancy",
  },
];

export default function PricingBand() {
  return (
    <section className="pricing-band">
      <div className="container">
        <Reveal as="div" className="pricing-grid">
          {ITEMS.map((item) => (
            <div className="pricing-item" key={item.label}>
              <span className="pricing-icon">{item.icon}</span>
              <span className="pricing-num">{item.num}</span>
              <span className="pricing-label">{item.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
