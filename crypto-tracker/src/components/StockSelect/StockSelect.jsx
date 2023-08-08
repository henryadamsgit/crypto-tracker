import React from "react";
import "./StockSelect.scss";
import { NavLink } from "react-router-dom";

const StockSelect = () => {
  return (
    <div className="stockSelect">
      <div className="stockSelect__title">
        <NavLink to="/">Stocks</NavLink>
      </div>
    </div>
  );
};

export default StockSelect;
