import React from "react";
import { useInView } from 'react-intersection-observer';
import PortfolioCard from "./PortfolioCard";
import TechItem from "./TechItem";
import CTA from "./CTA";

// Imgs
import mdp from "../img/mdp.webp";
import zai from "../img/zai.webp";
import tsot from "../img/tsot.webp";
import pyalee from "../img/pyalee.webp";
import my from "../img/my.webp";
import portfolioDoodle from "../img/portfolioDoodle.svg";
import ctaDoodle2 from "../img/ctaDoodle2.svg"

const Portfolio = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});

  return (
    <div id="showcase" className="py-12 text-secondary">
      <section id="portfolio" className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-32">
        <article className="space-y-24 md:space-y-0 md:grid grid-cols-2">
          <div id="header" className="">
            <div ref={myRef} className={`fade-in md:sticky top-36 space-y-12 bg-portfolio-bg bg-contain bg-no-repeat text-center md:text-left ${myElementIsVisible ? "appear" : ""}`}>
              <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Portfolio</h2>
              <p className="font-jost font-regular text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">I’ve worked with some great clients, but I won’t blab about them all. Here are a few best bits.</p>

              <img src={ portfolioDoodle } alt="doodle" className="mx-auto md:mx-0 -scale-x-100"/>
              <div className="hidden md:block sm:w-5/6 mx-auto md:mx-0">
                <h2 className="font-light text-lg md:text-xl lg:text-2xl xl:text-3xl">All the sites are built from scratch in the following stack:</h2>
                <TechItem
                  item="HTML"
                  className="text-[#E44D26] border-[#E44D26]"
                />
                <TechItem
                  item="CSS"
                  className="text-[#2965F1] border-[#2965F1]"
                />
                <TechItem
                  item="JavaScript"
                  className="text-[#CDB91A] border-[#CDB91A]"
                />
                <TechItem
                  item="React Js"
                  className="text-[#00D8FF] border-[#00D8FF]"
                />
                <TechItem
                  item="Node Js"
                  className="text-[#ABCB9E] border-[#ABCB9E]"
                />
                <TechItem
                  item="Tailwind CSS"
                  className="text-[#16BDB8] border-[#16BDB8]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:px-4">
            <PortfolioCard
              head="My Disability Partner"
              para="MDP's role is to implement the National Disability Insurance Scheme (NDIS), which will support a better life for thousands of Australians with a significant and permanent disability and their families and carers."
              href="http://mdpartner.com.au"
              mockup={mdp}
            />
            <PortfolioCard
              head="The Shades of Trades"
              para="A trading course website which simplifies trading with intrinsic concepts of price action techniques and procedures."
              href="http://theshadesoftrades.co.in"
              mockup={tsot}
            />
            <PortfolioCard
              head="Zai Makeover Studio"
              para="A portfolio and services website of a makeupartist from Chennai."
              href="http://zaimakeoverstudio.com"
              mockup={zai}
            />
            <PortfolioCard
              head="Pyalee"
              para="Landing page for a Tea Bag and Tea Cup company."
              href="http://pyalee.co.in"
              mockup={pyalee}
            />
            <PortfolioCard
              head="Varun Bhabhra Portfolio"
              para="My portfolio having the required information about me and the services I provide."
              href="http://varunbhabhra.com"
              mockup={my}
            />
          </div>

          <div className="md:hidden sm:w-5/6 mx-auto md:mx-0 text-center">
            <h2 className="font-light text-lg md:text-xl lg:text-2xl xl:text-3xl">All the sites are built from scratch in the following stack:</h2>
            <TechItem
              item="HTML"
              className="text-[#E44D26] border-[#E44D26]"
            />
            <TechItem
              item="CSS"
              className="text-[#2965F1] border-[#2965F1]"
            />
            <TechItem
              item="JavaScript"
              className="text-[#CDB91A] border-[#CDB91A]"
            />
            <TechItem
              item="React Js"
              className="text-[#00D8FF] border-[#00D8FF]"
            />
            <TechItem
              item="Node Js"
              className="text-[#ABCB9E] border-[#ABCB9E]"
            />
            <TechItem
              item="Tailwind CSS"
              className="text-[#16BDB8] border-[#16BDB8]"
            />
          </div>
        </article>

        <CTA
          img={ctaDoodle2}
          head="Redesign your existing website?"
          text="Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals."
        />
      </section>
    </div>
  )
};

export default Portfolio;