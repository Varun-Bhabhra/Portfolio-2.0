import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { PopupButton } from "react-calendly";

// Imgs
// import hero_me from "../img/hero_me.webp"
import hero_me2 from "../img/hero_me2.webp";
import mobile_me from "../img/mobile_me.webp";
import herobg from "../img/hero_bg.svg";
import herobg2 from "../img/hero_bg2.svg";

const Hero = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="showcase" className="pt-16 text-secondary">
      <section
        id="hero"
        className="max-w-screen-xl text-left sm:text-left mx-auto px-6 md:px-12 2xl:px-0 pb-24 sm:pb-0 grid gap10 sm:gap-0 justify-items-center items-center sm:grid-flow-col"
      >
        <div className="order-2 sm:order-1 relative space-y-4 sm:space-y-8 text-center sm:text-left md:mb-32 z-10">
          <div className="space-y-4 md:space-y-8 ">
            <p
              className={`fade-in-one font-normal text-xs md:text-base xl:text-2xl xl:w-4/6 ${
                myElementIsVisible ? "headline" : ""
              }`}
            >
              👋 Hello there, I'm{" "}
              <span className="font-semibold hover:text-action transition-all">
                Varun
              </span>
            </p>

            {/* <h2 className={`fade-in-two font-bold font-jost text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${myElementIsVisible ? "headline" : ""}`}>I help brands scale through their websites</h2> */}

            <h2
              className={`fade-in-two font-bold font-jost text-2xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight ${
                myElementIsVisible ? "headline" : ""
              }`}
            >
              Empowering brands with custom, high-converting{" "}
              <br className="sm:hidden" /> websites
            </h2>

            <p
              className={`fade-in-three font-normal text-sm md:text-base xl:text-2xl xl:w-6/6 ${
                myElementIsVisible ? "headline" : ""
              }`}
            >
              that are appealing, brand-accurate, <br className="lg:hidden" /> &
              user-friendly.
            </p>
          </div>

          <div
            ref={myRef}
            className={`fade-in pt-4 flex flex-col md:flex-row gap-4 ${
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
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        <img
          src={herobg}
          alt="background"
          className="from_right px-2 absolute w-5/6 sm:w-4/6 lg:w-7/12 right-4 md:right-12 bottom-[43rem] sm:bottom-44 scale[1.7] lg:scale100"
        />
        <img
          src={herobg2}
          alt="background"
          className="from_left px-2 absolute w-5/6 sm:w-4/6 lg:w-7/12 left-4 md:left-12 top-64 md:top-44 scale[1.7] z-0"
        />

        <div className="order-1 sm:order-2 md:-translate-y-28 wrapper sm:drop-shadow-2xl sm:pb-14">
          <div id="anim">
            <img
              id="myself"
              src={hero_me2}
              alt="Mr. Smarty Pants"
              width="2236"
              height="4000"
              className="hidden sm:block w-full h-[40rem] md:h-[63rem] object-cover"
            />
          </div>
          <img
            id="myself"
            src={mobile_me}
            alt="Mr. Smarty Pants"
            className="sm:hidden w-full h-[20rem] scale-110 drop-shadow-xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
