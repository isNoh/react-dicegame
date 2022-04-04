import "./App.css";
import "./Dice.css";
import { Dice } from "./components/Dice";
import { Winner } from "./components/Winner";
import { Zustore } from "./Zustore";

function App() {
  const { winner } = Zustore();
  return (
    <div className="app">
      <div>
        {winner ? <Winner winner={winner} /> : null}
        <div className="app_title">
          <img src={require("./img/logo.png")} width="200px" />
        </div>
        <div className="app-dice">
          <Dice />
        </div>
      </div>
    </div>
  );
}

export default App;
