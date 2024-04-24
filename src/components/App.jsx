import { lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "normalize.css";
/* npm install normalize.css */

import Header from "./Header/Header";
import ErrorPage from "../error-page";


// Щоб відкласти завантаження коду цього компонента до його першого відтворення
// щоб відкладений компонент, який ви імпортуєте, був експортований як defaultекспорт.
const Home = lazy(() => import("./../Pages/Home/Home"));
const About = lazy(() => import("./../Pages/About/About"));
const Statistics = lazy(() => import("./../Pages/Statistics/Statistics"));

// ч1 3 30
// 24/04 +++++++++++++++++++++++++++++++++++

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        {/* подстановочный путь */}
        <Route index  element={<ErrorPage />} />

        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="statistics" element={<Statistics />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
