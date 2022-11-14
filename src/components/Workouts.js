import React from "react";

// import data
import { workouts } from "../data";

// import components
import WorkoutSlider from "./WorkoutSlider";

const Workouts = () => {
  // destructure workouts data
  const { title, icon } = workouts;
  return (
    <section className="section" id="galeriaPage">
      {/* section title */}
      <div
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={icon} alt="" />
        <h2 className="h2 section-title">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>

      {/* slider */}
      <div data-aos="fade-up" data-aos-delay="300">
        <WorkoutSlider />
      </div>
      <div className="text-center verMas">
        <a
          href="http://google.com"
          className="link gap-x-4 hover:gap-x-6 transition-all"
        >
          Ver más
        </a>
      </div>
    </section>
  );
};

export default Workouts;
