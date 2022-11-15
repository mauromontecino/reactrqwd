import React from "react";
import estilos from "./Pricing2.module.css";

// import data
import { pricing2 } from "../data";

// import components
import PlanList from "./PlanList";

const Pricing2 = () => {
  // destructure pricing
  const { icon, title, plans, descrip } = pricing2;
  return (
    <section className="section" id="serviciosPageInf">
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
      <div className="text-center verMas mt-8">
        <div className={estilos.container}>
          <div className={estilos.interior}>
            <a
              className="link d-flex justify-content-center gap-x-4 hover:gap-x-6 "
              href="#open-modal"
            >
              Ver promociones
            </a>
          </div>
        </div>
        <div id="open-modal" className={estilos.modalwindow}>
          <div>
            <a
              href="#serviciosPageInf"
              title="Close"
              className={estilos.modalclose}
            >
              Cerrar
            </a>
            <h1>
              CUMPLES INFANTILES <i class="fa-solid fa-cake-candles"></i>
            </h1>
            <div>
              <strong>
                <p>
                  <i class="fa-solid fa-tags"></i> De Lunes a Jueves ¡10% de
                  descuento!
                </p>
              </strong>
              <br />
              <strong>
                <p>
                  <i class="fa-solid fa-tags"></i> De Lunes a Jueves de 13hs a
                  17hs ¡20% de descuento!
                </p>
              </strong>
            </div>
            <br />
            <div>
              <small>*Se aplica al precio del cumple infantil base</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
