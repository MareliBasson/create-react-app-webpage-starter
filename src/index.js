import React from "react";
import ReactDOM from "react-dom";
import HomePage from "pages/home";
import registerServiceWorker from "./registerServiceWorker";

// Stylesheets
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./index.css";

ReactDOM.render(<HomePage />, document.getElementById("root"));
registerServiceWorker();
