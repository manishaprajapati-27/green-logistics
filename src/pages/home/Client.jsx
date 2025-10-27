import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import client1 from "../../assets/images/client/1.png";
import client1Hover from "../../assets/images/client/1-hover.png";

const Client = ({className}) => {
  return (
    <div className={`${className}`}>
      <div className="container mx-auto lg:px-0 px-4">
        <Swiper
          slidesPerView={2}
          className="clientle-slider"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          loop={true}
          centeredSlides={false}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide className="group relative">
            <img src={client1} alt="Client" />
            <img
              src={client1Hover}
              className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              alt="Client"
            />
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={client1} alt="Client" />
            <img
              src={client1Hover}
              className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              alt="Client"
            />
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={client1} alt="Client" />
            <img
              src={client1Hover}
              className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              alt="Client"
            />
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={client1} alt="Client" />
            <img
              src={client1Hover}
              className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              alt="Client"
            />
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={client1} alt="Client" />
            <img
              src={client1Hover}
              className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              alt="Client"
            />
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={client1} alt="Client" />
            <img
              src={client1Hover}
              className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              alt="Client"
            />
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={client1} alt="Client" />
            <img
              src={client1Hover}
              className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              alt="Client"
            />
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={client1} alt="Client" />
            <img
              src={client1Hover}
              className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              alt="Client"
            />
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={client1} alt="Client" />
            <img
              src={client1Hover}
              className="absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
              alt="Client"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
