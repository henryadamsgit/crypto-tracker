import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stocks from "./pages/Stocks/Stocks";
import Crypto from "./pages/Crypto/Crypto";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [stockData, setStockData] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);

  const handleInput = (event) => {
    const allInput = event.target.value.toLowerCase();
    setSearchTerm(allInput);
  };

  const handleTickerButtonClick = (data) => {
    setSelectedData(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Stocks
              handleInput={handleInput}
              handleTickerButtonClick={setSelectedData}
              setSearchResults={setSearchResults}
              stockData={stockData}
              setStockData={setStockData}
            />
          }
        />
        <Route
          path="/crypto"
          element={
            <Crypto
              handleInput={handleInput}
              handleTickerButtonClick={setSelectedData}
              setSearchResults={setSearchResults}
              cryptoData={cryptoData}
              setCryptoData={setCryptoData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

///NJW414YT4JI2HQUQ
