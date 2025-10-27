import { useState } from "react";
import AboutImg from "../../assets/images/about/about.jpg";
import AboutPdt from "../../assets/images/about/about-product.jpg";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Counter from "../../components/Counter";
import Map from "../../assets/images/about/map.png";
import Shape1 from "../../assets/images/about/shape1.png";
import Shape2 from "../../assets/images/about/shape2.png";

import {
  MotionTag,
  fadeUp,
  fadeLeft,
  zoomIn,
  fadeDown,
} from "../../components/Animation";

const About = ({className}) => {
  
  return (
    <div className="py-20 relative">
        <div className={`${className} bg-[#f2f2f2] z-0 absolute`}></div>
      <div className="container mx-auto relative z-20 md:px-0 px-4">
        <div className="grid grid-cols-12 md:gap-10 lg:gap-13 gap-0">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <MotionTag variant={fadeUp}>
              <img src={AboutImg} alt="About" />
            </MotionTag>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-7 mt-10 md:mt-0">
              <MotionTag variant={fadeUp}>
                <Heading
              subHeading="About Us"
              heading="Smart Logistics & Transport Solutions Company"
            />
              </MotionTag>
            <MotionTag variant={fadeUp} duration={0.9}>
              <p className="text-light font-semibold text-[15px] leading-6 pb-4 pt-5 transition-all duration-500 ease-in-out group-hover:text-white">
              There are many variations of passages about of Lorem Ipsum
              avalable, but the majority have suffered alteration free in some
              form, by injected avalable, but the majority have suffered
              alteration free in some.
            </p>
            </MotionTag>
            <MotionTag variant={fadeUp} duration={0.9}>
              <div className="grid grid-cols-12 gap-0">
              <div className="xl:col-span-8 col-span-12">
                <div className="p-8 bg-white shadow-md mb-7">
                  <div className="mb-6">
                    <div className="flex justify-between mb-1">
                      <label className="font-semibold text-secondary text-[15px] mb-2">Transport</label>
                      <span className="text-secondary text-[15px]">90%</span>
                    </div>
                    <div className="relative">
                      <div className="h-2 bg-gray-200">
                        <div className="h-2 bg-primary w-[90%]"></div>
                      </div>
                      <div className="absolute top-[-5px] left-[90%] w-5 h-5 bg-white border-3 border-primary rounded-full transform -translate-x-1/2"></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-1">
                      <label className="font-semibold text-secondary text-[15px] mb-2">Experience</label>
                      <span className="text-secondary text-[15px]">80%</span>
                    </div>
                    <div className="relative">
                      <div className="h-2 bg-gray-200">
                        <div className="h-2 bg-primary w-[80%]"></div>
                      </div>
                      <div className="absolute top-[-5px] left-[80%] w-5 h-5 bg-white border-3 border-primary rounded-full transform -translate-x-1/2"></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-1">
                      <label className="font-semibold text-secondary text-[15px] mb-2">Warehouse Full</label>
                      <span className="text-secondary text-[15px]">70%</span>
                    </div>
                    <div className="relative">
                      <div className="h-2 bg-gray-200">
                        <div className="h-2 bg-primary w-[70%]"></div>
                      </div>
                      <div className="absolute top-[-5px] left-[70%] w-5 h-5 bg-white border-3 border-primary rounded-full transform -translate-x-1/2"></div>
                    </div>
                  </div>
                </div>
                <Button
                  className="btn-primary font-semibold"
                  title="Discover More"
                />
              </div>
              <div className="flex justify-center flex-col md:items-center relative md:col-span-4 col-span-6 mt-6 md:mt-0">
                <div className="relative z-10">
                  <Counter end="20" className="text-[64px]"  />
                  <p className="text-secondary font-semibold">
                    Product Transport
                  </p>
                </div>
                <img
                  src={Map}
                  className="absolute top-0 left-[50%] transform translate-x-[-50%]"
                  alt="Map"
                />
                <img src={AboutPdt} className="pt-6" alt="About" />
              </div>
            </div>
            </MotionTag>
          </div>
        </div>
      </div>
      <img src={Shape1} className="absolute bottom-3 left-2 hidden lg:block animate-[zump_2s_linear_infinite]" alt="Shape1" />
      <img src={Shape2} className="absolute top-22 right-2 hidden lg:block animate-[horizontalMove_2s_linear_infinite]" alt="Shape2" />
    </div>
  );
};

export default About;
