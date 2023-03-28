const FAQ = ({ question, answer }) => {
  return (
    <div className="bg-secondary mx-auto p-6 flex max-w-screen-xl flex-col border-t border-primary/40 text-primary rounded-xl">
      <div className="">
        <div className="flex cursor-pointer justify-between gap-2 py-3">
          <span className="font-semibold transition duration-100 md:text-xl">
            {question}
          </span>

          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        <p className="showanswer mb-4 text-primary/75">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
