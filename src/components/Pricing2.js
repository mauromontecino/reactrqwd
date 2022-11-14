import React from "react";

// import data
import { pricing2 } from "../data";

// import components
import PlanList from "./PlanList";

const Pricing2 = () => {
  // destructure pricing
  const { icon, title, plans, descrip } = pricing2;
  return (
    <section className="section" id="serviciosPage">
      {/* section title */}
      <div
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <img src={icon} alt="" />
        <h2 className="h2 section-title">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* plan list */}
      <PlanList plans={plans} />
      <div className="text-center verMas">
        <a
          className="link d-flex justify-content-center gap-x-4 hover:gap-x-6 "
          href="/promociones"
        >
          Ver Promociones
        </a>
      </div>
    </section>
  );
};

export default Pricing2;
