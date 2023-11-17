import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { Homepage } from "./pages/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
