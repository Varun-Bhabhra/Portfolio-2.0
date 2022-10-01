import React from "react";
// import { useInView } from 'react-intersection-observer';

// Imgs
import contactDoodle from "../img/contactDoodle.svg";

const Contact = () => {
  return (
    <div id="showcase" className="py-20 text-secondary">
      <section id="contact" className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24">
      <article className="space-y-24 md:space-y-0 md:grid grid-cols-2">
          <div id="header" className="">
            <div className="space-y-8 bg-contact-bg bg-contain bg-no-repeat text-center md:text-left">
              <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Get In Touch!</h2>
              <p className="font-jost font-light text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">Fill out the form and I will reach out, as soon as possible!</p>

              <img src={ contactDoodle } alt="doodle" className="mx-auto md:mx-0"/>
            </div>
          </div>

          <div>
            <form action="https://formsubmit.co/bhabhravarun@gmail.com" method="POST">
              <div className="flex flex-col gap-4">
                <label htmlFor="name" className="font-semibold">Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" className="py-2 border-r-0 border-l-0 border-t-0 border-b-2 border-secondary focus:border-action outline-none bg-primary" required/>
                
                <label htmlFor="email" className="font-semibold mt-10">E-mail</label>
                <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" className="py-2 border-r-0 border-l-0 border-t-0 border-b-2 border-secondary focus:border-action outline-none bg-primary" required/>
                
                <label htmlFor="message" className="font-semibold mt-10">Message</label>
                <textarea id="message" name="message" rows="4" cols="50" placeholder="Hey, I would like to have a meeting regarding my website requirements. Here is my number +91 1234567890 give me a call or text me over whatsapp." className="py-6 border-r-0 border-l-0 border-t-0 border-b-2 border-secondary focus:border-action outline-none bg-primary" required></textarea>
              </div>
              <button type="submit" className="mt-20 md:w-3/6 text-center text-primary bg-action border-2 border-action font-semibold py-3 w-full text-sm lg:text-lg rounded-full cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-action/30 hover:-translate-y-[2px] transition-all duration-200">Send</button>
            </form>
          </div>
        </article>
      </section>
    </div>
  )
};

export default Contact;