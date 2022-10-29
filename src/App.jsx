import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [light, setLight] = useState(false);
  const [size, setSize] = useState(false);

  const increaseOne = () => {
    setValue(value + 1);
    changeSize();
  };

  const decreaseOne = () => {
    setValue(value - 1);
    changeSize();
  };

  const changeColor = () => {
    setLight(!light);
  };

  const changeSize = () => {
    setSize(!size);
  };
  return (
    <div
      className="app"
      style={{
        backgroundColor: light ? "green" : "yellow",
        transition: "0.5s",
      }}>
      <div
        className="number"
        style={{
          fontSize: size ? "70px" : "50px",
          color: "black",
          transition: "1s",
        }}>
        {value}
      </div>
      <button className="increase" onClick={increaseOne}>
        Plus
      </button>
      <button className="decrease" onClick={decreaseOne}>
        Minus
      </button>
      <button className="changeColor" onClick={changeColor}>
        Change
      </button>
    </div>
  );
}

export default App;
