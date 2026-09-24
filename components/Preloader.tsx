"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onLoad = () => setTimeout(() => setHidden(true), 300);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    const fallback = setTimeout(() => setHidden(true), 1800);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div id="preloader" className={hidden ? "hidden" : ""}>
      <div className="preloader-mark">SUMMER HEAVEN</div>
    </div>
  );
}
