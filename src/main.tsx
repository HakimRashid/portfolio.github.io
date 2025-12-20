import ReactDOM from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import React from "react";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
