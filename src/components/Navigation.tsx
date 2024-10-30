import React, { useRef, useEffect } from "react";

import Link from "next/link";

import { gsap } from "gsap";

interface BurguerMenuProps {
  setMobileMenu?: (state: boolean) => void;
  mobileMenu?: boolean;
}

const Navigation: React.FC<BurguerMenuProps> = ({
  setMobileMenu,
  mobileMenu,
}) => {
  const navigator = [
    {
      text: "Featured",
      href: "#featured",
    },
    {
      text: "About",
      href: "#about",
    },
    {
      text: "Process",
      href: "#process",
    },
    {
      text: "Degree/CV",
      href: "#degree",
    },
    {
      text: "Projects",
      href: "#projects",
    },
    {
      text: "Contact",
      href: "#contact",
    },
  ];

  const animate = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const listItems = gsap.utils.toArray(animate.current?.children || []);
    gsap.fromTo(
      listItems,
      { x: -20, opacity: 0 },
      { x: 0, duration: 1.5, opacity: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <ul
      ref={animate}
      className="flex justify-between sm:flex-row flex-col gap-4 mt-5 sm:mt-0"
    >
      {navigator.map((item) => (
        <li
          key={item.text}
          onClick={() => {
            if (setMobileMenu) {
              setMobileMenu(!mobileMenu);
            }
          }}
        >
          <Link href={item.href} className="btn">
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
