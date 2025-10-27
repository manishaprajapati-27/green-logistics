import React from "react";
import Heading from "../../components/Heading";
import { BsBoxSeamFill, BsStopwatchFill } from "react-icons/bs";
import { FaTags } from "react-icons/fa6";
import {
  MotionTag,
  fadeUp,
  fadeLeft,
  zoomIn,
  fadeDown,
} from "../../components/Animation";
import WhyImage from "../../assets/images/why-choose-us/1.jpg";
import Shape1 from "../../assets/images/why-choose-us/1.png";
import Shape2 from "../../assets/images/why-choose-us/2.png";
import Pattern from "../../assets/images/why-choose-us/pattern.png";
import Bg from "../../assets/images/why-choose-us/bg.png";

const WhyChooseUs = () => {
  const whyChoose = [
    {
      id: 1,
      icon: (
        <BsBoxSeamFill className="group-hover:animate-[flipIn_0.8s_ease-in-out_forwards] text-2xl" />
      ),
      title: (
        <>
          Packaging and <br /> Distribution
        </>
      ),
      para: "There are many variations of passages about of Lorem Ipsum.",
    },
    {
      id: 2,
      icon: (
        <BsStopwatchFill className="group-hover:animate-[flipIn_0.8s_ease-in-out_forwards] text-2xl" />
      ),
      title: (
        <>
          Delivery On <br /> Time
        </>
      ),
      para: "It is a long established fact that a reader will be distracted by.",
    },
    {
      id: 3,
      icon: (
        <FaTags className="group-hover:animate-[flipIn_0.8s_ease-in-out_forwards] text-2xl" />
      ),
      title: "24/7 Important Service",
      para: "We don't need a contract, do we doing some work for us pro.",
    },
  ];
  return (
    <div className="py-30 bg-secondary relative">
      <div className="container mx-auto relative z-20 md:px-0 px-4">
        <div className="lg:max-w-[735px] ms-auto">
          <MotionTag variant={fadeUp}>
            <Heading
            classes="lg:w-[70%] md:ms-30 ms-0 flex justify-center flex-col items-center"
            subHeading="Why Choose Us"
            heading="Why You Should Choose Our Transwide Agency"
            hdClasses="text-white text-center"
          />
          </MotionTag>
          <MotionTag variant={fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-y-4 mt-14">
            {whyChoose.map((data) => (
              <div className="card overflow-hidden p-7 pt-4 bg-white relative group after:content-[''] after:absolute after:w-[116px] after:h-[236px] after:bg-[#f2f2f2] after:rounded-[50%] after:top-[-130px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:bg-primary" key={data.id}>
                <div className="relative z-10">
                  <div className="w-[60px] h-[60px] rounded-full bg-white text-primary flex justify-center items-center">
                    {data.icon}
                  </div>
                  <h4 className="mb-2 text-dark text-[20px] font-bold mt-8">
                    {data.title}
                  </h4>
                  <p className="text-light font-semibold">{data.para}</p>
                </div>
              </div>
            ))}
          </div>
          </MotionTag>
        </div>
      </div>
      <div className="absolute top-0 left-10 h-full hidden lg:block">
        <div className="h-full">
          <img
            src={WhyImage}
            className="h-full w-full object-cover mask-no-repeat mask-center mask-size-contain relative z-10"
            style={{
              WebkitMaskImage: `url("src/assets/images/why-choose-us/image-svg.svg`,
              maskImage: `url("src/assets/images/why-choose-us/image-svg.svg`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskSize: "cover",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
            alt="Why Choose Us"
          />
          <img
            src={Shape1}
            className="absolute bottom-0 left-[4%]"
            alt="Shape1"
          />
          <img
            src={Shape2}
            className="absolute top-0 right-[46px] h-[99%] z-10"
            alt="Shape2"
          />
          <img
            src={Pattern}
            className="absolute bottom-0 right-0 z-0"
            alt="Pattern"
          />
        </div>
      </div>
      <img src={Bg} className="absolute top-0 right-0 h-full" alt="Bg" />
    </div>
  );
};

export default WhyChooseUs;
