"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/tour/aerial-site.jpg"
      >
        <source src="/video/walkthrough.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className="hero-sound-toggle"
        onClick={toggleSound}
        aria-label={muted ? "Unmute walkthrough video" : "Mute walkthrough video"}
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 9v6h4l5 4V5L8 9H4Z" />
            <path d="M17 8l5 8M22 8l-5 8" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 9v6h4l5 4V5L8 9H4Z" />
            <path d="M16 8.5a4 4 0 0 1 0 7M19 6a8 8 0 0 1 0 12" />
          </svg>
        )}
      </button>
    </>
  );
}
