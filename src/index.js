import React from "react";
import ReactDOM from "react-dom";
import { Rotate } from "./rotate";
import { Pop } from "./pop";
import { Gesture } from "./gesture";
import { Toggle } from "./toggle";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Rotate />
      <hr />
      <Pop />
      <hr />
      <Gesture />
      <hr />
      <Toggle />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
