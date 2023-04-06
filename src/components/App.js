import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
// import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div id="showcase" className="font-poppins">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      {/* <FAQ /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
