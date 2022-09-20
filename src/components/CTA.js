import React from "react";
import Button from "./Button";

const CTA = ({ img, head, text }) => {
  return (
    <div className="bg-extra rounded-xl sm:w-5/6 mx-auto p-6 flex flex-col md:flex-row-reverse gap-12">
      <img src={img} alt="doodle" className="md:w-3/6"/>
      <div className="space-y-8 my-auto md:w-3/6 lg:px-6">
        <h2 className="font-semibold text-4xl xl:text-5xl 2xl:text6xl uppercase">{ head }</h2>
        <p className="font-jost 2xl:text-xl">{ text }</p>
        <Button
            classname="w-full md:w-4/6 xl:w-3/6 lg:pt-6"
            text="Get a quotation"
          />
      </div>
    </div>
  )
};

export default CTA;