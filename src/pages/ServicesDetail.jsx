import React from "react";
import { Link } from "react-router-dom";
import serviceMain from "../assets/images/services/1.jpg";
import serviceBt from "../assets/images/services/2.jpg";
import serviceContact from "../assets/images/services/service-sidebar-contact.png";
import PageHero from "../components/PageHero";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
// import { title } from "framer-motion/client";
import {
  MotionTag,
  fadeUp,
  fadeLeft,
  fadeLeftSm,
  zoomIn,
  fadeDown,
  zoomX,
  fadeUpHero,
} from "../components/Animation";

const ServicesDetail = () => {
  const accordionData = [
    {
      title: "Is my technology allowed on tech?",
      content:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on.",
    },
    {
      title: "How to soft launch your business?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteradution in some form by injected humour, or randomised words which don't look even slightly believable. If you are going.",
    },
    {
      title: "How to turn visitors into contributors?",
      content:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
    },
    {
      title: "How can I find my solution?",
      content:
        "Prior to joining company, she spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and.",
    },
  ];
  return (
    <>
      <PageHero title="Services Detail" page="Services Detail" />
      <div className="py-30">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4">
              <MotionTag variant={fadeLeftSm} className="card">
                <h2 className="py-4 px-5 bg-primary text-[25px] text-white font-semibold">
                  All Service
                </h2>
                <div className="bg-[#f2f2f2] py-10 px-8">
                  <Link className="bg-white p-4 mb-3 block text-secondary hover:text-white font-semibold text-[17px] transition-all ease-in-out duration-500 relative after:content-[''] after:absolute after:bg-secondary after:top-0 after:right-0 after:w-0 after:h-full after:transition-all after:ease-in-out after:duration-500 hover:after:w-full hover:after:left-0">
                    <span className="relative z-20 flex justify-between items-center ">
                      Safety & Reliable Service <FaArrowRightLong />
                    </span>
                  </Link>
                  <Link className="bg-white p-4 mb-3 block text-secondary hover:text-white font-semibold text-[17px] transition-all ease-in-out duration-500 relative after:content-[''] after:absolute after:bg-secondary after:top-0 after:right-0 after:w-0 after:h-full after:transition-all after:ease-in-out after:duration-500 hover:after:w-full hover:after:left-0">
                    <span className="relative z-20 flex justify-between items-center ">
                      Real Time Tracking System <FaArrowRightLong />
                    </span>
                  </Link>
                  <Link className="bg-white p-4 mb-3 block text-secondary hover:text-white font-semibold text-[17px] transition-all ease-in-out duration-500 relative after:content-[''] after:absolute after:bg-secondary after:top-0 after:right-0 after:w-0 after:h-full after:transition-all after:ease-in-out after:duration-500 hover:after:w-full hover:after:left-0">
                    <span className="relative z-20 flex justify-between items-center ">
                      On-Time Delivery Service <FaArrowRightLong />
                    </span>
                  </Link>
                  <Link className="bg-white p-4 mb-3 block text-secondary hover:text-white font-semibold text-[17px] transition-all ease-in-out duration-500 relative after:content-[''] after:absolute after:bg-secondary after:top-0 after:right-0 after:w-0 after:h-full after:transition-all after:ease-in-out after:duration-500 hover:after:w-full hover:after:left-0">
                    <span className="relative z-20 flex justify-between items-center ">
                      Worldwide Transport <FaArrowRightLong />
                    </span>
                  </Link>
                  <Link className="bg-white p-4 mb-3 block text-secondary hover:text-white font-semibold text-[17px] transition-all ease-in-out duration-500 relative after:content-[''] after:absolute after:bg-secondary after:top-0 after:right-0 after:w-0 after:h-full after:transition-all after:ease-in-out after:duration-500 hover:after:w-full hover:after:left-0">
                    <span className="relative z-20 flex justify-between items-center ">
                      One Step Solutions <FaArrowRightLong />
                    </span>
                  </Link>
                  <Link className="bg-white p-4 mb-3 block text-secondary hover:text-white font-semibold text-[17px] transition-all ease-in-out duration-500 relative after:content-[''] after:absolute after:bg-secondary after:top-0 after:right-0 after:w-0 after:h-full after:transition-all after:ease-in-out after:duration-500 hover:after:w-full hover:after:left-0">
                    <span className="relative z-20 flex justify-between items-center ">
                      24/7 Important Service <FaArrowRightLong />
                    </span>
                  </Link>
                </div>
              </MotionTag>
              <MotionTag
                variant={fadeLeftSm}
                className="card bg-secondary mt-8 py-6 px-8 relative pb-[13rem] overflow-hidden after:content-[''] after:absolute after:w-full after:h-full after:bg-primary after:bottom-[-77%] after:left-0 after:rotate-[45deg]"
              >
                <h2 className="text-[1.9rem] text-white font-bold mb-6 relative z-30">
                  Get a Free <br /> Quick Solution <br /> of Problem
                </h2>
                <Link to="/contact" className="relative z-30">
                  <Button className="btn btn-primary" title="Contact Us" />
                </Link>
                <img
                  src={serviceContact}
                  className="absolute bottom-0 right-0 z-20"
                  alt="Service Contact Us"
                />
              </MotionTag>
            </div>
            <div className="col-span-8">
              <MotionTag variant={fadeUp}>
                <img src={serviceMain} alt="Services" />
              </MotionTag>
              <div className="pt-4">
                <MotionTag as="h4" variant={fadeUp} className="pb-4 text-[1.9rem] py-5 font-bold text-secondary">
                  Safety & Reliable Service
                </MotionTag>
                <MotionTag as="p" variant={fadeUp} className="font-semibold text-light">
                  Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                  nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                  feugiat volutpat sit amet nec elit. Maecenas id hendrerit
                  ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus
                  eu nisl bibendum accumsan vitae vitae nibh.
                </MotionTag>
                <MotionTag as="h3" variant={fadeUp} className="text-primary text-[2rem] py-5 font-bold">
                  Nullamsed minon odio feugiat volutpat sit amet
                </MotionTag>
                <MotionTag as="p" className="font-semibold text-light">
                  Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus
                  felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis
                  dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed
                  magna accumsan neque fermentum laoreet. Ut nunc.
                </MotionTag>
                <MotionTag as="h4" variant={fadeUp} className="pb-4 text-[1.9rem] py-5 font-bold text-secondary">
                  Why Choose Our Precision Grow?
                </MotionTag>
                <MotionTag variant={fadeUp} className="grid grid-cols-2 pt-8 gap-10">
                  <div className="card mb-5 shadow-2xl bg-white flex md:flex-row flex-col md:justify-between md:items-center group relative after:content-[''] after:absolute after:top-[-0.9rem] after:left-[-0.9rem] after:w-full after:h-full after:border after:border-secondary before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:z-10">
                    <div className="flex items-center gap-4 p-6 ps-0 relative z-20">
                      <div className="relative left-[-0.9rem]">
                        <div className="bg-primary h-[80px] w-[80px] transition-all duration-500 ease-in-out group-hover:text-white flex justify-center items-center">
                          <svg
                            className="transform transition-all duration-500 ease-in-out fill-white animate-flip-straight"
                            height="40px"
                            width="40px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 422.518 422.518"
                            xmlSpace="preserve"
                          >
                            <path
                              d="M422.512,215.424c0-0.079-0.004-0.158-0.005-0.237c-0.116-5.295-4.368-9.514-9.727-9.514h-2.554l-39.443-76.258
	c-1.664-3.22-4.983-5.225-8.647-5.226l-67.34-0.014l2.569-20.364c0.733-8.138-1.783-15.822-7.086-21.638
	c-5.293-5.804-12.683-9.001-20.81-9.001h-209c-5.255,0-9.719,4.066-10.22,9.308l-2.095,16.778h119.078
	c7.732,0,13.836,6.268,13.634,14c-0.203,7.732-6.635,14-14.367,14H126.78c0.007,0.02,0.014,0.04,0.021,0.059H10.163
	c-5.468,0-10.017,4.432-10.16,9.9c-0.143,5.468,4.173,9.9,9.641,9.9H164.06c7.168,1.104,12.523,7.303,12.326,14.808
	c-0.216,8.242-7.039,14.925-15.267,14.994H54.661c-5.523,0-10.117,4.477-10.262,10c-0.145,5.523,4.215,10,9.738,10h105.204
	c7.273,1.013,12.735,7.262,12.537,14.84c-0.217,8.284-7.109,15-15.393,15H35.792v0.011H25.651c-5.523,0-10.117,4.477-10.262,10
	c-0.145,5.523,4.214,10,9.738,10h8.752l-3.423,35.818c-0.734,8.137,1.782,15.821,7.086,21.637c5.292,5.805,12.683,9.001,20.81,9.001
	h7.55C69.5,333.8,87.3,349.345,109.073,349.345c21.773,0,40.387-15.545,45.06-36.118h94.219c7.618,0,14.83-2.913,20.486-7.682
	c5.172,4.964,12.028,7.682,19.514,7.682h1.55c3.597,20.573,21.397,36.118,43.171,36.118c21.773,0,40.387-15.545,45.06-36.118h6.219
	c16.201,0,30.569-13.171,32.029-29.36l6.094-67.506c0.008-0.091,0.004-0.181,0.01-0.273c0.01-0.139,0.029-0.275,0.033-0.415
	C422.52,215.589,422.512,215.508,422.512,215.424z M109.597,329.345c-13.785,0-24.707-11.214-24.346-24.999
	c0.361-13.786,11.87-25.001,25.655-25.001c13.785,0,24.706,11.215,24.345,25.001C134.89,318.131,123.382,329.345,109.597,329.345z
	 M333.597,329.345c-13.785,0-24.706-11.214-24.346-24.999c0.361-13.786,11.87-25.001,25.655-25.001
	c13.785,0,24.707,11.215,24.345,25.001C358.89,318.131,347.382,329.345,333.597,329.345z M396.457,282.588
	c-0.52,5.767-5.823,10.639-11.58,10.639h-6.727c-4.454-19.453-21.744-33.882-42.721-33.882c-20.977,0-39.022,14.429-44.494,33.882
	h-2.059c-2.542,0-4.81-0.953-6.389-2.685c-1.589-1.742-2.337-4.113-2.106-6.676l12.609-139.691l28.959,0.006l-4.59,50.852
	c-0.735,8.137,1.78,15.821,7.083,21.637c5.292,5.806,12.685,9.004,20.813,9.004h56.338L396.457,282.588z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-secondary text-[20px] font-bold leading-7.5 ps-1">
                          Fast Reliable Services
                        </h4>
                        <p className="font-semibold text-light">
                          Lorem Ipsum is simply dummy typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-5 shadow-2xl bg-white flex md:flex-row flex-col md:justify-between md:items-center group relative after:content-[''] after:absolute after:top-[-0.9rem] after:left-[-0.9rem] after:w-full after:h-full after:border after:border-secondary before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:z-10">
                    <div className="flex items-center gap-4 p-6 ps-0 relative z-20">
                      <div className="relative left-[-0.9rem]">
                        <div className="bg-primary h-[80px] w-[80px] transition-all duration-500 ease-in-out group-hover:text-white flex justify-center items-center">
                          <svg
                            className="transform transition-all duration-500 ease-in-out fill-white animate-flip-straight"
                            height="40px"
                            width="40px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 422.518 422.518"
                            xmlSpace="preserve"
                          >
                            <path
                              d="M422.512,215.424c0-0.079-0.004-0.158-0.005-0.237c-0.116-5.295-4.368-9.514-9.727-9.514h-2.554l-39.443-76.258
	c-1.664-3.22-4.983-5.225-8.647-5.226l-67.34-0.014l2.569-20.364c0.733-8.138-1.783-15.822-7.086-21.638
	c-5.293-5.804-12.683-9.001-20.81-9.001h-209c-5.255,0-9.719,4.066-10.22,9.308l-2.095,16.778h119.078
	c7.732,0,13.836,6.268,13.634,14c-0.203,7.732-6.635,14-14.367,14H126.78c0.007,0.02,0.014,0.04,0.021,0.059H10.163
	c-5.468,0-10.017,4.432-10.16,9.9c-0.143,5.468,4.173,9.9,9.641,9.9H164.06c7.168,1.104,12.523,7.303,12.326,14.808
	c-0.216,8.242-7.039,14.925-15.267,14.994H54.661c-5.523,0-10.117,4.477-10.262,10c-0.145,5.523,4.215,10,9.738,10h105.204
	c7.273,1.013,12.735,7.262,12.537,14.84c-0.217,8.284-7.109,15-15.393,15H35.792v0.011H25.651c-5.523,0-10.117,4.477-10.262,10
	c-0.145,5.523,4.214,10,9.738,10h8.752l-3.423,35.818c-0.734,8.137,1.782,15.821,7.086,21.637c5.292,5.805,12.683,9.001,20.81,9.001
	h7.55C69.5,333.8,87.3,349.345,109.073,349.345c21.773,0,40.387-15.545,45.06-36.118h94.219c7.618,0,14.83-2.913,20.486-7.682
	c5.172,4.964,12.028,7.682,19.514,7.682h1.55c3.597,20.573,21.397,36.118,43.171,36.118c21.773,0,40.387-15.545,45.06-36.118h6.219
	c16.201,0,30.569-13.171,32.029-29.36l6.094-67.506c0.008-0.091,0.004-0.181,0.01-0.273c0.01-0.139,0.029-0.275,0.033-0.415
	C422.52,215.589,422.512,215.508,422.512,215.424z M109.597,329.345c-13.785,0-24.707-11.214-24.346-24.999
	c0.361-13.786,11.87-25.001,25.655-25.001c13.785,0,24.706,11.215,24.345,25.001C134.89,318.131,123.382,329.345,109.597,329.345z
	 M333.597,329.345c-13.785,0-24.706-11.214-24.346-24.999c0.361-13.786,11.87-25.001,25.655-25.001
	c13.785,0,24.707,11.215,24.345,25.001C358.89,318.131,347.382,329.345,333.597,329.345z M396.457,282.588
	c-0.52,5.767-5.823,10.639-11.58,10.639h-6.727c-4.454-19.453-21.744-33.882-42.721-33.882c-20.977,0-39.022,14.429-44.494,33.882
	h-2.059c-2.542,0-4.81-0.953-6.389-2.685c-1.589-1.742-2.337-4.113-2.106-6.676l12.609-139.691l28.959,0.006l-4.59,50.852
	c-0.735,8.137,1.78,15.821,7.083,21.637c5.292,5.806,12.685,9.004,20.813,9.004h56.338L396.457,282.588z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-secondary text-[20px] font-bold leading-7.5 ps-1">
                          Fast Reliable Services
                        </h4>
                        <p className="font-semibold text-light">
                          Lorem Ipsum is simply dummy typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionTag>
                <MotionTag variant={fadeUp} className="grid grid-cols-12 gap-0 mt-6">
                  <div className="md:col-span-5 col-span-12">
                    <img src={serviceBt} alt="Services" />
                  </div>
                  <div className="md:col-span-7 col-span-12 md:-ms-4">
                    <h4 className="text-secondary text-[1.8rem] font-bold leading-7.5 ps-1 mb-4">
                      Our Few Benefits
                    </h4>
                    <p className="font-semibold text-light">
                      At the end of the day, going forward, a new normal that
                      has evolved from generation X is on the.
                    </p>
                    <h4 className="text-secondary text-[1.7rem] font-bold leading-7.5 ps-1 py-5">
                      Namnec eros id magna hendrerit
                    </h4>
                    <ul>
                      <li className="text-secondary text-[17px] font-semibold flex gap-2 items-center mb-3">
                        <FaCheckCircle className="text-primary" /> Lorem ipsum
                        dolor sit amet consectetur.
                      </li>
                      <li className="text-secondary text-[17px] font-semibold flex gap-2 items-center mb-3">
                        <FaCheckCircle className="text-primary" /> Lorem ipsum
                        dolor sit amet consectetur.
                      </li>
                      <li className="text-secondary text-[17px] font-semibold flex gap-2 items-center mb-3">
                        <FaCheckCircle className="text-primary" /> Lorem ipsum
                        dolor sit amet consectetur.
                      </li>
                    </ul>
                  </div>
                </MotionTag>
                <div className="mt-8">
                    <Accordion items={accordionData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetail;
