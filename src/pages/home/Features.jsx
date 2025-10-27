import React from "react";
import Button from "../../components/Button";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Cost",
      titleBr: "Optimization",
      icon: (
        <svg
          className="transform transition-all duration-500 ease-in-out fill-white animate-flip-straight group-hover:fill-primary"
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60px"
          height="60px"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <path
              className="st0"
              d="M311.406,97.125c0,0,5.125-17.594,32.75-39.906c26.5-21.406,6.156-50.969-32.75-40.063
		C284.547,24.656,293.672,0,256,0s-28.547,24.656-55.406,17.156c-38.906-10.906-59.25,18.656-32.75,40.063
		c27.625,22.313,32.75,39.906,32.75,39.906H311.406z"
            />
            <path
              className="st0"
              d="M323.891,123.328c0,6.297-5.109,11.406-11.391,11.406h-113c-6.281,0-11.391-5.109-11.391-11.406l0,0
		c0-6.297,5.109-11.391,11.391-11.391h113C318.781,111.938,323.891,117.031,323.891,123.328L323.891,123.328z"
            />
            <path
              className="st0"
              d="M311.406,149.531H200.594c-20.156,20.156-118.719,92.188-118.719,188.344S159.844,512,256,512
		s174.125-77.969,174.125-174.125S331.563,169.688,311.406,149.531z M316.656,335.25h-41.781l-4.5,6.969v16.75h46.281v0.047v20.297
		v3.406h-46.281v35.844h-28.75v-35.844h-46.281v-3.406v-20.297v-0.047h46.281V342.25l-4.5-7h-41.781v-20.281h28.734l-24.422-38.031
		H224l31.984,49.781L288,276.938h24.344l-24.406,38.031h28.719V335.25z"
            />
          </g>
        </svg>
      ),
      para: "There are many variations of passages of Lorem Ipsum avalab but the majority have suffered alteration.",
      btnText: "Read More",
    },
    {
      id: 2,
      title: "Reduced",
      titleBr: "Transit Timing",
      icon: (
        <svg
          className="transform transition-all duration-500 ease-in-out fill-white animate-flip-straight group-hover:fill-primary"
          height="60px"
          width="60px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 422.518 422.518"
          xmlSpace="preserve"
        >
          <path
            d="M422.512,215.424c0-0.079-0.004-0.158-0.005-0.237c-0.116-5.295-4.368-9.514-9.727-9.514h-2.554l-39.443-76.258
	c-1.664-3.22-4.983-5.225-8.647-5.226l-67.34-0.014l2.569-20.364c0.733-8.138-1.783-15.822-7.086-21.638
	c-5.293-5.804-12.683-9.001-20.81-9.001h-209c-5.255,0-9.719,4.066-10.22,9.308l-2.095,16.778h119.078
	c7.732,0,13.836,6.268,13.634,14c-0.203,7.732-6.635,14-14.367,14H126.78c0.007,0.02,0.014,0.04,0.021,0.059H10.163
	c-5.468,0-10.017,4.432-10.16,9.9c-0.143,5.468,4.173,9.9,9.641,9.9H164.06c7.168,1.104,12.523,7.303,12.326,14.808
	c-0.216,8.242-7.039,14.925-15.267,14.994H54.661c-5.523,0-10.117,4.477-10.262,10c-0.145,5.523,4.215,10,9.738,10h105.204
	c7.273,1.013,12.735,7.262,12.537,14.84c-0.217,8.284-7.109,15-15.393,15H35.792v0.011H25.651c-5.523,0-10.117,4.477-10.262,10
	c-0.145,5.523,4.214,10,9.738,10h8.752l-3.423,35.818c-0.734,8.137,1.782,15.821,7.086,21.637c5.292,5.805,12.683,9.001,20.81,9.001
	h7.55C69.5,333.8,87.3,349.345,109.073,349.345c21.773,0,40.387-15.545,45.06-36.118h94.219c7.618,0,14.83-2.913,20.486-7.682
	c5.172,4.964,12.028,7.682,19.514,7.682h1.55c3.597,20.573,21.397,36.118,43.171,36.118c21.773,0,40.387-15.545,45.06-36.118h6.219
	c16.201,0,30.569-13.171,32.029-29.36l6.094-67.506c0.008-0.091,0.004-0.181,0.01-0.273c0.01-0.139,0.029-0.275,0.033-0.415
	C422.52,215.589,422.512,215.508,422.512,215.424z M109.597,329.345c-13.785,0-24.707-11.214-24.346-24.999
	c0.361-13.786,11.87-25.001,25.655-25.001c13.785,0,24.706,11.215,24.345,25.001C134.89,318.131,123.382,329.345,109.597,329.345z
	 M333.597,329.345c-13.785,0-24.706-11.214-24.346-24.999c0.361-13.786,11.87-25.001,25.655-25.001
	c13.785,0,24.707,11.215,24.345,25.001C358.89,318.131,347.382,329.345,333.597,329.345z M396.457,282.588
	c-0.52,5.767-5.823,10.639-11.58,10.639h-6.727c-4.454-19.453-21.744-33.882-42.721-33.882c-20.977,0-39.022,14.429-44.494,33.882
	h-2.059c-2.542,0-4.81-0.953-6.389-2.685c-1.589-1.742-2.337-4.113-2.106-6.676l12.609-139.691l28.959,0.006l-4.59,50.852
	c-0.735,8.137,1.78,15.821,7.083,21.637c5.292,5.806,12.685,9.004,20.813,9.004h56.338L396.457,282.588z"
          />
        </svg>
      ),
      para: "Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.",
      btnText: "Read More",
    },
    {
      id: 3,
      title: "Warehouse",
      titleBr: "Operation",
      icon: (
        <svg
          className="transform transition-all duration-500 ease-in-out fill-white animate-flip-straight group-hover:fill-primary"
          height="60px"
          width="60px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512.001 512.001"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M133.566,244.87v267.13h244.87V244.87H133.566z M328.348,445.218H183.653c-9.217,0-16.696-7.479-16.696-16.696
			s7.479-16.696,16.696-16.696h144.696c9.217,0,16.696,7.479,16.696,16.696S337.565,445.218,328.348,445.218z M328.348,378.436
			H183.653c-9.217,0-16.696-7.479-16.696-16.696s7.479-16.696,16.696-16.696h144.696c9.217,0,16.696,7.479,16.696,16.696
			S337.565,378.436,328.348,378.436z M328.348,311.653H183.653c-9.217,0-16.696-7.479-16.696-16.696
			c0-9.217,7.479-16.696,16.696-16.696h144.696c9.217,0,16.696,7.479,16.696,16.696
			C345.044,304.174,337.565,311.653,328.348,311.653z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M500.478,78.729L261.174,0.816c-3.369-1.087-6.979-1.087-10.348,0L11.522,78.729C4.653,80.968,0,87.381,0,94.61v50.087
			c0,9.217,7.479,16.696,16.696,16.696h16.696v333.913c0,9.217,7.479,16.696,16.696,16.696h50.087V228.175
			c0-9.217,7.479-16.696,16.696-16.696h278.261c9.217,0,16.696,7.479,16.696,16.696v283.826h50.087
			c9.217,0,16.696-7.478,16.696-16.696V161.392h16.696c9.217,0,16.696-7.479,16.696-16.696V94.61
			C512,87.381,507.348,80.968,500.478,78.729z M150.261,178.088H116.87c-9.22,0-16.696-7.475-16.696-16.696
			s7.475-16.696,16.696-16.696h33.391c9.22,0,16.696,7.475,16.696,16.696S159.482,178.088,150.261,178.088z M272.696,178.088
			h-33.391c-9.22,0-16.696-7.475-16.696-16.696s7.475-16.696,16.696-16.696h33.391c9.22,0,16.696,7.475,16.696,16.696
			S281.916,178.088,272.696,178.088z M395.131,178.088H361.74c-9.22,0-16.696-7.475-16.696-16.696s7.475-16.696,16.696-16.696
			h33.391c9.22,0,16.696,7.475,16.696,16.696S404.351,178.088,395.131,178.088z"
              />
            </g>
          </g>
        </svg>
      ),
      para: "Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      btnText: "Read More",
    },
  ];
  return (
    <div className="lg:pb-10 pb-30 relative z-20">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="grid grid-cols-12 md:gap-8 gap-y-8">
          {features.map((feature) => (
            <div className="card shadow-2xl relative group overflow-hidden bg-white col-span-12 md:col-span-6 lg:col-span-4" key={feature.id}>
              <div className="bg-[url('src/assets/images/features/features-bg.jpg')] bg-cover bg-center h-full w-0 absolute top-0 right-0 bg-no-repeat transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0 after:content-[''] after:bg-[#15b01ad5] after:absolute after:top-0 after:left-0 after:w-full after:h-full"></div>
              <div className="flex relative z-10 lg:flex-row flex-col md:gap-8 gap-y-8 lg:gap-0 lg:items-center items-start before:content-[''] before:absolute before:w-full before:h-[12px] before:bottom-0 before:left-0 before:bg-[#f2f2f2] before:hidden lg:before:block">
                <div className="bg-primary relative flex justify-center items-center transition-all duration-500 ease-in-out w-[110px] h-[110px] group-hover:bg-white after:content-[''] after:absolute after:w-[2px] after:h-full after:top-0 after:right-0 after:bg-secondary before:content-[''] before:absolute before:w-[18px] before:h-[18px] before:bottom-0 before:right-[-18px] before:bg-secondary">
                  <span className="">{feature.icon}</span>
                </div>
                <h4 className="text-secondary text-[24px] font-bold leading-7.5 ps-5 group-hover:text-white">
                  <a
                    href="#!"
                    className="bg-[linear-gradient(to_right,#063d1d_0%,#063d1d_100%)] bg-[0px_95%] bg-[length:0px_1px] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] text-secondary group-hover:text-white group-hover:bg-[linear-gradient(to_right,#fff_0%,#fff_100%)]"
                  >
                    {feature.title}
                    <br />
                    {feature.titleBr}
                  </a>
                </h4>
              </div>
              <div className="p-7 relative z-10">
                <p className="text-light font-semibold text-[15px] leading-6 pb-6 transition-all duration-500 ease-in-out group-hover:text-white">
                  {feature.para}
                </p>
                <Button
                  className="btn btn-grey text-[14px] font-semibold"
                  title={feature.btnText}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
