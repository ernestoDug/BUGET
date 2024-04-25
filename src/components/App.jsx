// import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// npm install react-router-dom

import Home   from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Statistics from '../Pages/Statistics/Statistics';
import Layout from "./Layout";


import "normalize.css";
/* npm install normalize.css */

// import ErrorPage from "../error-page";

// Щоб відкласти завантаження коду цього компонента до його першого відтворення
// щоб відкладений компонент, який ви імпортуєте, був експортований як defaultекспорт.


// ч1 3 30
// 24/04 +++++++++++++++++++++++++++++++++++

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
        
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />} />

            <Route path="statistics" element={<Statistics />} />
      {/* подстановочный путь */}
            <Route path="*" element={<Home />} />
            </Route>

            </Route>
                </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
