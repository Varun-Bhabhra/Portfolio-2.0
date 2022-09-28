import React from "react";

//Imgs
// import arrow from "../img/arrow.svg";

const Button = ({text, className, href}) => {
  return (
    <div id="btnDiv" className={className}>
      <a id="btnAnchor" href={href} className="inline-block text-center text-primary bg-action border-2 border-action font-semibold py-3 w-full text-sm lg:text-lg rounded-full cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-action/30 hover:-translate-y-[2px] transition-all duration-200">{text}</a>
    </div>
  )
};

export default Button;