import React from "react";
import ReactDOM from "react-dom";
import BaseRouter from "./routes";

import "./styles.css";

function App() {
  return (
    <div className="App flex flex-col min-h-screen overflow-y-scroll font-mono">
      <BaseRouter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
