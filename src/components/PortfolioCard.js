import React from "react";
import ButtonGhost from "./ButtonGhost";
import { useInView } from 'react-intersection-observer';

// Imgs

const PortfolioCard = ({ head, para, href, mockup }) => {
  
  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});

  return (
    <a href={href} target="__blank" className="inline-block">
      <div ref={myRef} className={`fade-in text-secondary rounded-2xl sm:w-4/6 md:w-full lg:w-6/6 mx-auto hover:scale-105 transition duration-200 ${myElementIsVisible ? "appear" : ""}`}>
        <div className="pt-4 rounded-xl">
          <img src={mockup} alt="Website Mockup" className="scale-110"/>
        </div>
        <div className="px-4 lg:px-12 space-y-6">
          <h2 className="font-medium text-3xl lg:text-4xl">{head}</h2>
          <p className="text-sm md:text-lg font-jost">{para}</p>
          <ButtonGhost
            href={href}
            className="w5/6 sm:w-3/6 transition-all lg:pt-6"
            text="View Live"
            target="__blank"
          />
        </div>
      </div>
    </a>
  )
};

export default PortfolioCard;