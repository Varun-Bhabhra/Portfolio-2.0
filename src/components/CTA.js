import React from "react";
import Button from "./Button";

const CTA = ({ img, head, text }) => {
  return (
    <div className="bg-extra rounded-xl mx-auto py-8 px-8 flex flex-col sm:flex-row-reverse gap-12">
      <img src={img} alt="doodle" className="sm:w-3/6 md:w-5/12 drop-shadow-2xl"/>
      <div className="space-y-8 my-auto sm:w-3/6 md:w-4/6 lg:px-6">
        <h2 className="font-bold text-4xl xl:text-5xl 2xl:text6xl uppercase">{ head }</h2>
        <p className="font-jost 2xl:text-xl">{ text }</p>
        <Button
            classname="w-full sm:w-3/6 lg:w-3/6 lg:pt-6"
            text="Book a call"
          />
      </div>
    </div>
  )
};

export default CTA;