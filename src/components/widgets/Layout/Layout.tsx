import React, { FC, Suspense, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AsideMenu from "../AsideMenu/AsideMenu";
import Header from "../Header/Header";
import PopUp from "../PopUp/PopUp";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import PopUpSettings from "../PopUp/PopUpSettings";
import EmailSettingsForm from "@/components/UI/forms/EmailSettingsForm/EmailSettingsForm";
import GeneralSettingsForm from "@/components/UI/forms/GeneralSettingsForm/GeneralSettingsForm";
import AppearanceSettingsForm from "@/components/UI/forms/AppearanceSettingsForm/AppearanceSettingsForm";
import CustomDomain from "@/components/UI/forms/CustomDomain/CustomDomain";

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
    <div className="layout">
      <PopUpSettings>
        {PopUpSettingsType === "email" && <EmailSettingsForm formTitle="Email settings" />}
        {PopUpSettingsType === "general" && <GeneralSettingsForm formTitle="General settings" />}
        {PopUpSettingsType === "appearance" && <AppearanceSettingsForm formTitle="Appearance" />}
        {PopUpSettingsType === "domain" && <CustomDomain formTitle="Custom domain" />}
      </PopUpSettings>

      <Header useOption={false} />
      <div className="pageContainer">
        <AsideMenu />

        <main className="pageContainer__main">
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
