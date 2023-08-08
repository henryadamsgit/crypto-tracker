import React from "react";
import "./MainTitle.scss";

const MainTitle = ({ stockData, cryptoData }) => {
  return (
    <div className="MainTitle">
      {cryptoData ? cryptoData.name : stockData ? stockData.name : "No Data"}
    </div>
  );
};

export default MainTitle;
