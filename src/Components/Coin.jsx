import React from "react";

function Coin({ name, price, symbol, icon }) {
  return (
    <div className="coin">
      <h2>Name:{name}</h2>
      <h3>Price:{price}</h3>
      <h3>Symbol: {symbol}</h3>
      <img src={icon} />
    </div>
  );
}

export default Coin;
