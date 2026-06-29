import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { HarvestingProvider } from "./context/HarvestingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HarvestingProvider>
      <App />
    </HarvestingProvider>
  </React.StrictMode>
);