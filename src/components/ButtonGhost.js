import React from "react";

//Imgs
// import arrowDown from "../img/arrowDown.svg";

const ButtonGhost = ({text, className, href, target}) => {
  return (
    <div className={className}>
      <a href={href} target={target} className="inline-block text-center text-action border-2 border-action hover:bg-action/10 font-semibold py-3 w-full text-sm lg:text-lg rounded-lg cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-action/30 transition-all hover:-translate-y-[2px] duration-200">{text} </a>
    </div>
  )
};

export default ButtonGhost;