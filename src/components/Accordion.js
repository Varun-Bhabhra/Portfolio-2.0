import { useRef } from "react";

// Images
import tap from "../img/tap.svg";

const faqs = [
  {
    question: "What is the initial investment needed to create a website",
    answer:
      "The cost of getting started with a website will vary depending on the project's scope and requirements. As a point of reference, previous projects have ranged from $1,500 - $8,000. During the initial discovery call, we will aim to identify specific details and objectives that may impact the cost of the project. These could include factors such as the number of pages, desired features, timeline, and more. These variables will collectively contribute to the overall cost, which may vary from project to project.",
  },
  {
    question: "What's the estimated project timeline from start to finish?",
    answer: "All the sessions are conducted live via Zoom.",
  },
  {
    question: "Can you create e-commerce websites as well?",
    answer:
      "A repeat recorded session is scheduled in case you end up missing any of the live ZOOM sessions. Try not to skip any of the live sessions.",
  },
];

const Accordion = () => {
  const accordionRef = useRef(null);

  const toggleAccordion = (e) => {
    const activePanel = e.target.closest(".accordion-panel");
    if (!activePanel) return;

    const activeButton = activePanel.querySelector("button");
    const activePanelContent = activePanel.querySelector(".accordion-content");
    const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

    if (activePanelIsOpened === "true") {
      activeButton.setAttribute("aria-expanded", false);
      activePanelContent.setAttribute("aria-hidden", true);
    } else {
      activeButton.setAttribute("aria-expanded", true);
      activePanelContent.setAttribute("aria-hidden", false);
    }
  };

  return (
    <section className="bg-primary pb-20 text-secondary relative space-y-16">
      <h2 className="text-center font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
        FAQ's
      </h2>

      <article
        ref={accordionRef}
        onClick={toggleAccordion}
        className="max-w-screen-lg mx-auto px-6 grid grid-cols-1 gap-12"
      >
        {/* {faqs.map((faq, key) => ( */}
        {/* Question 1  */}
        <article className="accordion-panel space-y-4 cursor-pointer">
          <h2 id="panel1-title" className="flex justify-between">
            <button
              className="accordion-trigger text-left font-semibold text-sm lg:text-lg cursor-pointer space-x-3 w5/6"
              aria-expanded="true"
              aria-controls="accordion1-content"
            >
              {faqs[0].question}
            </button>
            <img src={tap} alt="Mouse Hover Icon" className="" />
          </h2>

          <div
            className="accordion-content"
            role="region"
            aria-labelledby="panel1-title"
            aria-hidden="false"
            id="panel1-content"
          >
            <div className="font-jost font-normal text-sm lg:text-base text-secondary/80 lg:w-5/6 space-y-6">
              <p>
                The cost of getting started with a website will vary depending
                on the project's scope and requirements. As a point of
                reference, previous projects have ranged from{" "}
                <em className="font-bold">$1,500 - $8,000</em>
              </p>
              <p>
                During the initial discovery call, we will aim to identify
                specific details and objectives that may impact the cost of the
                project. These could include factors such as the number of
                pages, desired features, timeline, and more. These variables
                will collectively contribute to the overall cost, which may vary
                from project to project.
              </p>
              <p>
                If all you need is a basic, one-pager landing page, then this
                will cost you around <em className="font-bold">$600 - $800</em>
              </p>
            </div>
          </div>
          <div className="h-[0.5px] md:h-[0.1px] bg-secondary/20 flex-grow w-full lgw-3/6"></div>
        </article>

        {/* Question 2  */}
        <article className="accordion-panel space-y-4 cursor-pointer">
          <h2 id="panel1-title" className="flex justify-between">
            <button
              className="accordion-trigger text-left font-semibold text-sm lg:text-lg cursor-pointer space-x-3 w5/6"
              aria-expanded="true"
              aria-controls="accordion1-content"
            >
              {faqs[1].question}
            </button>
            <img src={tap} alt="Mouse Hover Icon" className="" />
          </h2>

          <div
            className="accordion-content"
            role="region"
            aria-labelledby="panel1-title"
            aria-hidden="false"
            id="panel1-content"
          >
            <div className="font-jost font-normal text-sm lg:text-base text-secondary/80 lg:w-5/6 space-y-6">
              <p className="text-secondary/80">
                The timeline for each project may vary depending on the goals
                and development skills needed. As a general estimate, it could
                take approximately <em className="font-bold">4 - 12 weeks</em>,
                considering your specific project requirements and the level of
                development expertise required to meet your goals.
              </p>
            </div>
          </div>
          <div className="h-[0.5px] md:h-[0.1px] bg-secondary/20 flex-grow w-full lgw-3/6"></div>
        </article>

        {/* Question 3  */}
        <article className="accordion-panel space-y-4 cursor-pointer">
          <h2 id="panel1-title" className="flex justify-between">
            <button
              className="accordion-trigger text-left font-semibold text-sm lg:text-lg cursor-pointer space-x-3 w5/6"
              aria-expanded="true"
              aria-controls="accordion1-content"
            >
              {faqs[2].question}
            </button>
            <img src={tap} alt="Mouse Hover Icon" className="" />
          </h2>

          <div
            className="accordion-content"
            role="region"
            aria-labelledby="panel1-title"
            aria-hidden="false"
            id="panel1-content"
          >
            <div className="font-jost font-normal text-sm lg:text-base text-secondary/80 lg:w-5/6 space-y-6">
              <p className="text-secondary/80">
                <em className="font-bold">Yes</em>, I can help with simple
                e-commerce shops that have basic needs. However, for large and
                complex e-commerce websites with specific requirements, my
                services may not be suitable.
              </p>
            </div>
          </div>
          <div className="h-[0.5px] md:h-[0.1px] bg-secondary/20 flex-grow w-full lgw-3/6"></div>
        </article>
        {/* ))} */}
      </article>
    </section>
  );
};
export default Accordion;
