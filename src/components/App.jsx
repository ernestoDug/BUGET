import React from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// npm install react-router-dom

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



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        loading: true
    }
}
// підключаємось до бд стан лоадинг та вивід лоудера потрібен поки ще база за піделючена бо помилка 
componentDidMount() {
    open().then(() => {
        this.setState({
            loading: false
        })
    }).catch(() => {
        console.error('Помилка')
    });
}

render() {
  if (this.state.loading) {
    return <Loading/>
};

  return (
    <>
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
    </>
  );
}
};

export default App;
