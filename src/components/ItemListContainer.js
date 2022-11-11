import React from "react";
import Banner from "./Banner";
import About from "./About";
import Workouts from "./Workouts";
import Pricing from "./Pricing";
import Pricing2 from "./Pricing2";
import Community from "./Community";
import Faq from "./Faq";
import Join from "./Join";

export const ItemListContainer = () => {
  return (
    <>
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Pricing2 />
      <Community />
      <Faq />
      <Join />
    </>
  );
};

export default ItemListContainer;
