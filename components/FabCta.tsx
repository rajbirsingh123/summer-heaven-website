"use client";

import { useEffect, useState } from "react";

export default function FabCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="/#contact" className={`fab-cta${show ? " show" : ""}`}>
      Register Now
    </a>
  );
}
