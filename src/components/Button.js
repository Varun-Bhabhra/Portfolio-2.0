import React from "react";

//Imgs
import arrow from "../img/arrow.svg";

const Button = ({text, classname}) => {
  return (
    <div className={classname}>
      <a href="/" className="inline-block text-center text-primary bg-action font-semibold py-3 lg:py-4 w-full text-sm lg:text-lg rounded-md cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-md hover:shadow-action transition-all">{text} <img src={ arrow } alt="vector" className="inline w-5 h-5 ml-2 lg:ml-4"/></a>
    </div>
  )
};

export default Button;