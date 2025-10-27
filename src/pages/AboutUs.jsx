import React from "react";
import PageHero from "../components/PageHero";
import About from "./home/About";
import WhyChooseUs from "./home/WhyChooseUs";
import Testimonial from "./home/Testimonial";
import Client from "./home/Client";

const AboutUs = () => {
  return (
    <>
      <PageHero title="About Us" page="About Us" />
      <About className="h-full w-full top-0 left-0" />
      <WhyChooseUs />
      <Testimonial />
      <Client className="pb-30" />
    </>
  );
};

export default AboutUs;
