import React from "react";
import ReactDOM from "react-dom/client";


// npm install react-router-dom
import "./index.css";

import App from "./components/App";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
      {/* ТЕПЕР ЦЕЙ АП В КРИАТ БРАУЗЕР РОУТЕР */}
      <App />
    {/* </RouterProvider> */}
  </React.StrictMode>
);
