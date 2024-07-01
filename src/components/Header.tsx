import React from "react";

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
            <a
              href={item.href}
              className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-blue-400 before:transition-all before:duration-300 hover:text-blue-400 hover:before:w-full transition-all duration-300 py-1"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
