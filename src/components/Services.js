import React from "react";
import Service from "./Service";
import Button from "./Button";
import CTA from "./CTA";

// Imgs
import dev from "../img/dev.png"
import ui from "../img/ui.png"
import ux from "../img/ux.png"
import content from "../img/content.png"
import ctaDoodle1 from "../img/ctaDoodle1.svg"

const Services = () => {
  return (
    <div id="showcase" className="py-20 text-secondary">
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-24">

        <div id="header" className="space-y-6">
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Services</h2>
          <p className="font-jost text-center font-light text-base lg:text-lg xl:text-xl sm:w-3/6 lg:w-2/6 mx-auto">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
        </div>

        <div className="grid gap-24 md:grid-flow-auto md:grid-cols-2">
          <Service
            img={dev}
            head="Web Development"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
          />
          <Service
            img={ui}
            head="UI Design"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
          />
          <Service
            img={ux}
            head="UX Design"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
          />
          <Service
            img={content}
            head="Content Writing"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
          />
        </div>

        <div className="">
          <Button
            classname="sm:w-2/6 md:w-3/12 mx-auto lg:pt-6 relative z-10"
            text="Get a quotation"
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