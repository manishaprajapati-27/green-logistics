import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Heading from "../../components/Heading";

import {
  MotionTag,
  fadeUp, fadeUpOn,
  fadeLeft,
  zoomIn,
  fadeDown,
} from "../../components/Animation";

// Images
import Shape1 from "../../assets/images/project/shapes/1.png";
import Shape2 from "../../assets/images/project/shapes/2.png";
import Shape3 from "../../assets/images/project/shapes/3.png";
import Shape4 from "../../assets/images/project/shapes/4.png";
import Shape5 from "../../assets/images/project/shapes/5.png";
import Shape6 from "../../assets/images/project/shapes/6.png";

const LatestProjects = () => {
  const projects = [
    {
      id: 1,
      subTitle: "Transport",
      title: "Logistics Cargo",
      linkUrl: "#!",
      image: "src/assets/images/project/1.jpg",
    },
    {
      id: 2,
      subTitle: "Freight",
      title: "Trucking Logistics",
      linkUrl: "#!",
      image: "src/assets/images/project/2.jpg",
    },
    {
      id: 3,
      subTitle: "Sgipping",
      title: "Global Plane",
      linkUrl: "#!",
      image: "src/assets/images/project/3.jpg",
    },
  ];
  const [activeId, setActiveId] = useState(projects[0]?.id);

  return (
    <div className="py-30 bg-secondary relative overflow-hidden">
      <div className="container mx-auto lg:px-0 px-4">
        <MotionTag variant={fadeUp} className="relative z-100">
          <Heading
            classes="flex justify-center items-center flex-col lg:w-[50%] md:w-[70%] w-full mx-auto relative z-100 pb-14"
            subHeading="Latest Projects"
            heading="Our recently Completed Latest Projects"
            hdClasses="text-center text-white"
          />
        </MotionTag>
        <div className="hidden lg:block bg-[url(src/assets/images/project/bg.png)] bg-cover bg-no-repeat absolute w-full h-full top-0 left-0 z-80"></div>
        <div className="bg-[url(src/assets/images/project/bg-2.png)] bg-cover bg-no-repeat absolute w-full h-full top-0 left-0 z-0"></div>
        <MotionTag variant={fadeUp}  className="relative z-100">
          <div className="flex relative z-100 md:gap-4 gap-y-4 md:flex-row flex-col">
            {projects.map((project) => {
              const isActive = activeId === project.id;

              return (
                <div
                  key={project.id}
                  className={`relative ${
                    isActive ? "md:flex-[3]" : "flex-[1]"
                  } md:h-[597px] overflow-hidden transition-all duration-500 ease-in-out group cursor-pointer`}
                  onMouseEnter={() => setActiveId(project.id)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={`absolute bottom-0 left-0 transition-all duration-500 ease-in-out ${
                      isActive ? "opacity-100" : "opacity-0"
                    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[118%] after:h-[145%] after:bg-[#15b01ad3] after:[clip-path:_polygon(0_0,_0%_100%,_100%_100%)]`}
                  >
                    <div className="ps-8 py-6 pe-15 relative z-110 after:content-[''] after:[clip-path:polygon(0_0,_50%_0,_100%_100%,_0%_100%)] after:bg-white after:w-full after:h-[63%] after:absolute after:bottom-0 after:left-0">
                      <div className="relative z-120">
                        <a
                          href={project.linkUrl}
                          className="text-white bg-secondary w-[60px] h-[60px] flex justify-center items-center text-2xl"
                        >
                          <GoArrowUpRight />
                        </a>
                        <h5 className="text-light font-semibold pt-3">
                          {project.subTitle}
                        </h5>
                        <h3 className="text-secondary font-bold text-[20px]">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionTag>
        <img
          src={Shape1}
          className="hidden lg:block absolute z-90 bottom-0 left-[1%] animate-[zump_2s_linear_infinite]"
          alt="Project"
        />
        <img
          src={Shape2}
          className="hidden lg:block absolute z-90 bottom-0 left-[20.5%] animate-[zumpBottom_2s_linear_infinite]"
          alt="Project"
        />
        <img
          src={Shape3}
          className="hidden lg:block absolute z-90 bottom-0 left-[19.7%] animate-[zump_2s_linear_infinite]"
          alt="Project"
        />
        <img
          src={Shape4}
          className="hidden lg:block absolute z-90 bottom-[19px] right-[0.7%] animate-[zumpBottom_2s_linear_infinite]"
          alt="Project"
        />
        <img
          src={Shape5}
          className="hidden lg:block absolute z-90 top-[19px] left-[3.9%] animate-[horizontalMove_2s_linear_infinite]"
          alt="Project"
        />
        <img
          src={Shape6}
          className="hidden lg:block absolute z-90 bottom-[55px] left-[29.6%] animate-[horizontalMove2_2s_linear_infinite]"
          alt="Project"
        />
      </div>
    </div>
  );
};

export default LatestProjects;
