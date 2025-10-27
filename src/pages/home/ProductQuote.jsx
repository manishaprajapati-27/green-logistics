import { useState, useRef } from "react";
import Heading from "../../components/Heading";
import { IoChevronDown } from "react-icons/io5";
import WhereShippingFrom from "../../assets/images/quote1.png";
import WhereShippingTo from "../../assets/images/quote2.png";
import QuoteImg from "../../assets/images/bg-qt.jpg";
import Button from "../../components/Button";
import {
  MotionTag,
  fadeUp,
  fadeLeft,
  zoomIn,
  fadeDown,
} from "../../components/Animation";

const ProductQuote = () => {
  const data = {
    India: ["Maharashtra", "Uttar Pradesh", "Bihar"],
    Bangladesh: ["Dhaka", "Chittagong", "Khulna"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
    England: ["London", "Manchester", "Birmingham"],
    Australia: ["Sydney", "Melbourne", "Brisbane"],
  };
  const dataTo = {
    India: ["Maharashtra", "Uttar Pradesh", "Bihar"],
    Bangladesh: ["Dhaka", "Chittagong", "Khulna"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
    England: ["London", "Manchester", "Birmingham"],
    Australia: ["Sydney", "Melbourne", "Brisbane"],
  };

  const countries = Object.keys(data);
  const countriesTo = Object.keys(dataTo);

  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [selectedCountryTo, setSelectedCountryTo] = useState("Select Country");
  const [selectedCityTo, setSelectedCityTo] = useState("Select City");
  const [openCountry, setOpenCountry] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [openCountryTo, setOpenCountryTo] = useState(false);
  const [openCityTo, setOpenCityTo] = useState(false);

  //   const percentage = (value / 10000) * 100;

  const [value, setValue] = useState(5000);

  const percentage = (value / 10000) * 100;

  return (
    <div className="py-30 relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full lg:after:h-[470px] md:after:h-[464px] after:bg-[#f2f2f2]">
      <div className="container mx-auto relative z-10">
        <MotionTag variant={fadeUp}>
          <Heading
            classes="flex justify-center items-center flex-col md:w-[50%] mx-auto relative z-100 pb-14"
            subHeading="Get Product Quote"
            heading="Request A Quote"
            hdClasses="text-center"
          />
        </MotionTag>
        <MotionTag variant={fadeUp} delay={0.5}>
          <div className="grid lg:grid-cols-[1fr_540px] grid-cols-1 lg:gap-0 gap-y-10">
            <div className="h-full bg-white">
              <div className="border-2 border-[#848e8433] h-full">
                <div className=" py-9 px-8">
                  <div className="flex gap-4 items-center mb-5">
                    <img src={WhereShippingFrom} alt="shipping from" />
                    <h5 className="text-secondary font-semibold">
                      Where are you shipping from?
                    </h5>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="relative">
                      <div className="text-secondary font-semibold text-[14px] mb-3">
                        Origin Country
                      </div>
                      <button
                        onClick={() => setOpenCountry(!openCountry)}
                        className="w-full flex justify-between items-center bg-[#f2f2f2] px-5 py-3.5 text-light focus:outline-none"
                      >
                        <span className="font-semibold">{selectedCountry}</span>
                        <IoChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            openCountry ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openCountry && (
                        <ul className="absolute w-full shadow-md bg-[#f2f2f2] mt-1 z-10">
                          {countries.map((country, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setSelectedCountry(country);
                                setOpenCountry(false);
                              }}
                              className={`px-4 py-3 font-medium cursor-pointer border-b-1 border-b-[#848e8433] nth-last-[1]:border-b-0 transition-all duration-500 ease-in-out hover:text-white hover:bg-primary ${
                                selectedCountry === country
                                  ? "bg-primary text-white"
                                  : ""
                              }`}
                            >
                              {country}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="relative">
                      <div className="text-secondary font-semibold text-[14px] mb-3">
                        Origin City
                      </div>
                      <button
                        onClick={() => setOpenCity(!openCity)}
                        className="w-full flex justify-between items-center bg-[#f2f2f2] px-5 py-3.5 text-light focus:outline-none"
                      >
                        <span className="font-semibold">{selectedCity}</span>
                        <IoChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            openCity ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openCity && (
                        <ul className="absolute w-full shadow-md bg-[#f2f2f2] mt-1 z-10">
                          {(data[selectedCountry] || []).map((city, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setSelectedCity(city);
                                setOpenCity(false);
                              }}
                              className={`px-4 py-3 font-medium cursor-pointer border-b-1 border-b-[#848e8433] nth-last-[1]:border-b-0 transition-all duration-500 ease-in-out hover:text-white hover:bg-primary ${
                                selectedCity === city
                                  ? "bg-primary text-white"
                                  : ""
                              }`}
                            >
                              {city}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <hr className="bg-[#f2f2f2] border-1 border-[#f2f2f2]" />
                <div className=" py-9 px-8">
                  <div className="flex gap-4 items-center mb-5">
                    <img src={WhereShippingTo} alt="shipping from" />
                    <h5 className="text-secondary font-semibold">
                      Where are you shipping from?
                    </h5>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="relative">
                      <div className="text-secondary font-semibold text-[14px] mb-3">
                        Origin Country
                      </div>
                      <button
                        onClick={() => setOpenCountry(!openCountry)}
                        className="w-full flex justify-between items-center bg-[#f2f2f2] px-5 py-3.5 text-light focus:outline-none"
                      >
                        <span className="font-semibold">{selectedCountry}</span>
                        <IoChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            openCountry ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openCountry && (
                        <ul className="absolute w-full shadow-md bg-[#f2f2f2] mt-1 z-10">
                          {countriesTo.map((country, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setSelectedCountryTo(country);
                                setOpenCountryTo(false);
                              }}
                              className={`px-4 py-3 font-medium cursor-pointer border-b-1 border-b-[#848e8433] nth-last-[1]:border-b-0 transition-all duration-500 ease-in-out hover:text-white hover:bg-primary ${
                                selectedCountryTo === country
                                  ? "bg-primary text-white"
                                  : ""
                              }`}
                            >
                              {country}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="relative">
                      <div className="text-secondary font-semibold text-[14px] mb-3">
                        Origin City
                      </div>
                      <button
                        onClick={() => setOpenCity(!openCityTo)}
                        className="w-full flex justify-between items-center bg-[#f2f2f2] px-5 py-3.5 text-light focus:outline-none"
                      >
                        <span className="font-semibold">{selectedCityTo}</span>
                        <IoChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            openCityTo ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openCityTo && (
                        <ul className="absolute w-full shadow-md bg-[#f2f2f2] mt-1 z-10">
                          {(dataTo[selectedCountryTo] || []).map(
                            (city, index) => (
                              <li
                                key={index}
                                onClick={() => {
                                  setSelectedCity(city);
                                  setOpenCity(false);
                                }}
                                className={`px-4 py-3 font-medium cursor-pointer border-b-1 border-b-[#848e8433] nth-last-[1]:border-b-0 transition-all duration-500 ease-in-out hover:text-white hover:bg-primary ${
                                  selectedCity === city
                                    ? "bg-primary text-white"
                                    : ""
                                }`}
                              >
                                {city}
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="mb-10">
                    <div className="flex justify-between mt-6">
                      <div className="text-secondary font-semibold text-[16px] mb-3">
                        Distance ( Miles ):
                      </div>
                      <span className="text-secondary font-semibold text-[16px] mb-3">
                        {value}
                      </span>
                    </div>

                    <div className="relative w-full h-2 bg-gray-200">
                      {/* Filled bar */}
                      <div
                        className="absolute top-0 left-0 h-2 bg-primary transition-all duration-100"
                        style={{ width: `${percentage}%` }}
                      ></div>

                      {/* Thumb */}
                      <div
                        className="absolute top-1/2 w-5 h-5 bg-white border-3 border-primary rounded-full shadow-md transform -translate-y-1/2"
                        style={{ left: `calc(${percentage}% )` }}
                      ></div>

                      {/* Invisible input */}
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="1"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="absolute top-1/2 left-0 w-full h-6 -translate-y-1/2 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>
                  <Button
                    className="btn-primary font-semibold btn-large"
                    title="Get A Quote Now"
                  />
                </div>
              </div>
            </div>
            <div className="h-[25rem] lg:h-full relative">
              <div className="h-[25rem] lg:h-full">
                <img
                  src={QuoteImg}
                  className="object-cover h-[25rem] lg:h-full w-full"
                  alt="Quote Product"
                />
              </div>
              <div className="absolute top-0 left-0 flex flex-col justify-center w-full h-full md:px-15 px-8 bg-[radial-gradient(122.59%_125.04%_at_97.13%_0%,_rgba(21,_176,_27,_0)_0%,_rgba(21,_176,_27,_0.8)_100%)]">
                <h2 className="text-white text-[2.5rem] font-bold leading-13">
                  Determined to Strengthen Company Performance
                </h2>
                <div className="mt-5">
                  <Button
                    className="btn-white font-semibold btn-large"
                    title="Get A Quote Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </MotionTag>
      </div>
    </div>
  );
};

export default ProductQuote;
