import React from "react";
import Article from "./home/Article";
import { FaPlus } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import PageHero from "../components/PageHero";
import BlogMainImg from "../assets/images/articles/blog.jpg";
import User from "../assets/images/testimonials/1.png";
import { Link } from "react-router-dom";
import { MotionTag } from "../components/Animation";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "10 Simple Practices that Will Help You Get 1%",
      commentCount: 2,
      desc: "There are many variations of passages about of Lorem Ipsum avalable.",
      image: "src/assets/images/testimonials/1.png",
      day: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
      }),
      month: new Date().toLocaleDateString("en-GB", {
        month: "long",
      }),
      userName: "Jerome Bell",
      designation: "Admin",
      detailLink: "/blog-details",
    },
    {
      id: 2,
      title: "10 Simple Practices that Will Help You Get 1%",
      commentCount: 2,
      desc: "There are many variations of passages about of Lorem Ipsum avalable.",
      image: "src/assets/images/testimonials/1.png",
      day: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
      }),
      month: new Date().toLocaleDateString("en-GB", {
        month: "long",
      }),
      userName: "Jerome Bell",
      designation: "Admin",
      detailLink: "/blog-details",
    },
    {
      id: 3,
      title: "10 Simple Practices that Will Help You Get 1%",
      commentCount: 2,
      desc: "There are many variations of passages about of Lorem Ipsum avalable.",
      image: "src/assets/images/testimonials/1.png",
      day: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
      }),
      month: new Date().toLocaleDateString("en-GB", {
        month: "long",
      }),
      userName: "Jerome Bell",
      designation: "Admin",
      detailLink: "/blog-details",
    },
    {
      id: 4,
      title: "10 Simple Practices that Will Help You Get 1%",
      commentCount: 2,
      desc: "There are many variations of passages about of Lorem Ipsum avalable.",
      image: "src/assets/images/testimonials/1.png",
      day: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
      }),
      month: new Date().toLocaleDateString("en-GB", {
        month: "long",
      }),
      userName: "Jerome Bell",
      designation: "Admin",
      detailLink: "/blog-details",
    },
    {
      id: 5,
      title: "10 Simple Practices that Will Help You Get 1%",
      commentCount: 2,
      desc: "There are many variations of passages about of Lorem Ipsum avalable.",
      image: "src/assets/images/testimonials/1.png",
      day: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
      }),
      month: new Date().toLocaleDateString("en-GB", {
        month: "long",
      }),
      userName: "Jerome Bell",
      designation: "Admin",
      detailLink: "/blog-details",
    },
    {
      id: 6,
      title: "10 Simple Practices that Will Help You Get 1%",
      commentCount: 2,
      desc: "There are many variations of passages about of Lorem Ipsum avalable.",
      image: "src/assets/images/testimonials/1.png",
      day: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
      }),
      month: new Date().toLocaleDateString("en-GB", {
        month: "long",
      }),
      userName: "Jerome Bell",
      designation: "Admin",
      detailLink: "/blog-details",
    },
  ];
  return (
    <>
      <PageHero title="Blog" page="Blog" />
      <div className="py-30">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="grid grid-cols-3 gap-5">
            {blogs.map((blog) => (
              <MotionTag>
                <div className="card shadow-2xl mb-5 h-full group relative transition-all duration-500 ease-in-out after:transition-all nth-last-1:mb-0 after:duration-500 after:ease-in-out">
                  <div className="w-full relative overflow-hidden group/subGroup h-[17rem]">
                    <div className="absolute bottom-0 md:left-[2rem] left-[1rem] text-white flex justify-end">
                      <div className="bg-secondary px-4 py-2 text-[22px] font-semibold flex flex-col items-center justify-center gap-0 relative z-40">
                        {blog.day}
                        <span className="text-[14px] block mb-1">
                          {blog.month}
                        </span>
                      </div>
                      <div className="flex items-end -ms-1 relative z-30">
                        <div className="flex justify-end items-end pt-2.5 pe-2.5 border border-primary border-b-0">
                          <div className="flex gap-2 items-center text-white font-semibold text-[16px] bg-primary p-2 px-4">
                            <FaComments className="text-white text-[20px] transition-all duration-500 ease-in-out" />
                            {blog.commentCount} Comments
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={BlogMainImg}
                      className="w-full h-full object-cover"
                      alt="Blog"
                    />
                    <div className="absolute w-full h-full flex justify-center items-center bg-[#000000bb] top-0 left-0 text-4xl text-white transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                      <FaPlus />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-[2rem] pb-3 relative z-10">
                    {/* <div className="bg-primary h-[calc(100%-4rem)] w-[2px] ms-1 absolute transform translate-y-[-50%] top-[50%] md:left-[2rem] left-[1rem]"></div> */}
                    <div className="">
                      <h4 className="text-dark md:text-[1.55rem] text-[1.18rem] font-bold ps-1 group-hover:text-white">
                        <Link
                          to={blog.detailLink}
                          className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-secondary hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                        >
                          {blog.title}
                        </Link>
                      </h4>
                      <p className="text-light font-semibold py-3">
                        {blog.desc}
                      </p>
                      <div className="flex items-center gap-5 relative mt-4 bg-secondary p-4 text-secondary hover:text-white font-semibold text-[17px] transition-all ease-in-out duration-500 after:content-[''] after:absolute after:bg-primary after:top-0 after:right-0 after:w-0 after:h-full after:transition-all after:ease-in-out after:duration-500 group-hover:after:w-full group-hover:after:left-0">
                        <div className="rounded-full overflow-hidden h-[45px] w-[45px] relative z-30">
                          <img src={User} alt="Testimonial" />
                        </div>
                        <div className="relative z-30">
                          <h4 className="text-white font-bold text-[17px] mb-0 transition-all duration-500 ease-in-out group-hover:text-white">
                            <Link
                              to="#!"
                              className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-white hover:text-secondary group-hover:bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)]"
                            >
                              {blog.userName}
                            </Link>
                          </h4>
                          <h6 className="font-semibold text-light text-[14px] transition-all duration-500 ease-in-out group-hover:text-white">
                            {blog.designation}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionTag>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
