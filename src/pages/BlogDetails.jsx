import React from "react";
import { FaCircle, FaComments, FaUserCircle } from "react-icons/fa";
import {
  MotionTag,
  fadeUp,
  fadeLeft,
  zoomIn,
  fadeDown,
} from "../components/Animation";
import BlogMainImg from "../assets/images/articles/blog.jpg";
import BlogComment from "../assets/images/articles/blog-comment-1.jpg";
import User from "../assets/images/testimonials/1.png";
import { FaPlus } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <>
      <PageHero title="Blog Details" page="Blog Details" />
      <div className="py-30">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="card mb-5 h-full relative lg:w-[70%] w-full mx-auto">
            <MotionTag
              variant={fadeUp}
              className="w-full relative overflow-hidden"
            >
              <div className="absolute text-2xl font-semibold bottom-0 md:left-[2rem] left-[1rem] text-white flex justify-center flex-col items-center bg-primary px-3 py-1 z-10">
                26 <span className="text-[14px] block">October</span>
              </div>
              <img src={BlogMainImg} className="w-full" alt="Blog" />
            </MotionTag>
            <div className="flex items-center gap-4 pt-[2rem] relative z-10">
              <MotionTag variant={fadeUp} className="">
                <div className="flex items-center pb-2.5 gap-4">
                  <a
                    href="#!"
                    className="flex gap-2 items-center text-light font-semibold text-[15px] transition-all duration-500 ease-in-out hover:text-primary"
                  >
                    <FaUserCircle className="text-primary text-[16px] transition-all duration-500 ease-in-out" />
                    By Admin
                  </a>
                  <div className="text-light text-[16px]">|</div>
                  <a
                    href="#!"
                    className="flex gap-2 items-center text-light font-semibold text-[15px]"
                  >
                    <FaComments className="text-primary text-[16px] transition-all duration-500 ease-in-out" />
                    2 Comments
                  </a>
                </div>
                <h4 className="text-dark md:text-[1.98rem] mb-4 text-[1.58rem] font-bold md:leading-11 leading-8 ps-1 group-hover:text-white">
                  <a
                    href="#!"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-secondary hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]"
                  >
                    10 Simple Practices that Will Help You Get 1%
                  </a>
                </h4>
                <div className="mb-8">
                  <p className="text-light font-semibold mb-3">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteradution in
                    some form by injected humour, or randomised words which
                    don't look even slightly believable. If you are going There
                    are many variations of passages of lorem Ipsum available,
                    but the majority have suffered alteradution in some form by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going.
                  </p>
                  <p className="text-light font-semibold">
                    Ultimate measure of success you gotta smoke test your
                    hypothesis, nor hire the best slow-walk our commitment. Lean
                    into that problem . Tiger team ultimate measure of success.
                    Let's not solutionize this right now parking lot it
                    low-hanging
                  </p>
                </div>
              </MotionTag>
            </div>
            <div className="border-t border-b border-light py-6 flex justify-between md:flex-row flex-col gap-5">
              <MotionTag className="flex items-center gap-2">
                <h4 className="text-secondary font-bold text-[20px]">
                  Post In:
                </h4>
                <div className="flex gap-2">
                  <Button
                    className="btn btn-primary text-[14px] font-semibold"
                    title="Logistics"
                  />
                  <Button
                    className="btn btn-primary text-[14px] font-semibold"
                    title="Transport"
                  />
                </div>
              </MotionTag>
              <MotionTag className="flex items-center gap-2">
                <h4 className="text-secondary font-bold text-[20px]">Tags:</h4>
                <div className="flex gap-2">
                  <Link className="text-light font-semibold transition-all ease-in-out duration-500 hover:text-primary">
                    Warehouse,
                  </Link>
                  <Link className="text-light font-semibold transition-all ease-in-out duration-500 hover:text-primary">
                    Freight
                  </Link>
                </div>
              </MotionTag>
            </div>
            <div className="py-10">
              <MotionTag as="h4" className="text-secondary font-bold text-[26px] pb-4">
                Comments (2)
              </MotionTag>
              <div className="flex md:items-center md:flex-row flex-col md:gap-10 gap-3 relative pb-10 border-b border-light">
                <MotionTag>
                  <div className="rounded-full overflow-hidden md:h-[160px] md:w-[160px] w-[160px] h-[160px] transition-all duration-500 ease-in-out group-hover:border-white">
                    <img
                      src={BlogComment}
                      className="w-full h-full object-cover"
                      alt="Testimonial"
                    />
                  </div>
                </MotionTag>
                <MotionTag className="">
                  <h4 className="text-secondary font-bold text-[24px] mb-2 transition-all duration-500 ease-in-out group-hover:text-white">
                    David Shon
                  </h4>
                  <p className="text-light font-semibold mb-3">
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit amet nec elit.Nisl bibendum
                    accumsan vitae vitae.
                  </p>
                  <Button
                    className="btn btn-grey text-[14px] font-semibold"
                    title="Reply"
                  />
                </MotionTag>
              </div>
              <div className="flex md:items-center md:flex-row flex-col md:gap-10 gap-3 relative py-10 border-b border-light">
                <MotionTag>
                  <div className="rounded-full overflow-hidden md:h-[160px] md:w-[160px] w-[160px] h-[160px] transition-all duration-500 ease-in-out group-hover:border-white">
                    <img
                      src={BlogComment}
                      className="w-full h-full object-cover"
                      alt="Testimonial"
                    />
                  </div>
                </MotionTag>
                <MotionTag className="">
                  <h4 className="text-secondary font-bold text-[24px] mb-2 transition-all duration-500 ease-in-out group-hover:text-white">
                    David Shon
                  </h4>
                  <p className="text-light font-semibold mb-3">
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit amet nec elit.Nisl bibendum
                    accumsan vitae vitae.
                  </p>
                  <Button
                    className="btn btn-grey text-[14px] font-semibold"
                    title="Reply"
                  />
                </MotionTag>
              </div>
            </div>
            <MotionTag className="pb-10">
              <MotionTag
                as="h4"
                className="text-secondary font-bold text-[26px] pb-4"
              >
                Leave a Comment
              </MotionTag>
              <MotionTag className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
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
              </MotionTag>
              <MotionTag className="mb-4">
                <textarea
                  className="bg-[#f2f2f2] text-[16px] font-semibold px-7 py-4 outline-0 border border-[#f2f2f2] focus:border-primary w-full h-38"
                  placeholder="Write Message..."
                ></textarea>
              </MotionTag>
              <MotionTag>
                <Button
                  className="btn-primary font-semibold btn-large"
                  title="Submit a Comment"
                />
              </MotionTag>
            </MotionTag>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
