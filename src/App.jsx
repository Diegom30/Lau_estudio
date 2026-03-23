import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

import Studio from "./Components/Studio";

import Contac from "./Components/Contac";
import Academia from "./Components/Academia";
import Testimonials from "./Components/Testimonials";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className="relative w-full min-h-screen bg-cover bg-no-repeat bg-[url('/src/assets/background.jpeg')] bg-right md:bg-center">
        <Header />
        {/* overlay oscuro */}
        <div
          className="absolute inset-0 
  bg-linear-to-t from-black/80 via-black/50 to-transparent 
  md:bg-linear-to-r md:from-black/80 md:via-black/40 md:to-transparent"
        ></div>

        {/* contenido */}
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      <Academia />
      <Studio />
      <Testimonials />
      <Contac />
    </div>
  );
};

export default App;
