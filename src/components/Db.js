import React from "react";
import loadReq from "./logic";

setTimeout(() => {
  loadReq();
}, 1000);

const Db = () => {
  return (
    <>
      <button onClick={loadReq} className="botonFechas">
        Recargar Fechas
      </button>
      <div>
        <table className="output"></table>
      </div>
    </>
  );
};

export default Db;
