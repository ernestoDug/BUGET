import Header from './Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading/Loading';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        {/* <Suspense>дозволяє відображати резервний варіант, 
        доки його дочірні елементи не завершать завантаження. */}
        <Outlet />
        {/*  Outlet позволяет отображать вложенный пользовательский интерфейс  */}
      </Suspense>
    </>
  );
};

export default Layout;