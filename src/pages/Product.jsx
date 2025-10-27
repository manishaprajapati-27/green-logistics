import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { FaStar } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import { FaRupeeSign } from "react-icons/fa";

const Product = () => {
  const data = [
    {
      id: 1,
      image: "src/assets/images/product/1.png",
      title: "Boss Chair",
      price: 150,
      prevPrice: 200,
      cartLink: "#!",
    },
    {
      id: 2,
      image: "src/assets/images/product/1.png",
      title: "Boss Chair",
      price: 150,
      prevPrice: 200,
      cartLink: "#!",
    },
    {
      id: 3,
      image: "src/assets/images/product/1.png",
      title: "Boss Chair",
      price: 150,
      prevPrice: 200,
      cartLink: "#!",
    },
    {
      id: 4,
      image: "src/assets/images/product/1.png",
      title: "Boss Chair",
      price: 150,
      prevPrice: 200,
      cartLink: "#!",
    },
    {
      id: 5,
      image: "src/assets/images/product/1.png",
      title: "Boss Chair",
      price: 150,
      prevPrice: 200,
      cartLink: "#!",
    },
    {
      id: 6,
      image: "src/assets/images/product/1.png",
      title: "Boss Chair",
      price: 150,
      prevPrice: 200,
      cartLink: "#!",
    },
    {
      id: 7,
      image: "src/assets/images/product/1.png",
      title: "Boss Chair",
      price: 150,
      prevPrice: 200,
      cartLink: "#!",
    },
    {
      id: 8,
      image: "src/assets/images/product/1.png",
      title: "Boss Chair",
      price: 150,
      prevPrice: 200,
      cartLink: "#!",
    },
  ];
  return (
    <>
      <PageHero title="Our Products" page="Products" />
      <div className="py-30">
        <div className="container mx-auto md:px-0 px-4">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {data.map((dt) => (
              <div className="card border-[#063d1da1] border-[0.6px] flex flex-col items-center justify-center p-7 pt-0 transition-all duration-500 ease-in-out group hover:border-primary hover:shadow-2xl">
                <img src={dt.image} alt={dt.title} />
                <div className="">
                  <h4 className="text-secondary text-[1.4rem] font-bold text-center">
                    {dt.title}
                  </h4>
                  <div className="flex py-3 justify-center gap-2.5">
                    <h6 className="text-light font-semibold flex gap-0.5 items-center"><FaRupeeSign /> {dt.price}</h6>
                    <h6 className="text-light font-semibold flex gap-0.5 items-center relative after:content-[''] after:absolute after:top-[50%] after:left-0 after:transform after:translate-y-[-50%] after:bg-light after:h-[0.7px] after:w-full"><FaRupeeSign /> {dt.prevPrice}</h6>
                  </div>
                  <div className="flex gap-2 text-secondary pb-6 text-[22px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <Link className="text-center block" to={dt.cartLink}>
                    <Button className="btn btn-grey text-[14px] font-semibold" title="Add to Cart" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
