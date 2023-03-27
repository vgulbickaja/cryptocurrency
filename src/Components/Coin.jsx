import React from "react";

function Coin({ name, price, symbol, icon }) {
  return (
    <div className="coin">
      <h1>{name}</h1>
      <p>Price: {price}</p>
      <p>Symbol: {symbol}</p>
      <img src={icon} />
    </div>
  );
}

export default Coin;
