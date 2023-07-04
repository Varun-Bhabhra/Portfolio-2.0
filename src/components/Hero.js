import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { PopupButton } from "react-calendly";

// Imgs
// import hero_me from "../img/hero_me.webp"
import one from "../img/1.webp";
import two from "../img/2.webp";
import three from "../img/3.webp";

const Hero = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="showcase" className="pt-44 text-secondary">
      <section
        id="hero"
        className="max-w-screen-xl text-left sm:text-left mx-auto px-6 md:px-12 2xl:px-0 pb-24 sm:pb-0 grid gap10 sm:gap-24 justify-items-center items-center"
      >
        {/* Image */}
        <div className="sm:pb-24">
          <div className="relative flex">
            <img
              src={three}
              alt="Mr. Manager"
              width="500"
              height="500"
              className="absolute right-32 top-16 w-full h-24 md:h-96 object-contain scale-90"
            />
            <img
              src={one}
              alt="Mr. Smarty Pants"
              width="500"
              height="500"
              className="w-full h-24 md:h-96 object-contain scale-125"
            />
            <img
              src={two}
              alt="Mr. Designer"
              width="500"
              height="500"
              className="absolute left-48 top-14 w-full h-24 md:h-96 object-contain scale-110 -z-10"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="relativ space-y-4 sm:space-y-8 text-center md:mb-32 z-10">
          <div className="">
            <h2
              className={`fade-in-two font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-5xl xl:leading-tight ${
                myElementIsVisible ? "headline" : ""
              }`}
            >
              I assist brands grow with visually appealing,{" "}
              <br className="sm:hidden" /> brand-accurate & user-friendly
              websites.
            </h2>
          </div>

          <div
            ref={myRef}
            className={`fade-in pt-4 flex flex-col md:flex-row gap-4 justify-center ${
              myElementIsVisible ? "heroBtn" : ""
            }`}
          >
            <PopupButton
              url="https://calendly.com/varunbhabhra/30min"
              rootElement={document.getElementById("root")}
              text="Book Free Discovery Call"
              className="py-3 sm:w-5/6 md:w-6/12 lg:w-5/12 text-primary bg-action border-2 border-action font-semibold text-sm lg:text-lg rounded-lg cursor-pointer hover:shadow-lg hover:shadow-action/30 hover:-translate-y-[2px] transition-all duration-200 "
            />

            <div className="sm:w-5/6 md:w-6/12 lg:w-5/12 transition-all relative z-10">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-160}
                duration={800}
                target="__blank"
                className="inline-block text-center bg-primary text-action border-2 border-action hover:bg-action/10 font-semibold py-3 w-full text-sm lg:text-lg rounded-lg cursor-pointer hover:shadow-lg hover:shadow-action/30 transition-all hover:-translate-y-[2px] duration-200"
              >
                View Client Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
