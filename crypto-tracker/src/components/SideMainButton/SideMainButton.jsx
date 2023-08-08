import React from "react";
import "./SideMainButton.scss";

const SideMainButton = ({ label, value }) => {
  return (
    <div className="sideMainButton">
      <div className="sideMainButton__key">{label}</div>
      <div className="sideMainButton__value">{value}</div>
    </div>
  );
};

export default SideMainButton;
