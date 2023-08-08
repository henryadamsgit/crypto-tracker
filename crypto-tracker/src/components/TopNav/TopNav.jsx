import React from "react";
import "./TopNav.scss";
import CryptoSelect from "../CryptoSelect/CryptoSelect";
import StockSelect from "../StockSelect/StockSelect";
import Search from "../Search/Search";

const TopNav = () => {
  return (
    <div className="topNav">
      <Search />
      <h3 className="title">Crypto & Stock Tracker</h3>
      <StockSelect />
      <CryptoSelect />
    </div>
  );
};

export default TopNav;
