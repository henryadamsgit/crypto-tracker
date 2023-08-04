import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stocks from "./pages/Stocks/Stocks";
import Crypto from "./pages/Crypto/Crypto";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const allInput = event.target.value.toLowerCase();
    setSearchTerm(allInput);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stocks handleInput={handleInput} />} />
        <Route path="/crypto" element={<Crypto handleInput={handleInput} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

///NJW414YT4JI2HQUQ
