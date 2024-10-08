import React, { useState } from "react";

import Navigation from "../Navigation";
import BurguerMunu from "../BurguerMunu";
import ThemeButtons from "../ThemeButtons";

interface ThemeOption {
  theme: string;
  color: string;
}

interface HeaderProps {
  theme: ThemeOption | null;
  setTheme: (theme: ThemeOption) => void;
  themes: ThemeOption[];
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme, themes }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 bg-gradient-to-b from-cardsBg via-cardsBg to-cardsBg/80 shadow-md p-5 z-50">
      <nav className="max-w-3xl mx-auto hidden sm:block">
        <Navigation />
        <ThemeButtons theme={theme} setTheme={setTheme} themes={themes} />
      </nav>
      <nav className="block sm:hidden relative">
        <div className="flex justify-between items-center">
          <BurguerMunu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
          <ThemeButtons theme={theme} setTheme={setTheme} themes={themes} />
        </div>
        {mobileMenu && (
          <Navigation setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
        )}
      </nav>
    </header>
  );
};

export default Header;
