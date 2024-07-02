import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Featured from "@/components/sections/Featured";
import Process from "@/components/sections/Process";
import Profile from "@/components/sections/Profile";
import Frameworks from "@/components/sections/Frameworks";

const Home = () => {
  return (
    <main>
      <Header />
      <Profile />
      <Featured />
      <About />
      <Process />
      <Frameworks />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
