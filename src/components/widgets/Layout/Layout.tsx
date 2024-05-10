import React, { FC, Suspense, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/GlobalContext";
// import Header from "../Header/Header";
// import AsideMenu from "../AsideMenu/AsideMenu";
// import PopUpSettings from "../PopUp/PopUpSettings";
// import EmailSettingsForm from "@/components/UI/forms/EmailSettingsForm/EmailSettingsForm";
// import GeneralSettingsForm from "@/components/UI/forms/GeneralSettingsForm/GeneralSettingsForm";
// import AppearanceSettingsForm from "@/components/UI/forms/AppearanceSettingsForm/AppearanceSettingsForm";
// import CustomDomain from "@/components/UI/forms/CustomDomain/CustomDomain";
const Header = React.lazy(() => import("../Header/Header"));
const AsideMenu = React.lazy(() => import("../AsideMenu/AsideMenu"));
const PopUpSettings = React.lazy(() => import("../PopUp/PopUpSettings"));
const EmailSettingsForm = React.lazy(() => import("@/components/UI/forms/EmailSettingsForm/EmailSettingsForm"));
const GeneralSettingsForm = React.lazy(() => import("@/components/UI/forms/GeneralSettingsForm/GeneralSettingsForm"));
const AppearanceSettingsForm = React.lazy(
  () => import("@/components/UI/forms/AppearanceSettingsForm/AppearanceSettingsForm")
);
const CustomDomain = React.lazy(() => import("@/components/UI/forms/CustomDomain/CustomDomain"));

const Layout: FC = () => {
  const { PopUpSettingsType, setMainRoot, setAuthorized, setMenuLinks } = useContext(GlobalContext);

  useEffect(() => {
    setMainRoot("/");
    setAuthorized(true);
    setMenuLinks([
      { text: "Workspaces", url: "/client" },
      { text: "Profile", url: "/client/profile" },
      { text: "Logout", url: "", click: () => setAuthorized(false) },
    ]);
  }, []);

  return (
    <div className="layout">
      <Suspense fallback={<></>}>
        <PopUpSettings>
          {PopUpSettingsType === "email" && <EmailSettingsForm formTitle="Email settings" />}
          {PopUpSettingsType === "general" && <GeneralSettingsForm formTitle="General settings" />}
          {PopUpSettingsType === "appearance" && <AppearanceSettingsForm formTitle="Appearance" />}
          {PopUpSettingsType === "domain" && <CustomDomain formTitle="Custom domain" />}
        </PopUpSettings>
      </Suspense>

      <Suspense fallback={<></>}>
        <Header useOption={false} />
      </Suspense>

      <div className="pageContainer">
        <Suspense fallback={<></>}>
          <AsideMenu />
        </Suspense>

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
