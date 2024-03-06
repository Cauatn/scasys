import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { ExperimentoProvider } from "./context/ExperimentoContext.tsx"
import AppRouter from "./routes.tsx"
import { ConjuntosProvider } from "./context/ConjuntoContext.tsx"

const rootElement = document.getElementById("root")

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ConjuntosProvider>
        <ExperimentoProvider>
          <AppRouter />
        </ExperimentoProvider>
      </ConjuntosProvider>
    </React.StrictMode>
  )
} else {
  console.error("Root element with ID 'root' not found in the DOM")
}
