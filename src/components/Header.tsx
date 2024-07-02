import React from "react";
import Link from "next/link";

export default function Header() {
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
      text: "Contact",
      href: "#contact",
    },
  ];
  return (
    <header className="sticky top-0 left-1/2 -translate-x-1/2 w-max bg-white/80 backdrop-blur-sm border-b shadow-md p-5 rounded-full mt-5 z-50">
      <ul className="flex gap-4 ">
        {navigator.map((item) => (
          <li key={item.text}>
            <Link
              href={item.href}
              className="btn"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
