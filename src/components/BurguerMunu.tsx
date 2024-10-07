"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface BurguerMenuProps {
  setMobileMenu: (state: boolean) => void;
  mobileMenu: boolean;
}

const BurguerMunu: React.FC<BurguerMenuProps> = ({
  setMobileMenu,
  mobileMenu,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const topLine = useRef<HTMLDivElement>(null);
  const middleLine = useRef<HTMLDivElement>(null);
  const bottomLine = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(topLine.current, { rotate: 45, y: 6, duration: 0.5 });
      gsap.to(bottomLine.current, { rotate: -45, y: -6, duration: 0.5 });
      gsap.to(middleLine.current, { scaleX: 0, duration: 0.5 });
    } else {
      gsap.to(topLine.current, { rotate: 0, y: 0, duration: 0.5 });
      gsap.to(bottomLine.current, { rotate: 0, y: 0, duration: 0.5 });
      gsap.to(middleLine.current, { scaleX: 1, duration: 0.5 });
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!mobileMenu) {
      setMenuOpen(false);
    }
  }, [mobileMenu]);

  return (
    <button
      onClick={() => {
        setMenuOpen(!menuOpen);
        setMobileMenu(!mobileMenu);
      }}
      className="focus:outline-none"
    >
      <div ref={topLine} className="w-5 h-0.5 rounded-full bg-text mb-1"></div>
      <div
        ref={middleLine}
        className="w-3 h-0.5 rounded-full bg-text mb-1"
      ></div>
      <div
        ref={bottomLine}
        className="w-5 h-0.5 rounded-full bg-text mb-1"
      ></div>
    </button>
  );
};

export default BurguerMunu;
