import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components

import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import FechasDB from "./components/FechasDB";
import Promociones from "./components/Promociones";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 1000,
    delay: 100,
  });

  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route exact path="/db" element={<FechasDB />} />
          <Route exact path="/promociones" element={<Promociones />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
