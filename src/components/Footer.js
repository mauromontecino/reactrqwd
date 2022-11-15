import React from "react";

// import footer data
import { footer } from "../data";

const Footer = () => {
  // destructure footer data
  const { logo, copyrightText } = footer;
  return (
    <footer className="bg-neutral-500 h-[350px] md:h-[195px] px-[20px]">
      <div className="text-center">
        <br />
        <h2>Teléfono:</h2>
        <p>+54 9 299 5175495</p>
        <br />
        <h2>Dirección:</h2>
        <p>Río Negro 51, Centenario, Neuquén</p>
      </div>
      <div
        className="container mx-auto h-full flex justify-between items-center md:pb-[200px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* logo */}
        <a href="#">
          <img className="" src={logo} alt="" />
        </a>
        {/* copyright text */}
        <p className="text-neutral-300 text-sm">
          {copyrightText}
          <a href="https://www.mauromontecino.com/">Mauro Montecino</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
