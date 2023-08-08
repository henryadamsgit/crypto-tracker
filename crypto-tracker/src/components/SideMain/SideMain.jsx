import React from "react";
import "./SideMain.scss";
import SideMainButton from "../SideMainButton/SideMainButton";

const SideMain = ({ dataType, stockData, cryptoData, selectedData }) => {
  const data =
    dataType === "crypto"
      ? cryptoData
      : stockData?.data?.["Time Series (Daily)"];
  const showData = data ? data[new Date().toISOString().split("T")[0]] : null;

  console.log("selectedData:", showData); // Add this console log

  return (
    <div className="sideMain">
      <div className="sideMain__date">
        {new Date().toISOString().split("T")[0]}
      </div>
      <div className="sideMain__buttons">
        {selectedData ? (
          <>
            <SideMainButton label="Open" value={showData["1. open"]} />
            <SideMainButton label="High" value={showData["2. high"]} />
            <SideMainButton label="Low" value={showData["3. low"]} />
            <SideMainButton label="Close" value={showData["4. close"]} />
            <SideMainButton label="Volume" value={showData["5. volume"]} />
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default SideMain;
