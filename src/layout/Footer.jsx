import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import FtBlog1 from "../assets/images/footer/blog-1.jpg";
import FtBlog2 from "../assets/images/footer/blog-2.jpg";
import FtAni from "../assets/images/footer/ft-ani.png";
import FtShape from "../assets/images/footer/ft-shape.png";
import { MotionTag, fadeUp } from "../components/Animation";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-30 relative overflow-x-hidden">
      <div className="bg-[url('src/assets/images/footer/footer-bg.jpg')] bg-cover bg-no-repeat bg-center absolute top-0 left-0 w-full h-full opacity-65 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#063d1de3]"></div>
      <div className="container mx-auto relative z-30 md:px-0 px-4">
        <div className="grid grid-cols-12 md:gap-8 gap-y-8">
          <div className="lg:col-span-4 md:col-span-7 col-span-12">
            <MotionTag variant={fadeUp} trigger="view" className="relative after:content-[''] after:bg-[#15b01ad5] after:top-[-7.5rem] after:left-0 after:h-[calc(100%+7.5rem)] after:w-full after:absolute">
              <img
                src={FtShape}
                className="absolute top-[-5.5rem] left-5 opacity-45"
                alt="Footer"
              />
              <div className="relative z-20">
                <div className="p-9 pt-0 pb-6 border-b-1 border-[#ffffff59]">
                  <h2 className="text-[3.4rem] font-bold text-white leading-17 mb-2">
                    Let's <br /> Join Us
                  </h2>
                  <p className="text-white font-semibold">
                    There are many variations of passages of Lorem Ip available,
                    but the majority.
                  </p>
                </div>
                <div className="p-9 pt-6">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-white px-5 py-3 outline-0 text-light font-semibold"
                      placeholder="Email Address"
                    />
                    <a
                      href="#!"
                      className="bg-secondary transition-all duration-500 ease-in-out hover:bg-dark absolute group top-0 right-0 w-[3rem] h-full flex justify-center items-center"
                    >
                      <GoArrowRight className="text-2xl text-white transition-all duration-500 ease-in-out rotate-[-45deg] group-hover:rotate-0" />
                    </a>
                  </div>
                </div>
              </div>
            </MotionTag>
          </div>
          <div className="lg:col-span-8 md:col-span-12 xl:ms-14 col-span-12">
            <div className="grid grid-cols-12 pb-6 border-b-1 border-[#ffffff59]">
              <MotionTag variant={fadeUp} trigger="view" delay={0.5} className="xl:col-span-4 lg:col-span-3 md:col-span-3 col-span-12 mb-7 md:mb-0">
                <h5 className="font-bold text-white text-[20px] mb-4">Links</h5>
                <p>
                  <Link to="/about"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold mb-2 inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    About
                  </Link>
                </p>
                <p>
                  <a
                    href="#!"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold mb-2 inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    Our Mission
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold mb-2 inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    Meet our team
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold mb-2 inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    Our Project
                  </a>
                </p>
                <p>
                  <Link to="/contact"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold mb-2 inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    Contact
                  </Link>
                </p>
              </MotionTag>
              <MotionTag variant={fadeUp} trigger="view" delay={0.7} className="xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-12 mb-7 md:mb-0">
                <h5 className="font-bold text-white text-[20px] mb-4">
                  Explore
                </h5>
                <p>
                  <a
                    href="#!"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold mb-2 inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    What We Offer
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold mb-2 inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    Our Story
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold mb-2 inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    Latest News
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold mb-2 inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    Help Center
                  </a>
                </p>
              </MotionTag>
              <MotionTag variant={fadeUp} trigger="view" delay={0.9} className="xl:col-span-5 lg:col-span-6 md:col-span-5 col-span-12 mb-7 md:mb-0">
                <h5 className="font-bold text-white text-[20px] mb-4">
                  Latest Post
                </h5>
                <div className="flex items-center gap-5 relative mt-4 pb-6 border-b-1 border-[#ffffff59]">
                  <div className="h-auto">
                    <img src={FtBlog1} className="max-w-max" alt="Blog" />
                  </div>
                  <div className="">
                    <h4 className="text-white font-bold text-[16px] mb-0 transition-all duration-500 ease-in-out group-hover:text-white">
                      <a
                        href="#!"
                        className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-white hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)] leading-7"
                      >
                        10 Simple Practices that Will Help You Get 1%
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-5 relative pt-6">
                  <div className="h-auto">
                    <img src={FtBlog2} className="max-w-max" alt="Blog" />
                  </div>
                  <div className="">
                    <h4 className="text-white font-bold text-[16px] mb-0 transition-all duration-500 ease-in-out group-hover:text-white">
                      <a
                        href="#!"
                        className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-white hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)] leading-7"
                      >
                        10 Simple Practices that Will Help You Get 1%
                      </a>
                    </h4>
                  </div>
                </div>
              </MotionTag>
            </div>
            <MotionTag variant={fadeUp} trigger="view" delay={1.1} className="flex justify-between flex-col md:flex-row xl:gap-32 gap-5 pt-8">
              <div className="flex gap-x-8 gap-y-4 flex-wrap">
                <a
                  href="#!"
                  className="flex items-center gap-3 text-light group"
                >
                  <span className="call bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center">
                    <BiSolidPhoneCall className="text-[16px] text-primary" />
                  </span>
                  <span className="text-white font-semibold transition-all duration-500 ease-in-out group-hover:text-primary">
                    (303) 555-0105
                  </span>
                </a>
                <a
                  href="#!"
                  className="flex items-center gap-3 text-light group"
                >
                  <span className="call bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center">
                    <IoMdMail className="text-[16px] text-primary" />
                  </span>
                  <span className="text-white font-semibold transition-all duration-500 ease-in-out group-hover:text-primary">
                    michael.mitc@example.com
                  </span>
                </a>
                <a
                  href="#!"
                  className="flex items-center gap-3 text-light group"
                >
                  <span className="call bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center">
                    <FaLocationDot className="text-[16px] text-primary" />
                  </span>
                  <span className="text-white font-semibold transition-all duration-500 ease-in-out group-hover:text-primary">
                    6391 Elgin St. Delaware New York. USA
                  </span>
                </a>
              </div>
              <div className="flex gap-4 mt-6 md:mt-0">
                <a
                  href="#!"
                  className="text-white transition-all duration-300 ease-in-out hover:text-primary"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#!"
                  className="text-white transition-all duration-300 ease-in-out hover:text-primary"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#!"
                  className="text-white transition-all duration-300 ease-in-out hover:text-primary"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="#!"
                  className="text-white transition-all duration-300 ease-in-out hover:text-primary"
                >
                  <FaInstagram />
                </a>
              </div>
            </MotionTag>
          </div>
        </div>
      </div>
      <div className="bg-primary py-6 mt-30 flex justify-center items-center relative z-20">
        <p className="text-white font-semibold">
          © Copyright 2025 by Precision Grow
        </p>
      </div>
      <img
        src={FtAni}
        className="absolute bottom-12 -right-5 animate-[horizontalMove_2s_linear_infinite]"
        alt="Footer"
      />
    </footer>
  );
};

export default Footer;
