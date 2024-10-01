"use client";

import { useEffect, useRef, ReactNode } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationsProps {
  children: ReactNode; 
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  const animate = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      animate.current,
      { y: 100 },
      {
        y: 0,
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: animate.current,
          start: "top 100%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, [children]);
  return <div ref={animate}>{children}</div>;
};

export default ScrollAnimations;
