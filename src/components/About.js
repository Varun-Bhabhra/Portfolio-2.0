import React from "react";
import { useInView } from 'react-intersection-observer';
import ButtonGhost from './ButtonGhost';

// Imgs
import dots from "../img/dots.svg"
import express from "../img/express.svg"
import figma from "../img/figma.svg"
import gh from "../img/gh.svg"
import git from "../img/git.svg"
import html from "../img/html.svg"
import css from "../img/css.svg"
import js from "../img/js.svg"
import nodejs from "../img/nodejs.svg"
import postman from "../img/postman.svg"
import react from "../img/react.svg"
import sass from "../img/sass.svg"
import tailwind from "../img/tailwind.svg"

const About = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div id="showcase" className="py-20 text-secondary">
      <section id="about" className={`max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24`}>
        <section className="space-y-8 md:space-y-0 md:grid sm:grid-cols-2 gap-12">
          <article className="">
            <div id="header" className="bg-skills-bg bg-contain bg-no-repeat bg-center">
              <h2 className="text-center md:text-left font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Skills</h2>
            </div>
            <div ref={myRef} className={`fade-in mt-12 grid grid-flow-row grid-rows-3 grid-cols-4 gap-6 justify-items-center items-center ${myElementIsVisible ? "appear" : ""}`}>
              <img src={html} alt="skill icon" className="w-12"/>
              <img src={js} alt="skill icon" className="w-12"/>
              <img src={react} alt="skill icon" className="w-12"/>
              <img src={nodejs} alt="skill icon" className="w-12"/>
              <img src={css} alt="skill icon" className="w-12"/>
              <img src={tailwind} alt="skill icon" className="w-12"/>
              <img src={sass} alt="skill icon" className="w-12"/>
              <img src={express} alt="skill icon" className="w-12"/>
              <img src={postman} alt="skill icon" className="w-12"/>
              <img src={git} alt="skill icon" className="w-12"/>
              <img src={gh} alt="skill icon" className="w-12"/>
              <img src={figma}alt="skill icon"  className="w-8"/>
            </div>
          </article>

          <article className="flex flex-col md:flex-row">
            <article className="md:p-4 lg:p-6 mb-12 md:mb-0 md:mr-4 bg-secondary rounded-xl md:-translate-x-8"><img src={dots} alt="dots" className="rotate-90 md:rotate-0 mx-auto w-4 md:w-24 lg:w44"/></article>
            <div>
              <div id="header" className="bg-about-bg bg-contain bg-no-repeat bg-center">
                <h2 className="text-center md:text-left font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">About</h2>
              </div>
              <div ref={myRef} className={`fade-in mt-12 space-y-6 text-justify ${myElementIsVisible ? "appear" : ""}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="bg-secondary rounded-xl font-jost text-primary py-8 px-6 md:px-12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl sm:text-4xl">Hey! Take a look at my resume.</h2>
          <ButtonGhost
            className="w-4/6 sm:w-3/6 md:w-5/6 lg:w-2/6 transition-all"
            href="https://drive.google.com/file/d/1TpoWs_9WP8vOUGg_a1KbOYJGaVmebVd_/view?usp=sharing"
            text="Download Resume"
            target="__blank"
            />
        </section>
      </section>
    </div>
  )
};

export default About;