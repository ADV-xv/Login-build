import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./App.jsx"; // Make sure this path is correct
import "./index.css"; // If this doesn't exist, comment it out

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);