import React, { FC, Suspense, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AsideMenu from "../AsideMenu/AsideMenu";
import Header from "../Header/Header";
import PopUp from "../PopUp/PopUp";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import PopUpSettings from "../PopUp/PopUpSettings";
import EmailSettingsForm from "@/components/UI/forms/EmailSettingsForm/EmailSettingsForm";

const Layout: FC = () => {
  const {
    isOpenPopUp,
    setOpenPopUp,
    PopUpSettingsType,
    setPopUpSettingsType,
    isOpenPopUpSettings,
    setOpenPopUpSettings,
  } = useContext(GlobalContext);

  return (
    <>
      <PopUpSettings>{PopUpSettingsType === "email" && <EmailSettingsForm formTitle="Email settings" />}</PopUpSettings>

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
