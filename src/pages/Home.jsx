import React from "react";
import Header from "../layout/Header";
import Hero from "./home/Hero";
import Client from "./home/Client";
import Features from "./home/features";
import About from "./home/About";
import Services from "./home/Services";
import LatestProjects from "./home/LatestProjects";
import Testimonial from "./home/Testimonial";
import WhyChooseUs from "./home/WhyChooseUs";
import ProductQuote from "./home/ProductQuote";
import Article from "./home/Article";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Client className="py-30" />
      <Features />
      <About className="lg:h-[calc(100%+140px)] h-full w-[100%] lg:top-[-140px] top-0 lg:left-[calc((100%-1200px)/2)] left-0" />
      <Services/>
      <LatestProjects/>
      <Testimonial />
      <WhyChooseUs/>
      <ProductQuote/>
      <Article/>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
