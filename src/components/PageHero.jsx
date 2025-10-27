import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ title, page }) => {
  return (
    <div className="py-48 relative flex justify-center items-center flex-col bg-[url(src/assets/images/page-header-bg.jpg)] bg-cover bg-center bg-no-repeat after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[#063d1dd3]">
      {/* <div className="relative z-40"> */}
        <h2 className="text-white md:text-[3.3rem] text-[2.5rem] font-bold relative z-40 text-center mb-5" style={{lineHeight: "normal"}}>{title}</h2>
      {/* <div> */}
        <ul className="bg-primary py-3 px-6 flex justify-center items-center gap-2 relative z-40">
        <li className="text-white text-[14px] font-semibold">
          <Link to="/" className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-white hover:text-secondary hover:bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)]">Home</Link>
        </li>
         <li className="text-white text-[14px] font-semibold">/</li>
        <li className="text-dark text-[14px] font-semibold">{page}</li>
      </ul>
      {/* </div>
       */}
       {/* </div> */}
    </div>
  );
};

export default PageHero;
