import { useState } from "react";
import FAQ from "./FAQ";

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {};

  return (
    <div id="showcase" className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-secondary md:mb-6 font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            FAQ's
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-secondary/75 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        {/* QUESTIONS */}
        <section className="space-y-6">
          <FAQ
            question="How much does it cost to get started with a high-performing website?"
            answer="
          It will depend upon the scope and requirements of the project. For reference, past projects have ranged between $1,200 - $7,000.
          
          On the discovery call, we will seek to identify specifics and objectives that can affect the cost. These are things like number of pages, specific features, timeline, etc. All these will contribute to the cost and will vary from project to project.
          
          If all you need is a basic, one-pager landing page, then this will cost you around $600"
          />
          <FAQ
            question="How long will the work take from start to finish?"
            answer="It will depend on the scope of the project.

          A single landing page may take 1-3 weeks, depending on the amount of copy.
          A full website with 5-10 pages may take 6-8 weeks."
          />
          <FAQ
            question="Do you offer other design services besides web design?"
            answer="es. Here are the other design services that I provide:

          Branding Design
          UX/UI Design
          Infographic Designs"
          />
          <FAQ
            question="Do you design e-Commerce Websites?"
            answer="If what you need is a simple eCommerce shop with  basic needs, then yes, I can do it. If it's a huge ecommerce website that has very specific requirements, then no."
          />
        </section>
      </div>
    </div>
  );
};

export default FAQs;
