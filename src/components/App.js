import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Environment from "./Environment";
import Footer from "./Footer";

const App = () => {

  return (
    <div id="showcase" className="font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Environment />
      <Footer />
    </div>
  )
};

export default App;