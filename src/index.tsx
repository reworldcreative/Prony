import "./styles/main.scss";
// const start = require("./js/start");

import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
