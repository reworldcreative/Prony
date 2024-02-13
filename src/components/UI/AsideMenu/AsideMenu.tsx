import React, { FC } from "react";
import "./AsideMenu.scss";
import asideDashboardIcon from "@/assets/img/icons/asideMenu/asideDashboard.svg";
const AsideMenu: FC = () => {
  return (
    <aside className="asideMenu">
      <nav>
        <a href="#" className="asideMenu__link subtitle-second">
          <img
            src={asideDashboardIcon}
            alt="settings"
            width={20}
            height={17}
            aria-hidden="true"
            className="asideMenu__icon"
          />
          Dashboard
        </a>
      </nav>
    </aside>
  );
};

export default AsideMenu;
