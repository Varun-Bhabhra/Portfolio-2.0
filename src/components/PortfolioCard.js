import React from "react";
import ButtonGhost from "./ButtonGhost";

// Imgs

const PortfolioCard = ({ head, para, href,mockup  }) => {
  return (
    <div className="bg-secondary text-primary rounded-2xl sm:w-4/6 md:w-full lg:w-6/6 mx-auto shadow-xl shadow-secondary/30 hover:scale-105 transition duration-200">
      <div className="py-12 px-8 lg:p-12 space-y-6">
        <h2 className="font-bold text-3xl lg:text-4xl">{head}</h2>
        <p className="text-sm md:text-lg font-jost">{para}</p>
        <ButtonGhost
          href={href}
          className="w5/6 sm:w-4/6 transition-all lg:pt-6"
          text="View Live"
          target="__blank"
        />
      </div>
      <div className="group self-start shrink-0 overflow-hidden pt-4 rounded-xl">
        <img src={mockup} alt="Website Mockup" className="hover:scale-rounded-t-xl inset-0 group-hover:scale-110 transition duration-200"/>
      </div>
    </div>
  )
};

export default PortfolioCard;