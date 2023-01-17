import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="rectangle">
        <div className="top">
          <div className="temperature">10°C</div>
        </div>
        <div className="bottom">
          <div className="circle">-</div>
          <div className="circle">+</div>
        </div>
      </div>
    </div>
  );
}

export default App;
