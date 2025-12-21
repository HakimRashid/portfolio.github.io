import ReactDOM from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio.github.io/">
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
