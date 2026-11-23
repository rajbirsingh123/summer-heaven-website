"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/#tour", label: "Tour" },
  { href: "/#features", label: "Features" },
  { href: "/#builder", label: "Builder" },
  { href: "/#floorplan", label: "Floor Plan" },
  { href: "/blueprints", label: "Blueprints" },
  { href: "/#location", label: "Location" },
  { href: "/#contact", label: "Contact" },
];

const HOMEOWNERS_URL = "https://summer-heaven-portal.netlify.app/";

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 11.5 12 4l8 7.5M6 10v9h12v-9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="/" className="brand">
          <Image
            src="/images/logo.png"
            alt="Summer Heaven"
            className="brand-logo"
            width={1159}
            height={497}
            priority
          />
        </a>

        <nav className={`main-nav${navOpen ? " open" : ""}`} id="mainNav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeNav}>
              {link.label}
            </a>
          ))}

          <div className="mobile-nav-actions">
            <a
              href={HOMEOWNERS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost header-homeowners"
              onClick={closeNav}
            >
              <HouseIcon />
              Homeowners
            </a>
            <a href="/#contact" className="btn btn-solid" onClick={closeNav}>
              Register Now
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <a
            href={HOMEOWNERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost header-homeowners"
          >
            <HouseIcon />
            Homeowners
          </a>
          <span className="nav-divider" aria-hidden="true"></span>
          <a href="/#contact" className="btn btn-solid header-cta">
            Register Now
          </a>
        </div>

        <button
          className={`nav-toggle${navOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
