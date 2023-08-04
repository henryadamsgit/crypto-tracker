import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import Main from "../../components/Main/Main";
import SideMain from "../../components/SideMain/SideMain";
import Ticker from "../../components/Ticker/Ticker";

const Stocks = ({ searchTerm }) => {
  const [stockData, setStockData] = useState(null);

  const API_KEY = "NJW414YT4JI2HQUQ";
  const DATA_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${API_KEY}`;
  const COMPANY_URL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DATA_URL, COMPANY_URL);
        const data = await response.json(); // Parse the JSON data
        setStockData(data); // Set the parsed data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [DATA_URL, COMPANY_URL]);

  return (
    <>
      {stockData ? (
        <pre>{JSON.stringify(stockData, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
      <TopNav />
      <Ticker />
      <Main stockData={stockData} />
      <SideMain />
    </>
  );
};

export default Stocks;
