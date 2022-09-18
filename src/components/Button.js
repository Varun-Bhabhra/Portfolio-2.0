import React from "react";

//Imgs
import arrow from "../img/arrow.svg";

const Button = ({text}) => {
  return (
    <div className="text-center text-primary">
      <a href="/" className="inline-block bg-action font-semibold py-3 lg:py-4 w-full text-sm lg:text-lg rounded-md cursor-pointer hover:tracking-widest lg:hover:tracking-[3px] transition-all">{text} <img src={ arrow } alt="vector" className="inline w-5 h-5 ml-2 lg:ml-4"/></a>
    </div>
  )
};

export default Button;