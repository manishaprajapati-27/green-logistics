import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MotionTag, fadeUp } from "./Animation";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <MotionTag variant={fadeUp} className="mb-4 bg-[#f2f2f2]" key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between py-3 px-8 text-left text-[1.15rem] text-secondary font-bold"
          >
            <span>{item.title}</span>
            <div
              className={`w-12 h-12 flex justify-center items-center transform-all duration-500 ${
                openIndex === index ? "bg-primary text-white" : "bg-white text-secondary"
              }`}
            >
              {
                openIndex === index ? <FaMinus/> : <FaPlus/>
              }
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="font-semibold text-light py-5 px-8 ">
              {item.content}
            </p>
          </div>
        </MotionTag>
      ))}
    </div>
  );
};

export default Accordion;
