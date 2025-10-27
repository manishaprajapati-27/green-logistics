import React from "react";
// import Features from "./home/Features";
import Services from "./home/Services";
import PageHero from "../components/PageHero";

const OurServices = () => {
  return (
    <>
      <PageHero title="Our Services" page="Services" />
      {/* <div className="pt-30">
        <Features />
      </div> */}
      <Services />
    </>
  );
};

export default OurServices;
