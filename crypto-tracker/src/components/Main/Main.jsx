import React from "react";
import "./Main.scss";
import MainGraph from "../MainGraph/MainGraph";
import MainTitle from "../MainTitle/MainTitle";

const Main = () => {
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
