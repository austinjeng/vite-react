import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(20);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (temperature >= 28) {
      setColor("hot");
    } else if (temperature < 28 && temperature >= 15) {
      setColor("");
    } else {
      setColor("cold");
    }
  }, [temperature]);
  function increaseTemperature() {
    setTemperature(temperature + 1);
  }
  function decreaseTemperature() {
    setTemperature(temperature - 1);
  }

  return (
    <div className="container">
      <div className="rectangle">
        <div className="top">
          <div className={`temperature ${color}`}>{temperature}°C</div>
        </div>
        <div className="bottom">
          <div className="circle" onClick={decreaseTemperature}>
            -
          </div>
          <div className="circle" onClick={increaseTemperature}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
