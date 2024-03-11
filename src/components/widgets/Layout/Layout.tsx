import React, { FC } from "react";
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
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
