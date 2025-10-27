import React from "react";
import HeadingPattern from "../assets/images/heading-pt.png"

const Heading = ({subHeading, heading, classes, hdClasses}) => {
  return (
    <div className={`heading ${classes}`}>
      <h5 className="text-[14px] text-[#868ea5] font-semibold leading-[1.5] flex items-center gap-1 mb-1.5">{subHeading} <img src={HeadingPattern} alt="Heading" /></h5>
      <h2 className={`lg:text-[40px] text-[35px] font-bold leading-[1.25] text-dark ${hdClasses}`}>{heading}</h2>
    </div>
  );
};

export default Heading;
