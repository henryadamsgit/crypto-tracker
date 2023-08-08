import React, { useEffect, useRef, useState } from "react";
import "./Ticker.scss";
import TickerButton from "../TickerButton/TickerButton";

const Ticker = ({
  dataType,
  cryptoData,
  stockData,
  handleTickerButtonClick,
}) => {
  const TICKER_ITEM_WIDTH = 180;
  const TICKER_SCROLL_DELAY = 3000; // 3 seconds

  const tickerRef = useRef(null);

  const data = dataType === "crypto" ? cryptoData : stockData;

  useEffect(() => {
    const ticker = tickerRef.current;

    const startScrolling = () => {
      const startTime = Date.now();

      const animateScroll = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const tickerScroll =
          (elapsed / TICKER_SCROLL_DELAY) * TICKER_ITEM_WIDTH;

        ticker.scrollTo({
          top: 0,
          left: tickerScroll,
          behavior: "auto",
        });

        requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);
    };

    startScrolling();

    return () => {};
  }, []);

  return (
    <div className="ticker">
      <div className="ticker__carousel" ref={tickerRef}>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <TickerButton
              key={dataType === "crypto" ? item.asset_id : item.symbol}
              title={item.name}
              data={
                dataType === "crypto"
                  ? parseFloat(item.price_usd).toFixed(4)
                  : item.price
              }
              colorIndex={index}
              onClick={() => handleTickerButtonClick(item)}
            />
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Ticker;
