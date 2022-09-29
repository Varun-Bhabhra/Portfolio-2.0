import React from "react";
import Button from "./Button";
import ButtonGhost from "./ButtonGhost";

// Imgs
// import me from "../img/me.webp"
import ctaDoodle1 from "../img/ctaDoodle1.svg"
import herobg from "../img/hero_bg.svg"
import herobg2 from "../img/hero_bg2.svg"

const Hero = () => {
  return (
    <div id="showcase" className="pt-32 text-secondary">

      <section id="hero" className="max-w-screen-xl text-left sm:text-left mx-auto px-6 md:px-12 2xl:px-0 grid gap-20 sm:gap-0 justify-items-center items-center sm:grid-flow-col">

        <div className="space-y-8 lg:space-y-12 text-center sm:text-left md:mb-32">
          <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-7xl leading-snug">A website can be the biggest break for your business</h2>
          <p className="font-jost font-light text-lg xl:text-xl xl:w-4/6">Hola! I'm Varun a self-taught developer driven my curiosity, based in Kolkata, India.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="w5/6 sm:w-3/12 transition-all lg:pt-6 relative z-10"
              text="Hire Me"
            />
            <ButtonGhost
              className="w5/6 sm:w-3/12 transition-all lg:pt-6 relative z-10"
              text="Reviews"
            />
          </div>
          {/* <div id="btn" className="hidden sm:block">
            <span id="text" className="inline-block uppercase text-xs">Scroll Down <span className="text-3xl inline-block translate-y-2">↓</span></span>
            <span id="link" className="inline-block uppercase text-xs">Scroll Down <span className="text-3xl inline-block translate-y-2">↓</span></span>
          </div> */}
        </div>

        <img src={herobg2} alt="background" className="absolute sm:w-4/6 lg:w-7/12 md:left-12 top-44 scale[1.7] lg:scale100"/>
        <img src={herobg} alt="background" className="absolute sm:w-4/6 lg:w-7/12 md:right-12 bottom-[36rem] sm:bottom-44 scale[1.7] lg:scale100"/>

        <div className="md:-translate-y-32 ">
          <div id="anim">
            <img id="myself" src={ ctaDoodle1 } alt="Smarty Pants!" width="5081" height="7621" className="w-full h-[40rem] md:h-screen object-cover object-center"/>
          </div>
        </div>

        {/* <div id="btn" className="sm:hidden">
          <span id="text" className="inline-block uppercase text-xs">Scroll Down <span className="text-3xl inline-block translate-y-2">↓</span></span>
          <span id="link" className="inline-block uppercase text-xs">Scroll Down <span className="text-3xl inline-block translate-y-2">↓</span></span>
        </div> */}

      </section>

    </div>
  )
};

export default Hero;