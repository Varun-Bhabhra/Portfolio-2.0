import React from "react";
import { useInView } from 'react-intersection-observer';
import Service from "./Service";
import Button from "./Button";
import CTA from "./CTA";

// Imgs
import dev from "../img/dev.webp"
import ui from "../img/ui.webp"
import ux from "../img/ux.webp"
import content from "../img/content.webp"
import ctaDoodle1 from "../img/ctaDoodle1.svg"

const Services = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});

  return (
    <div id="showcase" className="py-20 text-secondary">
      <section id="services" className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-32">

        <div id="header" className="space-y-6 bg-services-bg bg-contain bg-no-repeat">
          <h2 className="text-center font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Services</h2>
          <p className="font-jost text-center font-light text-base lg:text-lg sm:w-3/6 lg:w-2/6 mx-auto">Below are all the services I am providing.</p>
        </div>

        <div ref={myRef} className={`fade-in grid gap-20 md:grid-flow-auto md:grid-cols-2 ${myElementIsVisible ? "appear" : ""}`}>
          <Service
            img={dev}
            head="Web Development"
            text="I develop websites that help you connect with your customers. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
          />
          <Service
            img={ui}
            head="UI Design"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
          />
          <Service
            img={ux}
            head="UX Design"
            text="I design your website to be as easy to use as possible while guiding users towards the end goal. Putting the user’s experience first, whether they’re looking to subscribe, trying to contact you, or just gathering information, will ensure more loyal users increasing long term sales."
          />
          <Service
            img={content}
            head="Content Writing"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
          />
        </div>

        <div className="">
          <Button
            to="contact"
            className="sm:w-2/6 md:w-3/12 mx-auto lg:pt-6 relative z-10"
            text="Ask for quotation"
          />
        </div>

        <CTA
          img={ctaDoodle1}
          head="Where do we start?"
          text="Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals."
        />
      </section>
    </div>
  )
};

export default Services;