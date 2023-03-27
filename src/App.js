import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [wordSearch, setWordSearch] = useState("");

  const filtering = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(wordSearch.toLowerCase());
  });

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
        //console.log(response.data);
      }
    );
  }, []);
  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Enter currency name..."
          onChange={(event) => {
            setWordSearch(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filtering.map((coin) => {
          return (
            <Coin
              name={coin.name}
              price={coin.price}
              symbol={coin.symbol}
              icon={coin.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
