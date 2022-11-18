import React from "react";
// import data
import { workouts } from "../data";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../workoutSlider.css";

// import required modules
import { Navigation } from "swiper";

const WorkoutSlider = () => {
  // destructure data
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      // grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, idx) => {
        // destructure program
        const { image, name } = program;
        return (
          <SwiperSlide
            className="max-w-[320px] max-h-[320px] relative bg-purple-200"
            key={idx}
          >
            <img className="w-full h-full object-cover" src={image} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
