import React from "react";
import "./Main.scss";
import MainGraph from "../MainGraph/MainGraph";
import MainTitle from "../MainTitle/MainTitle";

const Main = ({ stockData, cryptoData, selectedData }) => {
  return (
    <>
      <div className="Main">
        <MainTitle
          stockData={stockData}
          cryptoData={cryptoData}
          selectedData={selectedData}
        />
        <MainGraph
          stockData={stockData}
          cryptoData={cryptoData}
          selectedData={selectedData}
        />
      </div>
    </>
  );
};

export default Main;
