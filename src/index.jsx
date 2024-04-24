import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// npm install react-router-dom
import "./index.css";

import App from "./components/App";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* ТЕПЕР ЦЕЙ АП В КРИАТ БРАУЗЕР РОУТЕР */}
      {/* <App /> */}
    </RouterProvider>
  </React.StrictMode>
);
