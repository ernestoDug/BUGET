import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "normalize.css";
/* npm install normalize.css */

// Щоб відкласти завантаження коду цього компонента до його першого відтворення
// щоб відкладений компонент, який ви імпортуєте, був експортований як defaultекспорт.
const Home = lazy(() => import('./../Pages/Home/Home'));

// ч1 3 30
// 24/04 +++++++++++++++++++++++++++++++++++

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
