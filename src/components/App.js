import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";

const App = () => {

  return (
    <div id="showcase" className="">
      <Navbar />
      <Hero />
      <Services />
      <About />
    </div>
  )
};

export default App;