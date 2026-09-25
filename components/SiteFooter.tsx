import Image from "next/image";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image src="/images/logo.png" alt="Summer Heaven" className="brand-logo" width={1159} height={497} />
          <p>
            A new community of pre-construction semi-detached homes, each with a
            legal basement (Banff) apartment, in Wallaceburg, Ontario.
          </p>
        </div>
        <div className="footer-links">
          <h5>Quick Links</h5>
          <a href="/">Home</a>
          <a href="/#tour">Tour</a>
          <a href="/#features">Features</a>
          <a href="/#builder">Builder</a>
          <a href="/#floorplan">Floor Plan</a>
          <a href="/blueprints">Blueprints</a>
          <a href="/#location">Location</a>
          <a href="/#contact">Contact</a>
        </div>
        <div className="footer-contact">
          <h5>Contact</h5>
          <p>
            <a href="mailto:info@summerheaven.ca">info@summerheaven.ca</a>
          </p>
          <p>
            <a href="tel:+15199145496">519.914.5496</a>
          </p>
          <p>800 Elizabeth Street, Wallaceburg, ON</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {year} Summer Heaven. All rights reserved.</p>
        <p className="footer-fine">
          *Prices, specifications, sizes, floor plans and finishes are subject
          to change without notice. All dimensions are approximate and based on
          preliminary building permit drawings, subject to normal construction
          variances. Renderings are artist&apos;s concepts only.
        </p>
      </div>
    </footer>
  );
}
