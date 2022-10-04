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

  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});

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
            <article  className="md:p-4 mb-12 md:mb-0 md:mr-4 bg-secondary rounded-full md:-translate-x-5 lg:-translate-x-7"><img src={dots} alt="dots" className="rotate-90 md:rotate-0 mx-auto md:my-44 w-4 md:w-24 lg:w-16"/></article>
            <div>
              <div id="header" className="bg-about-bg bg-contain bg-no-repeat bg-center">
                <h2 className="text-center md:text-left font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">About</h2>
              </div>
              <div ref={myRef} className={`fade-in mt-12 space-y-6 text-justify ${myElementIsVisible ? "appear" : ""}`}>
                <p> Hey! I'm Varun Bhabhra a self-taught developer. Web Development crossed my way about two years ago, and since then I have been coding.
                    In this journey, I have acquired knowledge in HTML, CSS, JavaScript mostly the front end and a bit of server
                    side code with NodeJs. My love and interest in developing and designing has pushed me to excel in these skills
                    which are showcased in some of my projects.
                </p>

                <p>Designing is something that needs patience, effort and time. I am here to provide all of it and make sure that
                  my work becomes my identity. Being a minimalist, my belief is to make things simple and very specific. Speaking
                  of myself, I'm open to learning and working my level best to make the results near to perfect.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="bg-secondary rounded-xl font-jost text-primary py-8 px-6 md:px-12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl sm:text-4xl">Hey! Take a look at my resume.</h2>
          <ButtonGhost
            className="w-4/6 sm:w-3/6 md:w-5/6 lg:w-2/6 transition-all font-poppins"
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