import React, { FC, Suspense, useContext, useEffect } from "react";
import "./ClientLayout.scss";
import "./WorkspaceLayout.scss";
import PopUp from "../PopUp/PopUp";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const WorkspaceLayout: FC = () => {
  const {
    breadcrumbsLinks,
    setBreadcrumbsLinks,
    breadcrumbsTitles,
    setBreadcrumbsTitles,
    isOpenPopUp,
    setOpenPopUp,
    popUpData,
    setPopUpData,
    mainRoot,
    setMainRoot,
    authorized,
    setAuthorized,
    menuLinks,
    setMenuLinks,
  } = useContext(GlobalContext);

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
      <PopUp addClass="clientPopUp">{popUpData}</PopUp>

      <div className="client-layout workspace-layout">
        <div className="client-layout__wrapper workspace-layout">
          <Header useOption={true} />

          <div className="pageContainer clientPageContainer">
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

export default WorkspaceLayout;
