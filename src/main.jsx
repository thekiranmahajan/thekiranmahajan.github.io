import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ActiveSectionProvider } from "./contexts/ActiveSectionProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActiveSectionProvider>
      <App />
    </ActiveSectionProvider>
  </React.StrictMode>,
);
