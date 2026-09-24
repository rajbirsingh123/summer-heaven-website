"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#tour", label: "Tour" },
  { href: "#features", label: "Features" },
  { href: "#models", label: "Models" },
  { href: "#builder", label: "Builder" },
  { href: "#floorplan", label: "Floor Plan" },
  { href: "#drawings", label: "Blueprints" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#home" className="brand">
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
            <a key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-outline header-cta">
          Register Now
        </a>
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
