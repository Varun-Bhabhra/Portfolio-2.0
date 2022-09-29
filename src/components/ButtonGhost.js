import React from "react";
import { Link } from "react-scroll";

//Imgs
// import arrowDown from "../img/arrowDown.svg";

const ButtonGhost = ({text, className, href, target, to}) => {
  return (
    <div id="btnDiv" className={className}>
      <Link to={to} spy={true} smooth={true} offset={-90} duration={800} id="btnAnchor" href={href} target={target} className="inline-block text-center text-action border-2 border-action hover:bg-action/10 font-semibold py-3 w-full text-sm lg:text-lg rounded-full cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-action/30 transition-all hover:-translate-y-[2px] duration-200">{text} </Link>
    </div>
  )
};

export default ButtonGhost;