import React from "react";

function Coin({ name, price, icon, symbol }) {
  return (
    <div className="coin">
      <h3>{name}</h3>
      <h3>Price: {price}</h3>
      <img src={icon} />
      <h3>Symbol: {symbol} </h3>
    </div>
  );
}

export default Coin;
