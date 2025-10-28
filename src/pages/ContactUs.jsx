import React from "react";
import ProductQuote from "./home/ProductQuote";
import ContactImg from "../assets/images/contact.jpg";
import Heading from "../components/Heading";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import {
  FaXTwitter,
  FaLocationDot,
  FaRegCircleUser,
  FaBars,
  FaArrowRightLong,
} from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { MotionTag, fadeUp } from "../components/Animation";

const ContactUs = () => {
  return (
    <>
      <PageHero title="Contact Us" page="Contact Us" />
      <div className="pt-30">
        <div className="container mx-auto md:px-0 px-4">
          <MotionTag>
            <Heading
              classes="flex justify-center items-center flex-col lg:w-[50%] md:w-[70%] w-full mx-auto relative z-100 pb-14"
              subHeading="Latest Projects"
              heading="Our recently Completed Latest Projects"
              hdClasses="text-center"
            />
          </MotionTag>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-0">
            <div className="relative md:w-[80%] mx-auto w-full lg:w-full after:content-[''] after:absolute after:w-full after:h-[87%] after:top-0 after:left-0 after:bg-secondary">
              {/* <MotionTag> */}
              <img
                src={ContactImg}
                className="ps-12 relative z-10 pt-12 w-full h-full object-cover object-center"
                alt="Contact"
              />
              {/* </MotionTag> */}
            </div>
            <div className="relative flex flex-col justify-end lg:mt-0 mt-10 pt-[18rem]">
              <div className="bg-secondary lg:w-[85%] md:w-[70%] w-full z-20 absolute top-0 left-0">
                <div className="flex items-center gap-5 relative group py-4 px-7  border-b border-[#ffffff96]">
                  <div className="rounded-full overflow-hidden transition-all duration-500 ease-in-out flex justify-center items-center bg-white text-primary h-[50px] w-[50px] group-hover:bg-primary group-hover:text-white">
                    <BiSolidPhoneCall className="text-[20px]" />
                  </div>
                  <div className="">
                    <h6 className="font-semibold text-light text-[1.06rem] transition-all duration-500 ease-in-out">
                      Call for Details?
                    </h6>
                    <h4 className="text-white font-bold text-[18px] mb-0 transition-all duration-500 ease-in-out group-hover:text-white">
                      <a
                        href="#!"
                        className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-white hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                      >
                        Free + 23(000)-8050
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-5 relative group py-4 px-7  border-b border-[#ffffff96]">
                  <div className="rounded-full overflow-hidden transition-all duration-500 ease-in-out flex justify-center items-center bg-white text-primary h-[50px] w-[50px] group-hover:bg-primary group-hover:text-white">
                    <IoMdMail className="text-[20px]" />
                  </div>
                  <div className="">
                    <h6 className="font-semibold text-light text-[1.06rem] transition-all duration-500 ease-in-out">
                      Send Email
                    </h6>
                    <h4 className="text-white font-bold text-[18px] mb-0 transition-all duration-500 ease-in-out group-hover:text-white">
                      <a
                        href="#!"
                        className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-white hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                      >
                        demo@gmail.com
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-5 relative group py-4 px-7  border-b border-[#ffffff96]">
                  <div className="rounded-full overflow-hidden transition-all duration-500 ease-in-out flex justify-center items-center bg-white text-primary h-[50px] w-[50px] group-hover:bg-primary group-hover:text-white">
                    <FaLocationDot className="text-[20px]" />
                  </div>
                  <div className="">
                    <h6 className="font-semibold text-light text-[1.06rem] transition-all duration-500 ease-in-out">
                      Visit Anytime
                    </h6>
                    <h4 className="text-white font-bold text-[18px] mb-0 transition-all duration-500 ease-in-out group-hover:text-white">
                      <a
                        href="#!"
                        className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-white hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                      >
                        Parel, Mumbai, India
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <MotionTag className="relative p-10 after:content-[''] after:absolute after:w-full after:h-[112%] after:top-[-12%] after:left-0 after:border lg:after:border-l-0 lg:after:border-b-1 after:border-b-0 after:border-secondary">
                <div className="relative z-20">
                  <h4 className="text-secondary text-[30px] font-bold mb-7 leading-10 lg:w-[85%] md:w-[70%] w-full">
                    Get In Touch with Us and Enjoy Top- Notch Support
                  </h4>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="bg-[#f2f2f2] text-[16px] font-semibold px-7 py-4 outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="bg-[#f2f2f2] text-[16px] font-semibold px-7 py-4 outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="bg-[#f2f2f2] text-[16px] font-semibold px-7 py-4 outline-0 border border-[#f2f2f2] focus:border-primary w-full h-38"
                      placeholder="Write Message..."
                    ></textarea>
                  </div>
                  <Button
                    className="btn-primary font-semibold btn-large"
                    title="Send Message"
                  />
                </div>
              </MotionTag>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5225162673773!2d72.8379048759351!3d18.996683554456318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x455fc37258faed89%3A0x9766a99df4596373!2sPrecision%20Grow!5e0!3m2!1sen!2sin!4v1760940372166!5m2!1sen!2sin"
          className="w-full h-[25rem]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
