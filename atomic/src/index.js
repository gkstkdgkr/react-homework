import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import App from "./component/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
