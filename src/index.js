import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes.js";
import registerServiceWorker from "./registerServiceWorker";

// Stylesheets
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./index.css";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
