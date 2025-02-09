import React from "react";
import { lazy } from "react";

import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// npm install react-router-dom

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// npm i react-toastify

import Layout from "./Layout";

import "normalize.css";
/* npm install normalize.css */

import ErrorPage from "../ErrorPage";
import { open } from "../utils/indexdb.js";
import Loading from "./Loading/Loading.jsx";
import { AppContext } from "../provaiders/context/context.js";
// тепер їм обгорнемо ап роутер щоб контекст діставати

// Щоб відкласти завантаження коду цього компонента до його першого відтворення
// щоб відкладений компонент, який ви імпортуєте, був експортований як defaultекспорт.
const Home = lazy(() => import("./../Pages/Home/Home"));
const About = lazy(() => import("./../Pages/About/About"));
const Statistics = lazy(() => import("./../Pages/Statistics/Statistics"));
const Settings = lazy(() => import("./../Pages/Settings/Settings"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    open()
      .then(() => {
        setLoading(loading === false);
        // сповіщення
        toast("ЧЕКАЙТЕ ЗАВАНТАЖУЄМО");
      })
      .catch(() => {
        console.error("Помилка");
      });
    // підключаємось до бд стан лоадинг та вивід лоудера потрібен поки ще база за піделючена бо помилка

    // the side effect will only run when the props or state changed
  }, []);

  //  10/05 24  242 мин

  return (
    <>
      {/* контейнтер для сповіщень */}
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {loading ? (
        <>
          {" "}
          <Loading />{" "}
        </>
      ) : (
        <AppContext.Provider value={{ currensy: "UAH" }}>
          {/* У ПРОВАЙДЕР ТРЕБА ПЕРЕДАВАТИ ВЕЛ*Ю */}
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Layout />}>
                  <Route path="home" element={<Home />} />

                  <Route path="about" element={<About />} />

                  <Route path="statistics" element={<Statistics />} />

                  <Route path="settings" element={<Settings />} />

                  {/* подстановочный путь */}
                  <Route path="*" element={<ErrorPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      )}
    </>
  );
};

export default App;
