import React from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components

import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
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
      <ItemListContainer />
      <Footer />

      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
