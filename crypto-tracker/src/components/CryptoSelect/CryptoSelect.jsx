import React from "react";
import "./CryptoSelect.scss";
import { NavLink } from "react-router-dom";

const CryptoSelect = () => {
  return (
    <div className="cryptoSelect">
      <div className="cryptoSelect__title">
        <NavLink to="/crypto">Crypto</NavLink>
      </div>
    </div>
  );
};

export default CryptoSelect;
