import { useState } from "react";
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
import productD from "../assets/images/product/product-d-1.png";
import User from "../assets/images/testimonials/1.png";
import { FaPlus } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GoStar } from "react-icons/go";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const handleCountIn = () => {
    setCount(count + 1);
  };
  const handleCountDe = () => {
    // setCount(count-1)
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <PageHero title="Product Details" page="Product Details" />
      <div className="py-30">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="card mb-5 h-full relative mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <div className="w-full md:w-[80%] lg:w-full relative overflow-hidden border border-light">
                <img src={productD} className="w-full" alt="Product" />
              </div>
              <div className="flex gap-4 pt-[2rem] relative z-10">
                <div className="">
                  <h4
                    className="text-secondary flex gap-3 items-end md:text-[1.98rem] mb-4 text-[1.58rem] font-bold"
                    style={{ lineHeight: "normal" }}
                  >
                    Boss Chair
                    <span className="text-primary text-[18px] flex gap-0.5 items-end leading-normal font-semibold">
                      <FaRupeeSign className="mb-1 leading-0" />
                      520
                    </span>
                  </h4>
                  <div className="flex gap-5 border-b border-light pb-4">
                    <div className="flex gap-1 text-secondary text-2xl mb-3 transition-all duration-500 ease-in-out group-hover:text-white">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-light font-semibold">
                      <a href="#!">2 Customer Review</a>
                    </p>
                  </div>
                  <div className="mb-8 pt-4">
                    <p className="text-light font-semibold mb-3">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteradution in
                      some form by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>

                    <div className="flex items-center gap-6 mb-8 mt-6">
                      <h4 className="text-secondary font-bold text-[20px]">
                        Quantity
                      </h4>
                      <div className="flex">
                        <Link
                          onClick={handleCountDe}
                          className="text-light font-semibold transition-all ease-in-out duration-500 hover:text-primary h-10 w-10 flex justify-center items-center border border-[#f2f2f2] text-[22px]"
                        >
                          <FiMinus />
                        </Link>
                        <div className="h-10 w-10 flex justify-center items-center border border-[#f2f2f2] text-[22px] text-dark font-semibold transition-all ease-in-out duration-500 hover:text-primary">
                          {count}
                        </div>
                        <Link
                          onClick={handleCountIn}
                          className="text-light font-semibold transition-all ease-in-out duration-500 hover:text-primary h-10 w-10 flex justify-center items-center border border-[#f2f2f2] text-[22px]"
                        >
                          <FiPlus />
                        </Link>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="btn btn-primary text-[14px] font-semibold"
                        title="Add to Cart"
                      />
                      <Button
                        className="btn btn-primary text-[14px] font-semibold"
                        title="Add to Wishlist"
                      />
                    </div>
                    <div className="py-6 flex gap-7 items-center">
                      <h4 className="text-secondary font-bold text-[20px]">
                        Share with friends
                      </h4>
                      <div className="flex gap-4 mt-6 md:mt-0">
                        <a
                          href="#!"
                          className="text-secondary h-10 w-10 flex items-center justify-center rounded-full bg-[#f2f2f2] transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href="#!"
                          className="text-secondary h-10 w-10 flex items-center justify-center rounded-full bg-[#f2f2f2] transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
                        >
                          <FaXTwitter />
                        </a>
                        <a
                          href="#!"
                          className="text-secondary h-10 w-10 flex items-center justify-center rounded-full bg-[#f2f2f2] transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
                        >
                          <FaPinterestP />
                        </a>
                        <a
                          href="#!"
                          className="text-secondary h-10 w-10 flex items-center justify-center rounded-full bg-[#f2f2f2] transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
                        >
                          <FaInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 border-b border-light">
              <h4 className="text-secondary font-bold text-[28px] pb-4">
                Description
              </h4>
              <p className="text-light font-semibold">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </p>
              <ul className="my-4">
                <li className="text-secondary text-[17px] font-semibold flex gap-2 items-center mb-3">
                  <FaCheckCircle className="text-primary" /> Lorem ipsum dolor
                  sit amet consectetur.
                </li>
                <li className="text-secondary text-[17px] font-semibold flex gap-2 items-center mb-3">
                  <FaCheckCircle className="text-primary" /> Lorem ipsum dolor
                  sit amet consectetur.
                </li>
                <li className="text-secondary text-[17px] font-semibold flex gap-2 items-center mb-3">
                  <FaCheckCircle className="text-primary" /> Lorem ipsum dolor
                  sit amet consectetur.
                </li>
              </ul>
              <p className="text-light font-semibold">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.
              </p>
            </div>
            <div className="py-10">
              <h4 className="text-secondary font-bold text-[28px] pb-8">
                2 Reviews
              </h4>
              <div className="flex items-center md:flex-row flex-col gap-10 relative pb-10 border-b border-light">
                <div>
                  <div className="rounded-full overflow-hidden md:h-[160px] md:w-[160px] w-[160px] h-[160px] transition-all duration-500 ease-in-out group-hover:border-white">
                    <img
                      src={BlogComment}
                      className="w-full h-full object-cover"
                      alt="Testimonial"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center">
                    <h4 className="text-secondary font-bold text-[24px] mb-2 transition-all duration-500 ease-in-out flex items-center group-hover:text-white">
                      David Shon{" "}
                      <span className="text-primary text-[17px] ms-3">
                        10 May, 2024 . 9:00 AM
                      </span>
                    </h4>
                    <div className="flex gap-1 text-secondary text-2xl mb-3 transition-all duration-500 ease-in-out group-hover:text-white">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
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
                </div>
              </div>
              <div className="flex items-center md:flex-row flex-col gap-10 relative py-10 border-b border-light">
                <div>
                  <div className="rounded-full overflow-hidden md:h-[160px] md:w-[160px] w-[160px] h-[160px] transition-all duration-500 ease-in-out group-hover:border-white">
                    <img
                      src={BlogComment}
                      className="w-full h-full object-cover"
                      alt="Testimonial"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center">
                    <h4 className="text-secondary font-bold text-[24px] mb-2 transition-all duration-500 ease-in-out flex items-center group-hover:text-white">
                      David Shon
                      <span className="text-primary text-[17px] ms-3">
                        10 May, 2024 . 9:00 AM
                      </span>
                    </h4>
                    <div className="flex gap-1 text-secondary text-2xl mb-3 transition-all duration-500 ease-in-out group-hover:text-white">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
            <div className="pb-10">
              <h4 className="text-secondary font-bold text-[28px] pb-3">
                Add a Review
              </h4>
              <div className="pb-8 flex gap-7 items-center">
                <h4 className="text-secondary font-semibold text-[20px]">
                  Share with friends
                </h4>
                <div className="flex gap-4 md:mt-0">
                  <span className="text-secondary text-2xl">
                    <GoStar />
                  </span>
                  <span className="text-secondary text-2xl">
                    <GoStar />
                  </span>
                  <span className="text-secondary text-2xl">
                    <GoStar />
                  </span>
                  <span className="text-secondary text-2xl">
                    <GoStar />
                  </span>
                  <span className="text-secondary text-2xl">
                    <GoStar />
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
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
              </div>
              <div className="mb-4">
                <textarea
                  className="bg-[#f2f2f2] text-[16px] font-semibold px-7 py-4 outline-0 border border-[#f2f2f2] focus:border-primary w-full h-38"
                  placeholder="Write Message..."
                ></textarea>
              </div>
              <Button
                className="btn-primary font-semibold btn-large"
                title="Submit a Comment"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
