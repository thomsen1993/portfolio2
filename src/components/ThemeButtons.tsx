import React from "react";

import { IoIosColorPalette } from "react-icons/io";
import { CiDark, CiLight } from "react-icons/ci";

interface ThemeOption {
  theme: string;
  color: string;
}

interface ThemeProps {
  theme: ThemeOption | null;
  setTheme: (theme: ThemeOption) => void;
  themes: ThemeOption[];
}

const ThemeButtons: React.FC<ThemeProps> = ({ theme, setTheme, themes }) => {
  return (
    <div className="flex items-center gap-4 sm:mt-5">
      <p>Theme: </p>
      {themes.map((themeOption, index) => (
        <button
          key={index}
          onClick={() => setTheme(themeOption)}
          className={`
                ${
                  theme?.theme === themeOption.theme
                    ? "borde border-accent shadow-sm shadow-accent scale-125"
                    : ""
                }
                transition duration-700 rounded-md p-0.5
              `}
          style={{ color: themeOption.color }}
        >
          {themeOption.theme === "dark" ? (
            <CiDark className="text-text"/>
          ) : themeOption.theme === "light" ? (
            <CiLight className="text-text"/>
          ) : (
            <IoIosColorPalette />
          )}
        </button>
      ))}
    </div>
  );
};

export default ThemeButtons;
