import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/images/logo.png";
import lightLogo from "./../assets/images/light-logo.png";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import {
  FaXTwitter,
  FaLocationDot,
  FaRegCircleUser,
  FaBars,
  FaArrowRightLong,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdOutlineAccessTimeFilled, MdArrowForwardIos } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoSearch, IoCloseOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import useCloseSidebarOnNavigate from "../components/CustomHooks";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [cloneHeaderActive, setCloneHeaderActive] = useState(false);

  const [sticky, setSticky] = useState(false);
  const [showClone, setShowClone] = useState(false);
  const lastScrollY = useRef(0);

  const [sbDropdown, setSbDropdown] = useState({
    dropdown1: {
      open: false,
      subMenu: {
        sub1: false,
        sub2: false,
      },
    },
    dropdown2: {
      open: false,
      subMenu: {
        sub1: false,
      },
    },
  });

  useCloseSidebarOnNavigate(setHeaderActive);
  useCloseSidebarOnNavigate(setCloneHeaderActive);

  useEffect(() => {
    if (headerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [headerActive]);

  useEffect(() => {
    if (cloneHeaderActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [cloneHeaderActive]);

  const toggleDropdown = (dropdown) => {
    setSbDropdown((prev) => ({
      ...prev,
      [dropdown]: {
        ...prev[dropdown],
        open: !prev[dropdown].open,
      },
    }));
  };

  const toggleSubDropdown = (dropdown, subMenu) => {
    setSbDropdown((prev) => ({
      ...prev,
      [dropdown]: {
        ...prev[dropdown],
        subMenu: {
          ...prev[dropdown].subMenu,
          [subMenu]: !prev[dropdown].subMenu[subMenu],
        },
      },
    }));
  };

  const [clsbDropdown, setClSbDropdown] = useState({
    dropdown1: {
      open: false,
      subMenu: {
        sub1: false,
        sub2: false,
      },
    },
    dropdown2: {
      open: false,
    },
  });

  const toggleClDropdown = (dropdown) => {
    setClSbDropdown((prev) => ({
      ...prev,
      [dropdown]: {
        ...prev[dropdown],
        open: !prev[dropdown].open,
      },
    }));
  };

  const toggleClSubDropdown = (dropdown, subMenu) => {
    setClSbDropdown((prev) => ({
      ...prev,
      [dropdown]: {
        ...prev[dropdown],
        subMenu: {
          ...prev[dropdown].subMenu,
          [subMenu]: !prev[dropdown].subMenu[subMenu],
        },
      },
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = window.innerHeight / 2; // after first section

      // Sticky after threshold
      setSticky(currentScrollY > threshold);

      // Show clone only on scroll up
      if (currentScrollY > threshold && currentScrollY < lastScrollY.current) {
        setShowClone(true);
      } else {
        setShowClone(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const header = headerRef.current;

  //   const clone = header.cloneNode(true);
  //   clone.classList.add(
  //     "clone-header",
  //     "fixed",
  //     "top-0",
  //     "z-[999]",
  //     "opacity-0",
  //     "pointer-events-none"
  //   );
  //   document.appendChild(clone);
  //   cloneRef.current = clone;

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;

  //     const scrollThreshold = window.innerHeight / 2;

  //     if (scrollY > scrollThreshold) {
  //       clone.style.opacity = "1";
  //       clone.classList.add("pointer-events-auto");
  //       clone.style.transform = "translateY(0)";
  //     } else {
  //       clone.style.opacity = "0";
  //       clone.classList.remove("pointer-events-auto");
  //       clone.style.transform = "translateY(-100%)";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const mainHeader = (
    <header
      className={`
    w-full z-[999] bg-white
    transition-all duration-500 ease-in-out relative
        ${
          sticky && !showClone
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }
    before:content-[''] before:bg-[#F2F2F2] before:absolute before:w-[calc(19%-30px)] before:h-[calc(100%-30px)] before:left-0 before:top-[50%] before:translate-y-[-50%] before:z-0
  `}
    >
      <div className="bg-primary absolute w-[81.5%] h-[calc(100%-54px)] bottom-0 right-0 z-10 bg-hd"></div>
      <div className="bg-[#848e84a1] w-[60%] h-[0.7px] absolute top-[54.7px] right-0 z-50 br-hd"></div>
      <div className="container mx-auto relative z-20">
        <div className="flex w-full items-center">
          <div className="logo pe-4 lg:pe-32">
            <Link to="/">
              <img
                src={logo}
                alt="Green Logistics"
                width="149"
                className="h-auto max-w-max"
              />
            </Link>
          </div>
          <div className="w-full">
            <div className="top-hd flex justify-between h-[54px] relative py-3">
              <div className="flex gap-12">
                <div className="flex">
                  <a
                    href="#!"
                    className="flex gap-1 items-center text-light font-semibold text-[14px]"
                  >
                    <FaLocationDot className="text-primary" />
                    <span className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]">
                      30 Commercial Road Fratton, Australia
                    </span>
                  </a>
                </div>
                <div className="flex">
                  <a
                    href="#!"
                    className="flex gap-1 items-center text-light font-semibold text-[14px]"
                  >
                    <IoMdMail className="text-primary  mt-1" />{" "}
                    <span className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 font-semibold inline-block hover:bg-[length:100%_1px] text-light hover:text-primary hover:bg-[linear-gradient(to_right,#15b01b_0%,#15b01b_100%)]">
                      needhelp@company.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="time-social flex justify-between items-center xl:gap-32 gap-5">
                <div className="flex gap-2.5">
                  <a href="#!" className="flex items-center gap-1.5 text-light">
                    <MdOutlineAccessTimeFilled className="text-white" />
                    <span className="text-[14px]">
                      Mon to Sat: 8.00 am - 7.00 pm
                    </span>
                  </a>
                </div>
                <div className="social flex gap-4">
                  <a href="#!" className="text-white">
                    <FaFacebookF />
                  </a>
                  <a href="#!" className="text-white">
                    <FaXTwitter />
                  </a>
                  <a href="#!" className="text-white">
                    <FaPinterestP />
                  </a>
                  <a href="#!" className="text-white">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center lg:ms-7">
              <div className="nav-links w-full">
                <ul className="flex items-center">
                  <li className="py-8 group">
                    <Link
                      to="/"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="py-8 group">
                    <Link
                      to="/about"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      About
                    </Link>
                  </li>
                  <li className="relative py-9 group">
                    <span className="dp-hd text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark">
                      Services
                    </span>
                    <ul className="absolute bg-white p-[1rem] top-[100%] left-0 min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-hover:translate-z-[0] shadow-2xl">
                      <li className="relative group/submenu">
                        <Link
                          to="/services"
                          className="text-[14px] text-dark font-semibold px-4 py-3 hover:bg-dark flex justify-between items-center hover:text-white transition-all duration-300 ease-in"
                        >
                          Services List
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenu:scale-100" />
                        </Link>
                        {/* <ul className="absolute bg-white p-[1rem] top-0 left-[calc(100%+1rem)] min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-y-100 group-hover/submenu:translate-z-[0] shadow-2xl">
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Grid 01
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Grid 02
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Grid 03
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li className="relative group/submenu">
                        <a
                          href="#"
                          className="text-[14px] text-dark font-semibold px-4 py-3 hover:bg-dark flex justify-between items-center hover:text-white transition-all duration-300 ease-in"
                        >
                          Services Carousel
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenu:scale-100" />
                        </a>
                        <ul className="absolute bg-white p-[1rem] top-0 left-[calc(100%+1rem)] min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-y-100 group-hover/submenu:translate-z-[0] shadow-2xl">
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Carousel 01
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Carousel 02
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Carousel 03
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Safety Reliable Service
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Real Time Tracking System
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          On-Time Delivery Service
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Worldwide Transport
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          One Step Solutions
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          24/7 Important Service
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="py-9 relative group">
                    <span className="dp-hd text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark">
                      Shop
                    </span>
                    <ul className="absolute bg-white p-[1rem] top-[100%] left-0 min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-hover:translate-z-[0] shadow-2xl">
                      <li className="relative group/submenu">
                        <Link
                          to="/products"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Products
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </Link>
                        {/* <ul className="absolute bg-white p-[1rem] top-0 left-[calc(100%+1rem)] min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-y-100 group-hover/submenu:translate-z-[0] shadow-2xl">
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              No sidebar
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Left sidebar
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Right sidebar
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Products carousel
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li> */}
                      <li>
                        <Link
                          to="/product-details"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Product details
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Cart
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Checkout
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="py-8 group">
                    <Link
                      to="/blog"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="py-8 group">
                    <Link
                      to="/gallery"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="py-8 group">
                    <Link
                      to="/contact"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="call-info flex justify-between w-[54%] py-3 items-center">
                <div
                  className="toggle text-3xl text-dark"
                  onClick={() => setHeaderActive(true)}
                >
                  <IoMdMenu />
                </div>
                <div className="call-in flex items-center gap-4">
                  <a
                    href="#!"
                    className="call bg-white rounded-full w-10 h-10 flex justify-center items-center"
                  >
                    <BiSolidPhoneCall className="text-2xl text-primary" />
                  </a>
                  <div className="pe-8">
                    <p className="text-white text-[14px]">Call Anytime</p>
                    <div className="num text-[1.14rem] font-bold text-white">
                      <a href="#!">(303) 555-0105</a>
                    </div>
                  </div>
                </div>
                <div className="border-r-[0.7px] border-[#848e84a1] h-8"></div>
                <div className="flex gap-5">
                  <a href="#!" className="text-[1.3rem] text-white">
                    <IoSearch />
                  </a>
                  <a href="#!" className="text-[1.3rem] text-white">
                    <FaRegCircleUser />
                  </a>
                </div>
                <a href="#!" className="btn btn-white">
                  <span className="text-[14px] font-semibold">Get a Quote</span>
                  <span className="text-[14px] font-semibold">Get a Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape z-10"></div>

      <div
        className={`bg-[#000000d8] fixed h-screen w-screen z-40 transform transition-all duration-500 ease-in-out ${
          headerActive ? "translate-x-[0%] opacity-100 left-0 top-0" : "delay-500 translate-x-[-100%] opacity-0"
        }`}
      ></div>
      <div
        className={`mob-sidebar bg-secondary py-12 px-4 fixed h-screen w-[41%] z-50 transform transition-all delay-300 duration-500 ease-in-out overflow-y-scroll ${
          headerActive ? "translate-x-[0%] opacity-100 left-0 top-0" : "delay-0 translate-x-[-100%] opacity-0"
        }`}
      >
        <div className="logo py-9">
          <Link to="/">
            <img src={lightLogo} alt="Green Logistics" width="152" />
          </Link>
        </div>
        <div
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={() => setHeaderActive(false)}
        >
          <IoCloseOutline />
        </div>
        <ul className="">
          <li>
            <Link
              to="/"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
            >
              About
            </Link>
          </li>
          <li>
            <span
              className={`p-2.5 font-semibold text-[15px] flex justify-between items-center transition duration-300 ease-in-out group-hover:text-dark border-b-[0.7px] border-[#848e84a1] ${
                sbDropdown.dropdown1.open ? "text-primary" : "text-white"
              }`}
            >
              Services
              <button
                onClick={() => toggleDropdown("dropdown1")}
                className={`h-8 w-8 bg-primary text-white flex justify-center items-center transition-all duration-500 ease-in-out ${
                  sbDropdown.dropdown1.open ? "bg-white text-primary" : ""
                }`}
              >
                <MdArrowForwardIos
                  className={`transform transition-all duration-500 ease-in-out ${
                    sbDropdown.dropdown1.open
                      ? "rotate-90 text-primary"
                      : "rotate-0"
                  }`}
                />
              </button>
            </span>
            <ul
              className={`transition-all duration-500 ease-in-out ${
                sbDropdown.dropdown1.open
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="relative group/submenu">
                <Link
                  to="/services"
                  className={`p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] flex justify-between items-center ${
                    sbDropdown.dropdown1.subMenu.sub1
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  Services List
                  {/* <button
                    onClick={() => toggleSubDropdown("dropdown1", "sub1")}
                    className={`h-8 w-8 bg-primary text-white flex justify-center items-center transition-all duration-500 ease-in-out ${
                      sbDropdown.dropdown1.subMenu.sub1
                        ? "bg-white text-primary"
                        : ""
                    }`}
                  >
                    <MdArrowForwardIos
                      className={`transform transition-all duration-500 ease-in-out ${
                        sbDropdown.dropdown1.subMenu.sub1
                          ? "rotate-90 text-primary"
                          : "rotate-0"
                      }`}
                    />
                  </button> */}
                </Link>
                {/* <ul
                  className={`transition-all duration-500 ease-in-out max-h-0 opacity-0 ${
                    sbDropdown.dropdown1.subMenu.sub1
                      ? "max-h-[190px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Grid 01
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Grid 02
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Grid 03
                    </a>
                  </li>
                </ul> */}
              </li>
              {/* <li className="relative group/submenu">
                <a
                  href="#"
                  className={`p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] flex justify-between items-center ${
                    sbDropdown.dropdown1.subMenu.sub2
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  Services Carousel
                  <button
                    onClick={() => toggleSubDropdown("dropdown1", "sub2")}
                    className={`h-8 w-8 bg-primary text-white flex justify-center items-center transition-all duration-500 ease-in-out ${
                      sbDropdown.dropdown1.subMenu.sub2
                        ? "bg-white text-primary"
                        : ""
                    }`}
                  >
                    <MdArrowForwardIos
                      className={`transform transition-all duration-500 ease-in-out ${
                        sbDropdown.dropdown1.subMenu.sub2
                          ? "rotate-90 text-primary"
                          : "rotate-0"
                      }`}
                    />
                  </button>
                </a>
                <ul
                  className={`transition-all duration-500 ease-in-out max-h-0 opacity-0 ${
                    sbDropdown.dropdown1.subMenu.sub2
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Carousel 01
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Carousel 02
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Carousel 03
                    </a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Safety Reliable Serice
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Real Time Tracking Sytem
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  On-Time Delivery Serice
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Worldwide Transort
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  One Step Solutons
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  24/7 Important Serice
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span
              className={`p-2.5 font-semibold text-[15px] flex justify-between items-center transition duration-300 ease-in-out group-hover:text-dark border-b-[0.7px] border-[#848e84a1] ${
                sbDropdown.dropdown2.open ? "text-primary" : "text-white"
              }`}
            >
              Shop
              <button
                onClick={() => toggleDropdown("dropdown1")}
                className={`h-8 w-8 bg-primary text-white flex justify-center items-center transition-all duration-500 ease-in-out ${
                  sbDropdown.dropdown2.open ? "bg-white text-primary" : ""
                }`}
              >
                <MdArrowForwardIos
                  className={`transform transition-all duration-500 ease-in-out ${
                    sbDropdown.dropdown2.open
                      ? "rotate-90 text-primary"
                      : "rotate-0"
                  }`}
                />
              </button>
            </span>
            <ul
              className={`transition-all duration-500 ease-in-out ${
                sbDropdown.dropdown2.open
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="relative group/submenu">
                <Link
                  to="/products"
                  className={`p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] flex justify-between items-center ${
                    sbDropdown.dropdown2.subMenu.sub1
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/product-details"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Product Details
                </Link>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Checkout
                </a>
              </li>
            </ul>
          </li>
          {/* <li>
            <a
              href="#!"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
            >
              Shop
            </a>
          </li> */}
          <li>
            <Link
              to="/blog"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark block"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="">
          <div className="py-8">
            <div className="flex mb-4">
              <a
                href="#!"
                className="flex gap-2 items-center text-white font-semibold text-[14px]"
              >
                <span className="text-white bg-primary h-8 w-8 rounded-full text-[14px] flex justify-center items-center">
                  <IoMdMail className="text-white" />
                </span>
                needhelp@company.com
              </a>
            </div>
            <div className="flex">
              <a
                href="#!"
                className="flex gap-2 items-center text-white font-semibold text-[14px]"
              >
                <span className="text-white bg-primary h-8 w-8 rounded-full text-[14px] flex justify-center items-center">
                  <IoMdMail className="text-white" />
                </span>
                needhelp@company.com
              </a>
            </div>
          </div>
          <div className="time-social flex justify-between items-center xl:gap-32 gap-5">
            <div className="flex gap-4">
              <a href="#!" className="text-white">
                <FaFacebookF />
              </a>
              <a href="#!" className="text-white">
                <FaXTwitter />
              </a>
              <a href="#!" className="text-white">
                <FaPinterestP />
              </a>
              <a href="#!" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  const cloneHeader = (
    <header
      className={`${
        showClone ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }
    w-full z-[999] bg-white transform
    transition-all duration-500 ease-in-out fixed top-0 left-0 shadow-lg
    before:content-[''] before:bg-[#F2F2F2] before:absolute before:w-[calc(19%-30px)] before:h-full before:left-0 before:top-[50%] before:translate-y-[-50%] before:z-0
  `}
    >
      <div className="bg-primary absolute w-[81.5%] h-full bottom-0 right-0 z-10 bg-hd"></div>
      <div className="bg-[#848e84a1] w-[60%] h-[0.7px] absolute top-[54.7px] right-0 z-50 br-hd hidden"></div>
      <div className="container mx-auto relative z-20">
        <div className="flex w-full items-center">
          <div className="logo pe-4 lg:pe-32">
            <Link to="/">
              <img
                src={logo}
                alt="Green Logistics"
                width="149"
                className="h-auto max-w-max"
              />
            </Link>
          </div>
          <div className="w-full">
            <div className="top-hd hidden justify-between h-[54px] relative py-3 after:content-[''] after:bg-[#848e84a1] after:w-[60%] after:h-[0.7px] after:absolute after:bottom-[-0.7px] after:right-[-10%]">
              <div className="flex gap-12">
                <div className="flex">
                  <a
                    href="#!"
                    className="flex gap-1 items-center text-light font-semibold text-[14px]"
                  >
                    <FaLocationDot className="text-primary" /> 30 Commercial
                    Road Fratton, Australia
                  </a>
                </div>
                <div className="flex">
                  <a
                    href="#!"
                    className="flex gap-1 items-center text-light font-semibold text-[14px]"
                  >
                    <IoMdMail className="text-primary" /> needhelp@company.com
                  </a>
                </div>
              </div>
              <div className="time-social flex justify-between items-center xl:gap-32 gap-5">
                <div className="flex gap-2.5">
                  <a href="#!" className="flex items-center gap-1.5 text-light">
                    <MdOutlineAccessTimeFilled className="text-white" />
                    <span className="text-[14px]">
                      Mon to Sat: 8.00 am - 7.00 pm
                    </span>
                  </a>
                </div>
                <div className="social flex gap-4">
                  <a href="#!" className="text-white">
                    <FaFacebookF />
                  </a>
                  <a href="#!" className="text-white">
                    <FaXTwitter />
                  </a>
                  <a href="#!" className="text-white">
                    <FaPinterestP />
                  </a>
                  <a href="#!" className="text-white">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center lg:ms-7">
              <div className="nav-links w-full">
                <ul className="flex items-center">
                  <li className="py-9 group">
                    <Link
                      to="/"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="py-9 group">
                    <Link
                      to="/about"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      About
                    </Link>
                  </li>
                  <li className="relative py-9 group">
                    <span className="dp-hd text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark">
                      Services
                    </span>
                    <ul className="absolute bg-white p-[1rem] top-[100%] left-0 min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-hover:translate-z-[0] shadow-2xl">
                      <li className="relative group/submenu">
                        <Link
                          to="/services"
                          className="text-[14px] text-dark font-semibold px-4 py-3 hover:bg-dark flex justify-between items-center hover:text-white transition-all duration-300 ease-in"
                        >
                          Services List
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenu:scale-100" />
                        </Link>
                        {/* <ul className="absolute bg-white p-[1rem] top-0 left-[calc(100%+1rem)] min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-y-100 group-hover/submenu:translate-z-[0] shadow-2xl">
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Grid 01
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Grid 02
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Grid 03
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li className="relative group/submenu">
                        <a
                          href="#"
                          className="text-[14px] text-dark font-semibold px-4 py-3 hover:bg-dark flex justify-between items-center hover:text-white transition-all duration-300 ease-in"
                        >
                          Services Carousel
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenu:scale-100" />
                        </a>
                        <ul className="absolute bg-white p-[1rem] top-0 left-[calc(100%+1rem)] min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-y-100 group-hover/submenu:translate-z-[0] shadow-2xl">
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Carousel 01
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Carousel 02
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Services Carousel 03
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Safety Reliable Service
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Real Time Tracking System
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          On-Time Delivery Service
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Worldwide Transport
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          One Step Solutions
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          24/7 Important Service
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="py-9 relative group">
                    <span className="dp-hd text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark">
                      Shop
                    </span>
                    <ul className="absolute bg-white p-[1rem] top-[100%] left-0 min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-hover:translate-z-[0] shadow-2xl">
                      <li className="relative group/submenu">
                        <Link
                          to="/products"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Products
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </Link>
                        {/* <ul className="absolute bg-white p-[1rem] top-0 left-[calc(100%+1rem)] min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-y-100 group-hover/submenu:translate-z-[0] shadow-2xl">
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              No sidebar
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Left sidebar
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                            >
                              Right sidebar
                              <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                            </a>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Products carousel
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li> */}
                      <li>
                        <Link
                          to="/product-details"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Product details
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Cart
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="text-[14px] text-dark font-semibold px-4 py-3 flex justify-between items-center group/submenuitem hover:bg-dark hover:text-white transition-all duration-300 ease-in"
                        >
                          Checkout
                          <FaArrowRightLong className="scale-0 transition-all duration-500 group-hover/submenuitem:scale-100" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="py-9 group">
                    <Link
                      to="/blog"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="py-9 group">
                    <Link
                      to="/gallery"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="py-9 group">
                    <Link
                      to="/contact"
                      className="text-white py-2.5 px-4 font-semibold text-[15px] transition-all duration-500 ease-in-out group-hover:text-dark"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="call-info flex justify-between w-[54%] py-3 items-center">
                <div
                  className="toggle text-3xl text-dark"
                  onClick={() => setCloneHeaderActive(true)}
                >
                  <IoMdMenu />
                </div>
                <div className="call-in flex items-center gap-4">
                  <a
                    href="#!"
                    className="call bg-white rounded-full w-10 h-10 flex justify-center items-center"
                  >
                    <BiSolidPhoneCall className="text-2xl text-primary" />
                  </a>
                  <div className="pe-8">
                    <p className="text-white text-[14px]">Call Anytime</p>
                    <div className="num text-[1.14rem] font-bold text-white">
                      <a href="#!">(303) 555-0105</a>
                    </div>
                  </div>
                </div>
                <div className="border-r-[0.7px] border-[#848e84a1] h-8"></div>
                <div className="flex gap-5">
                  <a href="#!" className="text-[1.3rem] text-white">
                    <IoSearch />
                  </a>
                  <a href="#!" className="text-[1.3rem] text-white">
                    <FaRegCircleUser />
                  </a>
                </div>
                <a href="#!" className="btn btn-white">
                  <span className="text-[14px] font-semibold">Get a Quote</span>
                  <span className="text-[14px] font-semibold">Get a Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape z-10"></div>

         <div
        className={`bg-[#000000d8] fixed h-screen w-screen z-40 transform transition-all duration-500 ease-in-out ${
          cloneHeaderActive ? "translate-x-[0%] opacity-100 left-0 top-0" : "delay-500 translate-x-[-100%] opacity-0"
        }`}
      ></div>
      <div
        className={`mob-sidebar bg-secondary py-12 px-4 fixed h-screen w-[41%] z-50 transform transition-all delay-300 duration-500 ease-in-out overflow-y-scroll ${
          cloneHeaderActive ? "translate-x-[0%] opacity-100 left-0 top-0" : "delay-0 translate-x-[-100%] opacity-0"
        }`}
      >
        <div className="logo py-9">
          <Link to="/">
            <img src={lightLogo} alt="Green Logistics" width="152" />
          </Link>
        </div>
        <div
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={() => setCloneHeaderActive(false)}
        >
          <IoCloseOutline />
        </div>
        <ul className="">
          <li>
            <Link
              to="/"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
            >
              About
            </Link>
          </li>
          <li>
            <span
              className={`p-2.5 font-semibold text-[15px] flex justify-between items-center transition duration-300 ease-in-out group-hover:text-dark border-b-[0.7px] border-[#848e84a1] ${
                sbDropdown.dropdown1.open ? "text-primary" : "text-white"
              }`}
            >
              Services
              <button
                onClick={() => toggleDropdown("dropdown1")}
                className={`h-8 w-8 bg-primary text-white flex justify-center items-center transition-all duration-500 ease-in-out ${
                  sbDropdown.dropdown1.open ? "bg-white text-primary" : ""
                }`}
              >
                <MdArrowForwardIos
                  className={`transform transition-all duration-500 ease-in-out ${
                    sbDropdown.dropdown1.open
                      ? "rotate-90 text-primary"
                      : "rotate-0"
                  }`}
                />
              </button>
            </span>
            <ul
              className={`transition-all duration-500 ease-in-out ${
                sbDropdown.dropdown1.open
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="relative group/submenu">
                <Link
                  to="/services"
                  className={`p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] flex justify-between items-center ${
                    sbDropdown.dropdown1.subMenu.sub1
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  Services List
                  {/* <button
                    onClick={() => toggleSubDropdown("dropdown1", "sub1")}
                    className={`h-8 w-8 bg-primary text-white flex justify-center items-center transition-all duration-500 ease-in-out ${
                      sbDropdown.dropdown1.subMenu.sub1
                        ? "bg-white text-primary"
                        : ""
                    }`}
                  >
                    <MdArrowForwardIos
                      className={`transform transition-all duration-500 ease-in-out ${
                        sbDropdown.dropdown1.subMenu.sub1
                          ? "rotate-90 text-primary"
                          : "rotate-0"
                      }`}
                    />
                  </button> */}
                </Link>
                {/* <ul
                  className={`transition-all duration-500 ease-in-out max-h-0 opacity-0 ${
                    sbDropdown.dropdown1.subMenu.sub1
                      ? "max-h-[190px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Grid 01
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Grid 02
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Grid 03
                    </a>
                  </li>
                </ul> */}
              </li>
              {/* <li className="relative group/submenu">
                <a
                  href="#"
                  className={`p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] flex justify-between items-center ${
                    sbDropdown.dropdown1.subMenu.sub2
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  Services Carousel
                  <button
                    onClick={() => toggleSubDropdown("dropdown1", "sub2")}
                    className={`h-8 w-8 bg-primary text-white flex justify-center items-center transition-all duration-500 ease-in-out ${
                      sbDropdown.dropdown1.subMenu.sub2
                        ? "bg-white text-primary"
                        : ""
                    }`}
                  >
                    <MdArrowForwardIos
                      className={`transform transition-all duration-500 ease-in-out ${
                        sbDropdown.dropdown1.subMenu.sub2
                          ? "rotate-90 text-primary"
                          : "rotate-0"
                      }`}
                    />
                  </button>
                </a>
                <ul
                  className={`transition-all duration-500 ease-in-out max-h-0 opacity-0 ${
                    sbDropdown.dropdown1.subMenu.sub2
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Carousel 01
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Carousel 02
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                    >
                      Services Carousel 03
                    </a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Safety Reliable Serice
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Real Time Tracking Sytem
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  On-Time Delivery Serice
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Worldwide Transort
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  One Step Solutons
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  24/7 Important Serice
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span
              className={`p-2.5 font-semibold text-[15px] flex justify-between items-center transition duration-300 ease-in-out group-hover:text-dark border-b-[0.7px] border-[#848e84a1] ${
                sbDropdown.dropdown2.open ? "text-primary" : "text-white"
              }`}
            >
              Shop
              <button
                onClick={() => toggleDropdown("dropdown1")}
                className={`h-8 w-8 bg-primary text-white flex justify-center items-center transition-all duration-500 ease-in-out ${
                  sbDropdown.dropdown2.open ? "bg-white text-primary" : ""
                }`}
              >
                <MdArrowForwardIos
                  className={`transform transition-all duration-500 ease-in-out ${
                    sbDropdown.dropdown2.open
                      ? "rotate-90 text-primary"
                      : "rotate-0"
                  }`}
                />
              </button>
            </span>
            <ul
              className={`transition-all duration-500 ease-in-out ${
                sbDropdown.dropdown2.open
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="relative group/submenu">
                <Link
                  to="/products"
                  className={`p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] flex justify-between items-center ${
                    sbDropdown.dropdown2.subMenu.sub1
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/product-details"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Product Details
                </Link>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white p-2.5 ps-5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
                >
                  Checkout
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark border-b-[0.7px] border-[#848e84a1] block"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white p-2.5 font-semibold text-[15px] group-hover:text-dark block"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="">
          <div className="py-8">
            <div className="flex mb-4">
              <a
                href="#!"
                className="flex gap-2 items-center text-white font-semibold text-[14px]"
              >
                <span className="text-white bg-primary h-8 w-8 rounded-full text-[14px] flex justify-center items-center">
                  <IoMdMail className="text-white" />
                </span>
                needhelp@company.com
              </a>
            </div>
            <div className="flex">
              <a
                href="#!"
                className="flex gap-2 items-center text-white font-semibold text-[14px]"
              >
                <span className="text-white bg-primary h-8 w-8 rounded-full text-[14px] flex justify-center items-center">
                  <IoMdMail className="text-white" />
                </span>
                needhelp@company.com
              </a>
            </div>
          </div>
          <div className="time-social flex justify-between items-center xl:gap-32 gap-5">
            <div className="flex gap-4">
              <a href="#!" className="text-white">
                <FaFacebookF />
              </a>
              <a href="#!" className="text-white">
                <FaXTwitter />
              </a>
              <a href="#!" className="text-white">
                <FaPinterestP />
              </a>
              <a href="#!" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <>
      {mainHeader}
      {cloneHeader}
    </>
  );
};

export default Header;
