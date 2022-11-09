import React, { useState } from "react";

// import icons
import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4">
      {plans.map((plan, currentIndex) => {
        // destructure plan
        const { name, price, list, delay, descrip, wpp } = plan;
        return (
          <div
            onClick={() => setIndex(currentIndex)}
            key={currentIndex}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]"
          >
            <div className="flex justify-center items-center movile2">
              <div className="text-[32px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center mb-3 mt-3">
                <div className="leading-none">
                  <span>{price}</span>
                  <span className="text-[30px] font-extrabold"> </span>
                </div>
                <span className="text-sm font-medium"> </span>
              </div>
            </div>
            <div
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex justify-center items-center py-[40px] px-[30px] lg:min-h-[550px] transition duration-100`}
            >
              <div className="flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center">
                {/* name & price wrapper */}
                <div className="movile">
                  {/* name */}
                  <div
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "bg-neutral-500 text-white"
                    } `}
                  >
                    {name}
                  </div>
                  {/* price */}
                  <div className="text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center ">
                    <div className="leading-none">
                      <span className="tracking-[0.1px]">{price}</span>
                      <span className="text-[30px] font-extrabold"> </span>
                    </div>
                    <span className="text-sm font-medium"> </span>
                  </div>
                </div>
                {/* list & btn wrapper */}
                <div>
                  {/* list */}
                  <ul className="flex flex-col gap-y-4 mb-8">
                    {list.map((item, idx) => {
                      return (
                        <li
                          className="flex items-center gap-x-[10px]"
                          key={idx}
                        >
                          <div>
                            <BsCheckCircleFill className="text-lg" />
                          </div>
                          <div>{item.name}</div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mb-8">
                    <p>{descrip}</p>
                  </div>
                  {/* btn */}
                  <button
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "border border-neutral-500"
                    } btn btn-lg rounded-[1px] lg:mx-auto`}
                  >
                    <a href={wpp}>Reserva</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
