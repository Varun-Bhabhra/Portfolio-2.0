import { useInView } from 'react-intersection-observer';
import React from "react";
import { PopupButton } from "react-calendly";
import { Link } from "react-scroll";

// imgs
import newcta_pc from "../img/newcta_pc.webp"
import newcta_phn from "../img/newcta_phn.webp"

const TempCTA = ({ head, text, tags }) => {

  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});

  return (
    
      <div id='new' className="new_cta font-jost text-[#CBCBCB] bg-gradient-to-b md:bg-gradient-to-r from-[#012023] to-[#254447] rounded-3xl mx-6 py-8 px-2 md:px-0 lg:pl-8 flex flex-col-reverse sm:flex-row-reverse gap-12 -translate-y-12 md:-translate-y-24 overflow-hidden">
          
        <img ref={myRef} src={newcta_pc} alt="doodle" className={`fade-in cta_mockup hidden md:block md:w-6/12 drop-shadow-2xl object-cover transition-transform duration-500 ${myElementIsVisible ? "appear" : ""}`} />
        
        <img ref={myRef} src={newcta_phn} alt="doodle" className={`fade-in md:hidden w-5/6 sm:w-2/6 mx-auto drop-shadow-2xl ${myElementIsVisible ? "appear" : ""}`} />
        
      <div ref={myRef} className={`fade-in space-y-4 sm:space-y-20 my-8 sm:w-3/6 md:w-4/6 px-6 lg:px-6 ${myElementIsVisible ? "appear" : ""}`}>
        <div className="space-y-4 -translate-y6">
          <h2 className="cta_headline font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FAFF00] to-[#7AFF53] text-3xl md:text-3xl lg:text-4xl xl:text-5xl uppercase relative z-10">{head}</h2>
          
          <p className="text-sm md:text-base 2xl:text-xl">{text}</p>
          <span className="text-sm 2xl:text-xl text-[#CBCBCB]/40">{tags}</span>
        </div>

        <div className="h-[3rem] md:h-16 xl:h-20 w-4/6 md:w-3/6 rounded-lg bg-gradient-to-r from-[#FAFF00] to-[#7AFF53] p-[2px] ">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={800}>
            <div className='flex h-full w-full items-center justify-center bg-[#012023] back rounded-lg cursor-pointer hover:-translate-y-1 transition-transform'>
              <span className="cta_price font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FAFF00] to-[#7AFF53] text-2xl md:text-2xl lg:text-4xl xl:text5xl">₹ 19,999/-</span>
            </div>
          </Link>
            <PopupButton
              url="https://calendly.com/varunbhabhra/30min"
              rootElement={document.getElementById("root")}
              text="Schedule a call to know more"
              className="py-3 text-xs 2xl:text-lg underline underline-offset-4"
            />
          </div>
        </div>
      </div>
  )
};

export default TempCTA;