import React, { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import AsideMenu from "../AsideMenu/AsideMenu";
import Header from "../Header/Header";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="pageContainer">
        <AsideMenu />

        <main className="pageContainer__main">
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Layout;
