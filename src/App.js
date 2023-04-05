import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Components/Coin";
import "./App.css";
import background from "./Assets/background.jpg";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchCrypto, setSearchCrypto] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
        console.log(response.data);
      }
    );
  }, []);

  const filtered = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchCrypto.toLowerCase());
  });

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="type in cryptocurrency..."
          onChange={(event) => {
            setSearchCrypto(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filtered.map((coin) => {
          return (
            <Coin
              name={coin.name}
              price={coin.price}
              icon={coin.icon}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
