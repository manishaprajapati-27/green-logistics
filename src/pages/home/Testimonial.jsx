import React from "react";
import Heading from "../../components/Heading";
import { FaStar } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import {
  MotionTag,
  fadeUp,
  fadeLeft,
  zoomIn,
  fadeDown,
} from "../../components/Animation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Darlene Robertson",
      designation: "Customer",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/1.png",
    },
    {
      id: 2,
      name: "Darlene Robertson",
      designation: "Customer",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/1.png",
    },
    {
      id: 3,
      name: "Darlene Robertson",
      designation: "Customer",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/1.png",
    },
    {
      id: 4,
      name: "Darlene Robertson",
      designation: "Customer",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/1.png",
    },
    {
      id: 5,
      name: "Darlene Robertson",
      designation: "Customer",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/1.png",
    },
  ];
  return (
    <div className="py-30">
      <div className="lg:ms-[calc((100%-1200px)/2)] md:ms-[calc((100%-720px)/2)] mx-4 relative">
        <div className="absolute top-0 left-0">
          <MotionTag variant={fadeUp}>
            <Heading
              classes="md:w-[75%] lg:w-[70%] w-full"
              subHeading="Testimonial"
              heading="See What People are Talking About?"
            />
          </MotionTag>
        </div>
        <MotionTag variant={fadeUp} >
          <Swiper
          // slidesPerView={2.5}
          spaceBetween={30}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            duration: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          className="swiper-testimonial"
          style={{ paddingTop: "180px" }}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 2.5,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              className="border-2 border-dashed border-light bg-white md:px-11 md:py-10 py-6 px-7 group transition-all duration-500 ease-in-out hover:bg-primary hover:border-primary"
              key={testimonial.id}
            >
              <div className="flex md:items-center md:flex-row flex-col gap-5 relative">
                <div className="border-primary border-6 rounded-full overflow-hidden md:h-[150px] md:w-[150px] w-[120px] h-[120px] transition-all duration-500 ease-in-out group-hover:border-white">
                  <img src={testimonial.image} alt="Testimonial" />
                </div>
                <div className="">
                  <div className="flex gap-1 text-primary text-2xl mb-3 transition-all duration-500 ease-in-out group-hover:text-white">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <h4 className="text-secondary font-bold text-[20px] mb-2 transition-all duration-500 ease-in-out group-hover:text-white">
                    {testimonial.name}
                  </h4>
                  <h6 className="font-semibold text-light text-[1.06rem] transition-all duration-500 ease-in-out group-hover:text-white">
                    {testimonial.designation}
                  </h6>
                  <div className="absolute top-0 right-0 text-[3rem] lg:text-[5rem] transition-all duration-500 ease-in-out text-[#f2f2f2] group-hover:text-white group-hover:animate-[flipUp_0.8s_ease-in-out_forwards]">
                    <BiSolidQuoteAltLeft />
                  </div>
                </div>
              </div>
              <p className="text-light leading-2 font-medium pt-5 italic text-[20px] transition-all duration-500 ease-in-out group-hover:text-[#f2f2f2]">
                {testimonial.desc}
              </p>
              <div className="absolute bottom-2 right-2 w-[20px] h-[20px] bg-secondary animate-[zoomOut_2s_linear_infinite] group-hover:bg-white"></div>
              <div className="absolute bottom-[-2px] right-[-2px] w-[10px] h-[10px] bg-primary group-hover:bg-secondary"></div>
            </SwiperSlide>
          ))}
        </Swiper>
        </MotionTag>
      </div>
    </div>
  );
};

export default Testimonial;
