import loadReq from "./logic";

const Db = () => {
  setTimeout(() => {
    loadReq();
  }, 1000);
};

export default Db;
