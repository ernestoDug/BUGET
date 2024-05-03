import React from "react";
import { lazy } from "react";

import { useState, useEffect } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom";
// npm install react-router-dom

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// npm i react-toastify


import Layout from "./Layout";

import "normalize.css";
/* npm install normalize.css */

import ErrorPage from "../ErrorPage";
import { open } from "../utils/indexdb.js";
import Loading from "./Loading/Loading.jsx";

// Щоб відкласти завантаження коду цього компонента до його першого відтворення
// щоб відкладений компонент, який ви імпортуєте, був експортований як defaultекспорт.
const Home = lazy(() => import("./../Pages/Home/Home"));
const About = lazy(() => import("./../Pages/About/About"));
const Statistics = lazy(() => import("./../Pages/Statistics/Statistics"));



const  App = () =>  {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // підключаємось до бд стан лоадинг та вивід лоудера потрібен поки ще база за піделючена бо помилка 

    open().then(() => {
      setLoading( loading === false
      )
      // сповіщення 
   toast("ЧЕКАЙТЕ ЗАВАНТАЖУЄМО");
  }).catch(() => {
      console.error('Помилка')
  });
    // the side effect will only run when the props or state changed
 }, [ ])


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

     { loading ? (<> <Loading/>  </>) :( 

          <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route  path="home" element={<Home />} />

              <Route path="about" element={<About />} />

              <Route path="statistics" element={<Statistics />} />
              {/* подстановочный путь */}
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
     )}
    </>
   );
}


export default App;
