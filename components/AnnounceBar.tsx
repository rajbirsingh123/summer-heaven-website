const ITEMS = [
  "Reserve Your Home with Only $5,000",
  "Total Deposit Just 5% — Easy Installments",
  "Assignment Sale Clause Included",
  "Estimated Occupancy June 2027",
];

export default function AnnounceBar() {
  return (
    <div className="announce-bar">
      <div className="announce-marquee">
        <div className="announce-track">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i}>
              <span className="a-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
