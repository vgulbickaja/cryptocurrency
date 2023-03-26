import "./App.scss";
import Axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("I work");
  }, []);
  return (
    <div className="App">
      <div className="cryptoHead"></div>
      <div className="cryptoList"></div>
    </div>
  );
}

export default App;
