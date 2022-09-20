import React from "react";

//Imgs
import arrow from "../img/arrow.svg";

const Button = ({text, classname}) => {
  return (
    <div id="btnDiv" className={classname}>
      <a id="btnAnchor" href="/" className="inline-block text-center text-primary bg-action font-semibold py-3 lg:py-4 w-full text-sm lg:text-lg rounded-md cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-action/30 transition-all">{text} <img id="arr" src={ arrow } alt="vector" className="inline w-5 ml-2 lg:ml-4"/></a>
    </div>
  )
};

export default Button;