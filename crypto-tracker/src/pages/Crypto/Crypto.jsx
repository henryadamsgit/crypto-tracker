import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import Main from "../../components/Main/Main";
import SideMain from "../../components/SideMain/SideMain";
import Ticker from "../../components/Ticker/Ticker";

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const API_KEY = "E4BED6D4-13CE-4E87-A3BA-0239E5EA0840";
  const API_URL = `https://rest.coinapi.io/v1/assets?apikey=${API_KEY}&limit=100`; // Fetch a larger limit

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const cryptoCurrencies = data
          .filter((crypto) => crypto.type_is_crypto === 1)
          .slice(0, 50);
        setCryptoData(cryptoCurrencies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <>
      <TopNav />
      <Ticker
        cryptoData={cryptoData}
        handleCurrencySelect={handleCurrencySelect}
      />
      <Main cryptoData={cryptoData} />
      <SideMain />
      {cryptoData ? (
        <>
          <ul>
            {cryptoData.map((crypto) => (
              <li
                key={crypto.asset_id}
                onClick={() => handleCurrencySelect(crypto.asset_id)}
              >
                {crypto.name}
              </li>
            ))}
          </ul>
          {selectedCurrency ? (
            <pre>
              {JSON.stringify(
                cryptoData.find(
                  (crypto) => crypto.asset_id === selectedCurrency
                ),
                null,
                2
              )}
            </pre>
          ) : (
            <p>Please select a currency from the list.</p>
          )}
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default Crypto;
