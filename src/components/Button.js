import React from "react";
import { Link } from "react-scroll";

//Imgs
// import arrow from "../img/arrow.svg";

const Button = ({ text, className, href, to }) => {
  return (
    <div className={className}>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-90}
        duration={800}
        id="btnAnchor"
        href={href}
        className="inline-block text-center text-primary bg-action border-2 border-action font-semibold py-3 w-full text-sm lg:text-lg rounded-lg cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-action/30 hover:-translate-y-[2px] transition-all duration-200"
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
