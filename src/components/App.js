import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";

const App = () => {
  return (
    <div id="showcase" className="font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
    </div>
  )
};

export default App;