import React from "react";

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
                    ? "font-bold border border-accent w-6 h-6 scale-125"
                    : "w-6 h-6"
                }
                relative transition duration-700 rounded-md
              `}
          style={{ backgroundColor: themeOption.color }}
        ></button>
      ))}
    </div>
  );
};

export default ThemeButtons;
