import React from "react";
// import { useInView } from 'react-intersection-observer';
import PortfolioCard from "./PortfolioCard";
import TechItem from "./TechItem";
import CTA from "./CTA";

// Imgs
import mdp from "../img/mdp.webp";
import portfolioDoodle from "../img/portfolioDoodle.svg";
import ctaDoodle2 from "../img/ctaDoodle2.svg"

const Portfolio = () => {
  return (
    <div id="showcase" className="py-20 text-secondary">
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24">
        <article className="space-y-24 md:space-y-0 md:grid grid-cols-2">
          <div id="header" className="">
            <div className="md:sticky top-36 space-y-12 bg-portfolio-bg bg-contain bg-no-repeat text-center md:text-left">
              <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Portfolio</h2>
              <p className="font-jost font-light text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">I’ve worked with some great companies on exciting projects, but we won’t blab about them all. Here are a few best bits.</p>

              <img src={ portfolioDoodle } alt="doodle" className="mx-auto md:mx-0"/>
              <div className="sm:w-5/6 mx-auto md:mx-0">
                <h2 className="font-light text-xl md:text-2xl lg:text-3xl xl:text-4xl">All the sites are built from scratch in the following stack:</h2>
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
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim."
              href="http://mdpartner.com.au"
              mockup={mdp}
            />
            <PortfolioCard
              head="The Shades of Trades"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim."
              href="http://theshadesoftrades.co.in"
              mockup={mdp}
            />
            <PortfolioCard
              head="Zai Makeover Studio"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim."
              href="http://zaimakeoverstudio.com"
              mockup={mdp}
            />
            <PortfolioCard
              head="Pyalee"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim."
              href="http://pyalee.co.in"
              mockup={mdp}
            />
            <PortfolioCard
              head="Shreya Gupta Portfolio"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim."
              href="http://varunbhabhra.com"
              mockup={mdp}
            />
            <PortfolioCard
              head="Varun Bhabhra Portfolio"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim."
              href="http://varunbhabhra.com"
              mockup={mdp}
            />
          </div>
        </article>

        <CTA
          img={ctaDoodle2}
          head="Redesign Your Existing Website?"
          text="Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals."
        />
      </section>
    </div>
  )
};

export default Portfolio;