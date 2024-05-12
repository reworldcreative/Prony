import React, { FC, Suspense, useContext, useEffect } from "react";
import "./ClientLayout.scss";
import "./WorkspaceLayout.scss";
// import PopUp from "../PopUp/PopUp";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/GlobalContext";
const PopUp = React.lazy(() => import("../PopUp/PopUp"));
// const Header = React.lazy(() => import("../Header/Header"));
const Footer = React.lazy(() => import("../Footer/Footer"));

const WorkspaceLayout: FC = () => {
  const { popUpData, setAuthorized, setMenuLinks } = useContext(GlobalContext);

  useEffect(() => {
    setMenuLinks([
      { text: "Workspaces", url: "/client" },
      { text: "Changelog", url: "/workspace/changelog" },
      { text: "Boards", url: "/workspace/boards" },
      { text: "Profile", url: "/client/profile" },
      { text: "Logout", url: "", click: () => setAuthorized(false) },
    ]);
  }, []);

  return (
    <>
      <Suspense fallback={<></>}>
        <PopUp addClass="clientPopUp">{popUpData}</PopUp>
      </Suspense>

      <div className="client-layout workspace-layout">
        <div className="client-layout__wrapper workspace-layout__wrapper">
          <Header useOption={true} />

          <main className="pageContainer__main clientPageContainer__main workspace-layout__container">
            <Suspense fallback={<></>}>
              <Outlet />
            </Suspense>
          </main>
        </div>

        <Suspense fallback={<></>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default WorkspaceLayout;
