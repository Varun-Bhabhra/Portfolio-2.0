import React from "react";
import Button from "./Button";

// Imgs
import me from "../img/me.webp"
import herobg from "../img/hero_bg.svg"
import herobg2 from "../img/hero_bg2.svg"

const Hero = () => {
  return (
    <div id="showcase" className="pt-32 text-secondary">

      <section className="max-w-screen-xl lg:hscreen text-left sm:text-left mx-auto px-6 md:px-12 2xl:px-0 grid gap-20 sm:gap-0 justify-items-center items-center sm:grid-flow-col">

        <div className="space-y-6 lg:space-y-12 sm:my32">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">A website can be the biggest break for your business</h2>
          <p className="font-jost font-light text-base lg:text-lg xl:text-xl xl:w-3/6">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
          <Button
            classname="sm:w-2/6 lg:pt-6 relative z-10"
            text="Hire Me"
          />
          <div id="btn" className="hidden sm:block">
            <span id="text" className="inline-block uppercase text-xs">Scroll Down <span className="text-3xl inline-block translate-y-2">↓</span></span>
            <span id="link" className="inline-block uppercase text-xs">Scroll Down <span className="text-3xl inline-block translate-y-2">↓</span></span>
          </div>
        </div>

        <img src={herobg2} alt="background" className="absolute sm:w-4/6 lg:w-7/12 md:left-12 top-44 scale[1.7] lg:scale100"/>
        <img src={herobg} alt="background" className="absolute sm:w-4/6 lg:w-7/12 md:right-12 bottom-[36rem] sm:bottom-44 scale[1.7] lg:scale100"/>

        <div className="md:-translate-y-32">
          <div id="anim">
            <img id="myself" src={ me } alt="myself" width="5081" height="7621" className="w-full h-[34rem] md:h-screen object-cover object-center"/>
          </div>
        </div>

        <div id="btn" className="sm:hidden">
          <span id="text" className="inline-block uppercase text-xs">Scroll Down <span className="text-3xl inline-block translate-y-2">↓</span></span>
          <span id="link" className="inline-block uppercase text-xs">Scroll Down <span className="text-3xl inline-block translate-y-2">↓</span></span>
        </div>

      </section>

    </div>
  )
};

export default Hero;