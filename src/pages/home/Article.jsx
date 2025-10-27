import React from "react";
import { FaComments } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import {
  MotionTag,
  fadeUp,
  fadeLeft,
  zoomIn,
  fadeDown,
} from "../../components/Animation";
import Heading from "../../components/Heading";
import BlogMainImg from "../../assets/images/articles/blog.jpg";
import User from "../../assets/images/testimonials/1.png";
import { FaPlus } from "react-icons/fa6";

const Article = () => {
  const articles = [
    {
      id: 1,
      title: "Circle Back, If You Want To Motivate",
      image: "src/assets/images/articles/1.jpg",
      commentCount: 2,
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      title: "Circle Back, If You Want To Motivate",
      image: "src/assets/images/articles/1.jpg",
      commentCount: 2,
      date: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      title: "Circle Back, If You Want To Motivate",
      image: "src/assets/images/articles/1.jpg",
      commentCount: 2,
      date: new Date().toLocaleDateString(),
    },
  ];
  return (
    <div className="pb-30">
      <div className="container mx-auto md:px-0 px-4">
        <MotionTag variant={fadeUp}>
          <Heading
            classes="flex justify-center items-center flex-col md:w-[80%] lg:w-[50%] mx-auto relative z-100 pb-14"
            subHeading="Article"
            heading="Latest News & Articles From The Blog Posts"
            hdClasses="text-center"
          />
        </MotionTag>
        <MotionTag variant={fadeUp} delay={0.5}>
          <div className="grid grid-cols-12 md:gap-8 gap-y-8">
            <div className="lg:col-span-6 xl:col-span-5 col-span-12 flex justify-around flex-col">
              {articles.map((article) => (
                <div
                  className="card border-[1.5px] mb-5 border-[#848e84] flex justify-between items-center group relative transition-all duration-500 ease-in-out after:transition-all nth-last-1:mb-0 after:duration-500 after:ease-in-out hover:bg-primary"
                  key={article.id}
                >
                  <div className="flex md:items-center md:flex-row flex-col gap-4 p-6 relative z-10">
                    <div className="md:w-[155px] w-auto">
                      <img src={article.image} alt={article.title} />
                    </div>
                    <div className="">
                      <div className="flex items-center pb-3 md:gap-8 gap-y-8">
                        <div className="flex gap-2 items-center text-light font-semibold text-[16px] group-hover:text-white">
                          <FaComments className="text-primary text-[20px] transition-all duration-500 ease-in-out group-hover:text-white" />
                          {article.commentCount} Comments
                        </div>
                        <div className="flex gap-2 items-center text-light font-semibold text-[16px] group-hover:text-white">
                          <MdAccessTimeFilled className="text-primary text-[20px] transition-all duration-500 ease-in-out group-hover:text-white" />
                          {article.date}
                        </div>
                      </div>
                      <h4 className="text-dark text-[24px] font-bold leading-7.5 ps-1 group-hover:text-white">
                        <a
                          href="#!"
                          className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-secondary group-hover:text-white group-hover:bg-[linear-gradient(to_right,#fff_0%,#fff_100%)]"
                        >
                          {article.title}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-6 xl:col-span-7 h-full col-span-12">
              <div className="card mb-5 h-full group relative transition-all duration-500 ease-in-out after:transition-all nth-last-1:mb-0 after:duration-500 after:ease-in-out">
                <div className="w-full relative overflow-hidden group/subGroup">
                  <div className="absolute text-2xl font-semibold bottom-0 md:left-[2rem] left-[1rem] text-white flex justify-center flex-col items-center bg-primary px-3 py-1 z-10">
                    26 <span className="text-[14px] block">October</span>
                  </div>
                  <img src={BlogMainImg} className="w-full" alt="Blog" />
                  <div className="absolute w-full h-full flex justify-center items-center bg-[#000000bb] top-0 left-0 text-4xl text-white transition-all duration-500 ease-in-out transform translate-y-full group-hover/subGroup:translate-y-0">
                    <FaPlus />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-[1.5px] border-[#848e84] p-[2rem] ps-[3.3rem] relative z-10">
                  <div className="bg-primary h-[calc(100%-4rem)] w-[2px] ms-1 absolute transform translate-y-[-50%] top-[50%] md:left-[2rem] left-[1rem]"></div>
                  <div className="">
                    <div className="flex items-center pb-2.5 md:gap-8 gap-y-8">
                      <div className="flex gap-2 items-center text-light font-semibold text-[16px]">
                        <FaComments className="text-primary text-[20px] transition-all duration-500 ease-in-out" />
                        2 Comments
                      </div>
                    </div>
                    <h4 className="text-dark md:text-[1.98rem] text-[1.58rem] font-bold md:leading-11 leading-8 ps-1 group-hover:text-white">
                      <a
                        href="#!"
                        className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-secondary hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                      >
                        10 Simple Practices that Will Help You Get 1%
                      </a>
                    </h4>
                    <div className="flex items-center gap-5 relative mt-4">
                      <div className="rounded-full overflow-hidden h-[60px] w-[60px]">
                        <img src={User} alt="Testimonial" />
                      </div>
                      <div className="">
                        <h4 className="text-secondary font-bold text-[20px] mb-0 transition-all duration-500 ease-in-out group-hover:text-white">
                          <a
                            href="#!"
                            className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-secondary hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                          >
                            Jerome Bell
                          </a>
                        </h4>
                        <h6 className="font-semibold text-light text-[1.06rem] transition-all duration-500 ease-in-out">
                          Admin
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionTag>
      </div>
    </div>
  );
};

export default Article;
