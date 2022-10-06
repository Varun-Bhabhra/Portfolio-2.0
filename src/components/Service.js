import React from "react";
import { Link } from "react-scroll";

const Service = ({img, head}) => {
  return (
    <Link to="contact" spy={true} smooth={true} offset={-100} duration={800}><article className="flex flex-col justify-center items-center gap-8 text-center hover:scale-105 transition-all cursor-pointer">
      <img src={ img } alt="vector" className="w-16 mx-auto drop-shadow-xl "/>
      <h2 className="font-semibold text-3xl">{ head }</h2>
    </article></Link>
  )
};

export default Service;