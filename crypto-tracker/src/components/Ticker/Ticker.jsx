import React, { useEffect, useRef } from "react";
import "./Ticker.scss";
import TickerButton from "../TickerButton/TickerButton";

const Ticker = ({ cryptoData }) => {
  const TICKER_ITEM_WIDTH = 180;
  const TICKER_SCROLL_DELAY = 3000; // 3 seconds

  const tickerRef = useRef(null);

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

    return () => {
      // No need to clear anything for requestAnimationFrame
    };
  }, []);

  return (
    <div className="ticker">
      <div className="ticker__carousel" ref={tickerRef}>
        {cryptoData && cryptoData.length > 0 ? (
          cryptoData.map((crypto, index) => (
            <TickerButton
              key={crypto.asset_id}
              title={crypto.name}
              data={parseFloat(crypto.price_usd).toFixed(4)}
              colorIndex={index}
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
