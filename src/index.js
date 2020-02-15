import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Part 3 Exercise/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
