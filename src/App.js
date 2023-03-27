import "./App.scss";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);
  return (
    <div className="App">
      <div className="cryptoHeader"></div>
      <div className="cryptoDisplay">
        {listOfCoins.map((coin) => {
          return <h1>{coin.name}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
