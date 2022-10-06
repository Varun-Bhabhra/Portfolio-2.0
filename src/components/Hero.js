import React from "react";
import Button from "./Button";
import { Link } from "react-scroll";
import { useInView } from 'react-intersection-observer';

// Imgs
import hero_me from "../img/hero_me.webp"
import herobg from "../img/hero_bg.svg"
import herobg2 from "../img/hero_bg2.svg"

const Hero = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView({ triggerOnce: true });
  
  return (
    <div id="showcase" className="pt-28 text-secondary">

      <section id="hero" className="max-w-screen-xl text-left sm:text-left mx-auto px-6 md:px-12 2xl:px-0 grid gap-10 sm:gap-0 justify-items-center items-center sm:grid-flow-col">

        <div className="space-y-4 sm:space-y-8 lg:space-y-12 text-center sm:text-left md:mb-32">
          <h2 ref={myRef} className={`fade-in font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-7xl ${myElementIsVisible ? "headline" : ""}`}>I design & develop <br/> amazing experiences.</h2>
           <p ref={myRef} className={`fade-in font-jost font-normal text-lg xl:text-xl xl:w-4/6 ${myElementIsVisible ? "headline" : ""}`}>I'm Varun a developer & designer from Kolkata, India</p>

          <div ref={myRef} className={`fade-in pt-4 flex flex-col sm:flex-row gap-4 ${myElementIsVisible ? "heroBtn" : ""}`}>
            <Button
              to="contact"
              className="sm:w-3/12 transition-all lg:pt-6 relative z-10"
              text="Hire Me"
            />

            <div className="sm:w-3/12 transition-all lg:pt-6 relative z-10">
              <Link to="portfolio" spy={true} smooth={true} offset={-160} duration={800} target="__blank" className="inline-block text-center text-action border-2 border-action hover:bg-action/10 font-semibold py-3 w-full text-sm lg:text-lg rounded-full cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-action/30 transition-all hover:-translate-y-[2px] duration-200">My Work</Link>
            </div>

          </div>
          <p ref={myRef} className={`fade-in sm:text-sm lg:text-lg ${myElementIsVisible ? "headline" : ""}`}>Looking for my resume? <a href="https://drive.google.com/file/d/1TpoWs_9WP8vOUGg_a1KbOYJGaVmebVd_/view?usp=sharing" target="__blank" id="underline" className="font-bold text-action hover:tracking-wider transition-all"><em>Download Here &#x2197;</em></a></p>
        </div>

        <img src={herobg2} alt="background" className="absolute sm:w-4/6 lg:w-7/12 md:left-12 top-44 scale[1.7] lg:scale100"/>
        <img src={herobg} alt="background" className="absolute sm:w-4/6 lg:w-7/12 md:right-12 bottom-[36rem] sm:bottom-44 scale[1.7] lg:scale100"/>

        <div className="md:-translate-y-28 wrapper">
          <div id="anim">
            <img id="myself" src={ hero_me } alt="Smarty Pants!" width="5081" height="7621" className="foreground w-full h-[40rem] md:h-screen object-cover object-bottom "/>
          </div>
        </div>
      </section>

    </div>
  )
};

export default Hero;