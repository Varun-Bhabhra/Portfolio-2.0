import React from "react";
import { useInView } from 'react-intersection-observer';
import Testimonial from "./Testimonial"
import { Carousel } from "flowbite-react";

// Imgs
import testimonialDoodle from "../img/testimonialDoodle.svg";
import mdpReview from "../img/mdpReview.webp";
import zaiReview from "../img/zaiReview.webp";

const Testimonials = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});

  return (
    <div id="showcase" className="py-20 text-secondary">
      <section id="testimonial" className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24">
        <article className="space-y-24 md:space-y-0 md:grid grid-cols-2 items-center">
          <div id="header" className="">
            <div className="md:sticky top-36 space-y-8 bg-testimonials-bg bg-contain bg-no-repeat text-center md:text-left">
              <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Testimonial</h2>
              <p className="font-jost font-regular text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">Have a look what my clients think about my work!</p>

              <img ref={myRef} src={ testimonialDoodle } alt="doodle" className={`fade-in mx-auto md:mx-0 ${myElementIsVisible ? "appear" : ""}`}/>
            </div>
          </div>

          <div ref={myRef} className={`fade-in h-[35rem] 2xl:h-[30rem] dark ${myElementIsVisible ? "appear" : ""}`}>
            <Carousel indicators={true} slideInterval={10000}>
              <Testimonial
                img={mdpReview}
                name="Litesh Mehta"
                place="Sydney, Australia"
                href=""
                text="Varun was very helpful and fast to respond to my inquiry. Not only was our experience personal and friendly, the project was delivered on time. The design and performance of the website is just perfect. I can’t recommend him highly enough and we look forward to continuing our working relationship together."
              />
              <Testimonial
                img={zaiReview}
                name="Aishwarya Ananthraman"
                place="Chennai, india"
                href=""
                text="Varun is amazingly talented. He is patient and listens to customers needs and implements it as exactly as it was in the design. I loved working with him. I really thank him so much for developing my dream website so beautiful. I can’t thank you enough for being soo polite, kind and supportive throughout. You are just awesome, way to go! Definitely I am referring him to all of my friends. All the best!"
              />
              <Testimonial
                img="https://randomuser.me/api/portraits/women/41.jpg"
                name="Apoorva Sharma"
                place="Faridabaad, India"
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