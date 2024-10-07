"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationsProps {
  children: ReactNode;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  const bounce = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      bounce.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bounce.current,
          start: "top 100%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, [children]);

  return <div ref={bounce}>{children}</div>;
};

export default ScrollAnimations;
