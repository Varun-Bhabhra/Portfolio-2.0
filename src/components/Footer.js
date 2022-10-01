import React from "react";
import { useInView } from 'react-intersection-observer';

// Imgs
import demo from "../img/demo_comp.webp"

const Footer = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});

  return (
    <div id="showcase" className="text-primary">
      <section className="bg-secondary">
        <article className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24">
          <section ref={myRef} className={`fade-in py-12 ${myElementIsVisible ? "appear" : ""}`}>
            <article className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
              <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                <img src={demo} alt="Sexy Pants!" className="w-16 h-16 rounded-full object-cover object-center border-2 border-primary" />
                <h2 className="font-light">Designed & Developer with love by <span className="block font-semibold">Varun Bhabhra</span></h2>
              </div>
              <div className="uppercase font-semibold grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6 md:gap-12">
                <a href="https://www.instagram.com/varun_frontend_dev/" target="__blank" className="hover:text-action transition-colors">Instagram</a>
                <a href="https://twitter.com/VBhabhra" target="__blank" className="hover:text-action transition-colors">Twitter</a>
                <a href="https://github.com/Varun-Bhabhra" target="__blank" className="hover:text-action transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/varun-bhabhra-845777210/" target="__blank" className="hover:text-action transition-colors">LinkedIn</a>
              </div>
            </article>

            <hr className="border-primary rounded-full my-10" />

            <p className="text-center">All rights reserved | Copyright © 2022 Varun Bhabhra</p>

          </section>
        </article>
      </section>
    </div>
  )
};

export default Footer;