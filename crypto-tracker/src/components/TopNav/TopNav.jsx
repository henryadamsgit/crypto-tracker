import React from "react";
import "./TopNav.scss";
import CryptoSelect from "../CryptoSelect/CryptoSelect";
import StockSelect from "../StockSelect/StockSelect";

const TopNav = () => {
  return (
    <div className="topNav">
      <h3 className="title">Crypto & Stock Tracker</h3>
      <CryptoSelect />
      <StockSelect />
    </div>
  );
};

export default TopNav;
