import React from "react";
// import { useInView } from 'react-intersection-observer';

// Imgs

const TechItem = ({item, className}) => {
  return (
    <span className={`inline-block mt-6 mx-2 rounded-lg py-1 font-jost font-medium px-4  ${className}`}><i className="fa-solid fa-circle text-xs pr-2"></i>{item}</span>
  )
};

export default TechItem;