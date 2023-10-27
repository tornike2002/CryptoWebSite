import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./CryptoList.css";

const CryptoList = () => {
  const [cryptoValutes, setCryptoValutes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api4.binance.com/api/v3/ticker/24hr")
      .then((res) => {
        const firstFiveCrypto = res.data.slice(0, 5);
        setCryptoValutes(firstFiveCrypto);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(cryptoValutes);

  return (
    <Fragment>
      <div className="crypto-main_container">
        <div className="crypto-container">
          {cryptoValutes.map((crypto) => (
            <div className="crypto-wraper" key={crypto.symbol}>
              <div className="crypto-text">
                <i className="fa-brands fa-bitcoin"></i>
                <h1>{crypto.symbol}</h1>
              </div>
              <div className="crypto-text">
                <h1>{crypto.lastPrice}</h1>
              </div>
              <div className="crypto-text">
                <h1 className="crypto-downfall">{crypto.priceChangePercent}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="crypto-text_side">
          <h1>
            Cryptocurrency Market
            <br /> Capitalizations!
          </h1>
          <p>
            Cryptocurrency markets are on the up today, with almost all of the
            top 20 coins in the green,{<br />} and the highest gain reaching
            almost 37 percent at press time.
          </p>
          <p>
            The market had been in the red with almost $100 bln in losses in
            total market capitalization over a three day period. The total
            market cap is now recovering, climbing to around $720 bln.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default CryptoList;
