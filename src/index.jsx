import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
// npm install react-error-boundary

import "./index.css";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Щось пішло не так</div>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
