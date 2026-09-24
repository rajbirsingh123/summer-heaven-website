"use client";

import {
  useEffect,
  useState,
  createElement,
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

type RevealOwnProps = {
  as?: ElementType;
  tilt?: boolean;
  maxDeg?: number;
  className?: string;
  children?: ReactNode;
};

type RevealProps = RevealOwnProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof RevealOwnProps>;

/**
 * Mirrors the original site's `.reveal` scroll-in animation and `.tilt`
 * mouse-follow tilt/glare effect as a single reusable client wrapper, so
 * section components can stay plain server components.
 */
export default function Reveal({
  as = "div",
  tilt = false,
  maxDeg = 9,
  className = "",
  children,
  ...rest
}: RevealProps) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );

  useEffect(() => {
    if (!node || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(node);
    // Safety net: if the observer never fires (throttled background tab,
    // etc.), still reveal the content rather than leaving it invisible.
    const fallback = setTimeout(() => setVisible(true), 3000);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [node]);

  useEffect(() => {
    if (!tilt || !node) return;
    const el = node;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (prefersReducedMotion || !supportsHover) return;

    let rafId: number | null = null;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * maxDeg * 2;
      const rotateX = (0.5 - py) * maxDeg * 2;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
        el.style.setProperty("--gx", `${px * 100}%`);
        el.style.setProperty("--gy", `${py * 100}%`);
      });
    };
    const onEnter = () => el.classList.add("tilt-active");
    const onLeave = () => {
      el.classList.remove("tilt-active");
      if (rafId) cancelAnimationFrame(rafId);
      el.style.transform = "";
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [tilt, maxDeg, node]);

  const cls = ["reveal", visible ? "in" : "", tilt ? "tilt" : "", className]
    .filter(Boolean)
    .join(" ");

  return createElement(
    as,
    { ref: setNode, className: cls, ...rest } as ComponentPropsWithoutRef<"div">,
    <>
      {children}
      {tilt && <span className="tilt-glare" />}
    </>
  );
}
