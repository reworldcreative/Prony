import React, { FC, Suspense, useContext, useEffect } from "react";
import "./ClientLayout.scss";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import ClientAsideMenu from "../ClientAsideMenu/ClientAsideMenu";
// import PopUp from "../PopUp/PopUp";
const PopUp = React.lazy(() => import("../PopUp/PopUp"));
const ClientAsideMenu = React.lazy(() => import("../ClientAsideMenu/ClientAsideMenu"));
// const Header = React.lazy(() => import("../Header/Header"));
const Footer = React.lazy(() => import("../Footer/Footer"));
// const Breadcrumbs = React.lazy(() => import("../Breadcrumbs/Breadcrumbs"));

const ClientLayout: FC = () => {
  const { breadcrumbsLinks, breadcrumbsTitles, popUpData, setMainRoot, setAuthorized, setMenuLinks } =
    useContext(GlobalContext);

  useEffect(() => {
    setMainRoot("/client");
    setAuthorized(false);
    setMenuLinks([
      { text: "Workspaces", url: "/client" },
      { text: "Profile", url: "/client/profile" },
      { text: "Logout", url: "", click: () => setAuthorized(false) },
    ]);
  }, []);

  return (
    <>
      <Suspense fallback={<></>}>
        <PopUp addClass="clientPopUp">{popUpData}</PopUp>
      </Suspense>

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
            <Suspense fallback={<></>}>
              <ClientAsideMenu />
            </Suspense>

            <main className="pageContainer__main clientPageContainer__main">
              <Suspense fallback={<></>}>
                <Outlet />
              </Suspense>
            </main>
          </div>
        </div>

        <Suspense fallback={<></>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default ClientLayout;
