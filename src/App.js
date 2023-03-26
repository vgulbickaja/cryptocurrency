import "./App.scss";
import Axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
      (response) => {
        console.log(response.data);
      }
    );
  }, []);
  return (
    <div className="App">
      <div className="cryptoHead"></div>
      <div className="cryptoList"></div>
    </div>
  );
}

export default App;
