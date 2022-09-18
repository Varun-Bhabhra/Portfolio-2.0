import React from "react";
import Button from "./Button";

// Imgs
import logo from "../img/logo.svg"
import arrowDown from "../img/arrowDown.svg";
import msg from "../img/msg.svg";
import twitter from "../img/twitter.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";


const Navbar = () => {

  const menuToggle = () => {
    document.querySelector('#toggle').classList.toggle('active');
    document.querySelector('#showcase').classList.toggle('active');
  }

  return (
    <section className="font-poppins">
      {/* <div id="showcase" className=""> */}
        <header className="px-6 lg:px-12 xl:px-24 2xl:px-32">
          <div id="logo"><img src={ logo } alt="vector" className="w-16 lg:w-24 h-16 lg:h-24"/></div>
          <div id="toggle" className="shadow-2xl" onClick={menuToggle}></div>
        </header>
      {/* </div> */}

      <div className="menu px-6">
        <ul className="space-y-6 text-lg lg:text-3xl">
            <li><a href="/" id="underline">Home</a></li>
            <li><a href="/" id="underline">Services</a></li>
            <li><a href="/" id="underline">About</a></li>
            <li><a href="/" id="underline">Portfolio</a></li>
        </ul>


        <div className="w-4/6 text-center text-action space-y-8">
          <Button
            text="Hire Me"
          />
          <a href="/" className="inline-block border-2 border-action font-semibold py-3 lg:py-4 w-full text-sm lg:text-lg rounded-md cursor-pointer hover:tracking-widest lg:hover:tracking-[3px] transition-all">Resume <img src={ arrowDown } alt="vector" className="inline w-5 h-5 ml-2 lg:ml-4"/></a>
        </div>

        <div className="flex flex-col gap-6 items-center text-center  text-primary">
          <img src={ msg } alt="vector" className="w-6"/>
          <div className="space-y-6">
            <h2 className="font-light text-sm md:text-xl uppercase">Don't be a stranger!</h2>
            <span id="divide"></span>
          </div>
          <div className="flex gap-3 lg:gap-6">
            <a href="https://twitter.com/VBhabhra" target="__blank"><img src={ twitter } alt="vector" className="w-8 lg:w-10 hover:-translate-y-2 transition-all"/></a>
            <a href="https://www.instagram.com/varun_frontend_dev/" target="__blank"><img src={ instagram } alt="vector" className="w-8 lg:w-10 hover:-translate-y-2 transition-all"/></a>
            <a href="https://www.linkedin.com/in/varun-bhabhra-845777210/" target="__blank"><img src={ linkedin } alt="vector" className="w-8 lg:w-10 hover:-translate-y-2 transition-all"/></a>
            <a href="https://github.com/Varun-Bhabhra" target="__blank"><img src={ github } alt="vector" className="w-8 lg:w-10 hover:-translate-y-2 transition-all"/></a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Navbar;