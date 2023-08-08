import React from "react";
import "./TickerButton.scss";

const TickerButton = ({ title, data, colorIndex, onClick }) => {
  const colors = ["#f0f0f0", "#2196f3", "#ff9800", "#4caf50", "#e91e63"];

  return (
    <div
      className="tickerButton"
      style={{ backgroundColor: colors[colorIndex % colors.length] }}
      onClick={onClick}
    >
      <div className="tickerButton--title">{title}</div>
      <div className="tickerButton--data">{data}</div>
    </div>
  );
};

export default TickerButton;
