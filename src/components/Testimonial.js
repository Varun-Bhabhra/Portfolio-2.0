import React from "react";

// Imgs
// import twitterDark from "../img/twitterDark.svg";
// import instagramDark from "../img/instagramDark.svg";

const Testimonial = ({ img, name, place, href, text }) => {
  
  return (
    <section className="px-6 md:px-20">
        <div className="text-center flex flex-col items-center gap-8">
          <article className="flex flex-col items-center gap-4">
            <img src={img} alt="avatar" className="w-16 h-16 rounded-full object-cover" />
            <div className="">
              <h4 className="font-bold">{ name }</h4>
              <p className="text-sm">{ place }</p>
            </div>
          </article>

          {/* <article className="flex gap-6">
            <a href={href}><img src={instagramDark} alt="social icons" className="w-10 cursor-pointer hover:-translate-y-1 transition-all"/></a>
            <a href={href}><img src={twitterDark} alt="social icons" className="w-10 cursor-pointer hover:-translate-y-1 transition-all"/></a>
          </article> */}
          <p className="text-sm">{ text }</p>
        </div>
    </section>
  )
};

export default Testimonial;