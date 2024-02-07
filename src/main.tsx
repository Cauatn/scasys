import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ItemsProvider } from "./context/ItemsContext.tsx";
import AppRouter from "./routes.tsx";


const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ItemsProvider>
        <AppRouter />
      </ItemsProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found in the DOM");
}
