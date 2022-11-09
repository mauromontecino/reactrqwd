import React from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Workouts from "./components/Workouts";
import Pricing from "./components/Pricing";
import Pricing2 from "./components/Pricing2";
import Community from "./components/Community";
import Faq from "./components/Faq";
import Join from "./components/Join";
import Footer from "./components/Footer";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 1000,
    delay: 100,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Pricing2 />
      <Community />
      <Faq />
      <Join />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
