import React, { FC, Suspense, useContext, useEffect, useState } from "react";
import "./ClientLayout.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ClientAsideMenu from "../ClientAsideMenu/ClientAsideMenu";
import PopUp from "../PopUp/PopUp";

const ClientLayout: FC = () => {
  const {
    breadcrumbsLinks,
    setBreadcrumbsLinks,
    breadcrumbsTitles,
    setBreadcrumbsTitles,
    isOpenPopUp,
    setOpenPopUp,
    popUpData,
    setPopUpData,
    mainRoot, setMainRoot
  } = useContext(GlobalContext);

  useEffect(() => {
    setMainRoot("/client")
  }, [])
  
  return (
    <>
      <PopUp addClass="clientPopUp">{popUpData}</PopUp>

      <div className="client-layout">
        <div className="client-layout__wrapper">
          <Header useOption={true} />

          <Breadcrumbs
            currentTitle={breadcrumbsTitles}
            currentLink={breadcrumbsLinks}
            defaultLink="/client"
            defaultTitle="Client"
          />

          <div className="pageContainer clientPageContainer">
            <ClientAsideMenu />

            <main className="pageContainer__main clientPageContainer__main">
              <Suspense fallback={<></>}>
                <Outlet />
              </Suspense>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ClientLayout;
