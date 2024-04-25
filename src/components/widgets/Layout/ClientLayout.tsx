import React, { FC, Suspense, useContext, useEffect, useState } from "react";
import "./ClientLayout.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ClientLayout: FC = () => {
  return (
    <div className="client-layout">
      <div className="client-layout__wrapper">
        <Header useOption={true} />

        <div className="pageContainer">
          <main className="pageContainer__main">
            <Suspense fallback={<></>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClientLayout;
