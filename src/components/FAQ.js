import { Accordion } from "flowbite-react";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="bg-primary pb-20 text-secondary relative space-y-16">
      <h2 className="text-center font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
        FAQ's
      </h2>
      <div
        ref={myRef}
        className={`fade-in max-w-screen-lg mx-auto  ${
          myElementIsVisible ? "appear" : ""
        }`}
      >
        <Accordion flush={true}>
          <Accordion.Panel>
            <Accordion.Title>
              <div className="text-secondary md:text-lg">
                What is the initial investment needed to create a website?
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <div className="font-jost pl-3 md:pl-6 space-y-6 text-sm md:text-lg">
                <p className="text-secondary/80">
                  The cost of getting started with a website will vary depending
                  on the project's scope and requirements. As a point of
                  reference, previous projects have ranged from{" "}
                  <em className="font-bold">$1,500 - $8,000</em>
                </p>
                <p className="text-secondary/80">
                  During the initial discovery call, we will aim to identify
                  specific details and objectives that may impact the cost of
                  the project. These could include factors such as the number of
                  pages, desired features, timeline, and more. These variables
                  will collectively contribute to the overall cost, which may
                  vary from project to project.
                </p>
                <p className="text-secondary/80">
                  If all you need is a basic, one-pager landing page, then this
                  will cost you around{" "}
                  <em className="font-bold">$600 - $800</em>
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <div className="text-secondary md:text-lg">
                What's the estimated project timeline from start to finish?
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <div className="font-jost pl-3 md:pl-6 space-y-6 text-sm md:text-lg">
                <p className="text-secondary/80">
                  The timeline for each project may vary depending on the goals
                  and development skills needed. As a general estimate, it could
                  take approximately <em className="font-bold">4 - 12 weeks</em>
                  , considering your specific project requirements and the level
                  of development expertise required to meet your goals.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <div className="text-secondary md:text-lg">
                Can you create e-commerce websites as well?
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <div className="font-jost pl-3 md:pl-6 space-y-6 text-sm md:text-lg">
                <p className="text-secondary/80">
                  <em className="font-bold">Yes</em>, I can help with simple
                  e-commerce shops that have basic needs. However, for large and
                  complex e-commerce websites with specific requirements, my
                  services may not be suitable.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
