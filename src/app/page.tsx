import React from "react";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Featured from "@/components/sections/Featured";
import Process from "@/components/sections/Process";
import Profile from "@/components/sections/Profile";
import Frameworks from "@/components/sections/Frameworks";

const Home = () => {
  return (
    <main>
      <Profile />
      <Featured />
      <About />
      <Process />
      <Frameworks />
      <Contact />
    </main>
  );
};

export default Home;
