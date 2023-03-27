import "./App.scss";
import Axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);

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
      <div className="cryptoHeader"></div>
      <div className="cryptoDisplay">
        {listOfCoins.map((coin) => {
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
