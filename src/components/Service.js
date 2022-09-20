import React from "react";

const Service = ({img, head, text}) => {
  return (
    <article className="flex flex-col lg:flex-row gap-8 lg:w-11/12 xl:w-9/12 2xl:w-8/12 mx-auto">
      <div className="w-16 lg:w-72">
        <img src={ img } alt="vector" className="drop-shadow-xl"/>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold text-3xl">{ head }</h2>
        <p>{ text }</p>
      </div>
    </article>
  )
};

export default Service;