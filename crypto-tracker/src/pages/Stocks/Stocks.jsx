import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import Main from "../../components/Main/Main";
import SideMain from "../../components/SideMain/SideMain";
import Ticker from "../../components/Ticker/Ticker";

const Stocks = ({
  handleTickerButtonClick,
  selectedData,
  stockData,
  setStockData,
}) => {
  const API_KEY = "NJW414YT4JI2HQUQ";
  const STOCKS = [
    "MSFT",
    "AAPL",
    "GOOGL",
    "AMZN",
    "FB",
    "INTC",
    "NVDA",
    "TSLA",
    "V",
    "MA",
    "JNJ",
    "JPM",
    "WMT",
    "PG",
    "UNH",
    "BAC",
    "HDB",
    "CVX",
    "COST",
    "BABA",
    "XOM",
    "TM",
    "PFE",
    "HD",
    "VZ",
    "BRK-B",
    "KO",
    "DIS",
    "CMCSA",
    "NFLX",
    "PEP",
    "ADBE",
    "TMUS",
    "ABT",
    "NVS",
    "LLY",
    "WFC",
    "MRK",
    "MDT",
    "NKE",
    "ORCL",
    "CHL",
    "ABBV",
    "ASML",
    "NEE",
    "TXN",
    "T",
    "SAP",
  ];

  const filterStocks = (query) => {
    const filteredStocks = stockData.filter((stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase())
    );
    return [...filteredStocks];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = STOCKS.map(async (symbol) => {
          const DATA_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=50&apikey=${API_KEY}`;
          const response = await fetch(DATA_URL);
          const data = await response.json();

          const symbolData = {
            symbol,
            price: data["TIME_SERIES_DAILY"]?.["close"] || "N/A",
          };

          return symbolData;
        });

        const stockDataArray = await Promise.all(promises);
        setStockData(stockDataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TopNav />
      <Ticker
        stockData={stockData}
        dataType="stocks"
        handleTickerButtonClick={handleTickerButtonClick}
      />
      <Main stockData={stockData} selectedData={selectedData} />
      <SideMain
        stockData={stockData}
        dataType="stocks"
        selectedData={selectedData}
      />
    </>
  );
};

export default Stocks;
