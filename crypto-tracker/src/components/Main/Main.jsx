import React from "react";
import "./Main.scss";
import MainGraph from "../MainGraph/MainGraph";
import MainTitle from "../MainTitle/MainTitle";

const Main = ({ stockData, cryptoData  }) => {
  return (
    <>
      <div className="Main">
        <MainTitle />
        <MainGraph />
      </div>
    </>
  );
};

export default Main;
