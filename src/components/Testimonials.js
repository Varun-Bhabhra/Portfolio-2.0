import React from "react";
// import { useInView } from 'react-intersection-observer';
import Testimonial from "./Testimonial"
import { Carousel } from "flowbite-react";

// Imgs
import testimonialDoodle from "../img/testimonialDoodle.svg";

const Testimonials = () => {

  return (
    <div id="showcase" className="py-20 text-secondary">
      <section id="testimonial" className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24">
        <article className="space-y-24 md:space-y-0 md:grid grid-cols-2 items-center">
          <div id="header" className="">
            <div className="md:sticky top-36 space-y-8 bg-testimonials-bg bg-contain bg-no-repeat text-center md:text-left">
              <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Testimonial</h2>
              <p className="font-jost font-light text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">Have a look what my clients think about my work!</p>

              <img src={ testimonialDoodle } alt="doodle" className="mx-auto md:mx-0"/>
            </div>
          </div>

          <div className="h-[30rem] sm:h-64 xl:h-80 2xl:h-96 dark">
            <Carousel indicators={true} slideInterval={10000}>
              <Testimonial
                img="https://randomuser.me/api/portraits/women/41.jpg"
                name="Apoorva Sharma"
                place="Faridabaad"
                href=""
                text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
              />
              <Testimonial
                img="https://randomuser.me/api/portraits/women/42.jpg"
                name="Aishwarya Ananthraman"
                place="Chennai"
                href=""
                text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
              />
              <Testimonial
                img="https://randomuser.me/api/portraits/women/43.jpg"
                name="Litesh Mehta"
                place="Australia"
                href=""
                text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
              />
            </Carousel>
          </div>
        </article>
      </section>
    </div>
  )
};

export default Testimonials;