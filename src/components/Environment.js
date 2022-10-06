import React from "react";
import { useInView } from 'react-intersection-observer';

// Imgs
import envDoodle from "../img/envDoodle.svg"

const Environment = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});

  return (
    <div id="showcase" className="pt-24 pb-2 text-secondary">
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0">
        <article ref={myRef} className={`fade-in space-y-24 md:space-y-0 flex flex-col md:flex-row items-center ${myElementIsVisible ? "appear" : ""}`}>
          <div className="space-y-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">For every 5 websites delivered, I plant a tree!</h2>
            <p className="text-3xl font-jost">Share this website if you want me to plant more.</p>
          </div>
          <img src={envDoodle} alt="doodle" className="md:w-3/6 mx-auto"/>
        </article>
      </section>
    </div>
  )
};

export default Environment;