import React from "react";
import Button from "./Button";
import { Link } from "react-scroll";
import { useInView } from 'react-intersection-observer';

// Imgs
// import hero_me from "../img/hero_me.webp"
import hero_me2 from "../img/hero_me2.webp"
import mobile_me from "../img/mobile_me.webp"
import herobg from "../img/hero_bg.svg"
import herobg2 from "../img/hero_bg2.svg"


const Hero = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView({ triggerOnce: true });
  
  return (
    <div id="showcase" className="pt-16 text-secondary">

      <section id="hero" className="max-w-screen-xl text-left sm:text-left mx-auto px-6 md:px-12 2xl:px-0 pb-24 sm:pb-0 grid gap10 sm:gap-0 justify-items-center items-center sm:grid-flow-col">

        <div className="order-2 sm:order-1 relative space-y-4 sm:space-y-8 text-center sm:text-left md:mb-32 z-10">
          
          <Link to="new" spy={true} smooth={true} offset={-100} duration={800} className={`fade-in-one text-xs md:text-base inline-block bg-action text-white py-2 px-4 rounded-xl font-base cursor-pointer hover:shadow-lg hover:shadow-action/30 hover:-translate-y-[2px] transition-all ${myElementIsVisible ? "headline" : ""}`}><em>View New Plan</em></Link>
          
          <div className="space-y-4 md:space-y-8">
            <p className={`fade-in-one font-normal text-sm xl:text-xl xl:w-4/6 uppercase ${myElementIsVisible ? "headline" : ""}`}><em>Hello there, My name is <span className="font-bold hover:text-action transition-all">Varun</span></em></p>
            <h2 className={`fade-in-two font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl ${myElementIsVisible ? "headline" : ""}`}>I help brands scale through their websites</h2>
            <p className={`fade-in-three font-light text-sm xl:text-2xl xl:w-6/6 ${myElementIsVisible ? "headline" : ""}`}>that are appealing, brand-accurate, & user-friendly.</p>
          </div>

          <div ref={myRef} className={`fade-in pt-4 flex flex-col sm:flex-row gap-4 ${myElementIsVisible ? "heroBtn" : ""}`}>
            <Button
              to="contact"
              className="sm:w-3/12 transition-all lg:pt-6 relative z-10"
              text="Hire Me"
            />

            <div className="sm:w-3/12 transition-all lg:pt-6 relative z-10">
              <Link to="portfolio" spy={true} smooth={true} offset={-160} duration={800} target="__blank" className="inline-block text-center text-action border-2 border-action hover:bg-action/10 font-semibold py-3 w-full text-sm lg:text-lg rounded-xl cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-action/30 transition-all hover:-translate-y-[2px] duration-200">My Work </Link>
            </div>

          </div>
        </div>
        
          <img src={herobg} alt="background" className="from_right px-2 absolute w-5/6 sm:w-4/6 lg:w-7/12 right-4 md:right-12 bottom-[43rem] sm:bottom-44 scale[1.7] lg:scale100"/>
          <img src={herobg2} alt="background" className="from_left px-2 absolute w-5/6 sm:w-4/6 lg:w-7/12 left-4 md:left-12 top-64 scale[1.7] lg:scale-100 z-0"/>

        <div className="order-1 sm:order-2 md:-translate-y-28 wrapper sm:drop-shadow-2xl sm:pb-14">
          <div id="anim">
            <img id="myself" src={ hero_me2 } alt="Mr. Smarty Pants" width="2236" height="4000" className="hidden sm:block w-full h-[40rem] md:h-[63rem] object-cover"/>
          </div>
            <img id="myself" src={ mobile_me } alt="Mr. Smarty Pants" className="sm:hidden w-full h-[20rem] scale-110 drop-shadow-xl object-cover"/>
        </div>
      </section>
    </div>
  )
};

export default Hero;