"use client";

import { useState, useEffect } from "react";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Featured from "@/components/sections/Featured";
import Process from "@/components/sections/Process";
import Profile from "@/components/sections/Profile";
import Frameworks from "@/components/sections/Frameworks";
import Degree from "@/components/sections/Degree";
import Projects from "@/components/sections/Projects";

interface Theme {
  theme: string;
  color: string;
}

const themes: Theme[] = [
  { theme: "dark", color: "black" },
  { theme: "light", color: "gray" },
  { theme: "red", color: "red" },
  { theme: "olive", color: "olive" },
];

const Home = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      const parsedTheme = themes.find(t => t.theme === storedTheme); 
      if (parsedTheme) {
        setTheme(parsedTheme); 
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(themes.find(t => t.theme === "dark") || themes[0]);
    } else {
      setTheme(themes.find(t => t.theme === "light") || themes[1]);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add(theme.theme);
      localStorage.setItem("theme", theme.theme); 

      return () => {
        document.documentElement.classList.remove(theme.theme);
      };
    }
  }, [theme]);

  return (
    <main
      className={`bg-background text-text ${theme?.theme} transition-colors duration-700`}
    >
      <Header theme={theme} setTheme={setTheme} themes={themes} />
      <Profile />
      <Featured />
      <About />
      <Process />
      <Frameworks />
      <Degree />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
