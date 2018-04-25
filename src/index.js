import React from "react";
import ReactDOM from "react-dom";
import HomePage from "pages/home";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<HomePage />, document.getElementById("root"));
registerServiceWorker();
