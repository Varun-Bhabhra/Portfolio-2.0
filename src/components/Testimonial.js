import React from "react";
// import { useInView } from 'react-intersection-observer';

// Imgs
import testimonialDoodle from "../img/testimonialDoodle.svg";

const Testimonial = () => {
  return (
    <div id="showcase" className="py-20 text-secondary">
      <section id="testimonial" className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24">
      <article className="space-y-24 md:space-y-0 md:grid grid-cols-2">
          <div id="header" className="">
            <div className="md:sticky top-36 space-y-8 bg-testimonials-bg bg-contain bg-no-repeat text-center md:text-left">
              <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Testimonial</h2>
              <p className="font-jost font-light text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">Have a look what my clients think about my work!</p>

              <img src={ testimonialDoodle } alt="doodle" className="mx-auto md:mx-0"/>
            </div>
          </div>

          <div>

          </div>
        </article>
      </section>
    </div>
  )
};

export default Testimonial;