import { useState } from "react";
// Import Swiper React components
import { AiFillProduct } from "react-icons/ai";
import Button from "../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
// import required modules
import { FreeMode, Thumbs, EffectFade } from "swiper/modules";

import Counter from "../../components/Counter";

// Images
import shape1 from "../../assets/images/hero/shapes/1.png";
import shape2 from "../../assets/images/hero/shapes/2.png";
import shape3 from "../../assets/images/hero/shapes/3.png";

import {
  MotionTag,
  fadeUp,
  fadeLeft,
  zoomIn,
  fadeDown,
  zoomX,
  fadeUpHero,
} from "../../components/Animation";

const Hero = () => {
  const sliderContents = [
    {
      id: 1,
      bgImage: "src/assets/images/hero/hero.png",
      title: (
        <>
          Speedy & <br /> Reliable Service <br /> Fulfillment1
        </>
      ),
      tagLine: "Transport & Logistic Company",
      btnTitle: "Discover More",
      count: 230,
    },
    {
      id: 2,
      bgImage: "src/assets/images/hero/hero.png",
      title: (
        <>
          Speedy & <br /> Reliable Service <br /> Fulfillment2
        </>
      ),
      tagLine: "Transport & Logistic Company",
      btnTitle: "Discover More",
      count: 230,
    },
    {
      id: 3,
      bgImage: "src/assets/images/hero/hero.png",
      title: (
        <>
          Speedy & <br /> Reliable Service <br /> Fulfillment3
        </>
      ),
      tagLine: "Transport & Logistic Company",
      btnTitle: "Discover More",
      count: 230,
    },
  ];
  const sliderThumbs = [
    {
      id: 1,
      thumbImage: "src/assets/images/hero/thumb-images/1.jpg",
    },
    {
      id: 2,
      thumbImage: "src/assets/images/hero/thumb-images/2.jpg",
    },
    {
      id: 3,
      thumbImage: "src/assets/images/hero/thumb-images/3.jpg",
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const textVariants = {
    hidden: { y: "100%", opacity: 0 }, // start below
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="hero relative overflow-x-hidden">
      {/* <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(90deg,_#15B01B_-17.66%,_rgba(8,_77,_59,_0)_70.74%)] z-10"></div> */}
      <div className="relative">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          // navigation={true}
          effect="fade"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, EffectFade]}
          className=""
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {sliderContents.map((slide, index) => (
            <SwiperSlide
              className={`w-full bg-cover bg-center ${
                activeIndex === index 
                ? "active-slide" : "" 
              }`}
              key={slide.id}
            >
              {activeIndex === index && (
                <>
                  <MotionTag
                    as="div"
                    variant={zoomX}
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.bgImage})` }}
                  />
                  <div className="absolute top-0 left-0 h-full w-full xl:bg-[linear-gradient(90deg,_#15B01B_-17.66%,_rgba(8,_77,_59,_0)_70.74%)] xl:bg-transparent bg-[#063d1de6] z-10"></div>
                  <div className="pt-44 pb-50">
                    <div className="container mx-auto xl:px-0 px-4">
                      <div className="grid grid-cols-12 relative z-30">
                        <div className="col-span-12 relative">
                          <div className="overflow-hidden mb-3">
                            <MotionTag
                              as="h5"
                              trigger="load"
                              variant={fadeUpHero}
                              duration={0.8}
                              delay={0.9}
                              className="text-primary font-semibold inline-block"
                            >
                              {slide.tagLine}
                            </MotionTag>
                          </div>
                          <div className="overflow-hidden">
                            <MotionTag
                              as="h2"
                              variant={fadeUpHero}
                              trigger="load"
                              // duration={1.3}
                              duration={1}
                              delay={1.4}
                              className="lg:text-[70px] md:text-[60px] text-[48px] text-white font-bold lg:leading-23 md:leading-20 mb-8"
                            >
                              {slide.title}
                            </MotionTag>
                          </div>
                          <div className="overflow-hidden">
                            <MotionTag
                              variant={fadeUpHero}
                              trigger="load"
                              duration={0.8}
                              delay={1.7}
                            >
                              <Button
                                className="btn-white font-semibold btn-large mb-5 md:mb-0"
                                title={slide.btnTitle}
                              />
                            </MotionTag>
                          </div>
                          <MotionTag
                            variant={zoomIn}
                            delay={0.8}
                            className="origin-center"
                          >
                            <div className="md:absolute relative inline-block md:bottom-0 lg:left-[37%] md:left-[68%] left-0 bottom-[-5%] transform md:rotate-[-45deg] rotate-[deg] z-30 md:mt-0 mt-6">
                              <img src={shape3} alt="Hero" />
                              <div className="bg-white text-primary h-[50px] w-[50px] rounded-full text-2xl flex justify-center items-center absolute top-[-25px] left-[50%] transform translate-x-[-50%]">
                                <AiFillProduct />
                              </div>
                              <div className="absolute md:bottom-[55px] bottom-[60px] left-[50%] transform translate-x-[-50%] flex gap-3 justify-center items-center">
                                <h5 className="text-white text-[14px] font-semibold leading-5">
                                  Product <br /> Transport
                                </h5>
                                <Counter
                                  end={slide.count}
                                  className="text-white md:text-[2.1rem] text-[1.6rem]"
                                />
                              </div>
                            </div>
                          </MotionTag>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MotionTag
                    variant={fadeLeft}
                    trigger="load"
                    delay={0.8}
                    className="absolute hidden xl:block top-[50%] left-3 z-10"
                  >
                    <img
                      src={shape1}
                      className="animate-[slideMove_2s_linear_infinite]"
                      alt="Hero"
                    />
                  </MotionTag>
                  <MotionTag
                    variant={fadeLeft}
                    trigger="load"
                    delay={0.3}
                    className="absolute top-0 left-0 hidden xl:block"
                  >
                    <img src={shape2} className="" alt="Hero" />
                  </MotionTag>
                </>
              )}
              {/* <img
                src={shape2}
                className="absolute top-0 left-0 hidden lg:block"
                alt="Hero"
              /> */}
            </SwiperSlide>
          ))}
        </Swiper>

        {sliderThumbs.map((img, index) => (
          <div
            className={`thumb-num bg-primary h-[40px] w-[40px] text-[16px] font-semibold text-white absolute bottom-0 lg:left-[calc((100%-1200px)/2)] md:left-[calc((100%-730px)/2)] left-4 transition-all duration-500 ease-in-out flex justify-center items-center z-40 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
            key={img.id}
          >
            {img.id}
          </div>
        ))}

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="thumb-slider lg:left-[calc((100%-1120px)/2)] md:left-[calc((100%-650px)/2)] left-[55px]"
        >
          {sliderThumbs.map((img, index) => (
            <SwiperSlide
              className={`${activeIndex === index ? "" : ""}`}
              key={img.id}
            >
              <div className="image">
                <img
                  src={img.thumbImage}
                  className="w-full h-full object-cover object-center"
                  alt="thumb"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
