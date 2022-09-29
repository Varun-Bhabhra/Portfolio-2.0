import React from "react";
// import { useInView } from 'react-intersection-observer';
import PortfolioCard from "./PortfolioCard";
import TechItem from "./TechItem";

// Imgs
import mdp from "../img/mdp.webp";
import portfolioDoodle from "../img/portfolioDoodle.svg";

const Portfolio = () => {
  return (
    <div id="showcase" className="py-20 text-secondary">
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24 md:space-y-0 md:grid grid-cols-2">
        
        <article id="header" className="">
          <div className="md:sticky top-20 space-y-12 bg-portfolio-bg bg-contain bg-no-repeat text-center md:text-left">
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
        </article>

        <article className="space-y-12 px-4">
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
        </article>
      </section>
    </div>
  )
};

export default Portfolio;